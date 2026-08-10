---
title: Test Rehearsal Article
date: 2026-08-10
category: News
tags:
  - Testing
  - CI/CD
  - Publication Rehearsal
---

# Test Rehearsal Article

This is a publication rehearsal article created to verify that new articles
can be published to the RedOracle website without requiring a website rebuild.

## Verification Criteria

1. Article appears in the remote manifest (`articles/index.json`)
2. Article is listed on the `/News/` page (via SWR manifest client)
3. Article loads at the canonical URL `/News/Test-Rehearsal-Article.html`
4. Article content is fetched from GitHub Raw via the API proxy
5. Article is searchable via the SlimSearch news enhancer
6. No website rebuild was triggered or required

## Conclusion

If you can read this article on the RedOracle website, the publication
rehearsal is successful. The article was added to the `RedOracle_Articles`
repository, the manifest was regenerated deterministically, and the
website discovered it at runtime through the GitHub Raw CDN.
