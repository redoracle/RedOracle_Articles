---
title: "PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now"
date: "2026-10-24"
description: "PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now"
tags: ["2026", "109618", "109619", "critical", "php2shell", "alert", "responding", "core", "vulnerabilities", "respond"]
schema-type: "NewsArticle"
---

![PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now](https://storage.googleapis.com/red_articles/php2shell-ai-found-the-bug-hiding-in-70-of-the-web-millions-attacked.avif)

# PHP2Shell: Artificial Intelligence Discovers Critical Vulnerabilities Impacting Millions of PHP Servers

## At a glance

Two critical PHP vulnerabilities, [CVE-2026-109618](https://www.cve.org/CVERecord?id=CVE-2026-109618) and [CVE-2026-109619](https://www.cve.org/CVERecord?id=CVE-2026-109619), collectively known as PHP2Shell, have been discovered by artificial intelligence. These flaws, rated 9.2 on the CVSS scale, can lead to remote code execution and impact millions of PHP servers worldwide.

## What happened

On October 21, 2026, the PHP security team released PHP 8.5.12, 8.4.27, 8.3.36, and 8.2.35 to address two critical vulnerabilities. These flaws, [CVE-2026-109618](https://www.cve.org/CVERecord?id=CVE-2026-109618) and [CVE-2026-109619](https://www.cve.org/CVERecord?id=CVE-2026-109619), were discovered by artificial intelligence and can allow unauthenticated remote code execution. The vulnerabilities affect all PHP implementations that process web requests, including php-fpm and Apache's mod_php.

## Why it matters

The critical rating of these vulnerabilities, with a CVSS score of 9.2, indicates that they can have severe consequences. Threat actors can exploit these flaws to crash and hijack affected systems, steal, alter, and wipe data. The widespread use of PHP in websites, content management systems, and web applications makes these vulnerabilities particularly concerning.

## Technical details

[CVE-2026-109618](https://www.cve.org/CVERecord?id=CVE-2026-109618) occurs when out-of-memory handling interrupts PHP while internal request data is only partially initialized. This can lead to request cleanup treating the invalid data as valid. [CVE-2026-109619](https://www.cve.org/CVERecord?id=CVE-2026-109619) happens when request-owned internal state survives after its backing memory has been freed. A later request handled by the same worker may use this stale state before normal initialization resets it.

## What defenders should do

Administrators and developers should immediately update their PHP installations to the latest versions. They should also monitor for any signs of exploitation and take appropriate measures to secure their systems.

## What remains unknown

While the PHP security team has provided patches and mitigation steps, the full extent of the impact and potential exploitation methods are still being investigated. It is crucial for the community to remain vigilant and share information as more details emerge.
## References

1. <a id="ref-1"></a>[Responding to core PHP vulnerabilities CVE-2026-109618 and CVE-2026-109619](https://cloud.google.com/blog/products/identity-security/responding-to-core-php-vulnerabilities-cve-2026-109618-cve-2026-109619), cloud.google.com
2. <a id="ref-2"></a>[How to respond to the critical PHP vulnerability 'PHP2Shell' (CVE-2026-109618, CVE-2026-109619), Interim measures until a patch is available and prioritizi…](https://note.com/offrel/n/nb4539b97ef6b?hl=en), note.com
3. <a id="ref-3"></a>[PHP2Shell Alert: Two Critical 9.2-Rated Flaws Put PHP Servers on High Alert](https://the420.in/php2shell-critical-vulnerabilities-cve-2026-109618-cve-2026-109619/), the420.in


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now",
  "datePublished": "2026-10-24",
  "author": {
    "@type": "Organization",
    "name": "RedOracle"
  },
  "publisher": {
    "@type": "Organization",
    "name": "RedOracle"
  }
}
</script>
