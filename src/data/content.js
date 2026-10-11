// ---------------------------------------------------------------------------
// All website text lives here, so it can be reviewed against the company
// profile and edited without touching any component.
// Source: "Chapter II – Profile of Sri Auto Parts Pvt. Ltd." (supplied document)
// ---------------------------------------------------------------------------

export const company = {
  name: 'Sri Auto Parts',
  legalName: 'Sri Auto Parts Private Limited',
  shortLocation: 'Vellore, Tamil Nadu, India',
  logo: '/logo.png',
}

// Location & contact -------------------------------------------------------
// The supplied profile gives only "Vellore" as the company location.
// No telephone number, e-mail address or street address is published here.
export const location = {
  city: 'Vellore',
  region: 'Tamil Nadu, India',
  mapsViewUrl:
    'https://www.google.com/maps/search/?api=1&query=Vellore%2C%20Tamil%20Nadu%2C%20India',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Vellore%2C%20Tamil%20Nadu%2C%20India',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Vellore,Tamil+Nadu,India&output=embed',
  facilitiesNote:
    'The company profile describes three manufacturing facilities in Faridabad (NCR).',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'products', label: 'Products' },
  { id: 'industries', label: 'Industries' },
  { id: 'quality', label: 'Quality' },
  { id: 'vision', label: 'Vision & Mission' },
  { id: 'contact', label: 'Contact' },
]

// Home ---------------------------------------------------------------------
export const hero = {
  eyebrow: 'Sheet Metal Components · Automotive Manufacturing',
  title: 'Precision Manufacturing.',
  titleAccent: 'Trusted Performance.',
  intro:
    'Sri Auto Parts delivers sheet metal pressing and forming, fabrication, component assemblies, tooling and surface coating solutions to the automobile, construction, agri and telecom industries.',
}

export const heroStats = [
  { value: '2000', label: 'Year founded' },
  { value: '150,000', label: 'Sq. ft. manufacturing area' },
  { value: '800+', label: 'People in the workforce' },
  { value: '40 Million', label: 'Parts per annum capacity' },
]

// About --------------------------------------------------------------------
export const about = {
  lead:
    'Sri Auto Parts is one of India’s leading manufacturers of a wide range of sheet metal works, including Sheet Metal Pressing and Forming, Light, Medium and Heavy Fabrication, Component Assemblies, Tooling and Surface Coating Solutions.',
  blocks: [
    {
      title: 'Overview',
      text:
        'Delivering excellence through enterprise for more than two decades, Sri Auto Parts is a well-diversified, multi-location and multi-product Indian company. Its passion for new-age technology has made it a dominant contender among India’s sheet metal component manufacturers.',
    },
    {
      title: 'Leadership',
      text:
        'The company is managed by a distinguished first-generation leader and entrepreneur of the year awardee, Mr. Dinesh Gumber (Managing Director), who has leveraged world-class infrastructure, deep-domain technical capability and unwavering quality assurance to meet the high-precision needs of its customers.',
    },
    {
      title: 'Design & Innovation',
      text:
        'Fine-tuned design cues have helped the company win prototype development projects from leading manufacturers in the Automotive Ancillary and FMCG sectors worldwide, strengthening its ability to carry out process design and development for diversified, high-growth industry verticals.',
    },
    {
      title: 'Ethics & Relationships',
      text:
        'Effective after-sales support, sound business ethics and transparent policies have enabled the company to maintain strong, productive relationships with its long-standing customer base.',
    },
  ],
  facts: [
    { value: '2000', label: 'Founded in the automotive industrial hub' },
    { value: '3', label: 'Manufacturing facilities' },
    { value: '150,000 sq. ft.', label: 'Total manufacturing area' },
    { value: '800+', label: 'Manpower' },
  ],
  lookingAhead: {
    title: 'Looking Ahead',
    items: [
      'Expansion into the Electric Vehicle (EV) segment.',
      'Strategic investment across Sheet Metal Pressing and Forming, Fabrication, Component Assemblies, Tooling, Surface Coating and Plating.',
      'An upcoming e-waste management division focused on Li-ion battery recycling.',
    ],
  },
  source: 'Source: Company profile document (Chapter II).',
}

// Capabilities -------------------------------------------------------------
export const capabilities = [
  {
    icon: 'press',
    title: 'Sheet Metal Pressing and Forming',
    text:
      'Pressing and forming of sheet metal components, including the deep drawing needed for complex two-wheeler parts, using modern machinery and an experienced workforce.',
  },
  {
    icon: 'fabrication',
    title: 'Fabrication',
    text:
      'Light, medium and heavy fabrication to meet the specific needs of automotive and allied industrial customers.',
  },
  {
    icon: 'assembly',
    title: 'Component Assemblies',
    text:
      'Component assemblies backed by the company’s expertise in tooling, development, manufacturing and testing.',
  },
  {
    icon: 'tooling',
    title: 'Tooling',
    text:
      'Decades of proven expertise in tooling and development that help the company deliver both cost and quality advantages.',
  },
  {
    icon: 'coating',
    title: 'Surface Coating Solutions',
    text:
      'Surface coating solutions for sheet metal products, with plating among the divisions the company plans to strengthen.',
  },
]

// Products -------------------------------------------------------------------
// "art" keys map to the illustrations in components/Illustrations.jsx.
// These are representative drawings, NOT photographs of actual company output.
export const products = [
  {
    art: 'fender',
    title: 'Two-Wheeler Sheet Metal Parts',
    text:
      'Metal parts and spare parts for two-wheelers — an area the company highlights as a core strength.',
  },
  {
    art: 'drawn',
    title: 'Deep-Drawn Components',
    text:
      'Complex two-wheeler parts that require advanced deep drawing sheet metal processes.',
  },
  {
    art: 'assembly',
    title: 'Component Assemblies',
    text:
      'Assembled sheet metal components for automotive and other precision applications.',
  },
  {
    art: 'frame',
    title: 'Fabricated Structures',
    text:
      'Light, medium and heavy fabricated parts produced to customer requirements.',
  },
  {
    art: 'cabinet',
    title: 'Panels, Cabinets & Towers',
    text:
      'Panels, cabinets and towers for the telecom infrastructure industry.',
  },
  {
    art: 'bracket',
    title: 'Pressed & Coated Components',
    text:
      'Pressed sheet metal components supported by surface coating solutions.',
  },
]

export const productsDisclaimer =
  'Images on this page are illustrative artwork only. They are not photographs of products manufactured by Sri Auto Parts.'

// Industries ---------------------------------------------------------------
export const industries = [
  {
    icon: 'car',
    title: 'Automobile',
    text:
      'High-precision components for the automobile industry, with a strong focus on two-wheeler parts, and prototype development wins from leading Automotive Ancillary manufacturers worldwide.',
  },
  {
    icon: 'building',
    title: 'Construction',
    text:
      'Precision sheet metal products for the construction industry, one of the sectors the company serves.',
  },
  {
    icon: 'tractor',
    title: 'Agriculture',
    text:
      'Precision products for the agri industry, backed by deep-domain technical capability and quality assurance.',
  },
  {
    icon: 'tower',
    title: 'Telecom',
    text:
      'Panels, cabinets and towers for the telecom infrastructure industry.',
  },
]

export const industriesNote =
  'Emerging segment: the company is also set to foray into Electric Vehicles (EV).'

// Quality ------------------------------------------------------------------
export const quality = {
  intro:
    'Quality is built into every stage — from tooling and development through manufacturing and testing — under a stringent quality control system that covers the entire product range.',
  standards: ['ISO 9001:2015', 'IATF 16949:2016'],
  standardsNote: 'Quality standards the company complies with, as stated in its profile.',
  pillars: [
    {
      icon: 'shield',
      title: 'Quality Control',
      text:
        'A stringent quality control system applied across the entire product range, supported by the company’s testing capabilities.',
    },
    {
      icon: 'gauge',
      title: 'Precision',
      text:
        'Technologically advanced infrastructure and precision in the manufacturing process, with the best technologies in mechanical, statistical and management areas.',
    },
    {
      icon: 'handshake',
      title: 'Customer Satisfaction',
      text:
        'A principled approach to customer satisfaction, effective after-sales support and on-time deliveries.',
    },
    {
      icon: 'globe',
      title: 'Global Benchmarks',
      text:
        'Manufacturing and supplying superior quality products as per international standards.',
    },
  ],
}

// Vision & Mission — wording taken directly from the company profile ----------
export const vision =
  'To be a global leader and a brand of choice for our valued customers, an employer of choice for our employees, and a forward-looking company with sustainable performance and responsible business practices!'

export const coreValuesSummary =
  'Core values: passion for excellence, absolute transparency, and people-centricity.'

export const missionIntro =
  'Sri Auto Parts has an action plan to achieve all its goals by approaches stated below:'

export const mission = [
  'Ensuring on-time deliveries with 100% customer satisfaction',
  'A relentless quest for excellence in all business areas',
  'Manufacturing and supplying the best quality products',
  'Striving for a level of product quality that exceeds expectations',
  'Utilizing the best technologies in mechanical, statistical, and management areas',
  'Treating our customers, suppliers, and employees with trust and respect.',
  'Maintaining the highest standards of honesty and integrity in our relationships with customers, suppliers, employees, service groups, and community.',
]

export const coreValues = [
  { title: 'Customer Focus', text: 'Maximum customer satisfaction through the highest quality standards and continuous improvement.' },
  { title: 'Passion for Excellence', text: 'Excellence in products, processes and services through continuous improvement and shared knowledge.' },
  { title: 'Pioneering', text: 'Staying bold and agile, using deep customer insight to create innovative solutions.' },
  { title: 'Transparency and Integrity', text: 'Full responsibility for actions, in an ethical, safe and transparent environment.' },
  { title: 'Innovation, Ideation, Creation', text: 'Creating value-added solutions for emerging needs.' },
]
