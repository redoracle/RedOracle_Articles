---
title: "Threat Actors Use Claude for Surveillance, Cyber Operations, Weapons, Says Anthropic"
date: "2026-09-21"
description: "Threat Actors Use Claude for Surveillance, Cyber Operations, Weapons, Says Anthropic"
tags: ["claude", "actors", "weapons", "threat", "anthropic", "operations", "surveillance", "cyber", "development", "using"]
schema-type: "NewsArticle"
---

![Threat Actors Use Claude for Surveillance, Cyber Operations, Weapons, Says Anthropic](https://storage.googleapis.com/red_articles/threat-actors-use-claude-for-surveillance-cyber-operations-weapons-says.avif)

# Threat Actors Use Claude for Surveillance, Cyber Operations, Weapons, Says Anthropic

## At a glance

A new threat intelligence report from Anthropic reveals that threat actors across multiple geopolitical spheres are actively exploiting its Claude family of AI models for dangerous purposes. The company identifies seven principal categories of AI misuse, spanning cyber operations, financial fraud, targeted surveillance, and weapon development [[1](#ref-1)]. According to Anthropic, these malicious uses stem mainly from groups suspected of being sponsored by states, organized crime networks, commercial spyware vendors, and politically motivated individuals [[1](#ref-1)][[2](#ref-2)]. The report documents specific cases including efforts linked to China to research microwave weapons with high power output, Yemeni cells developing software for guided rockets with hypersonic glide vehicles, and Russian freelancers building autonomous drone swarms that transmit a pilot’s view for military applications [[2](#ref-2)][[3](#ref-3)]. Perhaps the most alarming are numerous instances of researchers turning Claude toward biological weapons research, with Anthropic blocking approximately thirty five distinct research efforts that could support the development of pathogens such as chikungunya virus and bird flu [[4](#ref-4)]. Notably, none of these misuse cases involved its newest models, Claude Fable and Mythos, but rather older variants like Haiku, Sonnet, and Opus [[2](#ref-2)].

## Key findings

Anthropic's threat intelligence team analyzed operations conducted between December 2025 and August 2026 and identified disruptions across seven harm categories: cyber operations, influence operations, surveillance, scams and fraud, biological misuse, conventional weapons development, and unauthorized model replication [[2](#ref-2)]. Among the seven categories, three conventional weapons cases involve actors linked to China, two to Russia, and one to a group associated with Ansar Allah, the Houthi movement, which had intensified strikes against energy infrastructure and commercial shipping throughout 2026 [[2](#ref-2)]. Specific examples include a defense intelligence actor linked to China using Claude to study foreign microwave weapons with high power output, identifying components and supply chains in preparation for reverse engineering and countermeasure development [[3](#ref-3)]. Another case involved a Yemeni cell that employed Claude for coding, simulation, and troubleshooting a project to build a guided rocket intended to produce a ballistic missile exceeding 2,000 km in range, with a variant incorporating a hypersonic glide vehicle [[3](#ref-3)]. Russian freelancers reportedly leveraged Claude to build software for autonomous attack drones with a first person view featuring terminal guidance, target selection, and coordination among multiple aircraft [[3](#ref-3)][[6](#ref-6)]. The company also flagged five distinct instances where researchers sought assistance with grant proposals for research on gain of function involving chikungunya and bird flu viruses, with one case directly tied to a military research institute [[2](#ref-2)][[4](#ref-4)].

## Technical analysis

The technical patterns revealed in the misuse cases show how threat actors effectively leverage Claude's broad capabilities. Across the seven harm categories, attackers consistently employ Claude variants, primarily Haiku, Sonnet, and Opus, for code generation, system design, and optimization tasks. For weapons programs, actors use Claude to draft detailed specifications, simulate weapon behavior, and troubleshoot hardware failures; in the Yemeni project to build a guided rocket, Claude assisted with software implementation after initial test failures [[3](#ref-3)]. Similarly, for drone swarms, Russian actors employed Claude for terminal guidance logic, FPV target identification, and coordinated flight paths among multiple platforms that transmit a pilot’s view [[3](#ref-3)]. Surveillance operations leverage Claude's ability to synthesize disparate datasets into actionable intelligence briefs, enabling spoofing of social network mapping and credential harvesting strategies [[1](#ref-1)]. The consistent theme is that threat actors preferentially work with models whose outputs can be steered toward harmful endpoints without triggering standard safety filters; the company attributes this phenomenon to the sophistication of modern LLMs combined with insufficient guardrail enforcement for uses with both civilian and military applications [[2](#ref-2)][[4](#ref-4)].

## Impact and implications

The broader impact of these findings goes beyond immediate tactical gains. According to Anthropic, the confluence of advanced AI models, weakened governance, and fragmented regulatory frameworks has created fertile ground for state actors and other groups to pursue increasingly dangerous projects. The biological weapons research alone represents a critical security concern, because technologies with both civilian and military applications can be adapted to cause mass casualties if misdirected, and the barrier between civilian and military AI capabilities is narrowing [[4](#ref-4)]. Furthermore, the proliferation of surveillance enabled by AI and cyber operations threatens to erode privacy norms and destabilize democratic institutions globally [[6](#ref-6)]. The Pentagon's recent court decision invalidating a ban on Anthropic ruled that the sanctions were arbitrary and driven by political vendettas rather than genuine national security threats, highlighting the legal dimension of AI regulation debates in the United States [[5](#ref-5)]. While this ruling may limit future executive actions, it leaves questions unanswered about international coordination on AI misuse, especially concerning transnational supply chains spanning cloud providers, financial services, and academic research institutions.

## Detection and response

Detecting misuse mediated by AI remains challenging due to the opacity of prompt engineering and the subtle nature of adversarial inputs. Anthropic recommends a layered approach combining behavioral monitoring, output classification, and review with a human in the loop for high stakes domains such as biosecurity and weapons development [[4](#ref-4)]. Organizations deploying Claude should enforce strict usage policies, implement prompt filtering, and maintain audit logs capturing input and output pairs for forensic analysis. Comparing model interactions with known threat indicators, such as requests for biological agent synthesis pathways or military drone component designs, can provide early warning signals [[2](#ref-2)]. Internationally, sharing threat intelligence through established channels, such as INTERPOL's Cybercrime Division and NATO's Cooperative Cyber Defence Centre, helps break geographic silos that currently impede coordinated responses. The recent judicial intervention against the Pentagon ban signals a trend toward greater legal accountability for AI restrictions, though policymakers must balance civil liberties with effective security controls [[5](#ref-5)]. Ultimately, mitigating threats driven by AI requires sustained investment in model hardening, robust governance frameworks, and collaboration across sectors to anticipate and neutralize emerging misuse vectors before they mature into widespread capability [[1](#ref-1)][[4](#ref-4)][[6](#ref-6)].
## References

1. <a id="ref-1"></a>[fintechnews.sg](https://fintechnews.sg/137492/ai/threat-actors-use-claude-for-surveillance-cyber-operations-weapons-says-anthropic/), fintechnews.sg
2. <a id="ref-2"></a>[Anthropic says Claude was misused for extensive weapons research by potential state-backed actors](https://thetechportal.com/2026/09/11/anthropic-says-claude-was-misused-for-extensive-weapons-research-by-potential-state-backed-actors/), thetechportal.com
3. <a id="ref-3"></a>[Factbox-How Anthropic says Claude was used for weapons, spying and cyber operations](https://www.al-monitor.com/originals/2026/09/factbox-how-anthropic-says-claude-was-used-weapons-spying-and-cyber-operations), al-monitor.com
4. <a id="ref-4"></a>[AI Users Have Been Using Claude to Research About Developing Biological Weapons](https://impactnews-wire.com/ai-users-have-been-using-claude-to-research-about-developing-biological-weapons/), impactnews-wire.com
5. <a id="ref-5"></a>[US court rules Pentagon ban of Anthropic unlawful](https://uk.finance.yahoo.com/news/us-court-rules-pentagon-ban-063432763.html), uk.finance.yahoo.com
6. <a id="ref-6"></a>[Anthropic AI Misuse Spurs Security Concerns](https://stratnewsglobal.com/technology/anthropic-ai-misuse-security-concerns/), stratnewsglobal.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Threat Actors Use Claude for Surveillance, Cyber Operations, Weapons, Says Anthropic",
  "datePublished": "2026-09-21",
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
