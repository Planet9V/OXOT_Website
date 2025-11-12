

# **OTCE\_2025\_8\_TVA\_ENERGY\_MANUFACTURING**

### **Executive Summary**

July 2025 witnessed a significant and concentrated surge in cybersecurity advisories targeting the critical infrastructure sectors of energy and manufacturing. The coordinated efforts of government agencies and major industrial vendors led to a high-volume disclosure of vulnerabilities, many of which were rated as critical or high-severity. This report provides a detailed analysis of these advisories, synthesizing data from sources including CISA, major vendor publications, and threat intelligence providers such as GreyNoise and Recorded Future.

Key findings indicate that the threat landscape is evolving rapidly, with vulnerabilities spanning from foundational industrial control systems (ICS) to the IT infrastructure that supports them. The month's most urgent advisories include a critical, CVSS 9.8 vulnerability in Siemens SINEC NMS that could allow unauthenticated administrative control, and multiple critical-rated flaws in Emerson ValveLink products that expose sensitive data and allow for unauthorized code execution.

Beyond these tactical vulnerabilities, the analysis reveals a broader strategic shift: the once-distinct line between Information Technology (IT) and Operational Technology (OT) security is dissolving. Real-world exploitation of zero-day vulnerabilities in common IT platforms like Microsoft SharePoint and Citrix NetScaler has been observed targeting energy sector entities, highlighting that a compromise in one domain can serve as a launchpad for attacks against the other. Furthermore, threat intelligence data confirms that attackers are moving faster than ever, with evidence of malicious activity preceding public vulnerability disclosures, challenging the conventional reactive patching model.

This report concludes with a call to action for a fundamental re-evaluation of cybersecurity strategies in these sectors. Recommendations focus on adopting a proactive, intelligence-driven defense posture, prioritizing patching based on real-world exploitability, enhancing network segmentation, and implementing robust supply chain risk management to address the increasingly complex and intertwined nature of modern threats.

---

### **Chapter 1: The July 2025 ICS/OT Threat Landscape**

#### **1.1 Introduction: A Shifting Defensive Paradigm**

The security of the world's energy and manufacturing infrastructure is paramount to global economic stability and national security. These sectors, collectively known as critical infrastructure, rely on a complex ecosystem of interconnected hardware and software, from programmable logic controllers (PLCs) on the factory floor to enterprise resource planning (ERP) systems in corporate offices. This report is designed to move beyond a simple list of vulnerabilities, providing a strategic analysis of the threat landscape for July 2025\. It synthesizes information from a variety of public and private sources to deliver a comprehensive, contextualized, and actionable overview for senior security leaders tasked with defending these vital assets.

The data for this analysis was gathered from official government sources like the Cybersecurity and Infrastructure Security Agency (CISA), vendor security advisories from key suppliers, and real-time threat intelligence from firms that monitor attacker behavior. The methodology ensures a holistic view that combines technical vulnerability details with a deeper understanding of the motivations and tactics of modern adversaries.

#### **1.2 Advisory Disclosures: A Month of Concentrated Action**

July 2025 was characterized by a high volume of ICS/OT security disclosures, with advisories often released in a coordinated manner. CISA, the primary U.S. government authority on critical infrastructure security, released a series of advisories throughout the month, providing timely information on current security issues, vulnerabilities, and exploits surrounding industrial control systems.

Key CISA advisory release dates included:

* **July 3, 2025:** CISA released four Industrial Control Systems advisories.1  
* **July 8, 2025:** CISA released one Industrial Control Systems advisory.2  
* **July 17, 2025:** CISA released three Industrial Control Systems advisories.3  
* **July 31, 2025:** CISA released two Industrial Control Systems advisories.4

In a parallel and notable trend, multiple major industrial vendors coordinated their security publications around a mid-month "Patch Tuesday" event. On July 9, 2025, Siemens, Schneider Electric, and Phoenix Contact all released new security advisories and bulletins addressing vulnerabilities in their products.5 This synchronized approach indicates a maturing vulnerability disclosure and patching ecosystem. While such coordinated releases can create a concentrated "patching storm" for organizations, they also reflect a positive trend toward standardized communication and risk management across the OT space. This structured approach helps asset owners anticipate and plan for a high volume of security updates, even as it creates a significant workload spike for their security teams.

The most impactful vulnerabilities of the month are summarized in the following table, providing a quick reference guide to the key advisories and their associated risks.

| Date | Vendor | Product | Vulnerability Summary | CVE ID | CVSS v3/v4 Score |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Jul 10, 2025 | Siemens | SINEC NMS | Missing Authentication for Critical Function | CVE-2025-40736 | 9.8 / 9.3 |
| Jul 10, 2025 | Siemens | SINEC NMS | SQL Injection | CVE-2025-40735 | 8.8 / 8.7 |
| Jul 8, 2025 | Emerson | ValveLink | Cleartext Storage of Sensitive Data in Memory | CVE-2025-52579 | 9.4 / 9.3 |
| Jul 8, 2025 | Emerson | ValveLink | Protection Mechanism Failure | CVE-2025-46358 | 7.7 / 8.5 |
| Jul 9, 2025 | Phoenix Contact | PLCnext | Critical vulnerabilities enabling DoS, code execution | Not specified | Not specified |
| Jul 9, 2025 | Phoenix Contact | Charx EV Controllers | Critical vulnerabilities enabling DoS, privilege escalation | Not specified | Not specified |
| Jul 17, 2025 | Leviton | AcquiSuite Energy Monitoring Hub | Cross-site scripting (XSS) | CVE-2025-6185 | 9.3 / 8.7 |
| Jul 17, 2025 | Johnson Controls | Software House C·CURE 9000 | Incorrect Default Permissions | CVE-2024-32861 | 7.8 / 8.5 |
| Jul 3, 2025 | Mitsubishi Electric | MELSEC iQ-F Series | Overly Restrictive Account Lockout Mechanism (DoS) | CVE-2025-5241 | 5.3 / 6.9 |
| Jul 17, 2025 | Citrix | NetScaler ADC/Gateway | Pre-authentication memory disclosure | CVE-2025-5777 | 9.3 |

---

### **Chapter 2: In-Depth Vendor Vulnerability Analysis**

#### **2.1 Siemens: Critical Flaws in Foundational Systems**

Siemens, a key supplier in the manufacturing and energy sectors, was a major focus of cybersecurity advisories in July 2025\. CISA's advisory ICSA-25-191-01, released on July 10, 2025, detailed four distinct vulnerabilities in the **Siemens SINEC NMS** product.6 This network management system is a foundational component for controlling and monitoring OT networks, making these vulnerabilities particularly high-impact.

The most severe vulnerability, **Missing Authentication for a Critical Function** (CVE-2025-40736), was assigned a CVSS v3.1 base score of 9.8 and a CVSS v4 score of 9.3. This flaw allows an unauthenticated remote attacker to reset the superadmin password and, by extension, gain full control of the application and the network it manages. The far-reaching implications of this single flaw are substantial; an attacker who can compromise the management system effectively gains the "master key" to the entire industrial network, potentially allowing them to exfiltrate data, reconfigure systems, or disrupt operations at will. This specific vulnerability underscores the critical importance of securing the foundational control and management systems that oversee industrial operations, as a single point of failure can lead to catastrophic network-wide compromise.

Other high-severity vulnerabilities in SINEC NMS include:

* **Improper Neutralization of Special Elements used in an SQL Command** (CVE-2025-40735): This SQL Injection vulnerability (CVSS v3.1 8.8, v4 8.7) could allow an unauthenticated remote attacker to execute arbitrary SQL queries on the server database.6  
* **Improper Limitation of a Pathname to a Restricted Directory** (CVE-2025-40737 and CVE-2025-40738): Two separate path traversal vulnerabilities (CVSS v3.1 8.8, v4 8.7 for both) allow an attacker to write arbitrary files to restricted locations, potentially leading to code execution with elevated privileges.6

Beyond SINEC NMS, other advisories from the July 9 "Patch Tuesday" highlighted high-severity flaws in several other Siemens products. These included privilege escalation and code execution vulnerabilities in the **TIA Administrator framework**, Man-in-the-Middle (MitM) attacks in **Sicam Toolbox II** and **Ruggedcom ROS**, and Denial-of-Service (DoS) or code execution vulnerabilities in **Solid Edge** and **Simatic CN 4100**.5 Medium-severity issues were also addressed in

**Siprotect 5**, **TIA Project Server**, and **TIA Portal** products, which could lead to sensitive information exposure or DoS attacks.5

| Product | Vulnerability Type | CVE ID | CVSS v3.1 / v4 Score | Mitigation Summary |
| :---- | :---- | :---- | :---- | :---- |
| SINEC NMS | Missing Authentication for Critical Function | CVE-2025-40736 | 9.8 / 9.3 | Apply patch/update |
| SINEC NMS | SQL Injection | CVE-2025-40735 | 8.8 / 8.7 | Apply patch/update |
| SINEC NMS | Path Traversal | CVE-2025-40737 | 8.8 / 8.7 | Apply patch/update |
| SINEC NMS | Path Traversal | CVE-2025-40738 | 8.8 / 8.7 | Apply patch/update |
| TIA Admin framework | Privilege Escalation, Code Execution | Not specified | High-severity | Apply patch/update |
| Sicam Toolbox II | MitM Attack | Not specified | High-severity | Apply patch/update |
| Ruggedcom ROS | MitM, Unauthorized Access | Not specified | High-severity | Apply patch/update |
| Siprotect 5 | Information Exposure, DoS | Not specified | Medium-severity | Apply patch/update |

#### **2.2 Emerson: Systemic Design Flaws in Critical Manufacturing Equipment**

The U.S. CISA released an advisory (ICSA-25-189-01) on July 8, 2025, detailing multiple vulnerabilities in **Emerson's ValveLink** products, which are deployed globally in the critical manufacturing sector.2 This advisory identified five distinct vulnerabilities, with a successful exploitation potentially allowing an attacker to read sensitive information, tamper with parameters, and run unauthorized code.7

The most severe flaw, **Cleartext Storage of Sensitive Data in Memory** (CVE-2025-52579), was assigned a CVSS v3.1 base score of 9.4 and a CVSS v4 score of 9.3, classifying it as critical.7 This vulnerability allows sensitive data, which is stored in cleartext in memory, to potentially be saved to disk or core dumps, creating significant risk. Another high-severity vulnerability,

**Protection Mechanism Failure** (CVE-2025-46358), with CVSS v3.1 and v4 scores of 7.7 and 8.5 respectively, indicates that the product fails to implement adequate defenses against directed attacks.7 The presence of multiple, high-severity design flaws—including cleartext storage, a broken protection mechanism, and improper input validation—suggests deeper, systemic security design issues within the ValveLink product family rather than isolated bugs. This means that a simple patch may not be sufficient to address all underlying security concerns, and organizations should consider a more comprehensive security assessment of the product's architecture and deployment. Emerson recommends users update to ValveLink 14.0 or later to mitigate these risks.7

#### **2.3 Mitsubishi Electric: The Challenge of Unpatchable DoS Threats**

CISA advisories ICSA-25-184-03 and ICSA-25-184-04 were released on July 3, 2025, addressing vulnerabilities in Mitsubishi Electric products.1 While the advisory for the

**MELSOFT Update Manager** provided general information, the advisory for the **MELSEC iQ-F Series** provided crucial details about a Denial-of-Service (DoS) vulnerability.9

The vulnerability, identified as an **Overly Restrictive Account Lockout Mechanism** (CWE-645) and assigned CVE-2025-5241, allows a remote attacker to lock out a legitimate user for a period of time by repeatedly attempting to log in with an incorrect password. This flaw, with a CVSS v4 score of 6.9, could lead to operational disruption for a critical industrial controller.9 A particularly challenging aspect of this advisory is that Mitsubishi Electric has stated it has

**no plans to release a fixed version**. This places the entire burden of mitigation on the asset owner, who must rely on compensatory controls, such as using firewalls and VPNs to prevent unauthorized internet access, isolating the products within a LAN, and restricting physical access. This scenario exemplifies the unique and often intractable problem of securing legacy or hard-to-patch OT equipment, a challenge that is fundamentally different from a typical IT patching cycle and forces security leaders to re-evaluate their entire risk acceptance policies for unpatchable assets.

#### **2.4 Other Key Suppliers: The Broadening OT Attack Surface**

July's advisories also highlighted vulnerabilities in a range of other key suppliers, demonstrating a broadening attack surface across the energy and manufacturing sectors. The July 9 "Patch Tuesday" included four new advisories from **Schneider Electric**, with one detailing critical- and high-severity vulnerabilities in **EcoStruxure IT Data Center Expert** that could be exploited for unauthenticated remote code execution and privilege escalation.5 Another advisory described a data exposure issue in

**EcoStruxure Power Monitor Expert**. **Phoenix Contact** also released four new advisories, two of which described critical vulnerabilities in its **PLCnext firmware** and two others that covered critical flaws in **Charx EV charging controllers**.5 The inclusion of vulnerabilities in emerging technologies like EV charging controllers signifies that the OT threat landscape is expanding beyond traditional heavy industrial systems to include new, interconnected infrastructure that requires a broader scope of monitoring.

From a supply chain perspective, the Oracle Critical Patch Update for July 2025 is also relevant to the manufacturing sector.10 While not specifically OT-focused, it included patches for critical flaws in Oracle Supply Chain products such as Agile PLM and AutoVue, with one vulnerability, CVE-2025-31651, in Oracle Agile Engineering Data Management having a CVSS v3.1 base score of 9.8 and allowing for unauthenticated remote exploitation. These systems are integral to the operational workflows of manufacturing organizations, demonstrating that the software supply chain represents a critical and often overlooked threat vector.

The CISA advisory for **Johnson Controls Inc. Software House C·CURE 9000** (ICSA-24-191-05), last updated on July 17, 2025, addressed an "Incorrect Default Permissions" vulnerability (CVE-2024-32861) that could allow an attacker to gain access to credentials.3 This vulnerability, with a CVSS v4 score of 8.5, is another example of a high-severity flaw in a product widely used in critical infrastructure. CISA’s advisory for

**Leviton's AcquiSuite and Energy Monitoring Hub** also highlighted a cross-site scripting (XSS) vulnerability (CVE-2025-6185) with a CVSS v4 score of 8.7, further reinforcing the expanding attack surface to energy monitoring systems.3

---

### 

### **Chapter 3: Strategic Threat Intelligence and Emerging Trends**

#### **3.1 The Convergence of IT and OT Threats: A Single Pane of Compromise**

A defining characteristic of the modern threat landscape is the erosion of the traditional security boundary between IT and OT networks. July 2025 provided clear evidence of how vulnerabilities in common IT platforms are being weaponized to target critical infrastructure. The hard-line distinction between IT and OT security is no longer tenable; a compromise of a corporate IT asset can become a launchpad for attacks against operational environments.

A prominent example is the exploitation of a critical zero-day vulnerability in **Microsoft SharePoint Server** (CVE-2025-53770). This flaw, which allows unauthenticated remote code execution via deserialization attacks, was actively exploited in the wild, with reports explicitly noting that campaigns targeted "government agencies, universities, and energy companies worldwide".11 Attackers were observed leveraging the vulnerability to bypass authentication controls and deploy malicious web shells to steal cryptographic secrets. This demonstrates that adversaries are proficient at using vulnerabilities in generic business software to gain a foothold in networks and then pivot to high-value industrial targets.

Similarly, the **Citrix NetScaler** vulnerability (CVE-2025-5777), dubbed "CitrixBleed 2," received a 24-hour patching mandate from CISA for federal agencies, highlighting its extreme severity.12 This pre-authentication memory disclosure flaw, which allows attackers to leak session tokens and gain unauthorized access, was exploited by malicious actors from Chinese IP addresses starting in late June, weeks before its public disclosure. The fact that CISA and the Department of Homeland Security (DHS) reported multiple compromises of unclassified email systems related to this flaw underscores the direct risk to the IT infrastructure of organizations that also manage critical OT systems. The successful exploitation of such a widely-used IT component represents a direct threat to the perimeters of industrial organizations.

| Vulnerability / CVE | Impacted Technology (IT/OT) | Observed Exploitation Activity (e.g., from GreyNoise) | Attacker Attribution (e.g., Chinese IPs, Ransomware) |
| :---- | :---- | :---- | :---- |
| CVE-2025-53770 (SharePoint) | IT (indirectly affecting OT) | Exploitation against 85+ SharePoint servers globally; targets included energy companies | Not specified in report, but likely sophisticated actors |
| CVE-2025-5777 (NetScaler) | IT (VPN/Gateway) | Targeted exploitation from Chinese IP addresses since June 23, 2025 | Chinese state-sponsored actors |

#### **3.2 The Speed of Exploitation: Attacker Behavior and Pre-Disclosure Activity**

The conventional security model, which relies on a reactive patching cycle following a public vulnerability disclosure, is proving to be insufficient. Threat intelligence research from GreyNoise Intelligence in July 2025 provides a new perspective on this challenge. Their "Early Warning Signals" report reveals a consistent pattern: malicious attacker activity often precedes the public disclosure of a new vulnerability.13 This is not mere speculation; in 80% of cases analyzed, a significant spike in opportunistic attacker activity against an edge technology was followed by a new CVE disclosure within six weeks.

The **Citrix NetScaler** vulnerability (CVE-2025-5777) serves as a concrete, real-world example of this phenomenon. GreyNoise observed targeted exploitation attempts from Chinese IP addresses beginning on June 23, 2025, nearly two weeks before the public proof-of-concept (PoC) release.12 This sequence of events—attacker action followed by a public advisory—demonstrates that threat intelligence can provide a crucial, predictive layer of security. The observed activity acts as an early warning signal, enabling organizations to preemptively block malicious IPs during this critical "retaliation window" and reduce their exposure even before a patch becomes available.

GreyNoise's "2025 Mass Internet Exploitation Report" further confirms that attackers are industrializing vulnerability exploitation at scale. The report emphasizes that adversaries do not just target new zero-days; they also exploit a large volume of legacy vulnerabilities, with some of the most exploited flaws in 2024 dating back to the 1990s.14 This highlights that opportunistic attackers are scanning the entire internet for exposed and vulnerable systems, regardless of the age of the flaw, making a comprehensive and up-to-date patching strategy on all public-facing assets a perennial necessity.

#### **3.3 Geopolitical and Financially Motivated Threats**

While many advisories address opportunistic, mass-scale attacks, a deeper analysis of the threat landscape reveals a more sophisticated and strategically motivated layer of adversarial activity. Vulnerabilities are merely the tools; the true threat is the intent and capability of the attacker.

Recorded Future's Insikt Group research provides a critical lens on this. Their July 17, 2025, report on **Submarine Cable Security** underscored the rising risks to physical infrastructure amid geopolitical tensions.15 This type of strategic analysis connects the dots between global events and potential cyber-physical threats, reminding security professionals that adversaries' goals extend beyond traditional data theft.

Similarly, the dismantling of the pro-Russian hacktivist group NoName057(16) through Europol's **Operation Eastwood** shows that organized, politically motivated campaigns are a persistent risk.12 This group, responsible for extensive DDoS campaigns, had over 100 servers taken offline, illustrating a coordinated, international effort to disrupt their operations.

Finally, the compromise of a U.S. National Guard network by the Chinese state-sponsored group **Salt Typhoon** provides a stark reminder of the long-term, sophisticated nature of espionage.12 This group maintained access to the network for nine months, exfiltrating highly sensitive military infrastructure data, network configurations, and geographic maps. This demonstrates that adversaries with strategic goals are patient and persistent, and their operations may involve both traditional cyber espionage and a direct interest in critical infrastructure. This information is vital for security leaders who must prioritize threats not just by their technical severity, but by the intent and capability of the attackers they face.

---

### **Chapter 4: Recommendations and Actionable Mitigation Strategies**

Based on the analysis of July 2025 advisories and threat intelligence, organizations in the energy and manufacturing sectors must adopt a more proactive and unified approach to cybersecurity. The following recommendations provide a framework for moving from a reactive to a strategic defense posture.

#### **4.1 Prioritization and Patching: Beyond the CVSS Score**

Organizations should move beyond a simple patch-management strategy based solely on CVSS scores. A risk-based approach is required, combining traditional vulnerability severity with real-world exploitability and asset criticality. Advisories with high CVSS scores should be addressed with urgency, but those with documented active exploitation (e.g., the Citrix NetScaler flaw) should be treated with the highest priority, regardless of their age or score. For vulnerabilities where a patch is not available, such as the Mitsubishi Electric MELSEC iQ-F DoS flaw, organizations must immediately implement and enforce compensating controls, as outlined in the advisories, to minimize risk.

#### **4.2 Enhanced Network Segmentation: Hardening the Perimeter from Within**

The convergence of IT and OT threats makes network segmentation more critical than ever. Organizations must rigorously implement CISA's recommended defensive measures to minimize the network exposure of all control system devices and to ensure they are not accessible from the internet.3 All control system networks and remote devices should be placed behind firewalls and, most importantly, should be logically and physically isolated from business networks. When remote access is necessary, it must be performed using secure methods like Virtual Private Networks (VPNs). However, it is essential to remember that a VPN is not a panacea; it is a security control that must itself be kept updated and properly configured, as it can have its own vulnerabilities.3

#### **4.3 Proactive Threat Intelligence Integration: The Power of Foresight**

The data from GreyNoise Intelligence demonstrates that attacker activity often precedes public vulnerability disclosures. This provides a rare opportunity to move from a reactive security model to a proactive one. Organizations should integrate real-time threat intelligence into their security operations to identify and block malicious activity before an official patch is released. By monitoring for "early warning signals" and understanding the broader attacker behavior and intent (e.g., from Recorded Future's research), security teams can make informed, preemptive decisions and prioritize threats more effectively.

#### **4.4 Supply Chain Risk Management: Securing the Digital Foundation**

The Oracle Critical Patch Update and other vendor advisories highlight that the threat landscape extends beyond core OT equipment to the software and services that are integral to industrial operations. This includes supply chain management software, engineering tools, and other third-party components. Organizations must adopt a holistic approach to supply chain risk management, including regular security assessments of their software and services, and maintaining clear communication with vendors to understand and respond to new vulnerabilities promptly.

---

### **Conclusion**

The cybersecurity landscape for the energy and manufacturing sectors in July 2025 was marked by an unprecedented volume of advisories and a clear evolution in the nature of the threats. The detailed analysis of advisories from CISA and major vendors like Siemens, Emerson, and Mitsubishi Electric reveals a dual challenge: addressing critical, high-impact vulnerabilities in core industrial systems while simultaneously preparing for an era where the IT and OT security divide no longer exists.

The findings from this report underscore that a purely reactive defense strategy is no longer sufficient. Modern adversaries, whether opportunistic, financially motivated, or state-sponsored, are moving with speed and precision, exploiting the very tools and systems that enable industrial operations. The most effective security posture for the future will be a unified, intelligence-driven one. It will require a commitment to enhanced network segmentation, a proactive approach to vulnerability management that incorporates real-world threat data, and a holistic strategy that extends security practices across the entire supply chain. By embracing these principles, organizations can hope to build a more resilient and defensible critical infrastructure for the long term.

#### **Works cited**

1. CISA Releases Four Industrial Control Systems Advisories | CISA, accessed August 14, 2025, [https://www.cisa.gov/news-events/alerts/2025/07/03/cisa-releases-four-industrial-control-systems-advisories](https://www.cisa.gov/news-events/alerts/2025/07/03/cisa-releases-four-industrial-control-systems-advisories)  
2. CISA Releases One Industrial Control Systems Advisory, accessed August 14, 2025, [https://www.cisa.gov/news-events/alerts/2025/07/08/cisa-releases-one-industrial-control-systems-advisory](https://www.cisa.gov/news-events/alerts/2025/07/08/cisa-releases-one-industrial-control-systems-advisory)  
3. CISA Releases Three Industrial Control Systems Advisories | CISA, accessed August 14, 2025, [https://www.cisa.gov/news-events/alerts/2025/07/17/cisa-releases-three-industrial-control-systems-advisories](https://www.cisa.gov/news-events/alerts/2025/07/17/cisa-releases-three-industrial-control-systems-advisories)  
4. CISA Releases Two Industrial Control Systems Advisories, accessed August 14, 2025, [https://www.cisa.gov/news-events/alerts/2025/07/31/cisa-releases-two-industrial-control-systems-advisories](https://www.cisa.gov/news-events/alerts/2025/07/31/cisa-releases-two-industrial-control-systems-advisories)  
5. ICS Patch Tuesday: Vulnerabilities Addressed by Siemens ..., accessed August 14, 2025, [https://www.securityweek.com/ics-patch-tuesday-vulnerabilities-addressed-by-siemens-schneider-phoenix-contact-2/](https://www.securityweek.com/ics-patch-tuesday-vulnerabilities-addressed-by-siemens-schneider-phoenix-contact-2/)  
6. Siemens SINEC NMS | CISA, accessed August 14, 2025, [https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-01](https://www.cisa.gov/news-events/ics-advisories/icsa-25-191-01)  
7. Manufacturing systems at risk as CISA reveals ValveLink vulnerabilities in Emerson equipment \- Industrial Cyber, accessed August 14, 2025, [https://industrialcyber.co/manufacturing/manufacturing-systems-at-risk-as-cisa-reveals-valvelink-vulnerabilities-in-emerson-equipment/](https://industrialcyber.co/manufacturing/manufacturing-systems-at-risk-as-cisa-reveals-valvelink-vulnerabilities-in-emerson-equipment/)  
8. CISA Warns ValveLink Products May Expose Sensitive System Information \- GBHackers, accessed August 14, 2025, [https://gbhackers.com/cisa-warns-valvelink-products/](https://gbhackers.com/cisa-warns-valvelink-products/)  
9. Mitsubishi Electric MELSEC iQ-F Series | CISA, accessed August 14, 2025, [https://www.cisa.gov/news-events/ics-advisories/icsa-25-184-04](https://www.cisa.gov/news-events/ics-advisories/icsa-25-184-04)  
10. Oracle Critical Patch Update Advisory \- July 2025, accessed August 14, 2025, [https://www.oracle.com/security-alerts/cpujul2025.html](https://www.oracle.com/security-alerts/cpujul2025.html)  
11. Zero-day Vulnerability Database, accessed August 14, 2025, [https://www.zero-day.cz/database/](https://www.zero-day.cz/database/)  
12. July 2025 Cybersecurity Intelligence & Zero-Days (52) \- FireCompass, accessed August 14, 2025, [https://firecompass.com/weekly-cybersecurity-intelligence-report-cyber-threats-breaches-july-14-21/](https://firecompass.com/weekly-cybersecurity-intelligence-report-cyber-threats-breaches-july-14-21/)  
13. GreyNoise Intelligence Releases New Research Linking Cyber Threat Actor Activity to Future Vulnerabilities, accessed August 14, 2025, [https://www.greynoise.io/press/greynoise-intelligence-releases-new-research-linking-cyber-threat-actor-activity-future-vulnerabilities](https://www.greynoise.io/press/greynoise-intelligence-releases-new-research-linking-cyber-threat-actor-activity-future-vulnerabilities)  
14. GreyNoise 2025 Mass Internet Exploitation Report: Attackers Are Moving Faster Than Ever — Are You Ready?, accessed August 14, 2025, [https://www.greynoise.io/blog/2025-mass-internet-exploitation-report](https://www.greynoise.io/blog/2025-mass-internet-exploitation-report)  
15. Recorded Future: Advanced Cyber Threat Intelligence, accessed August 14, 2025, [https://www.recordedfuture.com/](https://www.recordedfuture.com/)