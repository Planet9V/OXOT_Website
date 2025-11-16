// Simulations data structure for OXOT.nl
// Covering all 16 CISA Critical Infrastructure Sectors

export const simulationsData = [
  // 1. CHEMICAL SECTOR
  {
    id: 'chemical-plant',
    title: 'Chemical Manufacturing Plant Security',
    category: 'Chemical',
    description: 'Interactive simulation of a chemical production facility demonstrating process safety systems, toxic release prevention, and chemical facility anti-terrorism standards (CFATS) compliance.',
    thumbnail: '/assets/images/sim-chemical.jpg',
    status: 'coming-soon',
    features: [
      'Distributed control system (DCS) operations',
      'Safety instrumented systems (SIS)',
      'Toxic release detection and mitigation',
      'CFATS compliance monitoring',
      'Batch process control security',
      'Supply chain integrity verification'
    ],
    technologies: ['DCS', 'SIS', 'CFATS', 'Process Safety', 'IEC 62443'],
    difficulty: 'Expert',
    estimatedTime: '40-50 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand chemical process control systems',
      'Implement CFATS security requirements',
      'Balance safety and security in hazardous environments',
      'Protect against insider threats and sabotage'
    ]
  },

  // 2. COMMERCIAL FACILITIES SECTOR
  {
    id: 'commercial-facility',
    title: 'Smart Building & Retail Complex',
    category: 'Commercial Facilities',
    description: 'Simulation of integrated security systems for large commercial facilities including access control, surveillance, fire safety, and crowd management systems.',
    thumbnail: '/assets/images/sim-commercial.jpg',
    status: 'coming-soon',
    features: [
      'Physical security information management (PSIM)',
      'Video surveillance and analytics',
      'Access control and visitor management',
      'Fire detection and suppression systems',
      'Emergency mass notification',
      'Integration security best practices'
    ],
    technologies: ['PSIM', 'Video Analytics', 'Access Control', 'BMS', 'IoT Security'],
    difficulty: 'Intermediate',
    estimatedTime: '25-35 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure integrated facility management systems',
      'Implement layered physical security controls',
      'Coordinate emergency response systems',
      'Protect visitor and occupant privacy'
    ]
  },

  // 3. COMMUNICATIONS SECTOR
  {
    id: 'telecom-network',
    title: 'Telecommunications Network Operations',
    category: 'Communications',
    description: 'Interactive telecom network operations center simulation covering 5G infrastructure, network management systems, and communications resilience during cyber incidents.',
    thumbnail: '/assets/images/sim-telecom.jpg',
    status: 'coming-soon',
    features: [
      '5G core network management',
      'Network operations center (NOC) systems',
      'Distributed denial-of-service (DDoS) mitigation',
      'Emergency communications priority',
      'Subscriber data protection',
      'Network slicing security'
    ],
    technologies: ['5G', 'NOC', 'SDN/NFV', 'DDoS Protection', 'Zero Trust'],
    difficulty: 'Advanced',
    estimatedTime: '30-40 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand telecom network architecture',
      'Implement communications resilience strategies',
      'Secure software-defined networks',
      'Maintain service during cyber attacks'
    ]
  },

  // 4. CRITICAL MANUFACTURING SECTOR
  {
    id: 'critical-manufacturing',
    title: 'Defense & Aerospace Manufacturing',
    category: 'Critical Manufacturing',
    description: 'Advanced manufacturing simulation for defense contractors covering CNC machining, robotics, quality assurance, and CMMC/NIST compliance for controlled unclassified information.',
    thumbnail: '/assets/images/sim-defense-mfg.jpg',
    status: 'coming-soon',
    features: [
      'Computer numerical control (CNC) systems',
      'Industrial robotics and cobots',
      'Additive manufacturing (3D printing) security',
      'Quality management system (QMS) integration',
      'CMMC Level 2/3 compliance',
      'Supply chain risk management'
    ],
    technologies: ['CNC', 'Robotics', 'CMMC', 'NIST 800-171', 'ICS Security'],
    difficulty: 'Expert',
    estimatedTime: '45-60 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure advanced manufacturing systems',
      'Implement CMMC compliance framework',
      'Protect intellectual property and CUI',
      'Manage supply chain cyber risks'
    ]
  },

  // 5. DAMS SECTOR (Energy - Hydroelectric)
  {
    id: 'hydroelectric-dam',
    title: 'Hydroelectric Dam Control System',
    category: 'Dams',
    description: 'Interactive simulation of a hydroelectric power generation facility demonstrating OT security principles, SCADA control systems, and IEC 62443 zone/conduit architecture.',
    thumbnail: '/assets/images/sim-hydroelectric.jpg',
    status: 'available', // available, coming-soon
    features: [
      'Real-time dam control and monitoring',
      'Turbine management and power generation',
      'Water level and flow rate control',
      'Security zone visualization (IEC 62443)',
      'Incident response scenarios',
      'SCADA HMI interface'
    ],
    technologies: ['SCADA', 'IEC 62443', 'OT Security', 'Digital Twin'],
    difficulty: 'Intermediate',
    estimatedTime: '20-30 minutes',
    embedUrl: 'YOUR_AI_STUDIO_EMBED_URL_HERE', // Replace with actual AI Studio URL
    learningObjectives: [
      'Understand hydroelectric control systems',
      'Apply IEC 62443 security zones',
      'Practice incident response in OT environments',
      'Recognize common vulnerabilities in SCADA systems'
    ]
  },

  // 6. DEFENSE INDUSTRIAL BASE SECTOR
  {
    id: 'defense-contractor',
    title: 'Defense Contractor IT/OT Environment',
    category: 'Defense Industrial Base',
    description: 'Comprehensive simulation of defense contractor operations including classified networks, research & development systems, and compliance with DoD cybersecurity requirements.',
    thumbnail: '/assets/images/sim-dib.jpg',
    status: 'coming-soon',
    features: [
      'Classified and unclassified network segmentation',
      'Research & development lab security',
      'Secure collaboration with government partners',
      'ITAR and EAR compliance monitoring',
      'Insider threat detection program',
      'Continuous monitoring (CDM) integration'
    ],
    technologies: ['CMMC', 'NIST 800-171', 'CDM', 'ITAR/EAR', 'Zero Trust'],
    difficulty: 'Expert',
    estimatedTime: '50-65 minutes',
    embedUrl: null,
    learningObjectives: [
      'Implement DoD cybersecurity requirements',
      'Secure classified information systems',
      'Manage insider threat risks',
      'Coordinate security with government agencies'
    ]
  },

  // 7. EMERGENCY SERVICES SECTOR
  {
    id: 'emergency-services',
    title: 'Emergency Operations Center (EOC)',
    category: 'Emergency Services',
    description: 'Simulation of a 911 dispatch center and emergency operations coordination including CAD systems, radio communications, and multi-agency coordination during crises.',
    thumbnail: '/assets/images/sim-eoc.jpg',
    status: 'coming-soon',
    features: [
      'Computer-aided dispatch (CAD) systems',
      'Emergency radio communications (P25/LTE)',
      'Multi-agency coordination platforms',
      'Real-time crime center integration',
      'Continuity of operations planning',
      'Cyber incident impact on public safety'
    ],
    technologies: ['CAD', 'P25', 'FirstNet', 'GIS', 'Emergency Management'],
    difficulty: 'Advanced',
    estimatedTime: '35-45 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand emergency services technology',
      'Maintain operations during cyber incidents',
      'Coordinate multi-agency response',
      'Protect sensitive law enforcement data'
    ]
  },

  // 8. ENERGY SECTOR - Electric Grid
  {
    id: 'power-substation',
    title: 'Electrical Substation Automation',
    category: 'Energy',
    description: 'Substation automation and protection system simulation with focus on IEC 61850 protocol security and grid reliability under NERC CIP requirements.',
    thumbnail: '/assets/images/sim-substation.jpg',
    status: 'coming-soon',
    features: [
      'Protective relay configuration',
      'IEC 61850 GOOSE messaging',
      'Substation automation protocols',
      'Cyber attack detection',
      'Grid stability monitoring',
      'NERC CIP compliance validation'
    ],
    technologies: ['IEC 61850', 'Substation Automation', 'NERC CIP', 'Protection Systems'],
    difficulty: 'Expert',
    estimatedTime: '35-50 minutes',
    embedUrl: null,
    learningObjectives: [
      'Master substation automation concepts',
      'Secure IEC 61850 communications',
      'Understand NERC CIP compliance',
      'Protect critical grid infrastructure'
    ]
  },

  // 8. ENERGY SECTOR - Oil & Gas
  {
    id: 'oil-gas-pipeline',
    title: 'Oil & Gas Pipeline SCADA',
    category: 'Energy',
    description: 'Pipeline monitoring and control system simulation demonstrating remote site security, leak detection, and operational safety in distributed energy infrastructure.',
    thumbnail: '/assets/images/sim-pipeline.jpg',
    status: 'coming-soon',
    features: [
      'Pipeline pressure monitoring',
      'Leak detection systems',
      'Remote terminal unit (RTU) control',
      'Satellite/cellular communications',
      'Intrusion detection',
      'Emergency isolation procedures'
    ],
    technologies: ['SCADA', 'RTU', 'Remote Access', 'OT Security', 'TSA Security Directives'],
    difficulty: 'Intermediate',
    estimatedTime: '20-30 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand pipeline SCADA architecture',
      'Secure remote site communications',
      'Implement leak detection and response',
      'Comply with TSA pipeline security directives'
    ]
  },

  // 9. FINANCIAL SERVICES SECTOR
  {
    id: 'financial-datacenter',
    title: 'Financial Services Data Center',
    category: 'Financial Services',
    description: 'Mission-critical data center simulation for financial institutions covering trading systems, core banking platforms, payment networks, and regulatory compliance.',
    thumbnail: '/assets/images/sim-financial.jpg',
    status: 'coming-soon',
    features: [
      'High-frequency trading platform security',
      'Core banking system resilience',
      'Payment network (ACH/SWIFT) protection',
      'Disaster recovery and business continuity',
      'Regulatory compliance (GLBA, PCI DSS)',
      'Insider trading prevention controls'
    ],
    technologies: ['HSM', 'Encryption', 'DDoS Protection', 'SIEM', 'Zero Trust'],
    difficulty: 'Advanced',
    estimatedTime: '30-40 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure financial transaction systems',
      'Implement regulatory compliance controls',
      'Maintain high availability under attack',
      'Protect sensitive financial data'
    ]
  },

  // 10. FOOD AND AGRICULTURE SECTOR
  {
    id: 'food-processing',
    title: 'Food Processing & Cold Chain',
    category: 'Food and Agriculture',
    description: 'Food safety and agricultural production simulation covering processing plant automation, cold chain monitoring, and protection against contamination threats.',
    thumbnail: '/assets/images/sim-food.jpg',
    status: 'coming-soon',
    features: [
      'Food processing line automation',
      'Cold chain temperature monitoring',
      'HACCP compliance systems',
      'Traceability and recall management',
      'Precision agriculture IoT devices',
      'Contamination threat detection'
    ],
    technologies: ['PLC', 'IoT', 'HACCP', 'Supply Chain Security', 'SCADA'],
    difficulty: 'Intermediate',
    estimatedTime: '25-35 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure food processing automation',
      'Implement farm-to-table traceability',
      'Protect against biological threats',
      'Maintain food safety during incidents'
    ]
  },

  // 11. GOVERNMENT FACILITIES SECTOR
  {
    id: 'government-facility',
    title: 'Federal Building Security Systems',
    category: 'Government Facilities',
    description: 'Integrated security simulation for government facilities including access control, surveillance, screening systems, and coordination with law enforcement.',
    thumbnail: '/assets/images/sim-federal.jpg',
    status: 'coming-soon',
    features: [
      'Badging and credentialing systems (PIV/CAC)',
      'Perimeter intrusion detection',
      'X-ray and screening equipment',
      'Visitor management and watchlists',
      'Integration with federal security centers',
      'Continuity of government (COG) systems'
    ],
    technologies: ['PIV/CAC', 'PSIM', 'FICAM', 'HSPD-12', 'FedRAMP'],
    difficulty: 'Advanced',
    estimatedTime: '30-40 minutes',
    embedUrl: null,
    learningObjectives: [
      'Implement federal identity standards',
      'Secure government facility systems',
      'Coordinate with law enforcement',
      'Maintain operations continuity'
    ]
  },

  // 12. HEALTHCARE AND PUBLIC HEALTH SECTOR
  {
    id: 'hospital-systems',
    title: 'Hospital & Healthcare Delivery',
    category: 'Healthcare and Public Health',
    description: 'Comprehensive healthcare IT simulation including electronic health records, medical devices, pharmacy systems, and patient safety during cyber incidents.',
    thumbnail: '/assets/images/sim-healthcare.jpg',
    status: 'coming-soon',
    features: [
      'Electronic health record (EHR) systems',
      'Medical device network security',
      'Pharmacy automation and dispensing',
      'Clinical decision support systems',
      'HIPAA compliance and breach response',
      'Telehealth platform security'
    ],
    technologies: ['EHR', 'HL7/FHIR', 'Medical IoT', 'HIPAA', 'HITECH'],
    difficulty: 'Advanced',
    estimatedTime: '35-45 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure healthcare delivery systems',
      'Protect patient health information',
      'Manage medical device vulnerabilities',
      'Maintain patient safety during incidents'
    ]
  },

  // 13. INFORMATION TECHNOLOGY SECTOR
  {
    id: 'cloud-service-provider',
    title: 'Cloud Service Provider Operations',
    category: 'Information Technology',
    description: 'Large-scale cloud infrastructure simulation covering multi-tenant security, hypervisor protection, and maintaining customer trust during security events.',
    thumbnail: '/assets/images/sim-cloud.jpg',
    status: 'coming-soon',
    features: [
      'Hypervisor and container security',
      'Multi-tenant isolation enforcement',
      'Security operations center (SOC) at scale',
      'Customer security tooling',
      'Compliance automation (SOC 2, ISO 27001)',
      'Supply chain security for infrastructure'
    ],
    technologies: ['Kubernetes', 'Hypervisor Security', 'SIEM', 'SOAR', 'DevSecOps'],
    difficulty: 'Expert',
    estimatedTime: '40-55 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure multi-tenant cloud infrastructure',
      'Implement security at scale',
      'Automate compliance and attestation',
      'Maintain customer trust during incidents'
    ]
  },

  // 14. NUCLEAR REACTORS, MATERIALS, AND WASTE SECTOR
  {
    id: 'nuclear-power-plant',
    title: 'Nuclear Power Plant Control',
    category: 'Nuclear',
    description: 'Nuclear facility simulation demonstrating defense-in-depth security, safety system protection, and compliance with NRC cybersecurity requirements.',
    thumbnail: '/assets/images/sim-nuclear.jpg',
    status: 'coming-soon',
    features: [
      'Reactor control and safety systems',
      'Defense-in-depth architecture',
      'Safety-critical system isolation',
      'Nuclear Regulatory Commission (NRC) compliance',
      'Radiation monitoring systems',
      'Emergency core cooling systems (ECCS)'
    ],
    technologies: ['DCS', 'Safety Systems', 'NRC Cybersecurity', 'Defense-in-Depth', 'IEC 62645'],
    difficulty: 'Expert',
    estimatedTime: '50-70 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand nuclear facility control systems',
      'Implement defense-in-depth security',
      'Comply with NRC cybersecurity requirements',
      'Protect safety-critical systems'
    ]
  },

  // 15. TRANSPORTATION SYSTEMS SECTOR - Aviation
  {
    id: 'airport-operations',
    title: 'Airport Operations & Air Traffic',
    category: 'Transportation',
    description: 'Airport and air traffic management simulation including baggage handling, passenger screening, airfield operations, and FAA system integration.',
    thumbnail: '/assets/images/sim-airport.jpg',
    status: 'coming-soon',
    features: [
      'Baggage handling system (BHS) security',
      'Passenger screening technology',
      'Airfield lighting and signaling',
      'Airport operations database (AODB)',
      'TSA security coordination',
      'Air traffic control interface'
    ],
    technologies: ['BHS', 'AODB', 'TSA', 'FAA Systems', 'SIDA'],
    difficulty: 'Advanced',
    estimatedTime: '35-45 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure airport operational systems',
      'Coordinate aviation security measures',
      'Protect passenger safety and privacy',
      'Maintain operations during disruptions'
    ]
  },

  // 15. TRANSPORTATION SYSTEMS SECTOR - Maritime
  {
    id: 'port-operations',
    title: 'Seaport & Maritime Systems',
    category: 'Transportation',
    description: 'Port operations simulation covering cargo handling, vessel traffic systems, customs integration, and maritime domain awareness.',
    thumbnail: '/assets/images/sim-port.jpg',
    status: 'coming-soon',
    features: [
      'Terminal operating system (TOS)',
      'Vessel traffic service (VTS)',
      'Automated container handling',
      'Customs and border protection integration',
      'Navigation aid systems',
      'Maritime cybersecurity framework'
    ],
    technologies: ['TOS', 'VTS', 'AIS', 'CBP Systems', 'Maritime Security'],
    difficulty: 'Intermediate',
    estimatedTime: '25-35 minutes',
    embedUrl: null,
    learningObjectives: [
      'Secure port operational technology',
      'Implement maritime security measures',
      'Coordinate with customs and border protection',
      'Protect global supply chain'
    ]
  },

  // 15. TRANSPORTATION SYSTEMS SECTOR - Rail
  {
    id: 'rail-operations',
    title: 'Railway Operations & Signaling',
    category: 'Transportation',
    description: 'Railway control system simulation including positive train control (PTC), signaling systems, and passenger rail operations security.',
    thumbnail: '/assets/images/sim-rail.jpg',
    status: 'coming-soon',
    features: [
      'Positive train control (PTC) systems',
      'Railway signaling and switching',
      'Passenger information systems',
      'Freight management systems',
      'Track circuit monitoring',
      'Communications-based train control (CBTC)'
    ],
    technologies: ['PTC', 'CBTC', 'Signaling Systems', 'SCADA', 'Railway Security'],
    difficulty: 'Advanced',
    estimatedTime: '30-40 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand railway control systems',
      'Secure positive train control',
      'Implement safety-critical controls',
      'Protect passenger and freight operations'
    ]
  },

  // 16. WATER AND WASTEWATER SYSTEMS SECTOR
  {
    id: 'water-treatment',
    title: 'Water & Wastewater Treatment',
    category: 'Water and Wastewater',
    description: 'Comprehensive water treatment plant simulation demonstrating critical infrastructure protection, chemical process control, and EPA compliance requirements.',
    thumbnail: '/assets/images/sim-water.jpg',
    status: 'coming-soon',
    features: [
      'Chemical dosing control',
      'Filtration system management',
      'Safety instrumented systems (SIS)',
      'SCADA security for water systems',
      'EPA compliance monitoring',
      'Emergency response procedures'
    ],
    technologies: ['DCS', 'SIS', 'IEC 62443', 'AWWA Security', 'EPA Compliance'],
    difficulty: 'Advanced',
    estimatedTime: '25-35 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand water treatment control systems',
      'Implement safety-critical security controls',
      'Practice emergency response procedures',
      'Balance safety and security requirements'
    ]
  }
];

// Helper functions
export const getSimulationById = (id) => {
  return simulationsData.find(sim => sim.id === id);
};

export const getSimulationsByCategory = (category) => {
  if (!category || category === 'all') return simulationsData;
  return simulationsData.filter(sim => sim.category === category);
};

export const getSimulationsByStatus = (status) => {
  if (!status || status === 'all') return simulationsData;
  return simulationsData.filter(sim => sim.status === status);
};

export const getAllCategories = () => {
  const categories = ['all'];
  simulationsData.forEach(sim => {
    if (!categories.includes(sim.category)) {
      categories.push(sim.category);
    }
  });
  return categories;
};
