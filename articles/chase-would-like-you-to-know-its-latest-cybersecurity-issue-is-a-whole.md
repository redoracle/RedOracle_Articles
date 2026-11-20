---
title: "Chase Would Like You to Know Its Latest Cybersecurity Issue Is a Whole New Problem"
date: "2026-11-20"
description: "Chase Would Like You to Know Its Latest Cybersecurity Issue Is a Whole New Problem"
tags: ["customer", "data", "email", "addresses", "outage", "breach", "unrelated", "banking", "third", "party"]
schema-type: "NewsArticle"
---

![Chase Would Like You to Know Its Latest Cybersecurity Issue Is a Whole New Problem](https://storage.googleapis.com/red_articles/chase-would-like-you-to-know-its-latest-cybersecurity-issue-is-a-whole.avif)

# Chase Would Like You to Know Its Latest Cybersecurity Issue Is a Whole New Problem

## At a glance

Chase has confirmed a cyberattack that it says targeted outside companies handling its marketing information rather than its own banking systems [[6](#ref-6)]. The clearest measure of what leaked so far comes from researchers who examined the released data: a dataset containing more than 16,000 customer email addresses, some accompanied by phone numbers and postal codes [[4](#ref-4)][[5](#ref-5)]. Chase says the episode has nothing to do with the online banking outage that disrupted its services earlier in the week [[1](#ref-1)][[2](#ref-2)][[3](#ref-3)].

"We have learned that third parties who provide services to the firm were the target of a cyber attack," the bank said in a Thursday morning post on X. "There is no connection to service disruption some customers experienced earlier this week." [[1](#ref-1)]

The disclosure arrived three days after a software failure left customers across the United States unable to access accounts or withdraw funds for several hours [[1](#ref-1)][[6](#ref-6)]. The timing made the two events easy to conflate, and the bank moved quickly to separate them. Visa told Gizmodo that the attack was "unrelated to any of the system disruptions across different industries this past week" [[1](#ref-1)].

## What happened

JPMorgan disclosed the incident on November 19 after learning that attackers had targeted vendors working with the bank [[5](#ref-5)]. The company was specific about where the exposure sits. In its own words, the problem traces to marketing data held outside its systems rather than a compromise of the bank's core infrastructure [[5](#ref-5)][[6](#ref-6)]. "The country's largest bank said Thursday that hackers targeted outside companies handling its marketing information, rather than announcing a breach of its own banking systems," as IBTimes put it [[6](#ref-6)].

A ransomware group named n0n claimed responsibility [[5](#ref-5)]. According to Cybernews, after a "48-hour countdown set for various companies to pay up the ransom passed," the group dumped the stolen JPMorgan Chase data on the dark web [[4](#ref-4)]. Cybernews researchers who studied the leak tied roughly 16,000 of the exposed emails to the bank's Reserve card program [[4](#ref-4)]. Cybernews describes JPMorgan Chase as the world's largest bank by market capitalization as of 2026 [[4](#ref-4)].

The same attack appears to have reached beyond Chase. Gizmodo reported that customer data may have been exposed in a cyber attack that "impacted Mastercard as well" [[1](#ref-1)], and The Wall Street Journal reported that a ransomware group had leaked information associated with thousands of customers of JPMorgan, Visa and Mastercard [[6](#ref-6)]. Mastercard spokesperson Seth Eisen told The Verge the breach exposed "a limited amount of email addresses" belonging to a "small subset of cardholders enrolled in a specific benefit program" [[2](#ref-2)].

This is the part of the story that should interest anyone who runs systems for a living. The bank's own environment was not the thing that broke. The exposure sits with the vendors that provide services to the firm, which means the trust boundary that mattered here was not the one Chase controls directly [[1](#ref-1)][[5](#ref-5)]. That is a recurring pattern with large financial institutions. The data that leaked here was marketing information held outside the bank's own systems [[5](#ref-5)][[6](#ref-6)], tied to card programs such as Reserve [[4](#ref-4)]. Records like these often sit with outside providers long before, and entirely apart from, the systems that actually move money. When the perimeter that fails belongs to a vendor, the organization whose name is on the card is still the one that has to explain it to customers.

The outage and the breach represent different failure modes. The Monday event was an availability problem: customers could not reach their accounts. The Thursday disclosure describes a confidentiality problem: contact data left the organization's sphere of control. Conflating them is a category error, and the bank's public statements have been consistent in drawing the line [[1](#ref-1)][[3](#ref-3)][[5](#ref-5)][[6](#ref-6)].

## Confirmed impact

The confirmed scope is narrow but real. The dataset that researchers examined contains more than 16,000 customer email addresses, some accompanied by phone numbers and postal codes [[4](#ref-4)][[5](#ref-5)]. Cybernews reported that some records also include phone numbers, account IDs, and more than 100 bank employee email addresses [[4](#ref-4)]. That is the extent of what can be stated with confidence about the exposed data.

Plenty remains unquantified, and Chase has not filled the gaps. The bank has not publicly identified the affected service providers, and its disclosure did not specify when the attack occurred or how many customers it affected [[5](#ref-5)]. It has given no final account of the information attackers obtained [[5](#ref-5)]. So while 16,000 email addresses is the figure researchers put on the released data, the bank itself has not confirmed a definitive customer count.

Chase said it would contact affected customers directly and provide assistance, including complimentary credit monitoring where appropriate [[5](#ref-5)][[6](#ref-6)]. The bank has not announced that every Chase customer needs credit monitoring or must change their passwords because of the incident [[6](#ref-6)].

The practical risk that follows from a leak like this is targeted phishing. Cybernews researchers said affected Reserve clients could face targeted phishing because they are high value targets [[4](#ref-4)]. Email addresses paired with phone numbers and postal codes give an attacker enough to make a lure look legitimate, and IBTimes noted that such information can be used to create convincing phishing messages designed to trick recipients into providing sensitive details [[6](#ref-6)]. For customers, the defensive move the reporting points to is simple: check accounts through Chase's official website or mobile app, and avoid unexpected links that ask for login credentials or personal information [[6](#ref-6)].

The uncomfortable lesson for engineers is that the most sensitive thing in this breach was not a card number or a password. It was contact data sitting in a marketing dataset at an outside provider [[5](#ref-5)][[6](#ref-6)]. That kind of record rarely unlocks an account on its own, but it is exactly the raw material that makes social engineering work, and it is usually held by the part of the organization with the least direct oversight.
## References

1. <a id="ref-1"></a>[gizmodo.com](https://gizmodo.com/chase-would-like-you-to-know-its-latest-cybersecurity-issue-is-a-whole-new-problem-2000842397), gizmodo.com
2. <a id="ref-2"></a>[JPMorgan Chase reveals data breach, but says it’s unrelated to this week’s banking outage](https://www.theverge.com/tech/1037695/jpmorgan-chase-cyberattack), theverge.com
3. <a id="ref-3"></a>[Chase Hit by Third-Party Data Breach Unrelated to Recent Outage](https://www.cnet.com/tech/services-and-software/chase-third-party-data-breach/), cnet.com
4. <a id="ref-4"></a>[Hackers leak stolen JPMorgan data about rich people](https://cybernews.com/security/jpmorgan-chase-data-leak-non-ransomware-gang/), cybernews.com
5. <a id="ref-5"></a>[JPMorgan Chase Warns Customer Data May Be Exposed in Cyberattack](https://blockonomi.com/jpmorgan-chase-warns-customer-data-may-be-exposed-in-cyberattack/), blockonomi.com
6. <a id="ref-6"></a>[Chase Customers Face New Data Scare Days After Banking Outage. JPMorgan Confirms Cyberattack.](https://www.ibtimes.com/jpmorgan-vendor-cyberattack-customer-data-exposure-3809966), ibtimes.com


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Chase Would Like You to Know Its Latest Cybersecurity Issue Is a Whole New Problem",
  "datePublished": "2026-11-20",
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
