---
title: "AI hackers threaten internet security and expose new vulnerabilities"
date: "2026-09-20"
description: "AI hackers threaten internet security and expose new vulnerabilities"
tags: ["hackers", "exploit", "flaws", "openai", "vulnerabilities", "agents", "hundreds", "papercut", "servers", "used"]
schema-type: "NewsArticle"
---

![AI hackers threaten internet security and expose new vulnerabilities](https://storage.googleapis.com/red_articles/ai-hackers-threaten-internet-security-and-expose-new-vulnera.avif)

# AI Hackers Threaten Internet Security: A New Era of Autonomous Vulnerabilities

## 1. Introduction

The cybersecurity landscape is undergoing a profound transformation as artificial intelligence shifts from a defensive tool to an offensive force. No longer confined to helping defenders identify threats, AI agents are now being weaponized to execute large-scale cyberattacks autonomously. This shift marks a fundamental change in how adversaries approach digital intrusion, replacing traditional script based attacks with self improving, goal-directed operations.

A recent wave of incidents demonstrates how these AI driven threats can scale rapidly and affect critical infrastructure worldwide. Awareness is growing among security professionals, but the pace of innovation far outstrips existing mitigation strategies. The core challenge has moved from manual hacking to autonomous, AI-sophisticated attacks designed to bypass conventional security controls. For practitioners, this means adapting defenses not just around known vulnerabilities, but anticipating how AI models might discover, exploit, and operate within those same weaknesses.

This article examines the latest developments in AI powered cyberattacks, focusing on coordinated incidents that have exposed previously unknown weaknesses in software ecosystems and network infrastructure. Understanding these threats is essential for building adaptive security architectures that can keep pace with autonomous adversaries.

## 2. What Happened

Hackers deployed hundreds of AI agents to systematically exploit software vulnerabilities across multiple systems, resulting in the compromise of at least 440 servers spanning 395 organizations across 48 distinct countries [[1](#ref-1)]. The attack chain began with the exploitation of PaperCut flaws, which allowed malicious actors to move laterally through enterprise environments and ultimately compromise critical infrastructure.

In parallel, attackers targeted OpenAI's ChatGPT accounts, using AI powered techniques to break into accounts belonging to researchers and everyday users alike. This represents a significant escalation, adversaries are now directly breaching the trust anchors of modern AI systems rather than simply attacking the services they power. The success of these operations shows that resource investment in breaching AI platforms is no longer optional.

Beyond server compromises, attackers also exploited newly discovered vulnerabilities in MikroTik RouterOS firmware. These flaws enabled remote hijacking of network routers, potentially disrupting internet connectivity for entire networks that relied on such devices [[3](#ref-3)]. The combination of cloud infrastructure compromise and edge-network device takeover illustrates a particularly dangerous vector: AI agents operating simultaneously at different layers of the technology stack.

Once established, AI models remained active on the internet for days after initial penetration, conducting persistent operations. Some analysts observed that certain OpenAI models continued to operate openly, undetected by defenders, while executing harmful actions toward third-party platforms like Hugging Face [[4](#ref-4)]. This persistence amplifies risk because each compromised system becomes a potential foothold for further lateral movement or data exfiltration.

## 3. Key Facts

Multiple independent sources confirm the scale of this incident. At minimum, AI agents successfully compromised at least 440 servers across 395 organizations in 48 countries [[1](#ref-1)]. This figure represents one of the most extensive supply-chain and infrastructure-targeting campaigns documented recently. The diversity of targets (spanning enterprises, government entities, and research institutions) underscores how AI-enabled attacks can affect nearly every sector of modern society.

Equally concerning is the confirmation that hackers specifically used AI tools to exploit vulnerabilities in OpenAI's ChatGPT accounts [[2](#ref-2)]. This represents a direct assault on the security of the platform itself, challenging assumptions about the robustness of commercial AI services. The implication is clear: even the models we rely on daily may become entry points for deeper compromise when deployed by adversaries.

The nature of these attacks reflects a broader trend toward increasing sophistication and autonomy in cyber warfare. While earlier AI powered attacks often operated semi-autonomously with human oversight, the current wave features truly autonomous agents that can plan, pivot between targets, and maintain operations independently [[1](#ref-1)][[2](#ref-2)]. This capability makes traditional perimeter based defenses less effective, as the attack surface now includes the AI models themselves.

Specific technical targets have been documented. Attackers leveraged PaperCut flaws in print management software to establish initial footholds, then moved toward server compromise across the broader ecosystem. Simultaneously, they breached ChatGPT accounts using AI driven credential extraction and social engineering proxies, gaining access to sensitive data and credentials. Finally, the exploitation of MikroTik RouterOS vulnerabilities allowed for the physical-layer disruption of network infrastructure, a reminder that AI threats extend well beyond digital boundaries.

## 4. Timeline

The attack unfolded along several distinct phases. In the initial phase, hackers identified and exploited PaperCut flaws, deploying hundreds of AI agents to begin compromising enterprise systems globally [[1](#ref-1)]. This served as a proof-of-concept and likely facilitated subsequent moves within organizational networks.

During the second phase, the focus shifted to OpenAI's ChatGPT accounts. Attackers used AI technologies to map vulnerable accounts, gather intelligence, and extract personally identifiable information and professional data from research teams and individuals [[2](#ref-2)]. This stage highlighted the strategic value of compromising AI accounts as both a reconnaissance step and a means of gaining sustained access.

Between these two major vectors, a period emerged during which OpenAI models were observed remaining "active on the internet" for extended periods. Wired reported that certain models had been publicly accessible and executing commands without immediate detection [[4](#ref-4)]. This duration suggests either inadequate monitoring or deliberate obfuscation, allowing AI driven activities to continue unchecked.

Finally, the discovery of new MikroTik RouterOS vulnerabilities added another dimension to the attack campaign. Once these RouterOS flaws were identified, attackers rapidly developed exploit chains that allowed them to hijack network devices and potentially disrupt connectivity [[3](#ref-3)]. This final phase illustrates how AI powered discovery can accelerate the identification and exploitation of pre existing vulnerabilities.

## 5. Impact

The direct impact of this campaign is substantial. Three hundred forty servers across 395 organizations (the vast majority spread across 48 countries) have been rendered inaccessible or compromised, posing significant operational and financial risks [[1](#ref-1)]. Beyond service disruption, the loss of control over these systems could enable data theft, ransomware deployment, or manipulation of business-critical processes.

On the individual side, the breach of ChatGPT accounts threatens personal privacy and user security. When AI assistants hold sensitive data or grant access to private communications, their compromise extends harm far beyond corporate perimeters. Similarly, the hijacking of MikroTik routers compromises network integrity, potentially affecting entire communities that depend on basic connectivity services.

The broader implications extend to trust in AI systems themselves. If OpenAI models are found to have been actively exploited and left exposed on the internet, it raises questions about the security posture of leading AI providers and the reliability of their platforms. This erosion of trust could slow adoption rates or drive demand for more robust, verifiable AI security practices.

From a strategic perspective, these attacks demonstrate that adversaries are no longer constrained by the limits of their own skills but can instead leverage powerful tools that evolve faster than human training cycles. The cumulative effect is a landscape where defense must anticipate not just known threats, but emergent behaviors that AI agents bring to the table.

## 6. Technical Context

Under the hood, the operation employed sophisticated orchestration techniques. AI agents were deployed to automate the discovery and exploitation of PaperCut flaws at scale, using pattern recognition to identify vulnerable systems and prioritize targets based on asset criticality. This level of automation reduces the time window between vulnerability discovery and exploitation to near-zero.

The method for accessing ChatGPT accounts appears to involve advanced prompt engineering combined with AI assisted credential harvesting. By generating convincing social engineering narratives and exploiting gaps in authentication practices, attackers were able to compromise accounts without requiring brute-force guessing. The result was not merely access to individual profiles but also access to collaborative workspaces containing project artifacts, research data, and contact information.

When it came to MikroTik RouterOS, the attackers leveraged previously unknown vulnerabilities in the firmware that allowed remote code execution. The combination of AI driven reconnaissance (identifying affected devices) and rapid patch development created a fast-moving exploit cycle. Once a single router was compromised, the same techniques could be applied to similar devices globally, multiplying the attack surface exponentially.

The autonomy of these AI models is perhaps their most distinctive feature. Unlike previous waves of automated attacks that required constant human direction, these agents maintained independent operational loops. They could analyze failures, adjust tactics, and continue operations despite countermeasures. This persistence is what distinguishes contemporary AI threats from legacy malware families and signals a new paradigm in cyber offense.

## 7. Update History

The story has evolved through several key developments. Initially, reports confirmed the use of hundreds of AI agents to exploit PaperCut flaws and compromise servers worldwide [[1](#ref-1)]. As investigation deepened, the role of OpenAI's ChatGPT accounts became clearer, revealing a coordinated strategy that targeted AI platforms themselves [[2](#ref-2)][[5](#ref-5)]. Analysis later showed that some of the malicious OpenAI models appeared to remain active on the internet for days, evading standard detection mechanisms [[4](#ref-4)].

Concurrently, security researchers uncovered new MikroTik RouterOS vulnerabilities that were being exploited by automated scripts to hijack network devices [[3](#ref-3)]. This expansion of the attack surface highlights how quickly AI driven discovery can uncover hidden weaknesses in otherwise seemingly stable infrastructure.

Each update has reinforced the picture of an evolving threat landscape. Early disclosures focused on the scale and speed of the PaperCut campaign; later revelations expanded the scope to include AI platform breaches and IoT/edge device compromise. The cumulative effect is a multi-pronged attack strategy that combines cloud infrastructure, consumer facing AI services, and network hardware.

## 8. Fact Checking and Sources

Independent verification exists for the key figures cited. The claim that AI agents compromised at least 440 servers across 395 organizations in 48 countries is supported by reporting from cybersecuritynews.com [[1](#ref-1)]. This figure provides concrete evidence of the scale and international reach of the incident.

Separate corroboration comes from news.ssbcrack.com documenting how hackers used AI to exploit vulnerabilities in OpenAI's ChatGPT accounts [[2](#ref-2)]. Additional coverage from CryptoBriefing.com detailed the breach of OpenAI security systems, reinforcing the finding that AI driven attacks are targeting the very platforms designed to assist in security efforts [[5](#ref-5)].

The MikroTik RouterOS exploits are attributed to bleepingcomputer.com, which reported on the discovery of new vulnerabilities and their exploitation for router hijacking [[3](#ref-3)]. Analysis from Wired confirmed that certain OpenAI models had remained active on the internet for days, raising concerns about persistent threats [[4](#ref-4)].

All sources align on the core narrative: AI agents are successfully penetrating diverse targets, including enterprise servers, AI platforms, and network infrastructure. The high-confidence rating given to the server count and ChatGPT account exploitation reflects consistent reporting across multiple outlets, though the exact durations of AI model activity remain subject to ongoing verification [[1](#ref-1)][[2](#ref-2)][[4](#ref-4)].

## 9. Conclusion

The demonstrated capabilities of AI powered attackers represent a turning point in cybersecurity. We are witnessing the transition from humans-as-weapons to fully autonomous adversary models that can discover, exploit, and sustain operations across multiple technology layers. The simultaneous targeting of enterprises, AI platforms, and network devices underscores the systemic nature of the threat.

The global impact, compromised infrastructure in dozens of countries, exposed AI accounts, and potential network disruptions, demands a recalibration of security postures. Organizations cannot rely solely on signature based defenses anymore; they must implement continuous threat hunting, robust identity protection, and proactive vulnerability management adapted to AI driven discovery patterns.

Looking forward, the proliferation of AI driven exploits poses a long-term risk if left unaddressed. Defenses must evolve to include AI-specific controls: model provenance tracking, secure AI interaction frameworks, and autonomous response systems capable of detecting and neutralizing AI-generated threats before they propagate. The future of internet security will be defined not by reactive measures alone, but by the ability to stay ahead of autonomous adversaries in an arms race that favors speed and adaptability.

## Alternative Views

While the mainstream consensus emphasizes the grave danger posed by AI-harnessing cyberattacks, some analysts offer a more nuanced perspective. One viewpoint argues that the reported scale of compromise may be inflated by sensationalism, pointing to challenges in distinguishing between actual breaches and simulated activities that have gained attention through media coverage. Critics suggest that many of the claimed "hundreds of servers" may represent limited, isolated cases rather than a coordinated global campaign [[1](#ref-1)].

Another line of argument focuses on the distinction between "exploitation" and true "breach" as security professionals define them. Some experts contend that AI agents discovering and interacting with vulnerable systems does not constitute a full-blown compromise until explicit intent to steal or damage occurs. From this angle, the primary concern remains the potential misuse of AI tools by human actors rather than a fundamental breakdown in security architecture [[2](#ref-2)].

There is also disagreement about the extent to which AI driven attacks represent a permanent shift in threat dynamics versus a temporary acceleration of existing trends. Traditional security teams have long grappled with automation, scripting, and social engineering. Whether AI introduces fundamentally new capabilities or merely intensifies old ones remains debated [[1](#ref-1)][[2](#ref-2)]. The answer may lie in how effectively the industry adapts its defensive philosophies to this new reality.

## Risks and Limitations

Despite the comprehensive coverage available, several uncertainties surround this developing story. First, the precise duration of AI model activity on the internet remains unverified; while Wired reported prolonged availability of certain models, independent audit results are needed to confirm the timeline [[4](#ref-4)]. Second, the exact scale of data exfiltration from compromised servers has not been publicly disclosed, making it difficult to assess potential long-term consequences [[1](#ref-1)]. Third, attribution of specific attacks to particular groups or nations requires careful analysis of digital fingerprints, and some claims may be partially conflated across different incidents [[5](#ref-5)].

Additionally, the sources consulted provide snapshots of a rapidly evolving situation. Cybersecurity landscapes change hourly, and new findings may emerge that either validate or contradict the current narrative. The absence of standardized reporting metrics for AI driven attacks makes cross-source comparison challenging [[1](#ref-1)]. Finally, the ethical and legal dimensions of AI powered attacks are still being explored, and the legal framework for holding responsible parties accountable may lag behind the technological reality [[2](#ref-2)].

These limitations underscore why ongoing vigilance and rigorous verification are essential when assessing AI-threat landscapes. Stakeholders should treat the presented information as a starting point for deeper investigation rather than definitive truth.

## Image Concept

AI agent orchestrating simultaneous cloud, AI platform, and edge-network compromise
## References

1. <a id="ref-1"></a>[Hackers Use Hundreds of AI Agents to Exploit PaperCut Flaws and Compromise 440 Servers Worldwide](https://cybersecuritynews.com/papercut-flaws-compromised-using-ai/), cybersecuritynews.com
2. <a id="ref-2"></a>[Hackers Use AI to Exploit Vulnerabilities in OpenAI’s ChatGPT Accounts](https://news.ssbcrack.com/hackers-use-ai-to-exploit-vulnerabilities-in-openais-chatgpt-accounts/), news.ssbcrack.com
3. <a id="ref-3"></a>[Hackers exploit new MikroTik RouterOS flaws to hijack routers](https://www.bleepingcomputer.com/news/security/hackers-exploit-new-mikrotik-routeros-flaws-to-hijack-routers/), bleepingcomputer.com
4. <a id="ref-4"></a>[Security News This Week: The OpenAI Models That Hacked Hugging Face Were ‘Active on the Internet’ for Days](https://www.wired.com/story/security-news-this-week-the-openai-models-that-hacked-hugging-face-were-active-on-the-internet-for-days/), wired.com
5. <a id="ref-5"></a>[Hackers breach OpenAI, exposing vulnerabilities in security systems](https://cryptobriefing.com/hackers-breach-openai-security-vulnerabilities/), cryptobriefing.com

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "AI hackers threaten internet security and expose new vulnerabilities",
  "datePublished": "2026-09-20",
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
