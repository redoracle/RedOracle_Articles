---
title: "Hackers Target AI Coding Tools to Steal Credentials as Researchers Uncover 103 AI-Linked Cyber Incidents"
date: "2026-11-12"
description: "Hackers Target AI Coding Tools to Steal Credentials as Researchers Uncover 103 AI-Linked Cyber Incidents"
tags: ["hackers", "supply", "steal", "credentials", "coding", "tools", "compromise", "software", "launch", "exploit"]
schema-type: "NewsArticle"
---

![Hackers Target AI Coding Tools to Steal Credentials as Researchers Uncover 103 AI-Linked Cyber Incidents](https://storage.googleapis.com/red_articles/hackers-target-ai-coding-tools-to-steal-credentials-as-researchers.avif)

# Hackers Target AI Coding Tools to Steal Credentials as Researchers Uncover 103 AI-Linked Cyber Incidents

## At a glance

A new threat intelligence report has uncovered 103 AI linked cyber incidents across the global software ecosystem, marking a significant escalation in how adversaries leverage artificial intelligence to compromise developer tools and steal credentialed systems [[1](#ref-1)]. The research, spanning from July 31, 2025 through July 31, 2026, reveals that AI is no longer just a tool for developers but also a weaponized force multiplier that accelerates attacks on software supply chains. The breadth and speed of these incidents indicate that the economics of cybercrime are shifting, attackers are moving upstream to compromise the very platforms that build and distribute code, rather than targeting applications directly [[6](#ref-6)][[7](#ref-7)]. This trend is exemplified by a range of tactics including compromised AI proxy packages, automated credential harvesting from cloud infrastructure, and large-scale autonomous credential theft campaigns [[2](#ref-2)][[3](#ref-3)][[5](#ref-5)][[9](#ref-9)].

## What happened

The 103 incidents documented in the report fall into several distinct categories, each demonstrating how AI assisted tools are being weaponized against developer workflows. One of the most striking cases involves ARTEX AI, an offensive framework that enabled attackers to locate exposed GitHub secrets and exfiltrate Azure Key Vault data in just five minutes [[2](#ref-2)]. In that scenario, an AI agent moved from searching public repositories for application secrets to stealing credentials that provided access to cloud resources, combining credential hunting with automated exploration of what those keys could unlock [[2](#ref-2)]. Microsoft Threat Intelligence traced the malicious activity through a November 5 report, showing how the framework interpreted search results and selected subsequent actions to accelerate the exploitation chain [[2](#ref-2)].

Railway Cloud suffered a major breach that exposed nearly 100,000 customer workspaces and resulted in approximately $740,000 in unauthorized AI usage charges [[3](#ref-3)]. The attack began on October 20 when hackers exploited a previously unknown vulnerability in Railway's build infrastructure, allowing them to escape filesystem isolation and gain access to stored build histories and internal credentials. The breach demonstrated how infrastructure weaknesses in cloud hosting platforms can be leveraged by AI driven agents to reach sensitive data [[3](#ref-3)].

Chinese hackers conducted a campaign impersonating ex-White House officials to target US AI experts, including a former White House principal deputy director, with the goal of stealing emails and credentials [[4](#ref-4)]. Proofpoint identified the group as TA419 and attributed the activity to a Chinese intelligence gathering operation. The campaign used fake emails proposing AI related collaborations to lure targets to credential stealing websites, exploiting the trust developers place in seemingly legitimate tools and packages [[4](#ref-4)].

Autonomous AI agents have also been used to launch mass credential theft operations in under six hours [[9](#ref-9)]. In one notable case, attackers compromised a cloud infrastructure and then used it as a launch point for a coordinated credential harvesting campaign. The AI coding chatbot, paired with preconfigured instructions, handled vulnerability scanning, credential collection, and IP rotation without requiring constant human intervention [[9](#ref-9)]. Google Cloud analysts tracked this activity as part of their broader research into the growing use of AI driven automation in real world intrusions [[9](#ref-9)]. This represents a significant shift from traditional manual phishing and credential stuffing to fully autonomous operations that can scale rapidly and operate with minimal human oversight [[5](#ref-5)].

The TeamPCP supply chain attack allegedly compromised the Databricks platform, which is a major data intelligence and analytics solution [[8](#ref-8)]. While the extent of the compromise remains under confirmation, Databricks was alerted by threat intelligence researchers and has been conducting an investigation into the potential breach [[8](#ref-8)]. This incident highlights how a single compromised software component can propagate through thousands of downstream environments, amplifying the impact of any initial compromise [[7](#ref-7)][[6](#ref-6)].

## Why it matters

The proliferation of AI linked cyber incidents underscores a fundamental shift in how cyberattacks are conceived and executed. AI is no longer confined to defensive tools or benign automation, it is being actively employed by adversaries to improve the efficiency and scale of their operations [[6](#ref-6)][[7](#ref-7)]. The ability to use AI agents that can search code repositories, identify exposed credentials, and automate the exploitation pipeline means that what was once a labor intensive process can now be carried out at machine speed [[5](#ref-5)][[2](#ref-2)].

This change has significant implications for software supply chain security. Attackers are increasingly moving upstream, targeting the build systems, package registries, and AI tooling that developers rely on to deliver code [[6](#ref-6)]. CI/CD pipelines, npm and PyPI, GitHub Actions workflows, and AI agent tooling are all interconnected components that have become new attack surfaces. A single compromise of a trusted package can provide access to tens of thousands of downstream environments, as demonstrated by the Railway Cloud breach where nearly 100,000 workspaces were exposed [[3](#ref-3)]. The low marginal cost of exploiting a trusted dependency means that attackers can reach vast numbers of organizations with minimal investment, making defensive measures that focus solely on application level security insufficient [[6](#ref-6)].

The scale of 103 incidents also suggests that this is not an isolated phenomenon but part of a broader movement. Attackers are exploiting the demand for AI products through fake download pages, search poisoning, and click fraud lures to lure victims into credential stealing websites [[1](#ref-1)]. The combination of AI generated phishing content, automated credential harvesting, and cloud infrastructure exploitation creates a complex attack surface that is difficult for traditional security tools to detect [[9](#ref-9)][[5](#ref-5)]. As organizations continue to adopt AI coding assistants at scale, they are inadvertently expanding the attack surface available to adversaries [[7](#ref-7)].

## Technical details

The technical evidence from the 103 incidents reveals several common patterns in how AI is being integrated into credential theft operations. In the ARTEX AI case, the framework was used to search GitHub for secrets related to cloud platforms and AI providers, then extract tokens that could be used to access cloud resources [[2](#ref-2)]. This demonstrates a critical weakness in how developers handle secrets, accidentally committed API keys in scripts, configuration files, or source code can become entry points when combined with AI's ability to scan and analyze large repositories [[1](#ref-1)].

Railway Cloud's breach was enabled by a previously unknown vulnerability in its build infrastructure that allowed attackers to escape filesystem isolation [[3](#ref-3)]. Once inside, the attackers exploited the lack of proper access controls to access stored build histories and cloud credentials. The attackers then used these credentials to potentially access additional systems and data [[3](#ref-3)]. This incident highlights the importance of securing the build pipeline itself, as it is often considered an "untouched" component of the software delivery lifecycle [[6](#ref-6)].

The autonomous AI credential theft campaign illustrates how modern attacks can be fully automated. The attackers first compromised cloud infrastructure, then used the compromised environment as a launch point for credential harvesting [[9](#ref-9)]. The AI coding chatbot was guided by written instruction files that served as operating playbooks, handling vulnerability scanning, credential collection, and IP rotation without requiring constant human intervention [[9](#ref-9)]. This level of automation reduces the need for skilled attackers and allows for faster, more sophisticated campaigns [[5](#ref-5)].

TeamPCP's alleged compromise of the Databricks platform represents a supply chain attack at the software distribution layer. By compromising a widely used tool, attackers could potentially reach thousands of downstream users who rely on TeamPCP for their data pipelines [[8](#ref-8)]. The specific mechanisms of the compromise are still under investigation, but the incident serves as a reminder that trust in third party software remains a critical risk when that software is integrated into core business processes [[7](#ref-7)].

## What defenders should do

Organizations must adapt their security posture to address the unique risks posed by AI powered credential theft and supply chain compromises. First, developers and teams should implement strict controls around secrets management. This includes using dedicated secret stores (such as HashiCorp Vault, AWS Secrets Manager, or similar solutions) rather than storing credentials in code repositories or configuration files [[1](#ref-1)]. Dependency scanning tools should be configured to flag exposed secrets and enforce least privilege access to cloud resources [[3](#ref-3)][[5](#ref-5)].

Second, organizations need to harden their AI coding tool environments. This means verifying the integrity of AI agents and tooling before deployment, restricting access to compromised or untrusted AI services, and monitoring for unusual behavior from these tools [[5](#ref-5)]. Since attackers are increasingly using AI to identify high value targets and select which credentials to steal, maintaining accurate and up to date inventory of all software dependencies is essential [[8](#ref-8)]. Tools that track dependencies across platforms can help identify vulnerable packages that may have been compromised.

Third, security teams should implement continuous monitoring of cloud infrastructure and CI/CD pipelines. Anomalous API calls, unexpected service account activity, and changes to workspace configurations should trigger immediate investigation [[9](#ref-9)]. The Railway Cloud breach showed how quickly an undetected compromise can lead to massive data exposure [[3](#ref-3)]. Additionally, organizations should rotate exposed credentials frequently and apply the principle of least privilege to reduce the blast radius of any potential compromise [[5](#ref-5)].

Finally, organizations must account for the changing economics of software supply chain attacks. With attackers targeting widely used AI coding tools and package registries, the barrier to entry for large scale campaigns has dropped significantly [[6](#ref-6)][[7](#ref-7)]. This means that even well defended targets may be vulnerable to supply chain compromises, and a single compromised dependency can cascade across thousands of environments [[7](#ref-7)]. Proactive defense, including hardening build systems, securing third party integrations, and continuously validating dependencies, must be prioritized [[1](#ref-1)].

## What remains unknown

Despite the comprehensive nature of the research, some aspects of the 103 incident landscape remain unclear. The full scope of all 103 incidents is not yet fully mapped, and the exact distribution of attack vectors across different types of compromises is still being analyzed [[1](#ref-1)]. While the Railway Cloud breach and the ARTEX AI case provide concrete examples of successful campaigns, the precise number of incidents in each category and the full attribution of actor groups continues to be refined [[1](#ref-1)][[4](#ref-4)]. The TeamPCP Databricks incident remains under investigation, and the extent of the compromise is not yet confirmed [[8](#ref-8)]. Furthermore, the long term impact of these incidents on software ecosystems and the development of new defense mechanisms is still being studied by the security community [[6](#ref-6)][[7](#ref-7)].

The research is ongoing, and additional patterns may emerge as more incidents come to light [[1](#ref-1)]. Organizations should treat the current understanding of AI linked cyber incidents as a baseline, but remain vigilant as the threat landscape continues to evolve [[9](#ref-9)].
## References

1. <a id="ref-1"></a>[Hackers Target AI Coding Tools to Steal Credentials as Researchers Uncover 103 AI-Linked Cyber Incidents](https://cybersecuritynews.com/hackers-target-ai-coding-tools/), cybersecuritynews.com
2. <a id="ref-2"></a>[Hackers Use ARTEX AI to Find GitHub Secrets and Steal Azure Key Vault Data in Just 5 Minutes](https://cybersecuritynews.com/hackers-use-artex-ai/), cybersecuritynews.com
3. <a id="ref-3"></a>[Railway Cloud Breach Exposes Nearly 100,000 Customer Workspaces, As Hackers Steal AI Credentials And Run Up $740,000 In Unauthorised Bills](https://www.inventiva.co.in/trends/railway-cloud-breach-exposes-nearly-100000-customer-workspaces-as-hackers-steal-ai-credentials-and-run-up-740000-in-unauthorised-bills/), inventiva.co.in
4. <a id="ref-4"></a>[Chinese hackers impersonate ex-White House official to target US AI experts, steal emails: Report](https://timesofindia.indiatimes.com/world/china/chinese-hackers-impersonate-ex-white-house-official-to-target-us-ai-experts-steal-emails-report/articleshow/134620682.cms), timesofindia.indiatimes.com
5. <a id="ref-5"></a>[Attackers turn to AI for help identifying files worth stealing](https://www.helpnetsecurity.com/2026/08/18/gambit-security-ai-cyberattack-tools-report/), helpnetsecurity.com
6. <a id="ref-6"></a>[AI is changing the economics of software supply chain attacks](https://venturebeat.com/security/ai-is-changing-the-economics-of-software-supply-chain-attacks), venturebeat.com
7. <a id="ref-7"></a>[How AI coding tools could amplify software supply-chain attacks](https://thenextweb.com/news/npm-trusted-publishing-flaw-ai-agents-slugfest), thenextweb.com
8. <a id="ref-8"></a>[TeamPCP Supply Chain Attack Allegedly Compromised Databricks Platform](https://cybersecuritynews.com/databricks-teampcp-supply-chain/), cybersecuritynews.com
9. <a id="ref-9"></a>[Hackers Use Autonomous AI Agents to Launch Mass Credential Theft Attacks in Under 6 Hours](https://cybersecuritynews.com/autonomous-ai-agents/), cybersecuritynews.com

## Related articles

- [Florida cyber owner accused of misleading ransomware victims; firm charged $19M, secretly paid hackers $8M](https://redoracle.com/News/florida-cyber-owner-accused-of-misleading-ransomware-victims-firm.html)
- [First 48 hours: What ransomware attack taught family business about cybersecurity, trusted partnerships](https://redoracle.com/News/first-48-hours-what-ransomware-attack-taught-family-business-about.html)
- [AI linked to 84% of ransomware attacks, new report finds](https://redoracle.com/News/ai-linked-to-84-of-ransomware-attacks-new-report-finds.html)
- [Unveiling Black Basta's Ransomware Tactics](https://redoracle.com/News/Unveiling-Black-Bastas-Ransomware-Tactics.html)
- [Ransomware negotiator arrested on federal charges as FBI probes hacking of personnel files](https://redoracle.com/News/ransomware-negotiator-arrested-on-federal-charges-as-fbi-probes-hacking.html)


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Hackers Target AI Coding Tools to Steal Credentials as Researchers Uncover 103 AI-Linked Cyber Incidents",
  "datePublished": "2026-11-12",
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
