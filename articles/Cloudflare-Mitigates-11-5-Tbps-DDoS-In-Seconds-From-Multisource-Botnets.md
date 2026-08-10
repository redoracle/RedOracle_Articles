---
title: Cloudflare Mitigates 11-5 Tbps DDoS in Seconds From Multisource Botnets
tags:
  [
    ddos,
    botnet,
    iot,
    udp,
    tbps,
    cloudflare,
    google-cloud,
    cloud-providers,
    nvr,
    dvr,
    dns,
    c2,
    dga,
    firmware,
    vulnerability,
    mitigation,
    threat-intelligence,
    auto-mitigation,
    volumetric-attack,
    rapperbot,
    edge,
  ]
categories: [News]
date: 2025-09-03
id: Cloudflare-Mitigates-11-5-Tbps-DDoS-In-Seconds-From-Multisource-Botnets-2025-09-03
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
        "headline": "Cloudflare Mitigates 11-5 Tbps DDoS in Seconds From Multisource Botnets",
        "image": ["https://storage.googleapis.com/red_articles/.png"],
        "datePublished": "2025-09-03T09:03:16.604Z",
        "dateModified": "2025-09-03T09:03:16.604Z",
        "author": {
          "@type": "Person",
          "name": "RedOracle"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RedOracle",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.redoracle.com/assets/redoracle_logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://redoracle.com/News/Cloudflare-Mitigates-11-5-Tbps-DDoS-In-Seconds-From-Multisource-Botnets.html"
        }
      }
---

![Image](https://storage.googleapis.com/red_articles/Cloudflare-Mitigates-11-5-Tbps-DDoS-In-Seconds-From-Multisource-Botnets.png)

## Introduction

Cloudflare mitigated an unprecedented volumetric DDoS event that peaked at **11.5 terabits per second** and reached roughly **5.1 billion packets per second**. This short, intense UDP flood lasted about **35 seconds** and highlighted evolving threat-intelligence patterns tied to botnet recruitment of IoT, NVR and DVR edge devices, as well as involvement from multiple cloud providers including Google Cloud. The incident underscores the growing scale of volumetric-attacks, the operational role of botnet toolkits such as RapperBot, and the importance of automated mitigation and cross-provider coordination in modern network defense.

## Context and Significance

- Who: Cloudflare led mitigation and reporting. Initial public posts identified Google Cloud as a contributing source. Later updates clarified that multiple cloud-providers and IoT device pools participated.
- What: A record-setting volumetric-attack characterized as a UDP flood that reached 11.5 Tbps and up to 5.1 Bpps.
- When: Late August to early September 2025 with Cloudflare public disclosures on September 2 and September 3, 2025.
- Where: Traffic originated from a global mix of cloud infrastructure and compromised IoT devices at the edge, including NVRs and DVRs.
- Why: The attack sought to overwhelm network capacity through congestion and packet saturation, often used as a smoke-screen to mask simultaneous or follow-on exploitation.
- How: Attackers leveraged large botnets to generate massive packet rates using UDP stateless flooding to maximize throughput and minimize resource cost per packet.

## Key Highlights

- Cloudflare reported autonomous mitigation of hundreds of hyper-volumetric DDoS incidents over recent weeks, with the largest peaks reaching 11.5 Tbps and 5.1 Bpps.
- The 11.5 Tbps event lasted about 35 seconds and would have caused severe congestion and service degradation if unmitigated.
- Initial attribution named Google Cloud as a major source. Google Cloud later clarified it was one of multiple origins and not the majority contributor.
- Related threat research, including an analysis of RapperBot by Bitsight, shows how insecure NVR firmware and exposed edge devices are recruited into botnets capable of large-scale UDP floods.

## Incident Summary at a Glance

- Attack type: Volumetric UDP flood designed to overwhelm network infrastructure by saturating bandwidth and packet-processing capacity.
- Peak metrics: 11.5 Tbps throughput and up to 5.1 billion packets per second.
- Duration: Approximately 35 seconds.
- Attribution dynamics: Multisource traffic spanning cloud-providers and IoT edge devices. Initial reporting pointed to Google Cloud; later updates qualified that as a partial view.
- Impact profile: Short-lived but extremely high-intensity bursts that can cause packet loss, congestion, and degraded user connectivity if not blocked at the edge or by upstream mitigation.

## Attack Vectors and Technical Details

- Attack vector: UDP flood exploiting the stateless nature of UDP to push high packet-per-second rates and maximize throughput per compromised host.
- Botnet composition: Compromised devices include PCs, misconfigured cloud instances, NVRs, DVRs, routers, and other IoT edge devices that can be coerced into high-rate packet transmission.
- Propagation and command infrastructure: Analyses of related campaigns show attackers using DNS-based mechanisms for command-and-control. RapperBot examples use DNS TXT records and a domain generation algorithm to retrieve C2 addresses and map them to operational endpoints.
- RapperBot methods: Exploits include path traversal in NVR firmware to leak administrator credentials, mounting a remote NFS share at 104.194.9[.]127, delivering a fake firmware update, and executing architecture-specific binaries to join a DDoS botnet.
- C2 resilience: Use of DNS TXT lookups, a multi-domain multi-subdomain two-TLD DGA schema, hard-coded DNS resolvers, and encrypted C2 channels to improve survivability and evade simple IP blocklisting.
- Packet profile: Small, high-frequency UDP packets optimized to maximize packets per second while minimizing per-packet bandwidth cost.

## Attribution and Source Context

- Initial attribution: Cloudflare’s early posts indicated heavy traffic emanated from Google Cloud instances.
- Refinement: Google Cloud responded that it was one contributing source among several IoT and cloud providers, and that abuse defenses and customer notifications processes were followed.
- Attribution complexity: Large-scale DDoS events often aggregate traffic from many autonomous systems and compromised devices, making precise attribution probabilistic rather than absolute.
- Supporting context: Akamai emphasized that volumetric floods can act as smoke screens while attackers pursue parallel objectives. Bitsight’s RapperBot analysis illustrates how IoT compromise campaigns feed these botnets.

## Defensive Response and Mitigation

- Cloudflare response: Automated, large-scale scrubbing and edge mitigation blocked the attack within seconds and prevented widespread service interruption for customers behind Cloudflare.
- Provider coordination: Multiple cloud providers and upstream networks participated in detection and containment activities. Google Cloud highlighted ongoing abuse defense work and customer notification processes.
- Trend linkage: The September event fits a larger 2025 pattern of hyper-volumetric DDoS that includes a May 2025 7.3 Tbps event and a Q2 surge in incidents.
- Operational implications: Rapid detection at the edge, scalable scrubbing capacity, and cross-provider intelligence sharing are core capabilities required to absorb and filter traffic surges measured in terabits per second.

## Broader Threat Landscape and Implications

- IoT exposure: RapperBot and similar campaigns underline persistent vulnerabilities in NVRs, DVRs and other consumer or enterprise edge devices that enable botnet recruitment at scale.
- Multi-vector risk: Volumetric floods may be used concurrently with application-level exploits, credential theft or lateral movement as part of smoke-screen strategies.
- DNS and DGA techniques: Botnets increasingly adopt DNS TXT retrievals and sophisticated DGA schemes to locate resilient C2 infrastructure and survive IP-based takedowns.
- Industry response levers: Device segmentation, firmware integrity verification, credential hygiene, and observability at shard and flow levels across cloud and edge networks are essential to reduce attack surface and accelerate detection.

## Timeline and Case Comparisons

- May 2025
  - Event: 7.3 Tbps DDoS attack blocked by Cloudflare targeting an unnamed hosting provider.
  - Details: About 45 seconds in duration, roughly 37.4 terabits of traffic transferred, and traffic sourced from over 122,000 IP addresses.
- Q2 2025
  - Event: Hyper-volumetric DDoS incidents escalate markedly, with approximately 6,500 events recorded versus 700 in Q1 2025.
- Late August to September 3 2025
  - Event: Cloudflare mitigates a UDP flood peaking at 11.5 Tbps and 5.1 Bpps, lasting around 35 seconds. Initial reporting cited Google Cloud as a significant source; later clarifications identified multiple participating cloud and IoT sources.
- RapperBot chronology
  - Event: Bitsight analysis describes exploitation of NVR firmware path traversal, credential leakage, NFS-based fake firmware deployment, DNS TXT based C2 retrieval and DGA use for resilient command infrastructure.

## Detailed Analysis

Overview and significance

- The 11.5 Tbps event represents an inflection point in volumetric-attack capacity, demonstrating that botnet-driven UDP floods can be orchestrated to deliver extremely high-throughput, short-duration surges that stress network edges and peering links.
- Packet-per-second scale matters as much as raw throughput when defenses must inspect and filter individual packets at line rate.

Mechanics and bottlenecks

- UDP statelessness allows attackers to push packet rates without handshake overhead, producing enormous Bpps values that can saturate routers, interrupt stateful middleboxes and overwhelm scrubbing pipelines.
- Botnet diversity, combining cloud instances and low-cost IoT devices, increases the attack surface and complicates simple AS or prefix-level filtering.

Attribution and response nuance

- Misleading early attribution to a single provider illustrates a common attribution pitfall when initial telemetry samples overrepresent large cloud prefixes.
- Effective mitigation requires rapid correlation across upstream networks, coordination with cloud antabuse teams, and automated edge rules to neutralize both volumetric traffic and potential secondary vectors.

RapperBot technical implications

- The RapperBot kill chain shows attackers leveraging firmware weaknesses and remote file systems to stage payloads without complex persistent implants.
- DNS TXT based C2 retrieval and DGA use highlight increasingly creative channels to maintain resilient command infrastructure and evade static blocklists.

Operational takeaways

- Auto-mitigation and scalable scrubbing are necessary but not sufficient. Cross-provider telemetry sharing and device-level hardening shrink the population of available bots.
- Investments in packet-per-second handling capacity and low-latency filtering logic pay dividends in short bursts where every second of mitigation reduces potential collateral damage.

Strategic considerations for infrastructure stakeholders

- Hosting and cloud providers must balance customer access with abusive-traffic controls and rapid notification workflows.
- IoT and edge device vendors must prioritize firmware integrity, secure update channels and stronger default authentication to reduce botnet recruitment vectors.
- Network operators should monitor for bursty UDP patterns and abrupt jumps in Bpps metrics to trigger automated mitigation playbooks.

## Key Takeaways for Defenders

- Design for distributed sources: Expect hyper-volumetric attacks to aggregate traffic across multiple cloud-providers and hundreds of thousands of compromised devices.
- Prioritize edge absorption: Filtering and scrubbing at the nearest possible edge, combined with upstream cooperation, reduce congestion risk to internal networks.
- Monitor Bpps and UDP signatures: High packet-per-second spikes often precede or coincide with volumetric saturation and merit immediate automated action.
- Harden IoT and edge devices: Firmware integrity, secure defaults, and network isolation reduce the pool of exploitable devices that feed botnets such as RapperBot.
- Integrate threat-intelligence: Correlate DGA indicators, DNS TXT C2 patterns and reported campaign telemetry to identify and disrupt C2 channels early.

## Stakeholders and Entities Mentioned

- Cloudflare
- Google Cloud
- Akamai
- Bitsight
- RapperBot
- NVR and DVR IoT device vendors
- Hosting providers and upstream network operators

## Sources and Attribution

- The Hacker News
- SecurityWeek
- Bitsight researcher reporting and public analyses
- Cloudflare public disclosures on mitigation activity

## Fact Checking and Related Links

- The Hacker News general site: https://thehackernews.com
- SecurityWeek general site: https://securityweek.com
- Cloudflare blog: https://blog.cloudflare.com
- Bitsight: https://www.bitsight.com
- Akamai: https://www.akamai.com

Event information summary

- Date published: 2025-09-03
- Peak throughput: 11.5 Tbps
- Peak packet rate: ~5.1 billion packets per second
- Duration: ~35 seconds
- Notable prior event: May 2025 7.3 Tbps DDoS mitigation by Cloudflare
- Related campaign: RapperBot IoT compromise and DDoS recruitment chain

## Conclusion

Cloudflare mitigated a landmark 11.5 Tbps UDP flood that crystallizes 2025 trends in hyper-volumetric DDoS, multisource botnet mobilization and IoT-driven attack amplification. The incident demonstrates the need for scalable auto-mitigation, cross-provider coordination, improved IoT security posture and vigilant monitoring of UDP and Bpps anomalies. The RapperBot case reinforces how firmware vulnerabilities, NFS-based delivery mechanisms and DNS-based C2 can feed large botnets that power modern volumetric-attacks.


