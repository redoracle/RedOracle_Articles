---
title: "China hacked BeyondTrust enterprise vaults with zero-day active for seven weeks"
date: "2026-10-20"
description: "China hacked BeyondTrust enterprise vaults with zero-day active for seven weeks"
tags: ["beyondtrust", "zero", "seven", "weeks", "hackers", "exploited", "vulnerability", "access", "chinese", "state"]
schema-type: "NewsArticle"
---

![China hacked BeyondTrust enterprise vaults with zero-day active for seven weeks](https://storage.googleapis.com/red_articles/china-hacked-beyondtrust-enterprise-vaults-with-zero-day-active-for.avif)

# China Hacks BeyondTrust Enterprise Vaults with Undisclosed Zero-Day for Seven Weeks

## At a glance
A suspected Chinese espionage group exploited a critical zero-day vulnerability in BeyondTrust Remote Support appliances, gaining root access and the ability to steal privileged credentials [[1](#ref-1)][[2](#ref-2)][[5](#ref-5)][[7](#ref-7)]. This activity, linked to the threat actor ARMORY CASTLE (also known as UNC5221), began in late August 2026 and continued for about seven weeks before public disclosure on October 15 2026 [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)][[5](#ref-5)][[7](#ref-7)]. The flaw, tracked as [CVE-2026-102764](https://www.cve.org/CVERecord?id=CVE-2026-102764), allowed unauthenticated remote attackers to perform file operations on affected appliances, effectively compromising the enterprise vaults that store sensitive credentials [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)][[5](#ref-5)][[7](#ref-7)].

## What happened
The exploit was first observed in late August 2026, weeks before BeyondTrust issued an advisory on October 15 2026 [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)][[5](#ref-5)][[7](#ref-7)]. The vulnerability had been actively exploited for about seven weeks, giving the attackers ample time to establish footholds. The attack targeted self-hosted BeyondTrust Remote Support appliances, which are used to manage privileged access across enterprise environments [[1](#ref-1)][[2](#ref-2)][[5](#ref-5)][[7](#ref-7)]. Successful exploitation granted root privileges, enabling the attackers to read and modify files, create backdoors, and harvest credentials stored in the appliance's vault [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)][[5](#ref-5)][[7](#ref-7)].

The threat actor leveraged the appliance's own web-root directory to drop a PHP webshell named `mangoapi.php` after sending a series of POST requests to `/app_84304470%2Ephp` [[2](#ref-2)]. The SAWFLY webshell and BARECLAW tunneler were subsequently deployed to issue commands, maintain persistence, and exfiltrate data [[2](#ref-2)][[4](#ref-4)]. Log files were also deleted to hinder detection [[4](#ref-4)].

Mandiant and Google Threat Intelligence Group (GTIG) attributed the campaign to ARMORY CASTLE, a suspected Chinese-linked espionage group previously tracked as UNC5221 [[1](#ref-1)][[2](#ref-2)][[5](#ref-5)]. The group has a history of selective zero-day exploitation followed by rapid, widespread attacks once patches become public [[1](#ref-1)][[5](#ref-5)].

While only two BeyondTrust customers have been confirmed compromised so far, the potential reach is far larger because Remote Support can connect to internal endpoints, exposing entire networks [[2](#ref-2)][[4](#ref-4)]. The attackers could use stolen credentials to move laterally, escalate privileges, and deploy additional malware.

## Why it matters
Exploiting a zero-day in a privileged-access solution like BeyondTrust Remote Support is significant for several reasons:

Credential theft, the appliance's vault stores highly privileged credentials; compromise of these assets can enable attackers to pivot across an organization's most critical systems [[1](#ref-1)][[6](#ref-6)].

Broad attack surface, because Remote Support appliances often sit at the network edge and have inbound connectivity, a single compromised device can serve as a gateway to internal assets, amplifying the blast radius [[2](#ref-2)][[4](#ref-4)].

Speed of weaponization, the attackers demonstrated the ability to develop and deploy functional exploits within days of the vulnerability's emergence, underscoring the rapid pace at which threat actors weaponize newly disclosed flaws [[1](#ref-1)][[2](#ref-2)].

State-sponsored tactics, the campaign aligns with previous Chinese espionage operations that target edge devices and privileged-access tools, suggesting a strategic focus on high-value data [[1](#ref-1)][[5](#ref-5)][[6](#ref-6)].

Potential for mass exploitation, historical patterns show that ARMORY CASTLE often expands from selective zero-day use to mass exploitation once a flaw is publicly known, raising the likelihood of additional victims after disclosure [[1](#ref-1)][[5](#ref-5)].

## Technical details
The vulnerability, [CVE-2026-102764](https://www.cve.org/CVERecord?id=CVE-2026-102764), is an authentication-bypass issue that allows an unauthenticated remote attacker to perform arbitrary file operations on the appliance [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)][[5](#ref-5)][[7](#ref-7)]. The attack chain observed by Mandiant and GTIG proceeded as follows:

Initial access, the attacker sent crafted POST requests to a specific endpoint (`/app_84304470%2Ephp`) on the appliance's web server [[2](#ref-2)].

Webshell deployment, approximately eleven minutes later, the appliance logged the creation of a PHP webshell (`mangoapi.php`) in the web-root directory, providing a remote command interface [[2](#ref-2)].

Persistence and lateral movement, the SAWFLY webshell was used to execute commands, while the BARECLAW tunneler facilitated outbound traffic and further exploitation of internal systems [[2](#ref-2)][[4](#ref-4)].

Defense evasion, the threat actor routinely deleted appliance logs and other endpoint artifacts to obscure their activities [[4](#ref-4)].

BeyondTrust's advisory BT26-05 notes that the vulnerable code is shared with the Privileged Remote Access (PRA) product line, prompting a precautionary patch for PRA as well [[4](#ref-4)]. The vendor has released version 24.3.1 and later to address the issue, and CISA has added [CVE-2026-102764](https://www.cve.org/CVERecord?id=CVE-2026-102764) to its Known Exploited Vulnerabilities catalog [[4](#ref-4)].

## What defenders should do
Based on guidance from BeyondTrust, Mandiant, GTIG, and the U.S. Cybersecurity and Infrastructure Security Agency (CISA) [[4](#ref-4)], organizations should take the following steps:

Apply patches immediately, upgrade BeyondTrust Remote Support and Privileged Remote Access appliances to version 24.3.1 or later, which remediates [CVE-2026-102764](https://www.cve.org/CVERecord?id=CVE-2026-102764) [[4](#ref-4)].

Audit logs and artifacts, review appliance logs for signs of the initial POST requests, webshell creation, or unusual file modifications; restore any missing logs from backups if possible [[4](#ref-4)].

Monitor for indicators of compromise (IOCs), look for the presence of `mangoapi.php`, SAWFLY, or BARECLAW artifacts, as well as unexpected outbound connections from the appliance [[2](#ref-2)][[4](#ref-4)].

Restrict network exposure, limit inbound access to Remote Support appliances to trusted IP ranges and enforce strict firewall rules; consider placing appliances behind a VPN or jump host [[4](#ref-4)].

Enforce least-privilege access, review and tighten account permissions on the appliance, ensuring that only necessary administrative accounts have root access [[4](#ref-4)].

Implement detection rules, deploy IDS/IPS signatures that detect the specific POST request patterns and webshell filenames associated with this attack [[2](#ref-2)][[4](#ref-4)].

## What remains unknown
No unresolved information has been identified that would significantly alter the interpretation of the events described. All cited sources provide consistent timelines, technical details, and attribution.
## References

1. <a id="ref-1"></a>[BeyondTrust zero-day tied to Chinese spies puts Remote Support users on alert](https://www.csoonline.com/article/4236421/beyondtrust-zero-day-tied-to-chinese-spies-puts-remote-support-users-on-alert.html), csoonline.com
2. <a id="ref-2"></a>[Chinese Hackers Exploit BeyondTrust Zero-Day to Gain Root Access and Deploy Backdoors](https://cybersecuritynews.com/beyondtrust-zero-day/), cybersecuritynews.com
3. <a id="ref-3"></a>[BeyondTrust 0-Day Vulnerability Exploited Since August to Gain Full Admin Access in Minutes](https://cybersecuritynews.com/beyondtrust-0-day-vulnerability-exploited/), cybersecuritynews.com
4. <a id="ref-4"></a>[Patch now! Experts, US cyber agency sound alarm over critical vulnerability in BeyondTrust Remote Support](https://www.cyberdaily.au/security/14316-patch-now-experts-us-cyber-agency-sound-alarm-over-critical-vulnerability-in-beyondtrust-remote-support), cyberdaily.au
5. <a id="ref-5"></a>[China-Linked Hackers Exploited BeyondTrust Zero-Day to Take Over Remote Support Servers](https://thehackernews.com/2026/10/china-linked-hackers-exploited.html), thehackernews.com
6. <a id="ref-6"></a>[China-Linked Hackers Exploit Critical BeyondTrust Zero-Day to Steal Credentials](https://cyberpress.org/china-linked-critical-beyondtrust-zero-day/), cyberpress.org
7. <a id="ref-7"></a>[Zero-Day in BeyondTrust Remote Support Appliances Exploited](https://www.bankinfosecurity.com/zero-day-in-beyondtrust-remote-support-appliances-exploited-a-33129), bankinfosecurity.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "China hacked BeyondTrust enterprise vaults with zero-day active for seven weeks",
  "datePublished": "2026-10-20",
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
