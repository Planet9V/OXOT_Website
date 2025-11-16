/**
 * Global Menu Data Structure
 * File: /src/data/menuData.js
 * Created: 2025-11-16
 * Version: 2.0.0
 * Purpose: Centralized menu data for OXOT Solutions and Services
 * Status: ACTIVE
 */

export const menuData = {
  solutions: {
    id: "solutions",
    title: "OXOT SOLUTIONS",
    description: "Transformative cybersecurity solutions designed for critical infrastructure. Our flagship products deliver measurable protection, operational resilience, and confidential assurance for your most sensitive environments.",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Breach Disclosure Mitigation",
        description: "OXOT True Diligence™ - Security telemetry protected under legal privilege with AI-powered disclosure risk analysis.",
        features: [
          "Attorney-client privilege protection",
          "AI-powered risk analysis",
          "Executive liability mitigation",
          "Crisis management orchestration"
        ],
        cta: {
          label: "Learn More",
          url: "/solutions/breach-disclosure",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Digital Twin for Resilience",
        description: "OXOT CyberOperative - Real-time operational technology modeling with integrated security correlation.",
        features: [
          "Live asset monitoring",
          "Predictive threat hunting",
          "OT/IT convergence modeling",
          "Continuous resilience validation"
        ],
        cta: {
          label: "Explore Digital Twin",
          url: "/solutions/digital-twin",
          type: "primary"
        }
      },
      {
        id: "03",
        name: "Cyber Defender Program",
        description: "OXOT Defender - Comprehensive protection for distributed energy resources and smart grid infrastructure.",
        features: [
          "Smart meter security orchestration",
          "Microgrid protection frameworks",
          "DER integration safeguards",
          "Real-time threat correlation"
        ],
        cta: {
          label: "View Program",
          url: "/solutions/cyber-defender",
          type: "primary"
        }
      },
      {
        id: "04",
        name: "Confidential SOC-as-a-Service",
        description: "Privacy-first 24/7 security operations with enterprise-grade protection and confidentiality guarantees.",
        features: [
          "Attorney-client privilege optional",
          "Zero data retention policies",
          "Dedicated security analysts",
          "Threat intelligence integration"
        ],
        cta: {
          label: "Get Protected",
          url: "/solutions/soc-as-service",
          type: "primary"
        }
      },
      {
        id: "05",
        name: "IEC 62443 Compliance",
        description: "End-to-end implementation of industrial cybersecurity standards with zone/conduit architecture design.",
        features: [
          "Gap assessment (SL-A vs SL-T)",
          "Zone and conduit design",
          "Security Level determination",
          "Certification support"
        ],
        cta: {
          label: "Start Assessment",
          url: "/services/iec-62443",
          type: "primary"
        }
      }
    ],
    metadata: {
      createdAt: "2025-11-16",
      updatedAt: "2025-11-16",
      version: "2.0.0"
    }
  },

  services: {
    id: "services",
    title: "SECURITY SERVICES",
    description: "Comprehensive OT/ICS cybersecurity services tailored for critical infrastructure operators. From assessment to implementation, we secure your operational technology environments against evolving threats.",
    backgroundType: "geometric",
    services: [
      {
        id: "01",
        name: "Cyber Assurance & Testing",
        description: "Comprehensive risk assessments and adversarial testing to validate your OT/ICS security posture.",
        features: [
          "IEC 62443 gap assessments",
          "Penetration testing (OT-safe)",
          "Red team exercises",
          "Defense validation"
        ],
        cta: {
          label: "Request Assessment",
          url: "/services/assurance-testing",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Crisis Management",
        description: "Program development and interactive exercises to prepare for and respond to cyber incidents.",
        features: [
          "Incident response planning",
          "Tabletop exercises",
          "Crisis simulation programs",
          "Recovery orchestration"
        ]
      },
      {
        id: "03",
        name: "Cyber Engineering & Integration",
        description: "Secure facility design, network segmentation, and digital twin modeling for operational resilience.",
        features: [
          "Zone/conduit architecture",
          "Network segmentation design",
          "Digital twin implementation",
          "Secure remote access"
        ]
      },
      {
        id: "04",
        name: "Railway Security (TS 50701)",
        description: "Specialized cybersecurity for rail operators, integrators, and component manufacturers.",
        features: [
          "TS 50701 compliance roadmap",
          "IEC 62443 + railway integration",
          "Onboard/trackside security",
          "Supply chain validation"
        ],
        cta: {
          label: "Railway Solutions",
          url: "/services/railway-security",
          type: "primary"
        }
      },
      {
        id: "05",
        name: "Data Center Security",
        description: "Tier III/IV data center security architecture, threat modeling, and continuous monitoring.",
        features: [
          "Physical + cyber integration",
          "Hyperscale facility protection",
          "Compliance (SOC 2, ISO 27001)",
          "Supply chain assurance"
        ]
      },
      {
        id: "06",
        name: "Training & Awareness",
        description: "Cyber Defender First Responder training and customized security awareness programs.",
        features: [
          "OT-specific training modules",
          "Hands-on simulation exercises",
          "Awareness campaigns",
          "Certification programs"
        ]
      }
    ],
    metadata: {
      createdAt: "2025-11-16",
      updatedAt: "2025-11-16",
      version: "2.0.0"
    }
  },

  knowledge: {
    id: "knowledge",
    title: "KNOWLEDGE HUB",
    description: "Deep-dive technical articles, blind spot analyses, and research on industrial cybersecurity. Expert insights on IEC 62443, TS 50701, supply chain risks, and sector-specific threats.",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Technical Articles",
        description: "40+ professional articles on IEC 62443, sector architectures, and implementation guidance.",
        features: [
          "IEC 62443 implementation guides",
          "Sector-specific architectures",
          "Standards deep-dives",
          "Best practices & frameworks"
        ],
        cta: {
          label: "Browse Articles",
          url: "/articles",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Blind Spot Analysis",
        description: "Critical vulnerability insights that others miss - supply chain risks, SL-T gaps, and sector blind spots.",
        features: [
          "Supply chain vulnerabilities",
          "SL-T procurement gaps",
          "Handover security risks",
          "Operational jeopardy analysis"
        ],
        cta: {
          label: "View Blind Spots",
          url: "/blindspots",
          type: "primary"
        }
      },
      {
        id: "03",
        name: "Research & Whitepapers",
        description: "In-depth research on M&A cybersecurity, threat landscapes, and emerging risks.",
        features: [
          "Cyber-informed M&A frameworks",
          "Threat landscape reports",
          "Geopolitical risk analysis",
          "Incident case studies"
        ]
      },
      {
        id: "04",
        name: "Interactive Simulations",
        description: "Hands-on simulations of critical infrastructure facilities to visualize security concepts.",
        features: [
          "Hydroelectric facility simulation",
          "SCADA architecture demos",
          "Attack scenario modeling",
          "Zone/conduit visualizations"
        ],
        cta: {
          label: "Try Simulations",
          url: "/simulations",
          type: "primary"
        }
      },
      {
        id: "05",
        name: "Industry Standards",
        description: "Comprehensive guides to IEC 62443, TS 50701, NERC CIP, and other critical infrastructure standards.",
        features: [
          "IEC 62443 complete guide",
          "TS 50701 railway standard",
          "NERC CIP compliance",
          "Standards crosswalk"
        ]
      }
    ],
    metadata: {
      createdAt: "2025-11-16",
      updatedAt: "2025-11-16",
      version: "2.0.0"
    }
  }
};

/**
 * Helper function to get menu data by section ID
 * @param {string} sectionId - The section identifier (institutional, commercial, mortgage)
 * @returns {object} Menu section data
 */
export const getMenuData = (sectionId) => {
  return menuData[sectionId] || null;
};

/**
 * Helper function to get all available sections
 * @returns {array} Array of section IDs
 */
export const getAvailableSections = () => {
  return Object.keys(menuData);
};

export default menuData;
