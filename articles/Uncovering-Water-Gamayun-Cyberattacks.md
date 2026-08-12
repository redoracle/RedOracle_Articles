---
title: Uncovering Water Gamayun Cyberattacks 
tags: [ Russian hackers, malware deployment, cyber espionage, data theft ]
categories: [News]
date: 2025-03-31
id: Uncovering-Water-Gamayun-Cyberattacks-2025-03-31
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
        "headline": "Uncovering Water Gamayun Cyberattacks",
        "image": ["https://storage.googleapis.com/red_articles/Uncovering-Water-Gamayun-Cyberattacks.avif"],
        "datePublished": "2025-03-31T18:37:23.307Z",
        "dateModified": "2025-03-31T18:37:23.307Z",
        "author": {
          "@type": "Person",
          "name": "RedOracle"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RedOracle",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.redoracle.com/assets/redoracle_logo.avif"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://redoracle.com/News/Uncovering-Water-Gamayun-Cyberattacks.html"
        }
      }
---

# Uncovering Water Gamayun Cyberattacks

![Image](https://storage.googleapis.com/red_articles/Uncovering-Water-Gamayun-Cyberattacks.avif)

## Introduction

Recent cybersecurity investigations have uncovered the activities of a Russian hacking group known as Water Gamayun. This group has been exploiting a critical vulnerability in Microsoft Windows, specifically identified as CVE-2025-26633, to deploy sophisticated malware such as SilentPrism and DarkWisp. The implications of these cyberattacks are significant and pose a threat to organizations worldwide.

## Key Highlights

- **Exploitation of CVE-2025-26633**: Water Gamayun, also referred to as EncryptHub and LARVA-208, is associated with the exploitation of CVE-2025-26633, a zero-day vulnerability in the Microsoft Management Console (MMC).
- **Deployment Techniques**: The attackers utilize various methods, including malicious provisioning packages, signed Microsoft Windows Installer files, and .msc files, to deliver their payloads.
- **Malware Overview**: SilentPrism and DarkWisp are PowerShell implants used by the threat actor to maintain persistence, execute commands, and exfiltrate data.
- **Additional Payloads and Capabilities**: The MSC EvilTwin loader is employed to execute malicious .msc files, leading to the deployment of the Rhadamanthys Stealer.
- **Functionality of EncryptHub Stealers**: The EncryptHub Stealer variants collect extensive system information, including financial data related to cryptocurrency wallets.

## Insights & Analysis

Water Gamayun's operations demonstrate a high level of adaptability, utilizing various delivery methods and techniques to compromise systems. The group's arsenal includes multiple malware strains designed for data theft and system compromise. The ongoing activities of Water Gamayun underscore the critical importance of addressing vulnerabilities in widely used software like Microsoft Windows.

## Impact

The exploitation of CVE-2025-26633 by Water Gamayun highlights the evolving sophistication of cyber threats and the need for robust cybersecurity measures. Organizations must remain vigilant and proactive in their cybersecurity strategies to mitigate the risks associated with such advanced threats.

## Conclusion

As the campaign by Water Gamayun continues to evolve, cybersecurity teams must remain vigilant. Monitoring indicators of compromise linked to Water Gamayun's operations is crucial for organizations. Implementing layered security strategies is essential to safeguard digital assets against emerging threats.

For more information and detailed analysis, refer to the original articles:
- [Russian Hackers Exploit CVE-2025-26633 via MSC EvilTwin to Deploy SilentPrism and DarkWisp](https://thehackernews.com/2025/03/russian-hackers-exploit-cve-2025-26633.html)
- [Deep Dive into Water Gamayun Cyberattacks](https://www.trendmicro.com/en_us/research/25/c/deep-dive-into-water-gamayun.html)
- [EncryptHub Exploits Windows Zero-Day to Deploy Rhadamanthys and StealC Malware](https://thehackernews.com/2025/03/encrypthub-exploits-windows-zero-day-to.html)



