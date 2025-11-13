

# **The Resilient and Evolving RaaS Ecosystem: Disruption, Innovation, and the Future of Cybercrime**

## **Executive Summary**

The modern Ransomware-as-a-Service (RaaS) ecosystem represents a sophisticated, highly-organized, and resilient criminal industry. The findings of this report indicate that traditional law enforcement takedowns, while tactically successful in the short term, frequently fail to address the systemic resilience of the RaaS business model. This creates a cyclical and predictable "whack-a-mole" dynamic where dismantled groups are rapidly replaced by new or rebranded entities. The analysis herein profiles two prominent emerging groups, Lynx and Qilin, to demonstrate how these actors are not merely replacing their predecessors but are innovating with new tactics that blend traditional dual-extortion with psychological manipulation, public shaming, and even the weaponization of legal compliance.

This report's core findings highlight a critical dichotomy: while the RaaS ecosystem's specialization and profit-driven structure make it robust, its corporate-like hierarchy and human dynamics also introduce significant vulnerabilities. Law enforcement's strategic successes against groups like Hive, which targeted the criminal business model itself, demonstrate a more sustainable path forward. The report concludes with a series of multi-layered recommendations, advocating for a shift from a reactive, defense-only posture to a proactive, intelligence-driven disruption strategy that exploits the organizational and human fault lines within these criminal enterprises.

## **Section 1: The Architected Resilience of the Ransomware-as-a-Service (RaaS) Model**

### **The Business Model of Cybercrime: An In-Depth Analysis of RaaS**

The Ransomware-as-a-Service (RaaS) model has professionalized cybercrime by adopting a subscription-based, "SaaS-like" enterprise structure.1 This criminal business model is built on a clear division of labor, which is its primary source of operational resilience. This specialization lowers the technical barrier to entry for affiliates 1, enabling a dramatic increase in the scale and speed of attacks. In fact, the average time to prepare and launch a ransomware attack has plummeted from over 60 days in 2019 to just 3.84 days today.4

The ecosystem is composed of three primary roles that work in concert:

* **Operators/Developers:** These are highly skilled individuals who build and maintain the core ransomware code, develop supporting infrastructure like dedicated leak sites and payment portals, and offer amenities such as ongoing technical support and negotiation guides to their partners.1  
* **Affiliates:** These individuals or groups lease the RaaS kit to find targets, execute the attacks, and negotiate with victims.1 They gain access to sophisticated tools without needing the technical expertise to create them.  
* **Initial Access Brokers (IABs):** These are technical specialists who focus exclusively on breaching networks through methods like phishing, social engineering, or exploiting vulnerabilities. They then sell this verified network access to affiliates on the dark web, streamlining the attack process for the affiliates.1

The financial model is mutually beneficial and serves as a powerful incentive. Operators typically charge a monthly fee or a one-time licensing fee, but the bulk of their revenue comes from a profit-sharing arrangement, often taking a significant cut of 30-40% of every successful ransom payment.2 This structure allows operators to maximize their profits without the added effort and risk of directly conducting the attacks. Furthermore, this division of labor makes it significantly more challenging for law enforcement to accurately attribute attacks. The individuals carrying out the attacks (affiliates) are not the same as those who developed the malware (operators), and multiple groups may be using the same ransomware strain.4 This inherent obfuscation makes it exponentially more difficult to build a comprehensive case against the core operators.

### **A Historical Context: The Evolution from Monolithic Ransomware to RaaS**

The evolution of ransomware can be traced from its rudimentary origins to its current state as a sophisticated criminal enterprise. The first known ransomware, the AIDS Trojan of 1989, employed basic encryption methods to render a system unusable and was easily decrypted by exploiting flaws in the primitive algorithms.7 This approach contrasted sharply with the advent of strong, modern encryption in the 2013 CryptoLocker attack, which made recovery without the private key nearly impossible.7

A pivotal event in this history was the 2017 WannaCry outbreak. While its technical execution was monolithic—relying on the single EternalBlue exploit to spread—the attack demonstrated the immense profitability of large-scale ransomware and the viability of using hard-to-trace cryptocurrencies like Bitcoin for payments.7 The success of WannaCry served as a proof of concept for the criminal underworld, accelerating the adoption and professionalization of the distributed RaaS business model. In essence, WannaCry was the tipping point that validated ransomware as a multi-billion-dollar criminal enterprise and led to a strategic shift from opportunistic attacks to "big game hunting" against high-value targets.8

### **The "Whack-a-Mole" Paradox: Why Takedowns Fall Short**

Law enforcement has achieved notable tactical successes in disrupting ransomware groups. Actions against the REvil group resulted in the seizure of $6.1 million in funds and the unsealing of charges against key affiliates.11 Similarly, the Department of Justice announced a coordinated effort against the BlackSuit (Royal) group, seizing servers, domains, and approximately $1 million in laundered proceeds.12 However, despite these impactful takedowns, the overall ransomware threat continues to escalate, as evidenced by an 82% increase in ransomware-related data leaks in 2021 compared to 2020\.10

This phenomenon can be understood through a market-driven replenishment cycle. When a major player is taken down, a power vacuum is created. The skilled affiliates from the dismantled group, who still possess the motivation and technical skills to conduct attacks, simply migrate to a new or emerging RaaS operation. The disruption of groups like RansomHub and LockBit, for example, directly led to a surge in Qilin's activity as it absorbed experienced affiliates.15 This dynamic incentivizes remaining criminal groups to innovate and compete for talent, leading to a more sophisticated and dangerous threat landscape over time.

A more effective approach is exemplified by the takedown of the Hive ransomware group. The FBI's months-long disruption campaign involved a covert infiltration of the group's computer networks, where they captured decryption keys and provided them to victims.17 This action prevented over $130 million in ransom payments.17 This operation represents a strategic shift from simply dismantling infrastructure to undermining the group's core value proposition. By preemptively distributing decryption keys, law enforcement destroyed the group's credibility and made it a poor business partner for affiliates, thus weakening the RaaS model itself.

## **Section 2: Profiling the Next-Generation Threat Actors: Lynx and Qilin**

### **The Rise of Lynx Ransomware: Strategic Targeting and Operational Secrecy**

The Lynx ransomware group emerged in mid-2024 as a successor to the INC ransomware group.18 Operating under the RaaS model, Lynx has distinguished itself through impressive operational security and a calculated approach to targeting. The group's affiliates are explicitly instructed not to target healthcare institutions, government agencies, churches, or children's charities, and they avoid countries in the Commonwealth of Independent States (CIS).18 These deliberate targeting exclusions are not a sign of moral restraint; they are a calculated risk-mitigation strategy. By avoiding critical sectors and aggressive jurisdictions, Lynx seeks to operate under the radar of international law enforcement task forces and maximize its long-term viability. This approach demonstrates an evolution in criminal strategy from "maximum damage" to "maximum sustainable profit."

Lynx employs a sophisticated double-extortion model, not only encrypting data but also exfiltrating sensitive information.18 One of its key tactics is the gradual release of small batches of stolen data, a process known as "drip" extortion.19 This is a sophisticated form of psychological manipulation designed to maintain constant pressure on a victim and force a faster, more favorable negotiation. The group has been highly active, particularly in the first quarter of 2025, publicly claiming 148 incidents, with a strategic emphasis on industrial sectors such as manufacturing and transportation.21

### **The Innovation of Qilin (Agenda): A Multi-Faceted Threat**

Qilin, initially known as "Agenda," first appeared in 2022 and rebranded itself in September of that year after a creature from Chinese mythology.15 Qilin's rapid rise is a case study in criminal innovation and market adaptation. The group's activity surged in 2025 as it successfully recruited experienced affiliates from disrupted RaaS groups like RansomHub and LockBit.15 This demonstrates that the RaaS ecosystem is an ongoing arms race where groups must constantly innovate their tools and tactics to attract the most skilled "talent."

The group's technical sophistication is notable, utilizing multiple programming languages like Golang and Rust to enable cross-platform attacks, including against VMware ESXi servers.22 Its RaaS kit offers customizable encryption modes and configurations, allowing affiliates to tailor attacks for speed or completeness.22 Qilin affiliates have also been observed exploiting specific Fortinet vulnerabilities to gain initial access and escalate privileges.22

The group's attack on Synnovis, a UK-based medical company, which demanded a $50 million ransom and led to significant patient harm and one death, highlights a potential conflict between financial motivation and ethical boundaries within the criminal underworld.15 Attacks that result in physical harm attract intense law enforcement scrutiny and can cause internal friction, as evidenced by the alleged collapse of another group, Black Basta, over a similar attack.15 This friction reveals a potential fault line that law enforcement can exploit.

**Table 1: Comparative Analysis of Lynx and Qilin Tactics and Targets**

| Feature | Lynx Ransomware | Qilin Ransomware |
| :---- | :---- | :---- |
| **Origins** | Successor to the INC ransomware group.18 | Emerged as "Agenda" in 2022, rebranded to Qilin in Sep. 2022\.15 |
| **Operational Timeline** | Emerged in mid-2024, with activity accelerating in Q1 2025\.18 | Active since 2022; rapid growth in 2025 after RansomHub and LockBit disruptions.15 |
| **Core Technology** | Custom encryptors, shares code with INC variant.19 | Written in Golang and Rust for cross-platform attacks.22 |
| **Key Tactic** | "Drip" data releases to maintain pressure on victims.19 | "Call Lawyer" feature on RaaS panel to weaponize legal compliance.22 |
| **Strategic Exclusions** | Avoids government, healthcare, charities, and CIS regions.18 | Avoids organizations in the Commonwealth of Independent States (CIS).22 |
| **Notable Attacks** | Aerospace, automotive, energy, and transportation sectors.18 | Major attack on Synnovis medical company in June 2024\.15 |

## **Section 3: The Evolving Toolkit of Extortion: Psychological and Social Manipulation**

### **Beyond Encryption: The Double and Triple Extortion Model**

The threat model of modern ransomware has fundamentally shifted. The focus is no longer solely on data encryption; it has evolved into a form of psychological warfare. This change is best illustrated by the adoption of multi-layered extortion tactics. Double extortion, a hallmark of groups like Lynx and Qilin, combines data encryption with the theft of sensitive data. Attackers hold the victim's data hostage twice: first by encrypting files to disrupt operations, and second by threatening to release the exfiltrated data publicly if the ransom is not paid.2 This tactic renders traditional defenses, such as data backups, insufficient since restoring systems does not mitigate the threat of public disclosure.

An even more advanced tactic is triple extortion, which adds a third layer of pressure. This can involve a threat of a distributed denial-of-service (DDoS) attack to disrupt the victim's online services, or even the direct targeting of a victim's customers and business partners.27 These tactics turn a ransomware attack into a multifaceted assault on an organization's public reputation, operational stability, and legal standing, exploiting multiple avenues of coercion to increase the likelihood of a ransom payment.

### **The Weaponization of Public Shaming and Social Engineering**

RaaS groups have become adept at exploiting human fear and social dynamics. A core component of this strategy is the use of dedicated leak sites (DLS) hosted on the dark web.15 These sites are used to publicly shame non-paying victims by leaking their stolen data, which can result in severe reputational damage, financial losses, and regulatory fines.2 The psychological pressure is a primary tool, and threat actors have learned to time their attacks for maximum impact, such as during the beginning of a school year or during exam periods.28

Initial access is also often achieved through social engineering tactics like phishing and pretexting, where victims are tricked into revealing sensitive information or executing malicious payloads.3 For example, the Interlock ransomware variant has used a "ClickFix" social engineering technique, where victims are tricked into running a malicious payload by clicking a fake CAPTCHA to fix an alleged system issue.29 These tactics highlight that the "human factor" is a critical vulnerability that attackers are now a weaponizing.

### **The Legal Gambit: Qilin's "Call Lawyer" Feature**

A revolutionary tactic demonstrating a new level of sophistication is Qilin's "Call Lawyer" feature, which offers affiliates legal counsel via its RaaS panel.15 This is not a service for the victim; it is a tool for the criminal. The purpose of this feature is to provide affiliates with expert advice on how to weaponize regulatory frameworks to increase pressure on a victim. By understanding the specific regulations a victim may have broken (e.g., HIPAA) and the potential costs of a breach, affiliates can justify and demand a higher ransom payment.15 This blurs the line between a cyberattack and a legal/financial shakedown, where the threat of regulatory fines and legal consequences becomes a quantifiable leverage point in negotiations.

## **Section 4: Strategic Disruption: Leveraging Internal Vulnerabilities and OpSec Failures**

### **The Corporate Structure of Cybercrime: Insights from the Conti Leaks**

The Conti leaks, which exposed over 168,000 chat logs, provided an unprecedented look into the internal workings of a major RaaS group.31 The analysis revealed a hierarchical, corporate-like structure with a clear chain of command and specialized departments, including a technical department, operations, and even an HR/administration function.31 A central leader, "Stern," coordinated communications across all units and was the primary point of contact for affiliates, senior managers, and developers.31

While this corporate structure provides efficiency, it also introduces significant vulnerabilities. Unlike a flat, decentralized network, a hierarchical organization has single points of failure. The Conti leaks themselves did not result from a technical hack; they were orchestrated by a disgruntled affiliate.7 This underscores a critical lesson for law enforcement: the human and organizational vulnerabilities of these groups are often more exploitable than their technical ones.

### **Internal Strife and Intelligence Leaks as a Disruption Vector**

The RaaS ecosystem, while primarily driven by financial incentives, is not immune to internal friction. The alleged collapse of the Black Basta group is a case in point. The group reportedly unraveled due to internal disagreements over a politically charged attack on a healthcare provider and the Russia-Ukraine war, leading to chat leaks and a cessation of operations.15 Such internal strife exposes a key fault line within the RaaS ecosystem: the conflict between pure profit and political or ethical considerations. When an attack causes physical harm or attracts intense political scrutiny, it can erode the trust and cohesion of a criminal group, potentially leading to leaks and intelligence windfalls for law enforcement. Agencies can exploit this by amplifying the ethical and political fallout of such attacks, encouraging internal dissent and leaks.

### **A New Frontier for Law Enforcement: The Hive Disruption Campaign**

The Hive takedown represents a paradigm shift in how law enforcement can effectively counter RaaS operations. Instead of a traditional "takedown" focused on infrastructure seizure, the FBI launched a "disruption campaign" that targeted the group's business model. The FBI covertly infiltrated Hive's network for months, a groundbreaking operation that allowed them to seize decryption keys and provide them to victims *before* they paid the ransom.17 This action saved victims over $130 million in ransom payments and fundamentally destroyed the group's value proposition. By preemptively providing decryption keys, law enforcement made the group an untrustworthy business partner for affiliates and a less credible threat to victims, which ultimately led to the group's collapse. This approach provides a more sustainable, long-term solution than simply seizing assets, as it directly attacks the criminal organization's core credibility and profitability.

## **Section 5: Conclusion and Strategic Recommendations**

### **Synthesizing the Threat and the Opportunity**

The analysis in this report confirms that the RaaS ecosystem is a resilient and adaptive criminal industry. Its business-like structure, from its division of labor to its profit-sharing model, allows it to rapidly absorb and innovate in the wake of law enforcement actions. Emerging groups like Lynx and Qilin are pushing the boundaries of extortion, moving beyond technical encryption to employ psychological manipulation, public shaming, and even legal exploitation to maximize their leverage. However, the same corporate-like structures that make these groups efficient also create exploitable human and organizational vulnerabilities. The groundbreaking Hive disruption campaign demonstrates that a new, more effective approach is to target the criminal business model directly, rather than just the actors or their infrastructure.

### **Actionable Recommendations for a Proactive Defense**

To counter this evolving and resilient threat, organizations must adopt a multi-layered and proactive defense strategy that goes beyond reactive measures. The following recommendations are designed to build a robust defense that addresses not only the technical vulnerabilities but also the human and operational dimensions of the threat.

**Table 2: Key Mitigation Strategies by Threat Vector**

| Threat Vector | Mitigation Strategy |  |  |
| :---- | :---- | :---- | :---- |
| **Initial Access** | \- Comprehensive employee training to identify and report social engineering and phishing attempts.3 |  \- Timely patching of all software and firmware, especially on internet-facing systems, to fix known exploited vulnerabilities.24 |  \- Implementation of a robust multi-factor authentication (MFA) policy for all critical accounts, especially those with remote access.22 |
| **Lateral Movement** | \- Network segmentation to prevent the spread of ransomware from a compromised host to other systems.18 |  \- Adoption of a Zero Trust security model that requires explicit verification for every access request, regardless of whether it originates inside or outside the network.13 |  |
| **Data Exfiltration** | \- Anomaly-based detection tools, such as Endpoint Detection and Response (EDR), to identify and block suspicious data transfers in near-real time.4 |  \- Regular and comprehensive backups of all critical data, with multiple, physically separate and secure copies maintained offline to prevent attackers from targeting them.7 |  |
| **Extortion Tactics** | \- A well-documented and practiced incident response plan to ensure a rapid, coordinated, and effective response to an attack.4 |  \- Engagement with law enforcement agencies like the FBI and CISA to report incidents and leverage their intelligence and resources.4 | \- Development of a public relations and communications strategy to manage potential reputational damage from public shaming. |

### **A Forward-Looking Perspective**

The battle against RaaS is not merely a technical one; it is a strategic one that requires an understanding of the criminal ecosystem's business, organizational, and human vulnerabilities. Future success depends on moving beyond a reactive defense to a proactive disruption strategy. By strengthening internal defenses, training employees to be the first line of defense, and collaborating with law enforcement to target the criminal business model itself, organizations and governments can collectively build a more resilient digital landscape.

#### **Works cited**

1. What Is Ransomware-as-a-Service \- RaaS? \- Sophos, accessed August 14, 2025, [https://www.sophos.com/en-us/cybersecurity-explained/ransomware-as-a-service](https://www.sophos.com/en-us/cybersecurity-explained/ransomware-as-a-service)  
2. Ransomware Inc: Decoding the RaaS Business Model | UpGuard, accessed August 14, 2025, [https://www.upguard.com/blog/decoding-the-raas-business-model](https://www.upguard.com/blog/decoding-the-raas-business-model)  
3. What Is Ransomware-as-a-Service (RaaS)? How Does it Work? | Fortinet, accessed August 14, 2025, [https://www.fortinet.com/resources/cyberglossary/ransomware-as-a-service-raas](https://www.fortinet.com/resources/cyberglossary/ransomware-as-a-service-raas)  
4. What Is Ransomware-as-a-Service (RaaS)? | IBM, accessed August 14, 2025, [https://www.ibm.com/think/topics/ransomware-as-a-service](https://www.ibm.com/think/topics/ransomware-as-a-service)  
5. How Ransomware-as-a-Service (RaaS) operations work \- Outpost24, accessed August 14, 2025, [https://outpost24.com/blog/ransomware-as-a-service-behind-the-scenes/](https://outpost24.com/blog/ransomware-as-a-service-behind-the-scenes/)  
6. Ransomware as-a-Service (RaaS) \- Check Point Software, accessed August 14, 2025, [https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/ransomware-as-a-service-raas/](https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/ransomware-as-a-service-raas/)  
7. Tracing the History of Ransomware: Major Attacks and ... \- CyberMaxx, accessed August 14, 2025, [https://www.cybermaxx.com/resources/tracing-the-history-of-ransomware-major-attacks-and-developments/](https://www.cybermaxx.com/resources/tracing-the-history-of-ransomware-major-attacks-and-developments/)  
8. History and Evolution of Ransomware \- Sangfor Technologies, accessed August 14, 2025, [https://www.sangfor.com/cybersecurity/innovations/ransomware-evolution](https://www.sangfor.com/cybersecurity/innovations/ransomware-evolution)  
9. The Different Types of Ransomware \- Check Point Software, accessed August 14, 2025, [https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/different-types-of-ransomware/](https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/different-types-of-ransomware/)  
10. Ransomware, extortion and the cyber crime ecosystem \- NCSC.GOV.UK, accessed August 14, 2025, [https://www.ncsc.gov.uk/whitepaper/ransomware-extortion-and-the-cyber-crime-ecosystem](https://www.ncsc.gov.uk/whitepaper/ransomware-extortion-and-the-cyber-crime-ecosystem)  
11. Cracking Down on Ransomware: Strategies for Disrupting Criminal ..., accessed August 14, 2025, [https://www.fbi.gov/news/speeches-and-testimony/cracking-down-on-ransomware-strategies-for-disrupting-criminal-hackers-and-building-resilience-against-cyber-threats](https://www.fbi.gov/news/speeches-and-testimony/cracking-down-on-ransomware-strategies-for-disrupting-criminal-hackers-and-building-resilience-against-cyber-threats)  
12. Justice Department Announces Coordinated Disruption Actions Against BlackSuit (Royal) Ransomware Operations, accessed August 14, 2025, [https://www.justice.gov/opa/pr/justice-department-announces-coordinated-disruption-actions-against-blacksuit-royal](https://www.justice.gov/opa/pr/justice-department-announces-coordinated-disruption-actions-against-blacksuit-royal)  
13. 2022 Global Threat Report, accessed August 14, 2025, [https://irp.cdn-website.com/5d9b1ea1/files/uploaded/Report2022GTR.pdf](https://irp.cdn-website.com/5d9b1ea1/files/uploaded/Report2022GTR.pdf)  
14. Cyber threat bulletin: The ransomware threat in 2021 \- Canadian Centre for Cyber Security, accessed August 14, 2025, [https://www.cyber.gc.ca/en/guidance/cyber-threat-bulletin-ransomware-threat-2021](https://www.cyber.gc.ca/en/guidance/cyber-threat-bulletin-ransomware-threat-2021)  
15. Qilin ransomware is growing, but how long will it last? \- Barracuda Blog, accessed August 14, 2025, [https://blog.barracuda.com/2025/07/18/qilin-ransomware-growing](https://blog.barracuda.com/2025/07/18/qilin-ransomware-growing)  
16. Cyble reveals US primary target with 223 ransomware victims amid rising attacks on critical infrastructure \- Industrial Cyber, accessed August 14, 2025, [https://industrialcyber.co/critical-infrastructure/cyble-reveals-us-primary-target-with-223-ransomware-victims-amid-rising-attacks-on-critical-infrastructure/](https://industrialcyber.co/critical-infrastructure/cyble-reveals-us-primary-target-with-223-ransomware-victims-amid-rising-attacks-on-critical-infrastructure/)  
17. Office of Public Affairs | U.S. Department of Justice Disrupts Hive ..., accessed August 14, 2025, [https://www.justice.gov/archives/opa/pr/us-department-justice-disrupts-hive-ransomware-variant](https://www.justice.gov/archives/opa/pr/us-department-justice-disrupts-hive-ransomware-variant)  
18. Lynx Ransomware Group: Tactics, Targets, And Defense Strategies, accessed August 14, 2025, [https://cyble.com/threat-actor-profiles/lynx-ransomware/](https://cyble.com/threat-actor-profiles/lynx-ransomware/)  
19. New Threat on the Prowl: Investigating Lynx Ransomware \- Darktrace, accessed August 14, 2025, [https://www.darktrace.com/blog/new-threat-on-the-prowl-investigating-lynx-ransomware](https://www.darktrace.com/blog/new-threat-on-the-prowl-investigating-lynx-ransomware)  
20. Ransomware Groups Report 2024 \- Q3 \- Cyberint, accessed August 14, 2025, [https://cyberint.com/blog/research/ransomware-trends-2024-report/](https://cyberint.com/blog/research/ransomware-trends-2024-report/)  
21. Dragos Industrial Ransomware Analysis: Q1 2025, accessed August 14, 2025, [https://www.dragos.com/blog/dragos-industrial-ransomware-analysis-q1-2025/](https://www.dragos.com/blog/dragos-industrial-ransomware-analysis-q1-2025/)  
22. Qilin Ransomware (Agenda): A Deep Dive \- Check Point Software, accessed August 14, 2025, [https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/qilin-ransomware/](https://www.checkpoint.com/cyber-hub/threat-prevention/ransomware/qilin-ransomware/)  
23. Qilin Ransomware Group \- Threat Actor Profile \- Cyble, accessed August 14, 2025, [https://cyble.com/threat-actor-profiles/qilin-ransomware-group/](https://cyble.com/threat-actor-profiles/qilin-ransomware-group/)  
24. Qilin Ransomware: Tactics & Attack Methods \- CybelAngel, accessed August 14, 2025, [https://cybelangel.com/qilin-ransomware-tactics-attack/](https://cybelangel.com/qilin-ransomware-tactics-attack/)  
25. Qilin Ransomware Group Exploiting Critical Fortinet Flaws \- The HIPAA Journal, accessed August 14, 2025, [https://www.hipaajournal.com/qilin-ransomware-group-exploiting-critical-fortinet-flaws/](https://www.hipaajournal.com/qilin-ransomware-group-exploiting-critical-fortinet-flaws/)  
26. Unmasking Embargo Ransomware: A Deep Dive Into the Group's TTPs and BlackCat Links, accessed August 14, 2025, [https://www.trmlabs.com/resources/blog/unmasking-embargo-ransomware-a-deep-dive-into-the-groups-ttps-and-blackcat-links](https://www.trmlabs.com/resources/blog/unmasking-embargo-ransomware-a-deep-dive-into-the-groups-ttps-and-blackcat-links)  
27. What is Triple Extortion Ransomware? \- SentinelOne, accessed August 14, 2025, [https://www.sentinelone.com/cybersecurity-101/threat-intelligence/what-is-triple-extortion/](https://www.sentinelone.com/cybersecurity-101/threat-intelligence/what-is-triple-extortion/)  
28. 'Your Data is Stolen and Encrypted': The Ransomware Victim Experience \- RUSI, accessed August 14, 2025, [https://static.rusi.org/ransomware-harms-final.pdf](https://static.rusi.org/ransomware-harms-final.pdf)  
29. \#StopRansomware: Interlock | CISA, accessed August 14, 2025, [https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-203a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-203a)  
30. Highlighting common social engineering attacks for kids \- ESET, accessed August 14, 2025, [https://www.eset.com/blog/en/home-topics/family-safety-online/social-engineering-attacks-kids/](https://www.eset.com/blog/en/home-topics/family-safety-online/social-engineering-attacks-kids/)  
31. Full article: The internal structure of ransomware criminal groups: an ..., accessed August 14, 2025, [https://www.tandfonline.com/doi/full/10.1080/17440572.2025.2534387](https://www.tandfonline.com/doi/full/10.1080/17440572.2025.2534387)  
32. Ransomware \- FBI, accessed August 14, 2025, [https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/ransomware](https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/ransomware)