---
title: "Microsoft confirms Outlook outage across the Americas, potentially the globe, amid U.S. Cyber Security Agency’s discovery of Outlook vulnerability"
date: "2026-11-13"
lastUpdated: "2026-11-13"
dateModified: "2026-11-13"
description: "Microsoft confirms Outlook outage across the Americas, potentially the globe, amid U.S. Cyber Security Agency’s discovery of Outlook vulnerability"
tags: ["outlook", "microsoft", "vulnerability", "discovered", "2026", "flaw", "124194", "exploited", "anthropic", "hackers"]
schema-type: "NewsArticle"
---

![Microsoft confirms Outlook outage across the Americas, potentially the globe, amid U.S. Cyber Security Agency’s discovery of Outlook vulnerability](https://storage.googleapis.com/red_articles/microsoft-confirms-outlook-outage-across-the-americas-potentially-the.avif)

## At a glance

Microsoft Outlook vulnerability CVE‑2026‑124194 is a critical zero‑day currently exploited in the wild to steal Windows authentication credentials. The flaw allows attackers to harvest NTLMv2 hashes, which can be used for credential theft and potential NTLM relay attacks. Researchers discovered the issue using Anthropic's Claude AI, and the vulnerability has been added to CISA's Known Exploited Vulnerabilities (KEV) catalog with a remediation deadline of November 24, 2026. Security teams should prioritize this flaw alongside other actively exploited vulnerabilities, especially those exposed to the internet. [[1](#ref-1)] [[2](#ref-2)] [[3](#ref-3)] [[4](#ref-4)] [[5](#ref-5)]

## Affected systems

The vulnerability targets Microsoft Outlook across several product lines. Microsoft's public advisory lists Microsoft 365 Apps for Enterprise, Office LTSC 2024, and Office LTSC 2021 (both 32‑bit and 64‑bit editions) as impacted. The patched builds are 16.0.17932.21140 for LTSC 2024 and 16.0.14334.21048 for LTSC 2021. No specific guidance is provided for other editions, such as the Mac version. [[3](#ref-3)] [[4](#ref-4)]

## Vulnerability details

CVE‑2026‑124194 was identified by a researcher using Anthropic's Claude AI, marking a notable trend of AI‑assisted discovery. [[1](#ref-1)] The attack requires user interaction: an attacker sends a specially crafted message file and tricks the victim into opening it in Outlook. When the file is opened, Outlook may connect to an attacker‑controlled network location without displaying the usual external content warning. This missing warning removes a safety check, allowing the exposure of the victim's NTLMv2 hash and other authentication data. [[2](#ref-2)] [[4](#ref-4)]

Importantly, the Outlook Preview Pane is not an attack vector for this flaw, distinguishing it from earlier Outlook zero‑days that could be triggered without opening the file. This detail helps defenders avoid confusion with previous vulnerabilities, such as CVE‑2023‑23397 and the MonikerLink issue. [[4](#ref-4)]

## Exploitation status

Multiple independent sources confirm that CVE‑2026‑124194 is actively exploited in the wild. CISA added the flaw to its KEV catalog on November 10, 2026, citing confirmed exploitation events. [[3](#ref-3)] [[4](#ref-4)] The vulnerability's exploitation has been linked to credential theft campaigns that harvest NTLMv2 hashes for impersonation attacks. [[1](#ref-1)] The moderate severity rating should not outweigh the evidence of active exploitation when teams prioritize patching. [[4](#ref-4)]

## Mitigation and detection

Microsoft addressed the vulnerability in its November 2026 Patch Tuesday release, which fixed more than 1,000 security flaws across its portfolio, including 63 critical issues. The Outlook update is included in the November rollup and is available via regular Microsoft Update channels. [[2](#ref-2)] [[5](#ref-5)]

Administrators should verify that affected Office installations have been updated to the patched builds (16.0.14334.21048 for LTSC 2021 and 16.0.17932.21140 for LTSC 2024). Microsoft provides a security release guidance document to help identify the correct update for Microsoft 365 Apps deployments. [[2](#ref-2)] [[5](#ref-5)]

Detection efforts should focus on monitoring for unusual outbound connections from Outlook and watching for NTLMv2 hash leakage in logs. Organizations that cannot immediately apply the patch should consider temporarily disabling Outlook or restricting file opening from untrusted sources until the update is deployed. [[4](#ref-4)]
## References

1. <a id="ref-1"></a>[Microsoft November Patch Tuesday Fixes More Than 1,000 Flaws, Including Exploited Outlook Zero-Day](https://redmondmag.com/articles/2026/11/10/microsoft-november-patch-tuesday-fixes-more-than-1000-flaws.aspx), redmondmag.com
2. <a id="ref-2"></a>[November 2026 Patch Tuesday: 63 Critical Microsoft fixes, plus an Outlook zero day that allows theft of hashed credentials](https://www.csoonline.com/article/4247015/november-2026-patch-tuesday-63-critical-microsoft-fixes-plus-an-outlook-zero-day-that-allows-theft-of-hashed-credentials.html), csoonline.com
3. <a id="ref-3"></a>[Confirmed vulnerability in Outlook exploited; risk of credential leakage when opening message files. Leak from SMBC Nikko's employee stock ownership …](https://note.com/ai_sec_note/n/n2dacff21e09a?hl=en), note.com
4. <a id="ref-4"></a>[CISA Confirms Active Exploitation of Outlook User Interaction 0-Day Vulnerability](https://cybersecuritynews.com/active-exploitation-of-outlook-0-day-vulnerability/), cybersecuritynews.com
5. <a id="ref-5"></a>[Microsoft Patches 1,259 Flaws, Including Exploited Outlook Bug That May Expose NTLMv2 Hashes](https://thehackernews.com/2026/11/microsoft-patches-1259-flaws-including.html), thehackernews.com

## Related articles

- [Microsoft confirms Outlook outage across the Americas, potentially the globe, amid U.S. Cyber Security Agency’s discovery of Outlook vulnerability](https://redoracle.com/News/microsoft-confirms-outlook-outage-across-the-americas-potentially-the.html)
- [Daily Cybersecurity and Cyberattack Trend Watch (Execution Date: October 18, 2026)](https://redoracle.com/News/daily-cybersecurity-and-cyberattack-trend-watch-execution-date-october.html)
- [Google Patches Pixel Zero-Click Vulnerability Exploited In Targeted Attacks](https://redoracle.com/News/google-patches-pixel-zero-click-vulnerability-exploited-in-t.html)
- [Random meeting and event invites on your calendar could be a phishing attack. Here’s how to stay safe](https://redoracle.com/News/random-meeting-and-event-invites-on-your-calendar-could-be-a.html)
- [CVE-2026-96940: Microsoft Fixes Exchange Server Flaw For Which Exploitation Is More Likely](https://redoracle.com/News/cve-2026-96940-microsoft-fixes-exchange-server-flaw-for-which.html)


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Microsoft confirms Outlook outage across the Americas, potentially the globe, amid U.S. Cyber Security Agency’s discovery of Outlook vulnerability",
  "datePublished": "2026-11-13",
  "author": {
    "@type": "Organization",
    "name": "RedOracle"
  },
  "publisher": {
    "@type": "Organization",
    "name": "RedOracle"
  },
  "dateModified": "2026-11-13"
}
</script>
