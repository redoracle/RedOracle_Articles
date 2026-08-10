---
title: Zero-Day Windows Kerberos Attack 
tags: [ Kerberos, Privilege Escalation, Authentication, Vulnerability Escalation ]
categories: [News]
date: 2025-06-14
id: Zero-Day-Windows-Kerberos-Attack-2025-06-14
sidebar: false
isOriginal: true
star: false
lastUpdated: true
sitemap:
  exclude: false
  changefreq: hourly
  priority: 1.0

head:
  - - script
    - { type: "application/ld+json" }
    - |
      {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Zero-Day Windows Kerberos Attack",
        "image": ["https://storage.googleapis.com/red_articles/Zero-Day-Windows-Kerberos-Attack.png"],
        "datePublished": "2025-06-14T12:28:34.784Z",
        "dateModified": "2025-06-14T12:28:34.784Z",
        "author": {
          "@type": "Person",
          "name": "RedOracle"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RedOracle",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.redoracle.com/assets/redoracle_logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://redoracle.com/News/Zero-Day-Windows-Kerberos-Attack.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/Zero-Day-Windows-Kerberos-Attack.png)

## Introduction

A critical zero-day vulnerability in Windows systems has been exploited through a Reflective Kerberos Relay Attack, leading to privilege escalation. This attack highlights the significance of Kerberos, Privilege Escalation, Authentication, and Vulnerability Escalation in the cybersecurity landscape.

## Key Highlights

- The vulnerability, identified as CVE-2025-33073, was patched by Microsoft on June 10, 2025.
- Microsoft assigned a CVSS score of 9.8 (Critical) to this vulnerability due to its severe impact on confidentiality, integrity, and availability.
- The Reflective Kerberos Relay Attack bypasses NTLM reflection restrictions, allowing attackers to coerce authentication and escalate privileges.
- Attackers exploit a gap in Kerberos protections, obtaining NT AUTHORITY\SYSTEM privileges through the attack.

## Insights & Analysis

The Reflective Kerberos Relay Attack represents a significant evolution in authentication relay techniques, decoupling coercion targets and Service Principal Names (SPNs). This technique, pioneered by James Forshaw, confuses the system into granting elevated privileges. The attack requires authentication coercion and SMB relaying capabilities, affecting various Windows versions.

## Impact

- Privilege Escalation: The vulnerability affects Windows 10, Windows 11 (pre-24H2), and Windows Server 2019-2025, posing a critical risk.
- Mitigation Strategies: Enabling server-side SMB signing and monitoring for unusual SMB connections are crucial for protection.
- Organizations must act swiftly to patch and harden their environments against this critical threat.

## Conclusion

The Zero-Day Windows Kerberos Attack underscores the ongoing need for layered security measures and vigilance in the face of evolving cyber threats. Mitigation strategies and prompt patching are essential to safeguard against such vulnerabilities. Stay informed and proactive in securing your systems against potential attacks.



