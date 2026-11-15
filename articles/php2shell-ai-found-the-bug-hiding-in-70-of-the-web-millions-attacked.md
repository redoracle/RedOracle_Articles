---
title: "PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now"
date: "2026-11-15"
lastUpdated: "2026-11-15"
dateModified: "2026-11-15"
description: "PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now"
tags: ["servers", "list", "korean", "south", "korea", "lazarus", "targets", "cyfirma", "linked", "group"]
schema-type: "NewsArticle"
---

![PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now](https://storage.googleapis.com/red_articles/php2shell-ai-found-the-bug-hiding-in-70-of-the-web-millions-attacked.avif)

# North Korea's Lazarus Group Targets 30 South Korean Servers via PHP Vulnerability

## At a glance

In late October 2026, the threat intelligence firm Cyfirma revealed that hackers associated with the Lazarus Group ecosystem compiled a target list focusing on vulnerable servers globally, including 30 servers and domains in South Korea [1, 2, 4]. The compromised list includes systems in key sectors like government, finance, telecommunications, and critical infrastructure [1, 2, 3].

The threat actors identified these targets by exploiting remote code execution vulnerabilities in the PHP core, specifically tracked as [CVE-2026-109618](https://www.cve.org/CVERecord?id=CVE-2026-109618) and [CVE-2026-109619](https://www.cve.org/CVERecord?id=CVE-2026-109619) [[2](#ref-2)]. Cyfirma assessed with high confidence that the compiled list was created by hackers linked to the Lazarus Group ecosystem, who operate with the dual objectives of financial gain and espionage [1, 2].

## What happened

In early November 2026, Cyfirma released a report analyzing recent scanning and scouting activities linked to threat actors in North Korea [4, 5]. The analysis uncovered a list of potential cyberattack targets compiled by Korean speaking hackers, completed on October 24, 2026 [1, 2, 7]. Out of 216 exposed servers across 10 countries included on the list, 30 servers and domains are located in South Korea [4, 5].

The geographic distribution shows that the hackers concentrated their efforts primarily in the Asia Pacific region, which accounted for 148 targets [1, 2]. North America followed with 49 servers, and the Middle East had 19 [1, 2]. Together, the United States and Japan accounted for 44.4 percent of the listed servers, representing 49 and 47 locations respectively [1, 2, 5]. India was also heavily targeted with 31 servers [[1](#ref-1)].

Transcripts of conversation logs from closed channels on the dark web, captured on October 28, 2026, exposed the strategic intentions and target selection process of the group [4, 5]. Hackers exchanged scan results and remarked that IP ranges in South Korea, Japan, the United States, Thailand, Indonesia, and parts of India looked promising [4, 5]. To execute their plan, the threat actors deployed additional scan nodes against these ranges [4, 5]. Their operations targeted PHP based web servers across seven major industry sectors: government agencies, financial institutions, telecommunications, critical infrastructure, logistics and aviation, manufacturing, and online transaction platforms [4, 5]. Cyfirma analyzed these activities, concluding with high confidence that the actors are linked to the Lazarus Group ecosystem, which is associated with North Korea's Reconnaissance General Bureau [4, 6].

## Confirmed impact

To date, investigators have not confirmed any successful compromises among the 30 South Korean servers on the target list [[2](#ref-2)]. Cyfirma emphasized that the inclusion of a server or domain on this list does not mean that a system has been breached [1, 2]. Instead, the list reflects the early stages of an offensive, during which the threat actors successfully mapped out vulnerable servers for future exploitation [1, 2].

If the threat actors execute their plan, the impact could be widespread [4, 5]. Because the targets sit within critical sectors, successful intrusions could result in large scale data theft, intelligence gathering, or financial drain [4, 5]. In private communications, the hackers also asserted that their operations are growing, claiming to have expanded their scan list to cover 581 hosts [[1](#ref-1)].

## How the attack worked

The offensive strategy centers on exploiting remote code execution vulnerabilities in the PHP core, specifically [CVE-2026-109618](https://www.cve.org/CVERecord?id=CVE-2026-109618) and [CVE-2026-109619](https://www.cve.org/CVERecord?id=CVE-2026-109619) [6, 9]. These flaws allow threat actors to execute commands remotely on target servers running PHP on Windows operating systems [[3](#ref-3)].

To compile their list of 216 targets, the hackers used 21 compromised scan nodes [[2](#ref-2)]. Rather than launching massive scanning campaigns that would trigger defensive alerts, the threat actors carried out low frequency scanning with reduced request volumes and adjusted speeds [[2](#ref-2)]. According to Cyfirma, this low frequency approach allowed them to remain unnoticed because conventional threshold alerts do not easily register such activity [[2](#ref-2)]. If the threat actors detected that a scanning node was blocked or rate limited, they immediately swapped it for a fresh node to maintain stealth [[2](#ref-2)].

Additionally, the threat actors leveraged artificial intelligence to analyze publicly available exploit code, helping them find effective ways to target the PHP core vulnerabilities [[2](#ref-2)]. When the hackers locate a vulnerable web server, they attempt the PHP2Shell technique to install a web shell on the target system [4, 6]. By establishing this foothold, they aim to steal administrator credentials and high level accounts [5, 6]. From there, the attackers intend to move laterally across the internal networks of target organizations to expand their access and achieve their goals of financial theft and espionage [5, 6].

## What defenders should do

To secure affected environments against these tactics, experts stress that updating web applications alone is insufficient to address the underlying vulnerabilities [1, 2]. System administrators must focus directly on securing the core web infrastructure [1, 2].
## References

1. <a id="ref-1"></a>[North Korean Lazarus group targets 30 South Korean servers, exploiting PHP vulnerabilities](https://news.jkn.co.kr/editions/english/post/1094471), news.jkn.co.kr
2. <a id="ref-2"></a>[North Korea's Lazarus Targets 30 South Korean Servers via PHP Vulnerability, Aiming at Government and Finance](https://finance.biggo.com/news/9af7f27a-e8b3-4547-9dae-1de689c89a21), finance.biggo.com
3. <a id="ref-3"></a>[North Korea's Lazarus group targeted 30 servers in South Korea, report finds](https://biz.heraldcorp.com/article/10937289), biz.heraldcorp.com
4. <a id="ref-4"></a>[30 servers in South Korea added to hackers’ target list, Korea Herald](https://ua.news/en/dovkolo-svitu/30-serveriv-u-pivdennii-koreyi-potrapili-do-spisku-tsilei-khakeriv-korea-herald), ua.news
5. <a id="ref-5"></a>[N. Korea-linked hackers target 30 S. Korean servers: report](https://en.yna.co.kr/view/AEN20261115000400320), en.yna.co.kr
6. <a id="ref-6"></a>[North Korea's Lazarus Targets 30 Servers in South Korea](https://news.sbs.co.kr/english/article.do?news_id=N1008846828), news.sbs.co.kr
7. <a id="ref-7"></a>["South Korean IP Ranges Look Promising"... North Korea's Lazarus Targeted 30 Domestic Servers](https://news.sbs.co.kr/english/article.do?news_id=N1008846395), news.sbs.co.kr
8. <a id="ref-8"></a>[N. Korea-linked hackers target 30 S. Korean servers: report](https://www.koreatimes.co.kr/foreignaffairs/northkorea/20261115/north-korea-linked-hackers-target-30-south-korean-servers-report), koreatimes.co.kr
9. <a id="ref-9"></a>[N. Korea-linked hackers target 30 S. Korean servers: report](https://www.koreaherald.com/article/10937359), koreaherald.com

## Related articles

- [PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now](https://redoracle.com/News/php2shell-ai-found-the-bug-hiding-in-70-of-the-web-millions-attacked.html)
- [PHP2Shell: Mass Exploitation Looms for Leaked Critical PHP Flaws](https://redoracle.com/News/php2shell-mass-exploitation-looms-for-leaked-critical-php-flaws.html)
- [CISA, security researchers confirm successful exploitation of PHP flaws](https://redoracle.com/News/cisa-security-researchers-confirm-successful-exploitation-of-php-flaws.html)
- [Critical PHP Bug Exposes Millions of Websites Worldwide](https://redoracle.com/News/critical-php-bug-exposes-millions-of-websites-worldwide.html)
- [CVE-2026-123039: Check Point Gateways Rooted, ESXi Wiped](https://redoracle.com/News/cve-2026-123039-check-point-gateways-rooted-esxi-wiped.html)


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "PHP2Shell: AI found the bug hiding in 70% of the web. Millions attacked. Patch now",
  "datePublished": "2026-11-15",
  "author": {
    "@type": "Organization",
    "name": "RedOracle"
  },
  "publisher": {
    "@type": "Organization",
    "name": "RedOracle"
  },
  "dateModified": "2026-11-15"
}
</script>
