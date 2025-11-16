# OXOT Ransomware Readiness Assessment (RRA) Self-Assessment Tool

**Downloadable Diagnostic for OT/ICS Operators**

---

## Instructions

This 20-question self-assessment helps OT/ICS operators evaluate ransomware readiness across six critical domains. Answer each question honestly based on your **current operational reality**, not aspirational goals or partially-implemented projects.

**Scoring Guide:**
- Answer **"Yes"** only if the capability is fully implemented, tested, and maintained
- Answer **"No"** if the capability is absent, partially implemented, or untested
- Count your total "Yes" answers and refer to the scoring matrix at the end

**Time Required:** 15-20 minutes (recommended to complete with both IT and OT stakeholders present)

---

## Domain 1: Asset Inventory & Visibility (4 Questions)

### Q1. Complete OT Asset Inventory
**Do you have a complete, actively maintained inventory of all OT assets including PLCs, RTUs, HMIs, engineering workstations, historians, and safety systems?**

- [ ] Yes – We have a comprehensive, up-to-date inventory covering all OT assets with criticality classifications
- [ ] No – Our inventory is incomplete, outdated (>6 months old), or doesn't include OT-specific assets

**Why This Matters:** You cannot protect assets you don't know exist. Post-incident forensics routinely discover that operators had incomplete visibility into 30-40% of their OT assets, including "shadow OT" (contractor equipment, temporary connections that became permanent, legacy systems).

---

### Q2. Criticality Classification & Impact Assessment
**Can you identify within 15 minutes which systems are safety-critical vs. production-critical vs. non-critical, including the operational and financial impact of losing each?**

- [ ] Yes – Every asset has documented criticality scoring with defined operational/financial impact
- [ ] No – We lack formal criticality classification or impact documentation

**Why This Matters:** During a ransomware incident, you must make triage decisions in minutes. "Which systems do we isolate first?" and "Which can we sacrifice to contain the threat?" require pre-defined criticality classifications.

---

### Q3. Operational Dependency Mapping
**Do you have documented dependency maps showing cascading impacts (e.g., "if System X fails, Systems Y and Z also stop, causing $XM/day production loss")?**

- [ ] Yes – We have dependency maps showing cascading operational impacts across IT/OT systems
- [ ] No – Dependencies are understood informally but not documented or tested

**Why This Matters:** Ransomware exploits dependencies. Understanding that compromising the historian shuts down production because operators rely on it for process data prevents blind-spot decisions during crisis response.

---

### Q4. Third-Party Access Inventory
**Have you cataloged all vendor remote access connections, system integrator access, and third-party integrations to OT systems?**

- [ ] Yes – All vendor/third-party access is documented, monitored, time-limited, and requires MFA
- [ ] No – We have informal arrangements or don't track third-party access comprehensively

**Why This Matters:** 45% of energy sector breaches originate with third-party vendors. Unmanaged vendor remote access is one of the highest-probability ransomware entry vectors.

---

## Domain 2: Backup & Recovery Capabilities (4 Questions)

### Q5. OT-Specific Backup Coverage
**Are OT-specific configurations (PLC ladder logic, HMI screens, SCADA database schemas, device firmware) explicitly included in backups?**

- [ ] Yes – OT configurations are comprehensively backed up with documented procedures
- [ ] No – IT-managed backups may not include OT-specific configurations, or coverage is uncertain

**Why This Matters:** "We back up everything" often means "we back up IT file systems." PLC programs, HMI configurations, and SCADA schemas require specialized backup procedures that IT teams may not know exist.

---

### Q6. Offline, Air-Gapped Backup Storage
**Are backups stored offline and air-gapped (physically or logically isolated from both IT and OT networks, not accessible via network credentials)?**

- [ ] Yes – Backups are stored offline with no network connectivity (tape, removable media, isolated system)
- [ ] No – Backups are network-accessible, cloud-only, or could be compromised if credentials are stolen

**Why This Matters:** Ransomware specifically hunts for backup repositories. If your backups are accessible via network shares or cloud credentials, they will be encrypted alongside production systems.

---

### Q7. Tested Restoration with Time-to-Production Measurement
**Have you tested restoration of critical OT systems within the last 6 months, including measuring time to production (not just "backup job completed successfully")?**

- [ ] Yes – We've performed full restoration tests with operational validation in the last 6 months
- [ ] No – We verify backups run but haven't tested actual restoration, or last test was >6 months ago

**Why This Matters:** Backups that can't be restored are worthless. "Time to production" (how long until the manufacturing line/power plant/water treatment process is operational again) is the only metric that matters.

---

### Q8. Recovery Time Objective (RTO) Documentation
**Do you know your time to production for recovering from complete loss of your most critical control system, and is it acceptable to your business?**

- [ ] Yes – We have documented RTO for critical systems and it's within operational tolerance
- [ ] No – RTO is unknown, untested, or would exceed what operations/customers can tolerate

**Why This Matters:** JBS Foods had backups but paid $11M ransom because recovery time exceeded supply chain tolerance. Knowing your RTO allows you to make informed decisions about ransom payment vs. restoration.

---

## Domain 3: Network Segmentation & Attack Surface (3 Questions)

### Q9. IT/OT Network Segmentation
**Is your OT network segmented from IT using industrial firewalls with strict allow-list rules (default-deny), not just VLANs or "soft" segmentation?**

- [ ] Yes – Industrial firewalls with allow-list rules and deep packet inspection separate IT/OT
- [ ] No – We use VLANs, or segmentation relies on default-allow rules with deny-list exceptions

**Why This Matters:** VLANs provide zero security against ransomware. Proper segmentation using firewalls with restrictive allow-lists prevents lateral movement from compromised IT systems into OT.

---

### Q10. Internal OT Zone Segmentation
**Are high-security OT zones (safety systems, critical control) further isolated from lower-security OT zones (historians, engineering networks)?**

- [ ] Yes – We have multi-tier OT segmentation following IEC 62443 zone/conduit architecture
- [ ] No – OT network is a single flat zone, or segmentation is incomplete

**Why This Matters:** Many breaches enter OT through low-security zones (engineering workstations, vendor remote access). Internal segmentation prevents lateral movement to crown-jewel systems.

---

### Q11. Conduit Monitoring & Anomaly Detection
**Are all IT/OT conduits (communication paths) monitored for anomalous traffic, unauthorized protocols, and lateral movement attempts?**

- [ ] Yes – All IT/OT boundaries have continuous monitoring with alerting on anomalies
- [ ] No – We lack visibility into IT/OT boundary traffic or rely on periodic manual review

**Why This Matters:** Detecting ransomware during early lateral movement (before encryption) is your best opportunity for containment. Unmonitored boundaries are invisible attack paths.

---

## Domain 4: Incident Response Readiness (5 Questions)

### Q12. OT-Specific Incident Response Plan
**Do you have an OT-specific incident response plan that addresses operational continuity, safety prioritization, and manual operations fallback (not just a generic IT IR plan)?**

- [ ] Yes – We have OT-specific IR playbooks addressing safety, operational continuity, and OT-unique scenarios
- [ ] No – We have only generic IT IR plans, or OT considerations are informal/undocumented

**Why This Matters:** IT IR plans prioritize forensic preservation. OT IR must prioritize worker safety and operational continuity, even if it means losing forensic evidence. These are fundamentally different philosophies.

---

### Q13. Tabletop Exercise Validation
**Have you conducted a ransomware tabletop exercise with cross-functional participation (IT, OT, Legal, Communications, Leadership) within the last 12 months?**

- [ ] Yes – We conduct annual TTX with realistic scenarios and after-action improvement
- [ ] No – We have never conducted a TTX, or last one was >12 months ago

**Why This Matters:** Plans that haven't been tested are assumptions. TTX consistently reveal critical gaps: unclear decision authority, incompatible IT/OT procedures, unrealistic recovery timelines.

---

### Q14. Decision Authority & Escalation Clarity
**Are decision authorities clearly defined for critical actions during incidents (who approves isolating facilities, considering ransom payment, notifying customers/regulators)?**

- [ ] Yes – Decision trees and authorities are documented, communicated, and rehearsed
- [ ] No – Decision authorities are ambiguous or would require ad-hoc escalation during crisis

**Why This Matters:** "Who has authority to disconnect the entire plant from the corporate network?" cannot be debated during an active ransomware incident. Delayed decisions cost millions per hour.

---

### Q15. 24/7 OT Incident Response Access
**Do you have 24/7 access to OT-specific incident response expertise (internal team or retainer agreement with OT-specialized IR provider)?**

- [ ] Yes – We have 24/7 OT IR capability via internal team or contracted retainer
- [ ] No – We rely on business-hours support or general IT IR without OT expertise

**Why This Matters:** Ransomware doesn't wait for business hours. Colonial Pipeline occurred on a Friday evening. Delayed expert engagement in first 2 hours dramatically impacts containment success.

---

### Q16. Attorney-Client Privilege Protection
**Is your incident response work structured to maintain attorney-client privilege (e.g., IR conducted under legal counsel direction), protecting findings from disclosure obligations?**

- [ ] Yes – We have privilege-protected IR framework (e.g., OXOT True Diligence™ or equivalent)
- [ ] No – IR is conducted by IT/security without privilege protection

**Why This Matters:** Unprotected IR findings create discoverable evidence in litigation, regulatory investigations, and shareholder suits. Privilege protection enables thorough investigation without increasing liability exposure.

---

## Domain 5: Legal & Regulatory Preparedness (2 Questions)

### Q17. Regulatory Reporting Requirements Knowledge
**Do you know which regulatory reporting requirements apply to your organization for cybersecurity incidents (SEC 8-K/10-K, CISA mandatory reporting, TSA Pipeline/Rail, NERC CIP, state breach notification)?**

- [ ] Yes – We have documented matrix of applicable regulations with reporting triggers and timelines
- [ ] No – Regulatory requirements are unclear or would require research during incident

**Why This Matters:** SEC requires 4-business-day reporting of material incidents. CISA requires 72-hour reporting for critical infrastructure. Missing deadlines creates regulatory violations on top of incident costs.

---

### Q18. Pre-Drafted Crisis Communications
**Do you have pre-drafted crisis communication templates for customer notification, regulatory disclosure, and media response?**

- [ ] Yes – Templates exist and have been reviewed by Legal/Communications for regulatory compliance
- [ ] No – Communications would be drafted from scratch during incident

**Why This Matters:** Writing customer notifications and regulatory disclosures under extreme time pressure leads to errors, over-disclosure, or liability-creating statements. Templates ensure consistent, compliant communication.

---

## Domain 6: Continuous Improvement & Program Maturity (2 Questions)

### Q19. Formal Cybersecurity Management System (CSMS)
**Do you have a formal Cybersecurity Management System (CSMS) aligned with IEC 62443-2-1 that integrates ransomware readiness into your ongoing OT security lifecycle?**

- [ ] Yes – We have IEC 62443-aligned CSMS with ransomware readiness integrated into risk management
- [ ] No – Ransomware readiness is a standalone effort, not integrated into formal security lifecycle

**Why This Matters:** One-time assessments decay rapidly. Integrating ransomware readiness into CSMS ensures continuous monitoring, risk reassessment, and improvement as threat landscape evolves.

---

### Q20. Threat Intelligence Integration
**Do you regularly update threat models and defensive posture based on sector-specific intelligence (CISA ICS advisories, sector ISAC reports, vendor PSIRTs)?**

- [ ] Yes – We have defined process for consuming threat intel and updating defenses
- [ ] No – Threat intelligence review is ad-hoc or we lack sector-specific sources

**Why This Matters:** Ransomware tactics evolve continuously (e.g., shift from data encryption to OT disruption, supply chain targeting). Stale threat models miss emerging attack vectors.

---

## Scoring Matrix & Interpretation

**Count your total "Yes" answers:**

| Score Range | Risk Level | Interpretation | Recommended Actions |
|-------------|-----------|----------------|---------------------|
| **18-20** | **LOW RISK** | Strong ransomware readiness foundation. You have comprehensive capabilities across asset visibility, backup/recovery, segmentation, IR, legal preparedness, and continuous improvement. | **Focus on:** Annual TTX validation, continuous threat intelligence integration, periodic restoration testing (every 6 months). Consider formal IEC 62443 CSMS certification. |
| **13-17** | **MEDIUM RISK** | Important gaps exist in your readiness posture. You have foundational capabilities but lack critical validations or protections. | **Immediate priorities:** (1) Conduct ransomware TTX within 90 days, (2) Test backup restoration with time-to-production measurement, (3) Implement attorney-client privilege framework for IR. Consider formal RRA engagement. |
| **8-12** | **HIGH RISK** | Significant vulnerabilities across multiple domains. You may survive a ransomware incident but with extended downtime and high costs. | **Urgent actions:** (1) Immediate backup validation (are OT configs actually backed up?), (2) IT/OT segmentation assessment, (3) Decision authority documentation, (4) Formal RRA with OT-specialized provider recommended. Budget for remediation. |
| **0-7** | **CRITICAL RISK** | You are likely unprepared for ransomware targeting OT. A successful attack could result in catastrophic downtime, safety implications, or business-threatening costs. | **Emergency response:** (1) Establish incident response retainer with OT-specialized provider immediately, (2) Fast-track offline backup implementation, (3) Document critical asset inventory and recovery priorities, (4) Engage for comprehensive RRA. Consider this an existential business risk. |

---

## Important Caveats

### False Confidence Risk
Even organizations scoring **16-20** often discover critical blind spots during facilitated assessments with OT-specialized expertise. This self-assessment provides **directional guidance, not definitive assurance.**

Common false positives include:
- "Yes" on Q5 (OT backups), but restoration testing (Q7) reveals PLC configs weren't actually captured
- "Yes" on Q9 (IT/OT segmentation), but internal OT zones (Q10) remain flat, allowing lateral movement
- "Yes" on Q13 (TTX conducted), but exercise didn't include decision-makers with actual authority, making it a training exercise vs. validation test

### Facilitated Assessment Value
The most valuable insights come from **facilitated assessments where IT and OT teams answer questions together**, exposing disconnects:
- **IT:** "Yes, we back up everything"
- **OT:** "Wait, does that include the PLC ladder logic? Because those programs only exist on one engineering workstation..."

These disconnects are precisely what ransomware operators exploit.

---

## Next Steps Based on Your Score

### For LOW RISK Organizations (18-20):
You're in the top 10% of OT operators. **Maintain and validate** your readiness:
- Schedule annual ransomware TTX with realistic, sector-specific scenarios
- Conduct backup restoration testing every 6 months (not just verification that backups ran)
- Update threat models quarterly based on sector intelligence
- Consider pursuing formal IEC 62443 certification to demonstrate readiness to customers/regulators

### For MEDIUM RISK Organizations (13-17):
You have a foundation but **critical gaps that could prove costly**:
- **Within 30 days:** Identify your 3 highest-risk gaps (likely in backup testing, IR validation, or legal preparedness)
- **Within 90 days:** Conduct ransomware tabletop exercise and validate backup restoration
- **Within 180 days:** Close high-risk gaps and re-assess
- **Consider:** Formal RRA engagement to accelerate remediation and ensure no blind spots

### For HIGH RISK Organizations (8-12):
Your gaps create **significant financial and operational exposure**:
- **Immediate (this week):** Validate that OT configurations are actually backed up and restorable
- **Within 30 days:** Establish incident response retainer with OT-specialized provider
- **Within 60 days:** Conduct fast-track ransomware TTX to identify most critical decision/authority gaps
- **Within 90 days:** Implement prioritized quick wins (offline backups, decision authority documentation)
- **Strongly recommended:** Formal RRA with Converged Defense methodology to build comprehensive roadmap

### For CRITICAL RISK Organizations (0-7):
You face **potentially existential threat from ransomware**:
- **Immediate (today):** Establish 24/7 incident response retainer (don't wait for an incident)
- **Within 7 days:** Document critical asset inventory and operational priorities for triage decisions
- **Within 14 days:** Begin offline backup implementation for crown-jewel systems
- **Within 30 days:** Engage for comprehensive RRA—this is not optional
- **Budget expectation:** Plan for significant remediation investment ($150K-$1M+ depending on scale)

---

## About OXOT's Ransomware Readiness Assessment (RRA)

This self-assessment is derived from **OXOT's proprietary Converged Defense Framework**, comprising 356+ pages of methodology refined through real-world crisis response across Energy, Manufacturing, Water, and Transportation sectors.

**Full RRA Engagement Includes:**
- **Phase 1:** Asset inventory & dependency mapping with IT/OT collaborative workshops
- **Phase 2:** Attack surface analysis using STRIDE threat modeling and IEC 62443 risk assessment (IRA/DRA)
- **Phase 3:** Recovery capability testing with facilitated ransomware tabletop exercise + technical backup validation
- **Phase 4:** Legal/regulatory preparedness with True Diligence™ attorney-client privilege framework
- **Phase 5:** Continuous improvement integration into IEC 62443 CSMS lifecycle

**OXOT Client Track Record:**
- **$0 ransoms paid** by OXOT clients (2020-present)
- **< 2 hour** average emergency response time (24/7/365 availability)
- **18 hours** average recovery time (vs. industry average 21 days) for clients with tested RRA

**Typical Engagement:** 8-12 weeks | **Investment:** $150K-$750K (scaled to asset count and complexity)

---

## Contact & Resources

**Emergency Incident Response:** [24/7 Hotline]
**RRA Consultation:** rra@oxot.com
**Learn More:** www.oxot.com/services/crisis-management

**Free Resources:**
- CISA CSET Tool (Ransomware Readiness Assessment module): https://www.cisa.gov/resources-tools/services/cyber-security-evaluation-tool-cset
- IEC 62443 Standards Overview: https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards
- MITRE ATT&CK for ICS: https://attack.mitre.org/matrices/ics/

---

*© 2024 OXOT. This self-assessment tool is provided for informational purposes and does not constitute formal cybersecurity assessment, legal advice, or guarantee of security posture. For comprehensive ransomware readiness evaluation, engage qualified OT cybersecurity professionals.*
