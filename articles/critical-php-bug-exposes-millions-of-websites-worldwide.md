---
title: "Critical PHP Bug Exposes Millions of Websites Worldwide"
date: "2026-10-25"
description: "Critical PHP Bug Exposes Millions of Websites Worldwide"
tags: ["2026", "critical", "vulnerabilities", "websites", "109618", "109619", "vulnerability", "identified", "disclosed", "security"]
schema-type: "NewsArticle"
---

![Critical PHP Bug Exposes Millions of Websites Worldwide](https://storage.googleapis.com/red_articles/critical-php-bug-exposes-millions-of-websites-worldwide.avif)

# Critical PHP Bug Exposes Millions of Websites Worldwide

## At a glance
Two critical vulnerabilities in PHP, identified as [CVE-2026-109618](https://www.cve.org/CVERecord?id=CVE-2026-109618) and [CVE-2026-109619](https://www.cve.org/CVERecord?id=CVE-2026-109619), have been disclosed. These vulnerabilities could potentially allow attackers to run malicious code on vulnerable servers. Given that PHP powers a large percentage of the internet, millions of websites could be at risk if administrators fail to install emergency patches.

## What happened
Security researchers recently disclosed two severe vulnerabilities, collectively known as "PHP2Shell," that could let attackers remotely execute code on affected servers without authentication. The discovery has already led to bad actors taking advantage of the vulnerability, precautionary website shutdowns, and a global cybersecurity response.

## Why it matters
The vulnerabilities carry a critical severity score of 9.2 out of 10 under the CVSS 4.0 rating system. Successful exploitation could expose passwords, authentication tokens, API keys, and other sensitive information held in server memory. Because PHP underpins widely used platforms such as WordPress, Drupal, and Joomla, the breadth of PHP's use makes this a serious concern for organizations operating public-facing websites.

## Technical details
The vulnerability exists within PHP's core multipart parser. PHP's developers released emergency fixes on October 21 for these critical flaws that can let an attacker run code on a web server without logging in. The bugs, known as 'PHP2Shell', affect software that runs a large share of the web.

## What defenders should do
Updating is the only complete fix, according to Qualys. Companies on shared hosting should ask their provider which PHP version they run. Sites on PHP 8.1 or older must upgrade immediately. The PHP security team has scheduled an emergency update for October 21, 2026, at 7:30 PM IST.

## What remains unknown
No Indian victims have been identified yet. The actual exposure depends on the PHP version, server configuration, and execution environment. The full extent of the damage and the number of affected websites are still unknown.
## References

1. <a id="ref-1"></a>[Critical PHP Bug Exposes Millions of Websites Worldwide](https://www.patheos.com/blogs/faith4today/2026/10/critical-php-bug-exposes-millions-of-websites-worldwide/), patheos.com
2. <a id="ref-2"></a>[PHP vulnerability exposes 85 government websites to cyber attacks](https://www.sundaytimes.lk/261025/news/php-vulnerability-exposes-85-government-websites-to-cyber-attacks-662062.html), sundaytimes.lk
3. <a id="ref-3"></a>[PHP Vulnerability: What Websites, CMS Platforms & Servers Are Affected and Fix](https://homeland411.com/php-vulnerability-affected-websites-cms-servers-fix/), homeland411.com
4. <a id="ref-4"></a>[70% Websites At Security Risk Due To Critical PhP Vulnerability: PHP2Shell](https://trak.in/stories/70-websites-at-security-risk-due-to-critical-php-vulnerability-php2shell/), trak.in
5. <a id="ref-5"></a>[A critical PHP vulnerability may take websites down today](https://www.theverge.com/tech/1015257/php-vulnerability-patch-website-security-wordpress), theverge.com
6. <a id="ref-6"></a>[PHP Security Flaw: Which Indian Websites Are Affected?](https://www.freepressjournal.in/tech/php-security-flaw-which-indian-websites-are-affected), freepressjournal.in
7. <a id="ref-7"></a>[Two critical PHP security flaws leak online, millions of websites at Risk](https://www.news9live.com/technology/tech-news/php-critical-security-flaws-leaked-remote-code-execution-websites-3017854), news9live.com
8. <a id="ref-8"></a>[Critical PHP RCE Vulnerability: Is Your Website a Ticking Time Bomb?](https://www.thetechedvocate.org/critical-php-rce-vulnerability-is-your-website-a-ticking-time-bomb/), thetechedvocate.org


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Critical PHP Bug Exposes Millions of Websites Worldwide",
  "datePublished": "2026-10-25",
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
