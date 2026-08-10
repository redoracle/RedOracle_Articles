# Security Policy

## Overview

RedOracle is an independent cybersecurity organization. We take the security of our website, content, and infrastructure seriously. This policy describes how to report vulnerabilities and what to expect during the disclosure process.

## Supported Scope

| Scope | Description |
|---|---|
| `redoracle.com` | The RedOracle website and all subdomains |
| RedOracle GitHub repositories | Code, configurations, and published content |
| RedOracle infrastructure | Servers, containers, and cloud resources operated by RedOracle |

### Out of Scope

- Third-party services we reference but do not operate (e.g., linked external tools)
- Social engineering of RedOracle staff or community members
- Physical security attempts
- Denial of Service (DoS) or Distributed DoS attacks
- Automated vulnerability scanning that degrades service availability
- Vulnerabilities in third-party software without a working PoC specific to RedOracle
- Spam or social media abuse

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

### How to Report

Please report vulnerabilities through one of the following channels:

1. **GitHub Security Advisories** (preferred):
   - Navigate to the **Security** tab of this repository
   - Click **"Report a vulnerability"**
   - Fill in the advisory with full details

2. **Email**: Send a detailed report to the security team via the contact information on [redoracle.com](https://redoracle.com)

### What to Include

To help us triage and remediate quickly, please include:

- **Description** of the vulnerability and its potential impact
- **Affected URL(s)** or repository file(s)
- **Steps to reproduce** — a clear, reproducible walkthrough
- **Proof of Concept (PoC)** — if applicable, demonstrating the vulnerability
- **Suggested remediation** — if you have recommendations
- **Your contact information** — for follow-up questions and credit

## Response Timeline

| Stage | Target |
|---|---|
| Acknowledgment of report | Within 48 hours |
| Initial assessment & triage | Within 5 business days |
| Status update | Every 7 days until resolved |
| Remediation (critical) | Within 30 days of confirmation |
| Remediation (high) | Within 60 days of confirmation |
| Remediation (medium/low) | Within 90 days of confirmation |
| Public disclosure | After remediation, coordinated with reporter |

## Responsible Disclosure Guidelines

We ask that you:

- ✅ **Do** provide full details of the vulnerability
- ✅ **Do** allow reasonable time for remediation before public disclosure
- ✅ **Do** test only against accounts and resources you own or have explicit authorization to test
- ❌ **Don't** access or modify data that does not belong to you
- ❌ **Don't** degrade service availability for other users
- ❌ **Don't** publicly disclose the vulnerability before remediation is complete
- ❌ **Don't** demand financial compensation as a condition of reporting

## Safe Harbor

RedOracle considers vulnerability research conducted in good faith and in accordance with this policy to be authorized. We will not pursue legal action against individuals who:

- Follow this policy
- Do not access or modify non-public data
- Do not degrade service availability
- Report vulnerabilities exclusively through the channels listed above

## Recognition

Contributors who report valid security vulnerabilities will be credited (with their permission) in:

- GitHub Security Advisories
- Our acknowledgments page on redoracle.com

---

**AI supports the process. Expertise guides the outcome.**

© RedOracle. This policy is provided for informational purposes and does not constitute a legal contract.
