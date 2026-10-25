---
title: "Nextcloud Collabora Flaw Hits CISA KEV, CVSS 9.2 [2026]"
date: "2026-10-25"
description: "Nextcloud Collabora Flaw Hits CISA KEV, CVSS 9.2 [2026]"
tags: ["collabora", "vulnerability", "built", "2026", "nextcloud", "server", "attackers", "exploitation", "online", "critical"]
schema-type: "NewsArticle"
---

![Nextcloud Collabora Flaw Hits CISA KEV, CVSS 9.2 [2026]](https://storage.googleapis.com/red_articles/nextcloud-collabora-flaw-hits-cisa-kev-cvss-92-2026.avif)

# Nextcloud Collabora Flaw Hits CISA KEV, CVSS 9.2 [2026]

## At a glance
CVE‑2026‑110447 is a critical command‑injection vulnerability in Nextcloud's **proxy.php** that affects the **Collabora Online, Built‑in CODE Server** app before version 26.4.303 [[1](#ref-1)]. The flaw carries a CVSS v4.0 score of 9.2 and has been added to the U.S. CISA KEV catalog, prompting a federal remediation deadline of October 26 2026 [[1](#ref-1)]. Exploitation has been observed since September 2026, with attackers deploying PHP web shells and harvesting configuration files that contain credentials and application secrets [[2](#ref-2)][[3](#ref-3)][[5](#ref-5)].

## What happened
The vulnerability allows unauthenticated remote attackers to execute operating‑system commands as the web‑server user, but only when the built‑in CODE server is not running, typically during a restart, upgrade, or after a crash [[2](#ref-2)][[3](#ref-3)][[6](#ref-6)]. Attackers have leveraged this condition to send malicious requests to the **proxy.php** endpoint, triggering command injection and planting web shells on affected Nextcloud servers [[2](#ref-2)][[5](#ref-5)]. The first logged attack occurred on September 10 2026, and multiple administrator reports indicate that exploitation began in mid‑September, roughly a month before the formal security bulletin and CVE publication [[2](#ref-2)][[3](#ref-3)].

## Why it matters
Because the built‑in CODE server is an optional component that many self‑hosted Nextcloud instances enable for in‑browser document editing, a sizable portion of deployments are exposed [[1](#ref-1)][[4](#ref-4)]. The impact is severe: web shells provide persistent backdoor access, enabling attackers to steal credentials, exfiltrate data, and move laterally within an organization [[5](#ref-5)]. The flaw's presence in the CISA KEV catalog means federal agencies must remediate within three days of the listing, underscoring the risk to critical infrastructure and highlighting the broader challenge of timely patch adoption in self‑hosted environments [[1](#ref-1)][[7](#ref-7)].

## Technical details
The vulnerable code resides in **proxy.php**, a file within the **richdocumentscode** app package that Nextcloud labels "Collabora Online, Built‑in CODE Server." Versions prior to 26.4.303 fail to sanitize user‑controlled input before it is passed to system‑level command execution functions [[6](#ref-6)]. The injection is only possible when the local Collabora server process is stopped; the script constructs and executes a command to start the server, and an attacker can inject arbitrary arguments into that command line [[2](#ref-2)][[6](#ref-6)]. The attack surface is limited to installations that have the built‑in server enabled; standalone Collabora Online servers, Docker‑based deployments, and RPM/DEB installations are not affected [[2](#ref-2)][[4](#ref-4)].

## What defenders should do
1. **Upgrade** the **richdocumentscode** app to version 26.4.303 or later, or **remove** the app entirely if it is not required [[2](#ref-2)][[4](#ref-4)].
2. **Verify** that no residual PHP web‑shell files remain in the app directory and review access logs for signs of exploitation [[5](#ref-5)].
3. **Monitor** for any attempts to access **proxy.php** with unusual query strings, especially during maintenance windows when the built‑in server may be down.
4. **Apply** the principle of least privilege to the web‑server user account to limit the damage of any successful injection.
5. **Document** the remediation steps and maintain an inventory of Nextcloud apps to accelerate future patch cycles.

## What remains unknown
The exact number of compromised servers worldwide has not been disclosed, and no specific threat‑actor group has been publicly attributed to the campaign [[2](#ref-2)][[6](#ref-6)]. It is also unclear whether any of the stolen credentials have been used to breach downstream systems or whether additional, undisclosed attack vectors exist in related Collabora components.
## References

1. <a id="ref-1"></a>[Nextcloud Collabora Flaw Hits CISA KEV, CVSS 9.2 [2026]](https://shattered.io/nextcloud-collabora-cve-2026-110447-cisa-kev-cvss-9-2-2026/), shattered.io
2. <a id="ref-2"></a>[Hackers exploit Collabora RCE flaw to backdoor Nextcloud servers](https://www.bleepingcomputer.com/news/security/hackers-exploit-collabora-rce-flaw-to-backdoor-nextcloud-servers/), bleepingcomputer.com
3. <a id="ref-3"></a>[Nextcloud was under attack before it received a CVE number](https://note.com/lafine/n/n4af3187a52ab?hl=en), note.com
4. <a id="ref-4"></a>[Hackers Backdoor Nextcloud Servers Through Critical Flaw in Collabora’s Built-in CODE App](https://thehackernews.com/2026/10/hackers-backdoor-nextcloud-servers.html), thehackernews.com
5. <a id="ref-5"></a>[Vulnerability in Nextcloud app allowed attackers to plant web shells](https://www.scworld.com/brief/vulnerability-in-nextcloud-app-allowed-attackers-to-plant-web-shells), scworld.com
6. <a id="ref-6"></a>[Hackers Exploit Critical Collabora Online Flaw to Backdoor Nextcloud Servers](https://cybersecuritynews.com/hackers-exploit-critical-collabora-online-flaw/), cybersecuritynews.com
7. <a id="ref-7"></a>[U.S. CISA adds Collabora Online flaw to its Known Exploited Vulnerabilities catalog](https://securityaffairs.com/201652/security/u-s-cisa-adds-collabora-online-flaw-to-its-known-exploited-vulnerabilities-catalog.html), securityaffairs.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Nextcloud Collabora Flaw Hits CISA KEV, CVSS 9.2 [2026]",
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
