---
title: Chrome 140 Bolsters Security with Six CVEs Fixed and RCE Mitigated
tags:
  [
    chrome,
    vulnerabilities,
    rce,
    v8,
    patch,
    bug-bounty,
    fuzzing,
    sanitizers,
    vulnerability-disclosure,
    researchers,
    rollout,
    extended-stable,
    toolbar,
    extensions,
    downloads,
    browsers,
  ]
categories: [News]
date: 2025-09-04
id: Chrome-140-Bolsters-Security-with-Six-CVEs-Fixed-and-RCE-Mitigated-2025-09-04
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
        "headline": "Chrome 140 Bolsters Security with Six CVEs Fixed and RCE Mitigated",
        "image": ["https://storage.googleapis.com/red_articles/.png"],
        "datePublished": "2025-09-04T23:45:05.402Z",
        "dateModified": "2025-09-04T23:45:05.402Z",
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
          "@id": "https://redoracle.com/News/Chrome-140-Bolsters-Security-with-Six-CVEs-Fixed-and-RCE-Mitigated.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/Chrome-140-Bolsters-Security-with-Six-CVEs-Fixed-and-RCE-Mitigated.png)

## Introduction

Chrome 140 bolsters security with six CVEs fixed and remote code execution risk mitigated. This release reinforces Chrome's multi-layered defense approach combining patch management, bug-bounty collaboration, fuzzing, and sanitizer-driven discovery. Keywords integrated throughout: chrome vulnerabilities rce v8 patch bug-bounty fuzzing sanitizers vulnerability-disclosure researchers rollout extended-stable toolbar extensions downloads browsers.

## Executive Summary

- Google released Chrome 140 to the stable channel for Windows Mac and Linux with targeted security improvements and a staged rollout across channels.
- Build versions: Linux 140.0.7339.80; Windows and macOS 140.0.7339.80 and 140.0.7339.81; Extended Stable Channel for Windows and macOS receives 140.0.7339.81.
- Six security fixes included one high severity use-after-free in the V8 JavaScript engine identified as CVE-2025-9864 which could enable remote code execution and potential data compromise.
- Three of the six fixes came from external researchers under Google’s vulnerability rewards program with monetary awards ranging from 1,000 to 5,000 USD.
- Internal remediation consolidated as ID 442611697 addresses multiple issues surfaced by AddressSanitizer MemorySanitizer UndefinedBehaviorSanitizer Control Flow Integrity libFuzzer and AFL.

## Key Highlights

- High severity CVE-2025-9864 reported by Pavel Kuzmin of the Yandex Security Team on 2025-07-28 describes a use-after-free in V8 enabling possible remote code execution.
- Medium severity CVE-2025-9865 reported by Khalil Zhani on 2025-08-07 involves an inappropriate implementation in the Toolbar component reward 5,000 USD.
- Medium severity CVE-2025-9866 reported by NDevTK on 2024-11-16 affects the Extensions system reward 4,000 USD.
- Medium severity CVE-2025-9867 reported by Farras Givari on 2025-05-04 concerns the Downloads component reward 1,000 USD.
- Internal combined fix ID 442611697 addresses multiple sanitizer and fuzzing findings across the codebase.

## What Changed and Who Reported the Vulnerabilities

- Six security fixes were integrated into Chrome 140. Three were externally reported via the vulnerability-disclosure and bug-bounty process.
- CVE-2025-9864 High severity use-after-free in V8 reported by Pavel Kuzmin Yandex Security Team on 2025-07-28. Impact includes potential remote execution of arbitrary code data exfiltration and system compromise.
- CVE-2025-9865 Medium severity inappropriate implementation in Toolbar reported by Khalil Zhani on 2025-08-07 reward 5,000 USD.
- CVE-2025-9866 Medium severity issue in Extensions reported by NDevTK on 2024-11-16 reward 4,000 USD.
- CVE-2025-9867 Medium severity bug in Downloads reported by Farras Givari on 2025-05-04 reward 1,000 USD.
- Internal efforts produced a consolidated fix ID 442611697 addressing issues uncovered by AddressSanitizer MemorySanitizer UndefinedBehaviorSanitizer Control Flow Integrity libFuzzer and AFL.

## Release Details Versions Channels and Rollout

- Linux receives 140.0.7339.80.
- Windows and macOS receive 140.0.7339.80 and 140.0.7339.81.
- Extended Stable Channel for Windows and macOS receives 140.0.7339.81.
- Release notes and the Chromium release logs document the full changelog and security attributions.
- Rollout is staged; updates will propagate progressively to end users over days and weeks as devices check for updates.

## Security Fixes and CVEs Detailed

- CVE-2025-9864 Severity High Use-after-free in V8
  - Reporter Pavel Kuzmin Yandex Security Team reported 2025-07-28.
  - Affects V8 JavaScript engine memory management leading to potential remote code execution.
  - Consequences include arbitrary code execution and possible data theft or system compromise.
  - Reward listed as Not Applicable in the provided table but issue acknowledged as critical.
- CVE-2025-9865 Severity Medium Toolbar inappropriate implementation
  - Reporter Khalil Zhani reported 2025-08-07 reward 5,000 USD.
  - UI component related vulnerability with potential security implications through state or input handling.
- CVE-2025-9866 Severity Medium Extensions subsystem
  - Reporter NDevTK reported 2024-11-16 reward 4,000 USD.
  - Vulnerability affects extension handling and integrity controls.
- CVE-2025-9867 Severity Medium Downloads component
  - Reporter Farras Givari reported 2025-05-04 reward 1,000 USD.
  - Bug impacts download workflows and file handling state transitions.
- Internal Fix ID 442611697
  - Consolidates multiple fixes resulting from sanitizer and fuzzing pipelines.
  - Tools involved AddressSanitizer MemorySanitizer UndefinedBehaviorSanitizer Control Flow Integrity libFuzzer AFL.
  - Reflects Google’s automation assisted security testing and remediation processes.

## Researchers Rewards and Disclosure

- Google’s vulnerability rewards program incentivizes responsible disclosure and contributes to timely fixes.
- Reward scale here spans 1,000 to 5,000 USD reflecting severity and exploitability considerations.
- External contributors in this release include Pavel Kuzmin Yandex Security Team Khalil Zhani NDevTK and Farras Givari.
- Internal security teams use sanitizers and fuzzing to find issues preemptively and to complement external reports.

## Internal Fixes and Security Practices

- Chrome’s security workflow leverages a combination of static analysis dynamic sanitizers fuzzing and CFI.
- AddressSanitizer MemorySanitizer and UndefinedBehaviorSanitizer detect memory safety and undefined behavior concerns.
- libFuzzer and AFL provide fuzzing coverage to uncover edge case inputs and logic flaws.
- Control Flow Integrity reinforces runtime protections to reduce exploitability of memory errors.
- Consolidated internal patching and cross-team code review implement defense-in-depth to reduce RCE exposure.

## Timeline of Events

- 2024-11-16 NDevTK reports CVE-2025-9866 affecting Extensions system.
- 2025-05-04 Farras Givari reports CVE-2025-9867 in Downloads component.
- 2025-07-28 Pavel Kuzmin Yandex Security Team reports CVE-2025-9864 V8 use-after-free.
- 2025-08-07 Khalil Zhani reports CVE-2025-9865 Toolbar issue.
- 2025-09-03 Chrome 140 released to stable channel for Windows Mac and Linux builds 140.0.7339.80 and 140.0.7339.81; Extended Stable Channel receives variant 140.0.7339.81.
- Post-release internal patch ID 442611697 consolidated sanitizer and fuzzing based fixes.

## Impact Implications and Strategic Significance

- The V8 use-after-free CVE-2025-9864 represents the most critical threat in this release given its RCE potential against browsers which are high value attack targets.
- Fixes across Toolbar Extensions and Downloads reduce attack surface across UI extension and file handling vectors in browsers.
- Monetary rewards and public disclosures foster coordinated vulnerability-disclosure and improve ecosystem resilience.
- Sanitizer and fuzzing driven findings demonstrate a mature automation assisted security posture and continuous integration with security testing.

## Stakeholders and Meaningful Actors

- Google Security Team coordinates remediation integrates patches and manages disclosure timelines.
- External researchers Pavel Kuzmin Yandex Security Team Khalil Zhani NDevTK and Farras Givari contributed reports that led to several CVE fixes and rewards.
- End-users organizations and developers using Chrome benefit from reduced RCE risk.
- Security research community and tooling ecosystems AddressSanitizer MemorySanitizer UBSan CFI libFuzzer AFL drive discovery and validation workflows.

## Technical Insights and Deeper Analysis

- V8 use-after-free issues highlight the persistent challenge of memory-safety in high performance JavaScript runtimes where manual memory management and complex GC interactions raise exploitation risk.
- Toolbar component vulnerabilities illustrate that UI subsystems can contain exploitable flaws when state management input validation or implementation choices are weak.
- Extensions system flaws underscore the need for robust sandboxing permission models and integrity checks to limit compromise vectors in third-party add-ons.
- Downloads related bugs emphasize secure parsing validation and isolation of file handling subsystems to prevent chainable exploit scenarios.
- The internal fix ID 442611697 shows practical benefits of combining sanitizers with fuzzers to detect both memory errors and logical corner cases before public exploitation.

## Takeaways for Stakeholders

- Timely patching of Chrome 140 is essential to mitigate known RCE exposures especially CVE-2025-9864 in V8.
- Bug-bounty programs accelerate responsible disclosure and reward external researchers for identifying impactful vulnerabilities.
- A multi-faceted security program uniting sanitizers fuzzing and collaborative disclosure reduces windows of exposure for browsers.
- Organizations should track rollout and Extended Stable Channel variants 140.0.7339.81 for enterprise deployments.

## Detailed Analysis

- Attack surface analysis
  - V8 engine remains a high value target due to script execution privileges within the browser sandbox. Memory-corruption issues such as use-after-free can be weaponized into RCE chains especially when combined with JIT and type confusions.
  - UI components and feature subsystems such as Toolbar Extensions and Downloads present secondary yet meaningful surfaces where incorrect implementations can escalate privileges or enable sandbox escapes via complex exploitation chains.
- Exploitability factors
  - Exploitability depends on allocation patterns garbage collector behavior mitigations like CFI and hardening layers present in modern Chrome builds and platform level protections.
  - Sanitizers and fuzzers lower the probability of unnoticed vulnerabilities but do not eliminate zero day risk which justifies continued investment in layered mitigations.
- Organizational implications
  - Enterprises relying on Extended Stable Channel should plan for variant 140.0.7339.81 and validate compatibility with managed policies and extensions.
  - Security teams should correlate CVE details with internal risk models to prioritize update deployment for high exposure endpoints.
- Research ecosystem implications
  - Monetary rewards for medium severity issues indicate incentive alignment for researchers to surface diverse classes of bugs not limited to RCE.
  - Continued investment in fuzzing infrastructure and sanitizer instrumentation yields recurring discovery of subtle memory and logic flaws.

## Fact Checking and Sources

Relevant source materials strictly related to this release and the summarized CVEs include

- Chromium Blog Stable Channel Update for Desktop
  - https://blog.chromium.org
- Official Chromium release logs and changelogs
  - https://chromium.googlesource.com/chromium/src
- Reporting coverage
  - MSN article Google fixes several security vulnerabilities with Chrome 140 update
  - GB Hackers Chrome 140 Release Fixes Critical RCE Vulnerabilities

Please consult the Chromium release notes and the official Chrome stable-channel update post for authoritative changelog entries and CVE attributions.

## Conclusion

Chrome 140 delivers a focused set of security fixes that collectively mitigate remote code execution risk and harden multiple browser subsystems. The release highlights coordinated vulnerability-disclosure efforts between external researchers and Google internal teams supported by bug-bounty incentives and automated sanitizer and fuzzing pipelines. For chrome users and organizations the combined effect is meaningful reduction in exploitability across v8 toolbar extensions and downloads components and a continued demonstration of security engineering practices centered on defense-in-depth.

Summary Chrome 140 Bolsters Security with Six CVEs Fixed and RCE Mitigated


