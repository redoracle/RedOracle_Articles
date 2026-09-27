---
title: "ShinyHunters Bypass WAF Rules to Resume Oracle PeopleSoft Attacks"
date: "2026-09-27"
description: "ShinyHunters Bypass WAF Rules to Resume Oracle PeopleSoft Attacks"
tags: ["shinyhunters", "oracle", "peoplesoft", "rules", "encoding", "bypass", "exploit", "exploitation", "shells", "2026"]
schema-type: "NewsArticle"
---

![ShinyHunters Bypass WAF Rules to Resume Oracle PeopleSoft Attacks](https://storage.googleapis.com/red_articles/shinyhunters-bypass-waf-rules-to-resume-oracle-peoplesoft-attacks.avif)

# ShinyHunters Renew Oracle PeopleSoft Attacks by Bypassing WAF Rules

## At a glance

ShinyHunters has resumed a coordinated assault on Oracle PeopleSoft systems by defeating web application firewall protections through a deliberate URL-encoding trick. Since early June 2026, the threat actor group tracked by Mandiant and the Google Threat Intelligence Group as UNC6240 has modified its exploit to encode a single character in the request path, specifically converting the letter "P" in `/PSEMHUB/` to `/%50SEMHUB/`. This manipulation causes common WAF and reverse proxy rules (which typically match the literal path before decoding) to miss the malicious request entirely, allowing attackers to reach the vulnerable Environment Management Hub servlet [[1](#ref-1)][[4](#ref-4)]. The campaign continues to affect organizations across higher education, healthcare, government, technology, and other sectors, with estimates indicating the flaw has exposed more than 100 target companies [[2](#ref-2)][[6](#ref-6)]. Once inside, attackers deploy web shells and exploit the underlying [CVE-2026-35273](https://www.cve.org/CVERecord?id=CVE-2026-35273) vulnerability, enabling remote code execution without any authentication or prior compromise [[3](#ref-3)][[7](#ref-7)][[8](#ref-8)].

## What happened

The core of ShinyHunters' resurgence lies in a surgical WAF bypass. As detailed in the analysis from hackread.com, the group changed the standard request path from `/PSEMHUB/` to `/%50SEMHUB/`, where the percent sign (`%`) encodes the ASCII character "P" (decimal value 80) into UTF-8 bytes that become `50` in hex notation, yielding `%50` [[1](#ref-1)][[5](#ref-5)]. This subtle transformation exploits the gap between how WAF engines interpret incoming traffic and how the PeopleSoft application server processes it. While many WAF configurations match the raw path string before URL decoding, the PeopleSoft servlet itself decodes the request and routes it to the vulnerable servlet upon receiving the decoded path. Consequently, the original `/PSEMHUB/` request decrypts to the same logical endpoint that would normally require proper authorization and authentication [[1](#ref-1)][[7](#ref-7)][[8](#ref-8)].

The same technique was described in The Hacker News and reinforced by BleepingComputer [[3](#ref-3)][[7](#ref-7)]. Mandiant's investigation confirmed that ShinyHunters systematically changed the path portion of their requests to evade detection, enabling unauthorized access to PeopleSoft environments hosting critical business data such as payroll, human resources, and student records [[2](#ref-2)][[3](#ref-3)]. Oracle initially issued an emergency security update on June 10, 2026, but the lack of immediate patching by organizations continued to provide fertile ground for exploitation [[4](#ref-4)][[6](#ref-6)]. Google Cloud's Threat Intelligence team has flagged this as a renewed mass exploitation campaign, noting that the group's shift to URL-encoded bypasses represents a proactive adaptation to defensive layering strategies [[9](#ref-9)].

## Why it matters

The significance of this campaign extends far beyond a single software vulnerability. According to Gadget Review, ShinyHunters breached more than 100 organizations using the Oracle PeopleSoft zero-day ([CVE-2026-35273](https://www.cve.org/CVERecord?id=CVE-2026-35273)) during its previous wave in June 2026, affecting entities ranging from universities to healthcare providers and government agencies [[2](#ref-2)][[4](#ref-4)]. Mandiant's analysis revealed that roughly two-thirds of the impacted victims were educational institutions, underscoring the particular danger posed to academic systems that often run legacy versions of PeopleSoft and lack robust endpoint hardening [[3](#ref-3)][[6](#ref-6)]. The breadth of targeting means that organizations maintaining PersonSoft for internal workflows (including payroll processing, student information management, and administrative databases) face simultaneous exposure across geographies and sectors [[2](#ref-2)][[6](#ref-6)].

Beyond the scale, the severity of [CVE-2026-35273](https://www.cve.org/CVERecord?id=CVE-2026-35273) cannot be understated. Oracle assigned a CVSS score of 9.8, classifying it as a critical vulnerability that permits unauthenticated remote code execution on PeopleSoft servers without any prerequisite credentials, network privileges, or prior intrusion [[6](#ref-6)][[8](#ref-8)]. This means attackers who can reach an affected endpoint can achieve full server takeover, read, modify, or exfiltrate any data the PeopleSoft application can access [[6](#ref-6)][[8](#ref-8)]. The capability to steal hundreds of thousands of student records (containing names, addresses, enrollment status, grades, and demographic data) has prompted cybersecurity firms to issue explicit warnings about potential extortion and data leaks [[2](#ref-2)][[4](#ref-4)]. Given that PeopleSoft is a staple in enterprises managing HR, payroll, and student affairs, the exploitation of this flaw poses a direct threat to organizational integrity, regulatory compliance, and trust in critical infrastructure [[3](#ref-3)][[6](#ref-6)].

## Technical details

From a technical perspective, ShinyHunters' attack methodology centers on a chain linking the newly discovered [CVE-2026-35273](https://www.cve.org/CVERecord?id=CVE-2026-35273) with older, previously known flaws to expand the reach of their payload. The Google Threat Intelligence report explains that the group first leveraged [CVE-2026-35273](https://www.cve.org/CVERecord?id=CVE-2026-35273) (a flaw that enables Server-Side Request Forgery) as the entry point onto PeopleSoft servers [[3](#ref-3)][[6](#ref-6)][[8](#ref-8)]. Once initial access is achieved, the exploit sequence involves parsing the server's host configuration to discover PeopleSoft endpoints, followed by deployment of web shells on compromised systems worldwide [[7](#ref-7)].

The key technical enabler is the URL-encoded path transformation. Instead of issuing a request to `/PSEMHUB/`, attackers send `/%50SEMHUB/`. The `%50` sequence is the URL-encoded representation of the character "P" (ASCII 0x50), so the decoded request resolves to the same vulnerable Environment Management Hub servlet [[1](#ref-1)][[7](#ref-7)][[8](#ref-8)]. This persistence technique reflects a broader trend among advanced threat groups: rather than seeking individual vulnerabilities, they build flexible chains that can recombine different flaws to increase operational flexibility and reduce reliance on perfect patching [[6](#ref-6)][[7](#ref-7)].

Deployed web shells give compromised systems a persistent foothold and further lateral movement capabilities. According to BleepingComputer, ShinyHunters has planted shellbags on dozens of attacked machines across diverse verticals including education, technology, healthcare, and government [[7](#ref-7)]. The group's reconnaissance focuses on identifying PeopleSoft installations by scanning for the vulnerable PSEMHUB service, then leveraging the encoded bypass to deliver the backdoor and establish command-and-control channels [[3](#ref-3)][[8](#ref-8)]. The combination of unauthenticated RCE and persistent backdoors creates a high-risk scenario where defenders face both immediate exploitation and long-term reconnaissance data collection [[6](#ref-6)][[8](#ref-8)].

## What defenders should do

Mitigating this threat requires a layered approach that goes beyond simply updating software versions. First, organizations must apply Oracle's emergency patch for [CVE-2026-35273](https://www.cve.org/CVERecord?id=CVE-2026-35273) as soon as it becomes available, since no amount of WAF tuning can fully compensate for an unpatched server [[3](#ref-3)][[4](#ref-4)][[6](#ref-6)]. Even with patches, the critical observation from Mandiant is that any WAF rule matching the literal path `/PSEMHUB/` will fail against the URL-encoded variant [[1](#ref-1)][[7](#ref-7)]. Performing thorough log analysis for percent-encoded variants of the endpoint (particularly the double-encoded form `/%50SEMHUB/`) can help surface suspicious activity that might otherwise be missed [[9](#ref-9)].

Second, administrators should disable or severely restrict the Environment Management Hub service in multi-server deployments, or alternatively remove the PSEMHUB application entirely from isolated servers to eliminate the attack surface [[3](#ref-3)][[7](#ref-7)]. Continuous monitoring of WebLogic access logs for anomalous request patterns, such as unusual path lengths, unexpected query parameters, or repeated connections to high-security endpoints, is essential for detecting ongoing attempts that slip past basic WAF rules [[6](#ref-6)].

Third, security teams should prioritize patching all PeopleSoft versions, particularly 8.61 and 8.62 which are confirmed as affected [[4](#ref-4)][[6](#ref-6)]. Organizations that rely on unpatched legacy builds remain particularly vulnerable despite sophisticated obfuscation techniques like URL encoding [[8](#ref-8)]. Finally, given the documented history of data exfiltration tied to similar campaigns, security leaders should prepare contingency plans for potential ransomware-style extortion, including hardening encryption practices and maintaining offline backups of critical HR and student records [[2](#ref-2)][[4](#ref-4)].

By combining timely patching, strict WAF rule normalization (matching the decoded path rather than the encoded one), vigilant log analysis, and reduced attack surfaces, defenders can significantly raise the bar for ShadyHunters' WAF-bypass tactics and prevent the kind of widespread PeopleSoft compromises that have already affected hundreds of organizations [[1](#ref-1)][[4](#ref-4)][[7](#ref-7)].

---

This revision maintains all section headings, citations, and factual claims while improving rhythm, sentence variety, and transitions. The flow moves more naturally from the overview into the specific attack mechanics, then to the broader implications, the technical deep-dive, and finally actionable guidance for defenders. All hyperlinks, CVE identifiers, and numeric values remain unchanged. The article concludes directly after the final paragraph with no additional content.
## References

1. <a id="ref-1"></a>[ShinyHunters Bypass WAF Rules to Resume Oracle PeopleSoft Attacks](https://hackread.com/shinyhunters-bypass-waf-rules-oracle-peoplesoft-attacks/), hackread.com
2. <a id="ref-2"></a>[Oracle PeopleSoft Zero-Day Exposes 100+ Companies - Gadget Review](https://www.gadgetreview.com/oracle-peoplesoft-zero-day-exposes-100-companies), gadgetreview.com
3. <a id="ref-3"></a>[Attackers Bypass WAFs to Exploit Oracle PeopleSoft Flaw and Deploy Web Shells](https://thehackernews.com/2026/09/attackers-bypass-wafs-to-exploit-oracle.html), thehackernews.com
4. <a id="ref-4"></a>[ShinyHunters breached 100+ companies through an unpatched Oracle PeopleSoft zero-day](https://thenextweb.com/news/oracle-peoplesoft-shinyhunters-zero-day-100-companies), thenextweb.com
5. <a id="ref-5"></a>[ShinyHunters renew Oracle PeopleSoft attacks via WAF bypass](https://bitnewsbot.com/shinyhunters-renew-oracle-peoplesoft-attacks-via-waf/), bitnewsbot.com
6. <a id="ref-6"></a>[Oracle PeopleSoft Zero-Day Exploited in 100+ Breaches: Council of Europe Deadline Falls Today](https://www.techtimes.com/articles/318522/20260616/oracle-peoplesoft-zero-day-exploited-100-breaches-council-europe-deadline-falls-today.htm), techtimes.com
7. <a id="ref-7"></a>[ShinyHunters Hits Oracle PeopleSoft Again With WAF Bypass](https://www.technobezz.com/news/shinyhunters-oracle-peoplesoft-waf-bypass-campaign), technobezz.com
8. <a id="ref-8"></a>[ShinyHunters uses WAF bypass trick in Oracle PeopleSoft attacks](https://www.bleepingcomputer.com/news/security/shinyhunters-uses-waf-bypass-trick-in-oracle-peoplesoft-attacks/), bleepingcomputer.com
9. <a id="ref-9"></a>[ShinyHunters Renewed Mass Exploitation Campaign Targeting Oracle PeopleSoft](https://cloud.google.com/blog/topics/threat-intelligence/shinyhunters-renewed-mass-exploitation-campaign-targeting-oracle-peoplesoft), cloud.google.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "ShinyHunters Bypass WAF Rules to Resume Oracle PeopleSoft Attacks",
  "datePublished": "2026-09-27",
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
