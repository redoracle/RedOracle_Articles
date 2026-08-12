---
title: “From Privacy Tool to Spyware The FreeVPN.One Chrome Extension Case”
tags:
  [
    “spyware,
    data-exfiltration,
    data-collection,
    browser-extension,
    chrome-web-store,
    privacy,
    surveillance,
    fake-feature,
    ai-threat-detection,
    attacker-infrastructure”,
  ]
categories: [News]
date: 2025-08-25
id: “From-Privacy-Tool-to-Spyware-The-FreeVPNOne-Chrome-Extension-Case”-2025-08-25
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
        "headline": "“From Privacy Tool to Spyware The FreeVPN.One Chrome Extension Case”",
        "image": ["https://storage.googleapis.com/red_articles/From-Privacy-Tool-to-Spyware-The-FreeVPNOne-Chrome-Extension-Case.avif"],
        "datePublished": "2025-08-25T13:19:08.347Z",
        "dateModified": "2025-08-25T13:19:08.347Z",
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
          "@id": "https://redoracle.com/News/From-Privacy-Tool-to-Spyware-The-FreeVPNOne-Chrome-Extension-Case.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/“From-Privacy-Tool-to-Spyware-The-FreeVPNOne-Chrome-Extension-Case”.avif)

## Introduction

From Privacy Tool to Spyware The FreeVPN.One Chrome Extension Case examines how a popular browser-extension marketed as a privacy aid became a vehicle for covert surveillance and large scale data-exfiltration. This analysis covers who was involved, what occurred, when changes were introduced, where data flowed, why the deception mattered, and how the technical flow enabled persistent data-collection and screenshot capture. Keywords integrated throughout include spyware, data-exfiltration, data-collection, browser-extension, chrome-web-store, privacy, surveillance, fake-feature, ai-threat-detection, attacker-infrastructure.

## Executive Summary

**Who** FreeVPN.One was a Chrome VPN extension with over 100000 installs, a Verified badge, and an average rating of 3.8 from about 1110 reviews. Koi Security researchers and Infosecurity Magazine investigators identified suspicious developer identity signals and a weak corporate footprint.

**What** The extension transitioned from a VPN utility to persistent spyware that silently captured visible screens, collected page metadata, and exfiltrated images and device details to attacker-controlled endpoints.

**When** Launch occurred in 2020. A permissions escalation in April 2025 (version 3.0.3) opened the door. July 2025 updates (version 3.1.1 and version 3.1.3 released 2025/07/17) introduced a visible ai-threat-detection feature and then silent screenshot capture and ongoing data exfiltration. Public disclosures were published in mid August 2025.

**Where** The attack surface was the Chrome Web Store and the user browser environment. Data was sent to attacker-infrastructure at domains such as aitd.one and its subdomain scan.aitd.one. Trusted services such as Google Sheets and Google Photos were observed as screenshot targets.

**Why** A fake-feature labeled Scan with AI Threat Detection served as a smokescreen for the real objective: covert data-harvesting and continuous monitoring.

**How** Manifest permissions permitted content script injection across HTTP and HTTPS pages. After a timed delay, a background service invoked Chrome capture functionality to take silent screenshots which were encoded and uploaded to remote servers. Additional device and geolocation data were collected at install or startup and transmitted after base64 encoding. A later encryption layer using AES 256 with RSA key wrapping and domain migration to scan.aitd.one increased obfuscation.

## Background and Stakeholders

- FreeVPN.One extension and its developer identity details
- Chrome Web Store as distribution and trust channel
- Koi Security researchers led by Lotan Sery publishing technical findings
- Infosecurity Magazine reporting the timeline and context, author Kevin Poireault
- Affected users who installed a privacy tool expecting limited data-collection
- Attacker-infrastructure at aitd.one and scan.aitd.one where exfiltrated data landed

Context includes historical examples of privacy-branded tools repurposed for surveillance and data collection, underscoring systemic risks within browser-extension ecosystems.

## What Happened and Timeline

- 2020 Launch of FreeVPN.One on the chrome-web-store
- 2025/04 Version 3.0.3 granted broad host permissions enabling cross-site injection
- 2025/07 Version 3.1.1 introduced a visible ai-threat-detection feature referenced in the privacy policy
- 2025/07/17 Version 3.1.3 activated silent screenshot capture and began sending images and metadata to aitd.one endpoints
- 2025/07 Domain obfuscation and encryption measures introduced, including migration to scan.aitd.one and AES 256 with RSA key wrapping
- 2025/08/19 Koi Security published a detailed technical report; Infosecurity Magazine published coverage summarizing findings and developer responses

## Technical Analysis and Detailed Analysis

Injection and permissions

- The extension requested broad host permissions that allowed a content script to be injected into all visited pages via the extension manifest.
- The content script monitored page context and triggered a timed capture sequence.

Delayed capture and service worker workflow

- After injecting the content script and waiting roughly 1.1 seconds to allow page rendering, a background service worker invoked the browser capture API to take a silent screenshot of the visible viewport.

Code examples of core calls observed

```javascript
// Function used to capture visible tab
chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
  // dataUrl contains base64 encoded PNG of visible viewport
});
```

Network exfiltration endpoints and payloads

- Captured screenshots and associated metadata were uploaded to aitd.one endpoints such as brange.php

```text
https://aitd.one/brange.php
https://aitd.one/bainit.php
https://aitd.one/analyze.php
```

- Each upload included the screenshot image data, current page URL, tab identifier, and a unique user identifier enabling session mapping.
- On install or startup the extension queried geolocation information, encoded results as base64, and sent the payload to bainit.php.

Obfuscation and evasion

- The operator added AES 256 encryption with RSA wrapping to payloads and shifted domain usage to scan.aitd.one to complicate traffic analysis and attribution.
- The visible ai-threat-detection feature referenced aitd.one/analyze.php yet background capture occurred prior to any explicit user action, creating a privacy-smoke screen.

Developer claims versus observed behavior

- The developer described capture as a background scan restricted to suspicious domains and promised future consent mechanisms.
- Koi Security replicated captures from benign, trusted domains indicating non selective surveillance and default enabled behavior.
- Public developer responses lacked verifiable corporate identifiers, contributing to attribution uncertainty.

## Indicators of Compromise and Evidence

- Domains: aitd.one and scan.aitd.one
- Endpoints: brange.php bainit.php analyze.php
- Observed versions: 3.0.3 3.1.1 3.1.3
- Timing: silent capture introduced in 3.1.3 on 2025/07/17
- Captured targets included Google Sheets and Google Photos demonstrating exposure of sensitive content
- Encryption: AES 256 with RSA key wrapping applied to payloads post July 2025

## Implications, Takeaways and Industry Significance

- Trust signals in extension marketplaces can mislead users when developer provenance is not verifiable
- Broad host permissions in browser-extensions enable pervasive data-collection and surveillance
- A fake-feature or ai-threat-detection UI can mask continuous data-exfiltration
- Obfuscation strategies such as encryption and domain migration complicate forensic efforts and delay discovery
- The case reinforces calls for stronger vetting, transparency requirements, and third party audits for extensions requesting cross-site access

## User Guidance and Non Actionable Recommendations

- Review extension permissions and privacy policies with a focus on host access and background capabilities
- Prefer extensions with verifiable developer identities and transparent data-handling disclosures
- Platforms should consider enhanced telemetry and vetting for extensions requesting broad HTTP and HTTPS permissions

## Detailed Analysis Summary

This case demonstrates a two stage technical flow enabling covert surveillance via a browser-extension marketed as a privacy tool. The apparent ai-threat-detection feature served as a decoy while persistent screenshot based data-collection and user activity reconstruction occurred. Attackers used attacker-infrastructure at aitd.one and scan.aitd.one and layered encryption to hinder detection. The incident highlights systemic risks in the chrome-web-store environment and illustrates how spyware can be embedded within legitimate-looking browser-extensions.

## Fact Checking and Sources

- Infosecurity Magazine article: search for Legitimate Chrome VPN Extension Turns to Browser Spyware by Kevin Poireault for original reporting
- Koi Security technical report: search for SpyVPN The VPN that Secretly Captures Your Screen by Koi Security or Lotan Sery for the in depth analysis
- Public discussion threads such as Hacker News summarizing coverage and community observations
- Independent video analysis by Addie LaMarr discussing observed behavior and implications

Summary

From Privacy Tool to Spyware The FreeVPN.One Chrome Extension Case exposes how a browser-extension positioned as a privacy aid evolved into persistent spyware performing silent screenshot capture and broad data-exfiltration. The convergence of broad manifest permissions, a misleading ai-threat-detection feature, and attacker-infrastructure created a privacy risk that underscores the need for greater transparency, verifiable vendor identity, and stronger control of browser-extension telemetry and permissions.


