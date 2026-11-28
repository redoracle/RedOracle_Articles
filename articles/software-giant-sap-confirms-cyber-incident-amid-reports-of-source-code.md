---
title: "Software giant SAP confirms cyber incident amid reports of source code breach"
date: "2026-11-28"
description: "Software giant SAP confirms cyber incident amid reports of source code breach"
tags: ["incident", "code", "access", "github", "software", "customer", "hackers", "internal", "project", "granite"]
schema-type: "NewsArticle"
---

![Software giant SAP confirms cyber incident amid reports of source code breach](https://storage.googleapis.com/red_articles/software-giant-sap-confirms-cyber-incident-amid-reports-of-source-code.avif)

# SAP Confirms Cyber Incident Involving GitHub Access and Source Code

## At a glance

SAP recently confirmed a cybersecurity incident following reports that attackers infiltrated its development infrastructure and gained access to source code [[1](#ref-1)]. The intrusion targeted the GitHub repositories used by SAP, where attackers reportedly acquired authentication tokens belonging to employees [[1](#ref-1)]. This access allowed them to copy and modify source code [[1](#ref-1)]. In response, the German software giant launched an internal incident response operation code named "Project Granite" to contain and investigate the fallout [[1](#ref-1)].

So far, investigators have found no evidence of unauthorized access to customer business data [[1](#ref-1)]. The incident, first reported by the German magazine Der Spiegel, surfaced through internal communications and sources close to the matter [[1](#ref-1)]. As Europe's largest software provider, based in Walldorf, SAP supports critical operations (such as accounting, supply chains, and human resources) for major corporations and government agencies globally [[1](#ref-1)], [[3](#ref-3)]. This breach highlights the growing risks facing modern software supply chains, where developer environments are increasingly targeted by sophisticated campaigns [[4](#ref-4)].

## What happened

Upon detecting suspicious activity, SAP took immediate action to protect its systems and ensure service integrity [[3](#ref-3)]. In a statement to Recorded Future News, the company confirmed that it implemented containment measures, although it did not share specific details about the nature of the breach [[1](#ref-1)]. The response operation, code named "Project Granite," disrupted several development teams across the organization [[1](#ref-1)]. Security personnel restricted access to GitHub, suspended automated builds, and began replacing the digital keys used to sign and verify software [[1](#ref-1)]. This key rotation is an expensive operational task: every build pipeline relying on the old signatures must be updated before new releases can go out, halting continuous integration workflows and forcing engineers to manually validate new chains of trust.

The German Press Agency, which reviewed internal SAP communications, reported that the company warned employees about the GitHub issue several days before it went public [[1](#ref-1)]. Staff were advised to review their credentials and take extra precautions [[1](#ref-1)]. An internal memo cited by Der Spiegel described the crisis as active, indicating a highly fluid situation as the news broke [[2](#ref-2)]. SAP soon published a formal confirmation of the incident, stating that investigators had found no evidence of intrusion into customer databases at that stage [[5](#ref-5)].

Further reporting from Der Spiegel suggests the attackers stole employee authentication tokens to bypass perimeter controls [[1](#ref-1)]. An insider told the magazine that these credentials enabled the attackers to copy and alter files directly within the repository [[5](#ref-5)]. While SAP acknowledged the suspicious activity, it has not officially confirmed whether code was modified or stolen [[4](#ref-4)]. The company has also remained silent on the identity of the perpetrators, their initial entry vector, and whether the threat is fully contained [[1](#ref-1)]. When pressed for details, representatives declined to answer specific questions [[2](#ref-2)].

This incident follows a separate supply chain exploit in April, where attackers injected malicious code into several open source packages managed by SAP to harvest sensitive data [[1](#ref-1)]. This pattern emphasizes the persistent interest threat actors have in development infrastructure. When a vendor distributes both proprietary enterprise software and public packages, securing the boundary between them demands strict repository access controls, automated token rotation, and continuous monitoring of code commits.

## Confirmed impact

While the intrusion into development infrastructure is significant, SAP maintains that customer business databases remain untouched [[1](#ref-1)]. "Based on our investigation to date, we have found no evidence of unauthorized access to customer business data," the company announced [[1](#ref-1)]. SAP added that it is working to further strengthen its security and resilience [[1](#ref-1)]. Reports from Reuters on November 27 echoed this sentiment, confirming that investigators had found no signs
## References

1. <a id="ref-1"></a>[therecord.media](https://therecord.media/sap-germany-cyberattack-github), therecord.media
2. <a id="ref-2"></a>[SAP Confirms Security Incident as Hackers Reportedly Steal GitHub Tokens and Alter Code](https://cybersecuritynews.com/sap-security-incident/), cybersecuritynews.com
3. <a id="ref-3"></a>[SAP Hit by Cyberattack as Hackers Reportedly Steal GitHub Credentials and Alter Source Code](https://financefeeds.com/sap-hit-by-cyberattack-as-hackers-reportedly-steal-github-credentials-and-alter-source-code/), financefeeds.com
4. <a id="ref-4"></a>[SAP Confirms Cyberattack After Hackers Allegedly Used Stolen Employee Tokens to Access Source Code](https://www.dawan.africa/news/sap-confirms-cyberattack-after-hackers-allegedly-used-stolen-employee-tokens-to-access-source-code), dawan.africa
5. <a id="ref-5"></a>[SAP confirms security incident after reported GitHub breach](https://thenextweb.com/news/sap-security-incident-github-breach), thenextweb.com
6. <a id="ref-6"></a>[SAP confirms security incident after suspicious GitHub activity](https://www.bleepingcomputer.com/news/security/sap-confirms-security-incident-after-suspicious-github-activity/), bleepingcomputer.com
7. <a id="ref-7"></a>[SAP Confirms Security Incident, Sees No Customer Data ...](https://cxtoday.com/in-brief/sap-confirms-security-incident-sees-no-customer-data-access), cxtoday.com

## Related articles

- [CVE-2026-123039: Check Point Gateways Rooted, ESXi Wiped](https://redoracle.com/News/cve-2026-123039-check-point-gateways-rooted-esxi-wiped.html)
- [Hackers Exploit AhsayCBS Vulnerabilities to Hide Malware in PNG Images and Deploy Stealthy Backdoors](https://redoracle.com/News/hackers-exploit-ahsaycbs-vulnerabilities-to-hide-malware-in-png-images.html)
- [“Sextortion Narratives Debunking Webcam Extortion Claims and Strengthening Defenses”](https://redoracle.com/News/sextortion-narratives-debunking-webcam-extortion-claims-and-strengthening-defenses.html)
- [Random meeting and event invites on your calendar could be a phishing attack. Here’s how to stay safe](https://redoracle.com/News/random-meeting-and-event-invites-on-your-calendar-could-be-a.html)
- [Microsoft 365 phishing alert 2026: Hackers send fake outage emails, warn users of 24-hour deadline](https://redoracle.com/News/microsoft-365-phishing-alert-2026-hackers-send-fake-outage-emails-warn.html)


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Software giant SAP confirms cyber incident amid reports of source code breach",
  "datePublished": "2026-11-28",
  "author": {
    "@type": "Organization",
    "name": "RedOracle"
  },
  "publisher": {
    "@type": "Organization",
    "name": "RedOracle"
  }
}
</script>
