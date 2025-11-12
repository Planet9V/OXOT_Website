

# **The Resilient Factory: A Ransomware Readiness Framework for the Manufacturing Sector**

## **Executive Summary**

For the manufacturing sector, ransomware is no longer just a threat to data; it is a direct assault on production. The modern cybercriminal's goal is to halt assembly lines, disrupt supply chains, and create maximum operational chaos to force a ransom payment. With production downtime costing millions of dollars per day, manufacturers have become the single most targeted industrial sector, accounting for nearly 70% of all industrial ransomware attacks.1 This new reality demands a paradigm shift in security—one that moves beyond the corporate IT network and builds a resilient defense for the factory floor itself.

This report introduces *The Resilient Factory Framework*, a comprehensive and pragmatic methodology for establishing ransomware readiness tailored specifically to the unique challenges of the manufacturing industry. It is designed for executive leadership, plant managers, and their teams to navigate the complex technical and cultural hurdles of securing modern production environments, particularly those with geographically dispersed plants and a heavy reliance on legacy technology. The framework is built upon three core pillars:

1. **A Standards-Based Foundation:** The framework is anchored in the globally recognized ISA/IEC 62443 series of standards, utilizing its risk-based philosophy to establish a common language and a rigorous methodology for securing Industrial Automation and Control Systems (IACS) that run the factory floor.  
2. **A Practical, Mediated Diagnostic Process:** The framework begins with a hands-on, collaborative diagnostic workshop using the U.S. Cybersecurity and Infrastructure Security Agency's (CISA) Cyber Security Evaluation Tool (CSET) and its Ransomware Readiness Assessment (RRA) module. Guided by a neutral, third-party facilitator, this process helps joint Information Technology (IT) and Operational Technology (OT) teams create a shared, honest baseline of their current capabilities and identify critical vulnerabilities.  
3. **A Focus on Cultural and Organizational Alignment:** The framework explicitly addresses the manufacturing sector's greatest vulnerability: the cultural divide between corporate IT and plant-level OT engineering teams. It provides actionable strategies, including cross-functional workshops and team alignment exercises, designed to break down silos, forge a common language of risk, and establish a federated governance model that respects the operational autonomy of individual plants while ensuring enterprise-wide security.

By following this step-by-step guide, manufacturing organizations can move beyond theoretical compliance to build a tangible, tested, and sustainable program for ransomware resilience. The immediate benefits are derived from collaborative workshops that uncover critical misalignments. The long-term value lies in creating a continuously improving security program that addresses the specific challenges of legacy systems and distributed operations. This framework reframes the ransomware threat not as an unsolvable technical problem, but as a manageable business risk that, when addressed holistically, strengthens production continuity and secures the company's core mission.

---

## **Part I: Foundations of Manufacturing Ransomware Resilience**

This section establishes the foundational context for the framework, detailing the evolution of the ransomware threat in manufacturing environments and introducing the core standards and tools that will be leveraged to build a robust and resilient defense.

### **1.1 The Modern Manufacturing Threat Landscape: From Data Theft to Production Halts**

The definition of a ransomware attack—malware that encrypts files for a ransom—is dangerously incomplete in the context of manufacturing operations. The modern threat landscape has evolved far beyond data theft into a new class of cyber-physical attacks where the primary goal is the disruption of physical processes to exert maximum financial and operational leverage.1 For plant managers and manufacturing executives, understanding this paradigm shift is the first and most critical step toward building an effective defense.

The strategic calculus of ransomware in manufacturing fundamentally shifts from data confidentiality to operational continuity. An analysis of major incidents reveals that the primary objective of threat actors is not merely to encrypt files, but to induce a *loss of control* or a *loss of view* over physical processes, thereby maximizing operational disruption. If operators cannot trust their Human-Machine Interfaces (HMIs) or if Programmable Logic Controllers (PLCs) are executing malicious commands, the risk escalates from data loss to potential equipment damage, production halts, and threats to worker safety.3 This reframes the threat from a traditional cybersecurity issue to a core operational and safety imperative. The critical metric is no longer just the Recovery Time Objective (RTO) for data, but the "Time to Production."

Several high-profile attacks serve as stark illustrations of this new reality:

* Case Study: Norsk Hydro (2019)  
  The attack on Norsk Hydro, a global aluminum manufacturer with operations in 40 countries, demonstrates the catastrophic financial impact of an OT-focused ransomware attack.4 The LockerGoga ransomware variant forced the company to shut down numerous plants and revert to manual operations for weeks.4 The decision not to pay the ransom did not prevent staggering business losses estimated at around $70 million.4 The incident highlights how a single compromised email attachment can propagate across a global enterprise, crippling both IT and OT systems and leading to a prolonged and costly recovery.  
* Case Study: JBS Foods (2021)  
  The attack on the world's largest meat processor was a direct assault on production. The ransomware incident forced the shutdown of multiple meatpacking plants in North America and Australia, halting a significant portion of the world's meat supply.4 To prevent further disruption and the public leakage of stolen data, JBS ultimately paid an $11 million ransom.4 The case exemplifies how attackers target industries where downtime is exceptionally costly, knowing that the pressure to resume operations quickly makes a ransom payment more likely.4  
* Case Study: Mondelez International (2017)  
  The food and beverage giant was hit by the NotPetya malware, which permanently damaged 1,700 servers and 24,000 laptops.4 The attack significantly impacted production facilities around the globe, disrupting the company's ability to fulfill customer orders and resulting in losses of over $100 million.4

Statistical evidence confirms that these are not isolated incidents. The manufacturing sector is disproportionately targeted by ransomware groups, accounting for approximately 70% of all industrial ransomware attacks.1 The financial toll is immense; the average cost to recover from an attack—excluding the ransom itself—often exceeds $1 million, with an average disruption of 21 days.1 Compounding this, threat actors are accelerating their campaigns, with the average time from initial intrusion to ransomware deployment shrinking to less than four days.7

The analysis of these events reveals that the IT/OT boundary is the primary battleground. Initial compromises frequently occur within the more exposed IT network, after which attackers pivot to the OT environment where they can inflict the most significant operational damage. A purely OT-focused security strategy is therefore insufficient. Ransomware readiness must be a converged strategy that treats the IT/OT interface not as a simple firewall, but as a complex, socio-technical system that represents the most probable and impactful attack vector.

### **1.2 Anchoring in Standards: The ISA/IEC 62443 Approach**

In the face of such complex threats, a common framework is essential for building a coherent defense. The ISA/IEC 62443 series of standards provides this foundation.8 It is not a rigid compliance checklist but a strategic, risk-based philosophy for securing Industrial Automation and Control Systems (IACS).8 Crucially, it is designed to be a holistic framework that bridges the gap between IT and OT, as well as between process safety and cybersecurity, making it the ideal "common language" for a converged defense.8

For manufacturing leadership, several core concepts of ISA/IEC 62443 are particularly important:

* **Zones and Conduits:** This is the standard's foundational approach to network segmentation. It involves grouping assets with similar security requirements into logical "zones" (e.g., a specific production line's control network) and defining the controlled communication channels between them as "conduits" (e.g., the firewalled connection to the Manufacturing Execution System).10 In the context of ransomware, which relies on lateral movement to spread, this model creates defensible "islands." A breach in a less-critical zone (e.g., the enterprise IT network) can be contained and prevented from reaching the high-consequence zones.1 The process of defining zones and conduits is a governance exercise, forcing the organization to formally map its operational environment and negotiate the boundaries of responsibility between IT and OT.11  
* **Security Levels (SLs):** The standard defines four Security Levels, which provide a powerful way to translate technical security requirements into a business-level discussion about risk appetite.12 Rather than asking "Are we secure?", the SL model asks, "How sophisticated of an attacker do we need to defend against?".13  
  * **SL 1:** Protection against casual or coincidental violation.12  
  * **SL 2:** Protection against intentional violation using simple means.12  
  * **SL 3:** Protection against intentional violation using sophisticated means.12  
  * **SL 4:** Protection against intentional violation using advanced means with extended resources.12

    By assigning a Target Security Level (SL-T) to each zone, the organization makes an explicit business decision about its risk tolerance. Designating a critical production line's control zone as SL-T 3 acknowledges the need to defend against sophisticated criminal groups, while accepting the risk of an attack from a highly resourced nation-state (SL-4).  
* **Foundational Requirements (FRs):** These are the seven core security capabilities that an IACS must possess, including functions like Identification and Authentication Control, Use Control, and System Integrity.12 The rigor with which these are implemented determines the achieved Security Level (SL-A) of a system.

By adopting this standard, a manufacturing organization can shift its security conversation from subjective arguments to a structured, risk-based dialogue, providing a shared vocabulary for defining security targets and measuring progress.9

### **1.3 From Theory to Practice: The 62443 Risk Assessment Lifecycle**

ISA/IEC 62443-3-2 outlines a practical, two-phase risk assessment process that operationalizes the standard's philosophy.14 This lifecycle provides a resource-efficient workflow for identifying, analyzing, and prioritizing ransomware risks in a manufacturing environment.15

* Phase 1: Initial Risk Assessment (IRA)  
  The IRA (also known as a High-Level Risk Assessment) is designed to rapidly identify the highest-risk areas within the IACS by focusing on the worst-case consequences of a compromise.16 Its methodology simplifies the classic risk equation (  
  Risk=Consequence×Likelihood) by making a critical assumption: **Likelihood is treated as 1**.16 This forces the assessment team to set aside debates about attack probability and focus entirely on potential impact.16  
  This "Likelihood \= 1" assumption is a powerful tool for bridging the IT/OT divide. By assuming the attack *will* happen, the IRA directs the conversation to a topic where both teams have deep expertise: consequence.16 A plant engineer can precisely articulate the operational, financial, and safety impact of a specific controller failing, while the IT security analyst can map that impact back to the broader enterprise risk posture. When adapted for ransomware, the IRA process involves assuming that each critical OT asset (e.g., an HMI, an Engineering Workstation) is successfully encrypted, leading to a quick identification of the operational "crown jewels."  
* Phase 2: Detailed Risk Assessment (DRA)  
  Following the IRA, the DRA provides a more granular analysis of the high-risk zones and assets.16 In this phase,  
  **Likelihood** and existing **Countermeasures** are reintroduced.16 The DRA involves a systematic examination of credible threat vectors (e.g., phishing, insecure remote access from a vendor, supply chain compromise), system vulnerabilities, and the effectiveness of security controls already in place.16  
  For ransomware, the DRA would model specific Tactics, Techniques, and Procedures (TTPs) against high-risk zones. For a zone containing critical Engineering Workstations, the DRA would analyze the likelihood of a phishing email leading to credential compromise and the effectiveness of countermeasures like endpoint detection, network segmentation, and backup and recovery procedures.15

This two-phase approach creates an efficient feedback loop. The IRA prevents "analysis paralysis" by focusing the time-consuming DRA only on the areas of greatest concern. The findings from the DRA then inform the refinement of the Zone and Conduit architecture and the specific security requirements needed to achieve the target Security Levels.16

### **1.4 Establishing a Baseline: The CISA Ransomware Readiness Assessment (RRA)**

While ISA/IEC 62443 provides the formal methodology, a practical starting point is needed. The CISA Cyber Security Evaluation Tool (CSET) and its specific Ransomware Readiness Assessment (RRA) module serve this purpose.17

CSET is a free desktop application from CISA that guides organizations through evaluating their IT and OT security practices.19 The RRA is a purpose-built module within CSET designed as a self-assessment to gauge readiness to defend against and recover from a ransomware incident.20

The RRA's structure organizes questions into a tiered progression of **Basic, Intermediate, and Advanced** practices.22 This allows organizations to assess their posture and develop a logical improvement plan. Upon completion, the tool generates an analysis dashboard with graphs and tables detailing strengths and weaknesses.17

The RRA's primary value is as a *mediated diagnostic tool*. The questionnaire becomes the agenda for a facilitated workshop involving both IT and OT stakeholders. A facilitator guides the team through each question, forcing a discussion and consensus on a single, honest answer. This process is invaluable for uncovering misalignments. For example, when asked about offline backups, the IT team may confidently answer "Yes," only for an OT engineer to point out that critical PLC configurations are not included in the IT-managed backup scope.25

By starting with this facilitated RRA, a manufacturing organization creates a unified, consensus-based snapshot of its current state, ensuring buy-in from the outset and making the final recommendations far more likely to be implemented.17

---

## **Part II: Bridging the Great Divide \- Unifying IT and OT Cultures in Manufacturing**

The most sophisticated technical controls will fail if the people and processes meant to manage them are misaligned. The cultural and operational divide between corporate Information Technology (IT) and plant-level Operational Technology (OT) teams is one of the most significant and persistent challenges in manufacturing cybersecurity. This section deconstructs the root causes of this conflict and provides actionable strategies for building the unified culture necessary for a converged defense.

### **2.1 Different Worlds, Shared Mission: Deconstructing the IT/OT Conflict**

The friction between IT and OT teams is a logical outcome of two distinct professional cultures that have evolved to optimize for fundamentally different objectives.26 Understanding and respecting these differences is the prerequisite for bridging the divide.

* **Conflicting Priorities:** The IT world is governed by the "CIA Triad": Confidentiality, Integrity, and Availability. The primary mission is to protect data. In the OT world of manufacturing, the paramount priorities are Safety and continuous Uptime to maintain production schedules.26 For IT, a server becoming temporarily unavailable is an inconvenience; for OT, a controller becoming unavailable can mean a production shutdown costing millions of dollars per hour or a hazardous event.26  
* **Divergent Risk Perceptions:** IT security professionals manage risk by embracing change, performing frequent scans and applying patches to defend against the latest threats.26 OT engineers, conversely, manage risk by  
  *resisting* change. For them, an unscheduled modification to a running system is a primary source of operational risk. The engineering mantra is "if it isn't broken, don't fix it," leading to a preference for maintaining stable, proven systems.26  
* **Vastly Different Technology Lifecycles:** IT environments evolve rapidly, with 3-5 year hardware and software lifecycles. OT systems, such as PLCs and Distributed Control Systems (DCS), are engineered for longevity, often remaining in service for 20 to 30 years, resulting in a prevalence of legacy systems that cannot be easily patched or secured with modern tools.1  
* **Communication Gaps and Jargon:** The two disciplines speak different languages. An IT professional's "vulnerability scan" is a prudent security measure. To an OT engineer, it is a potentially dangerous action that could generate unexpected network traffic and crash a delicate PLC.26 This gap breeds misunderstanding and mistrust.26  
* **Ambiguous Organizational Ownership:** Historically, OT systems were the exclusive domain of engineering and plant operations.11 As these systems have become networked, the responsibility for their security has become ambiguous.29 Corporate CISOs are often given accountability for OT security without the requisite engineering knowledge, while plant managers who own the operational risk often lack the cybersecurity expertise.

This cultural conflict creates a perfect vulnerability for ransomware adversaries. Attackers leverage the connectivity of the IT environment to gain access, then pivot into the OT environment where static, legacy systems provide fertile ground for causing maximum operational impact.

### **2.2 Forging a Common Language: A Lexicon for Converged Risk**

To overcome these divisions, IT and OT teams must develop a shared vocabulary for discussing risk that focuses on tangible business impact.30 The most effective common language is that of the business mission: ensuring safe, efficient, and continuous production.

Several strategies can help forge this common language:

* **Frame Security in Engineering Terms:** Engineers are trained in systems thinking and risk analysis.31 Security initiatives should be presented in this context. A cyber event should be discussed not in terms of malware TTPs, but how it could cause a process deviation, result in an out-of-spec product, or trip a safety system.32  
* **Translate Controls into Operational Benefits:** "Network segmentation" is IT jargon. "Creating isolated zones to ensure a ransomware attack on the corporate email server cannot shut down the main production line" is an operational benefit an engineer can support.1  
* **Use Standards as a Neutral Framework:** Standards like ISA/IEC 62443 and tools like the CSET RRA provide a structured, neutral vocabulary (e.g., Zones, Conduits, Security Levels) that can be formally adopted.32  
* **Mandate Cross-Functional Training:** IT security staff should receive basic training on industrial processes and safety, while OT engineers should receive training on fundamental cybersecurity threats like phishing.33

The following matrix provides examples of how to reframe common IT security concepts into a converged language focused on business impact in a manufacturing setting.

| IT Term | IT Interpretation | OT Interpretation | Converged Language (Business Impact) |
| :---- | :---- | :---- | :---- |
| **Vulnerability Scanning** | Proactive security hygiene to find flaws. | A dangerous process that can crash sensitive PLCs. | **System Health Check:** A carefully scheduled, non-intrusive process to identify weaknesses that could lead to downtime. |
| **Patch Management** | A routine, critical process to reduce risk. | A high-risk, planned outage that can introduce instability. | **System Modernization:** A managed lifecycle program to ensure critical systems are resilient against known failure modes. |
| **Incident Response** | Isolate, eradicate, recover data. | Maintain safe operations at all costs, even if it means losing forensic data. | **Production Resilience Plan:** A unified plan that prioritizes worker safety, then production stability, then forensic investigation. |
| **Zero Trust** | Assume breach; verify everything. | How can I do that on a 30-year-old PLC? | **Controlled Access:** Ensuring only authorized people and devices can communicate with critical systems, using compensating controls for legacy assets. |

### **2.3 The Principles of Converged Governance**

A shared language must be supported by a formal, converged governance structure that establishes clear ownership for OT security.11 A mature OT security program requires unambiguous executive support and a well-defined governance model that elevates the issue to a C-level strategic priority.30

Given the distributed nature of manufacturing operations, a purely centralized security model is unlikely to succeed. A more effective approach is a **federated governance model** that balances central oversight with local execution:

* **The Central CISO Organization:** Sets the enterprise-wide OT security policy (based on ISA/IEC 62443), manages the overall risk register, provides shared services (like an OT-aware Security Operations Center), and secures funding.  
* **The Plant Manager:** Retains ultimate accountability for the operational risk within their facility, including cyber risk. They are responsible for local implementation of corporate policies and for funding site-specific security controls.  
* **The OT Security Liaison:** A designated role at each major plant who acts as the bridge between the central CISO team and local OT engineering. This individual, often an engineer, is trained by the central team and is responsible for overseeing local security controls and risk assessments.

This federated structure respects local operational autonomy while ensuring a consistent standard of security across the enterprise, creating a scalable model for managing converged IT/OT risk.

---

## **Part III: The Mediated Readiness Framework \- A Step-by-Step Implementation Guide for Manufacturing**

This section provides the practical, step-by-step methodology for implementing the Resilient Factory Framework. It is a phased approach centered on a series of facilitated workshops designed to build consensus, identify risks, and develop an actionable roadmap for improving ransomware readiness.

### **3.1 Phase 1: Preparation and Alignment**

Thorough preparation is the foundation for success. This phase is dedicated to securing buy-in, assembling the right team, and establishing the rules of engagement.

1. **Secure Executive Sponsorship:** The initiative must begin with clear sponsorship from both the IT and OT leadership (e.g., the CIO and COO).30 The project must be framed as a critical business resilience initiative designed to protect production uptime and revenue.30  
2. **Select the Third-Party Facilitator:** The choice of facilitator is critical. The ideal candidate is an expert in mediation and conflict resolution, not necessarily a deep technical expert.35 Their role is to be a neutral guide, creating psychological safety, ensuring all voices are heard, and steering the group toward consensus.35 An external facilitator is often more effective as they are free from internal biases.37  
3. **Form the Cross-Functional Working Group:** The working group must be a true cross-section of stakeholders with deep knowledge of their domains. The core team should include:  
   * **From IT:** IT Security Analysts, Network Architects, Server Administrators.  
   * **From OT:** Control Systems Engineers (ICS/SCADA), Plant Managers or Operations Supervisors, Maintenance Technicians, Process Safety Engineers.  
   * **Leadership:** Representatives from both IT and OT management.30  
4. **Conduct the Kick-off Meeting:** The facilitator leads an initial kick-off meeting to define goals, scope, and timeline. Most importantly, the group co-creates a **"Team Agreement"** or charter, defining the ground rules for interaction and decision-making, which builds ownership from the outset.38

### **3.2 Phase 2: The Diagnostic Workshop \- The Facilitated RRA Session**

This is the first major hands-on exercise, typically a one- or two-day workshop where the facilitator guides the working group through the CISA CSET Ransomware Readiness Assessment (RRA).39 The objective is to use the questionnaire to spark dialogue and build a shared understanding of the current state.39

The workshop process:

* **The Facilitated Assessment:** The facilitator projects the CSET RRA and proceeds question-by-question (e.g., "Are backups for critical OT systems stored offline and tested regularly?").40  
* **Building Consensus:** Members from IT and OT provide their perspectives. The facilitator guides the discussion, asking clarifying questions until the team arrives at a single, honest answer ("Yes," "No," "Partially Implemented") that reflects the true state of the organization.41  
* **Rich Documentation:** A scribe captures not only the final answers but also the key points of the discussion, including areas of disagreement. This qualitative data provides invaluable context.

This process systematically uncovers disconnects between policy and practice. For instance, IT may believe a corporate incident response plan covers the entire enterprise, while OT may reveal it is unworkable on the plant floor due to safety protocols.1

### **3.3 Phase 3: The Risk Correlation Workshop \- Mapping RRA Gaps to 62443 Risk**

This phase translates the practical findings from the RRA into the formal risk management language of ISA/IEC 62443, connecting readiness gaps with specific operational risks.

1. **Identify Critical Gaps:** The team reviews the RRA results to identify the areas with the lowest scores or most contentious discussions.  
2. **Conduct a Simplified IRA:** For each critical gap, the team performs a targeted Initial Risk Assessment (IRA) as defined in ISA/IEC 62443-3-2.16  
   * **Example:** A gap identified in the RRA was the lack of tested, offline backups for OT systems.25  
   * **Asset Identification:** The team identifies the specific critical assets (e.g., the PLCs and HMIs for the primary production line).  
   * **Consequence Analysis:** Applying the IRA's "Likelihood \= 1" principle, the team assumes these assets are irretrievably lost. The OT engineers then describe the worst-case consequence: "The entire plant would be down for an estimated three weeks while we wait for the vendor to fly in and reprogram the controllers from scratch. This would result in $15 million in lost revenue and potential contractual penalties from our key customers."1  
3. **Define Target Security Levels (SL-T):** Based on the severity of the consequence, the team assigns a Target Security Level (SL-T) to the zone containing those assets. A catastrophic financial or safety impact warrants a high SL-T (e.g., SL-3 or SL-4).12

The output is a prioritized list of high-risk zones, each with a clear, business-focused consequence statement and a formally defined SL-T, providing justification for the subsequent roadmap.

### **3.4 Phase 4: The Threat Modeling Workshop \- From Gaps to Scenarios**

This workshop shifts the focus from "what are we protecting?" to "*how* would an attacker compromise it?". This proactive exercise brainstorms credible attack scenarios to inform the development of effective security controls.43

A collaborative threat modeling methodology like **STRIDE** (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) is an excellent choice for a mixed IT/OT audience.44 For OT-specific tactics, the facilitator can also reference the

**MITRE ATT\&CK for ICS** framework.46

The process:

1. **Select a Target:** The facilitator chooses a high-risk zone, for example, the "Process Control Engineering Zone" which contains the Engineering Workstations.48  
2. **Model the System:** The team collaboratively draws a simple data flow diagram of the target system on a whiteboard.45  
3. **Brainstorm Threats using STRIDE:** The facilitator guides the team in brainstorming potential attacks, leveraging both IT and OT perspectives.44  
   * **Spoofing:** IT security can describe how a phishing email could impersonate a PLC vendor. OT engineering can confirm which vendors they work with and what would make such an email look legitimate.49  
   * **Tampering:** IT can explain how malware could modify files. OT can identify the specific PLC logic file that, if altered, could cause the most dangerous physical malfunction (e.g., disabling a safety interlock).3  
   * **Denial of Service:** IT can describe how ransomware encrypts a hard drive. OT can describe the cascading operational impact when the Engineering Workstation is unavailable during a plant upset.1

This process produces a rich list of credible, context-specific threat scenarios for designing "fit-for-purpose" security controls.43

### **3.5 Phase 5: The Roadmap Development Workshop \- Building the Action Plan**

This final workshop synthesizes all preceding work into a prioritized, actionable, and resourced strategic plan.30

1. **Brainstorm Countermeasures:** For each top-priority risk, the group brainstorms potential countermeasures spanning people, process, and technology.50  
   * **Technical Controls:** Implement EDR on workstations; create a secure, segmented network zone for engineering assets; implement a secure remote access solution with MFA for vendors.1  
   * **Procedural Controls:** Develop a formal OT patch management policy; create and test an OT-specific incident response playbook.49  
   * **People Controls:** Conduct targeted phishing awareness training for all plant floor operators and engineers.1  
2. **Prioritize Initiatives:** The team prioritizes countermeasures using a 2x2 matrix of **Impact** vs. **Effort**. Initiatives in the "High Impact, Low Effort" quadrant become immediate priorities.11  
3. **Develop the Roadmap:** The prioritized initiatives are organized into a formal roadmap with short-term, mid-term, and long-term timelines. Each initiative should have a clear description, the business risk it mitigates, a designated owner, required resources, and key success metrics.30

This final document, built with consensus from all key stakeholders, is far more likely to be approved, funded, and successfully implemented.11

---

## **Part IV: A Federated Defense for the Modern Manufacturer**

The manufacturing sector faces a "perfect storm" of cybersecurity challenges, driven by rapid digital transformation merging modern IT with legacy OT across a landscape of geographically dispersed and operationally diverse plants. This makes centralized, one-size-fits-all security governance exceptionally difficult.

* **Primary Challenge: Legacy Systems and Technical Debt:** Many factories rely on critical control systems that are decades old, running on unsupported operating systems.1 These systems often cannot be easily patched or have modern security software installed without significant risk of causing an operational failure.27  
* **Primary Challenge: Distributed and Heterogeneous Operations:** A large manufacturer may operate dozens of plants globally, each with different production lines, equipment from various vendors, and a different plant manager with their own budget and priorities. This heterogeneity makes it impossible to apply a uniform security solution.

**Applying the Framework to Distributed Manufacturing:**

The roadmap for a distributed manufacturing organization must prioritize solutions that can scale across this complex environment and address the legacy system problem without disrupting production.

1. **Prioritize Centralized Visibility and Decentralized Control:** The first step is to answer the fundamental question: "What do we have?" The roadmap must prioritize deploying technologies to build and maintain a comprehensive asset inventory across all plants. Given the sensitivity of OT networks, this should be achieved primarily through **passive network monitoring tools** that can identify assets without intrusive scanning.50 This creates a centralized view for the corporate security team while allowing local plant teams to manage their own environments.  
2. **Focus on Compensating Controls for Legacy Systems:** Since directly hardening legacy systems is often not feasible, the strategy must be to "wrap" them in protective controls.25 This makes the ISA/IEC 62443 model of  
   **Zones and Conduits** the single most important architectural principle.1 The roadmap must focus on:  
   * **Aggressive Network Segmentation:** Isolating critical legacy systems into their own highly restricted network zones to prevent ransomware from spreading to them.  
   * **Hardening the Conduits:** Implementing strict firewall rules, intrusion detection systems, and continuous monitoring on the communication paths that connect these legacy zones to the rest of the network.1  
3. **Develop a "Plant Security Playbook" and a Scalable Rollout Model:** The 5-phase workshop process should be conducted at a representative "model" plant. The detailed roadmap developed for this plant becomes the basis for a standardized but customizable **Plant Security Playbook**. A central corporate team can then act as internal consultants, helping to roll out this playbook to other sites. Each site will have a designated **OT Security Liaison** who leads the local implementation, adapting the playbook to their specific environment. This federated approach allows for consistent security standards while respecting local operational autonomy.

A critical "quick win" for distributed manufacturing often lies in a new, rigorously enforced policy for **secure remote access**. External remote services used by equipment vendors are a primary initial access vector for attackers.49 Implementing a centralized, secure remote access solution that enforces multi-factor authentication and provides time-limited, audited sessions can dramatically reduce the attack surface across all plants.50

---

## **Part V: Sustaining Momentum \- From Project to Program**

Completing the initial workshops and developing a roadmap are significant achievements, but they are only the beginning. Ransomware readiness is not a one-time project; it is a continuous program that must be managed, measured, and improved over time. This final section outlines the key elements required to sustain momentum and embed the Resilient Factory Framework into the organization's operational DNA.

### **5.1 Metrics and Executive Reporting**

To maintain long-term executive support and secure ongoing funding, the progress of the OT security program must be communicated in the language of the business.30 Technical metrics, while important for practitioners, are often meaningless in the boardroom. The program must translate its activities into clear, business-relevant metrics that demonstrate risk reduction and improved resilience.

* **Shift from Technical to Business-Oriented Metrics:** Instead of reporting on the "number of vulnerabilities patched," the program should report on the "percentage reduction in risk to critical production lines." Instead of "firewall rules implemented," the metric should be "number of critical control zones successfully isolated from the corporate network."30  
* **Leverage the RRA as a Strategic Scorecard:** The CISA CSET RRA provides a powerful tool for tracking progress. The initial assessment establishes a quantitative baseline score. Subsequent annual assessments can be used to measure and report on the percentage of improvement, providing a simple, visual way to demonstrate the program's impact to leadership.22  
* **Structure of Executive Reports:** Regular reports to management should be concise and impact-focused, including an executive summary, a dashboard of key metrics, a summary of major risks mitigated, and a forward-looking view of emerging threats and required resources.30

### **5.2 The Annual Cadence: Ransomware Tabletop Exercises (TTX)**

A plan that has not been tested is merely a theory. The most effective way to validate incident response plans, uncover hidden gaps, and build "muscle memory" for a crisis is through a regular, facilitated tabletop exercise (TTX).50 This should be an annual capstone event for the OT security program.

A TTX is a simulated, discussion-based exercise where key stakeholders walk through a realistic ransomware attack scenario in a safe environment. The goal is to test decision-making, communication, and coordination processes under pressure.

* **Participants:** The TTX must involve the cross-functional group from the initial workshops (IT, OT, leadership), expanded to include representatives from Legal, Corporate Communications, and key third-party partners.56  
* **Facilitator's Role:** A skilled facilitator presents the scenario and introduces pre-scripted "injects" to escalate the crisis and force difficult decisions with incomplete information.55  
* **Output:** The primary output is a formal **After-Action Report** that captures what went well, what challenges were encountered, and provides concrete recommendations for improving the incident response plan.57

The following table provides sample, manufacturing-specific injects that could be used in a ransomware TTX.

| Time | Manufacturing Scenario Inject |
| :---- | :---- |
| **08:00** | **Initial Incident:** Operators at Plant A report the HMI for Production Line 1 is frozen, displaying a ransom note. |
| **09:30** | **Escalation:** The IT team confirms ransomware on the Engineering Workstation. The plant manager wants to disconnect the entire plant from the corporate network. The CISO is concerned about losing the ability to investigate. **Decision Point:** Do you disconnect? |
| **11:00** | **Business Impact:** Corporate logistics reports that just-in-time deliveries to a major auto manufacturer will be missed within 24 hours, triggering massive contractual penalties. **Decision Point:** Who communicates with the customer? |
| **13:00** | **Recovery Challenge:** The IT team reports the local backups at Plant A were also encrypted. The only good backups are at the corporate data center, but restoration will take 72 hours. The vendor for the PLC on Line 1 has gone out of business. **Decision Point:** Do you consider paying the ransom? |

### **5.3 Continuous Improvement**

Ransomware readiness is a dynamic capability that must be continuously maintained, aligning with the core principles of the ISA/IEC 62443 security lifecycle: Assess \-\> Implement \-\> Maintain \-\> Assess.9

* **Integrate Lessons Learned:** Findings from the annual RRA and the TTX's After-Action Report must be fed directly back into the program to update risk assessments and refine the strategic roadmap.57  
* **Monitor and Adapt to the Threat Landscape:** The organization must establish a process for consuming threat intelligence from sources like CISA and industry ISACs to regularly update threat models and adapt the security posture to counter the most current threats.49  
* **Invest in Continuous Monitoring:** A foundational element of the "Maintain" phase is the continuous monitoring of the OT network. Technologies that provide deep visibility into OT assets and communications are essential for detecting anomalous activity that could indicate the early stages of a ransomware attack.1

By embracing this cycle of continuous improvement, a manufacturing organization can move from a reactive security posture to a proactive state of resilience, transforming its ransomware readiness program into an enduring strategic advantage.58

## **Conclusion**

The convergence of IT and OT has created unprecedented efficiencies for the manufacturing sector, but it has also erased the traditional air gaps that once protected production lines from cyber threats. Ransomware actors have ruthlessly exploited this new reality, turning the factory floor into a lever for financial extortion.1 The evidence is unequivocal: industrial ransomware is a direct threat to production continuity, supply chain stability, and economic competitiveness.1

Addressing this threat requires a profound shift in strategy. The siloed approaches of the past, where IT managed data and OT managed machines, are no longer viable. The Resilient Factory Framework presented in this report provides a structured, actionable, and sustainable path forward, tailored specifically for the unique challenges of the manufacturing sector. Its methodology is built on the recognition that true resilience is a socio-technical achievement. The most advanced security technologies are of little use if the people and processes governing the IT/OT boundary are misaligned.

Therefore, the core of this framework is a mediated, cross-functional process designed to break down cultural barriers, forge a common language of risk, and build a shared sense of ownership for the security of the entire enterprise.59 By anchoring this collaborative process in the rigorous, risk-based philosophy of ISA/IEC 62443 and using the practical CISA CSET RRA as a diagnostic tool, manufacturing organizations can build a security program that is both technically sound and culturally embedded.9 For the distributed world of manufacturing, this framework becomes a federated model that empowers local plant leadership to execute a global strategy within their unique context.

The journey begins with a single, facilitated conversation. It progresses through the systematic identification of risks, the collaborative modeling of threats, and the joint development of a prioritized roadmap. It is sustained through continuous measurement, regular testing via tabletop exercises, and an unwavering commitment to improvement. For executive leaders in manufacturing, the mandate is clear: champion the cultural convergence of IT and OT. It is the essential prerequisite for building a technical defense capable of withstanding the modern ransomware threat and securing the future of your operations.

#### **Works cited**

1. Behind the Recent Wave of Ransomware Groups Targeting Manufacturing, accessed August 15, 2025, [https://www.manufacturing.net/cybersecurity/blog/22943342/behind-the-recent-wave-of-ransomware-groups-targeting-manufacturing](https://www.manufacturing.net/cybersecurity/blog/22943342/behind-the-recent-wave-of-ransomware-groups-targeting-manufacturing)  
2. Dragos finds ransomware attacks on industrial sector surge 87%, manufacturing hit hardest as OT targeting rises, accessed August 15, 2025, [https://industrialcyber.co/reports/dragos-finds-ransomware-attacks-on-industrial-sector-surge-87-manufacturing-hit-hardest-as-ot-targeting-rises/](https://industrialcyber.co/reports/dragos-finds-ransomware-attacks-on-industrial-sector-surge-87-manufacturing-hit-hardest-as-ot-targeting-rises/)  
3. Manufacturing Cybersecurity \- Palo Alto Networks, accessed August 15, 2025, [https://www.paloaltonetworks.com/industry/unit42-manufacturing](https://www.paloaltonetworks.com/industry/unit42-manufacturing)  
4. Biggest Manufacturing Industry Cyber Attacks | Arctic Wolf, accessed August 15, 2025, [https://arcticwolf.com/resources/blog/top-8-manufacturing-industry-cyberattacks/](https://arcticwolf.com/resources/blog/top-8-manufacturing-industry-cyberattacks/)  
5. Cyber Attack Overview: JBS Foods Ransomware Incident \- Claroty, accessed August 15, 2025, [https://claroty.com/blog/jbs-attack-puts-food-and-beverage-cybersecurity-to-the-test](https://claroty.com/blog/jbs-attack-puts-food-and-beverage-cybersecurity-to-the-test)  
6. Ransomware Attacks in Manufacturing on the Rise \[2024 Report\], accessed August 15, 2025, [https://invenioit.com/continuity/ransomware-attacks-manufacturing/](https://invenioit.com/continuity/ransomware-attacks-manufacturing/)  
7. We must protect our energy industry from cyberattacks – together \- Austin Chamber of Commerce, accessed August 15, 2025, [https://www.austinchamber.com/blog/we-must-protect-our-energy-industry-from-cyberattacks-together](https://www.austinchamber.com/blog/we-must-protect-our-energy-industry-from-cyberattacks-together)  
8. ISA/IEC 62443 Series of Standards, accessed August 15, 2025, [https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards](https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards)  
9. Complete Guide to ISA/IEC 62443-3-2: Risk Assessments for Industrial Automation and Control Systems \- Security Boulevard, accessed August 15, 2025, [https://securityboulevard.com/2024/04/complete-guide-to-isa-iec-62443-3-2-risk-assessments-for-industrial-automation-and-control-systems/](https://securityboulevard.com/2024/04/complete-guide-to-isa-iec-62443-3-2-risk-assessments-for-industrial-automation-and-control-systems/)  
10. Using IEC 62443 to Secure OT Systems: The Ultimate Guide \- Verve Industrial, accessed August 15, 2025, [https://verveindustrial.com/resources/blog/the-ultimate-guide-to-protecting-ot-systems-with-iec-62443/?utm\_campaign=Verve%20Awareness%20Campaign\&utm\_source=hs\_email\&utm\_medium=email&\_hsenc=p2ANqtz-9m4tqgrHbxZ9U0xKUll7L6-R-XHsENZOZy4arjuuOeki4prkvdvrj0Z4M7StPXgczNitPn](https://verveindustrial.com/resources/blog/the-ultimate-guide-to-protecting-ot-systems-with-iec-62443/?utm_campaign=Verve+Awareness+Campaign&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-9m4tqgrHbxZ9U0xKUll7L6-R-XHsENZOZy4arjuuOeki4prkvdvrj0Z4M7StPXgczNitPn)  
11. Need to develop OT cybersecurity programs to bridge IT and engineering cultures, defend from cyber threats, accessed August 15, 2025, [https://industrialcyber.co/features/developing-ot-cybersecurity-programs-to-bridge-it-and-engineering-cultures-defend-industrial-systems-from-cyber-threatsneed-to-develop-ot-cybersecurity-programs-to-bridge-it-and-engineering-cultures/](https://industrialcyber.co/features/developing-ot-cybersecurity-programs-to-bridge-it-and-engineering-cultures-defend-industrial-systems-from-cyber-threatsneed-to-develop-ot-cybersecurity-programs-to-bridge-it-and-engineering-cultures/)  
12. IEC 62443 Standard: Enhancing Cybersecurity for Industrial ..., accessed August 15, 2025, [https://www.fortinet.com/resources/cyberglossary/iec-62443](https://www.fortinet.com/resources/cyberglossary/iec-62443)  
13. The Essential Guide To ISA IEC 62443 \- Waterfall Security Solutions, accessed August 15, 2025, [https://waterfall-security.com/ot-insights-center/ot-cybersecurity-insights-center/the-essential-guide-to-isa-iec-62443/](https://waterfall-security.com/ot-insights-center/ot-cybersecurity-insights-center/the-essential-guide-to-isa-iec-62443/)  
14. Leveraging ISA 62443-3-2 For IACS Risk Assessment and Risk Related Strategies \- NET, accessed August 15, 2025, [https://isaorgwebsite.blob.core.windows.net/media/isa/media/pdf/isagca/gca-leveraging-isa62443-7-wht-paper\_fin.pdf](https://isaorgwebsite.blob.core.windows.net/media/isa/media/pdf/isagca/gca-leveraging-isa62443-7-wht-paper_fin.pdf)  
15. Practical Guide to Performing Risk Assessment as per IEC 62443-3 ..., accessed August 15, 2025, [https://hardhatsecurity.com/2024/05/15/practical-guide-to-performing-high-and-detailed-level-risk-assessment-as-per-iec-62443-3-2-and-nist-800-30/](https://hardhatsecurity.com/2024/05/15/practical-guide-to-performing-high-and-detailed-level-risk-assessment-as-per-iec-62443-3-2-and-nist-800-30/)  
16. Cybersecurity Risk Assessment According to ISA/IEC 62443-3-2, accessed August 15, 2025, [https://gca.isa.org/blog/cybersecurity-risk-assessment-according-to-isa-iec-62443-3-2](https://gca.isa.org/blog/cybersecurity-risk-assessment-according-to-isa-iec-62443-3-2)  
17. U.S. targets ransomware with readiness self-assessment module in CSET tool, accessed August 15, 2025, [https://industrialcyber.co/news/u-s-targets-ransomware-with-readiness-self-assessment-module-in-cset-tool/](https://industrialcyber.co/news/u-s-targets-ransomware-with-readiness-self-assessment-module-in-cset-tool/)  
18. CISA Releases Ransomware Readiness Assessment Tool for Assessing Organizations' Cybersecurity Posture \- CPO Magazine, accessed August 15, 2025, [https://www.cpomagazine.com/cyber-security/cisa-releases-ransomware-readiness-assessment-tool-for-assessing-organizations-cybersecurity-posture/](https://www.cpomagazine.com/cyber-security/cisa-releases-ransomware-readiness-assessment-tool-for-assessing-organizations-cybersecurity-posture/)  
19. Cyber Security Evaluation Tool (CSET) \- CISA, accessed August 15, 2025, [https://www.cisa.gov/resources-tools/services/cyber-security-evaluation-tool-cset](https://www.cisa.gov/resources-tools/services/cyber-security-evaluation-tool-cset)  
20. US CISA releases a Ransomware Readiness Assessment (RRA) tool \- Security Affairs, accessed August 15, 2025, [https://securityaffairs.com/119568/security/cisa-ransomware-readiness-assessment.html](https://securityaffairs.com/119568/security/cisa-ransomware-readiness-assessment.html)  
21. Services \- CISA, accessed August 15, 2025, [https://www.cisa.gov/stopransomware/services](https://www.cisa.gov/stopransomware/services)  
22. Ransomware Readiness Assessment \- Centraleyes, accessed August 15, 2025, [https://www.centraleyes.com/ransomware-readiness-assessment/](https://www.centraleyes.com/ransomware-readiness-assessment/)  
23. CISA releases new ransomware self-assessment security audit tool \- Bleeping Computer, accessed August 15, 2025, [https://www.bleepingcomputer.com/news/security/cisa-releases-new-ransomware-self-assessment-security-audit-tool/](https://www.bleepingcomputer.com/news/security/cisa-releases-new-ransomware-self-assessment-security-audit-tool/)  
24. CISA's CSET Now Includes Module for Assessing Ransomware Readiness | WaterISAC, accessed August 15, 2025, [https://www.waterisac.org/portal/cisa%E2%80%99s-cset-now-includes-module-assessing-ransomware-readiness](https://www.waterisac.org/portal/cisa%E2%80%99s-cset-now-includes-module-assessing-ransomware-readiness)  
25. How Modern Manufacturing Plants Can Protect Against Ransomware, Cyberattacks, accessed August 15, 2025, [https://www.jacksonlewis.com/insights/how-modern-manufacturing-plants-can-protect-against-ransomware-cyberattacks](https://www.jacksonlewis.com/insights/how-modern-manufacturing-plants-can-protect-against-ransomware-cyberattacks)  
26. Top 5 Key Cultural Differences Between IT and OT | OTIFYD ..., accessed August 15, 2025, [https://otifyd.com/blog/top-5-key-cultural-differences-between-it-and-ot/](https://otifyd.com/blog/top-5-key-cultural-differences-between-it-and-ot/)  
27. Impact of modern ransomware on manufacturing networks \- LevelBlue, accessed August 15, 2025, [https://levelblue.com/blogs/security-essentials/impact-of-modern-ransomware-on-manufacturing-networks](https://levelblue.com/blogs/security-essentials/impact-of-modern-ransomware-on-manufacturing-networks)  
28. The State of Ransomware in the Manufacturing Sector \- Cybereason, accessed August 15, 2025, [https://www.cybereason.com/blog/the-state-of-ransomware-in-the-manufacturing-sector](https://www.cybereason.com/blog/the-state-of-ransomware-in-the-manufacturing-sector)  
29. Cultural divide between IT and OT teams affect organizational ability to protect the cybersecurity sector \- Industrial Cyber, accessed August 15, 2025, [https://industrialcyber.co/threats-attacks/cultural-divide-between-it-and-ot-teams-affect-organizational-ability-to-protect-the-cybersecurity-sector/](https://industrialcyber.co/threats-attacks/cultural-divide-between-it-and-ot-teams-affect-organizational-ability-to-protect-the-cybersecurity-sector/)  
30. 5 key cybersecurity strategies for manufacturing executives | Google Cloud Blog, accessed August 15, 2025, [https://cloud.google.com/transform/5-key-cybersecurity-strategies-manufacturing-executives](https://cloud.google.com/transform/5-key-cybersecurity-strategies-manufacturing-executives)  
31. 5 Valuable Engineering Skillsets for Policy, accessed August 15, 2025, [https://www.highimpactengineers.org/blog/5-valuable-engineering-skillsets-for-policy](https://www.highimpactengineers.org/blog/5-valuable-engineering-skillsets-for-policy)  
32. Rethinking OT cybersecurity training as operators remain ..., accessed August 15, 2025, [https://industrialcyber.co/features/rethinking-ot-cybersecurity-training-as-operators-remain-unprepared-for-converged-escalating-threat-landscape/](https://industrialcyber.co/features/rethinking-ot-cybersecurity-training-as-operators-remain-unprepared-for-converged-escalating-threat-landscape/)  
33. Bridging the IT/OT gap: cybersecurity training for manufacturing \- CyberSmart, accessed August 15, 2025, [https://cybersmart.co.uk/2025/06/bridging-the-it-ot-gap-cybersecurity-training-for-manufacturing/](https://cybersmart.co.uk/2025/06/bridging-the-it-ot-gap-cybersecurity-training-for-manufacturing/)  
34. Stop OT Disruptions: 5 Ways to Improve Your Operational Technology Security \- CyberProof, accessed August 15, 2025, [https://www.cyberproof.com/blog/stop-ot-disruptions-5-ways-to-improve-your-operational-technology-security/](https://www.cyberproof.com/blog/stop-ot-disruptions-5-ways-to-improve-your-operational-technology-security/)  
35. Facilitator \- APMG International, accessed August 15, 2025, [https://apmg-international.com/article/facilitator](https://apmg-international.com/article/facilitator)  
36. A Handy Guide to Facilitation \- NHS England, accessed August 15, 2025, [https://www.england.nhs.uk/improvement-hub/wp-content/uploads/sites/44/2017/11/2010\_handy\_guide\_to\_facilitation\_final\_\_low-res\_-1.pdf](https://www.england.nhs.uk/improvement-hub/wp-content/uploads/sites/44/2017/11/2010_handy_guide_to_facilitation_final__low-res_-1.pdf)  
37. Why You Need a Third-Party Assessment for Cybersecurity \- A-LIGN, accessed August 15, 2025, [https://www.a-lign.com/articles/why-you-need-a-third-party-assessment-for-cybersecurity](https://www.a-lign.com/articles/why-you-need-a-third-party-assessment-for-cybersecurity)  
38. Facilitation Techniques \- When to Use and Why \- Zen Ex Machina, accessed August 15, 2025, [https://zenexmachina.com/facilitation-techniques-when-to-use-and-why/](https://zenexmachina.com/facilitation-techniques-when-to-use-and-why/)  
39. Introduction to CSET (CISA's Cyber Assessment Tool) & Ransomware Readiness Assessment \- Arkansas Department of Shared Administrative Services, accessed August 15, 2025, [https://sas.arkansas.gov/events/introduction-to-cset-cisas-cyber-assessment-tool-ransomware-readiness-assessment-2/](https://sas.arkansas.gov/events/introduction-to-cset-cisas-cyber-assessment-tool-ransomware-readiness-assessment-2/)  
40. Schellman's CSET Ransomware Guide, accessed August 15, 2025, [https://www.schellman.com/hubfs/whitepapers/schellmans-cset-ransomware-guide.pdf](https://www.schellman.com/hubfs/whitepapers/schellmans-cset-ransomware-guide.pdf)  
41. A novel taxonomy for facilitating in-depth comparison of continuing engineering education practices \- Frontiers, accessed August 15, 2025, [https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1444595/full](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1444595/full)  
42. Bridging the Gap: Collaboration between Systems Engineers and Architects | MoldStud, accessed August 15, 2025, [https://moldstud.com/articles/p-bridging-the-gap-collaboration-between-systems-engineers-and-architects](https://moldstud.com/articles/p-bridging-the-gap-collaboration-between-systems-engineers-and-architects)  
43. Threat Modeling \- OWASP Cheat Sheet Series, accessed August 15, 2025, [https://cheatsheetseries.owasp.org/cheatsheets/Threat\_Modeling\_Cheat\_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)  
44. Threat Modeling Process \- OWASP Foundation, accessed August 15, 2025, [https://owasp.org/www-community/Threat\_Modeling\_Process](https://owasp.org/www-community/Threat_Modeling_Process)  
45. Threat Modeling Guide for Software Teams \- Martin Fowler, accessed August 15, 2025, [https://martinfowler.com/articles/agile-threat-modelling.html](https://martinfowler.com/articles/agile-threat-modelling.html)  
46. Threat Modelling \- Risk management \- National Cyber Security Centre, accessed August 15, 2025, [https://www.ncsc.gov.uk/collection/risk-management/threat-modelling](https://www.ncsc.gov.uk/collection/risk-management/threat-modelling)  
47. MITRE ATT\&CK for ICS Detections in the Dragos Platform, accessed August 15, 2025, [https://www.dragos.com/mitre-attack-for-ics/](https://www.dragos.com/mitre-attack-for-ics/)  
48. White Papers 2025 Threat Modeling Revisited \- ISACA, accessed August 15, 2025, [https://www.isaca.org/resources/white-papers/2025/threat-modeling-revisited](https://www.isaca.org/resources/white-papers/2025/threat-modeling-revisited)  
49. Cybersecurity in Manufacturing: Threats, Trends, and Preparation, accessed August 15, 2025, [https://www.forescout.com/blog/cybersecurity-in-manufacturing-threats-trends-and-preparation/](https://www.forescout.com/blog/cybersecurity-in-manufacturing-threats-trends-and-preparation/)  
50. Cybersecurity in Manufacturing: IT, OT Is Everyone's Job | Shipman & Goodwin LLP, accessed August 15, 2025, [https://www.shipmangoodwin.com/insights/cybersecurity-in-manufacturing-it-ot-is-everyones-job.html](https://www.shipmangoodwin.com/insights/cybersecurity-in-manufacturing-it-ot-is-everyones-job.html)  
51. Recommended Cybersecurity Practices for Industrial Control ... \- CISA, accessed August 15, 2025, [https://www.cisa.gov/sites/default/files/publications/Cybersecurity\_Best\_Practices\_for\_Industrial\_Control\_Systems.pdf](https://www.cisa.gov/sites/default/files/publications/Cybersecurity_Best_Practices_for_Industrial_Control_Systems.pdf)  
52. OT CYBERSECURITY \- Reddit, accessed August 15, 2025, [https://www.reddit.com/r/cybersecurity/comments/1le0eb7/ot\_cybersecurity/](https://www.reddit.com/r/cybersecurity/comments/1le0eb7/ot_cybersecurity/)  
53. Securing the Future: A Comprehensive Guide to OT Cybersecurity, accessed August 15, 2025, [https://blackbear-ics.com/comprehensive-guide-ot-cybersecurity/](https://blackbear-ics.com/comprehensive-guide-ot-cybersecurity/)  
54. How do you guys handle a facility's cybersecurity? : r/PLC \- Reddit, accessed August 15, 2025, [https://www.reddit.com/r/PLC/comments/1b39r7p/how\_do\_you\_guys\_handle\_a\_facilitys\_cybersecurity/](https://www.reddit.com/r/PLC/comments/1b39r7p/how_do_you_guys_handle_a_facilitys_cybersecurity/)  
55. How a Ransomware Tabletop Exercise Can Dramatically Reduce Your Losses If You're Attacked | LMG Security, accessed August 15, 2025, [https://www.lmgsecurity.com/how-a-ransomware-tabletop-exercise-can-dramatically-reduce-your-losses-if-youre-attacked/](https://www.lmgsecurity.com/how-a-ransomware-tabletop-exercise-can-dramatically-reduce-your-losses-if-youre-attacked/)  
56. Ransomware Tabletop \- Think|Stack, accessed August 15, 2025, [https://www.thinkstack.co/ransomware-ttx](https://www.thinkstack.co/ransomware-ttx)  
57. How to Run a Ransomware Tabletop Exercise \[+ Scenarios\] \- AlertMedia, accessed August 15, 2025, [https://www.alertmedia.com/blog/ransomware-tabletop-exercise/](https://www.alertmedia.com/blog/ransomware-tabletop-exercise/)  
58. Guide: Complete Guide to the NIST Cybersecurity Framework \- ZenGRC, accessed August 15, 2025, [https://www.zengrc.com/resources/guide/guide-complete-guide-to-the-nist-cybersecurity-framework/](https://www.zengrc.com/resources/guide/guide-complete-guide-to-the-nist-cybersecurity-framework/)  
59. IT vs OT Explained: Differences, Integration Challenges, and Convergence Strategies, accessed August 15, 2025, [https://verveindustrial.com/resources/blog/it-vs-ot-explained-differences-integration-challenges-and-convergence-strategies/](https://verveindustrial.com/resources/blog/it-vs-ot-explained-differences-integration-challenges-and-convergence-strategies/)