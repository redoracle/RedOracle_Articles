---
title: GitHub Action Supply Chain Compromise Alert 
tags: [ GitHub, supply chain, exploit, data breach, GitHub Actions ]
categories: [News]
date: 2025-03-23
id: GitHub-Action-Supply-Chain-Compromise-Alert-2025-03-23
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
        "headline": "GitHub Action Supply Chain Compromise Alert",
        "image": ["https://storage.googleapis.com/red_articles/GitHub-Action-Supply-Chain-Compromise-Alert.png"],
        "datePublished": "2025-03-23T08:00:00+00:00",
        "dateModified": "2025-03-23T08:00:00+00:00",
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
          "@id": "https://redoracle.com/News/GitHub-Action-Supply-Chain-Compromise-Alert.html"
        }
      }
---

# GitHub Action Supply Chain Compromise Alert

![Image](https://storage.googleapis.com/red_articles/GitHub-Action-Supply-Chain-Compromise-Alert.png)

## Introduction

The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning regarding a significant vulnerability in the GitHub Action, tj-actions/changed-files, which has been added to its Known Exploited Vulnerabilities (KEV) catalog. This vulnerability allows attackers to exploit sensitive data through compromised actions logs.

## Key Highlights

- CISA added the vulnerability on March 18, 2025.
- The flaw is tracked as CVE-2025-30066 with a CVSS score of 8.6, indicating high severity.
- The tj-actions/changed-files GitHub Action contains a malicious code vulnerability that enables remote attackers to access sensitive information, including AWS access keys, GitHub personal access tokens (PATs), npm tokens, and private RSA keys.
- Cloud security company Wiz identified that the attack may have originated from the compromise of another GitHub Action, reviewdog/action-setup@v1, which was used by tj-actions/changed-files.

## Insights & Analysis

The compromise of reviewdog/action-setup@v1 occurred around the same time as the tj-actions PAT compromise on March 11, 2025. The attack is characterized as a cascading supply chain attack, indicating a broader risk to the software supply chain. The breach highlights significant security risks associated with GitHub Actions and the potential for unauthorized access to sensitive data.

## Conclusion

The CISA warning serves as a critical reminder of the vulnerabilities present in software supply chains, particularly in CI/CD environments. Organizations must remain vigilant and proactive in securing their development workflows. For more information, you can follow us on [Twitter](https://twitter.com/thehackersnews) and [LinkedIn](https://www.linkedin.com/company/thehackernews/).



