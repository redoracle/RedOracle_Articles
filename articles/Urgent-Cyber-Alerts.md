---
title: Urgent Cyber Alerts 
tags: [ vulnerabilities, updates, exploitation, defense ]
categories: [News]
date: 2025-06-06
id: Urgent-Cyber-Alerts-2025-06-06
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
        "headline": "Urgent Cyber Alerts",
        "image": ["https://storage.googleapis.com/red_articles/Urgent-Cyber-Alerts.png"],
        "datePublished": "2025-06-06T10:05:33.160Z",
        "dateModified": "2025-06-06T10:05:33.160Z",
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
          "@id": "https://redoracle.com/News/Urgent-Cyber-Alerts.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/Urgent-Cyber-Alerts.png)

## Introduction

A critical security vulnerability has been identified in VMware's ESXi, Fusion, and Workstation products, currently being exploited by attackers. Broadcom has issued a warning regarding these vulnerabilities, emphasizing the urgency for users to update their software.

## Key Highlights

- **Vulnerabilities Identified:**
  - **TOCTOU Vulnerability (CVE-2025-22224):** Allows attackers to gain write access outside intended memory limits, leading to a heap overflow.
  - **Arbitrary Write Access Vulnerability (CVE-2025-22225):** Enables attackers to trigger any kernel write operation, breaking out of the sandbox.
  - **Unauthorized Read Access Vulnerability (CVE-2025-22226):** Allows unauthorized reading of information due to possible read access outside designated storage areas.

- **Current Exploitation:** Broadcom has confirmed active exploitation of all three vulnerabilities in the wild.

- **Software Updates:** Security updates are available for various VMware products, including ESXi 7.0, 8.0, Workstation 17.x, Fusion 13.x, and VMware Cloud Foundation. Users are urged to download and install these updates promptly.

## Insights & Analysis

### Stakeholders
- **Broadcom:** Issued the warning regarding the vulnerabilities in VMware products.
- **VMware:** Developer of the affected products, including ESXi, Fusion, and Workstation.

### Vulnerabilities Impact
- **TOCTOU Vulnerability:** Allows code execution in the VMX process on the host.
- **Arbitrary Write Access Vulnerability:** Enables breaking out of the sandbox.
- **Unauthorized Read Access Vulnerability:** Facilitates unauthorized reading of sensitive information.

### Discovery & Exploitation
- **Discovery:** Vulnerabilities were identified and reported on March 4, 2025.
- **Exploitation:** Broadcom has indicated that exploitation is currently occurring.

### Affected Products
- VMware ESXi 7.0, 8.0
- VMware Workstation 17.x
- VMware Fusion 13.x
- VMware Cloud Foundation 4.5.x
- VMware Telco Cloud Platform 2.x, 3.x, 4.x, and 5.x

### Exploitation Methods
- Attackers with admin rights in a virtual machine can exploit these vulnerabilities to gain unauthorized access and control over the host system.

## Impact

The ongoing exploitation of these vulnerabilities highlights the critical need for users to prioritize security updates and maintain vigilance against potential attacks.

## Conclusion

The identification of these vulnerabilities underscores the importance of proactive security measures in virtual environments. Users should immediately download and install the latest security updates provided by VMware to protect their systems from these vulnerabilities.

## Fact Checking Section

- [Heise Online - Critical Vulnerability in VMware ESXi, Fusion, and Workstation Being Abused](https://www.heise.de/)
- [Broadcom - Official Statement on VMware Vulnerabilities](https://www.broadcom.com/)
- [VMware - Security Updates and Patch Details](https://www.vmware.com/)

This article provides crucial information on urgent cyber alerts related to critical vulnerabilities in VMware products, emphasizing the need for immediate action to mitigate security risks.



