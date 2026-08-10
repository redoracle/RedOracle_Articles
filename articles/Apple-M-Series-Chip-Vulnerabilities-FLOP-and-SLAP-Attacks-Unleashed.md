---
title: Apple M-Series Chip Vulnerabilities FLOP and SLAP Attacks Unleashed
tags: [Apple, M-Series Chips, FLOP Attacks, SLAP Attacks, vulnerabilities, data leakage, speculative execution, side-channel attacks]
categories: [News]
date: 2025-01-29
id: apple-chip-flop-slap-2025-01-29
sidebar: false
isOriginal: true
star: false
lastUpdated: true
---

# Apple M-Series Chip Vulnerabilities FLOP and SLAP Attacks Unleashed

![Image](https://storage.googleapis.com/red_articles/Apple-M-Series-Chip-Vulnerabilities-FLOP-and-SLAP-Attacks-Unleashed.png)

## Introduction

Recently, new vulnerabilities have been discovered in Apple chips, exposing sensitive data like credit card information and locations from Chrome and Safari. These vulnerabilities, known as FLOP and SLAP attacks, stem from side-channel exploits based on speculative execution.

## Key Highlights

- FLOP attack exploits the Load Value Predictor (LVP) to read any memory address, stealing data from Google Maps, Proton Mail, and iCloud Calendar.
- SLAP attack targets the Load Address Predictor (LAP) in Safari, accessing sensitive information from Gmail, Amazon, and Reddit.
- Affected devices include Mac laptops, Mac desktops, iPads, and iPhones from specific dates.
- Researchers propose mitigations, and Apple has acknowledged the issue.

## Insights & Analysis

The vulnerabilities in Apple Silicon chips impact various devices, bypassing hardware-level protections and allowing malicious sites to steal login-protected information. The SLAP attack targets Safari on specific chips, while the FLOP attack compromises Safari and Chrome, extracting sensitive data like location history and credit card information.

Apple plans to address these vulnerabilities in future security patches, advising users to enable automatic updates for protection. Previous vulnerabilities like 'GoFetch' have targeted Apple silicon devices, highlighting ongoing challenges in securing macOS systems.

## Conclusion

In conclusion, the FLOP and SLAP attacks expose Apple M-Series chips to speculative execution exploits, emphasizing the importance of staying updated with security patches. While there is no immediate risk to users, it is crucial to remain vigilant and follow Apple's recommendations for mitigating these vulnerabilities.

**Fact Checking Section:**
- [Research on FLOP at USENIX Security Symposium](link)
- [Research on SLAP at IEEE Symposium](link)




