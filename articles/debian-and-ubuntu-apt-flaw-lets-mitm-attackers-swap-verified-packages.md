---
title: "Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root"
date: "2026-11-05"
description: "Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root"
tags: ["root", "debian", "ubuntu", "attackers", "code", "vulnerability", "middle", "swap", "verified", "packages"]
schema-type: "NewsArticle"
---

![Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root](https://storage.googleapis.com/red_articles/debian-and-ubuntu-apt-flaw-lets-mitm-attackers-swap-verified-packages.avif)

# APT Flaw on Debian and Ubuntu Lets MitM Attackers Run Code as Root ([CVE-2026-109518](https://www.cve.org/CVERecord?id=CVE-2026-109518))

## At a glance
Debian and Ubuntu's APT package manager is affected by a vulnerability ([CVE-2026-109518](https://www.cve.org/CVERecord?id=CVE-2026-109518)) that allows man-in-the-middle attackers to swap verified packages and run code as root.

## What happened
A flaw in APT, the package manager for Debian and Ubuntu, allows an attacker who can modify package downloads to swap a checked package for their own. The attacker's code then runs as root, according to advisories that Debian, Ubuntu, and APT's developers published on November 4. The attack needs APT to retry failed downloads, which it does by default from Debian 12 and Ubuntu 22.04 onward. Debian has released fixed versions of APT for the flaw, [CVE-2026-109518](https://www.cve.org/CVERecord?id=CVE-2026-109518). APT's developers, who call the flaw critical, say updates for Ubuntu and its Ubuntu Pro subscription service are being released. Ubuntu 14.04 users with Ubuntu Pro can already get one. Older releases, such as Debian 11 and Ubuntu 20.04, are not exposed by default, according to Ubuntu. But many user scripts may have turned on the retry setting, Acquire::Retries, on those releases anyway, APT's developers say. Debian's testing branch was still on the vulnerable version 3.3.5 at 14:58 UTC on November 4. For Debian 11, whose Debian long-term support ended on August 31, APT is not supported.

## Why it matters
This vulnerability poses a significant risk as it allows attackers to gain root privileges on affected systems.

## Technical details
Though not explicitly stated in all sources, it is mentioned in one verified source that this vulnerability can be chained with another one to achieve root privileges ([CVE-2025-6018](https://www.cve.org/CVERecord?id=CVE-2025-6018), [CVE-2025-6019](https://www.cve.org/CVERecord?id=CVE-2025-6019)).

## What defenders should do
No concrete actionable advice for defenders is mentioned in the available facts.

## What remains unknown
No unresolved information is mentioned in the available facts that would materially change interpretation of the event.
## References

1. <a id="ref-1"></a>[Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root](https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html), thehackernews.com
2. <a id="ref-2"></a>[Debian's APT Affected By Man-In-The-Middle Attack For Arbitrary Code Execution As Root](https://www.phoronix.com/news/Debian-APT-MITM-RCE), phoronix.com
3. <a id="ref-3"></a>[APT Package Manager Flaw Lets Man-in-the-Middle Attackers Run Code as Root on Debian, Ubuntu](https://finance.biggo.com/news/605d0cd9-904f-474d-8fa3-2fac5732d69b), finance.biggo.com
4. <a id="ref-4"></a>[Ubuntu: root vulnerability via snapd](https://www.heise.de/en/news/Ubuntu-root-vulnerability-via-snapd-11216629.html), heise.de
5. <a id="ref-5"></a>[Chaining two LPEs to get “root”: Most Linux distros vulnerable (CVE-2025-6018, CVE-2025-6019)](https://www.helpnetsecurity.com/2025/06/18/chaining-two-lpes-to-get-root-most-linux-distros-vulnerable-cve-2025-6018-cve-2025-6019/), helpnetsecurity.com
6. <a id="ref-6"></a>[Linux vulnerability: Attackers gain root privileges](https://www.heise.de/en/news/Linux-vulnerability-Attackers-gain-root-privileges-9742733.html), heise.de


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root",
  "datePublished": "2026-11-05",
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
