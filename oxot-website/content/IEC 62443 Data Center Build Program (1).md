

# **An Integrated Work Program for IEC 62443 Deployment in a Tier 3 Data Center New-Build Project**

## **Executive Briefing: Aligning Tier 3 Resiliency with IEC 62443 Cyber-Physical Security**

This report details an integrated cyber-physical security program for a new-build Tier 3 Data Center, based on the IEC 62443 series of standards. The central thesis is that the Uptime Institute's Tier 3 requirement for "concurrent maintainability" is not merely a physical design challenge but a critical cyber-physical one.1 The significant capital investment in physical redundancy, such as N+1 cooling and A/B power trains, creates the facility's core value proposition: high availability.4 However, this redundancy is controlled by Industrial Automation and Control Systems (IACS)—primarily the Building Management System (BMS) and Electrical Power Monitoring System (EPMS).6

A cyber-attack that introduces a common-mode failure to these control systems, such as by simultaneously compromising the controls for *both* 'A' and 'B' power feeds, instantly negates the physical redundancy and the Tier 3 uptime guarantee. The IEC 62443 standards provide the definitive, risk-based engineering framework to manage this specific operational risk.8

This report provides a 5-phase work program that integrates the IEC 62443 security lifecycle directly into the data center capital project schedule, from high-level design through operational handover.11 The core technical strategy presented utilizes the IEC 62443 "Zones and Conduits" model to architect a secure IACS network topology that mirrors, enforces, and protects the physical redundancy of the Tier 3 design.13

The Uptime Institute's Tier standards are performance-based and largely cyber-agnostic, focusing on physical topology, availability, and operational sustainability.3 IEC 62443 is a cyber-centric standard. The IACS is the critical intersection of these two domains. The IEC 62443 Foundational Requirement 7 (FR7), "Resource Availability," is the explicit technical analog to the Tier 3 physical mandate of concurrent maintainability.16 Therefore, the application of this framework is not a discretionary compliance exercise but an essential engineering discipline required to protect the facility's primary business function.

## **Defining the Tier 3 Data Center "System under Consideration" (SuC)**

The IEC 62443-3-2 standard mandates that the first step in any security lifecycle is to precisely define the "System under Consideration" (SuC).20 For a Tier 3 Data Center, the SuC is the totality of the Operational Technology (OT) assets, which are distinct from the Information Technology (IT) assets they support. These IACS fall squarely within the "building automation" and "electric power generation and distribution" scope defined by the IEC 62443 series.23

The IACS assets included in the SuC are:

* **Building Management System (BMS):** This is the primary IACS, managing the entire mechanical plant and data hall environment. It includes the PLCs, controllers, sensors, and HMIs that manage HVAC, N+1 chiller plants, Computer Room Air Handlers (CRAHs), and environmental monitoring.6  
* **Electrical Power Monitoring System (EPMS):** Also known as a Power Management System (PMS), this IACS monitors and controls the end-to-end electrical infrastructure. This includes utility feeds, backup generators, Automatic Transfer Switches (ATS), the A/B UPS systems, and rack-level Power Distribution Units (PDUs).7  
* **Physical Access Control Systems (PACS):** This IACS controls physical entry to critical areas. It includes badge readers, biometric scanners, and "man-trap" entry points.27 These systems are IACS and their compromise represents a vector for a blended (cyber-physical) attack.23

The IEC 62443 standard defines a "shared responsibility" model for securing this SuC.9 The "Asset Owner" (the data center operator) is ultimately responsible for the security program and for managing risk.8 This requires them to enforce security requirements upon the "System Integrator" (the vendor installing the BMS/EPMS) and the "Component Suppliers" (e.S\_S., Rockwell, Siemens, Schneider) who provide the PLCs, sensors, and software.9

A common and critical pitfall in data center construction is the misclassification of the BMS and EPMS as low-risk "facilities IT" or "building services," managed by teams with no cybersecurity expertise and placed on shared, insecure networks. This classification is fundamentally incorrect. The compromise of these IACS assets has direct, immediate, and catastrophic consequences for the data center's core mission: uptime.32 The Tier 3 value proposition is *entirely* dependent on the availability and integrity of the redundant physical systems 1, and those systems are *exclusively* controlled by the BMS and EPMS.6 Therefore, the 62443 process begins by correctly classifying these systems as mission-critical OT, which is the foundational step for securing the asset.

## **The Integrated Project Lifecycle: A Phased Work Program for IEC 62443 Deployment**

A new-build data center project follows a standard capital project lifecycle that is measured in years, encompassing site selection (6-12 months), permitting (6-18 months), design (9-18 months), and construction (12-36 months).12 The IEC 62443 security lifecycle (Assess, Design/Implement, Maintain) must be integrated as a parallel, dependent workstream from the very beginning, not as a post-facto audit.8

This report's work program is structured in five phases that map directly to the construction lifecycle:

1. **Phase 1: High-Level Design (HLD) & Initial Risk Assessment** (Maps to Project/Design Conception)  
2. **Phase 2: Detailed Design & Cybersecurity Requirements Specification (CRS)** (Maps to Detailed Engineering Design)  
3. **Phase 3: Procurement** (Maps to Vendor Selection & Equipment Ordering)  
4. **Phase 4: Implementation, Verification, and Validation (V\&V)** (Maps to Construction, Assembly & Commissioning 11)  
5. **Phase 5: Completion, Handover, and Operational Readiness** (Maps to Final Handover & "Go Live")

The failure to integrate this security lifecycle at Phase 1 is the single greatest risk to the project's budget and schedule. The risk assessment and architecture work (Phases 1 and 2\) dictate fundamental network topology, component selection, and vendor capabilities.21 For example, the security requirements will mandate specific firewall architectures (conduits), component security certifications (SL-C), and vendor development practices (62443-4-1).37

If this work is not completed *before* procurement (Phase 3), the project will invariably purchase non-compliant components and contract with system integrators who cannot meet the security requirements.37 This "late-stage rework" 37 to "bolt on" security after the fact is exceptionally costly, ineffective, and can delay the "Go Live" date by 1-3 years as the entire insecure design must be remediated.32

## **Phase 1: High-Level Design (HLD) and Initial Risk Assessment (Project Months 0-6)**

This initial phase is governed by IEC 62443-3-2, "Security risk assessment for system design".21 It is a systematic process to identify and prioritize risk, which then informs the design.

### **Work Program: The IEC 62443-3-2 Risk Assessment Workflow**

1. **Identify the System under Consideration (SuC):** Completed in Section 2 of this report.20  
2. **Perform Initial (High-Level) Cyber Risk Assessment:** This is a rapid, consequence-driven assessment to identify high-risk areas.8 This process assumes the threat likelihood is 1 (i.e., the attack *will* be successful) and evaluates the worst-case consequences, without considering existing controls.28  
3. **Partition the SuC into Initial Zones and Conduits:** Based on the high-level assessment, assets are grouped by common function and security requirements (e.g., "Chiller Plant Controls," "PDU Monitoring").13  
4. **Perform Detailed Cyber Risk Assessment:** For the high-risk zones identified in Step 2, a detailed analysis is performed.20 This analysis *does* consider threat likelihood, potential attack vectors (e.g., software vulnerabilities, physical access, supply chain) 28, and the effectiveness of existing or planned countermeasures.43  
5. **Determine Target Security Level (SL-T) and Document:** Based on the detailed risk assessment and the organization's tolerable risk, a Target Security Level (SL-T) is assigned to each zone and conduit.8

### **Analysis: High-Consequence Scenarios for Tier 3 IACS**

The initial risk assessment (Step 2\) must focus on the unique, catastrophic consequences within the Tier 3 IACS environment:

* **Consequence 1 (Critical): Loss of Redundancy.** An attacker compromises the BMS and disables the N+1 chiller. The system continues to operate, but it is now in a fragile state. A concurrent *physical* failure in another chiller, which would normally be tolerated, now causes a cascading shutdown.  
* **Consequence 2 (Catastrophic): Loss of Availability.** An attacker uses the EPMS to simultaneously trip the breakers for *both* 'A' and 'B' power feeds to a data hall, or uses the BMS to execute a "kill-all" command, shutting down *all* cooling systems. This is a total, immediate loss of the data center.  
* **Consequence 3 (Integrity): Loss of View / Deception.** An attacker "freezes" the BMS HMI to show normal temperatures and humidity while simultaneously commanding the CRAHs to shut down, physically "cooking" the servers. By the time the deception is discovered, the equipment is destroyed.

### **Deliverable: Target Security Level (SL-T) Determination**

The SL-T is the desired future state of security.8 IEC 62443 defines four levels to protect against escalating threat profiles 23:

* **SL 1:** Protects against casual or accidental misuse.  
* **SL 2:** Protects against intentional misuse using simple means and low resources.  
* **SL 3:** Protects against sophisticated attacks using specialized skills and moderate resources.  
* **SL 4:** Protects against advanced, state-sponsored attacks with high motivation and resources.

The threat profile for a high-value Tier 3 data center is not "casual misuse." Given the complexity of IACS and the high value of the target, the threat actor must be assumed to possess "specialized skills and moderate resources".37 This threat profile maps directly to SL 3\. Therefore, all critical IACS zones—those controlling power, cooling, and physical access—must be assigned a **Target Security Level (SL-T) of 3**. Non-critical zones, such as a monitoring system for office-space lighting, might be set to SL-T 2\. This SL-T decision 42 is the most important output of Phase 1, as it dictates the cost, complexity, and technical requirements of the entire security program.42

## **Phase 2: Detailed Design & Cybersecurity Requirements Specification (CRS) (Project Months 6-12)**

This phase translates the risk and SL-T targets from Phase 1 into a buildable, technical architecture and a contractual specification.

### **The Core Strategic Imperative: Zoning for Concurrent Maintainability**

This is the most critical strategic concept in this report. The Tier 3 *physical* design must be the blueprint for the *cyber-physical* design.

A Tier 3 data center's 'A' and 'B' power trains are physically separate, independent, and redundant. The N+1 cooling systems are similarly designed to be independent.1 The IEC 62443 security architecture must enforce this separation in the cyber domain.

This is achieved by placing the IACS components that control this redundant hardware into separate, isolated Security Zones.13 For example:

* The EPMS PLCs, meters, and controllers for Power Train 'A' are placed in **"Zone A (Power)"**.  
* The EPMS components for Power Train 'B' are placed in **"Zone B (Power)"**.  
* A stateful firewall (a secure *conduit* 13) must be implemented between these two zones. The default rule for this conduit must be "Deny All," blocking *all* direct peer-to-peer communication.  
* This design ensures that an attacker who compromises Zone A *cannot* pivot laterally to Zone B. The cyber-attack is contained to a single redundant leg, preserving the facility's overall availability. This principle is repeated for cooling: **"Zone C (Cooling N)"** and **"Zone D (Cooling \+1)"**.

### **Architectural Design: The Data Center Zone & Conduit Model**

The detailed design deliverable is a set of Zone & Conduit diagrams based on this "zoning for concurrent maintainability" philosophy. These diagrams become the primary technical drawings for the secure IACS architecture.

**Table 1: Data Center IACS Zone & Conduit Architecture Model (Example)**

| Zone ID | Zone Name | Key Assets | Physical System Controlled | Target SL-T | Permitted Conduits (To/From) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **A-PWR** | Power Train A EPMS | A-side UPS controllers, A-side PDU PLCs, A-side ATS | Power Train 'A' | **SL-T 3** | To Zone-M (SCADA) (Read-only, restricted ports). *All traffic to/from Zone B-PWR explicitly denied.* |
| **B-PWR** | Power Train B EPMS | B-side UPS controllers, B-side PDU PLCs, B-side ATS | Power Train 'B' | **SL-T 3** | To Zone-M (SCADA) (Read-only, restricted ports). *All traffic to/from Zone A-PWR explicitly denied.* |
| **N-CLG** | Chiller Plant 'N' BMS | Chiller 'N' PLCs, CRAH Group 'N' controllers, sensors | Primary Cooling Loop | **SL-T 3** | To Zone-M (SCADA) (Restricted ports/protocols). *All traffic to/from Zone N1-CLG explicitly denied.* |
| **N1-CLG** | Chiller Plant 'N+1' BMS | Chiller 'N+1' PLCs, CRAH Group 'N+1' controllers, sensors | Redundant Cooling Loop | **SL-T 3** | To Zone-M (SCADA) (Restricted ports/protocols). *All traffic to/from Zone N-CLG explicitly denied.* |
| **M-OPS** | IACS Management Zone | HMI Servers, Historian, Engineering Workstation | Supervisory Control & View | **SL-T 3** | To/From A-PWR, B-PWR, N-CLG, N1-CLG (Highly restricted). To/From DMZ (MFA required). |
| **SEC-PACS** | Physical Access Control | PACS controllers, badge readers, man-trap controls | Facility Physical Access | **SL-T 2** | To/From M-OPS (Event logging only). |
| **DMZ** | Remote Access DMZ | Secure Jump Host / Bastion Host | Remote Maintenance Access | **SL-T 3** | To/From M-OPS (MFA, encrypted tunnel). *No direct access to control zones (A, B, N).* |

### **Developing the Cybersecurity Requirements Specification (CRS)**

The SL-Ts and Zone/Conduit diagrams are then translated into a formal, contractual document: the **Cybersecurity Requirements Specification (CRS)**.49 This is the primary technical specification that will be included in the procurement package (Phase 3). The CRS documents the SuC, the Zone/Conduit drawings, the threat environment, and the specific security countermeasures required.52

### **Translating SL-Ts to Controls via IEC 62443-3-3 (The 7 Foundational Requirements)**

The CRS is built by selecting the specific System Requirements (SRs) from IEC 62443-3-3 that are necessary to achieve the target SL-T 3\.32 These SRs are grouped into 7 Foundational Requirements (FRs).16

For a Tier 3 data center, **FR7 (Resource Availability)** is the most important business requirement, as it is the cyber-equivalent of the Tier 3 uptime promise.16 The CRS must explicitly guarantee this. The specific SRs under FR7—such as **SR 7.1 (Denial of Service Protection)**, **SR 7.3 (Control System Backup)**, and **SR 7.4 (Control System Recovery)**—are the exact technical controls that must be specified.17 The "zoning for concurrent maintainability" architecture (e.g., separating Zone A and B) is the primary *mechanism* to achieve SR 7.1. A DoS attack in Zone A is contained by the conduit firewall and does not affect Zone B, thus protecting the availability of the overall system.

**Table 2: CRS Summary for Tier 3 IACS (Mapped to 7 FRs)**

| FR | Foundational Requirement | Example CRS Requirements (for SL-T 3\) | Data Center IACS Context |
| :---- | :---- | :---- | :---- |
| **FR1** | **Identification & Authentication Control (IAC)** | SR 1.1 RE 2: Multifactor authentication for untrusted networks.42 SR 1.3: Unique user accounts (no shared logins). | All remote access to the DMZ and all admin access to M-OPS requires MFA. All integrator/vendor access uses unique, temporary, logged accounts. |
| **FR2** | **Use Control (UC)** | SR 2.1: Role-Based Access Control (RBAC). | The "Cooling" team's accounts can only view/modify Zones N-CLG and N1-CLG. They have *no access* to Zones A-PWR or B-PWR. |
| **FR3** | **System Integrity (SI)** | SR 3.1 RE 1: Cryptographic verification of communications.56 SR 3.3: All configuration changes must be auditable. | All HMI-to-PLC commands must be authenticated. The BMS/EPMS must have file integrity monitoring to detect unauthorized changes to logic. |
| **FR4** | **Data Confidentiality (DC)** | SR 4.1: Encryption of data in transit.37 | All remote access sessions via the DMZ must use a fully encrypted tunnel (e.g., SSH, IPsec). |
| **FR5** | **Restricted Data Flow (RDF)** | SR 5.1: Network Segmentation.42 SR 5.2: Zone & Conduit boundary protection.37 | *This is the core architecture.* Firewalls (conduits) must be deployed as per Table 1, enforcing "Deny All" by default. |
| **FR6** | **Timely Response to Events (TRE)** | SR 6.1: Audit log generation.37 SR 6.2: Continuous monitoring.56 | All firewalls, PLCs, and servers must send logs to a central SIEM. An alert must be generated for any "Deny" rule triggered on the conduit between Zone A and Zone B. |
| **FR7** | **Resource Availability (RA)** | SR 7.1: Denial of Service (DoS) protection. SR 7.3: System backup and recovery.17 | The Zone/Conduit architecture (FR5) *provides* DoS protection. Full, tested backups of all PLC logic and HMI configurations must be available. |

## **Phase 3: Procurement & Secure Component Lifecycle (Project Months 9-18)**

In this phase, the asset owner uses the design deliverables from Phase 2 to control the procurement process.

### **Embedding IEC 62443 into RFPs and Vendor Contracts**

The CRS and Zone & Conduit diagrams are not internal-use documents; they become legally binding appendices to the Request for Proposal (RFP) issued to system integrators and component vendors.37 The RFP must contain explicit procurement language, leveraging best practices such as the DHS/CISA "Cyber Security Procurement Language for Control Systems".58

This contract language must require the vendor/integrator to:

* Formally acknowledge and commit to delivering a system that meets every requirement in the attached CRS.  
* Provide a roles and responsibilities matrix for all security functions.  
* Submit their system and components for the mandatory Cybersecurity FAT/SAT testing (detailed in Phase 4).

### **Evaluating Vendor & Integrator Compliance (IEC 62443-4-1)**

This standard, "Secure product development lifecycle requirements," dictates *how* a vendor builds, maintains, and supports its products.34 By mandating 62443-4-1 compliance or certification in the RFP, the asset owner performs critical due diligence.64 This contractually obligates the vendor (e.g., the BMS/EPMS supplier) to have a mature, auditable process for secure coding, vulnerability handling, and patch management.10 This shifts the security burden upstream, significantly reducing the asset owner's long-term risk, support costs, and patch-cycle friction.32

### **Specifying Secure Components (IEC 62443-4-2)**

This standard defines the *technical* security requirements for the IACS components themselves (e.g., PLCs, HMIs, network switches).10 Components can be certified with a **Capability Security Level (SL-C)**, which defines the "out-of-the-box" security features they support.8

This is where the entire process connects:

1. **Phase 1** set the risk-based **Target Security Level (SL-T)** for the critical zones at **3**.  
2. **Phase 3** must now mandate in the RFP that all IACS components (PLCs, firewalls, controllers) deployed in those SL-T 3 zones have a **Capability Security Level (SL-C)** of **3 or higher**.56

This simple contractual requirement ensures that the hardware and software purchased are *capable* of meeting the security targets defined in the risk assessment.

## **Phase 4: Implementation, Verification, and Validation (Project Months 18-24)**

This phase moves from paper design to physical implementation and rigorous testing.

### **Work Program: Secure Configuration, Hardening, and Implementation**

The selected system integrator, using the 62443-4-2 compliant components, now builds the IACS as specified in the CRS. This includes:

* **Secure Configuration:** Implementing all devices according to security best practices, such as changing all default credentials, disabling unused ports and services, and enabling security features.31  
* **Architecture Implementation:** Physically and logically building the Zone & Conduit architecture, including the installation and ruleset configuration of all inter-zone firewalls.38  
* **CRS Control Implementation:** Configuring the specific controls from the CRS, such as setting up RBAC accounts (FR2), audit logs (FR6), and system backups (FR7).37

### **Verification: Cybersecurity Factory Acceptance Testing (FAT) Procedures**

Before the IACS (e.g., the pre-built BMS control panels) ships to the data center site, it must undergo a **Cybersecurity Factory Acceptance Test (CFAT)** at the integrator's facility.58 This is a non-negotiable step, as it is the last, best chance to find and fix configuration flaws *before* they are deployed to the critical environment.58

The CFAT is the *first* physical validation that the integrator has fulfilled its contractual obligations. The test scripts are not generic; they are "SLT-aligned" 40, meaning every test case maps directly to a specific requirement in the CRS.

* **Example CFAT Test Case:**  
  * **CRS Requirement:** CRS-FR5-001: "All traffic between Zone A-PWR and Zone B-PWR shall be Deny-All."  
  * **CFAT Test:** CFAT-001: Connect test laptop to Zone A-PWR network switch. Attempt to ping the IP address of the Zone B-PWR PLC.  
  * **Expected Result:** 100% packet loss. Test **PASS**.  
  * **CFAT Test:** CFAT-002: Review the conduit firewall logs.  
  * **Expected Result:** Log entry is present showing "Deny" for the traffic from CFAT-001. Test **PASS**.

The CFAT must also verify all other CRS requirements, including component inventory, patch levels, hardening (e.g., port scans), user accounts, and the success of a full system backup and restore.58

### **Validation: Cybersecurity Site Acceptance Testing (SAT) and Commissioning**

After the IACS is installed on-site at the data center, a **Cybersecurity Site Acceptance Test (CSAT)** is performed.58 This test re-runs many of the CFAT scripts to ensure no configurations were altered during shipping or installation.68

The CSAT also includes new tests that were not possible at the factory, such as:

* Validating secure remote access through the DMZ.69  
* Verifying log forwarding to the asset owner's SIEM.  
* Confirming any data links to the enterprise IT network are properly firewalled.

This commissioning window (before the data center has tenant load) is the *only* safe and appropriate time to conduct penetration testing on the IACS.67 This test, performed by a specialized OT security team, simulates a real attack to validate the resilience of the entire design (e.g., "Assume breach of Zone A-PWR; can you compromise Zone B-PWR?"). The results provide empirical evidence of the system's security.72

### **Deliverable: The Final Security Verification and Validation Report**

The output of this phase is the **Final Security Verification and Validation (V\&V) Report**.10 This formal document archives all CFAT and CSAT test scripts, results, and remediation actions. It is the auditable proof that the system, *as-built*, meets the security requirements defined in the CRS. This report provides the justification for declaring the final **Achieved Security Level (SL-A)** for the system.8

## **Phase 5: Completion, Handover, and Operational Readiness (Project Month 24+)**

The project concludes by transitioning the secure, validated system to the asset owner's operational team.

### **Establishing the Cybersecurity Management System (CSMS)**

A secure system will not stay secure without a management framework. The asset owner must establish a **Cybersecurity Management System (CSMS)** based on IEC 62443-2-1.10 This CSMS is the "people and process" framework that defines policies, assigns roles, and ensures security is managed over the 20+ year lifecycle of the IACS.

### **Operational Procedures (IEC 62443-2-4)**

The CSMS must include procedures for ongoing maintenance, which will often be performed by the system integrator or other service providers. IEC 62443-2-4 defines the security program requirements *for* these external service providers.10

The integrator must hand over, and the asset owner's CSMS must have procedures to manage:

* **Patch and Vulnerability Management:** A process for receiving, testing, and applying security patches to IACS components.31  
* **Change Management:** A formal process for approving and documenting any changes to the IACS (e.g., firewall rules, PLC logic).77  
* **Backup and Recovery:** Regular, tested backups of all system configurations and logic.17  
* **Incident Response Planning:** A specific plan for identifying, containing, and remediating a cyber-attack on the BMS or EPMS.65

This is the final payoff of the "zoning for concurrent maintainability" design. A robust patch management program, which is critical for security, is often seen as impossible in a 24/7/365 data center due to the risk of downtime. The Tier 3 / IEC 62443 integrated architecture is the *enabler* for safe maintenance.

* **Operational Scenario:**  
  1. The asset owner receives a critical patch notification for a vulnerability in the PLCs used in the cooling system.  
  2. Using the Tier 3 physical design, the operator manually transfers the full cooling load to the **Zone N1-CLG** (+1) system. This is a standard, "concurrent maintainability" operation.1  
  3. The **Zone N-CLG** (primary) system is now "offline" from a process perspective, *with zero impact on data center operations*.  
  4. The maintenance team can now safely test and deploy the patch within the isolated Zone N-CLG. They can even reboot PLCs or perform vulnerability scans without risking the data center load.  
  5. Once validated, control is transferred back to Zone N-CLG, and the process is repeated for Zone N1-CLG during its next scheduled maintenance window.

This demonstrates how the cyber-physical architecture designed in Phase 2 directly enables a robust, safe, and manageable operational security program as defined in Phase 5\.37

## **Integrated Schedule and Project Management**

### **Factors Influencing Project Timeline and Cost**

* **Management Buy-in:** This is the primary success factor. Gaining executive support and budget for the 62443 work program *before* HLD begins is essential to prevent it from being bypassed or under-resourced.76  
* **Greenfield vs. Brownfield:** This work program is for a "new build" (greenfield), which is significantly cheaper and faster. Security is "built in" from the start. A remediation ("brownfield") project on an existing, insecure data center often takes 1-3 years *after* the initial assessment just to implement mitigations, and must contend with legacy equipment and operational downtime.42  
* **Vendor/Integrator Maturity:** Selecting system integrators and component suppliers who already have IEC 62443-4-1 and 62443-4-2 certifications will dramatically reduce project friction, cost, and risk.41

### **Consolidated IEC 62443 Work Program Schedule**

The following table provides an estimated schedule mapping the 5-phase IEC 62443 work program to a typical 24-36 month data center capital project.

**Table 3: Phased IEC 62443 Work Program and Estimated Schedule**

| Project Phase | Typical Project Timeline (Months) | IEC 62443 Work Program (This Phase) | Key Activities & Deliverables | Relevant Standards |
| :---- | :---- | :---- | :---- | :---- |
| **Phase 0: Project Conception** | T-6 to T-0 | **Project Initiation** | \- Secure management buy-in and organizational support.76 \- Assemble Cybersecurity Steering Committee (Asset Owner, PM, IT, OT).80 \- Establish budget and charter for 62443 integration. | 62443-2-1 |
| **Phase 1: High-Level Design (HLD)** | T+0 to T+6 | **Assess & Define Risk** | \- Define IACS SuC (BMS, EPMS, PACS).6 \- Conduct High-Level & Detailed Risk Assessments.20 \- Initial Zone & Conduit Partitioning.13 \- **Deliverable:** Risk Assessment Report & SL-T Determination.8 | 62443-3-2, 62443-1-1 |
| **Phase 2: Detailed Design & Engineering** | T+6 to T+12 | **Design Security Architecture** | \- Finalize Zone & Conduit architecture (Table 1). \- Align cyber-zones with Tier 3 physical redundancy.1 \- Map SL-Ts to the 7 Foundational Requirements.16 \- **Deliverable:** Cybersecurity Requirements Spec (CRS).49 | 62443-3-3, 62443-3-1 |
| **Phase 3: Procurement** | T+9 to T+18 | **Secure Procurement** | \- Embed CRS into all RFP/Contracts as a binding appendix.37 \- Utilize CISA/DHS procurement language.59 \- Evaluate vendor/integrator 62443-4-1 compliance.39 \- **Deliverable:** Select 62443-4-2 compliant components (SL-C).65 | 62443-4-1, 62443-4-2, 62443-2-4 |
| **Phase 4: Implementation & Commissioning** | T+18 to T+30 | **Verify & Validate (V\&V)** | \- Integrator performs secure configuration & hardening.37 \- **Deliverable:** Cybersecurity FAT (CFAT) (at vendor facility).40 \- **Deliverable:** Cybersecurity SAT (CSAT) & Penetration Test (on-site).67 \- **Deliverable:** Final V\&V Report (documents the Achieved SL-A).64 | 62443-3-3, DHS FAT/SAT 68 |
| **Phase 5: Completion & Handover** | T+30 to T+36 | **Operational Readiness** | \- **Deliverable:** Establish formal Cybersecurity Management System (CSMS).10 \- **Deliverable:** Finalize operational procedures (Patching, IR, Change Mgmt).65 \- Conduct asset owner staff training.32 | 62443-2-1, 62443-2-4, 62443-2-3 |

## **Strategic Recommendations and Concluding Insights**

The successful execution of this work program depends on a few key, non-technical decisions made at the project's inception.

1. **Appoint a Single Authority for OT Security.** The single greatest cause of failure is orphaned responsibility. The project must have a single "OT Cybersecurity Project Manager" who has the authority to bridge the gap between the facilities/construction team (focused on the Tier 3 standard) and the cybersecurity team (focused on the 62443 standard). Their sole responsibility is to ensure the two workstreams are integrated and that one does not bypass the other.  
2. **The CRS is the "Golden Document."** The Cybersecurity Requirements Specification (CRS) generated in Phase 2 is the central, "golden document" for the entire project. The risk assessment (Phase 1\) flows *into* it, and all procurement (Phase 3\) and testing (Phase 4\) requirements flow *out* of it. This document must be treated as a core engineering specification, equal in importance to the mechanical and electrical plans.  
3. **Do Not Conflate IT and OT Security.** A Tier 3 data center will have a world-class IT security team. It is a common mistake to assume this team understands the IACS. OT systems have fundamentally different requirements: availability and integrity are paramount, "rebooting" is not an acceptable troubleshooting step, and patch windows are tied to physical plant operations, not "Patch Tuesday".32 The 62443 framework is purpose-built for these OT-specific realities.37 The OT security program must be a dedicated, specialized effort that collaborates with, but is not subservient to, the IT security program.

In conclusion, integrating the IEC 62443 standard into a new-build Tier 3 data center is not a discretionary compliance cost; it is a fundamental investment in resiliency. It is the only holistic, internationally-recognized engineering framework designed to ensure that the physical redundancy defining a Tier 3 asset is not rendered useless by a common-mode cyber-attack. The 5-phase work program detailed in this report provides the integrated cyber-physical blueprint to protect the asset, the tenants, and the business's core promise of availability.

#### **Works cited**

1. Tier Classification System \- Uptime Institute, accessed November 12, 2025, [https://uptimeinstitute.com/tiers](https://uptimeinstitute.com/tiers)  
2. What are Data Center Tiers? | Digital Realty, accessed November 12, 2025, [https://www.digitalrealty.com/resources/articles/introduction-to-data-center-tiers](https://www.digitalrealty.com/resources/articles/introduction-to-data-center-tiers)  
3. Data Center Tier Certification \- Uptime Institute, accessed November 12, 2025, [https://uptimeinstitute.com/tier-certification](https://uptimeinstitute.com/tier-certification)  
4. Data Center Tiers \[Complete Idiot's Guide for 2025\] \- ENCOR Advisors, accessed November 12, 2025, [https://encoradvisors.com/data-center-tiers/](https://encoradvisors.com/data-center-tiers/)  
5. Data Center Redundancy: N, N+1, 2N, and 2N+1 Explained \- Dgtl Infra, accessed November 12, 2025, [https://dgtlinfra.com/data-center-redundancy/](https://dgtlinfra.com/data-center-redundancy/)  
6. Data Center Building Management Systems | HARTING Technology Group, accessed November 12, 2025, [https://www.harting.com/en-US/data-center-infrastructure/building-management-systems](https://www.harting.com/en-US/data-center-infrastructure/building-management-systems)  
7. ACIS BMS \- More Than Building Management System \- Airedale by Modine, accessed November 12, 2025, [https://www.airedale.com/products/acis-bms/](https://www.airedale.com/products/acis-bms/)  
8. Understanding ISA/IEC 62443: A Guide for OT Security Teams \- Dragos, accessed November 12, 2025, [https://www.dragos.com/blog/isa-iec-62443-concepts](https://www.dragos.com/blog/isa-iec-62443-concepts)  
9. ISA/IEC 62443 Series of Standards | ISAGCA, accessed November 12, 2025, [https://isagca.org/isa-iec-62443-standards](https://isagca.org/isa-iec-62443-standards)  
10. The Essential Guide to the IEC 62443 industrial cybersecurity standards, accessed November 12, 2025, [https://industrialcyber.co/features/the-essential-guide-to-the-iec-62443-industrial-cybersecurity-standards/](https://industrialcyber.co/features/the-essential-guide-to-the-iec-62443-industrial-cybersecurity-standards/)  
11. Data Center Schedule \- Data Centers Delivered, accessed November 12, 2025, [https://www.datacentersdelivered.com/data-center/schedule/](https://www.datacentersdelivered.com/data-center/schedule/)  
12. How Long Does It Take to Develop a Data Center? A Step-by-Step Timeline \- Avisen Legal, accessed November 12, 2025, [https://www.avisenlegal.com/how-long-does-it-take-to-develop-a-data-center-a-step-by-step-timeline/](https://www.avisenlegal.com/how-long-does-it-take-to-develop-a-data-center-a-step-by-step-timeline/)  
13. Zones and Conduits (with Protection Needs Analysis) \- PLCnext Engineer Online Help, accessed November 12, 2025, [https://engineer.plcnext.help/latest/ZonesConduits.htm](https://engineer.plcnext.help/latest/ZonesConduits.htm)  
14. How to Define Zones and Conduits \- ISA Global Cybersecurity Alliance, accessed November 12, 2025, [https://gca.isa.org/blog/how-to-define-zones-and-conduits](https://gca.isa.org/blog/how-to-define-zones-and-conduits)  
15. Tier Classification Myths and Misconceptions \- Uptime Institute, accessed November 12, 2025, [https://uptimeinstitute.com/myths](https://uptimeinstitute.com/myths)  
16. What are the 7 foundational requirements as per IEC 62443? \- CybersecurityOT.com, accessed November 12, 2025, [https://cybersecurityot.com/what-are-the-7-foundational-requirements-as-per-iec-62443/](https://cybersecurityot.com/what-are-the-7-foundational-requirements-as-per-iec-62443/)  
17. What is IEC/ISA 62443-3-3:2013? Cybersecurity & Compliance | UpGuard, accessed November 12, 2025, [https://www.upguard.com/blog/isa-62443-3-3-2013](https://www.upguard.com/blog/isa-62443-3-3-2013)  
18. How to Construct the Cornerstone of OT Cybersecurity Using ISA/IEC 62443, accessed November 12, 2025, [https://www.txone.com/blog/how-to-construct-the-cornerstone-of-ot-cybersecurity-using-isa-iec-62443/](https://www.txone.com/blog/how-to-construct-the-cornerstone-of-ot-cybersecurity-using-isa-iec-62443/)  
19. Addressing the Foundational Requirements of IEC 62443 for Industrial Automation Control Systems \- SPE Aberdeen, accessed November 12, 2025, [https://www.spe-aberdeen.org/wp-content/uploads/2019/11/0930\_3\_Foundational-Reqmts-IEC62443-Emerson.pdf](https://www.spe-aberdeen.org/wp-content/uploads/2019/11/0930_3_Foundational-Reqmts-IEC62443-Emerson.pdf)  
20. White Paper Excerpt: Leveraging ISA 62443-3-2 For IACS Risk Assessment and Risk Related Strategies \- ISA Global Cybersecurity Alliance, accessed November 12, 2025, [https://gca.isa.org/blog/white-paper-excerpt-leveraging-isa-62443-3-2-for-iacs-risk-assessment-and-risk-related-strategies](https://gca.isa.org/blog/white-paper-excerpt-leveraging-isa-62443-3-2-for-iacs-risk-assessment-and-risk-related-strategies)  
21. Complete Guide to ISA/IEC 62443-3-2: Risk Assessments for Industrial Automation and Control Systems \- Security Boulevard, accessed November 12, 2025, [https://securityboulevard.com/2024/04/complete-guide-to-isa-iec-62443-3-2-risk-assessments-for-industrial-automation-and-control-systems/](https://securityboulevard.com/2024/04/complete-guide-to-isa-iec-62443-3-2-risk-assessments-for-industrial-automation-and-control-systems/)  
22. Using IEC 62443 to Secure OT Systems: The Ultimate Guide \- Verve Industrial, accessed November 12, 2025, [https://verveindustrial.com/resources/blog/the-ultimate-guide-to-protecting-ot-systems-with-iec-62443](https://verveindustrial.com/resources/blog/the-ultimate-guide-to-protecting-ot-systems-with-iec-62443)  
23. IEC 62443 Standard: Enhancing Cybersecurity for Industrial Automation and Control Systems | Fortinet, accessed November 12, 2025, [https://www.fortinet.com/resources/cyberglossary/iec-62443](https://www.fortinet.com/resources/cyberglossary/iec-62443)  
24. What is a building management system (BMS)? | Equinix Community \- 321, accessed November 12, 2025, [https://community.equinix.com/discussions/or/what-is-a-building-management-system-bms/321](https://community.equinix.com/discussions/or/what-is-a-building-management-system-bms/321)  
25. The Top 7 Benefits of a BMS & DCIM Integration \- Nlyte Software, accessed November 12, 2025, [https://www.nlyte.com/blog/bms-dcim-integration/](https://www.nlyte.com/blog/bms-dcim-integration/)  
26. Selecting a Building Management System (BMS) for Sites with a Data Center or IT Room, accessed November 12, 2025, [https://www.se.com/us/en/download/document/SPD\_PDON-A7UM7U\_EN/](https://www.se.com/us/en/download/document/SPD_PDON-A7UM7U_EN/)  
27. Are there physical security requirements for a Tier 3 data center? : r/AskNetsec \- Reddit, accessed November 12, 2025, [https://www.reddit.com/r/AskNetsec/comments/dv9r4w/are\_there\_physical\_security\_requirements\_for\_a/](https://www.reddit.com/r/AskNetsec/comments/dv9r4w/are_there_physical_security_requirements_for_a/)  
28. Cybersecurity Risk Assessment According to ISA/IEC 62443-3-2, accessed November 12, 2025, [https://gca.isa.org/blog/cybersecurity-risk-assessment-according-to-isa-iec-62443-3-2](https://gca.isa.org/blog/cybersecurity-risk-assessment-according-to-isa-iec-62443-3-2)  
29. What Is IEC 62443? Definition, Breakdown & Methodology \- Zscaler, accessed November 12, 2025, [https://www.zscaler.com/zpedia/what-is-iec-62443](https://www.zscaler.com/zpedia/what-is-iec-62443)  
30. IEC 62443 \- Industrial Security standards and laws \- Pilz INT, accessed November 12, 2025, [https://www.pilz.com/en-INT/support/law-standards-norms/industrial-security-standards-iec-62443](https://www.pilz.com/en-INT/support/law-standards-norms/industrial-security-standards-iec-62443)  
31. ISA/IEC 62443 Standards: Best Practices for IACS Cybersecurity \- Nozomi Networks, accessed November 12, 2025, [https://www.nozominetworks.com/blog/isa-iec-62443-explained-best-practices-for-iacs-security](https://www.nozominetworks.com/blog/isa-iec-62443-explained-best-practices-for-iacs-security)  
32. Understanding IEC 62443, accessed November 12, 2025, [https://www.iec.ch/blog/understanding-iec-62443](https://www.iec.ch/blog/understanding-iec-62443)  
33. Data center construction schedules : r/ConstructionManagers \- Reddit, accessed November 12, 2025, [https://www.reddit.com/r/ConstructionManagers/comments/1kiuhm0/data\_center\_construction\_schedules/](https://www.reddit.com/r/ConstructionManagers/comments/1kiuhm0/data_center_construction_schedules/)  
34. IEC 62443: How to secure IACS (Industrial Automation and Control Systems), accessed November 12, 2025, [https://www.encryptionconsulting.com/education-center/iec-62443-how-to-secure-iacs-industrial-automation-and-control-systems/](https://www.encryptionconsulting.com/education-center/iec-62443-how-to-secure-iacs-industrial-automation-and-control-systems/)  
35. Structuring the ISA/IEC 62443 Standards \- ISA Global Cybersecurity Alliance, accessed November 12, 2025, [https://gca.isa.org/blog/structuring-the-isa-iec-62443-standards](https://gca.isa.org/blog/structuring-the-isa-iec-62443-standards)  
36. ISA/IEC 62443 Cybersecurity Certificate Program \- International Society of Automation (ISA), accessed November 12, 2025, [https://www.isa.org/certification/certificate-programs/isa-iec-62443-cybersecurity-certificate-program](https://www.isa.org/certification/certificate-programs/isa-iec-62443-cybersecurity-certificate-program)  
37. IEC 62443: Ultimate OT Security Guide | Rockwell Automation | UK, accessed November 12, 2025, [https://www.rockwellautomation.com/en-gb/company/news/blogs/iec-62443-security-guide.html](https://www.rockwellautomation.com/en-gb/company/news/blogs/iec-62443-security-guide.html)  
38. White Paper | Enhancing OT Network Security with IEC 62443: Microsegmentation & Device Visibility \- Elisity, accessed November 12, 2025, [https://www.elisity.com/resources/wp/iec-62443-segmentation-white-paper](https://www.elisity.com/resources/wp/iec-62443-segmentation-white-paper)  
39. IEC 62443 \- CSA Certification \- ISASecure, accessed November 12, 2025, [https://isasecure.org/certification/iec-62443-csa-certification](https://isasecure.org/certification/iec-62443-csa-certification)  
40. IEC 62443: Ultimate OT Security Guide | Rockwell Automation | UK, accessed November 12, 2025, [https://www.rockwellautomation.com/en-us/company/news/blogs/iec-62443-security-guide.html](https://www.rockwellautomation.com/en-us/company/news/blogs/iec-62443-security-guide.html)  
41. Mapping of Industrial IoT to IEC 62443 Standards \- MDPI, accessed November 12, 2025, [https://www.mdpi.com/1424-8220/25/3/728](https://www.mdpi.com/1424-8220/25/3/728)  
42. Effective ICS Cybersecurity Using the IEC 62443 Standard \- Fortinet, accessed November 12, 2025, [https://www.fortinet.com/content/dam/fortinet/assets/analyst-reports/report-sans-cybersecurity-iec-62443.pdf](https://www.fortinet.com/content/dam/fortinet/assets/analyst-reports/report-sans-cybersecurity-iec-62443.pdf)  
43. Practical Guide to Performing Risk Assessment as per IEC 62443-3-2 and NIST 800-30, accessed November 12, 2025, [https://hardhatsecurity.com/2024/05/15/practical-guide-to-performing-high-and-detailed-level-risk-assessment-as-per-iec-62443-3-2-and-nist-800-30/](https://hardhatsecurity.com/2024/05/15/practical-guide-to-performing-high-and-detailed-level-risk-assessment-as-per-iec-62443-3-2-and-nist-800-30/)  
44. White Paper \- Anixter, accessed November 12, 2025, [https://www.anixter.com/content/dam/Suppliers/Belden/White%20Papers/7\_Steps\_to\_ICS\_and\_SCADA\_Security\_WP.pdf](https://www.anixter.com/content/dam/Suppliers/Belden/White%20Papers/7_Steps_to_ICS_and_SCADA_Security_WP.pdf)  
45. A Practical Guide to Risk Assessment in ICS/OT using IEC 62443–3.2 | by Sathish \- Medium, accessed November 12, 2025, [https://medium.com/@sathish95/a-practical-guide-to-risk-assessment-in-ics-ot-using-iec-62443-3-2-c3fb43471e67](https://medium.com/@sathish95/a-practical-guide-to-risk-assessment-in-ics-ot-using-iec-62443-3-2-c3fb43471e67)  
46. Understanding Zones and Conduits \- WisePlant, accessed November 12, 2025, [https://wiseplant.com/understanding-zones-and-conduits/](https://wiseplant.com/understanding-zones-and-conduits/)  
47. Explaining the Uptime Institute's Tier Classification System (April 2021 Update), accessed November 12, 2025, [https://journal.uptimeinstitute.com/explaining-uptime-institutes-tier-classification-system/](https://journal.uptimeinstitute.com/explaining-uptime-institutes-tier-classification-system/)  
48. Improve your server uptime with redundant (A+B) power | Transmission \- XMission, accessed November 12, 2025, [https://xmission.com/blog/2013/02/19/improve-your-server-uptime-with-redundant-ab-power](https://xmission.com/blog/2013/02/19/improve-your-server-uptime-with-redundant-ab-power)  
49. IEC 62443 End User Template: Cybersecurity Requirement Specification P \- exida, accessed November 12, 2025, [https://www.shopexida.com/products/iec-62443-end-user-template-cybersecurity-requirement-specification-procedure-template](https://www.shopexida.com/products/iec-62443-end-user-template-cybersecurity-requirement-specification-procedure-template)  
50. Security Risk Assessment \- C & C | TÜV Rheinland, accessed November 12, 2025, [https://www.tuv.com/landingpage/en/training-functional-safety-cyber-security/detail-pages/seminars/cs/security-risk-assessment-c-c.html](https://www.tuv.com/landingpage/en/training-functional-safety-cyber-security/detail-pages/seminars/cs/security-risk-assessment-c-c.html)  
51. All you need to know about ISA/IEC 62443 Standard \- Payatu, accessed November 12, 2025, [https://payatu.com/wp-content/uploads/2022/08/isa-iec-62443-standard.pdf](https://payatu.com/wp-content/uploads/2022/08/isa-iec-62443-standard.pdf)  
52. Security of Industrial Automation and Control Systems \- ISA Global ..., accessed November 12, 2025, [https://gca.isa.org/hubfs/ISAGCA%20Quick%20Start%20Guide%20FINAL.pdf](https://gca.isa.org/hubfs/ISAGCA%20Quick%20Start%20Guide%20FINAL.pdf)  
53. IEC 62443 \- SSA Certification \- ISASecure, accessed November 12, 2025, [https://isasecure.org/certification/iec-62443-ssa-certification](https://isasecure.org/certification/iec-62443-ssa-certification)  
54. Cybersecurity: Applying IEC62443 in System Platform environments \- Becolve Digital, accessed November 12, 2025, [https://becolve.com/en/blog/example-of-using-a-cybersecurity-standard-applying-iec62443-in-aveva-system-platform-environments/](https://becolve.com/en/blog/example-of-using-a-cybersecurity-standard-applying-iec62443-in-aveva-system-platform-environments/)  
55. A Solution Guide to Operational Technology Cybersecurity \- Fortinet, accessed November 12, 2025, [https://www.fortinet.com/content/dam/fortinet/assets/white-papers/wp-operational-technology-design-guide.pdf](https://www.fortinet.com/content/dam/fortinet/assets/white-papers/wp-operational-technology-design-guide.pdf)  
56. IEC/ANSI 62443 Example 1 \- SL-A to SL-T Basic Component \- IriusRisk, accessed November 12, 2025, [https://www.iriusrisk.com/resources-blog/62443-example-1-sl-a-to-sl-t-basic-component](https://www.iriusrisk.com/resources-blog/62443-example-1-sl-a-to-sl-t-basic-component)  
57. IEC 62443 Cybersecurity Certification Explained: Requirements, Process, and Benefits, accessed November 12, 2025, [https://21577316.fs1.hubspotusercontent-na1.net/hubfs/21577316/Files%20Repository%20For%20Learning%20Center/Webinars/Webinars%20PDFs/09262018-ISASecure-Cert-Overview.pdf](https://21577316.fs1.hubspotusercontent-na1.net/hubfs/21577316/Files%20Repository%20For%20Learning%20Center/Webinars/Webinars%20PDFs/09262018-ISASecure-Cert-Overview.pdf)  
58. Cybersecurity FAT and SAT \- Medium, accessed November 12, 2025, [https://chrisrpetrie.medium.com/cybersecurity-fat-and-sat-51d9dfca9f8b](https://chrisrpetrie.medium.com/cybersecurity-fat-and-sat-51d9dfca9f8b)  
59. Cyber Security Procurement Language for Control Systems \- CISA, accessed November 12, 2025, [https://www.cisa.gov/sites/default/files/2023-01/Procurement\_Language\_Rev4\_100809\_S508C.pdf](https://www.cisa.gov/sites/default/files/2023-01/Procurement_Language_Rev4_100809_S508C.pdf)  
60. Cybersecurity Service Offering Reference Aids \- CISA, accessed November 12, 2025, [https://www.cisa.gov/sites/default/files/c3vp/cybersecurity\_service\_offerings\_reference\_aids.pdf](https://www.cisa.gov/sites/default/files/c3vp/cybersecurity_service_offerings_reference_aids.pdf)  
61. Cyber Security Procurement Language for Control Systems Version 1.8 \- Department of Energy, accessed November 12, 2025, [https://energy.gov/oe/downloads/cyber-security-procurement-language-control-systems-version-18](https://energy.gov/oe/downloads/cyber-security-procurement-language-control-systems-version-18)  
62. ICS Recommended Practices \- CISA, accessed November 12, 2025, [https://www.cisa.gov/resources-tools/resources/ics-recommended-practices](https://www.cisa.gov/resources-tools/resources/ics-recommended-practices)  
63. Certification for the IEC 62443-4-1 International Standard for Industrial Control System Security | OMRON Global, accessed November 12, 2025, [https://www.omron.com/global/en/media/2023/05/c0522.html](https://www.omron.com/global/en/media/2023/05/c0522.html)  
64. Schneider Electric's new product security certification makes cybersecurity validation easy, accessed November 12, 2025, [https://blog.se.com/datacenter/2023/11/08/schneider-electrics-new-product-security-certification-makes-cybersecurity-validation-easy/](https://blog.se.com/datacenter/2023/11/08/schneider-electrics-new-product-security-certification-makes-cybersecurity-validation-easy/)  
65. IEC 62443 4-2: Technical Security Requirements for IACS Components | Keyfactor, accessed November 12, 2025, [https://www.keyfactor.com/blog/iec-62443-4-2-technical-security-requirements-for-iacs-components/](https://www.keyfactor.com/blog/iec-62443-4-2-technical-security-requirements-for-iacs-components/)  
66. Meeting IEC 62443 Compliance: How CimTrak Secures Industrial Control Systems \- Cimcor, accessed November 12, 2025, [https://www.cimcor.com/blog/iec-62443-compliance-ics-ot-security](https://www.cimcor.com/blog/iec-62443-compliance-ics-ot-security)  
67. exida ISA/IEC 62443 Cybersecurity Services, accessed November 12, 2025, [https://www.exida.com/ics-cybersecurity/7-steps-to-control-system-scada-system-security](https://www.exida.com/ics-cybersecurity/7-steps-to-control-system-scada-system-security)  
68. Untitled \- Amazon AWS, accessed November 12, 2025, [https://imlive.s3.amazonaws.com/Federal%20Government/ID236132973550297328136265002067818272973/18.%20FRCS%20FAT%20SAT%20Checklist.pdf](https://imlive.s3.amazonaws.com/Federal%20Government/ID236132973550297328136265002067818272973/18.%20FRCS%20FAT%20SAT%20Checklist.pdf)  
69. Penetration Testing Guidance \- PCI Security Standards Council, accessed November 12, 2025, [https://www.pcisecuritystandards.org/documents/Penetration-Testing-Guidance-v1\_1.pdf](https://www.pcisecuritystandards.org/documents/Penetration-Testing-Guidance-v1_1.pdf)  
70. Assessing the Cybersecurity of IACS Systems (IC33)-ISA, accessed November 12, 2025, [https://www.isa.org/training/course-description/ic33](https://www.isa.org/training/course-description/ic33)  
71. The Role of Penetration Testing in Cybersecurity: A Focus on Compliance with PCI-DSS and FedRAMP \- DataBank, accessed November 12, 2025, [https://www.databank.com/resources/blogs/the-role-of-penetration-testing-in-cybersecurity-a-focus-on-compliance-with-pci-dss-and-fedramp/](https://www.databank.com/resources/blogs/the-role-of-penetration-testing-in-cybersecurity-a-focus-on-compliance-with-pci-dss-and-fedramp/)  
72. Cyber Security for Industrial Automation and Control Systems (IACS) EDITION 2 \- UNECE, accessed November 12, 2025, [https://unece.org/sites/default/files/2025-07/UK.pdf](https://unece.org/sites/default/files/2025-07/UK.pdf)  
73. The IACS Cybersecurity Certification Framework (ICCF) \- JRC Publications Repository, accessed November 12, 2025, [https://publications.jrc.ec.europa.eu/repository/bitstream/JRC111611/the\_iacs\_cybersecurity\_certification\_framework.pdf](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC111611/the_iacs_cybersecurity_certification_framework.pdf)  
74. ISA/IEC 62443: What does it mean to you? \- Sener, accessed November 12, 2025, [https://www.group.sener/en/insights/isa-iec-62443-what-does-it-mean-to-you/](https://www.group.sener/en/insights/isa-iec-62443-what-does-it-mean-to-you/)  
75. Satisfying the Security Requirements of IEC 62443 With Test Automation \- Parasoft, accessed November 12, 2025, [https://www.parasoft.com/blog/security-requirements-of-iec-62443/](https://www.parasoft.com/blog/security-requirements-of-iec-62443/)  
76. A Practical Approach to Adopting the IEC 62443 Standards, accessed November 12, 2025, [https://gca.isa.org/blog/a-practical-approach-to-adopting-the-iec-62443-standards](https://gca.isa.org/blog/a-practical-approach-to-adopting-the-iec-62443-standards)  
77. IEC 62443: A Cybersecurity Guide for Industrial Systems (Part 3 ..., accessed November 12, 2025, [https://cybersecurity-magazine.com/iec-62443-a-cybersecurity-guide-for-industrial-systems-part-3/](https://cybersecurity-magazine.com/iec-62443-a-cybersecurity-guide-for-industrial-systems-part-3/)  
78. IEC 62443 \- cyber security, accessed November 12, 2025, [https://www.iec.ch/taxonomy/term/778](https://www.iec.ch/taxonomy/term/778)  
79. Project Management in OT/ICS Projects with IEC 62443 and MITRE ATT\&CK using Radiflow, accessed November 12, 2025, [https://www.radiflow.com/blog/project-management-ot-iec-62443-mitre-attack/](https://www.radiflow.com/blog/project-management-ot-iec-62443-mitre-attack/)  
80. Given the world's increasing appetite for resources and the fact that ..., accessed November 12, 2025, [https://www.pera.net/Cyber/1-1-1\_MP\_Guide-Cyber\_Program.pdf](https://www.pera.net/Cyber/1-1-1_MP_Guide-Cyber_Program.pdf)