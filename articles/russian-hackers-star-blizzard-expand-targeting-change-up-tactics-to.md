---
title: "Russian hackers Star Blizzard expand targeting, change up tactics to reach Ukraine and beyond"
date: "2026-09-30"
description: "Russian hackers Star Blizzard expand targeting, change up tactics to reach Ukraine and beyond"
tags: ["blizzard", "star", "phishing", "organizations", "campaigns", "microsoft", "over", "redflick", "cosmicpulse", "using"]
schema-type: "NewsArticle"
---

![Russian hackers Star Blizzard expand targeting, change up tactics to reach Ukraine and beyond](https://storage.googleapis.com/red_articles/russian-hackers-star-blizzard-expand-targeting-change-up-tactics-to.avif)

# Russian hackers Star Blizzard expand targeting, change up tactics to reach Ukraine and beyond

## At a glance

Star Blizzard, a Russian government affiliated hacking group linked to the Federal Security Service (FSB), has significantly broadened its attack operations since early 2026, shifting from focused spear phishing campaigns against Ukrainian entities to large scale phishing initiatives spanning dozens of countries. The group now employs fake event invitation lures to deliver the CosmicPulse backdoor, a Python based malware that establishes persistent access across compromised Windows systems [[4](#ref-4)][[5](#ref-5)][[6](#ref-6)]. Microsoft and CISA have issued warnings about the intensifying Midnight Blizzard campaign, noting the group's increased volume of attacks and sophisticated delivery methods [[1](#ref-1)][[4](#ref-4)][[5](#ref-5)].

## What happened

According to Microsoft research, Star Blizzard has transitioned from targeting Ukrainian organizations to conducting campaigns affecting government agencies, defense organizations, higher education institutions, and non governmental groups across the United Kingdom, Australia, Europe, and Japan [[2](#ref-2)][[4](#ref-4)]. The group now launches massive phishing campaigns at unprecedented scales, sometimes distributing tens to hundreds of emails per campaign, compared to the smaller, targeted spear phishing operations observed previously [[4](#ref-4)][[5](#ref-5)]. These campaigns frequently use deceptive lures such as fake event invitations to invite victims to exclusive conferences or meetings, tricking recipients into clicking malicious links [[2](#ref-2)][[6](#ref-6)].

By March 2026, Microsoft reported that at least 13 separate large scale phishing campaigns had been conducted, each reaching hundreds of targets. Earlier in 2026, the focus was heavily concentrated on Ukraine, but the group's expansion represents a strategic pivot, initially testing new capabilities within Ukraine before moving globally [[2](#ref-2)][[5](#ref-5)]. The core methodology involves crafting convincing fake event invites that appear legitimate, then embedding the malicious payload (CosmicPulse) delivered either through scheduled tasks (RedFlick) or alternative vectors like compromised WordPress and cPanel accounts [[2](#ref-2)][[4](#ref-4)][[6](#ref-6)].

Recent observations show that Star Blizzard has refined its entire playbook. The RedFlick technique creates temporary scheduled tasks on victim machines that execute a set of commands to deploy the CosmicPulse backdoor without requiring extensive user interaction, a significant reduction in the friction that previously hindered successful compromises [[4](#ref-4)][[5](#ref-5)][[6](#ref-6)]. Additionally, the group has begun exploiting Microsoft 365 OAuth flows to bypass multi factor authentication in phishing attacks, further undermining organizational defenses [[3](#ref-3)]. These combined advances in phishing sophistication and malware delivery capability mark a substantial evolution in the group's operational tradecraft [[5](#ref-5)][[6](#ref-6)].

## Why it matters

The intensification of Star Blizzard's campaign poses serious risks to both governmental and civilian organizations worldwide. The group's broadening geographic footprint means that entities beyond Ukraine (such as Western think tanks, academic institutions, NGOs, and even private sector businesses) are increasingly vulnerable to sophisticated social engineering and advanced persistent threat (APT) techniques [[2](#ref-2)][[4](#ref-4)]. According to Microsoft, the campaign has impacted numerous organizations across dozens of countries, highlighting the global nature of this threat [[2](#ref-2)][[4](#ref-4)].

The significance extends beyond immediate financial loss. Star Blizzard's primary objective appears to be intelligence gathering and disruption, particularly in contexts surrounding the ongoing conflict in Ukraine. By targeting Ukrainian aligned civil society and government bodies, the group aims to gather strategic information and potentially influence political outcomes [[2](#ref-2)][[5](#ref-5)]. Microsoft has emphasized that these operations require only a single victim interaction once the initial engagement occurs, making them efficient at spreading throughout interconnected networks [[4](#ref-4)].

Furthermore, the group's development of the RedFlick technique and the CosmicPulse backdoor represents a notable advancement in evasion capabilities. The ability to operate with minimal user friction and leverage popular platforms like WordPress and cPanel for command and control communication increases the likelihood of successful penetration [[4](#ref-4)][[6](#ref-6)]. This evolution signals that Star Blizzard is adapting to defensive improvements, employing increasingly stealthy delivery mechanisms that bypass traditional security control layers [[5](#ref-5)][[6](#ref-6)].

Microsoft and CISA's joint warning underscores the urgency of the situation, urging organizations to strengthen their phishing resilience, enforce strict access controls, and ensure that user training keeps pace with the group's evolving tactics [[1](#ref-1)][[4](#ref-4)]. The coordinated response from leading technology companies suggests that while Star Blizzard continues to expand its reach, the collective industry is mobilizing to counteract this sophisticated threat [[1](#ref-1)][[4](#ref-4)].

## Technical details

The technical profile of Star Blizzard's recent activity reveals a multi stage approach combining social engineering, credential harvesting, and persistent backdoor deployment. Fake event invitations serve as the primary entry vector, mimicking legitimate invitations to conferences, workshops, or other professional gatherings [[2](#ref-2)][[6](#ref-6)]. Once a victim clicks the link, they are redirected to a malicious landing page that requests a Microsoft account or similar credentials. The initial compromise allows the attacker to map the victim's local environment and establish a foothold on the machine [[4](#ref-4)].

After gaining initial access, the group deploys the RedFlick technique, which schedules multiple tasks at startup to execute a series of commands designed to silently install and activate the CosmicPulse backdoor, a Python script capable of maintaining remote access, collecting sensitive data, and communicating with the operator's server [[4](#ref-4)][[5](#ref-5)][[6](#ref-6)]. This method contrasts sharply with prior ClickFix style campaigns that required multiple sequential actions from the victim, thereby raising suspicion and lowering success rates. RedFlick condenses the process into a single interaction, dramatically improving the likelihood of successful compromise [[5](#ref-5)][[6](#ref-6)].

The group has also shown willingness to exploit trusted infrastructure by compromising software installation portals such as WordPress and cPanel. By registering malicious accounts through these compromised sites, Star Blizzard gains distribution channels that appear legitimate to users, facilitating both initial phishing delivery and long term operational persistence [[2](#ref-2)][[4](#ref-4)]. Furthermore, exploitation of Microsoft 365 OAuth flows enables the group to harvest account credentials bypassing multi factor authentication, providing a streamlined path to high value enterprise accounts [[3](#ref-3)].

From a detection standpoint, these tactics present unique challenges. The reliance on scheduled tasks and subtle OS level modifications makes traditional signature based defenses less effective. The use of fake event invites often mimics benign marketing or professional networking content, complicating user education efforts. Meanwhile, the RedFlick backdoor operates through standard Windows Task Scheduler components and PowerShell scripts, which may evade heuristic analysis if not carefully tuned [[4](#ref-4)][[5](#ref-5)][[6](#ref-6)].

## What defenders should do

Defenders facing Star Blizzard's evolving campaign should prioritize multi layered protection against the combined social engineering and technical threats. First, organizations must implement rigorous phishing awareness training that goes beyond generic alerts, teaching staff to recognize the specific patterns of fake event invitations and the subtle cues of credential harvesting lures [[1](#ref-1)][[4](#ref-4)]. Simultaneously, enhanced email filtering and sandboxing should be deployed to detect and quarantine suspicious attachments and links before they reach endpoints [[4](#ref-4)][[6](#ref-6)].

Second, strict enforcement of multi factor authentication (MFA) is essential, especially against potential OAuth based credential theft. Even if attackers bypass traditional password protections, MFA can prevent lateral movement and credential reuse across compromised Microsoft 365 accounts [[3](#ref-3)]. Regular updates to privileged access management systems and tight control of cloud service accounts help limit the blast radius should a compromise occur [[4](#ref-4)].

Third, defenders should monitor for anomalous behavior indicative of RedFlick's presence, such as unexpected scheduled task creations, unusual PowerShell execution patterns, or outbound traffic to uncommon destinations associated with the CosmicPulse backdoor. Integrating endpoint detection and response (EDR) solutions that provide behavioral analytics can surface these subtler indicators of compromise [[4](#ref-4)][[5](#ref-5)][[6](#ref-6)].

Finally, collaboration with industry partners and national CERTs is crucial given the global reach of Star Blizzard's operations. Sharing indicators of compromise (IOCs) and threat intelligence allows faster dissemination of blocking rules and defensive knowledge bases across the security community [[1](#ref-1)][[4](#ref-4)]. As Microsoft and CISA continue to coordinate responses, organizations should stay informed about emerging mitigations and adjust their defenses accordingly [[1](#ref-1)][[4](#ref-4)].

## What remains unknown

While the scope and tactics of Star Blizzard's campaign have become clear from public reports, several aspects remain uncertain. The full scale of attacks beyond the documented 100 plus organizations (and the precise timeline of the group's strategic shifts) require further investigation as more data becomes available. Additionally, the long term effectiveness of current defensive measures against RedFlick and the CosmicPulse backdoor warrants continued monitoring, as adversarial capabilities evolve rapidly in response to improved detection and response practices [[4](#ref-4)][[5](#ref-5)][[6](#ref-6)]. Without comprehensive forensic analysis of individual incidents, some details regarding the group's command and control infrastructure and international coordination persist as open questions [[2](#ref-2)][[6](#ref-6)].

No verified facts available.
## References

1. <a id="ref-1"></a>[Microsoft & CISA Warn of Increasing Midnight Blizzard Attacks](https://www.webpronews.com/microsoft-cisa-warn-of-increasing-midnight-blizzard-attacks/), webpronews.com
2. <a id="ref-2"></a>[Russia's Star Blizzard Targets 100+ Organizations With Fake Event Invites to Deliver Backdoor](https://thehackernews.com/2026/09/russias-star-blizzard-targets-100.html), thehackernews.com
3. <a id="ref-3"></a>[Russian Hackers Exploit Microsoft 365 OAuth to Bypass MFA in Phishing Attacks](https://www.webpronews.com/russian-hackers-exploit-microsoft-365-oauth-to-bypass-mfa-in-phishing-attacks/), webpronews.com
4. <a id="ref-4"></a>[Microsoft: Star Blizzard Develops Phishing Campaigns ...](https://certi.news/en/article/14386), certi.news
5. <a id="ref-5"></a>[Star Blizzard refines phishing and malware delivery with the ...](https://news.cyberhawkthreatintel.com/article/star-blizzard-refines-phishing-malware-delivery-redflick-technique), news.cyberhawkthreatintel.com
6. <a id="ref-6"></a>[Russian Hackers Use Fake Event Invites to Deliver ...](https://security4.ai/en/newsletter/2026-09-29-russias-star-blizzard-targets-100-organizations-with-fake-event-invites-to-deliv), security4.ai
7. <a id="ref-7"></a>[Russian hackers Star Blizzard expand targeting, change up tactics to reach Ukraine and beyond](https://cyberscoop.com/microsoft-star-blizzard-redflick-phishing-campaigns/), cyberscoop.com
8. <a id="ref-8"></a>[Pentagon changes rhetoric on Ukraine crossfire into Russia](https://www.voanews.com/a/pentagon-changes-rhetoric-on-ukraine-crossfire-into-russia/7665656.html), voanews.com
9. <a id="ref-9"></a>[Microsoft cracks down further on Russian hackers looking to disrupt elections](https://www.techradar.com/pro/microsoft-disrupts-infrastructure-used-by-russian-state-actor-star-blizzard), techradar.com
10. <a id="ref-10"></a>[Patriots CB Christian Gonzalez changing mental health narrative in New England](https://www.bostonherald.com/2026/02/03/patriots-cb-christian-gonzalez-changing-mental-health-narrative-in-new-england/), bostonherald.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Russian hackers Star Blizzard expand targeting, change up tactics to reach Ukraine and beyond",
  "datePublished": "2026-09-30",
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
