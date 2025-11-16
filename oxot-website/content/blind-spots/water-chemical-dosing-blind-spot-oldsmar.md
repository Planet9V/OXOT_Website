# Water's Deadly Blind Spot: Chemical Dosing Systems and the Oldsmar Near-Miss

## Metadata
```json
{
  "id": "water-chemical-dosing-blind-spot-oldsmar",
  "title": "Water's Deadly Blind Spot: Chemical Dosing Systems and the Oldsmar Near-Miss",
  "sector": "Water/Wastewater",
  "blindSpotCategory": "Public Safety",
  "severity": "CRITICAL",
  "wordCount": 1100,
  "downloadable": "Chemical Dosing Security Checklist",
  "readTime": "6 min",
  "lastUpdated": "2025-11-16"
}
```

---

## The Blind Spot: What Water Utilities Don't See

Every day, water treatment operators make life-or-death decisions about the chemicals that flow into their communities' drinking water. Chlorine for disinfection. Fluoride for dental health. Sodium hydroxide (lye) for pH adjustment. Coagulants for removing particulates. These automated chemical dosing systems are the invisible guardians of public health—and they represent the most dangerous blind spot in water utility cybersecurity.

The paradox is striking: water utilities invest heavily in monitoring water quality—tracking turbidity, pH levels, chlorine residuals, and pathogen counts with sophisticated laboratory equipment and real-time sensors. State and federal regulators mandate rigorous testing protocols. Operators receive extensive training on water chemistry and treatment processes. Yet the digital control systems that actually inject these chemicals into the water supply often receive minimal security scrutiny.

Chemical dosing systems in most municipal water treatment facilities operate with a level of automation and remote accessibility that would alarm cybersecurity professionals in other sectors. Remote access software like TeamViewer, installed for vendor support and after-hours monitoring, provides direct pathways to SCADA systems controlling chemical pumps. Default passwords remain unchanged on Human-Machine Interfaces (HMIs) that can adjust dosing rates with a few mouse clicks. Outdated Windows operating systems—some still running Windows 7 or even Windows XP—lack critical security patches because "patching might interfere with treatment operations."

For small and mid-sized water utilities serving communities of 3,300 to 50,000 people, the challenge is particularly acute. These facilities rarely employ dedicated cybersecurity staff. The water treatment plant operator—often a small team of 2-5 people—manages everything from equipment maintenance to regulatory compliance to emergency response. Cybersecurity competes with dozens of other priorities, all critical to maintaining safe drinking water. When a system integrator or equipment vendor says "you need remote access enabled for us to provide support," the answer is almost always yes. The alternative—losing vendor support for mission-critical treatment equipment—is unthinkable.

The result is a systemic vulnerability hidden in plain sight. Water utilities focus on what comes out of the tap, not on who can access the systems controlling what goes into it. Chemical dosing equipment operates reliably, day after day, year after year—until the day an attacker discovers that same remote access pathway.

## The Oldsmar Incident: A 60-Second Attack That Could Have Poisoned Thousands

On February 5, 2021, at approximately 1:30 PM, an operator at the Oldsmar Water Treatment Facility in Pinellas County, Florida, noticed something unusual: his computer mouse was moving on its own. Someone had gained remote access to his workstation. The operator watched as the unknown user navigated through the SCADA system's Human-Machine Interface, opening screens and accessing controls.

Then the intruder made a change that could have resulted in mass casualties. The attacker increased the sodium hydroxide (lye) dosing setpoint from 100 parts per million (ppm) to 11,100 ppm—a 100-fold increase. At that concentration, sodium hydroxide transforms from a routine pH adjustment chemical into a poison capable of causing severe chemical burns, corrosive damage to the esophagus and digestive tract, and potentially fatal injuries to anyone who consumed the contaminated water.

The attack lasted less than five minutes. The operator immediately reversed the change, preventing any contaminated water from reaching the distribution system. Pinellas County serves approximately 15,000 residents through the Oldsmar facility. If that operator hadn't been watching his screen at that exact moment—if the attack had occurred during off-hours when the plant ran on automated control—thousands of people could have been poisoned.

The subsequent investigation revealed a cascade of security failures, each individually defensible, but collectively catastrophic:

**TeamViewer Remote Access:** The facility used TeamViewer, a legitimate remote desktop application, to allow operators and vendors to access the SCADA system remotely. TeamViewer was installed on the same computer that directly controlled chemical dosing pumps—no network segmentation, no jump server, no multi-factor authentication. The software ran continuously, providing a persistent access point.

**Shared Passwords:** Multiple current and former employees, contractors, and vendors shared the same TeamViewer password. There was no way to determine who had legitimate access and who didn't. When employees left or vendor contracts ended, the credentials weren't revoked.

**Outdated Operating System:** The SCADA computer ran Windows 7, an operating system that Microsoft had ended support for in January 2020—more than a year before the attack. The system lacked current security patches and was vulnerable to known exploits.

**No Network Segmentation:** The compromised computer had direct access to chemical dosing controls. There were no intermediate security layers, no requirement for elevated privileges to make critical changes, and no segregation between monitoring functions and control functions.

**Insufficient Monitoring and Alerting:** The only reason the attack was detected was because an operator happened to be watching his screen. There were no automated alerts for unauthorized access attempts, no logging of configuration changes, and no anomaly detection for chemical dosing rate changes that exceeded normal operational parameters.

The Oldsmar attack wasn't sophisticated. It didn't exploit a zero-day vulnerability or involve nation-state malware. It used basic remote access credentials—likely obtained from a former employee or contractor—to make a simple configuration change. Yet it came within minutes of becoming the deadliest cyberattack on U.S. critical infrastructure in history.

## Why Chemical Dosing Systems Are High-Risk Targets

Chemical dosing systems represent a uniquely dangerous attack surface in water treatment infrastructure because they combine three critical factors: direct public harm potential, minimal operator oversight, and widespread security vulnerabilities.

**Direct Path to Public Harm:** Unlike attacks that cause operational disruption or equipment damage, chemical dosing manipulation can directly poison the water supply. Excessive chlorine can cause respiratory distress and chemical burns. Insufficient chlorine allows pathogens to survive disinfection. Sodium hydroxide at high concentrations is corrosive. Fluoride, essential in small doses, becomes toxic at elevated levels. An attacker doesn't need to understand complex industrial processes—they simply need to change a number in a SCADA screen.

**Automated Operation with Minimal Human Oversight:** Modern chemical dosing systems operate largely on autopilot. PLCs continuously monitor water flow rates, adjust chemical feed pumps proportionally, and make dosing corrections based on real-time sensor feedback. During overnight and weekend hours, many small water plants operate unattended, relying entirely on automated controls and alarm systems to notify operators if something goes wrong. This automation is a marvel of engineering efficiency—and a cybersecurity nightmare. An attacker who gains access during off-hours can make changes that won't be noticed until contaminated water has already entered the distribution system.

**Legacy Systems and Default Configurations:** Water treatment equipment has operational lifespans measured in decades. SCADA systems installed in 2005-2010 are still running on their original Windows XP or Windows 7 operating systems because "the system works and we can't risk downtime for upgrades." PLCs and HMI panels ship with default passwords that are publicly documented in vendor manuals available online. These defaults are rarely changed because operators don't realize they can be changed, or because vendors warn that "modifying the configuration will void your warranty."

**Remote Access for Vendor Support:** Water utilities depend on equipment vendors and system integrators for specialized technical support. When a chemical feed pump malfunctions or a PLC throws an error code, the vendor needs remote access to diagnose the problem. This operational reality—vendor remote access is a necessary service, not an optional convenience—creates persistent security vulnerabilities. Many utilities provide vendors with always-on VPN connections or remote desktop credentials that are never deactivated, even when support contracts end.

**Sensors Can Be Spoofed:** An advanced attacker can manipulate not just the chemical dosing pumps, but also the sensors that monitor chemical levels, creating a false feedback loop. If the chlorine residual sensor reports normal levels even as the actual chlorine concentration drops to zero, operators have no reason to suspect a problem until customers start reporting illness. This sensor spoofing attack requires more sophistication than simple dosing changes, but the techniques are well-documented in industrial control system (ICS) research.

## The Regulatory Gap: Security Mandates Don't Exist

The regulatory framework governing drinking water security focuses almost exclusively on what is in the water, not on how the systems that control treatment are secured. This creates a fundamental misalignment between compliance and actual risk.

**EPA Authority Ends at Water Quality:** The Environmental Protection Agency (EPA), under the Safe Drinking Water Act, has broad authority to regulate contaminant levels, treatment techniques, and water quality monitoring. EPA can mandate how much chlorine must be in the water, but it has no regulatory authority over the cybersecurity of the SCADA systems that control chlorination. The America's Water Infrastructure Act (AWIA) of 2018 requires water systems serving more than 3,300 people to conduct risk and resilience assessments—but these assessments are self-certified, not audited, and there are no mandated security controls that must be implemented.

**State Requirements Vary Widely:** Some states, recognizing the gap in federal oversight, have implemented their own cybersecurity requirements for water utilities. California, for instance, requires water systems to implement specific cybersecurity practices as part of their risk assessment process. Other states have no requirements whatsoever. A water utility in one state may be required to implement multi-factor authentication and network segmentation, while an identical facility across the state border operates with no security mandates.

**Voluntary Frameworks Lack Enforcement:** The American Water Works Association (AWWA) publishes excellent cybersecurity guidance, including the J100 standard for Risk and Resilience Management of Water and Wastewater Systems. These are best practices, not requirements. Utilities that follow AWWA guidance do so voluntarily, often driven by the personal commitment of forward-thinking operators and managers rather than regulatory obligation.

**Small Utilities Are Exempt from Most Requirements:** Many cybersecurity frameworks and regulatory proposals include exemptions for small utilities based on population served or system complexity. The rationale is understandable—small utilities lack the resources and staff to implement enterprise-grade cybersecurity programs. But exempting small utilities from security requirements doesn't make them less vulnerable; it just means they remain unprotected. The Oldsmar facility served 15,000 people and would be considered "small" under many regulatory definitions.

**TSA Pipeline Security Doesn't Cover Water:** Following the Colonial Pipeline ransomware attack in May 2021, the Transportation Security Administration (TSA) issued Security Directive 2021-01, mandating cybersecurity requirements for pipeline operators. This directive requires incident reporting, cybersecurity assessments, and implementation of specific mitigation measures. Water utilities, despite facing similar threats and consequences, have no equivalent federal security mandate.

## Closing the Blind Spot: Actionable Steps for Water Utilities

Addressing chemical dosing system security doesn't require unlimited budgets or large cybersecurity teams. It requires a systematic, risk-based approach that acknowledges operational realities and prioritizes the highest-impact controls.

**Inventory All Chemical Dosing Systems and Their Network Connections:** You cannot protect what you cannot see. Create a comprehensive inventory of every chemical dosing system in your facility—chlorination, fluoridation, pH adjustment, coagulation—and document every network connection. Which systems connect to SCADA? Which PLCs control which chemical pumps? What computers have configuration access? Which vendor remote access tools are installed? This inventory should be maintained in a simple spreadsheet and updated whenever changes are made to the treatment process or control systems.

**Eliminate Direct Remote Access to SCADA Systems:** Direct remote access via TeamViewer, Remote Desktop Protocol (RDP), or VNC to computers that control chemical dosing is indefensible. Implement a secure remote access architecture: require VPN with multi-factor authentication for any external connection, use jump boxes (dedicated, hardened servers) as an intermediary layer between external access and SCADA systems, and log all remote access sessions with alerts for access outside business hours. For vendor support, use time-limited credentials that expire after a support session ends, not persistent always-on access.

**Implement Chemical Dosing Alarm Thresholds:** Configure your SCADA system to generate immediate alarms when chemical dosing rates exceed normal operational ranges. If your sodium hydroxide dosing typically runs at 100 ppm with minor adjustments between 90-110 ppm, set alarm thresholds at 120 ppm (warning) and 150 ppm (critical). These alarms should notify operators via text message and email, not just appear on a SCADA screen that may not be monitored during off-hours. Document your normal operational ranges and review them quarterly.

**Conduct Tabletop Exercises Simulating Chemical Dosing Attacks:** The best security technology is useless if operators don't know how to respond during an incident. Conduct quarterly tabletop exercises where you simulate a chemical dosing attack scenario: "An operator reports that the chlorine dosing setpoint changed unexpectedly. What do you do? Who do you call? How do you verify whether water in the distribution system is safe?" Walk through the decision-making process, identify gaps in procedures, and document lessons learned. This doesn't cost money—it costs time and attention.

**Operator Training on Recognizing Suspicious System Behavior:** Your operators are your first line of defense. Train them to recognize indicators of compromise: unexpected mouse movements, configuration screens opening on their own, chemical dosing changes they didn't initiate, unusual remote access notifications. Create a simple "if you see something, say something" protocol with a clear escalation path. Operators should know that reporting suspicious activity is a priority action, not an interruption to their daily work.

**Network Segmentation: Isolate Chemical Dosing Controls:** Implement basic network segmentation to separate critical chemical dosing controls from general-purpose IT networks and less-critical OT systems. This doesn't require expensive enterprise firewalls—many utilities can achieve meaningful segmentation with properly configured VLANs and basic industrial firewalls. The goal is to ensure that an attacker who compromises a less-critical system (like a building automation system) cannot easily pivot to chemical dosing controls.

**Vendor Access Controls: Time-Limited, Logged, and Monitored:** Establish a formal vendor access management process. When a vendor requires remote access for support, issue temporary credentials valid only for the duration of the support session. Require vendors to request access in advance (except for genuine emergencies). Log all vendor access sessions and review logs monthly. Include cybersecurity requirements in vendor contracts, specifying acceptable access methods, prohibition of default passwords, and vendor responsibility for maintaining security of their remote access tools.

---

## Call to Action

**OXOT Free Water/Wastewater Security Assessment:** Protecting your community's water supply starts with understanding your current security posture. OXOT offers a complimentary, no-obligation security assessment specifically designed for water and wastewater utilities. Our team of OT cybersecurity specialists—who understand both water treatment operations and industrial control system security—will conduct a focused review of your chemical dosing systems, SCADA architecture, and remote access controls. You'll receive a prioritized roadmap of risks and actionable recommendations tailored to your operational constraints and budget realities.

**Download: Chemical Dosing System Security Checklist:** Get immediate value with our comprehensive 10-point checklist (below) that water utility operators and managers can use to evaluate and improve the security of chemical treatment systems. This practical tool is based on real-world water sector cybersecurity assessments and designed for facilities with limited cybersecurity resources.

**CISA ICS-CERT Resources for Water Utilities:** The Cybersecurity and Infrastructure Security Agency (CISA) maintains extensive resources for water sector cybersecurity, including incident response support, vulnerability advisories, and best practice guidance. Visit [CISA's Water and Wastewater Systems Sector page](https://www.cisa.gov/water-and-wastewater-systems-sector) for free tools and support.

---

## Chemical Dosing System Security Checklist for Water Utilities

### Authentication & Access Control
- ✓ **Change All Default Passwords:** Eliminate factory default passwords on all HMIs, PLCs, SCADA servers, and chemical dosing controllers. Document new passwords in a secure, offline password vault.
- ✓ **Disable Direct Remote Desktop Access:** Remove or disable TeamViewer, RDP, VNC, and other remote desktop tools installed directly on SCADA computers. Require VPN + jump box architecture for remote access.
- ✓ **Implement Role-Based Access Control:** Not every user needs configuration access. Create separate operator and engineer accounts with appropriate privilege levels.

### Monitoring & Alerting
- ✓ **Set Chemical Dosing Alarm Thresholds:** Configure SCADA alarms for chemical dosing rates that exceed normal operational ranges. Ensure alarms notify operators via text/email, not just on-screen.
- ✓ **Enable Configuration Change Logging:** Activate audit logging on PLCs and HMIs to record who made changes, when, and what was changed. Review logs monthly for unexpected modifications.
- ✓ **Monitor Remote Access Sessions:** Log all VPN connections, remote desktop sessions, and vendor access. Investigate any access attempts outside normal business hours.

### Network Security
- ✓ **Segment Chemical Dosing Systems from IT Network:** Implement basic network segmentation (VLANs at minimum) to isolate chemical dosing controls from office networks and internet connections.
- ✓ **Deploy Industrial Firewall at OT/IT Boundary:** Install a firewall between your SCADA network and enterprise IT network, configured with whitelisted allowed connections only.

### Vendor & Third-Party Management
- ✓ **Time-Limit Vendor Access Credentials:** Require vendors to request access for specific support sessions. Issue temporary credentials that expire after 24-48 hours. Disable always-on vendor VPN connections.
- ✓ **Include Cybersecurity Requirements in Contracts:** Specify in vendor contracts that equipment must not use default passwords, remote access requires MFA, and security patches will be provided within established timeframes.

---

## Assessment Tool: Is Your Utility at Risk?

Answer these questions to evaluate your chemical dosing system security posture:

1. Can you remote access your SCADA system using software installed directly on the SCADA server? **(If yes: HIGH RISK)**
2. Are you still using Windows 7 or older operating systems on any SCADA or HMI computers? **(If yes: HIGH RISK)**
3. Do current or former vendors have persistent VPN or remote access credentials that were never revoked? **(If yes: HIGH RISK)**
4. If your chlorine dosing suddenly increased to 10x normal levels, would you receive an automatic alarm? **(If no: HIGH RISK)**
5. Do you know the default passwords for your PLCs and HMIs, and have they been changed? **(If no: CRITICAL RISK)**

If you answered "yes" to questions 1-3 or "no" to questions 4-5, your facility has vulnerabilities similar to those exploited in the Oldsmar attack. Prioritize addressing these gaps immediately.

---

**About This Blind Spot Series:** OXOT's Blind Spot articles reveal the overlooked vulnerabilities and underestimated risks in critical infrastructure cybersecurity—the things you don't know you don't know. Each article provides operational context, threat analysis, real-world consequences, and actionable mitigation strategies based on deep vertical expertise in Energy, Manufacturing, Water, and Transportation sectors.

**Ready to close your chemical dosing security blind spot? Contact OXOT for a complimentary water utility security consultation.**
