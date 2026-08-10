# Contributing to RedOracle Articles

Thank you for your interest in contributing to RedOracle Articles. We welcome corrections, improvements, and suggestions from the security community.

## Ways to Contribute

| Contribution Type | How |
|---|---|
| **Report a factual error** | Open an issue using the *Content Correction* template |
| **Suggest an article topic** | Open an issue using the *Article Request* template |
| **Fix a typo or formatting** | Open a pull request |
| **Update outdated information** | Open a pull request with updated content and sources |
| **Improve repository tooling** | Open a pull request with your proposed changes |

---

## Getting Started

### 1. Fork & Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/RedOracle_Articles.git
cd RedOracle_Articles
```

### 2. Create a Branch

```bash
git checkout -b fix/article-correction
```

Use a descriptive branch name:
- `fix/` — corrections to existing articles
- `add/` — new articles
- `docs/` — documentation improvements
- `chore/` — maintenance tasks

### 3. Make Your Changes

- For **corrections**: edit the relevant file(s) in `articles/`
- For **new articles**: create a new `.md` file in `articles/` following the [article format](./README.md#article-format)

### 4. Verify Your Changes

Before submitting, ensure:

- [ ] Frontmatter is complete and valid YAML
- [ ] Article ID follows the `Title-With-Dashes-YYYY-MM-DD` format
- [ ] JSON-LD structured data block is present and valid
- [ ] All links work and sources are credited
- [ ] No sensitive or confidential information is included
- [ ] Content is accurate and supported by authoritative sources

### 5. Commit & Push

```bash
git add .
git commit -m "fix: correct CVE ID in Critical-Cisco-AnyConnect-Vulnerability-Remote-Access-Threat"
git push origin fix/article-correction
```

### 6. Open a Pull Request

Open a PR against the `main` branch. Fill out the PR template completely.

---

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear, parseable history:

| Type | Use For | Example |
|---|---|---|
| `fix:` | Corrections to existing articles | `fix: correct CVE ID in Cisco article` |
| `feat:` | New articles | `feat: add article on Zero Trust architecture` |
| `docs:` | README, CONTRIBUTING, etc. | `docs: update README article count` |
| `chore:` | Maintenance, CI, tooling | `chore: add .gitignore for .DS_Store` |
| `style:` | Formatting, typo fixes | `style: fix markdown formatting in article` |
| `refactor:` | Restructuring without content change | `refactor: standardize frontmatter fields` |

### Scope (optional but recommended)

Include the article name as a scope for clarity:

```
fix(cisco-anyconnect): correct CVE ID in Critical-Cisco-AnyConnect-Vulnerability
feat(zero-trust): add article on Zero Trust vulnerabilities
```

---

## Article Guidelines

### Content Standards

1. **Accuracy**: All claims must be verifiable. Cite authoritative sources (CVE entries, vendor advisories, official reports).
2. **Objectivity**: Present facts without sensationalism. Avoid clickbait titles.
3. **Clarity**: Write for a technical audience. Define acronyms on first use.
4. **Originality**: Content must be original or properly attributed. Do not plagiarize.
5. **Responsibility**: All content must be framed within authorized security work. Do not include active exploit code or instructions for attacking specific targets.

### Frontmatter Requirements

Every article must include:

```yaml
title: Article Title          # Required — human-readable title
tags: [tag1, tag2, tag3]      # Required — lowercase, relevant tags
categories: [News]            # Required — News, Events, etc.
date: 2025-08-16              # Required — ISO 8601 date
id: Article-Title-2025-08-16  # Required — unique identifier
```

### Tag Taxonomy

Use existing tags where possible. Common tags include:

`data breach`, `vulnerability`, `cyber threats`, `ransomware`, `identity theft`, `personal information`, `data protection`, `incident response`, `national security`, `malware`, `phishing`, `data theft`, `privacy`, `espionage`, `infrastructure`, `fraud`, `exploitation`, `threat detection`, `legislation`, `cybersecurity`, `artificial intelligence`, `AI`

If introducing a new tag, ensure it's lowercase and descriptive.

---

## Review Process

1. **Automated checks**: PR validation runs on all submissions
2. **Content review**: A RedOracle team member reviews the content for accuracy, style, and completeness
3. **Approval**: At least one approval from a [CODEOWNERS](./CODEOWNERS) member is required
4. **Merge**: PRs are squash-merged into `main`

### Review Criteria

- Factual accuracy with cited sources
- Consistency with existing article format
- No security-sensitive information (active exploits, credentials, internal IPs)
- Appropriate categorization and tagging
- Clear, professional writing

---

## Code of Conduct

By participating in this repository, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please be respectful and constructive in all interactions.

---

## Questions?

- Open an [issue](https://github.com/redoracle/RedOracle_Articles/issues) for repository-related questions
- Visit [redoracle.com](https://redoracle.com) for more about RedOracle

---

**AI supports the process. Expertise guides the outcome.**

© RedOracle. Not affiliated with Oracle Corporation.
