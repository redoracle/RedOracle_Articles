---
title: Signal launches automatic key verification to detect tampering in encrypted chats
tags: [ automatic key verification, key transparency, end-to-end encryption, Safety Numbers, Cloudflare, Trail of Bits, Katherine Yen, Signal ]
categories: [News]
date: 2026-08-12
id: signal-automatic-key-verification-detect-tampering-2026-08-12
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
        "headline": "Signal launches automatic key verification to detect tampering in encrypted chats",
        "datePublished": "2026-08-12T17:09:04.083Z",
        "dateModified": "2026-08-12T17:09:04.083Z",
        "author": { "@type": "Person", "name": "RedOracle" },
        "publisher": {
          "@type": "Organization",
          "name": "RedOracle",
          "logo": { "@type": "ImageObject", "url": "https://www.redoracle.com/assets/redoracle_logo.png" }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://redoracle.com/News/signal-automatic-key-verification-detect-tampering.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/signal-automatic-key-verification-detect-tampering.avif)

## Introduction

Signal announced a new feature called "automatic key verification" on 2026-08-12. The feature uses key transparency and third-party auditors to check that encryption keys used in Signal conversations have not been tampered with, providing a streamlined alternative to manual Safety Number verification.

## What happened

On 2026-08-12 Signal released/announced automatic key verification, a cryptographic system that verifies consistent encryption keys across Signal’s network. Verification is performed by the user, the user’s Signal connections, and third-party auditors, without requiring in-person meetings or a secondary communication channel.

## Key facts

- Feature name: automatic key verification.  
- Purpose: provides a streamlined way to confirm there’s no unexpected party between you and the other end of an end-to-end encrypted session.  
- Verification is performed by you, your Signal connections, and third-party auditors.  
- The system uses key transparency to verify consistent encryption keys across Signal’s network.  
- Auditors named in the announcement are Cloudflare and Trail of Bits; they operate independently.  
- Auditors' access is cryptographically protected; they do not receive users’ phone numbers or usernames in plaintext.  
- The feature helps ensure a phone number or username remains linked to the same encryption key.  
- Automatic verification checks can fail if a contact’s phone number is not available (for example, conversations started with a username).  
- If automatic verification is unavailable, users can manually verify Safety Numbers.  
- Users can disable automatic key verification in Privacy > Advanced settings.  
- Disabling automatic verification allows continuing to rely on manual Safety Number verification.  
- The announcement notes a directory compromise risk: if an attacker gains control of Signal’s directory, they could swap in a different key for a target account to spy on conversations.  
- Claim made in the announcement: automatic key verification provides the same assurance as manually verifying Safety Numbers.  
- Claim made in the announcement: verifications are performed independently and do not require an in-person meeting or secondary channel.

## Timeline

- 2026-05 — Signal added new protections after Russian state-sponsored hackers targeted high-profile accounts with fake "Signal Support" alerts.  
- 2026-08-12 — Release/announcement of automatic key verification.

## Impact

- For most users, automatic key verification should make it easier to detect tampering without the friction of manual Safety Number checks or in-person key comparisons.  
- The feature reduces the need for a secondary verification channel, per Signal’s announcement, but has limitations when contact phone numbers are not available (e.g., username-only conversations).  
- Users retain control: automatic verification can be disabled and manual Safety Number verification remains available.  
- The system relies on key transparency and third-party auditors; while auditors’ access is cryptographically protected, Signal warns a directory compromise could still allow key substitution by an attacker.

## Technical context

- Key transparency is used to verify that encryption keys are consistent and correctly associated with identities (phone numbers or usernames) across Signal’s network.  
- Safety Numbers are Signal’s existing method for manual end-to-end key verification; automatic key verification is presented as a streamlined alternative that Signal claims provides equivalent assurance.  
- Cloudflare and Trail of Bits act as independent auditors in the system; their access is restricted so they do not receive phone numbers or usernames in plaintext.

## Update history

- 2026-08-12 — Initial publication: coverage of Signal’s announcement of automatic key verification.

## Fact checking and sources

Sources used for this article:
- https://www.helpnetsecurity.com/2026/08/12/signal-automatic-key-verification-feature

## Conclusion

Signal’s automatic key verification introduces a key-transparency–based, audited system intended to make tamper detection easier for end users while preserving manual verification options and auditor privacy protections. The feature addresses usability and threat-model concerns following earlier attacks on high-profile accounts, but Signal notes directory compromise remains a potential risk.

<script setup lang="ts">
import SocialShare from "@SocialShare";
</script>

<SocialShare title="Signal launches automatic key verification to detect tampering in encrypted chats"></SocialShare>

