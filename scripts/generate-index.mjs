import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import matter from 'gray-matter';

const ARTICLES_DIR = path.resolve(process.cwd(), 'articles');
const OUTPUT_FILE = path.join(ARTICLES_DIR, 'index.json');
const EXCLUDE = new Set(['README.md', 'View.md']);

// ─── Helpers ───────────────────────────────────────────

/**
 * Strip smart/curly quotes (U+201C-201F, U+2018-201B) but preserve
 * straight quotes (apostrophes, straight double quotes).
 * Matches the existing manifest's sanitization behavior.
 */
function stripSmartQuotes(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/[“”„‟]/g, '')
    .replace(/[‘’‚‛]/g, "'")
    .trim()
    .replace(/\s{2,}/g, ' ');
}

/**
 * Extract the first markdown image URL from the body, strip smart quotes,
 * and normalise relative URLs to absolute.
 */
function extractImage(body) {
  const m = body.match(/!\[.*?\]\((.*?)\)/);
  if (!m) return '';
  let url = m[1].trim().replace(/[“”„‟‘’‚‛]/g, '');
  if (url.startsWith('/')) url = 'https://redoracle.com' + url;
  return url;
}

/**
 * Extract description from the body:
 * 1. Look for "## Introduction" section → first 200 Unicode code points
 * 2. Otherwise first paragraph → first 200 Unicode code points
 * Strip markdown syntax, collapse whitespace.
 */
function extractDescription(body) {
  const introMatch = body.match(/^##\s*Introduction\s*\n\n([\s\S]*?)(?=\n\n##|\n\n\*\*|$)/im);
  let text = '';
  if (introMatch) {
    text = introMatch[1];
  } else {
    const paraMatch = body.match(/\n\n([\s\S]*?)(?=\n\n|$)/);
    text = paraMatch ? paraMatch[1] : body;
  }

  text = text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return '';

  const chars = Array.from(text);
  if (chars.length > 200) {
    return chars.slice(0, 200).join('') + '…';
  }
  return text;
}

/**
 * Stable serialisation: JSON.stringify with 2-space indent.
 * The revision field is NOT included in the payload.
 */
function stableSerialize(obj) {
  return JSON.stringify(obj, null, 2);
}

// ─── Main ──────────────────────────────────────────────

function main() {
  const files = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md') && !EXCLUDE.has(f))
    .sort();

  const articles = [];

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data: fm, content: body } = matter(raw);

    const slug = file.replace(/\.md$/, '');

    // Title: strip smart quotes, preserve straight quotes
    const title = stripSmartQuotes(String(fm.title || slug));

    // Date: preserve as YYYY-MM-DD string
    const dateRaw = fm.date;
    const date = dateRaw instanceof Date
      ? dateRaw.toISOString().split('T')[0]
      : String(dateRaw || '');

    // ID: from frontmatter (strip smart quotes) or fallback slug-date
    const id = fm.id
      ? stripSmartQuotes(String(fm.id))
      : `${slug}-${date}`;

    // Categories: preserve as array, strip smart quotes from each
    const categories = Array.isArray(fm.categories)
      ? fm.categories.map(c => stripSmartQuotes(String(c))).filter(Boolean)
      : typeof fm.categories === 'string'
        ? fm.categories.split(',').map(s => stripSmartQuotes(s.trim())).filter(Boolean)
        : [];

    // Tags: preserve as array, strip smart quotes from each
    const tags = Array.isArray(fm.tags)
      ? fm.tags.map(t => stripSmartQuotes(String(t))).filter(Boolean)
      : typeof fm.tags === 'string'
        ? fm.tags.replace(/^\[|\]$/g, '').split(',').map(s => stripSmartQuotes(s.trim())).filter(Boolean)
        : [];

    // URL: canonical
    const url = `https://redoracle.com/News/${slug}.html`;

    // Image: extract from body, strip smart quotes, normalise relative
    const image = extractImage(body);

    // datePublished: optional, extract from head JSON-LD if present
    let datePublished;
    const headBlock = fm.head;
    if (Array.isArray(headBlock)) {
      for (const item of headBlock) {
        if (Array.isArray(item) && item[0] === 'script' && item[1]?.type === 'application/ld+json') {
          const jsonStr = item[2];
          try {
            const jsonld = typeof jsonStr === 'string' ? JSON.parse(jsonStr) : jsonStr;
            if (jsonld?.datePublished) {
              datePublished = String(jsonld.datePublished);
            }
          } catch { /* ignore parse errors */ }
        }
      }
    }

    // Description: from frontmatter or extract from body
    const description = fm.description
      ? Array.from(String(fm.description)).slice(0, 200).join('')
      : extractDescription(body);

    // Reading time
    const words = body.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(1, Math.round(words / 200));

    // Content hash: SHA-256 of exact file bytes
    const fileBytes = fs.readFileSync(filePath);
    const contentHash = 'sha256:' + crypto.createHash('sha256').update(fileBytes).digest('hex');

    // Construct article object with FIXED key order
    const article = {
      slug,
      file,
      title,
      description,
      date,
    };
    if (datePublished !== undefined) {
      article.datePublished = datePublished;
    }
    article.id = id;
    article.categories = categories;
    article.tags = tags;
    article.url = url;
    article.image = image;
    article.readingTime = readingTime;
    article.contentHash = contentHash;

    articles.push(article);
  }

  // Sort by date desc, then slug asc
  articles.sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return a.slug.localeCompare(b.slug);
  });

  // Build payload WITHOUT revision
  const payload = {
    schemaVersion: 1,
    source: 'https://redoracle.com',
    total: articles.length,
    articles,
  };

  // Compute revision from payload (excluding revision itself)
  const canonicalPayload = stableSerialize(payload);
  const revision = 'sha256:' + crypto.createHash('sha256').update(canonicalPayload).digest('hex');

  // Build final manifest WITH revision
  const manifest = {
    schemaVersion: 1,
    source: 'https://redoracle.com',
    revision,
    total: articles.length,
    articles,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`[generate-index] Wrote ${articles.length} articles to ${OUTPUT_FILE}`);
  console.log(`[generate-index] Revision: ${revision}`);
}

main();
