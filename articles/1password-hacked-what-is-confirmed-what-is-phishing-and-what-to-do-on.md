---
title: "1Password hacked? What is confirmed, what is phishing, and what to do on iPhone and Android"
date: "2026-11-27"
description: "1Password hacked? What is confirmed, what is phishing, and what to do on iPhone and Android"
tags: ["1password", "breach", "emails", "customer", "phishing", "account", "2026", "exposed", "password", "vaults"]
schema-type: "NewsArticle"
---

![1Password hacked? What is confirmed, what is phishing, and what to do on iPhone and Android](https://storage.googleapis.com/red_articles/1password-hacked-what-is-confirmed-what-is-phishing-and-what-to-do-on.avif)

# 1Password Confirms November 2026 Breach Exposed Customer Emails, Vaults Secure

## At a glance

In November 2026, the password management provider 1Password disclosed a security incident that involved the compromise of an employee's corporate GitHub account [[1](#ref-1)]. This intrusion allowed an unauthorized actor to access internal source code repositories and subsequently introduce malicious code into 1Password's backend systems [1, 4]. As a direct result of this backend access, the attacker was able to export a subset of customer metadata, including names, email addresses, account creation dates, last sign in times, and public keys [1, 2].

Despite the compromise of these development and backend assets, 1Password has confirmed that the core customer data remains entirely secure [[3](#ref-3)]. Because of 1Password's zero knowledge security architecture, the attackers were unable to access or expose customer password vaults, master passwords, or Secret Keys [1, 2, 4]. The incident underscores a persistent trend where threat actors target corporate software development environments to bypass traditional perimeter defenses. While the breach does not require users to reset their master passwords, it does escalate the threat of highly targeted phishing campaigns against the affected customer base [[2](#ref-2)].

## What happened

The security incident began on November 19, 2026, when 1Password's security team detected anomalous activity tied to an employee's corporate GitHub account [1, 4]. Immediate investigation revealed that an unauthorized individual had successfully hijacked the account [[1](#ref-1)]. GitHub is a central platform for software development, version control, and team collaboration. By compromising a developer's corporate identity on the platform, the attacker inherited the permissions necessary to read and manipulate the company's proprietary source code repositories [[3](#ref-3)].

After establishing an initial foothold within the source code management system, the attacker moved deeper into 1Password's development environment. They used their access to push malicious code into the company's backend systems [1, 4]. This manipulated backend code provided the attacker with an opportunity to execute unauthorized queries and download specific customer records [[3](#ref-3)]. Upon detecting the compromise, 1Password's incident response team isolated the affected GitHub account, audited their repository histories, and began a systematic investigation to determine the boundaries of the intrusion and mitigate the active threat.

## Confirmed impact

The investigation launched by 1Password confirmed that the attacker successfully exfiltrated a specific range of internal source code and customer metadata [1, 4]. The stolen customer database records contain highly specific operational metadata, which includes:

* Customer names [1, 2]
* Registered email addresses [1, 2]
* Account creation dates [[2](#ref-2)]
* Last recorded sign in timestamps [[2](#ref-2)]
* Public keys associated with accounts [[2](#ref-2)]

Importantly, 1Password clarified that the exfiltrated internal source code did not contain any customer data or credentials [[3](#ref-3)]. Furthermore, the incident did not result in any exposure of the actual password vaults or secret material [1, 4].

Because of the platform's security design, 1Password itself does not have access to customers' master passwords, recovery keys, or the unique 128 bit Secret Keys required to decrypt vaults [[3](#ref-3)]. Since this data is never transmitted to or stored on 1Password's servers, it was cryptographically impossible for the attacker to retrieve it from the compromised backend systems [[3](#ref-3)]. The vault files and the credentials stored within them remain fully encrypted and secure [1, 4].

## How the attack worked

The compromise of a corporate GitHub account serves as a reminder of how threat actors target the modern software supply chain. Software developers often hold extensive privileges that span across development, staging, and occasionally deployment environments. In this case, by targeting an individual employee's corporate GitHub identity, the attacker bypassed the initial network boundaries of 1Password's production infrastructure.

Once inside the GitHub organization, the attacker located repositories containing backend codebase files [1, 4]. They introduced unauthorized code changes, creating a vector to bridge the gap between static repositories and active execution environments [1, 4]. When this manipulated code was integrated into backend systems, it allowed the adversary to query internal customer databases and extract metadata records [[3](#ref-3)].

The resilience of the password vaults themselves lies in 1Password's dual key encryption model. When a user creates a 1Password account, the system generates a Master Password and a unique, locally generated Secret Key. This Secret Key is a high entropy string stored exclusively on the user's local devices (such as an iPhone, Android phone, or computer).

To decrypt a 1Password vault, both the Master Password and the Secret Key are required to derive the master decryption key locally. Because this derivation happens entirely on the client side, and the derived decryption key is never shared with 1Password's servers, compromising the server side backend does not grant an adversary the ability to decrypt vault files [[3](#ref-3)]. This zero knowledge barrier successfully prevented a critical data exposure during this incident [[3](#ref-3)].

## What defenders should do

While the breach did not compromise encrypted password vaults, the exposure of customer names and email addresses creates a direct risk of social engineering and sophisticated phishing attacks [[2](#ref-2)]. System administrators, security teams, and individual users of 1Password on Android and iPhone should take several protective measures to safeguard their systems.

First, security teams and individual users must prepare for an influx of highly targeted phishing campaigns [[2](#ref-2)]. Attackers can use the exfiltrated metadata (such as account creation dates and last sign in times) to craft highly convincing, personalized messages that mimic official 1Password communications. Users should expect to see fake account recovery notices, urgent security alerts, or fake update requests.

To combat this, remember that 1Password will never call, text, or email you to ask for your Master Password or your unique Secret Key [1, 2]. These credentials should only ever be entered directly into the official 1Password application or on the official domain after you have navigated there independently [[2](#ref-2)].

Second, 1Password has implemented specific server side mitigations to protect users who are in the middle of an account setup or recovery process [[2](#ref-2)]. Some emails, such as account invitations and recovery links, rely on unique tokens. To make brute force or guessing attacks impractical, 1Password has extended the verification codes sent in these emails from the previous six digit format to a ten character alphanumeric string [[2](#ref-2)]. If you are currently in the process of recovering an account or setting up a new device, ensure that you use these updated alphanumeric verification prompts and verify the legitimacy of the sender before clicking any links.

Finally, for users on mobile devices, there are several practical habits to maintain:

* Do not click on direct links inside emails that claim to take you to a 1Password login page [[2](#ref-2)]. Instead, open the official 1Password app on your iPhone or Android device, or manually type the URL into your browser.
* Regularly audit your authorized devices within your 1Password account settings to ensure no unauthorized endpoints have been registered.
* Ensure that the 1Password applications on both iOS and Android are updated to their latest versions through the official Apple App Store or Google Play Store to benefit from the latest platform level protections.

By maintaining high vigilance against incoming communication and relying strictly on local app authentication, users can successfully insulate themselves from the phishing threat generated by this metadata exposure [[2](#ref-2)].
## References

1. <a id="ref-1"></a>[1Password Confirms Internal Hack Exposed Customer Emails While Password Vaults Stayed Untouched](https://www.androidheadlines.com/2026/11/1password-breach-exposed-emails-vaults-safe.html), androidheadlines.com
2. <a id="ref-2"></a>[The 1Password Breach Didn’t Touch Your Vault. The Phishing Emails Might](https://decrypt.co/384002/1password-breach-vaults-phishing-emails), decrypt.co
3. <a id="ref-3"></a>[1Password Data Breach: Hackers Steal Customer Information But Passwords Remain Safe](https://www.techtimes.com/articles/331679/20261127/1password-data-breach-hackers-steal-customer-information-passwords-remain-safe.htm), techtimes.com
4. <a id="ref-4"></a>[A New Data Breach Exposed Account Details for 6% of the App’s Customers](https://www.androidheadlines.com/2026/11/todoist-data-breach-6-percent-longtime-users.html), androidheadlines.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "1Password hacked? What is confirmed, what is phishing, and what to do on iPhone and Android",
  "datePublished": "2026-11-27",
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
