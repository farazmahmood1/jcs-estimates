const projects = [
  {
    name: "Commercial GC + MEP",
    images: ["assets/img/portfolio_imgs/1.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNciseI8Ui4hTtWbSd01HX9AqLUs1PYG1k2YSG2xL9raiQOHI6mAftfb2H-RdkLA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Comprehensive estimation for general construction and MEP projects.",
    description: "Detailed construction estimation including mechanical, electrical, and plumbing components."
  },
  {
    name: "Commercial Electrical",
    images: ["assets/img/portfolio_imgs/2.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ifyP1jD5IOwyHWf0FOHzz7Kknlm_Y1aA8L7wcqY5hKpdcreARUuGArp_yRToLA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Electrical project estimates and data analysis.",
    description: "Focused on the electrical aspects of commercial building projects, this spreadsheet provides detailed estimates and analysis."
  },
  {
    name: "Commercial Plumbing Sample 2",
    images: ["assets/img/portfolio_imgs/3.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSwxVAJYmdkNsiv6iUXdOk3cHqMjmE3UF9vaoeI1XU0kmE-0BS47C9FEYWGKoJU-Q/pubhtml?widget=true&amp;headers=false",
    excerpt: "Plumbing estimates for commercial structures.",
    description: "This project template offers detailed plumbing estimates essential for large scale commercial construction."
  },
  {
    name: "Complete Work Sample",
    images: ["assets/img/portfolio_imgs/4.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQqOsjiPQvQHoxM0-0h54NXiHzONzyOpBv3FNH46T5ET-HHzJYW5_IUKqt0DeA9yQ/pubhtml?widget=true&amp;headers=false",
    excerpt: "Full project estimation with comprehensive details.",
    description: "A complete estimation sheet covering all necessary details for a construction project from start to finish."
  },
  {
    name: "Concrete Sample 1",
    images: ["assets/img/portfolio_imgs/5.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSC4WieRoH7wsxvfCrdNQGKS343L5FG0Bzc9PmzLYeYmPxHMFHeQ2Kz6ZT-V3e7oA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Estimation specifics for concrete work.",
    description: "Providing specific data and estimates related to concrete and masonry work in construction projects."
  },
  {
    name: "Concrete Sample 2",
    images: ["assets/img/portfolio_imgs/6.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSljausJJy7jpwCTL9Bbm4Us_1h_cFnPwtnkW2DAaa5G8hukhgspjfU3-cwY64Zhg/pubhtml?widget=true&amp;headers=false",
    excerpt: "Detailed concrete project estimates.",
    description: "Detailed spreadsheet focusing on concrete work estimates for complex construction projects."
  },
  {
    name: "Drywall Takeoff 2 Sample",
    images: ["assets/img/portfolio_imgs/7.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS8b13f1LkwCyU3p4mT1thspmtfKtwui08qaMgXyLo60pKs6VeGUdsSuEhokeDdhA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Drywall estimation for construction projects.",
    description: "Estimates and analysis specific to drywall installation and materials needed in construction."
  },
  {
    name: "Excavation 1",
    images: ["assets/img/portfolio_imgs/8.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR1NspI6CLR1U9XmRul4n3UXmhAmhKrF8wNKKS4OkXTU34-7cItZmusauxbXYsaXA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Excavation estimates for site preparation.",
    description: "Project spreadsheet focused on excavation data and cost analysis for preparing construction sites."
  },
  {
    name: "Excavation 2",
    images: ["assets/img/portfolio_imgs/9.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSihFh8iXP7-l00NAoTtvjQ3Rn5Lc0WOwUwq-B9udNPfXsMVabVzZ1P_bhFoT3U7Q/pubhtml?widget=true&amp;headers=false",
    excerpt: "Detailed excavation work estimates.",
    description: "Detailed breakdown of costs and requirements for excavation in large-scale construction projects."
  },
  {
    name: "GC + MEP 2",
    images: ["assets/img/portfolio_imgs/10.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAm7yJQMN_jcUXm5c8wkUpWWTlk3XNua8ONnb0GTRmqlv1AV78swUsPnOlVYZuUw/pubhtml?widget=true&amp;headers=false",
    excerpt: "General construction and MEP analy9sis.",
    description: "Comprehensive planning and estimation for general construction with mechanical, electrical, and plumbing insights."
  },
  {
    name: "HVAC Sample 2",
    images: ["assets/img/portfolio_imgs/11.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAZfow-4vES___qtlRHuQZ3mvT68ldJmfuszaNfAbkC9GlxqhJzkwixKeUILhqnw/pubhtml?widget=true&amp;headers=false",
    excerpt: "HVAC systems estimation and planning.",
    description: "Detailed analysis and estimation focused on HVAC system implementations in construction projects."
  },
  {
    name: "HVAC Sample 3",
    images: ["assets/img/portfolio_imgs/12.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJAMkbMGUsf5EDV5quxSC4-BaJe20lJvhKizRWJo6hS5Ar-pG9VJo9u0SpXojAqA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Advanced HVAC installation and cost analysis.",
    description: "This project provides advanced insights into the cost and implementation strategies for HVAC systems."
  },
  {
    name: "HVAC Sample",
    images: ["assets/img/portfolio_imgs/13.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDBBVzsB3U_GO5JKJnZYDv3dK3zGqAUib5Uacpmr6-oY42DW7ID9oLfxxbGXEqxA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Comprehensive HVAC system estimates.",
    description: "Comprehensive planning and budgeting for HVAC systems in various types of buildings."
  },
  {
    name: "Lumber Sample 1",
    images: ["assets/img/portfolio_imgs/14.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHAW_f6Qwi1VeNRLpYaoyJMJVaZGY5OTP5SyvygGI0E5DbBbfTd4eyYRCWO9GOeg/pubhtml?widget=true&amp;headers=false",
    excerpt: "Estimation for lumber and related materials.",
    description: "Detailed estimation of costs and quantities for lumber used in construction projects."
  },
  {
    name: "MEP",
    images: ["assets/img/portfolio_imgs/15.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR60-yeGyiTnSYaH6_E6FsWSSoZXrtkUgurAx1qsjJR_RPiyRKCGTmAa0rF9nv4VQ/pubhtml?widget=true&amp;headers=false",
    excerpt: "Mechanical, electrical, and plumbing project insights.",
    description: "In-depth analysis of mechanical, electrical, and plumbing aspects of commercial projects."
  },
  {
    name: "Paint Sample",
    images: ["assets/img/portfolio_imgs/16.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTS-F48MkUwFVtd6smJfb2xTUGBo9eW5nxtG0GQGfhHk56cpAFPWNUfsvA54WaTVg/pubhtml?widget=true&amp;headers=false",
    excerpt: "Cost and requirements for painting projects.",
    description: "Provides detailed cost estimates and project requirements for painting and finishing work in construction."
  },
  {
    name: "Rennovation",
    images: ["assets/img/portfolio_imgs/17.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQow8cKGqKzmdWaKBfkZS6Br8gBl9tZwg0x1EuAM4CldhTd1Ra0FmaESzPFZYASoA/pubhtml?widget=true&amp;headers=false",
    excerpt: "Estimates for renovation projects.",
    description: "Comprehensive data and estimates for various types of renovation projects."
  },
  {
    name: "Residence Electrical",
    images: ["assets/img/portfolio_imgs/18.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSCHRXvVmkOq4wftC1MJazVeZlq_UHF2Fb_GmyeaBXoyYEDe3VaRQn8QTDpY4nTcQ/pubhtml?widget=true&amp;headers=false",
    excerpt: "Electrical estimates for residential projects.",
    description: "Focused on the electrical installations and requirements for residential buildings, providing detailed estimates and analysis."
  },
  {
    name: "Roofing Takeoff 2 Sample",
    images: ["assets/img/portfolio_imgs/19.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjuBWj3MkySpIqgo_-4mDMNa7kchDCdmYRwOWgcf8f7v1sI7Wd24-m9xt6dmHAtw/pubhtml?widget=true&amp;headers=false",
    excerpt: "Detailed roofing material takeoff and cost analysis.",
    description: "Provides a detailed breakdown of materials and costs for roofing projects, ensuring accurate budget planning and procurement."
  },
  {
    name: "Roofing Takeoff Sample",
    images: ["assets/img/portfolio_imgs/20.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrwZpRAGxrcYoKHNNfjJywH5cn9D8Pjti4YLpzOPsAdTi6Kr_7WrHK233L0Kfy8w/pubhtml?widget=true&amp;headers=false",
    excerpt: "Roofing estimates for commercial and residential projects.",
    description: "Comprehensive estimation of roofing materials and costs for a wide range of construction projects."
  },
  {
    name: "Sample-GC",
    images: ["assets/img/portfolio_imgs/21.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqbJOAfd6IOygMgS3jjpMF4Bk0T9brkmXvMiE4Jf6ec6yhlZLLosu0vtMfx7VjJg/pubhtml?widget=true&amp;headers=false",
    excerpt: "General construction project estimation and data analysis.",
    description: "A general overview and detailed estimation for various aspects of construction projects."
  },
  {
    name: "Specialities -Sample",
    images: ["assets/img/portfolio_imgs/22.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFR4ZDbZoGdql94oMvcx8c46ifSYAJeisyw5_XDSeTKjNj-Pc_NUD9u7CyLD0ONg/pubhtml?widget=true&amp;headers=false",
    excerpt: "Detailed breakdown of specialty items and services in construction.",
    description: "Focused on specific specialty areas within construction projects, providing in-depth estimation and analysis."
  },
  {
    name: "Structure Steel Small",
    images: ["assets/img/portfolio_imgs/23.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0a1ll6sX3VlXV03ZA-jE0BvcydNIwLnGv7RaX0tRV0leENTe--8-tbEbWp3AxHQ/pubhtml?widget=true&amp;headers=false",
    excerpt: "Estimation and planning for small-scale steel structures.",
    description: "Provides estimates and project details for small-scale steel construction, focusing on cost-effectiveness and efficiency."
  },
  {
    name: "Structure Steel Sample Big",
    images: ["assets/img/portfolio_imgs/24.jpg"],
    embedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS8LQmfhaYCcq_DqnaCapdFXKTywjVit1iFl2DA7SOx8zopthv51BG84M_2KmXYDQ/pubhtml?widget=true&amp;headers=false",
    excerpt: "Large-scale structural steel project estimates.",
    description: "Comprehensive details and estimates for large-scale structural steel projects, providing insights into material costs and logistics."
  }
];

export default projects;
