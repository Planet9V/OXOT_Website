### **Executive Sections**

#### **1\. Cover & Navigation**

**Title:** After-Action Report: The "ToolShell" SharePoint Zero-Day Exploitation Campaign (July 2025\)

**Classification:** CONFIDENTIAL // EYES ONLY

**Date:** August 14, 2025

**Author:** Gemini Threat Intelligence Team

**Contents:**

* **Page 1:** Cover & Navigation  
* **Page 2:** Executive Summary  
* **Page 3:** Mission Context: Project Nightingale Alignment  
* **Page 4-5:** Attack Overview: Timeline and Primary Vectors  
* **Page 6-7:** Affected Organizations Analysis & Cross-Sector Impact  
* **Page 8-10:** Attack Path Analysis  
* **Page 11-12:** Forensic Evidence & Indicators of Compromise  
* **Page 13:** MITRE ATT\&CK Mapping  
* **Page 14:** Detection Rules (Sigma, YARA, Snort)  
* **Page 15:** Response Procedures  
* **Page 16:** Sources & Citations

#### **2\. Executive Summary**

During July 2025, a sophisticated and widespread cyber-espionage campaign, codenamed "ToolShell" by security researchers, exploited a series of interconnected zero-day vulnerabilities in on-premises Microsoft SharePoint servers. This multi-stage attack, attributed to several Chinese state-sponsored threat actors, targeted a diverse range of organizations, including U.S. federal agencies, critical infrastructure entities, academic institutions, and corporate enterprises across North America and Europe \[1, 2\]. The primary goal was intelligence collection and establishing long-term persistent access. The attack chain leveraged a complex series of vulnerabilities, including CVE-2025-53770 (RCE), CVE-2025-53771 (spoofing), and variants of two previously patched flaws (CVE-2025-49706 and CVE-2025-49704) \[3\]. The attackers demonstrated a high degree of technical proficiency, utilizing custom web shells and machine key extraction to maintain control of compromised environments \[4\].

**Key Findings:**

* **Zero-Day Exploitation:** The "ToolShell" campaign was the most impactful cybersecurity event of July 2025, leveraging a critical RCE vulnerability with a CVSS score of 9.8 \[4\]. This flaw allows an unauthenticated attacker to execute arbitrary code remotely \[5\].  
* **State-Sponsored Attribution:** The campaign is strongly linked to Chinese state-sponsored threat actors, including Linen Typhoon (APT27) and Violet Typhoon (APT31), with additional overlaps to financially motivated groups like Storm-2603 \[6\]. Mandiant also attributed the early exploitation to a "China-nexus threat actor" \[2\].  
* **Primary Impact:** The most significant impact was on intelligence gathering, sensitive document exfiltration, and the establishment of persistent backdoors in high-value targets \[7\].  
* **Cross-Sector Compromise:** The attacks were not confined to a single sector, affecting government, defense, energy, finance, and higher education, highlighting a strategic, cross-sectoral intelligence gathering objective \[6\].

#### **3\. Mission Context: Project Nightingale Alignment**

Project Nightingale is a strategic initiative aimed at proactively identifying, analyzing, and mitigating emerging cyber threats that pose a systemic risk to national security and critical infrastructure. The "ToolShell" campaign aligns directly with Nightingale's core mission objectives for the following reasons:

* **Systemic Risk:** The widespread exploitation of a fundamental enterprise platform like Microsoft SharePoint represents a systemic risk to the digital infrastructure of government and commercial sectors \[5\].  
* **Strategic Adversary TTPs:** The use of sophisticated zero-day exploits and multi-stage attack chains is a signature TTP of state-sponsored actors, a primary focus of Project Nightingale's threat hunting activities \[2\].  
* **Critical Infrastructure Targeting:** The direct targeting of federal agencies, energy firms, and telecom providers demonstrates a clear intent to compromise critical infrastructure, which is a key priority for Nightingale's protective mission \[6\].  
* **Proactive Mitigation:** The rapid analysis of the "ToolShell" attack is essential to developing and disseminating proactive mitigation strategies, detection rules, and incident response procedures to Project Nightingale's partners and stakeholders, as recommended by CISA \[1\].

#### **4\. Attack Overview: Timeline and Primary Vectors**

**Attack Timeline (Approximate):**

* **Pre-July 2025:** The exploit chain was demonstrated at the Pwn2Own 2025 competition \[8\].  
* **July 7, 2025:** Initial active exploitation of the vulnerabilities is detected \[2\].  
* **July 17, 2025:** ESET products first detect an exploitation attempt in Germany \[7\].  
* **July 18, 2025:** ESET and SentinelOne confirm active exploitation and the deployment of the first payload in Italy \[2, 7\].  
* **July 19, 2025:** Microsoft confirms active exploitation of CVE-2025-53770 in the wild \[5\].  
* **July 20-22, 2025:** Microsoft releases emergency patches for all affected on-premises SharePoint Server versions \[4\]. CISA adds the vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog \[1, 9\].  
* **Late July 2025 (Ongoing):** Threat actors continue to pivot and establish persistence in environments that were not immediately patched or where the initial compromise went undetected.

**Primary Vectors:**

* **Vulnerability Exploitation:** The core attack vector was the remote exploitation of a four-vulnerability chain in Microsoft SharePoint. This chain allowed unauthenticated attackers to bypass security measures and execute malicious code on the server \[3, 4\].  
* **Web Shell Deployment:** Once a foothold was established, attackers deployed custom ASPX web shells (e.g., spinstall0.aspx) to maintain persistent access and execute commands remotely \[2\].  
* **Stolen Credentials and Privileges:** After gaining initial access, threat actors escalated privileges by stealing credentials, including the SharePoint farm's service accounts and the ValidationKey and DecryptionKey from web.config. These keys were used to forge authenticated sessions and bypass MFA \[2\].  
* **Data Exfiltration:** The final stage involved the exfiltration of sensitive data to command-and-control (C2) servers \[7\].

#### **5\. Affected Organizations Analysis**

The "ToolShell" campaign was notable for its broad and indiscriminate targeting, which served a strategic intelligence-gathering objective rather than a purely financial one.

* **U.S. Federal Agencies:** The Department of Energy, Department of Homeland Security, and Department of Health and Human Services were all impacted by the attacks \[6\]. The compromise of these agencies points to a clear intent to gather government intelligence.  
* **Critical Infrastructure:** The California Independent System Operator (the state's electric grid) was impacted, along with a major U.S. telecom company \[6\]. The compromise of these entities is particularly alarming due to the potential for operational disruption and the theft of sensitive industrial control system (ICS) data.  
* **Corporate Enterprises:** As of July 24, 2025, over 400 organizations were confirmed as victims \[6\]. This includes global corporations in the financial, defense, and technology sectors, indicating a focus on corporate espionage and the theft of trade secrets.

#### **6\. Cross-Sector Impact: Infrastructure Cascade Analysis**

The "ToolShell" campaign's impact extends far beyond individual organizations due to the interconnected nature of the victims and the strategic value of the compromised information.

* **Supply Chain Risk:** The campaign demonstrated a significant supply chain risk, as a breach at one organization could provide a foothold to pivot to other, more sensitive targets \[6\]. The compromise of a major IT solutions distributor, Ingram Micro, by a related threat actor group (SafePay) highlights this systemic risk, as it could allow for the distribution of malicious updates or access to numerous downstream clients.  
* **Intelligence Cascade:** The stolen data, which included network configurations and administrator credentials, can be used to facilitate future, more targeted attacks \[7\]. This intelligence cascade allows threat actors to map out entire digital ecosystems, making subsequent attacks on linked organizations easier and more effective.

### **Technical Sections**

#### **6\. Attack Path Analysis**

The "ToolShell" attack path was a sophisticated, multi-stage process designed to bypass modern security controls and achieve deep, persistent access \[4\].

* **Phase 1: Initial Access (T1190 \- Exploit Public-Facing Application)**  
  * **Vector:** The attack began with a specially crafted HTTP POST request to the /layouts/15/ToolPane.aspx endpoint \[4\]. This endpoint is a legacy component used for managing web part settings.  
  * **Exploitation:** The attackers leveraged a forged Referer header pointing to /layouts/15/SignOut.aspx. This manipulation tricks SharePoint into skipping authentication and form digest validation, allowing the attacker to be treated as an authenticated user without providing any credentials \[4\]. This step exploits CVE-2025-49706 and CVE-2025-53771.  
  * **Execution:** Once the authentication bypass is successful, the attacker can exploit a deserialization vulnerability (CVE-2025-53770) to execute arbitrary PowerShell commands on the server \[2\].  
* **Phase 2: Privilege Escalation & Persistence (T1505.003 \- Web Shell, T1003.001 \- LSASS Memory Dumping)**  
  * **Persistence:** The initial RCE payload often drops a custom ASPX web shell, such as spinstall0.aspx, into the SharePoint \_layouts directory \[2, 7\]. This web shell serves as a persistent backdoor for remote command execution.  
  * **Privilege Escalation:** From the compromised SharePoint server, the threat actors executed commands to dump the contents of the Local Security Authority Subsystem Service (LSASS) process memory. This allowed them to harvest credentials for service accounts and privileged users \[4\].  
  * **Authentication Bypass:** A key step was the exfiltration of the ASP.NET ValidationKey and DecryptionKey from the server's web.config file \[2\]. With these cryptographic keys, attackers could forge valid \_\_VIEWSTATE payloads, allowing them to execute arbitrary code on other SharePoint pages without re-exploiting the initial vulnerability \[4\]. This persistence method is particularly stealthy as it does not rely on dropping a file to disk \[2\].  
* **Phase 3: Lateral Movement & Command and Control (T1021 \- Remote Services, T1071.001 \- Web Protocols)**  
  * **Lateral Movement:** Using the stolen credentials, the attackers moved laterally across the network via standard remote services like RDP and SMB \[2\].  
  * **C2:** The web shell was used as a C2 channel to receive commands and exfiltrate data. Additionally, attackers established secondary C2 channels using HTTPS to blend in with legitimate network traffic \[7\].  
* **Phase 4: Data Exfiltration (T1041 \- Exfiltration Over C2 Channel)**  
  * **Discovery:** The attackers used discovery techniques to locate valuable data, including proprietary documents and network diagrams \[6\].  
  * **Exfiltration:** The harvested data was compressed and exfiltrated from the network via encrypted C2 channels or through a direct transfer to external cloud storage services \[7\].

#### **7\. Forensic Evidence & Indicators of Compromise**

**Log-Based Artifacts:**

* **IIS Logs:** Look for HTTP POST requests to /\_layouts/15/ToolPane.aspx?DisplayMode=Edit with a forged Referer header of /\_layouts/SignOut.aspx \[4\].  
* **SharePoint ULS Logs:** Suspicious entries indicating deserialization attempts or unusual access patterns to the MachineKey configuration \[7\]. Look for log entries with high severity levels related to authentication or serialization errors originating from a non-internal IP address.  
* **Windows Event Logs:**  
  * **Event ID 4688:** Process creation events for unusual executables or PowerShell scripts attempting to interact with the lsass.exe process \[4\].  
  * **Event ID 4624:** Multiple successful logon attempts using compromised service accounts from unusual source hosts.

**File System Artifacts:**

* **Web Shells:** Presence of unauthorized ASPX files in SharePoint directories, particularly in subdirectories of C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\TEMPLATE\\LAYOUTS\\ \[4\].  
* **Memory Dumps:** The presence of lsass.dmp or other memory dump files in temporary directories or in unusual locations.  
* **Stolen Data Archives:** Compressed .zip, .rar, or .7z files containing sensitive documents, often with benign-sounding names.

**Network Artifacts:**

* **C2 Traffic:** Outbound HTTPS connections to known malicious domains or IP addresses. The traffic may have an unusual frequency or data volume for a SharePoint server \[7\].  
* **Unusual Remote Connections:** Inbound RDP or SMB connections to the SharePoint server from non-standard internal or external IP addresses.

**IOCs (for illustrative purposes, based on threat intel reports):**

* **IP Addresses:** 107.191.58.76, 96.9.125.147, 104.238.159.149 \[7\].  
* **File Hashes (SHA256):** a7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8 (Example web shell)  
* **Domains:** malicious-c2-server.com, sharepoint-updates.net

#### **8\. MITRE ATT\&CK Mapping**

This section maps the "ToolShell" attack chain to specific MITRE ATT\&CK tactics and techniques.

| Tactic | Technique ID | Technique | Description | Citation |
| :---- | :---- | :---- | :---- | :---- |
| **Initial Access** | T1190 | Exploit Public-Facing Application | Leveraging four zero-day vulnerabilities in Microsoft SharePoint to gain an initial foothold \[3, 4\]. | \[3, 4\] |
| **Persistence** | T1505.003 | Server Software Component: Web Shell | Deploying a custom ASPX web shell to the SharePoint server to maintain a persistent backdoor \[2, 7\]. | \[2, 7\] |
| **Privilege Escalation** | T1003.001 | OS Credential Dumping: LSASS Memory | Dumping the contents of the LSASS process to harvest credentials from privileged accounts \[4\]. | \[4\] |
| **Credential Access** | T1552.004 | Unsecured Credentials: Private Keys | Stealing the SharePoint MachineKey from web.config to forge authenticated sessions and bypass MFA \[2\]. | \[2\] |
| **Discovery** | T1083 | File and Directory Discovery | Enumerating local file systems to locate sensitive data, network diagrams, and other intelligence \[6\]. | \[6\] |
| **Lateral Movement** | T1021 | Remote Services | Using stolen credentials to move laterally across the network via RDP and SMB \[2\]. | \[2\] |
| **Collection** | T1213 | Data from Information Repositories | Accessing and collecting data from SharePoint document libraries and other internal repositories \[7\]. | \[7\] |
| **Exfiltration** | T1041 | Exfiltration Over C2 Channel | Transmitting stolen data from the compromised network to an external C2 server \[7\]. | \[7\] |
| **Command and Control** | T1071.001 | Application Layer Protocol: Web Protocols | Using HTTPS and HTTP traffic to communicate with the web shell and C2 server, blending in with normal web traffic \[7\]. | \[7\] |

#### **9\. Detection Rules**

**Sigma Rules (for SIEMs):**

\# Rule to detect SharePoint web shell creation  
title: SharePoint Web Shell Creation  
logsource:  
  category: process\_creation  
  product: windows  
detection:  
  selection:  
    ParentImage|endswith: '\\w3wp.exe'  
    Image|endswith:  
      \- '\\cmd.exe'  
      \- '\\powershell.exe'  
    CommandLine|contains:  
      \- 'spinstall0.aspx'  
      \- 'spinstall0.aspx'  
  condition: selection  
level: high

# **Rule to detect suspicious LSASS process access**

title: Suspicious LSASS Process Access  
logsource:  
product: windows  
service: sysmon  
detection:  
selection:  
EventID: 10  
TargetImage|endswith: '\\lsass.exe'  
SourceImage|endswith:  
\- '\\procdump.exe'  
\- '\\powershell.exe'  
condition: selection  
level: critical  
\*\*YARA Rules (for file scanning):\*\*

rule SharePoint\_ToolShell\_Webshell  
{  
strings:  
$s1 \= "System.Web.UI.Page" fullword ascii  
$s2 \= "\<%@ Page Language="C\#"" fullword ascii  
$s3 \= "web.config" fullword ascii  
$s4 \= "MachineKeySection" fullword ascii  
condition:  
3 of them and filesize \< 1MB  
}  
\*\*Snort Rules (for network intrusion detection):\*\*

# **Snort rule to detect the initial POST request to the vulnerable endpoint**

alert http $EXTERNAL\_NET any \-\> $HOME\_NET $HTTP\_PORTS (msg:"EXPLOIT-ATTACK Microsoft SharePoint ToolShell RCE Attempt"; flow:established,to\_server; content:"POST"; http\_method; content:"/layouts/15/ToolPane.aspx"; http\_uri; fast\_pattern:only; http\_header; content:"Referer: |2f|layouts|2f|SignOut.aspx"; pcre:"/(Referer:\\s.\*/\_layouts/SignOut.aspx)/i"; classtype:attempted-admin; sid:1000001; rev:1;)

\#\#\#\# 10\. Response Procedures

\*\*Immediate Actions (First 24-48 Hours):\*\*

1\.  \*\*Isolate:\*\* Immediately disconnect all affected on-premises SharePoint servers and any related servers from the network.  
2\.  \*\*Patch:\*\* Apply all emergency patches from Microsoft for the "ToolShell" vulnerabilities (\`CVE-2025-53770\`, \`CVE-2025-53771\`, and the variants \`CVE-2025-49706\`, \`CVE-2025-49704\`) \[4\].  
3\.  \*\*Containment:\*\* Block all suspicious IP addresses and domains identified in the forensic analysis at the firewall level.  
4\.  \*\*Forensic Image:\*\* Create a full disk image of all compromised servers and endpoints for detailed forensic analysis.  
5\.  \*\*Credential Reset:\*\* Force a reset of all privileged credentials, especially those for the SharePoint farm, service accounts, and any domain administrator accounts. Reset all user passwords and require MFA to be re-enrolled.

\*\*Short-Term Actions (1-2 Weeks):\*\*

1\.  \*\*Threat Hunt:\*\* Conduct a thorough threat hunt across the entire network, using the IOCs and TTPs from this report, to identify any other compromised systems or persistent backdoors.  
2\.  \*\*Restore from Backup:\*\* Restore critical systems from known-good backups created \*before\* the breach to ensure no malicious code remains.  
3\.  \*\*Vulnerability Scanning:\*\* Perform an exhaustive vulnerability scan of all public-facing assets to identify any other unpatched systems or misconfigurations.  
4\.  \*\*Communication:\*\* Notify all affected stakeholders, including customers, employees, and regulatory bodies, in accordance with legal and compliance requirements.

\*\*Long-Term Actions (1 Month+):\*\*

1\.  \*\*Patch Management:\*\* Implement a rigorous patch management program with a focus on critical infrastructure and public-facing applications.  
2\.  \*\*Zero Trust:\*\* Move to a Zero Trust security model, enforcing least-privilege access and micro-segmentation to limit lateral movement in the event of a future breach \[4\].  
3\.  \*\*Enhanced Monitoring:\*\* Deploy a robust SIEM with Endpoint Detection and Response (EDR) to monitor for suspicious activity, including file creation, process execution, and network connections \[4\].  
4\.  \*\*Third-Party Audits:\*\* Conduct a comprehensive audit of all third-party vendors and their security practices, as a compromised vendor can be a major entry point for sophisticated attacks.

\#\#\#\# 11\. Sources & Citations

\* \[1\] CISA, "Malware Analysis Report: Exploitation of SharePoint Vulnerabilities," \*CISA.gov\*, August 6, 2025\.  
\* \[2\] The Hacker News, "Hackers Exploit SharePoint Zero-Day Since July 7 to Steal Keys, Maintain Persistent Access," \*The Hacker News\*, July 22, 2025\.  
\* \[3\] Qualys Blog, "ToolShell Zero-day: Microsoft Rushes Emergency Patch for Actively Exploited SharePoint Vulnerabilities," \*Qualys.com\*, July 21, 2025\.  
\* \[4\] Picus Security, "CVE-2025-53770: Critical Unauthenticated RCE in Microsoft SharePoint," \*PicusSecurity.com\*, July 23, 2025\.  
\* \[5\] CyberArk, "Responding to ToolShell: A Microsoft SharePoint zero-day vulnerability," \*CyberArk.com\*, July 23, 2025\.  
\* \[6\] CyberScoop, "Microsoft SharePoint attacks ensnare 400 victims, including federal agencies," \*CyberScoop.com\*, July 24, 2025\.  
\* \[7\] WeLiveSecurity, "ToolShell: An all-you-can-eat buffet for threat actors," \*WeLiveSecurity.com\*, July 24, 2025\.  
\* \[8\] SANS Institute, "Critical SharePoint Zero-Day Exploited: What You Need to Know About CVE-2025-53770," \*SANS.org\*, July 23, 2025\.  
\* \[9\] Akamai, "Understand the SharePoint RCE: Exploitations, Detections, and Mitigations," \*Akamai.com\*, July 22, 2025\.  
