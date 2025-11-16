# M&A Cybersecurity Due Diligence Checklist for Industrial Targets
## Comprehensive OT/ICS Risk Assessment Framework

**By OXOT M&A Practice**
**Version:** 1.0 | **Last Updated:** November 2024

---

## Introduction: Why OT Cyber Due Diligence is Critical

Traditional IT-focused M&A due diligence misses 60-80% of operational technology (OT) cyber risk. This checklist provides a comprehensive framework for evaluating cyber-physical security posture in industrial acquisitions across energy, manufacturing, water, and transportation sectors.

**Key Objectives:**
- Uncover hidden cyber liabilities before they become post-close surprises
- Quantify remediation costs for deal valuation and negotiation
- Identify regulatory compliance gaps that trigger automatic fines
- Assess operational risk exposure from OT vulnerabilities
- Validate seller representations regarding security posture

**Recommended Engagement Model:** Conduct assessment under attorney-client privilege using OXOT's True Diligence™ Framework to protect findings from discovery in litigation.

---

## Section 1: OT Asset Inventory & Network Architecture

### 1.1 Asset Inventory Completeness
- [ ] **Complete OT asset inventory provided by seller**
  - Programmable Logic Controllers (PLCs)
  - Human-Machine Interfaces (HMIs)
  - Remote Terminal Units (RTUs)
  - Intelligent Electronic Devices (IEDs)
  - Historians and SCADA servers
  - Distributed Control Systems (DCS)
  - Safety Instrumented Systems (SIS)
  - Industrial routers, switches, and firewalls

- [ ] **Passive network discovery conducted to validate inventory**
  - Tools: OT-safe passive monitoring (no active scanning to avoid operational disruption)
  - Compare discovered assets vs. seller disclosure
  - Document "shadow OT" gap (typical: 30-40% more assets than disclosed)

- [ ] **Asset metadata collected for each device**
  - Manufacturer, model, firmware version
  - Operating system (flag unsupported OS: Windows XP, 7, 2000, Server 2003)
  - Network location (IP address, VLAN, zone assignment)
  - Operational criticality (production-critical, safety-critical, support)
  - Last patch date / patch availability status

### 1.2 Network Architecture & Segmentation
- [ ] **Current-state network diagrams provided**
  - Purdue Model levels (0-5) mapped
  - IT/OT boundaries clearly defined
  - DMZ/screened subnet architecture documented
  - All external connections identified (internet, cloud, vendor access)

- [ ] **Segmentation effectiveness validated**
  - Firewalls deployed at IT/OT boundary with restrictive rulesets
  - Internal OT network segmented by zone (production, safety, test/dev)
  - Critical assets isolated (SIS on separate network segment)
  - Network access control lists (ACLs) reviewed and validated

- [ ] **IEC 62443 Zone-Conduit-Role (ZCR) compliance assessed**
  - Security zones defined based on asset criticality
  - Conduits (data pathways) between zones documented
  - Security Level Target (SL-T) determined for each zone
  - Security Level Capability (SL-C) of deployed controls assessed

---

## Section 2: Access Control & Identity Management

### 2.1 Vendor Remote Access Assessment
- [ ] **Complete inventory of vendor remote access**
  - List all vendors with current remote access privileges
  - Document access method (VPN, RDP, TeamViewer, SSH, direct modem)
  - Verify access scope (specific systems vs. broad network access)
  - Review access frequency and session logging

- [ ] **Vendor access security controls verified**
  - Multi-factor authentication (MFA) enforced for all vendor connections
  - Unique credentials per vendor (no shared VPN accounts)
  - Session monitoring and recording enabled
  - Just-in-time (JIT) access provisioning implemented
  - Vendor access reviewed and revalidated quarterly

- [ ] **Vendor access risk exposure quantified**
  - Number of vendors with persistent access vs. on-demand
  - Vendors with compromised credentials in breach databases (check HaveIBeenPwned)
  - Vendors subject to recent security incidents
  - Contractual security requirements in vendor agreements

### 2.2 Identity & Access Management (IAM)
- [ ] **Privileged account management**
  - Inventory of all privileged/administrative accounts
  - Multi-factor authentication (MFA) required for privileged access
  - Privileged access management (PAM) solution deployed
  - Regular privileged account reviews and recertification

- [ ] **Role-Based Access Control (RBAC) implementation**
  - Least privilege principle enforced
  - Segregation of duties for critical functions
  - Access provisioning and deprovisioning processes documented
  - Audit logs for access changes maintained

- [ ] **Default credentials assessment**
  - Verification that default passwords changed on all OT devices
  - Sample testing of HMIs, PLCs, and network devices
  - Documentation of systems unable to change defaults (flag for compensating controls)

---

## Section 3: Vulnerability Management & Patch Posture

### 3.1 OT Patch Management Program
- [ ] **Patch management policy reviewed**
  - Documented policy for OT system patching
  - Patch testing procedures before production deployment
  - Maintenance window scheduling and coordination
  - Emergency patching procedures for critical vulnerabilities

- [ ] **Actual patch levels validated**
  - Review patch management logs for past 12 months
  - Compare documented patching vs. actual system patch levels
  - Identify systems >12 months without patches
  - Document patch compliance percentage

- [ ] **Legacy and unpatchable systems inventory**
  - Systems running end-of-life operating systems
  - Vendor-unsupported hardware/software
  - Systems with no available patches for known vulnerabilities
  - Financial impact: remediation cost estimate for legacy replacement

### 3.2 Vulnerability Assessment
- [ ] **OT-safe vulnerability assessment conducted**
  - Scheduled during planned maintenance window
  - OT-native scanning tools used (avoid traditional IT scanners)
  - Configuration reviews of critical systems
  - Cross-reference findings with CISA KEV (Known Exploited Vulnerabilities) catalog

- [ ] **Compensating controls for unpatchable systems**
  - Network segmentation isolating vulnerable systems
  - Application whitelisting to prevent malware execution
  - Network intrusion detection/prevention systems (IDS/IPS)
  - Enhanced monitoring and behavioral analytics

- [ ] **Critical vulnerabilities prioritized**
  - CVSSv3 score ≥9.0 flagged for immediate attention
  - Remote code execution (RCE) vulnerabilities on internet-facing systems
  - Known exploits actively used by ransomware groups
  - Vulnerabilities in safety-critical systems (SIS)

---

## Section 4: Incident Response & Operational Resilience

### 4.1 Incident Response Preparedness
- [ ] **OT-specific incident response plan reviewed**
  - Documented IR plan specifically addressing OT/ICS incidents
  - Clear roles and responsibilities (IT, OT, engineering, legal, comms)
  - Contact information current and validated
  - Decision trees for incident classification and escalation

- [ ] **Incident response plan testing**
  - Evidence of tabletop exercises within past 12 months
  - Scenarios include OT-specific threats (ransomware in SCADA, DCS manipulation)
  - After-action reports document lessons learned and remediation
  - Cross-functional participation (IT, OT, executives, legal)

- [ ] **Compromise assessment (threat hunting)**
  - Forensic review for indicators of compromise (IOCs)
  - Search for dormant malware, backdoors, persistence mechanisms
  - Review for unusual outbound connections to command-and-control servers
  - Analysis of historical logs for evidence of undetected breaches

### 4.2 Business Continuity & Disaster Recovery
- [ ] **BCDR plans for OT systems reviewed**
  - Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) documented
  - Backup procedures for OT systems (PLCs, HMIs, SCADA configurations)
  - Backup integrity and restoration testing validated
  - Alternative manual operation procedures documented

- [ ] **BCDR plan testing evidence**
  - Most recent DR test date and results
  - Production failover capabilities validated
  - Communication plans during operational disruption
  - Vendor support agreements for emergency restoration

---

## Section 5: Regulatory Compliance & Legal Exposure

### 5.1 Industry-Specific Regulatory Compliance
- [ ] **NERC CIP compliance (Energy Sector)**
  - Current NERC CIP compliance status and audit results
  - Critical Cyber Assets (CCAs) and Electronic Security Perimeters (ESPs) documented
  - CIP violation history and remediation status
  - Self-reported compliance gaps or ongoing improvement projects

- [ ] **TSA Security Directives compliance (Pipelines, Rail, Aviation)**
  - Pipeline Security Directive SD-02C compliance (for pipelines)
  - Railroad Cybersecurity Directive compliance (for rail)
  - Cybersecurity Assessment Plan (CAP) status
  - Cybersecurity Incident Response Plan validation

- [ ] **State and federal breach notification laws**
  - Understanding of applicable notification requirements
  - Incident notification procedures documented
  - History of breach notifications (public and regulatory)
  - Ongoing regulatory investigations or consent orders

### 5.2 Legal Liability & Cyber Insurance
- [ ] **Regulatory fine exposure assessment**
  - Identification of known compliance gaps
  - Quantification of potential fines (e.g., NERC CIP: $1M/day/violation)
  - Review of any outstanding violations or remediation commitments

- [ ] **Cyber insurance coverage review**
  - Policy limits, sub-limits, and deductibles
  - Exclusions relevant to OT/ICS environments
  - Change-of-control provisions (does coverage transfer post-acquisition?)
  - Coverage gaps for OT-specific scenarios (business interruption, equipment damage)

- [ ] **Prior breach and incident disclosure**
  - Complete history of security incidents past 5 years
  - Root cause analysis and remediation verification
  - Customer notification and class-action litigation status
  - Financial impact of prior incidents (remediation costs, fines, settlements)

---

## Section 6: Security Monitoring & Detection

### 6.1 OT Security Monitoring Capabilities
- [ ] **OT-native security monitoring tools deployed**
  - Industrial network monitoring solutions (e.g., Nozomi, Claroty, Dragos)
  - Passive monitoring of industrial protocols (Modbus, DNP3, OPC, Profinet)
  - Asset visibility and behavioral anomaly detection
  - Integration with SOC or SIEM platform

- [ ] **Security Operations Center (SOC) coverage**
  - 24/7 monitoring coverage for OT environment
  - OT-trained security analysts vs. IT-only analysts
  - Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) metrics
  - Incident escalation procedures for OT events

- [ ] **Log aggregation and retention**
  - Centralized log collection from OT systems
  - Log retention period meets regulatory requirements (minimum 90 days)
  - Log integrity and tamper-prevention controls
  - Forensic readiness for incident investigation

### 6.2 Threat Intelligence & Vulnerability Tracking
- [ ] **OT threat intelligence integration**
  - Subscription to OT-specific threat intelligence feeds
  - Integration of threat intelligence into detection rules
  - Tracking of threat actor campaigns targeting the sector
  - Information sharing participation (ISACs, industry groups)

---

## Section 7: Physical Security Integration

### 7.1 Physical Access Controls
- [ ] **Control room and server cabinet security**
  - Physical access controls to OT control rooms (badge readers, biometrics)
  - Server and network cabinet locks and access logs
  - Visitor escort procedures and logging
  - Surveillance camera coverage of critical areas

- [ ] **Physical security system compatibility**
  - Badge reader and access control system vendor/version
  - Compatibility with acquirer's physical security infrastructure
  - Cost estimate for integration or replacement if incompatible

### 7.2 Removable Media & USB Controls
- [ ] **USB and removable media policy**
  - Policy prohibiting or restricting USB use on OT systems
  - Technical controls (USB port disablement, device whitelisting)
  - Malware scanning for approved removable media
  - Enforcement and audit evidence

---

## Section 8: Supply Chain & Third-Party Risk

### 8.1 Critical Vendor & Supplier Dependencies
- [ ] **Inventory of critical third-party vendors**
  - Equipment OEMs and system integrators
  - Maintenance and support contractors
  - Software and firmware suppliers
  - Cloud service providers (if applicable)

- [ ] **Vendor security assessments**
  - Vendor security questionnaires and risk ratings
  - Evidence of vendor security audits or certifications (ISO 27001, SOC 2)
  - Contractual security requirements and SLAs
  - Right-to-audit clauses in contracts

- [ ] **Software Bill of Materials (SBOM)**
  - SBOM availability for OT software components
  - Known vulnerabilities in third-party software dependencies
  - Supplier vulnerability disclosure and patching commitments

### 8.2 Supply Chain Incident Response
- [ ] **Supply chain incident coordination**
  - Vendor notification requirements in security incidents
  - Coordinated disclosure procedures
  - Vendor support during incident response
  - Business continuity if vendor becomes unavailable

---

## Section 9: Security Culture & Governance

### 9.1 Security Awareness & Training
- [ ] **OT security training program**
  - Security awareness training for OT personnel
  - Phishing simulation results and trends
  - Training on OT-specific threats (USB malware, social engineering)
  - Security champion program embedding security in operations teams

- [ ] **Tabletop exercises and drills**
  - Frequency of security exercises (recommended: quarterly)
  - Scenarios relevant to OT threats
  - Cross-functional participation
  - Continuous improvement based on exercise findings

### 9.2 Security Governance Structure
- [ ] **Security leadership and accountability**
  - Clear ownership of OT security (CISO, VP of Operations, dedicated OT security lead)
  - OT security budget and resource allocation
  - Board-level security reporting and metrics
  - Security KPIs aligned to business objectives

- [ ] **Policy and procedure documentation**
  - Comprehensive OT security policy suite
  - Policies aligned to IEC 62443 or other recognized frameworks
  - Policy review and update cadence
  - Employee acknowledgment and compliance tracking

---

## Section 10: Financial Risk Quantification

### 10.1 Remediation Cost Estimation
- [ ] **Immediate remediation requirements**
  - Critical vulnerabilities requiring immediate patching
  - Unsupported systems requiring replacement
  - Network segmentation projects
  - MFA and access control implementations
  - **Total Estimated Remediation Cost:** $____________

- [ ] **Phased remediation roadmap (12-24 months)**
  - Legacy system modernization (PLCs, HMIs, SCADA)
  - OT security monitoring tool deployment
  - SOC coverage expansion
  - Compliance program maturity improvements
  - **Total Estimated Phased Investment:** $____________

### 10.2 Risk Exposure Quantification (FAIR Methodology)
- [ ] **Annual Loss Expectancy (ALE) calculation**
  - High-probability scenarios (e.g., ransomware via unpatched HMI)
    - Single Loss Expectancy (SLE): $____________
    - Annual Rate of Occurrence (ARO): ______%
    - ALE: $____________

  - Catastrophic scenarios (e.g., compromised Safety Instrumented System)
    - Single Loss Expectancy (SLE): $____________
    - Annual Rate of Occurrence (ARO): ______%
    - ALE: $____________

  - **Total Quantified Annual Risk Exposure:** $____________

### 10.3 Cyber Insurance Gap Analysis
- [ ] **Coverage vs. risk exposure**
  - Current cyber insurance limit: $____________
  - Estimated maximum loss (from ALE scenarios): $____________
  - Coverage gap: $____________
  - Exclusions for OT-specific losses (business interruption, equipment damage)

---

## Section 11: Deal Impact & Negotiation Strategy

### 11.1 Valuation Adjustments
- [ ] **Price reduction based on remediation costs**
  - Immediate remediation required before close: $____________
  - Post-close remediation (1-year roadmap): $____________
  - **Recommended Price Reduction:** $____________

- [ ] **Escrow holdback for cyber risk**
  - Remediation cost coverage: $____________
  - ALE coverage for first 12 months: $____________
  - **Recommended Escrow Amount:** $____________

### 11.2 Contractual Protections
- [ ] **Cyber-specific representations & warranties**
  - Completeness and accuracy of asset inventory
  - No undisclosed security incidents or breaches
  - Compliance with applicable regulations
  - No ongoing regulatory investigations

- [ ] **Indemnification provisions**
  - Seller indemnity for pre-close breaches discovered post-close
  - Survival period for cyber representations (recommend: 3-5 years)
  - Caps and baskets for cyber-related claims
  - Specific indemnity for known issues not remediated before close

- [ ] **Condition precedent requirements**
  - Remediation of critical vulnerabilities before closing
  - Regulatory compliance gaps closed before closing
  - Third-party security audit completed before closing

---

## Section 12: Post-Acquisition Integration Roadmap

### 12.1 Day 1 Security Actions
- [ ] **Network isolation and monitoring**
  - Maintain network segmentation between acquirer and target until integration complete
  - Enhanced monitoring during integration period
  - Incident response coordination between entities

- [ ] **Credential reset and access review**
  - All privileged credentials changed
  - Vendor access reviewed and revalidated
  - Departing personnel access revoked

### 12.2 Integration Security Roadmap (90 Days)
- [ ] **Unified security governance**
  - Harmonized security policies
  - Integrated SOC operations
  - Combined threat intelligence sharing

- [ ] **Asset and network integration**
  - Unified asset inventory and CMDB
  - Network architecture redesign for secure integration
  - Zero Trust segmentation implementation

- [ ] **Compliance harmonization**
  - Align to acquirer's compliance frameworks
  - Unified audit and reporting
  - Combined regulatory response procedures

---

## Summary Scorecard

| Category | Items Reviewed | Items Passed | Risk Rating (H/M/L) | Est. Cost to Remediate |
|----------|---------------|--------------|---------------------|------------------------|
| Asset Inventory | | | | $ |
| Access Control | | | | $ |
| Vulnerability Mgmt | | | | $ |
| Incident Response | | | | $ |
| Regulatory Compliance | | | | $ |
| Monitoring & Detection | | | | $ |
| Physical Security | | | | $ |
| Supply Chain Risk | | | | $ |
| Security Culture | | | | $ |
| **TOTAL** | | | | **$** |

---

## Key Metrics Summary

| Metric | Value |
|--------|-------|
| Total OT Assets Disclosed by Seller | |
| Total OT Assets Discovered (Actual) | |
| Shadow OT Gap (%) | |
| Legacy/Unpatchable Systems | |
| Systems >12 Months Unpatched | |
| Critical Vulnerabilities (CVSS ≥9.0) | |
| Vendor Remote Access Connections | |
| Regulatory Compliance Gaps | |
| Prior Security Incidents (5 years) | |
| **Total Remediation Cost Estimate** | **$** |
| **Total Annual Loss Expectancy (ALE)** | **$** |
| **Recommended Price Adjustment** | **$** |
| **Recommended Escrow Amount** | **$** |

---

## Recommended Actions

### Immediate (Pre-Close)
1.
2.
3.

### Short-Term (0-90 Days Post-Close)
1.
2.
3.

### Medium-Term (90-365 Days Post-Close)
1.
2.
3.

---

## Appendices

### Appendix A: OT-Specific Threat Scenarios for Risk Quantification
1. **Ransomware Attack via Unpatched HMI**
2. **Vendor Remote Access Compromise**
3. **Safety Instrumented System (SIS) Manipulation**
4. **Legacy PLC Failure (End-of-Life System)**
5. **Insider Threat via Privileged Access Abuse**
6. **Supply Chain Software Compromise**

### Appendix B: Regulatory Compliance Quick Reference
- NERC CIP-002 through CIP-014 (Bulk Electric System)
- TSA SD-02C (Pipeline Cybersecurity)
- CIRCIA (Cyber Incident Reporting for Critical Infrastructure)
- State Breach Notification Laws
- GDPR/CCPA (if applicable)

### Appendix C: Financial Risk Quantification Methodology (FAIR Framework)
- Definition of Loss Event Frequency (LEF)
- Definition of Loss Magnitude (LM)
- Calculating Single Loss Expectancy (SLE)
- Calculating Annual Rate of Occurrence (ARO)
- Deriving Annual Loss Expectancy (ALE)

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | November 2024 | OXOT M&A Practice | Initial release |

---

**For questions or to schedule an M&A cybersecurity assessment:**

**OXOT M&A Practice**
Email: ma@oxot.com
Web: www.oxot.com/services/ma-due-diligence
Phone: [Contact Information]

**Confidentiality Notice:** This checklist and any associated assessment findings are confidential and, when conducted under OXOT's True Diligence™ Framework, are protected by attorney-client privilege. Unauthorized disclosure may waive privilege protections.

---

© 2024 OXOT. All Rights Reserved.
