// Simulations data structure for OXOT.nl

export const simulationsData = [
  {
    id: 'hydroelectric-dam',
    title: 'Hydroelectric Dam Control System',
    category: 'Energy',
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
  {
    id: 'manufacturing-plant',
    title: 'Smart Manufacturing Plant',
    category: 'Manufacturing',
    description: 'Simulation of a modern manufacturing facility with integrated IT/OT systems, showcasing production line control, quality management, and cybersecurity controls.',
    thumbnail: '/assets/images/sim-manufacturing.jpg',
    status: 'coming-soon',
    features: [
      'Production line automation',
      'Quality control systems',
      'Inventory management integration',
      'Network segmentation visualization',
      'Ransomware attack simulation',
      'Recovery procedures'
    ],
    technologies: ['ICS', 'MES', 'Network Segmentation', 'Incident Response'],
    difficulty: 'Advanced',
    estimatedTime: '30-45 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand manufacturing IT/OT convergence',
      'Implement defense-in-depth strategies',
      'Practice ransomware response procedures',
      'Optimize production security balance'
    ]
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment Facility',
    category: 'Water',
    description: 'Interactive water treatment plant simulation demonstrating critical infrastructure protection, chemical process control, and safety system integration.',
    thumbnail: '/assets/images/sim-water.jpg',
    status: 'coming-soon',
    features: [
      'Chemical dosing control',
      'Filtration system management',
      'Safety instrumented systems (SIS)',
      'Remote access security',
      'Compliance monitoring',
      'Emergency shutdown procedures'
    ],
    technologies: ['DCS', 'SIS', 'IEC 62443', 'Safety Systems'],
    difficulty: 'Advanced',
    estimatedTime: '25-35 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand water treatment control systems',
      'Implement safety-critical security controls',
      'Practice emergency response procedures',
      'Balance safety and security requirements'
    ]
  },
  {
    id: 'power-substation',
    title: 'Electrical Substation Automation',
    category: 'Energy',
    description: 'Substation automation and protection system simulation with focus on IEC 61850 protocol security and grid reliability.',
    thumbnail: '/assets/images/sim-substation.jpg',
    status: 'coming-soon',
    features: [
      'Protective relay configuration',
      'IEC 61850 GOOSE messaging',
      'Substation automation protocols',
      'Cyber attack detection',
      'Grid stability monitoring',
      'Communication security'
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
  {
    id: 'oil-gas-pipeline',
    title: 'Oil & Gas Pipeline SCADA',
    category: 'Oil & Gas',
    description: 'Pipeline monitoring and control system simulation demonstrating remote site security, leak detection, and operational safety.',
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
    technologies: ['SCADA', 'RTU', 'Remote Access', 'OT Security'],
    difficulty: 'Intermediate',
    estimatedTime: '20-30 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand pipeline SCADA architecture',
      'Secure remote site communications',
      'Implement leak detection and response',
      'Protect distributed control systems'
    ]
  },
  {
    id: 'building-automation',
    title: 'Critical Facility BMS',
    category: 'Buildings',
    description: 'Building Management System (BMS) simulation for data centers and critical facilities, covering HVAC, access control, and energy management.',
    thumbnail: '/assets/images/sim-bms.jpg',
    status: 'coming-soon',
    features: [
      'HVAC system control',
      'Access control integration',
      'Power distribution monitoring',
      'Environmental sensors',
      'IoT device management',
      'System integration security'
    ],
    technologies: ['BACnet', 'BMS', 'IoT Security', 'Data Center'],
    difficulty: 'Beginner',
    estimatedTime: '15-25 minutes',
    embedUrl: null,
    learningObjectives: [
      'Understand BMS architecture and protocols',
      'Secure building automation systems',
      'Integrate physical and cyber security',
      'Manage IoT device risks'
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
