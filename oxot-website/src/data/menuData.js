/**
 * Global Menu Data Structure
 * File: /src/data/menuData.js
 * Created: 2025-11-13
 * Version: 1.0.0
 * Purpose: Centralized menu data for all sections (Institutional, Commercial, Mortgage)
 * Status: ACTIVE
 */

export const menuData = {
  institutional: {
    id: "institutional",
    title: "INSTITUTIONAL BANKING",
    description: "NexBank is a trusted partner for large organizations, providing comprehensive financial solutions designed to meet the complex needs of institutional clients. Our expertise spans asset management, treasury services, and strategic advisory.",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Conforming Loans",
        description: "Traditional mortgage products meeting GSE guidelines with competitive pricing and fast approval processes.",
        features: [
          "Fixed and adjustable rates",
          "Competitive pricing structure",
          "Streamlined approval process",
          "Flexible terms up to 30 years"
        ],
        cta: {
          label: "Learn More",
          url: "/services/conforming",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Government Loans",
        description: "FHA, VA, and USDA loan programs designed for first-time buyers and military personnel.",
        features: [
          "Low down payment options",
          "Flexible credit requirements",
          "Specialized veteran programs",
          "USDA rural development loans"
        ]
      },
      {
        id: "03",
        name: "Asset Management",
        description: "Comprehensive portfolio management and investment strategies for institutional investors.",
        features: [
          "Customized investment portfolios",
          "Risk management solutions",
          "Performance analytics",
          "ESG investment options"
        ]
      },
      {
        id: "04",
        name: "Treasury Services",
        description: "Advanced cash management and liquidity solutions for institutional operations.",
        features: [
          "Multi-currency accounts",
          "Automated reconciliation",
          "Real-time reporting",
          "Fraud prevention tools"
        ]
      },
      {
        id: "05",
        name: "Strategic Advisory",
        description: "Expert financial advisory services for mergers, acquisitions, and corporate restructuring.",
        features: [
          "M&A transaction support",
          "Valuation services",
          "Due diligence coordination",
          "Regulatory compliance guidance"
        ]
      }
    ],
    metadata: {
      createdAt: "2025-11-13",
      updatedAt: "2025-11-13",
      version: "1.0.0"
    }
  },

  commercial: {
    id: "commercial",
    title: "COMMERCIAL BANKING",
    description: "Empowering businesses with tailored banking solutions that drive growth and operational efficiency. From commercial real estate to working capital solutions, we understand the unique challenges facing modern enterprises.",
    backgroundType: "geometric",
    services: [
      {
        id: "01",
        name: "Commercial Real Estate",
        description: "Comprehensive financing solutions for office buildings, retail centers, and industrial properties.",
        features: [
          "Competitive interest rates",
          "Flexible loan structures",
          "Up to 80% LTV financing",
          "Quick approval process"
        ],
        cta: {
          label: "Explore Options",
          url: "/services/commercial-real-estate",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Business Lines of Credit",
        description: "Flexible revolving credit facilities to manage cash flow and operational expenses.",
        features: [
          "Unsecured and secured options",
          "Competitive interest rates",
          "Online account management",
          "Quick access to funds"
        ]
      },
      {
        id: "03",
        name: "Equipment Financing",
        description: "Specialized financing for machinery, technology, and business equipment purchases.",
        features: [
          "Up to 100% equipment financing",
          "Flexible repayment terms",
          "Tax advantages available",
          "New and used equipment"
        ]
      },
      {
        id: "04",
        name: "SBA Loans",
        description: "Government-backed small business loans with favorable terms and competitive rates.",
        features: [
          "SBA 7(a) and 504 programs",
          "Lower down payments",
          "Longer repayment periods",
          "Expert SBA guidance"
        ]
      },
      {
        id: "05",
        name: "Merchant Services",
        description: "Complete payment processing solutions for businesses of all sizes.",
        features: [
          "Credit card processing",
          "Point-of-sale systems",
          "E-commerce integration",
          "Mobile payment options"
        ]
      },
      {
        id: "06",
        name: "Business Checking",
        description: "Comprehensive business checking accounts with digital banking capabilities.",
        features: [
          "No minimum balance requirements",
          "Free online banking",
          "Mobile deposit capture",
          "Integration with accounting software"
        ]
      }
    ],
    metadata: {
      createdAt: "2025-11-13",
      updatedAt: "2025-11-13",
      version: "1.0.0"
    }
  },

  mortgage: {
    id: "mortgage",
    title: "MORTGAGE SERVICES",
    description: "Making homeownership accessible through innovative mortgage solutions. Whether you're a first-time homebuyer or looking to refinance, our experienced team provides personalized guidance throughout the entire process.",
    backgroundType: "animated",
    services: [
      {
        id: "01",
        name: "Purchase Loans",
        description: "Comprehensive financing options for first-time and repeat homebuyers.",
        features: [
          "Conventional and jumbo loans",
          "Low down payment programs",
          "First-time buyer assistance",
          "Pre-approval services"
        ],
        cta: {
          label: "Get Pre-Approved",
          url: "/services/purchase-loans",
          type: "primary"
        }
      },
      {
        id: "02",
        name: "Refinancing",
        description: "Rate and term refinancing to lower monthly payments or access home equity.",
        features: [
          "Rate reduction options",
          "Cash-out refinancing",
          "Streamline refinance programs",
          "No closing cost options"
        ]
      },
      {
        id: "03",
        name: "FHA Loans",
        description: "Government-insured mortgages with low down payments and flexible credit requirements.",
        features: [
          "As low as 3.5% down",
          "Credit scores from 580",
          "Gift fund assistance allowed",
          "Assumable mortgages"
        ]
      },
      {
        id: "04",
        name: "VA Loans",
        description: "Exclusive mortgage benefits for military service members and veterans.",
        features: [
          "Zero down payment",
          "No private mortgage insurance",
          "Competitive interest rates",
          "Funding fee waivers available"
        ]
      },
      {
        id: "05",
        name: "Jumbo Loans",
        description: "Financing for luxury properties exceeding conventional loan limits.",
        features: [
          "Loans up to $5 million",
          "Competitive jumbo rates",
          "Flexible underwriting",
          "Investment property options"
        ]
      },
      {
        id: "06",
        name: "Construction Loans",
        description: "One-time close construction-to-permanent financing for custom homes.",
        features: [
          "Single closing process",
          "Interest-only during construction",
          "Builder flexibility",
          "Convert to permanent loan"
        ]
      }
    ],
    metadata: {
      createdAt: "2025-11-13",
      updatedAt: "2025-11-13",
      version: "1.0.0"
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
