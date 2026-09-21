---
title: "Hackers breach hackers in rare dark web cybercrime feud"
date: "2026-09-21"
description: "Hackers breach hackers in rare dark web cybercrime feud"
tags: ["shinyhunters", "cl0p", "dark", "site", "hijacked", "claims", "cybercrime", "feud", "oracle", "says"]
schema-type: "NewsArticle"
---

![Hackers breach hackers in rare dark web cybercrime feud](https://storage.googleapis.com/red_articles/hackers-breach-hackers-in-rare-dark-web-cybercrime-feud.avif)

# Hackers Breach Rivals on Dark Web: ShinyHunters Takes Control of Cl0p's Leak Site

## At a glance

On September 18, 2026, the dark web extortion group ShinyHunters announced it had compromised the infrastructure of its longtime rival, the Cl0p ransomware gang. Cl0p's dark web leak site (thenextweb.com) was defaced and subsequently taken under control by ShinyHunters, who issued a 72-hour ultimatum before claiming they had gained full ownership of the rival's operation. The incident represents one of the most unusual escalations in the cybercrime ecosystem, a direct, public-facing attack between two organized extortion syndicates that brought their long-standing geopolitical tension into the open. ShinyHunters blamed an unauthenticated file-upload vulnerability in the Grav content management system running Cl0p's leak platform as the entry point, allowing it to exfiltrate source code, plugins, and system logs, and even assert control over Cl0p's onion service through purported private keys. The clash traces its roots to a dispute over an Oracle zero-day exploit that Cl0p reportedly leveraged to breach hundreds of enterprises during its 2023 MOVEit Transfer campaign, which affected over 2,000 organizations worldwide [[1](#ref-1)][[2](#ref-2)]. Security researchers confirm the defacement observed early Sunday morning (featuring Pokémon artwork and the message "THIS SITE HAS BEEN PWN3D BY SHINYHUNTERS") but note that the claims surrounding the actual takeover remain unverified beyond the initial compromise [[1](#ref-1)]. Neither group issued official comments, leaving investigators to rely on the parties' public statements as the primary evidentiary basis [[1](#ref-1)][[2](#ref-2)].

## What happened

The saga began late on September 18, 2026, when visitors to Cl0p's leaked Dark Web site encountered unsettling changes. Instead of the expected listings of stolen data and ransom demands, the page was transformed into a display of Pokémon artwork and ASCII representations of Umbreon, accompanied by the stark declaration "THIS SITE HAS BEEN PWN3D BY SHINYHUNTERS" and a self-propagating tagline reading "rooting your systems since '19". A link embedded in the defaced page directed users to ShinyHunters' own leak platform, signaling a coordinated takeover operation. The group stated it had gained six hours to resolve a demand before proceeding with further actions, essentially issuing a 72-hour ultimatum in the form of another blackmail attempt against a third party [[1](#ref-1)][[3](#ref-3)].

Forensic analysis shows ShinyHunters infiltrated Cl0p's infrastructure through an unauthenticated file-upload flaw in the Grav content management system that powers the leak site. Once inside the vulnerable environment, the group reported extracting sensitive assets including Cl0p's core source code, plugin libraries, and system logs. The hackers also claimed possession of private keys to Cl0p's onion service, which would theoretically grant them the authority to impersonate and operate under the gang's dark web identity. These assertions remain unsubstantiated (the actual provision of such keys cannot be independently verified by external authorities) and security analysts caution that the entire chain of events hinges on the initial exploitation being successful and undetected [[1](#ref-1)].

The conflict appears to have deep historical roots. According to multiple reports, the dispute originates around October 2025 when Cl0p allegedly weaponized a zero-day vulnerability in Oracle's E-Business Suite (EBS) to launch a series of compromises against more than 100 enterprise networks. Within weeks, ShinyHunters began probing similar weaknesses in the same software stack, leading to the current confrontation. Cl0p had already made waves in the industry through its 2023 MOVEit Transfer campaign, which exploited a separate Oracle vulnerability to exfiltrate data from over 2,000 organizations spanning industries from manufacturing to finance. ShinyHunters, meanwhile, has built a reputation for agile and aggressive data theft campaigns, often positioning its operations alongside (or competing directly with) other notable ransomware factions [[2](#ref-2)][[3](#ref-3)]. Both groups operate with remarkable speed and frequency, targeting everything from telecommunications providers losing millions of records to AI-focused technology firms that handle cutting-edge research data [[3](#ref-3)][[4](#ref-4)].

After seizing control of the Cl0p domain and establishing dominance over the leaked site, ShinyHunters posted a public statement declaring to Reuters that "we basically own them now." The rhetoric was bold and unfiltered, typical of the clan warfare culture that permeates certain segments of the underground economy. Other cybercrime observers noted the rarity of such overt aggression. Brandon Parsons, a threat intelligence manager at Ascent Solutions, remarked that street-level beef fights between criminal groups on the dark web are real but infrequent, and that witnessing one unfold publicly was unprecedented. Similarly, Joe Roosen from SpyCloud called the incident "a twist for sure" and acknowledged that seeing criminals turn their technical capabilities against one another in such an open manner was unusual [[1](#ref-1)][[2](#ref-2)]. The clash thus serves as both confirmation and amplification of existing tensions between these two powerful actors, raising questions about whether their competition will continue to escalate along the lines of direct sabotage and infrastructure takeovers or shift toward more traditional extortion plays.

## Why it matters

This incident stands out as a rare example of cybercriminal self-inflicted escalation, two organized groups actively choosing to confront each other rather than simply compete passively through isolated attacks. From a strategic perspective, the takeover demonstrates how deeply entangled economic and technical interests have become among the top-tier ransomware syndicates. Both ShinyHunters and Cl0p have demonstrated the ability to execute large-scale data extortion campaigns that affect thousands of organizations, making their disruption potential enormous. By physically compromising a rival's primary dark web asset, ShinyHunters not only disrupts Cl0p's operations but also signals a willingness to engage in full-blown hosttakeover behavior, an approach that historically has been reserved for nation-state actors or very well-funded independent groups [[1](#ref-1)][[2](#ref-2)].

The technical details of the breach are particularly noteworthy. The exploitation of an uneauthenticated file-upload vulnerability in Grav, combined with the extraction of source code and system artifacts, indicates that these groups possess remarkable reconnaissance capabilities and the resources to maintain persistent access to compromised infrastructure. The assertion of control over Cl0p's onion service via purported private keys raises the stakes further, as such a capability would enable impersonation attacks, redirection of traffic, and potentially the injection of malicious payloads into the rival's ecosystem. Even if the key claim remains unverified, the mere demonstration of intent to seize control of a major dark web platform suggests that the underworld is increasingly adopting conventional military-style operations, dominance of infrastructure followed by coordinated strikes [[1](#ref-1)][[3](#ref-3)].

From an organizational risk standpoint, the incident underscores the growing importance of protecting dark web platforms and leak sites, which serve as both repositories for sensitive data and visible targets for adversarial actors. When Cl0p's site fell, it became immediately obvious to victims and investigators that the attacker had achieved substantial visibility and influence over a critical component of their attack chain. The fallout likely extends beyond the immediate loss of the domain; secondary effects include potential disruption to client services, reputational damage to associated partners, and complications for law enforcement efforts that depend on stable infrastructure to coordinate investigations [[2](#ref-2)]. Moreover, the incident highlights the cyclical nature of cybercrime evolution: as defenders tighten controls and patching becomes more common, attackers develop faster, here, exploiting a newly discovered zero-day in Oracle software that Cl0p had previously targeted [[2](#ref-2)].

The broader implications touch on the economics of cybercrime as a business model. Large-scale data breaches generate revenue through extortion, but the value also lies in the leverage those leaks provide over targeted organizations. By taking Cl0p's site offline, ShinyHunters not only threatens potential future extortion income but also undermines Cl0p's market position, forcing the latter to divert resources to defensive operations and crisis management. This dynamic mirrors previous conflicts in the industry, where competitive moves between rivals have forced a reallocation of attack strategies as one faction gains advantage [[3](#ref-3)][[4](#ref-4)]. The story serves as a cautionary tale for enterprises that host leaked data or dark web infrastructure, once exposed, the platform becomes a battlefield for whoever can assert superior control [[2](#ref-2)].

In sum, the ShinyHunters versus Cl0p showdown represents a convergence of technological capability, organizational ambition, and the dark web's inherent volatility. It validates concerns that cybercrime groups are not merely passive predators but active combatants willing to engage in direct confrontation when their interests are challenged. Whether this particular skirmish resolves into mutual destruction, negotiated truce, or further escalation remains unclear, but the world of criminal cybersecurity has entered a phase where such inter-group violence is becoming less theoretical and more routine [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)]. The incident reminds every organization handling sensitive data that even the most secure-looking architectures can be exposed, and that the tools of defense must evolve at the same pace as the offensive arsenals they aim to thwart [[4](#ref-4)].
## References

1. <a id="ref-1"></a>[ShinyHunters says it hijacked Cl0p’s dark web leak site](https://thenextweb.com/news/shinyhunters-clop-leak-site-hijack), thenextweb.com
2. <a id="ref-2"></a>[Cybercrime feud erupts on dark web as notorious group claims hijack of rival's website](https://www.channelnewsasia.com/business/cybercrime-feud-erupts-dark-web-notorious-group-claims-hijack-rivals-website-6398476), channelnewsasia.com
3. <a id="ref-3"></a>[ShinyHunters Hijacks Cl0p Dark Web Site Over Oracle Flaw](https://www.whalesbook.com/news/English/technology/ShinyHunters-Hijacks-Cl0p-Dark-Web-Site-Over-Oracle-Flaw/6ab09b6732997ce1de8ae736), whalesbook.com
4. <a id="ref-4"></a>[ShinyHunters Cl0p Clash Exposes Cybercrime Feud](https://stratnewsglobal.com/technology/shinyhunters-cl0p-cybercrime-feud/), stratnewsglobal.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Hackers breach hackers in rare dark web cybercrime feud",
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
