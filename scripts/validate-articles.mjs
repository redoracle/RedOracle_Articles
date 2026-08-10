import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ARTICLES_DIR = path.resolve(process.cwd(), 'articles');
const MANIFEST_FILE = path.join(ARTICLES_DIR, 'index.json');
const EXCLUDE = new Set(['README.md', 'View.md']);

const errors = [];
function fail(msg) { errors.push(msg); }
function ok(msg) { /* silent on success */ }

// ─── Stable serialisation (must match generator) ───────
function stableSerialize(obj) {
  return JSON.stringify(obj, null, 2);
}

// ─── Smart quote stripping (must match generator) ──────
function stripSmartQuotes(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/[""„‟]/g, '')
    .replace(/[''‚‛]/g, "'")
    .trim()
    .replace(/\s{2,}/g, ' ');
}

function main() {
  // 1. Load manifest
  if (!fs.existsSync(MANIFEST_FILE)) {
    fail('articles/index.json not found');
    printResult();
    return;
  }

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8'));
  } catch (e) {
    fail(`Malformed JSON: ${e.message}`);
    printResult();
    return;
  }

  // 2. Check top-level required fields
  if (manifest.schemaVersion !== 1) fail(`schemaVersion must be 1, got ${manifest.schemaVersion}`);
  if (manifest.source !== 'https://redoracle.com') fail(`source must be https://redoracle.com, got ${manifest.source}`);
  if (typeof manifest.revision !== 'string' || !/^sha256:[0-9a-f]{64}$/.test(manifest.revision))
    fail(`revision must match sha256:[64hex], got ${manifest.revision}`);
  if (typeof manifest.total !== 'number') fail(`total must be number, got ${typeof manifest.total}`);
  if (!Array.isArray(manifest.articles)) fail('articles must be an array');

  // 3. Check total matches articles length
  if (manifest.total !== manifest.articles.length)
    fail(`total (${manifest.total}) !== articles.length (${manifest.articles.length})`);

  // 4. Independently enumerate files
  const diskFiles = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md') && !EXCLUDE.has(f))
    .sort();
  
  const manifestFiles = manifest.articles.map(a => a.file).sort();
  
  // Check file set matches
  const diskSet = new Set(diskFiles);
  const manifestSet = new Set(manifestFiles);
  
  for (const f of diskFiles) {
    if (!manifestSet.has(f)) fail(`File on disk but not in manifest: ${f}`);
  }
  for (const f of manifestFiles) {
    if (!diskSet.has(f)) fail(`File in manifest but not on disk: ${f}`);
  }

  // 5. Check for duplicates
  const seenSlugs = new Set();
  const seenFiles = new Set();
  const seenIds = new Set();
  const seenUrls = new Set();

  for (const article of manifest.articles) {
    // Required fields
    const required = ['slug', 'file', 'title', 'description', 'date', 'id', 'categories', 'tags', 'url', 'image', 'readingTime', 'contentHash'];
    for (const field of required) {
      if (!(field in article)) {
        fail(`Missing required field '${field}' in ${article.file || 'unknown'}`);
      }
    }

    // Duplicate checks
    if (article.slug) {
      if (seenSlugs.has(article.slug)) fail(`Duplicate slug: ${article.slug}`);
      seenSlugs.add(article.slug);
    }
    if (article.file) {
      if (seenFiles.has(article.file)) fail(`Duplicate file: ${article.file}`);
      seenFiles.add(article.file);
    }
    if (article.id) {
      if (seenIds.has(article.id)) fail(`Duplicate id: ${article.id}`);
      seenIds.add(article.id);
    }
    if (article.url) {
      if (seenUrls.has(article.url)) fail(`Duplicate url: ${article.url}`);
      seenUrls.add(article.url);
    }

    // Safe filename check
    if (article.file && !/^[A-Za-z0-9._-]+\.md$/.test(article.file)) {
      fail(`Unsafe filename: ${article.file}`);
    }

    // Slug check
    if (article.slug && !/^[A-Za-z0-9._-]+$/.test(article.slug)) {
      fail(`Unsafe slug: ${article.slug}`);
    }

    // Date syntax
    if (article.date && !/^\d{4}-\d{2}-\d{2}$/.test(article.date)) {
      fail(`Invalid date format in ${article.file}: ${article.date}`);
    }

    // datePublished syntax (optional)
    if (article.datePublished !== undefined) {
      if (typeof article.datePublished !== 'string' || article.datePublished.length === 0) {
        fail(`Invalid datePublished in ${article.file}: ${article.datePublished}`);
      }
    }

    // Canonical URL format
    const expectedUrl = `https://redoracle.com/News/${article.slug}.html`;
    if (article.url !== expectedUrl) {
      fail(`URL mismatch in ${article.file}: expected ${expectedUrl}, got ${article.url}`);
    }

    // contentHash verification
    if (article.file && article.contentHash) {
      const filePath = path.join(ARTICLES_DIR, article.file);
      if (fs.existsSync(filePath)) {
        const fileBytes = fs.readFileSync(filePath);
        const expectedHash = 'sha256:' + crypto.createHash('sha256').update(fileBytes).digest('hex');
        if (article.contentHash !== expectedHash) {
          fail(`contentHash mismatch in ${article.file}: expected ${expectedHash}, got ${article.contentHash}`);
        }
      }
    }

    // readingTime check
    if (typeof article.readingTime !== 'number' || article.readingTime < 1) {
      fail(`Invalid readingTime in ${article.file}: ${article.readingTime}`);
    }
  }

  // 6. Check sort order (date desc, then slug asc)
  for (let i = 1; i < manifest.articles.length; i++) {
    const prev = manifest.articles[i - 1];
    const curr = manifest.articles[i];
    const dateCmp = curr.date.localeCompare(prev.date);
    if (dateCmp > 0) {
      fail(`Sort order violation at index ${i}: ${curr.file} (${curr.date}) should be before ${prev.file} (${prev.date})`);
    } else if (dateCmp === 0 && curr.slug.localeCompare(prev.slug) < 0) {
      fail(`Sort order violation at index ${i}: ${curr.slug} should be before ${prev.slug} (same date)`);
    }
  }

  // 7. Verify revision (exclude revision from payload, recompute)
  const { revision, ...payload } = manifest;
  const canonicalPayload = stableSerialize(payload);
  const expectedRevision = 'sha256:' + crypto.createHash('sha256').update(canonicalPayload).digest('hex');
  if (revision !== expectedRevision) {
    fail(`Revision mismatch: expected ${expectedRevision}, got ${revision}`);
  }

  printResult();
}

function printResult() {
  if (errors.length === 0) {
    console.log('[validate-articles] PASS — manifest is valid');
    process.exit(0);
  } else {
    console.error(`[validate-articles] FAIL — ${errors.length} error(s):`);
    for (const e of errors) {
      console.error(`  ✗ ${e}`);
    }
    process.exit(1);
  }
}

main();
