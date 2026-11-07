---
title: "Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot"
date: "2026-11-07"
description: "Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot"
tags: ["password", "vulnerability", "account", "linux", "openssh", "exploitation", "root", "alpine", "hash", "musl"]
schema-type: "NewsArticle"
---

![Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot](https://storage.googleapis.com/red_articles/hackers-target-openssh-sshole-flaw-within-hours-of-disclosure-gain-root.avif)

# Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot

## At a glance

The OpenSSH vulnerability known as *SSHole* ([CVE-2026-123158](https://www.cve.org/CVERecord?id=CVE-2026-123158)) has been actively exploited by threat actors within hours of its public disclosure. Previdian observed the first exploitation attempt less than nine hours after the CVE was published, and the company confirmed successful root access on a honeypot running Alpine Linux and OpenSSH [1][2][3]. The flaw affects OpenSSH versions prior to 10.6p2 on Linux systems that use the musl C library without Pluggable Authentication Modules (PAM) [6]. This vulnerability, tracked with a CVSS score of 8.1, can be triggered by providing a password between 257 and 1,024 bytes long, allowing attackers to bypass authentication on accounts where the password field is set to "*" [8]. The underlying root cause traces back to a patch introduced in 2016 to address username enumeration vulnerability [CVE-2016-6210](https://www.cve.org/CVERecord?id=CVE-2016-6210), though the OpenSSH developers have indicated the bug stems from musl libc behavior and legacy design choices rather than a flaw directly in their code [6].

## What happened

The *SSHole* vulnerability was discovered by security researcher Özgün Kültekin (also spelled Ozgun Kultekin) of Wakefield [2]. Upon disclosure, the vulnerability was quickly exploited in the wild. Previdian, a threat intelligence firm, monitored its sensors and reported that the first observed exploitation attempt arrived less than nine hours after the CVE was published [1][2]. The attackers targeted Alpine Linux systems running OpenSSH without PAM, leveraging an account whose password field contains only a star character ("*") while having at least one other account with a valid password hash [2][3]. Successful exploitation granted attackers access with the compromised account's existing permissions, including root if that account was passwordless [8].

Telemetry data shows eight exploitation attempts originating from a single IP address geolocated to Japan (89.116.89.18) [1]. The source IP used oversized passwords to bypass authentication and then executed reconnaissance commands such as `id`, `uname`, and `hostname` through non-interactive SSH sessions [2]. The attack vector requires an account with a disabled password and another account with a valid password hash on the same system [3]. Previdian confirmed successful root access on a honeypot running real Alpine Linux and OpenSSH, demonstrating that the flaw could be weaponized against production systems [2][3].

## Why it matters

The *SSHole* vulnerability represents a critical authentication bypass that can compromise passwordless accounts on lightweight Linux distributions [1]. OpenSSH versions before 10.6p2 are specifically affected when running against musl libc without PAM support [6]. The impact is particularly severe for Alpine Linux, OpenWrt, Buildroot, and Yocto distributions, which are widely used in cloud and embedded environments [4][5]. Attackers can gain root access without knowing any password, simply by providing a sufficiently long password (257 to 1,024 bytes) to an account with a disabled password [8]. This means that security-hardened accounts that administrators intentionally disable for safety become the primary targets [2].

The flaw's severity is underscored by its rapid exploitation timeline. Within less than nine hours of the CVE being published, threat actors had already demonstrated successful root access on honeypot systems [1][2]. This indicates that the vulnerability was not patched in time across the affected distributions, and that defenders must take immediate action [3]. The fact that the exploit works by abusing the musl library's behavior, specifically, the 256-byte password length limit introduced in 2012 combined with the star character in the password field, means that even accounts that administrators consider safe can be compromised [6].

The broader implications extend beyond individual systems to cloud and edge deployments. Lightweight Linux distros like Alpine, OpenWrt, and Yocto frequently run OpenSSH services without PAM, making them naive targets for this exploit [4][5]. Many of these systems rely on passwordless authentication for automation and device management, which conflicts with the security principle of least privilege [2]. When combined with the ease of testing the exploit (a roughly 300-character string fits comfortably within SSH password limits), the risk profile is particularly concerning for organizations that have not yet applied the OpenSSH 10.6p2 patch [6].

## Technical details

The *SSHole* vulnerability exploits a specific interaction between the musl C library's `crypt()` function and OpenSSH's authentication logic when PAM is disabled [6]. The root cause traces back to a decision made in 2016 to cap password length at 256 bytes to prevent resource exhaustion from excessively long passwords [6]. This limitation inadvertently created a condition that could be exploited when combined with the star character in password fields. When an attacker sends a password longer than 256 bytes (specifically between 257 and 1,024 bytes) the musl library's handling of the input triggers a different code path that bypasses standard authentication checks [8]. This path allows the attacker to log in without knowing any password, as the system validates the oversized password string and succeeds in authentication.

The exploit requires two conditions to be met on the target system: first, an account with a disabled password (where the password field is set to "*") [3], and second, another account with a valid password hash (such as the default root account) [3]. Under these circumstances, a single connection with an oversized password string can grant full root access [8]. The attack does not require any retries or additional credentials beyond the oversized password [1]. Previdian's honeypot analysis confirmed that the attack works by supplying a password between 257 and 1,024 bytes long, which is a concrete, reproducible vector that defenders can test against [8].

The vulnerability affects Alpine Linux, OpenWrt, Buildroot, and Yocto distributions, all of which are commonly used in cloud, edge, and IoT environments [4][5]. OpenSSH 10.6p2 and a patched version for Alpine were released on November 5, 2026, but exploitation continued despite the patch [6]. The researchers emphasize that glibc-based systems such as Debian, Ubuntu, and Fedora are not affected because they use a different C library and typically support PAM [4]. The core of the problem lies in the intersection of musl libc's design choices from 2016 and the OpenSSH configuration that disables password authentication for certain accounts [6].

## What defenders should do

Organizations that have been affected by this vulnerability should take immediate action to secure their OpenSSH deployments. The primary remediation is to upgrade to OpenSSH 10.6p2 or later, which includes the fix for [CVE-2026-123158](https://www.cve.org/CVERecord?id=CVE-2026-123158) [6]. Before upgrading, defenders should verify the current OpenSSH version and ensure that the patched version is available for their specific distribution [3]. If an organization cannot update immediately, they should disable password-based authentication entirely until the patch can be applied [3]. This can be done by editing the SSH configuration file (typically `/etc/ssh/sshd_config`) and setting `PasswordAuthentication no` [4].

If the patch cannot be applied at all, administrators should consider restricting access to password-based logins by ensuring that only accounts with valid password hashes can authenticate [3]. Additionally, organizations should audit their systems for accounts with password-disabled fields (where the password field is "*") and remove or password-protect those accounts [2]. Key-based authentication should be enforced where possible, as it is not vulnerable to this specific bypass [4].

Telemetry shows eight exploitation attempts from a single Japanese IP address, indicating that attackers are actively probing for vulnerable systems [1]. This suggests that the vulnerability is being actively weaponized in the wild and that defenders should monitor for reconnaissance attempts such as `id`, `uname`, and `hostname` commands sent through SSH sessions [2]. Security teams should also check for any unusual SSH connection patterns, particularly from IP addresses associated with known threat actor activity [1].

The OpenSSH development team has stated that the bug is not a flaw in their code per se, but rather a consequence of musl libc's behavior and the architectural decisions made years ago [6]. This underscores that the vulnerability is not about a recent misstep but rather the cumulative effect of design choices that have proven problematic in specific contexts [6]. As a result, defenders should prioritize patching over workarounds and ensure that their systems are running the most recent stable version of OpenSSH [3].

## What remains unknown

While the exploitation timeline and technical details of the *SSHole* vulnerability have been well-documented, some aspects remain uncertain. The full scope of ongoing exploitation across different distributions and geographies is not yet fully known. Additionally, the long-term stability of the patched version (OpenSSH 10.6p2 and later) remains to be verified in production environments [6]. Organizations that have not yet applied the patch should proceed with caution, as the vulnerability was observed to be active within hours of disclosure [1]. The specific impact on cloud-native and edge deployments using Alpine-based images is still being evaluated by security researchers [5]. Future analysis may clarify whether the vulnerability affects other subsystems beyond OpenSSH itself [6].

**References**

[1] Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot, thehackernews.com ([https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html](https://thehackernews.com/2026/11/hackers-exploited-openssh-sshole-flaw.html))

[2] OpenSSH flaw exploited in the wild just hours after disclosure ([CVE-2026-123158](https://www.cve.org/CVERecord?id=CVE-2026-123158)), helpnetsecurity.com ([https://www.helpnetsecurity.com/2026/11/06/openssh-sshole-[cve-2026-123158](https://www.helpnetsecurity.com/2026/11/06/openssh-sshole-[cve-2026-123158)](https://www.cve.org/CVERecord?id=CVE-2026-123158)-exploitation/)

[3] OpenSSH Rushes Patches for 'SSHole' Authentication Bypass, securityweek.com ([https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/](https://www.securityweek.com/openssh-rushes-patches-for-sshole-authentication-bypass/))

[4] Alpine's sshd can be accessed with a single long password (sshole ([CVE-2026-123158](https://www.cve.org/CVERecord?id=CVE-2026-123158)) conditions and what to do today) note.com ([https://note.com/zephel01/n/n576f2443934e?hl=en](https://note.com/zephel01/n/n576f2443934e?hl=en))

[5] OpenSSH flaw lets attackers access password-disabled accounts on some Linux systems, csoonline.com ([https://www.csoonline.com/article/4245407/openssh-flaw-lets-attackers-access-password-disabled-accounts-on-some-linux-systems.html](https://www.csoonline.com/article/4245407/openssh-flaw-lets-attackers-access-password-disabled-accounts-on-some-linux-systems.html))

[6] Long Password Bypasses musl SSH Logins: 257+ Bytes [2026], shattered.io ([https://shattered.io/musl-linux-openssh-long-password-bypass-257-bytes-10-6p2-2026/](https://shattered.io/musl-linux-openssh-long-password-bypass-257-bytes-10-6p2-2026/))

[7] Lightweight Linux distros vulnerable to *sshole password bypass, itnews.com.au ([https://www.itnews.com.au/news/lightweight-linux-distros-vulnerable-to-sshole-password-bypass-630155](https://www.itnews.com.au/news/lightweight-linux-distros-vulnerable-to-sshole-password-bypass-630155))

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Hackers Target OpenSSH SSHole Flaw Within Hours of Disclosure, Gain Root on Honeypot",
  "datePublished": "2026-11-07",
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
