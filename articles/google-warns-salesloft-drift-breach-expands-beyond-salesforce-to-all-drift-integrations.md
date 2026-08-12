---
title: “Google Warns Salesloft Drift Breach Expands Beyond Salesforce to All Drift Integrations”
tags:
  [
    “drift,
    oauth,
    tokens,
    integration,
    salesforce,
    googleworkspace,
    threat-actor,
    unc6395,
    data-theft”,
  ]
categories: [News]
date: 2025-08-31
id: “google-warns-salesloft-drift-breach-expands-beyond-salesforce-to-all-drift-integrations”-2025-08-31
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
        "headline": "“Google Warns Salesloft Drift Breach Expands Beyond Salesforce to All Drift Integrations”",
        "image": ["https://storage.googleapis.com/red_articles/google-warns-salesloft-drift-breach-expands-beyond-salesforce-to-all-drift-integrations.avif"],
        "datePublished": "2025-08-31T06:02:37.661Z",
        "dateModified": "2025-08-31T06:02:37.661Z",
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
          "@id": "https://redoracle.com/News/google-warns-salesloft-drift-breach-expands-beyond-salesforce-to-all-drift-integrations.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/“google-warns-salesloft-drift-breach-expands-beyond-salesforce-to-all-drift-integrations”.avif)

## Introduction

This article covers the advisory titled “Google Warns Salesloft Drift Breach Expands Beyond Salesforce to All Drift Integrations” and synthesizes the technical and operational details tied to drift, oauth, tokens, integration, salesforce, googleworkspace, threat-actor, unc6395, data-theft. The summary explains the incident background, timeline, impact, technical indicators, coordinated response, and practical lessons for cloud and identity teams.

## Executive Summary

- A wave of attacks using compromised Salesloft Drift OAuth tokens initially observed against Salesforce now extends to all Drift integrations, according to Google Threat Intelligence Group and Mandiant.
- Google and Mandiant advise treating any authentication tokens stored in or connected to the Drift platform as potentially compromised, expanding exposure beyond a single Salesforce integration.
- The core campaign exploited stolen Drift OAuth tokens to access Salesforce data across multiple customer environments from August 8 to August 18, 2025. A related activity on August 9, 2025 involved Drift Email tokens that permitted access to a small number of Google Workspace email accounts configured to integrate with Salesloft Drift.
- Google emphasizes this is not a compromise of Google Workspace or Alphabet infrastructure. The impact is limited to accounts configured to connect to Drift via Salesloft.

## What Happened

- Threat actors abused compromised OAuth tokens tied to the Drift integration to access Salesforce environments across a broad set of customers, enabling data exfiltration and credential harvesting.
- Attackers also abused Drift Email OAuth tokens to read messages in a limited number of Google Workspace mailboxes on August 9, 2025. Those mailboxes were explicitly configured to integrate with Salesloft Drift.
- Google observed that attackers could not pivot to other Google Workspace accounts outside the Drift-connected accounts within an affected customer domain.

## Who Is Involved

- Google Threat Intelligence Group GTIG and Mandiant led the investigation and published updated advisories.
- Salesloft as the provider coordinating Salesloft Drift integrations and Drift as the AI/chat integration are central to the integration vector.
- Salesforce represented the primary target ecosystem for data access via Drift tokens.
- Security responders such as Coalition assisted remediation and recovery efforts alongside GTIG and Mandiant.
- GTIG attributes the campaign activity to a threat-actor cluster tracked as UNC6395.

## Timeline and Chronology

- August 8 to August 18, 2025: Primary data theft campaign using compromised Drift OAuth tokens targeted Salesforce instances across multiple customers.
- August 9, 2025: Attackers used Drift Email OAuth tokens to access a very small set of Google Workspace emails associated with Drift integration.
- August 26, 2025: GTIG publicly highlighted that the campaign impacted more than just Salesforce integrations, noting Workspace accounts were affected.
- August 28, 2025: GTIG confirmed that Drift Email tokens were abused to read Google Workspace messages and reiterated that only accounts configured to connect with Salesloft were affected.
- August 29, 2025: Google and GTIG published updated advisories urging token revocation and credential rotation. Salesloft and Salesforce initiated remediation steps, including disabling Drift integrations where necessary.

## Impact and Scope

- The compromise extended beyond Salesforce to all Drift integrations, increasing the potential attack surface for organizations using Salesloft Drift across multiple SaaS platforms.
- Google Workspace impact was limited to specific accounts configured to integrate with Salesloft Drift. Google clarified there was no systemic compromise of Google Workspace or Alphabet.
- Attackers searched for sensitive assets such as AWS access keys and Snowflake-related tokens, supporting a credential-harvesting objective that could enable further access if credentials remained valid.
- Salesloft described remediation actions that include revoking impacted credentials and restoring Drift integrations only after verification of integrity. Collaboration among Salesforce, Drift, Mandiant, Coalition, and Google continued through remediation.

## Technical Details and Indicators

- The breach relied on stolen OAuth tokens issued to the Drift integration. Possession of these tokens enabled API level access to third-party systems according to the granted scopes.
- Drift Email OAuth tokens were abused to read email content for a small subset of Google Workspace accounts configured to use the Drift Email integration.
- GTIG documented that access was limited by configuration to accounts that had explicitly authorized the Salesloft Drift integration. Normal Google Workspace accounts not configured with Drift remained inaccessible.
- Observed attacker activity included automated searches and queries for credential artifacts and cloud secrets, consistent with a credential harvesting and data-theft campaign.
- Indicators of compromise referenced by responders included OAuth client identifiers tied to the Drift application, timestamps and IP addresses associated with token usage, and patterns of API calls consistent with exfiltration. Organizations should consult vendor-provided IOCs and GTIG advisories for specifics.

## Response, Mitigation, and Remediation

- Google actions included notifying impacted Workspace administrators, revoking the Drift Email OAuth tokens, and disabling the Google Workspace to Salesloft Drift integration during active investigation.
- GTIG and Google recommended that organizations using Salesloft Drift audit all third-party Drift integrations, revoke and rotate credentials for connected applications, and investigate connected systems for signs of unauthorized access.
- Salesloft advised customers who manage their own Drift connections to revoke API keys, reauthorize connections with new keys, and follow per-provider procedures to restore integrations.
- Salesforce temporarily disabled Salesloft integrations across Salesforce products as a containment measure while remediation progressed.
- Mandiant, Coalition, GTIG, Salesloft, and Salesforce coordinated to share IOCs, validate platform integrity, and guide customers on safe reauthorization workflows.

## Key Takeaways and Implications

- Token based access via OAuth across third-party integrations can expand an attack surface rapidly when tokens are compromised. Token lifecycle management and rapid revocation are critical defenses.
- Cross vendor and cross platform remediation was required to contain this incident. Effective response combined cloud security, identity and access management, and third-party governance.
- The UNC6395 actor cluster is characterized as opportunistic and data-theft focused, using compromised tokens to harvest credentials and exfiltrate sensitive data across SaaS ecosystems.
- Organizations should prioritize platform level visibility into OAuth grants, enforce least privilege for integration tokens, and maintain continuous monitoring of connected services to detect anomalous token usage.

## Detailed Analysis

Context and pattern analysis

- The campaign demonstrates a chain: initial token exposure followed by token reuse against any service where the token granted access. Because drift provides integrations across multiple platforms, attackers could pivot from Salesforce to other drift integrations, including email.
- The drift, oauth, tokens, integration, salesforce and googleworkspace keywords represent the core axis of risk: an integration token issued to a trusted automation or agent can become a long lived credential if not managed properly.
- UNC6395 behavior aligns with opportunistic scanning for cloud credentials and API tokens. The group prioritized rapid harvesting of secrets such as AWS keys and Snowflake tokens to deepen access.

Attack flow and attacker objectives

- Token acquisition mechanism remains the primary pivot point. Attackers with tokens invoked Drift associated APIs and third-party APIs permitted by OAuth scopes.
- Primary objectives were data-theft and credential harvesting to enable further lateral movement within cloud and SaaS ecosystems.

Detection and monitoring suggestions

- Monitor OAuth token issuances, unusual client id usage, abnormal token lifetimes, and token use from unexpected geolocations or IP ranges.
- Audit API calls associated with the Drift OAuth client id, including mass export patterns, repeated list or search calls across multiple accounts, and requests for secret store endpoints.
- Correlate Drift token activity with downstream artifacts such as AWS key usage, Snowflake queries, or atypical data export volumes.

Remediation and reauthorization caution

- Reauthorization steps for Drift integrations should only proceed after verification of platform integrity and validation that no malicious actors retained persistence.
- Reissued tokens and keys should be created with least privilege and limited lifetime where possible. OAuth scopes should be narrowed to the minimum required for functionality.

Operational considerations for third party governance

- Implement centralized visibility for third-party OAuth grants and a periodic automated review of granted scopes and token owners.
- Enforce stricter controls on which accounts may authorize Drift and similar integrations, especially for privileged or high value mailboxes and systems.

## References and Additional Reading

- The Hacker News article Google Warns Salesloft Drift Breach Impacts All Drift Integrations Beyond Salesforce
  - https://thehackernews.com/2025/08/google-warns-salesloft-drift-breach-impacts.html
- SecurityWeek article Google Confirms Workspace Accounts Also Hit in Salesforce–Salesloft Drift Data Theft Campaign
  - https://www.securityweek.com/google-confirms-workspace-accounts-also-hit-salesforce-salesloft-drift
- Google Cloud Blog Threat Intelligence advisory on data theft targeting Salesloft Drift integrated Salesforce instances
  - https://cloud.google.com/blog/topics/security/threat-intelligence-advisory-salesloft-drift-data-theft

Fact checking and event information

- Event window: August 8 to August 18, 2025 for the primary Salesforce-targeted campaign. Specific Drift Email token usage occurred on August 9, 2025 and was publicly affirmed by GTIG on August 28, 2025. Updated advisories and remediation notes were published August 29, 2025.
- Confirmatory sources include the GTIG advisory and reporting from independent news outlets such as The Hacker News and SecurityWeek. Where possible consult vendor advisories from Google, Salesloft, and Salesforce for IOCs and action lists.

## Closing Summary

Google warns that the Salesloft Drift breach expanded beyond Salesforce to affect all Drift integrations, with OAuth tokens used to harvest credentials and exfiltrate data across connected services. The campaign attributed to UNC6395 highlights the systemic risk posed by drift, oauth, tokens, integration, salesforce, googleworkspace and other connected services when token governance and lifecycle controls are insufficient. This incident underscores the need for coordinated, cross vendor response and stronger token hygiene across cloud ecosystems.


