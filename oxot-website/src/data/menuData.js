/**
 * Global Menu Data Structure - OXOT Cybersecurity
 * File: /src/data/menuData.js
 * Created: 2025-11-16
 * Version: 2.0.0
 * Purpose: Centralized menu data for OXOT cybersecurity services
 * Status: ACTIVE - Rebuilt for OXOT
 */

export const menuData = {
  solutions: {
    id: "solutions",
    title: "SOLUTIONS",
    description: "OXOT delivers advanced cybersecurity solutions designed specifically for critical infrastructure protection. Our solutions bridge operational technology and information security, providing comprehensive defense mechanisms for the most demanding industrial environments.",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "AEON Cyber Digital Twin",
        description: "Breakthrough digital twin technology providing unified OT/IT visibility with real-time security insights and operational resilience tracking for critical infrastructure.",
        features: [
          "Real-time asset monitoring and visualization",
          "Predictive threat hunting with AI analytics",
          "Operational resilience tracking",
          "Grid stability analysis (Energy sector)",
          "CyberOperative Framework integration",
          "Industry-specific adaptations (Manufacturing, Energy)"
        ],
        cta: {
          label: "Explore AEON",
          url: "/solutions/aeon-digital-twin",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Breach Disclosure Mitigation",
        description: "Attorney-client privilege protection for security operations through our proprietary True Diligence™ Framework, transforming incident response with legal-grade privacy.",
        features: [
          "True Diligence™ Framework",
          "Protected security telemetry",
          "AI-powered disclosure risk analysis",
          "Executive liability protection",
          "Crisis management orchestration",
          "Regulatory compliance guidance"
        ],
        cta: {
          label: "Learn More",
          url: "/solutions/breach-disclosure",
          type: "primary"
        }
      },
      {
        id: "03",
        name: "Cyber Defender Program",
        description: "Comprehensive cybersecurity program designed for Electric Cooperatives and critical infrastructure operators, providing advanced protection for smart grids and distributed energy resources.",
        features: [
          "OT/ICS security expertise",
          "Smart meter and microgrid protection",
          "24/7 SOC monitoring and response",
          "Workforce development programs",
          "DER integration security",
          "NERC CIP compliance support"
        ],
        cta: {
          label: "Discover Program",
          url: "/solutions/cyber-defender",
          type: "primary"
        }
      },
      {
        id: "04",
        name: "Confidential SOC-as-a-Service",
        description: "Privacy-first security operations center with attorney-client privilege, delivering enterprise-grade monitoring and response while maintaining complete confidentiality.",
        features: [
          "Legal privacy protection framework",
          "AI-driven threat intelligence",
          "24/7 monitoring and incident response",
          "Predictive threat hunting",
          "Scalable deployment options",
          "Integration with existing infrastructure"
        ],
        cta: {
          label: "Get Details",
          url: "/solutions/soc-as-a-service",
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
    title: "SERVICES",
    description: "OXOT provides comprehensive cybersecurity services spanning the entire operational lifecycle. From assessment and testing to crisis management and engineering, our services ensure critical infrastructure operators maintain robust security postures while achieving operational excellence.",
    backgroundType: "geometric",
    services: [
      {
        id: "01",
        name: "Cyber Assurance, Testing & Validation",
        description: "Comprehensive security assessment services including risk analysis, threat modeling, penetration testing, and defense validation tailored for OT/ICS environments.",
        features: [
          "Risk and threat assessments",
          "Defense validation (Red Team exercises)",
          "Penetration testing for ICS/OT",
          "Vulnerability assessments",
          "Gold team techniques",
          "IEC 62443 compliance testing"
        ],
        cta: {
          label: "View Services",
          url: "/services/cyber-assurance",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Crisis Management & Incident Response",
        description: "End-to-end crisis management services from program development through post-incident analysis, with 24/7 support for critical operations defense.",
        features: [
          "Program evaluation and development",
          "Interactive crisis exercises",
          "Critical operations defense",
          "IT/OT incident response",
          "24/7 emergency support",
          "Post-incident forensics and analysis"
        ],
        cta: {
          label: "Learn More",
          url: "/services/crisis-management",
          type: "primary"
        }
      },
      {
        id: "03",
        name: "Cyber Engineering & Integration",
        description: "Security architecture design and implementation services for critical infrastructure, including secure facility design, identity management, and digital twin integration.",
        features: [
          "Secure facility design and roadmap",
          "Identity and access management (IAM)",
          "Secure remote access solutions",
          "Digital Twin modeling and integration",
          "Asset, vulnerability, and threat management",
          "Network segmentation and ZCR architecture"
        ],
        cta: {
          label: "Explore Engineering",
          url: "/services/cyber-engineering",
          type: "primary"
        }
      },
      {
        id: "04",
        name: "Cyber Technology Training & Awareness",
        description: "Specialized training programs for operational technology environments, from security awareness to hands-on technical training for cyber defenders.",
        features: [
          "Cyber Defender First Responder training",
          "Security awareness programs",
          "Hands-on technical training",
          "Threat response exercises",
          "IEC 62443 implementation training",
          "Customized program development"
        ],
        cta: {
          label: "Training Programs",
          url: "/services/training",
          type: "primary"
        }
      },
      {
        id: "05",
        name: "Adversarial AI-Based Cyber Defense Testing",
        description: "Advanced threat intelligence and testing using AI-driven techniques to identify vulnerabilities and assess operational impact in critical infrastructure.",
        features: [
          "Threat briefings and hunting",
          "Sector-specific intelligence",
          "Operational impact assessment",
          "Strategic threat mitigation",
          "AI-powered attack simulation",
          "Continuous threat landscape monitoring"
        ],
        cta: {
          label: "AI Testing",
          url: "/services/adversarial-ai",
          type: "primary"
        }
      },
      {
        id: "06",
        name: "Artificial Intelligence Solutions",
        description: "AI and machine learning applications for cybersecurity, process optimization, and operational support in critical infrastructure environments.",
        features: [
          "Process optimization and automation",
          "System support and work support",
          "General Adversarial Networks (GANs)",
          "Predictive analytics",
          "Machine learning for threat detection",
          "AI-driven operational intelligence"
        ],
        cta: {
          label: "AI Solutions",
          url: "/services/ai-solutions",
          type: "primary"
        }
      },
      {
        id: "07",
        name: "Supply Chain Assurance",
        description: "Comprehensive supply chain security services including vendor risk assessment, secure access implementation, and continuous supply chain threat monitoring.",
        features: [
          "Secure remote access implementation",
          "Privileged access management (PAM)",
          "Data diode solutions",
          "Vendor risk assessment",
          "Supply chain threat monitoring",
          "Third-party security validation"
        ],
        cta: {
          label: "Supply Chain Security",
          url: "/services/supply-chain",
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

  industries: {
    id: "industries",
    title: "INDUSTRIES",
    description: "OXOT specializes in protecting critical infrastructure across four primary sectors. Our deep vertical expertise combines sector-specific knowledge with comprehensive cybersecurity capabilities, ensuring operational resilience for the most critical systems powering modern society.",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Energy (Electricity & DER)",
        description: "Comprehensive security for power generation, transmission, distribution systems, and distributed energy resources including smart meters, microgrids, and renewable integration.",
        features: [
          "Grid stability and frequency analysis",
          "Smart grid and DER protection",
          "Substation and distribution security",
          "NERC CIP compliance",
          "Renewable energy integration security",
          "Power plant IACS protection"
        ],
        cta: {
          label: "Energy Solutions",
          url: "/industries/energy",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Manufacturing",
        description: "Industrial control systems security for manufacturing operations, protecting production lines, quality control systems, and supply chains from cyber threats.",
        features: [
          "Factory floor ICS protection",
          "Production system monitoring",
          "Supply chain security",
          "Quality control system protection",
          "Ransomware resilience framework",
          "IEC 62443 implementation"
        ],
        cta: {
          label: "Manufacturing Security",
          url: "/industries/manufacturing",
          type: "primary"
        }
      },
      {
        id: "03",
        name: "Water Management",
        description: "Security solutions for water treatment facilities, distribution networks, and SCADA systems ensuring safe, reliable water infrastructure operations.",
        features: [
          "Treatment facility security",
          "Distribution network monitoring",
          "SCADA system protection",
          "Compliance management",
          "Emergency response planning",
          "Critical infrastructure resilience"
        ],
        cta: {
          label: "Water Security",
          url: "/industries/water",
          type: "primary"
        }
      },
      {
        id: "04",
        name: "Transportation",
        description: "Cybersecurity for rail systems, aviation, smart transportation infrastructure, and transit management ensuring safe, reliable transportation operations.",
        features: [
          "Rail signaling and control systems",
          "Aviation systems security",
          "Smart traffic management",
          "Transit operations protection",
          "Intermodal facility security",
          "Fleet and logistics security"
        ],
        cta: {
          label: "Transportation Security",
          url: "/industries/transportation",
          type: "primary"
        }
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
 * @param {string} sectionId - The section identifier (solutions, services, industries)
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
