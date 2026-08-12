---
title: Signal introduces automatic key verification to confirm end-to-end encryption integrity
tags: [ automatic key verification, key transparency, Safety Numbers, Signal, Cloudflare, Trail of Bits, Katherine Yen ]
categories: [News]
date: 2026-08-12
id: signal-automatic-key-verification-launch-2026-08-12
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
        "headline": "Signal introduces automatic key verification to confirm end-to-end encryption integrity",
        "datePublished": "2026-08-12T16:49:04.951Z",
        "dateModified": "2026-08-12T16:49:04.951Z",
        "author": { "@type": "Person", "name": "RedOracle" },
        "publisher": {
          "@type": "Organization",
          "name": "RedOracle",
          "logo": { "@type": "ImageObject", "url": "https://www.redoracle.com/assets/redoracle_logo.png" }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://redoracle.com/News/signal-automatic-key-verification-launch.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/signal-automatic-key-verification-launch.avif)

## Introduction

Signal has introduced a feature called automatic key verification to help users confirm that their end-to-end encrypted chats have not been tampered with. The feature was published on 2026-08-12 and uses key transparency plus independent auditing to streamline verification of contact keys.

## What happened

Signal added "automatic key verification," a way to verify that there is no unexpected party between the two ends of an encrypted session without requiring in-person meetings or a second communication channel. Verification uses a system of checks performed by the user, their Signal connections, and third-party auditors. Two outside organizations, Cloudflare and Trail of Bits, independently audit the system, and auditors’ access to information is cryptographically protected so they do not receive users’ phone numbers or usernames in plaintext.

To run an automatic check a user opens a contact’s profile, taps View Safety Number, and selects Verify automatically. If verification succeeds, a green checkmark and the message Encryption verified are displayed.

## Key facts

- Feature name: automatic key verification.  
- Purpose: streamline confirmation that there’s no unexpected party in an encrypted session; guard against manipulation of Signal’s key directory where a different key could be substituted without the owner’s knowledge.  
- Basis: the feature is based on a cryptographic system called key transparency.  
- How it verifies: a system of verifications performed by the user, their Signal connections, and third-party auditors.  
- Auditors: Cloudflare and Trail of Bits independently audit the system.  
- Auditor privacy: auditors’ access to information is cryptographically protected; they do not receive users’ phone numbers or usernames in plaintext.  
- User flow: open contact profile → View Safety Number → Verify automatically. Success shows a green checkmark and "Encryption verified."  
- Limitations: automatic verification does not establish the real-world identity of the account owner and does not protect against a hijacked account. It currently depends on having the contact’s phone number and may be unavailable if a conversation started with only a username. Users can still manually verify Safety Numbers when automatic verification is unavailable.  
- Opt-out: users can disable automatic key verification under Privacy > Advanced settings and rely on manual Safety Number verification.  
- Related security change: Signal tightened protections in May 2026 for phishing/social-engineering after targeted attacks.

Claims noted in the source
- Claim: automatic key verification provides the same assurance as manual safety number verification.  
- Claim: auditors provide independent verification without accessing plaintext phone numbers or usernames.

## Timeline

- 2026-05: Signal added phishing/social-engineering protections after targeted attacks.  
- 2026-08-12: Publication/announcement of Signal automatic key verification feature.

## Impact

Automatic key verification aims to reduce the friction of ensuring end-to-end encryption integrity by avoiding the need for in-person verification or alternate channels, and by making it easier for users to detect tampering with the key directory. The feature reduces dependence on manual Safety Number checks in cases where automatic verification is available, while preserving manual verification options and an opt-out for users who prefer it. It does not, however, replace proof of real-world identity or protections against account takeover.

## Technical context

- Key transparency: the feature relies on key transparency to establish a consistent record mapping encryption keys to accounts. Key transparency updates occur when someone registers, changes their phone number or username, or recreates their account.  
- Threat addressed: the system is designed to guard against an attacker compromising the key directory or abusing access to substitute a different key for a target account.  
- Auditing model: auditing is performed by third parties (Cloudflare and Trail of Bits) with cryptographically protected access to data so auditors do not receive phone numbers or usernames in plaintext.

## Update history

- Initial publication: 2026-08-12 — Signal published the automatic key verification feature.

## Fact checking and sources

- Help Net Security — Signal’s new security feature checks if your encrypted chats were tampered with  
  https://www.helpnetsecurity.com/2026/08/12/signal-automatic-key-verification-feature

## Conclusion

Signal's automatic key verification adds a convenience-focused layer to key verification by combining key transparency, network-based checks, and independent audits. It addresses risks around key-directory manipulation while preserving manual verification and an opt-out for users; it does not, however, establish real-world identity or defend against account hijack.

<script setup lang="ts">
import SocialShare from "@SocialShare";
</script>

<SocialShare title="Signal introduces automatic key verification to confirm end-to-end encryption integrity"></SocialShare>

