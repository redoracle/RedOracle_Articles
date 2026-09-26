---
title: "ShinyHunters hackers expanded attacks on Oracle's PeopleSoft, Google says"
date: "2026-09-26"
description: "ShinyHunters hackers expanded attacks on Oracle's PeopleSoft, Google says"
tags: ["shinyhunters", "attacks", "oracle", "peoplesoft", "hackers", "2026", "defenses", "expanded", "education", "organizations"]
schema-type: "NewsArticle"
---

![ShinyHunters hackers expanded attacks on Oracle's PeopleSoft, Google says](https://storage.googleapis.com/red_articles/shinyhunters-hackers-expanded-attacks-on-oracles-peoplesoft-google-says.avif)

# ShinyHunters hackers expanded attacks on Oracle's PeopleSoft, according to multiple sources

## At a glance

ShinyHunters, a group known for targeting global enterprises through extortion campaigns, has resumed its assaults on Oracle's PeopleSoft platform. According to reporting from Mandiant and Google Threat Intelligence, the hacking collective managed to bypass existing defense layers and continue exploiting a zero day vulnerability in the PeopleSoft ERP system. The expansion of these attacks marks a significant escalation since the initial summer surge, with Google confirming that the same group adapted its tactics after defensive patches were deployed. The campaign, which operated between late May and early June 2026, has impacted dozens of organizations across various sectors, with the majority concentrated in the U.S. higher education community. Oracle did not issue a public statement addressing the ongoing threats, leaving the situation to be evaluated by industry analysts and affected organizations alike [[1](#ref-1)][[2](#ref-2)].

## What happened

Google's security division, Mandiant, along with Google Threat Intelligence, publicly disclosed that ShinyHunters resumes widespread attacks on Oracle's PeopleSoft software. These intruders exploited a critical zero day vulnerability that existed prior to Oracle's security advisory, allowing them to move laterally within target environments. The initial wave of attacks began sometime in May 2026 and continued unabated until at least June 9, 2026, when the activity came under closer scrutiny [[1](#ref-1)]. During this period, the ShinyHunters operation compromised over one hundred organizations, with the majority belonging to American higher education institutions alone. Google's analysis indicated that approximately sixty-eight percent of the affected entities fell within the education sector, underscoring the strategic focus of the campaign on academic institutions that rely heavily on PeopleSoft for student management, financial operations, and administrative workflows [[2](#ref-2)].

The extent of the damage extended beyond simple system compromise. ShinyHunters successfully extracted sensitive data from exposed systems, and the group made specific claims regarding access to the FBI's job portal. According to the group, they were able to obtain the names of employees within certain federal bureau units and even medical and psychiatric records. While these allegations have not been independently verified by external auditors, they illustrate the broader threat profile posed by ShinyHunters, whose reputation for demanding multi million dollar Bitcoin ransoms coupled with blackmail remains well established in the threat intelligence community. Oracle's response has been limited to standard incident notifications, with the company refusing public commentary on the nature or scope of the intrusion [[1](#ref-1)][[2](#ref-2)].

## Why it matters

The significance of the ShinyHunters-PeopleSoft campaign extends far beyond the immediate disruption to individual organizations. By targeting Oracle's PeopleSoft, a cornerstone application for managing enterprise resources such as human resources, finance, and supply chain operations, the attackers demonstrated a direct ability to penetrate legacy business systems that many enterprises consider too valuable to secure adequately. The fact that a single zero day vulnerability was sufficient to trigger widespread compromise highlights a critical gap in the security posture of numerous organizations that depend on PeopleSoft for mission-critical functions [[2](#ref-2)].

From an industry perspective, the attack raises alarms about the cascading risks associated with third-party software dependencies. PeopleSoft's ubiquity across healthcare, government, and educational sectors means that a successful breach can expose vast troves of personally identifiable information (PII), including student records, payroll data, and internal HR information. The targeting of the education sector in particular amplifies the societal stakes, as breaches involving student data can lead to long-term privacy harms and reputational damage for both institutions and families [[3](#ref-3)]. Moreover, the ShinyHunters case serves as a reminder that criminal groups are increasingly adept at leveraging legitimate software vulnerabilities for mass-scale attacks, combining advanced exploitation techniques with sophisticated extortion playbooks designed to maximize leverage.

The timing of these attacks also carries geopolitical weight. Many of the hit organizations operate within the U.S. higher education ecosystem, where recent policy shifts toward greater digital transformation have accelerated the adoption of cloud based applications built on enterprise platforms like PeopleSoft. Organizations that rushed to modernize without adequate security assessments now find themselves vulnerable to precisely the kind of persistent, adaptive attacks ShinyHunters employed. The fact that the campaign persisted past the issuance of Oracle's security advisory further suggests that the attackers either anticipated patching efforts and waited for downstream exposure, or chose not to prioritize remediation [[2](#ref-2)].

## Technical details

The technical mechanics behind the ShinyHunters offensive revolve around the exploitation of a zero day vulnerability in Oracle's PeopleSoft application stack. Zero day exploits represent some of the most dangerous types of threats because they target weaknesses unknown to the vendor, leaving no available patch or signature to counteract them. In this instance, the attackers discovered an unfixed flaw that enabled unauthorized access to PeopleSoft databases, likely through compromised web interfaces or misconfigured API endpoints commonly used for integration purposes [[1](#ref-1)]. Once inside, the intruders leveraged the accessibility of core modules such as human resources, finance, and supply chain administration functions to pivot deeper into network perimeters.

Advancements in reconnaissance reveal that the attackers deployed customized MeshCentral agents masquerading as legitimate cloud services. These decoy components performed administrative command queries that facilitated lateral movement across host boundaries. The timing of the campaign (operating just before Oracle released its formal security advisory) allowed the group to insert malicious payloads while security teams focused on responding to other incidents. As a result, many of the initially compromised systems remained undetected for days, compounding the impact on organizational resilience [[2](#ref-2)].

While the full attack chain has not been fully elucidated, the pattern suggests a methodical approach typical of organized crime groups. Initial foothold acquisition followed by systematic enumeration of database schemas, privilege escalation attempts, and extraction of high-value targets ranging from employee records to sensitive operational data. The prevalence of the higher education sector among the affected population points to the strategic value placed on student information systems and administrative resources, which often sit at the intersection of academic, financial, and personal data domains [[3](#ref-3)][[4](#ref-4)].

## What defenders should do

Given the severity and breadth of the ShinyHunters campaign, organizations that rely on Oracle PeopleSoft (or any similarly critical enterprise platform) should undertake comprehensive hardening measures regardless of whether their networks have been directly breached. First, ensure that all relevant software vendors are actively engaged in patching lifecycle procedures and that emergency fixes are applied within the window before propagation occurs. Second, implement robust network segmentation to limit the blast radius of any potential intrusion, particularly separating cloud based workloads from on-premises infrastructure [[2](#ref-2)]. Third, deploy advanced endpoint detection and response (EDR) solutions capable of identifying anomalous behavior characteristic of PeopleSoft exploitation chains, such as unexpected authentication patterns and unusual data exfiltration flows [[1](#ref-1)].

For organizations that have experienced successful compromises, forensic preservation becomes paramount. Snapshotting affected servers shortly before the final stages of data theft can enable thorough reconstruction of the attack timeline and facilitate identification of residual threats. Collaboration with threat intelligence platforms that track indicators related to ShinyHunters (such as unique IOC families, domain behaviors, and IoCs tied to the group) can accelerate containment efforts and help prevent secondary incidents [[2](#ref-2)]. Additionally, conducting penetration testing tailored to people software integrations can uncover hidden weak points in application logic and configuration settings that might otherwise remain undetected [[3](#ref-3)].

Finally, organizations should consider upgrading to newer versions of PeopleSoft and enabling mandatory encryption in transit and at rest. The presence of unpatched zero day vulnerabilities underscores the importance of maintaining current software baselines and avoiding deferred maintenance practices. Executive-level awareness of the threat landscape is equally crucial; leadership must recognize that cyber incidents carry financial, legal, and reputational consequences that extend beyond the immediate organization to stakeholders, partners, and customers [[3](#ref-3)].

## What remains unknown

The current investigative picture leaves several critical questions unanswered. Specifically, the exact scope of data exfiltration beyond the reported two terabytes of FBI related personnel information remains unclear. While ShinyHunters claimed access to the FBI jobs website and subsequently dumped thousands of records, independent verification of the completeness and integrity of those datasets is pending. Furthermore, the relationship between the PeopleSoft compromise and the subsequent access to AWS GovCloud instances (allegedly used to store and transfer data) has not been fully substantiated; the chain of custody for these documents requires additional forensic review [[1](#ref-1)][[2](#ref-2)].

Additional unknowns include the extent of initial access vectors beyond the reported PeopleSoft zero day exploit. Whether spear phishing campaigns, compromised credentials, or insider threats contributed to the entry point remains unconfirmed. Similarly, the group's future operating model, whether they intend to expand to other enterprise applications or shift focus toward different industries, will shape the evolution of this threat vector over time. Until these gaps are closed through coordinated threat hunting and information sharing, organizations should treat the current campaign as an active and evolving risk rather than a contained incident [[3](#ref-3)][[4](#ref-4)].

---

**References**

[[1](#ref-1)] ShinyHunters Resume Oracle PeopleSoft Attacks After Bypassing Defenses, mezha.net ([https://mezha.net/eng/news/a2aad52e_shinyhunters_resume_oracle/](https://mezha.net/eng/news/a2aad52e_shinyhunters_resume_oracle/))
[[2](#ref-2)] Google says ShinyHunters hackers targeting education sector via Oracle exploit, brandequity.economictimes.indiatimes.com ([https://brandequity.economictimes.indiatimes.com/news/digital/google-says-shinyhunters-hackers-targeting-education-sector-via-oracle-exploit/131683272](https://brandequity.economictimes.indiatimes.com/news/digital/google-says-shinyhunters-hackers-targeting-education-sector-via-oracle-exploit/131683272))
[[3](#ref-3)] This Week In Security: FBI Gets Hacked, Muse Vulnerable To ClickFix, Popular Rust Developers At Risk, And New Attacks Against RSA, hackaday.com ([https://hackaday.com/2026/09/25/this-week-in-security-fbi-gets-hacked-muse-vulnerable-to-clickfix-popular-rust-developers-at-risk-and-new-attacks-against-rsa/](https://hackaday.com/2026/09/25/this-week-in-security-fbi-gets-hacked-muse-vulnerable-to-clickfix-popular-rust-developers-at-risk-and-new-attacks-against-rsa/))
[[4](#ref-4)] This Week In Security: FBI Gets Hacked, Muse Vulnerable To ClickFix, Popular Rust Developers At Risk, And New Attacks Against RSA, hackaday.com ([https://hackaday.com/2026/09/25/this-week-in-security-fbi-gets-hacked-muse-vulnerable-to-clickfix-popular-rust-developers-at-risk-and-new-attacks-against-rsa/](https://hackaday.com/2026/09/25/this-week-in-security-fbi-gets-hacked-muse-vulnerable-to-clickfix-popular-rust-developers-at-risk-and-new-attacks-against-rsa/))
## References

1. <a id="ref-1"></a>[ShinyHunters Resume Oracle PeopleSoft Attacks After Bypassing Defenses](https://mezha.net/eng/news/a2aad52e_shinyhunters_resume_oracle/), mezha.net
2. <a id="ref-2"></a>[Google says ShinyHunters hackers targeting education sector via Oracle exploit](https://brandequity.economictimes.indiatimes.com/news/digital/google-says-shinyhunters-hackers-targeting-education-sector-via-oracle-exploit/131683272), brandequity.economictimes.indiatimes.com
3. <a id="ref-3"></a>[This Week In Security: FBI Gets Hacked, Muse Vulnerable To ClickFix, Popular Rust Developers At Risk, And New Attacks Against RSA](https://hackaday.com/2026/09/25/this-week-in-security-fbi-gets-hacked-muse-vulnerable-to-clickfix-popular-rust-developers-at-risk-and-new-attacks-against-rsa/), hackaday.com
4. <a id="ref-4"></a>[This Week In Security: FBI Gets Hacked, Muse Vulnerable To ClickFix, Popular Rust Developers At Risk, Attacking The RP2350, And New Attacks Against RSA](https://hackaday.com/2026/09/25/this-week-in-security-fbi-gets-hacked-muse-vulnerable-to-clickfix-popular-rust-developers-at-risk-and-new-attacks-against-rsa/), hackaday.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "ShinyHunters hackers expanded attacks on Oracle's PeopleSoft, Google says",
  "datePublished": "2026-09-26",
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
