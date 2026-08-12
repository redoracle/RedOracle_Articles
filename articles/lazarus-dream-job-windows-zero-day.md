---
title: Lazarus Group Deploys Fake Job Offers With Windows Zero-Day in Operation Dream Job
tags: [ Lazarus, Operation Dream Job, fake job offers, DLL sideloading, CVE-2026-68820, CVE-2025-49113, FudModule, MISTPEN, SecurityPDF, Troy, RelayShell, Roundcube, Enveil, two-infection-chains, phishing ]
categories: [News]
date: 2026-08-12
id: lazarus-dream-job-windows-zero-day-2026-08-12
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
        "headline": "Lazarus Group Deploys Fake Job Offers With Windows Zero-Day in Operation Dream Job",
        "datePublished": "2026-08-12T16:43:47.388Z",
        "dateModified": "2026-08-12T16:43:47.388Z",
        "author": { "@type": "Person", "name": "RedOracle" },
        "publisher": {
          "@type": "Organization",
          "name": "RedOracle",
          "logo": { "@type": "ImageObject", "url": "https://www.redoracle.com/assets/redoracle_logo.png" }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://redoracle.com/News/lazarus-dream-job-windows-zero-day.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/lazarus-dream-job-windows-zero-day.avif)

## Introduction

Check Point researchers have documented an ongoing campaign dubbed "Operation Dream Job" in which the Lazarus group uses fake job offers, trojanized PDF software and a Windows zero‑day to target primarily organizations in the defense sector. The findings were reported on August 12, 2026.

## What happened

According to the report, Lazarus used social-engineering lures — including a decoy document that used a Lockheed Martin job description — to deliver malicious payloads. Check Point could not determine exactly how initial contact was made, but assessed attackers likely posed as recruiters and contacted targets via professional networking platforms such as LinkedIn or via messaging apps.

The campaign runs two parallel infection chains that lead to multiple backdoors and persistence mechanisms, and it leverages a Windows zero‑day exploit in AFD.sys (CVE-2026-68820) to escalate privileges in at least one chain.

## Key facts

- The activity is part of Operation Dream Job and targets organizations in the defense sector.
- One decoy document used a Lockheed Martin job description.
- Check Point researchers note attackers pose as recruiters to lure targets.
- The campaign operates two infection chains in parallel.
- Chain 1:
  - Delivers an encrypted ZIP containing a legitimate, digitally signed PDF viewer executable, a malicious DLL intended for DLL sideloading, and an encrypted PDF payload.
  - Launching the executable causes a malicious DLL (libmupdf.dll) to be loaded via DLL sideloading; the DLL extracts a decoy PDF and an embedded payload that runs in memory.
  - The in-memory payload runs MISTPEN, an in-memory downloader, which retrieves additional components.
  - The chain exploits CVE-2026-68820 (Windows AFD.sys) to gain SYSTEM privileges and deploy the FudModule rootkit.
- Chain 2:
  - Impersonates Enveil and distributes a modified open-source PDF viewer called SecurityPDF.
  - The embedded payload in SecurityPDF installs the Troy backdoor.
  - At least three websites impersonating Enveil were used to distribute SecurityPDF; some of these sites appeared among top search results.
- Victim workflow:
  - Targets are phished to receive a malicious PDF and later instructed to download a PDF viewer from a vendor‑like site.
- Command-and-control (C2) infrastructure:
  - Compromised Roundcube webmail installations and other web servers were used to relay C2 traffic.
  - Those servers were vulnerable to CVE-2025-49113; stolen credentials may have been used and a RelayShell PHP web shell was deployed on some servers.
- Geographical scope:
  - Operation Dream Job expanded worldwide with focus on Western Europe and India, and activity extending to South America.
  - A France‑headquartered organization was used to spear‑phish additional targets.
- Related activity:
  - CERT‑UA documented similar fake-job‑offer tactics used by Sandworm/APT44 (Seashell Blizzard) against IT professionals since May 2026.
- Microsoft released a patch for CVE-2026-68820 on August 11, 2026 (Patch Tuesday).

## Timeline

- July 2026: Check Point observed Dream Job activity that included exploitation of CVE-2026-68820; the second infection chain was detected in July.
- August 11, 2026: Microsoft patched CVE-2026-68820.
- August 12, 2026: Report on Operation Dream Job published.

## Impact

- Targeted organizations in the defense sector were subject to credential theft, multi-stage malware delivery, privilege escalation to SYSTEM and rootkit deployment (FudModule).
- Use of trojanized vendor-like sites and search‑result impersonation increased the campaign's reach and likelihood of successful installs of malicious viewers (SecurityPDF).
- Compromised webmail and web servers used as C2 relays expanded the attackers' ability to persist and move data.

## Technical context

- DLL sideloading: Chain 1 uses a legitimate digitally signed PDF viewer executable to load a malicious libmupdf.dll via DLL sideloading, enabling an in‑memory payload that runs MISTPEN.
- In-memory techniques: MISTPEN operates as an in-memory downloader, reducing disk artifacts.
- Privilege escalation: CVE-2026-68820 (Windows AFD.sys) is exploited to obtain SYSTEM privileges and deploy the FudModule rootkit.
- Supply‑chain/impersonation tactics: Chain 2 distributed SecurityPDF via at least three Enveil-impersonating websites; victims were steered to vendor-like sites to install the viewer.
- C2 relay abuse: Compromised Roundcube instances and other vulnerable web servers (CVE-2025-49113) were used to relay command-and-control traffic; RelayShell PHP web shell was observed.

## Update history

- 2026-08-12: Initial report published summarizing Check Point's findings on Operation Dream Job, two infection chains, associated malware (MISTPEN, FudModule, Troy, RelayShell), exploitation of CVE-2026-68820, and use of Enveil impersonation sites.

## Fact checking and sources

Source: Help Net Security reporting on Check Point research
- https://www.helpnetsecurity.com/2026/08/12/north-korea-lazarus-fake-job-offers

## Conclusion

Operation Dream Job demonstrates continued use of social engineering (fake job offers) combined with technical advances (DLL sideloading, in-memory loaders, and a Windows zero‑day) to compromise targets in the defense sector. Check Point assesses the campaign reflects evolving Lazarus tradecraft and recommends organizations validate vendor downloads, monitor for signs of DLL sideloading and in-memory loaders, and apply the Microsoft patch for CVE-2026-68820.

<script setup lang="ts">
import SocialShare from "@SocialShare";
</script>

<SocialShare title="Lazarus Group Deploys Fake Job Offers With Windows Zero-Day in Operation Dream Job"></SocialShare>

