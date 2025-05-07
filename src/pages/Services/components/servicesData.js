import { FaClipboardList, FaCalculator, FaFileInvoice, FaFileSignature, FaDraftingCompass } from 'react-icons/fa';

export const servicesData = [
  {
    category: ' ',
    services: [
      {
        icon: <FaClipboardList />,
        title: 'Quantity Takeoff',
        text: 'Accurate and detailed material and labor estimates for building projects.',
        components: 'Plan Review, Measurement, Verification, Documentation',
        process: [
          'Plan Review: Assess architectural and structural plans to understand scope and requirements.',
          'Measurement: Use advanced software to measure and quantify project aspects, ensuring precision.',
          'Verification: Cross-check quantities against industry standards and project specifications.',
          'Documentation: Compile organized reports detailing necessary supplies, quantities, and costs.'
        ],
        examples: [
          'Cost Management: Precise budgeting to mitigate cost overruns.',
          'Resource Allocation: Accurate quantities ensure efficient material and labor management.',
          'Bidding Process: Detailed takeoff reports support competitive, realistic bid preparation.'
        ]
      },
      {
        icon: <FaCalculator />,
        title: 'Cost Estimation',
        text: 'Financial projections that manage budgets and ensure project success.',
        components: 'Initial Consultation, Detailed Analysis, Estimation Preparation, Review and Adjustment',
        process: [
          'Initial Consultation: Understand project goals and specific needs to align estimates with objectives.',
          'Detailed Analysis: Examine all project components including materials, labor, and equipment.',
          'Estimation Preparation: Use industry tools to generate a comprehensive cost estimate.',
          'Review and Adjustment: Collaborate to adjust estimates, ensuring alignment with project requirements.'
        ],
        examples: [
          'Budget Management: Realistic estimates help manage project budgets efficiently.',
          'Financial Planning: Clear costs support better budget organization and funding.',
          'Decision-Making: Reliable cost estimates provide a basis for informed project decisions.'
        ]
      },
      {
        icon: <FaClipboardList />,
        title: 'Material List',
        text: 'Detailed inventory of all materials for precise procurement and timely delivery.',
        components: 'Analysis, Quantification, Specification Matching, Documentation',
        process: [
          'Analysis: Review project plans to identify all required materials.',
          'Quantification: Accurately quantify each item as per project scope for precise procurement.',
          'Specification Matching: Ensure materials meet quality standards and project specs.',
          'Documentation: Organize data into a report detailing quantities, specifications, and suppliers.'
        ],
        examples: [
          'Procurement Planning: An organized material list streamlines purchasing and ensures material availability.',
          'Cost Control: Accurate lists help manage budgets by preventing unforeseen expenses.',
          'Project Coordination: Comprehensive lists enhance team collaboration and reduce delays.'
        ]
      },
      {
        icon: <FaFileSignature />,
        title: 'Bid Forms',
        text: 'Streamlined bid forms to standardize proposals and support efficient comparisons.',
        components: 'Form Design, Distribution, Submission, Evaluation',
        process: [
          'Form Design: Structure forms to capture essential project information like cost breakdowns and schedules.',
          'Distribution: Share forms with selected vendors invited to bid.',
          'Submission: Standardized forms ensure comprehensive, comparable bids.',
          'Evaluation: Review submitted bids for cost, quality, timelines, and compliance with specifications.'
        ],
        examples: [
          'Standardized Comparison: Simplifies proposal evaluation, promoting well-informed decisions.',
          'Transparency: Uniform bid forms foster a transparent, fair bidding process.',
          'Efficiency: Organized forms save time and ensure complete, clear submissions.'
        ]
      },
      {
        icon: <FaFileInvoice />,
        title: 'Request for Quotation (RFQ)',
        text: 'Simplifies obtaining accurate, competitive pricing for materials and services.',
        components: 'Requirement Gathering, Document Preparation, Distribution, Quote Evaluation',
        process: [
          'Requirement Gathering: Define all project needs, including materials, labor, and services.',
          'Document Preparation: Develop detailed RFQ documents outlining project scope and specifications.',
          'Distribution: Send RFQs to a vetted list of suppliers to receive competitive quotes.',
          'Quote Evaluation: Compare received quotes against budget and project goals to select best options.'
        ],
        examples: [
          'Cost Efficiency: Competitive quotations allow selection of optimal pricing without compromising quality.',
          'Time Savings: Streamlined RFQ process lets you focus on other project tasks.',
          'Risk Management: Clear RFQs reduce potential errors and misunderstandings in procurement.'
        ]
      },
      {
        icon: <FaDraftingCompass />,
        title: 'Architectural Designing (2D & 3D)',
        text: 'Comprehensive 2D and 3D design solutions for structural integrity and aesthetic excellence.',
        components: '2D Design, Elevations and Sections, Construction Drawings, 3D Visualization',
        process: [
          '2D Design: Create detailed floor plans for layout visualization.',
          'Elevations & Sections: Illustrate vertical and internal structures, providing heights and facade details.',
          'Construction Drawings: Develop structural drawings to ensure regulatory compliance and engineering precision.',
          '3D Design: Photorealistic 3D models and interactive walkthroughs allow clients to visualize design aspects and spatial relationships before construction.'
        ],
        examples: [
          'Enhanced Accuracy: Detailed 2D/3D drawings reduce construction errors.',
          'Improved Decision-Making: Visualizations aid in design selection and layout adjustments.',
          'Effective Communication: Clear 2D/3D visuals improve stakeholder collaboration and understanding.'
        ]
      }
    ]
  }
];
