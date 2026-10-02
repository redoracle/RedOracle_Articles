---
title: "Our Reporter Emailed the F.B.I. Hackers. They Wrote Back."
date: "2026-10-02"
description: "Our Reporter Emailed the F.B.I. Hackers. They Wrote Back."
tags: ["data", "breach", "shinyhunters", "workers", "families", "risk", "claims", "stolen", "records", "employee"]
schema-type: "NewsArticle"
---

![Our Reporter Emailed the F.B.I. Hackers. They Wrote Back.](https://storage.googleapis.com/red_articles/our-reporter-emailed-the-fbi-hackers-they-wrote-back.avif)

# Hackers Claim to Have Stolen FBI Employee Data: Sources

## At a glance

A cyberattack targeting the FBI's personnel systems has drawn widespread attention after the hacking group ShinyHunters publicly claimed responsibility for accessing sensitive employee records. Initial reports indicate that between 2TB and 3TB of data were stolen from the agency, including personal information on approximately 10,000 workers through an Oracle‑linked data breach [[1](#ref-1)][[2](#ref-2)][[4](#ref-4)]. The stolen materials encompass FBI employees' personal details such as medical records, social security numbers, family information, and other classified data [[1](#ref-1)]. While the FBI has confirmed investigating unauthorized activity affecting its jobs portal, it has not yet verified the extent of the breach or whether ShinyHunters' stated scale is accurate [[6](#ref-6)][[7](#ref-7)]. The incident underscores growing risks associated with centralized government worker databases and highlights the sophistication of modern exploitation techniques that can bypass traditional perimeter defenses [[5](#ref-5)].

## What happened

The breach appeared to begin on September 22 when ShinyHunters defaced the FBI's job application website, apply.fbijobs.gov, replacing it with a counterfeit seizure notice claiming the site had been taken over by the group [[6](#ref-6)][[2](#ref-2)]. Shortly thereafter, the attackers moved laterally into FBI‑managed systems, ultimately compromising internal services and exfiltrating vast amounts of employee data [[5](#ref-5)][[3](#ref-3)]. The group specifically cited a previously unknown vulnerability in Oracle's PeopleSoft software (a critical human resources and recruitment platform used by the FBI) as the entry point for their intrusion [[5](#ref-5)][[3](#ref-3)]. Once inside, they gained access to numerous internal systems including Criminal Justice, Human Resources, Medical Records (Medlink), and other sensitive divisions [[5](#ref-5)][[7](#ref-7)]. The scale of the purge was substantial: ShinyHunters asserted that between two and three terabytes of information were stolen, representing nearly every current and former FBI agent along with every individual who had ever applied for a position at the bureau [[5](#ref-5)][[8](#ref-8)].

## Why it matters

The implications of this breach extend far beyond the FBI itself. The exposure of nearly 10,000 workers' personal information (including medical records, social security numbers, residential addresses, and family relationships) creates significant liability and reputational damage for the affected individuals [[4](#ref-4)]. Such data sets become attractive targets for identity thieves, stalkers, and foreign intelligence services capable of conducting sophisticated social engineering campaigns [[7](#ref-7)]. Moreover, the nature of the stolen information amplifies the risk of coercion and blackmail, as adversaries could leverage intimate personal details to pressure individuals into compliance [[7](#ref-7)]. The incident also raises questions about the security posture of legacy applications like Oracle PeopleSoft, which the FBI confirmed are indeed part of its enterprise architecture [[5](#ref-5)][[8](#ref-8)]. If these systems exist elsewhere, potentially at other federal agencies, the attack pattern suggests a repeatable vector worth serious study by both the private sector and government contractors [[5](#ref-5)]. From a policy perspective, the breach reinforces the need for stronger data classification protocols, encryption at rest, and rigorous access controls for personnel records that serve as long‑term institutional assets [[7](#ref-7)].

## Technical details

ShinyHunters' attack relied on a zero‑day vulnerability within Oracle's PeopleSoft platform, which the group claimed allowed them to execute remote code and move laterally across internal networks without traditional authentication checks [[5](#ref-5)][[3](#ref-3)]. The PeopleSoft system serves as the backbone for human resources and recruitment functions at the FBI, managing everything from personnel directories to job applicant tracking [[5](#ref-5)]. Once the initial foothold was achieved via this unpatched component, attackers navigated the estate to identify and extract data from multiple subsystems including Criminal Justice, Health Information Systems (Medlink), and HR databases [[5](#ref-5)][[7](#ref-7)]. The attack appears to have leveraged insufficient segmentation between these systems, enabling cross‑service reconnaissance before data exfiltration [[5](#ref-5)]. Independent testing by news outlets reviewed portions of the alleged stolen dataset and found consistent formatting and content patterns, lending credibility to the claim of extensive data loss [[8](#ref-8)]. While the FBI has not independently verified the existence of such a zero‑day or the full scope of the intrusion, the possibility that a single vulnerability could compromise an entire governmental workforce database warrants urgent attention [[5](#ref-5)][[8](#ref-8)].

## What defenders should do

Organizations handling large‑scale personnel databases should implement multi‑layered defensive strategies to mitigate future breaches. First, ensure that legacy applications like Oracle PeopleSoft receive timely patching and active monitoring for anomalous behavior; even zero‑days can be exploited before patches are deployed [[5](#ref-5)]. Second, enforce strict network segmentation between HR, medical, and operational systems to limit lateral movement in the event of a breach [[5](#ref-5)]. Third, employ data loss prevention (DLP) technologies to detect and block unauthorized transfers of sensitive records, particularly from corporate clouds hosting government workloads [[5](#ref-5)]. Fourth, regularly audit access controls and implement principle‑of‑least‑privilege policies so that even insiders cannot inadvertently or maliciously expose broad datasets [[7](#ref-7)]. Finally, maintain robust incident response plans that include coordinated communication with law enforcement and rapid forensic triage capabilities to minimize dwell time [[6](#ref-6)]. Given the scale of recent breaches involving tens of thousands of records, preparedness alone is insufficient, continuous vigilance and proactive threat hunting are essential [[5](#ref-5)].

## What remains unknown

Despite intense media coverage, several critical questions remain unresolved. The FBI has confirmed investigating unauthorized activity at its jobs portal but has not verified the authenticity of ShinyHunters' samples or established definitively whether the breach originated outside the agency [[6](#ref-6)][[7](#ref-7)]. Whether the actual data exfiltrated matches the claimed 2-3 terabytes, or falls significantly short, is still unclear [[5](#ref-5)][[8](#ref-8)]. Additionally, the precise attack vector used to compromise Oracle PeopleSoft has not been independently validated, leaving open the possibility that the vulnerability was either newly discovered or widely known [[5](#ref-5)]. The timeline of the breach (whether it began on September 22 or earlier) remains contested among different sources, complicating coordinated responses [[6](#ref-6)]. Lastly, it is uncertain whether this incident represents an isolated incident or the beginning of a broader campaign targeting federal workforce databases across multiple agencies [[2](#ref-2)][[4](#ref-4)]. Clearer answers from the FBI and independent security researchers would help stakeholders assess real risk and prioritize remediation efforts accordingly [[7](#ref-7)][[8](#ref-8)].

---

**Sources:**
1. pcworld.com, "The FBI employee data hack offers three useful lessons for all of us"
2. cybersecuritynews.com, "ShinyHunters Allegedly Claims Breach of FBI Jobs Site and Stolen Agents' Data"
3. thehackernews.com, "ShinyHunters Claims FBI Breach, Says It Stole Data on Agents and Job Applicants"
4. techradar.com, "GlobalLogic says data on 10,000 workers exposed in Oracle-linked data breach"
5. bleepingcomputer.com, "ShinyHunters claims FBI hack, data theft in PeopleSoft zero-day breach"
6. webpronews.com, "ShinyHunters Strikes at the FBI: Hackers Demand Retraction After Claiming Massive Data Theft"
7. thetechedvocate.org, "ShinyHunters Claims FBI Data Breach: Hacker Group Says It Stole Records of All Employees and Applicants"
8. ibtimes.sg, "Did ShinyHunters Really Steal FBI Employee and Applicants' Data?"

[End of article]
## References

1. <a id="ref-1"></a>[The FBI employee data hack offers three useful lessons for all of us](https://www.pcworld.com/article/3244776/the-fbi-employee-data-hack-offers-three-useful-lessons-for-all-of-us.html), pcworld.com
2. <a id="ref-2"></a>[ShinyHunters Allegedly Claims Breach of FBI Jobs Site and Stolen Agents’ Data](https://cybersecuritynews.com/shinyhunters-allegedly-claims-fbi-breach/), cybersecuritynews.com
3. <a id="ref-3"></a>[ShinyHunters Claims FBI Breach, Says It Stole Data on Agents and Job Applicants](https://thehackernews.com/2026/09/shinyhunters-claims-fbi-breach-says-it.html), thehackernews.com
4. <a id="ref-4"></a>[GlobalLogic says data on 10,000 workers exposed in Oracle-linked data breach](https://www.techradar.com/pro/security/globallogic-says-data-on-10-000-workers-exposed-in-oracle-linked-data-breach), techradar.com
5. <a id="ref-5"></a>[ShinyHunters claims FBI hack, data theft in PeopleSoft zero-day breach](https://www.bleepingcomputer.com/news/security/shinyhunters-claims-fbi-hack-data-theft-in-peoplesoft-zero-day-breach/), bleepingcomputer.com
6. <a id="ref-6"></a>[ShinyHunters Strikes at the FBI: Hackers Demand Retraction After Claiming Massive Data Theft](https://www.webpronews.com/shinyhunters-strikes-at-the-fbi-hackers-demand-retraction-after-claiming-massive-data-theft), webpronews.com
7. <a id="ref-7"></a>[ShinyHunters Claims FBI Data Breach: Hacker Group Says It Stole Records of All Employees and Applicants](https://www.thetechedvocate.org/shinyhunters-claims-fbi-data-breach-hacker-group-says-it-stole-records-of-all-employees-and-applicants/), thetechedvocate.org
8. <a id="ref-8"></a>[Did ShinyHunters Really Steal FBI Employee and Applicants' Data?](https://www.ibtimes.sg/did-shinyhunters-really-steal-fbi-employee-applicants-data-94218), ibtimes.sg


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Our Reporter Emailed the F.B.I. Hackers. They Wrote Back.",
  "datePublished": "2026-10-02",
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
