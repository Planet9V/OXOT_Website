import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './IndustriesPage.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * IndustriesPage - Comprehensive sector expertise showcase
 *
 * Deep-dive into four critical infrastructure sectors with vertical expertise,
 * threat landscapes, architectural patterns, and OXOT's specialized capabilities.
 *
 * Featured: Jim McKenney's grid stability analysis for Energy sector
 */
const IndustriesPage = () => {
  const sectorCardsRef = useRef([]);
  const subsectorCardsRef = useRef([]);

  useEffect(() => {
    // Animate sector cards on scroll
    sectorCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // Animate subsector cards
    subsectorCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="industries-hero__container">
          <div className="industries-hero__badge">SECTOR EXPERTISE</div>
          <h1 className="industries-hero__title">
            Deep Vertical Knowledge for Critical Infrastructure Protection
          </h1>
          <p className="industries-hero__subtitle">
            OXOT brings specialized cybersecurity expertise to the sectors that power modern society.
            Our deep understanding of operational technologies, industrial protocols, regulatory frameworks,
            and threat landscapes enables us to deliver solutions that address the unique challenges of
            Energy, Manufacturing, Water, and Transportation infrastructure.
          </p>

          <div className="industries-hero__stats">
            <div className="hero-stat">
              <div className="hero-stat__value">4</div>
              <div className="hero-stat__label">Critical Sectors</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__value">IEC 62443</div>
              <div className="hero-stat__label">Standards Authority</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__value">OT/ICS</div>
              <div className="hero-stat__label">Core Expertise</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__value">24/7</div>
              <div className="hero-stat__label">Threat Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Sector - FEATURED with Jim McKenney Integration */}
      <section
        className="industry-sector-section industry-sector--featured"
        ref={(el) => (sectorCardsRef.current[0] = el)}
      >
        <div className="industry-sector__container">
          <div className="industry-sector__header">
            <div className="sector-badge sector-badge--featured">FEATURED SECTOR</div>
            <h2 className="sector-title">
              <span className="sector-icon">⚡</span>
              Energy & Electricity
            </h2>
            <p className="sector-tagline">
              Securing the Grid's Pulse: From Generation to Distribution
            </p>
          </div>

          <div className="sector-overview">
            <p className="sector-overview__text">
              The electricity sector represents the most critical infrastructure in modern society—a complex,
              interconnected system facing unprecedented challenges from grid modernization, renewable integration,
              distributed energy resources (DER), and sophisticated cyber threats. OXOT delivers comprehensive
              OT/ICS cybersecurity solutions spanning generation facilities, transmission networks, distribution
              systems, substations, smart meters, and advanced metering infrastructure (AMI).
            </p>
          </div>

          {/* Jim McKenney Grid Stability Feature */}
          <div className="sector-featured-research">
            <div className="featured-research__header">
              <div className="featured-research__badge">THOUGHT LEADERSHIP</div>
              <h3 className="featured-research__title">
                "Death Wobble": Understanding Grid Frequency Instability
              </h3>
              <div className="featured-research__meta">
                <span className="research-author">Jim McKenney, Principal Analyst</span>
                <span className="research-divider">•</span>
                <span className="research-category">Grid Stability Research</span>
              </div>
            </div>

            <blockquote className="featured-research__quote">
              "We are witnessing a decline in the system's inherent physical stability, a consequence of
              replacing traditional power plants with new, inverter-based technologies. This isn't merely
              an engineering footnote; it's a critical management challenge with profound implications for
              national security, economic continuity, and public safety."
            </blockquote>

            <div className="featured-research__content">
              <p>
                Jim McKenney's groundbreaking analysis examines a phenomenon threatening the stability of modern
                power grids: the rapid decline in system inertia as traditional synchronous generators are replaced
                by inverter-based resources (IBRs). Traditional power plants—massive rotating turbines with
                tremendous kinetic energy—naturally resist frequency changes, providing inherent grid stability.
                IBRs (solar inverters, wind turbines, battery storage) lack this physical inertia, making the
                grid vulnerable to rapid frequency excursions.
              </p>

              <div className="grid-stability-metrics">
                <div className="stability-metric">
                  <div className="stability-metric__value">60 Hz</div>
                  <div className="stability-metric__label">Target Frequency</div>
                  <div className="stability-metric__description">
                    North American grid operates at 60 Hz nominal frequency
                  </div>
                </div>
                <div className="stability-metric">
                  <div className="stability-metric__value">&gt;1 Hz/s</div>
                  <div className="stability-metric__label">Critical RoCoF</div>
                  <div className="stability-metric__description">
                    Rate of Change of Frequency exceeding protective relay thresholds
                  </div>
                </div>
                <div className="stability-metric">
                  <div className="stability-metric__value">3</div>
                  <div className="stability-metric__label">Interconnections</div>
                  <div className="stability-metric__description">
                    Eastern, Western, and ERCOT Texas grids
                  </div>
                </div>
              </div>

              <h4 className="research-section-title">The Cascading Failure Risk</h4>
              <p>
                When grid frequency drops rapidly following a generator trip or transmission fault, protective
                relays at generation facilities and substations may detect "abnormal" conditions and trip offline
                to protect equipment. This creates a vicious cycle: each additional trip accelerates the frequency
                decline, triggering more protective actions, potentially leading to cascading failures and
                widespread blackouts affecting millions of customers.
              </p>

              <h4 className="research-section-title">OXOT's AEON Solution</h4>
              <p>
                The AEON Cyber Digital Twin integrates Jim McKenney's grid stability analysis framework, providing
                real-time visibility into frequency metrics, RoCoF trends, and system inertia levels. By correlating
                operational data with cybersecurity intelligence, AEON enables operators to distinguish between
                physical grid instability and potential cyber-induced frequency manipulation attacks, ensuring
                appropriate response protocols.
              </p>
            </div>

            <Link to="/solutions" className="featured-research__cta">
              Explore AEON Grid Stability Analysis →
            </Link>
          </div>

          {/* Energy Subsectors */}
          <div className="subsectors-section">
            <h3 className="subsectors-title">Energy Subsector Expertise</h3>
            <div className="subsectors-grid">
              <div className="subsector-card" ref={(el) => (subsectorCardsRef.current[0] = el)}>
                <div className="subsector-card__header">
                  <h4>Generation Facilities</h4>
                  <span className="subsector-tag">Fossil, Nuclear, Hydro, Renewable</span>
                </div>
                <ul className="subsector-capabilities">
                  <li>DCS and turbine control system protection</li>
                  <li>Excitation and governor system security</li>
                  <li>Generator protective relay cybersecurity</li>
                  <li>Plant historian and OT network segmentation</li>
                  <li>Balance of Plant (BOP) system hardening</li>
                </ul>
              </div>

              <div className="subsector-card" ref={(el) => (subsectorCardsRef.current[1] = el)}>
                <div className="subsector-card__header">
                  <h4>Transmission & Substations</h4>
                  <span className="subsector-tag">High-Voltage Infrastructure</span>
                </div>
                <ul className="subsector-capabilities">
                  <li>Substation automation system (SAS) security</li>
                  <li>SCADA and EMS/DMS protection</li>
                  <li>IEC 61850 protocol security analysis</li>
                  <li>Protective relay testing and hardening</li>
                  <li>Wide-area monitoring system (WAMS) security</li>
                </ul>
              </div>

              <div className="subsector-card" ref={(el) => (subsectorCardsRef.current[2] = el)}>
                <div className="subsector-card__header">
                  <h4>Distribution & Smart Grid</h4>
                  <span className="subsector-tag">Last-Mile Delivery</span>
                </div>
                <ul className="subsector-capabilities">
                  <li>Advanced Metering Infrastructure (AMI) security</li>
                  <li>Distribution automation and FLISR protection</li>
                  <li>Distributed Energy Resource (DER) cybersecurity</li>
                  <li>Demand response system security</li>
                  <li>Outage Management System (OMS) hardening</li>
                </ul>
              </div>

              <div className="subsector-card" ref={(el) => (subsectorCardsRef.current[3] = el)}>
                <div className="subsector-card__header">
                  <h4>Electric Cooperatives</h4>
                  <span className="subsector-tag">Rural & Community Power</span>
                </div>
                <ul className="subsector-capabilities">
                  <li>Cyber Defender Program for co-ops</li>
                  <li>Member service platform security</li>
                  <li>Cooperative SCADA protection</li>
                  <li>Third-party vendor risk management</li>
                  <li>NERC CIP compliance for smaller entities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Energy Threat Landscape */}
          <div className="threat-landscape-section">
            <h3 className="threat-landscape-title">Energy Sector Threat Landscape</h3>
            <div className="threat-categories">
              <div className="threat-category">
                <div className="threat-category__icon">🎯</div>
                <h4>Nation-State Actors</h4>
                <p>
                  Advanced persistent threats (APTs) targeting grid infrastructure for pre-positioning,
                  espionage, and potential disruption capabilities. CRASHOVERRIDE/Industroyer malware
                  demonstrates the sophistication of attacks designed specifically for electric grid substations.
                </p>
              </div>
              <div className="threat-category">
                <div className="threat-category__icon">🔐</div>
                <h4>Ransomware Groups</h4>
                <p>
                  Organized cybercrime targeting OT environments with ransomware variants designed to
                  encrypt industrial control systems, demanding multi-million dollar payments under threat
                  of operational disruption.
                </p>
              </div>
              <div className="threat-category">
                <div className="threat-category__icon">🛡️</div>
                <h4>Supply Chain Compromise</h4>
                <p>
                  Threats embedded in vendor equipment, firmware, and software updates—from meter manufacturers
                  to SCADA vendors—requiring rigorous supply chain security and vendor risk assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Sector */}
      <section
        className="industry-sector-section"
        ref={(el) => (sectorCardsRef.current[1] = el)}
      >
        <div className="industry-sector__container">
          <div className="industry-sector__header">
            <div className="sector-badge">INDUSTRIAL OPERATIONS</div>
            <h2 className="sector-title">
              <span className="sector-icon">🏭</span>
              Manufacturing
            </h2>
            <p className="sector-tagline">
              Production Continuity Through Resilient Cybersecurity
            </p>
          </div>

          <div className="sector-overview">
            <p className="sector-overview__text">
              Manufacturing environments present unique cybersecurity challenges: legacy industrial control systems,
              proprietary protocols, complex supply chains, stringent uptime requirements, and the convergence of
              IT and OT networks. OXOT delivers comprehensive ICS protection strategies that balance operational
              continuity, production efficiency, and cybersecurity resilience.
            </p>
          </div>

          {/* Ransomware Resilience Framework */}
          <div className="sector-framework-highlight">
            <div className="framework-header">
              <div className="framework-badge">PROPRIETARY FRAMEWORK</div>
              <h3>The Resilient Factory: Ransomware Defense Architecture</h3>
            </div>

            <div className="framework-statistic">
              <div className="framework-stat-box">
                <div className="framework-stat-value">70%</div>
                <div className="framework-stat-label">
                  of manufacturing companies have experienced ransomware attacks targeting OT environments
                </div>
              </div>
            </div>

            <p className="framework-description">
              OXOT's Resilient Factory framework provides defense-in-depth strategies specifically designed for
              manufacturing environments. Unlike traditional IT ransomware defenses, our framework addresses the
              unique challenges of production systems: the inability to patch legacy equipment, the need for
              continuous operations, and the catastrophic impact of production downtime.
            </p>

            <div className="framework-pillars">
              <div className="pillar-card">
                <h4>Network Segmentation</h4>
                <p>
                  Zone-Conduit-Role (ZCR) architecture implementing IEC 62443 security levels, separating
                  enterprise IT, plant networks, supervisory control, and process control zones with
                  industrial firewalls and unidirectional gateways.
                </p>
              </div>
              <div className="pillar-card">
                <h4>Backup & Recovery</h4>
                <p>
                  Air-gapped backups of PLC logic, HMI configurations, and engineering workstations,
                  enabling rapid restoration without paying ransom. Automated configuration versioning
                  for all industrial control devices.
                </p>
              </div>
              <div className="pillar-card">
                <h4>Detection & Response</h4>
                <p>
                  OT-native threat detection monitoring industrial protocols (Modbus, EtherNet/IP, PROFINET)
                  for anomalous behavior, lateral movement attempts, and unauthorized configuration changes.
                  Rapid containment protocols that preserve production continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturing Capabilities */}
          <div className="sector-capabilities-grid">
            <div className="capability-sector-card">
              <h4>Discrete Manufacturing</h4>
              <p>Automotive, aerospace, electronics assembly, and component fabrication security</p>
              <ul>
                <li>Robotic cell protection and safety system integrity</li>
                <li>Assembly line PLC and HMI hardening</li>
                <li>Quality control system cybersecurity</li>
                <li>Just-in-time (JIT) supply chain resilience</li>
              </ul>
            </div>
            <div className="capability-sector-card">
              <h4>Process Manufacturing</h4>
              <p>Chemicals, pharmaceuticals, food & beverage, refining protection</p>
              <ul>
                <li>DCS and batch control system security</li>
                <li>Safety Instrumented Systems (SIS) integrity verification</li>
                <li>Recipe and formula IP protection</li>
                <li>Regulatory compliance (FDA, EPA, OSHA PSM)</li>
              </ul>
            </div>
            <div className="capability-sector-card">
              <h4>Smart Manufacturing</h4>
              <p>Industry 4.0, IoT sensors, digital twins, predictive maintenance</p>
              <ul>
                <li>Industrial IoT device security and authentication</li>
                <li>Cloud-connected MES and ERP protection</li>
                <li>Digital twin data integrity and confidentiality</li>
                <li>AI/ML model poisoning prevention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Water & Wastewater Sector */}
      <section
        className="industry-sector-section"
        ref={(el) => (sectorCardsRef.current[2] = el)}
      >
        <div className="industry-sector__container">
          <div className="industry-sector__header">
            <div className="sector-badge">PUBLIC HEALTH INFRASTRUCTURE</div>
            <h2 className="sector-title">
              <span className="sector-icon">💧</span>
              Water & Wastewater Management
            </h2>
            <p className="sector-tagline">
              Protecting Public Health Through Secure Water Infrastructure
            </p>
          </div>

          <div className="sector-overview">
            <p className="sector-overview__text">
              Water and wastewater systems are essential services with direct impact on public health and safety.
              These facilities operate complex treatment processes controlled by SCADA systems, PLCs, and distributed
              sensor networks—often with limited cybersecurity resources. OXOT provides comprehensive protection
              strategies tailored to the unique operational, regulatory, and budgetary constraints of water utilities.
            </p>
          </div>

          {/* SCADA Protection Focus */}
          <div className="sector-scada-focus">
            <h3 className="scada-focus-title">SCADA System Protection for Water Utilities</h3>
            <p className="scada-focus-description">
              Water and wastewater facilities rely heavily on SCADA (Supervisory Control and Data Acquisition)
              systems to monitor treatment processes, pump stations, storage tanks, and distribution networks.
              OXOT's water sector expertise focuses on securing these critical systems while maintaining operational
              visibility and control.
            </p>

            <div className="scada-architecture-section">
              <h4>Typical Water Utility SCADA Architecture</h4>
              <div className="scada-layers">
                <div className="scada-layer">
                  <div className="scada-layer__level">Level 3</div>
                  <div className="scada-layer__name">Enterprise Network</div>
                  <div className="scada-layer__description">
                    Business systems, customer information, billing, asset management
                  </div>
                </div>
                <div className="scada-layer">
                  <div className="scada-layer__level">Level 2</div>
                  <div className="scada-layer__name">SCADA Master Station</div>
                  <div className="scada-layer__description">
                    HMI workstations, historian, alarm management, trending
                  </div>
                </div>
                <div className="scada-layer">
                  <div className="scada-layer__level">Level 1</div>
                  <div className="scada-layer__name">Field Controllers</div>
                  <div className="scada-layer__description">
                    RTUs, PLCs at treatment plants, pump stations, lift stations
                  </div>
                </div>
                <div className="scada-layer">
                  <div className="scada-layer__level">Level 0</div>
                  <div className="scada-layer__name">Field Devices</div>
                  <div className="scada-layer__description">
                    Sensors, actuators, flow meters, chemical dosing pumps, valves
                  </div>
                </div>
              </div>

              <div className="scada-security-controls">
                <h4>OXOT's Water SCADA Security Controls</h4>
                <div className="scada-controls-grid">
                  <div className="scada-control">
                    <h5>Network Segmentation</h5>
                    <p>Isolation of SCADA networks from enterprise IT and the internet using industrial firewalls and DMZ architectures</p>
                  </div>
                  <div className="scada-control">
                    <h5>Access Control</h5>
                    <p>Multi-factor authentication, role-based access, and privileged account management for HMI and engineering workstations</p>
                  </div>
                  <div className="scada-control">
                    <h5>Protocol Security</h5>
                    <p>Protection of Modbus, DNP3, and proprietary SCADA protocols with encrypted communications and authentication</p>
                  </div>
                  <div className="scada-control">
                    <h5>Continuous Monitoring</h5>
                    <p>OT-specific intrusion detection monitoring for unauthorized access, configuration changes, and anomalous commands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Water Sector Compliance */}
          <div className="sector-compliance-section">
            <h3>Regulatory Compliance & Standards</h3>
            <div className="compliance-frameworks">
              <div className="compliance-card">
                <div className="compliance-card__title">EPA AWIA</div>
                <p>
                  America's Water Infrastructure Act (AWIA) requirements for risk and resilience assessments
                  and emergency response plans for drinking water systems serving &gt;3,300 people
                </p>
              </div>
              <div className="compliance-card">
                <div className="compliance-card__title">CISA Guidance</div>
                <p>
                  Cybersecurity and Infrastructure Security Agency's water sector cybersecurity guidance
                  and incident reporting requirements
                </p>
              </div>
              <div className="compliance-card">
                <div className="compliance-card__title">State Regulations</div>
                <p>
                  State-specific cybersecurity requirements and public health regulations governing
                  water treatment and distribution systems
                </p>
              </div>
            </div>
          </div>

          {/* Water Subsectors */}
          <div className="water-subsectors">
            <div className="water-subsector">
              <h4>Drinking Water Treatment</h4>
              <p>Source water intake, coagulation/flocculation, filtration, disinfection, and distribution system protection</p>
            </div>
            <div className="water-subsector">
              <h4>Wastewater Treatment</h4>
              <p>Collection systems, preliminary treatment, secondary biological processes, and effluent discharge control</p>
            </div>
            <div className="water-subsector">
              <h4>Stormwater Management</h4>
              <p>Pump stations, retention basins, automated control gates, and environmental monitoring systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Sector */}
      <section
        className="industry-sector-section"
        ref={(el) => (sectorCardsRef.current[3] = el)}
      >
        <div className="industry-sector__container">
          <div className="industry-sector__header">
            <div className="sector-badge">MOBILITY INFRASTRUCTURE</div>
            <h2 className="sector-title">
              <span className="sector-icon">🚄</span>
              Transportation Systems
            </h2>
            <p className="sector-tagline">
              Securing the Movement of People and Goods Across All Modalities
            </p>
          </div>

          <div className="sector-overview">
            <p className="sector-overview__text">
              Transportation infrastructure encompasses diverse modalities—rail, aviation, maritime, and road systems—
              each with unique operational technologies, safety requirements, and cybersecurity challenges. OXOT
              delivers specialized protection strategies for signaling systems, traffic management centers, automated
              transit controls, and intermodal facilities that form the backbone of modern mobility.
            </p>
          </div>

          {/* Transportation Subsectors Grid */}
          <div className="transportation-subsectors-grid">
            <div className="transport-subsector-card" ref={(el) => (subsectorCardsRef.current[4] = el)}>
              <div className="transport-subsector-header">
                <div className="transport-icon">🚂</div>
                <h3>Rail Systems</h3>
                <span className="transport-tag">Freight, Passenger, Transit</span>
              </div>

              <div className="transport-subsector-content">
                <h4>Critical Systems Protected</h4>
                <ul className="transport-systems-list">
                  <li>
                    <strong>Signaling & Interlocking:</strong> Positive Train Control (PTC), automatic block signaling,
                    centralized traffic control (CTC), and grade crossing protection systems
                  </li>
                  <li>
                    <strong>Train Control:</strong> Communications-Based Train Control (CBTC) for urban transit,
                    automatic train operation (ATO), and speed enforcement systems
                  </li>
                  <li>
                    <strong>Operations Centers:</strong> Railroad operations control centers, dispatch systems,
                    and train tracking/management platforms
                  </li>
                  <li>
                    <strong>Yard Management:</strong> Classification yard automation, locomotive maintenance facilities,
                    and rolling stock tracking systems
                  </li>
                </ul>

                <h4>Rail-Specific Threats</h4>
                <p className="transport-threat-description">
                  Rail systems face threats from signal manipulation, unauthorized track switching, PTC system
                  compromise, and interference with train-to-wayside communications. Safety-critical nature
                  of signaling requires security controls that never compromise fail-safe operational principles.
                </p>
              </div>
            </div>

            <div className="transport-subsector-card" ref={(el) => (subsectorCardsRef.current[5] = el)}>
              <div className="transport-subsector-header">
                <div className="transport-icon">✈️</div>
                <h3>Aviation Systems</h3>
                <span className="transport-tag">Airports, ATC, Ground Operations</span>
              </div>

              <div className="transport-subsector-content">
                <h4>Critical Systems Protected</h4>
                <ul className="transport-systems-list">
                  <li>
                    <strong>Air Traffic Control:</strong> Radar systems, communication infrastructure,
                    flight data processing, and automation systems
                  </li>
                  <li>
                    <strong>Airport Operations:</strong> Baggage handling systems (BHS), passenger boarding bridges,
                    airfield lighting, and ground support equipment
                  </li>
                  <li>
                    <strong>Navigation Aids:</strong> Instrument Landing Systems (ILS), VOR/DME beacons,
                    and ADS-B surveillance infrastructure
                  </li>
                  <li>
                    <strong>Terminal Systems:</strong> Building management, security screening integration,
                    and passenger information display systems
                  </li>
                </ul>

                <h4>Aviation-Specific Challenges</h4>
                <p className="transport-threat-description">
                  Aviation cybersecurity demands strict safety certification compliance, real-time system
                  availability, and coordination across multiple regulatory authorities (FAA, TSA, CBP).
                  OXOT expertise spans both airside and landside operational technology protection.
                </p>
              </div>
            </div>

            <div className="transport-subsector-card" ref={(el) => (subsectorCardsRef.current[6] = el)}>
              <div className="transport-subsector-header">
                <div className="transport-icon">⚓</div>
                <h3>Maritime & Ports</h3>
                <span className="transport-tag">Shipping, Terminals, Inland Waterways</span>
              </div>

              <div className="transport-subsector-content">
                <h4>Critical Systems Protected</h4>
                <ul className="transport-systems-list">
                  <li>
                    <strong>Port Operations:</strong> Container terminal operating systems (TOS), ship-to-shore crane
                    automation, and automated guided vehicles (AGVs)
                  </li>
                  <li>
                    <strong>Vessel Systems:</strong> Ship navigation (ECDIS, GPS), engine control systems,
                    ballast management, and cargo monitoring
                  </li>
                  <li>
                    <strong>Intermodal Facilities:</strong> Rail-to-ship transfer systems, warehouse automation,
                    and customs/border protection integration
                  </li>
                  <li>
                    <strong>Lock & Dam Control:</strong> Inland waterway navigation systems, water level management,
                    and vessel scheduling systems
                  </li>
                </ul>

                <h4>Maritime Threat Landscape</h4>
                <p className="transport-threat-description">
                  Maritime infrastructure faces GPS spoofing, AIS manipulation, cargo tracking system compromise,
                  and ransomware targeting port operations. OXOT delivers protection strategies compliant with
                  International Maritime Organization (IMO) cybersecurity guidelines.
                </p>
              </div>
            </div>

            <div className="transport-subsector-card" ref={(el) => (subsectorCardsRef.current[7] = el)}>
              <div className="transport-subsector-header">
                <div className="transport-icon">🚦</div>
                <h3>Smart Transportation</h3>
                <span className="transport-tag">ITS, Connected Vehicles, Smart Cities</span>
              </div>

              <div className="transport-subsector-content">
                <h4>Critical Systems Protected</h4>
                <ul className="transport-systems-list">
                  <li>
                    <strong>Traffic Management:</strong> Adaptive traffic signal control, freeway management systems,
                    incident detection, and variable message signs
                  </li>
                  <li>
                    <strong>Tolling Systems:</strong> Electronic toll collection, congestion pricing, and
                    automated license plate recognition (ALPR)
                  </li>
                  <li>
                    <strong>Connected Vehicles:</strong> Vehicle-to-Infrastructure (V2I) communications,
                    dedicated short-range communications (DSRC), and cellular V2X
                  </li>
                  <li>
                    <strong>Parking Management:</strong> Smart parking guidance, automated payment systems,
                    and occupancy detection sensors
                  </li>
                </ul>

                <h4>Emerging Technologies</h4>
                <p className="transport-threat-description">
                  Smart transportation systems introduce new attack surfaces through IoT sensors, wireless
                  communications, cloud-connected platforms, and data-sharing ecosystems. OXOT's approach
                  addresses both current operational systems and emerging connected/autonomous vehicle infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sector Approach */}
      <section className="cross-sector-section">
        <div className="cross-sector__container">
          <h2 className="cross-sector__title">OXOT's Cross-Sector Approach</h2>
          <p className="cross-sector__description">
            While each critical infrastructure sector has unique operational characteristics, common cybersecurity
            principles and methodologies apply across domains. OXOT's expertise enables knowledge transfer,
            best practice sharing, and consistent security frameworks regardless of industry vertical.
          </p>

          <div className="cross-sector-pillars">
            <div className="cross-sector-pillar">
              <h4>IEC 62443 Foundation</h4>
              <p>
                Universal industrial cybersecurity standard applicable to all OT/ICS environments, providing
                consistent security level targets, zone-conduit architecture, and component requirements
              </p>
            </div>
            <div className="cross-sector-pillar">
              <h4>Defense-in-Depth</h4>
              <p>
                Layered security controls spanning network segmentation, access management, threat detection,
                incident response, and operational resilience—tailored to each sector's risk profile
              </p>
            </div>
            <div className="cross-sector-pillar">
              <h4>Operational Continuity</h4>
              <p>
                Security strategies designed around uptime requirements, safety system integrity, regulatory
                compliance, and business continuity—never compromising operational reliability
              </p>
            </div>
            <div className="cross-sector-pillar">
              <h4>Threat Intelligence</h4>
              <p>
                Sector-specific threat intelligence combined with cross-sector attack pattern analysis, enabling
                proactive defense against adversaries targeting multiple critical infrastructure domains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="industries-cta-section">
        <div className="industries-cta__container">
          <h2 className="industries-cta__title">
            Protect Your Critical Infrastructure
          </h2>
          <p className="industries-cta__text">
            Partner with OXOT to secure the operational technologies and industrial control systems
            that power your organization. Our deep sector expertise, IEC 62443 standards authority,
            and comprehensive service portfolio deliver cybernetic serenity for the most demanding
            critical infrastructure environments.
          </p>
          <div className="industries-cta__buttons">
            <Link to="/solutions" className="industries-cta__button industries-cta__button--primary">
              Explore Our Solutions
            </Link>
            <Link to="/services" className="industries-cta__button industries-cta__button--secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
