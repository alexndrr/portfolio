export const personalInfo = {
  name: 'Aleksandar Radišić',
  firstName: 'Aleksandar',
  title: 'Backend Software Developer',
  tagline: 'Building robust systems & scalable integrations',
  bio: 'Results-driven Backend Developer with 4+ years of hands-on experience in C# and Java, specializing in system integration and process automation. I have built ERP integrations, BigCommerce and WooCommerce connectors, automated synchronization pipelines, and PKI infrastructure. Beyond code, I bring project management discipline, a collaborative mindset, and a mentoring style that helps teammates grow and deliver.',
  location: 'Belgrade, Serbia',
  email: 'alekrad.private@gmail.com',
  github: 'https://github.com/alexndrr',
  linkedin: 'https://www.linkedin.com/in/aleksandar-radi%C5%A1i%C4%87-a2ba9a245',
  cvUrl: '/cv.pdf',
  roles: [
    'Backend Developer',
    'System Integrator',
    'Full Stack Developer',
    '.NET Specialist',
    'API Architect',
  ],
}

export const stats = [
  { value: '4+', label: 'Years of Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '20+', label: 'Technologies Known' },
  { value: '3+', label: 'Legacy Systems Modernized' },
]

export const skills = [
  {
    category: 'Languages',
    icon: 'code',
    items: [
      { name: 'C#', level: 'expert' },
      { name: 'Java', level: 'proficient' },
      { name: 'SQL', level: 'expert' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
    ],
  },
  {
    category: 'Frameworks',
    icon: 'layers',
    items: [
      { name: '.NET / ASP.NET', level: 'expert' },
      { name: 'Spring Boot', level: 'proficient' },
      { name: 'Blazor', level: 'proficient' },
      { name: '.NET MAUI', level: 'beginner' },
      { name: 'AngularJS', level: 'proficient' },
      { name: 'Next.js', level: 'proficient' },
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    items: [
      { name: 'SQL Server', level: 'expert' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'MySQL', level: 'proficient' },
    ],
  },
  {
    category: 'Messaging & APIs',
    icon: 'zap',
    items: [
      { name: 'REST API', level: 'expert' },
      { name: 'RabbitMQ', level: 'proficient' },
      { name: 'Apache Kafka', level: 'proficient' },
      { name: 'ADO.NET', level: 'expert' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'tool',
    items: [
      { name: 'Docker', level: 'proficient' },
      { name: 'Kubernetes', level: 'beginner' },
      { name: 'Git / Bitbucket', level: 'expert' },
      { name: 'CI/CD', level: 'proficient' },
      { name: 'IIS', level: 'proficient' },
      { name: 'Grafana', level: 'proficient' },
    ],
  },
  {
    category: 'Architecture',
    icon: 'cpu',
    items: [
      { name: 'Microservices', level: 'proficient' },
      { name: 'System Integration', level: 'expert' },
      { name: 'Database Modeling', level: 'expert' },
      { name: 'Process Automation', level: 'expert' },
    ],
  },
]

export const experience = [
  {
    id: 1,
    role: 'CRM Software Developer',
    company: 'mts sistemi integracije',
    period: 'Feb 2025 – Present',
    type: 'Full-time',
    summary: 'Modernized and refactored legacy CRM components to align with current programming standards.',
    highlights: [
      'Rewrote core backend modules, reducing code complexity and improving maintainability by 35%',
      'Extracted key system functionalities from outdated modules and rebuilt them following best practices',
      'Collaborated on optimizing SQL procedures and database structures for smoother workloads',
      'Reorganized code to integrate new database tables and improve data handling efficiency',
    ],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Elephant Solutions',
    period: 'Nov 2021 – Feb 2025',
    type: 'Full-time',
    summary: 'Backend development and system integration across telecom and eCommerce domains — progressed from intern to Software Developer.',
    highlights: [
      'Designed, built, and integrated backend modules and third-party REST APIs into enterprise client applications, delivering new features to 500+ active users',
      'Delivered backend integrations between internal ERP systems and BigCommerce storefronts, enabling real-time eCommerce operations for retail clients',
      'Engineered background synchronization services processing 10,000+ product, stock, and pricing records daily, keeping storefronts continuously aligned with the ERP source of truth',
      'Built provisioning APIs connecting DVB-C and IPTV systems in Java Spring Boot, ensuring reliable service delivery to 10,000+ telecom subscribers',
      'Developed automation solutions for internal operations, including email and notification delivery, cutting manual data-entry time by 50%',
      'Maintained and modernized multiple legacy codebases, reducing production error rates by ~40%',
      'Mentored junior developers and contributed to code reviews, project coordination, and Agile delivery',
    ],
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    platform: 'Anthropic Academy',
    month: 'Mar',
    year: '2026',
    skills: ['Claude Code', 'Model Context Protocol (MCP)'],
    credentialUrl: 'http://verify.skilljar.com/c/3cpwngcik8es',
  },
  {
    id: 2,
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    platform: 'Anthropic Academy',
    month: 'Mar',
    year: '2026',
    skills: ['Generative AI', 'Prompt Engineering'],
    credentialUrl: 'http://verify.skilljar.com/c/9zasodjaayvz',
  },
  {
    id: 3,
    title: 'Claude 101',
    issuer: 'Anthropic',
    platform: 'Anthropic Academy',
    month: 'Mar',
    year: '2026',
    skills: ['Anthropic Claude', 'Claude Skills'],
    credentialUrl: 'http://verify.skilljar.com/c/fqjbejtex6kt',
  },
  {
    id: 4,
    title: 'Docker & Kubernetes: The Complete Practical Guide',
    issuer: 'Udemy',
    platform: 'Udemy',
    month: 'Mar',
    year: '2026',
    credentialId: 'UC-efe69b36-8bde-4a8d-9b67-dc6ac9c53b41',
    skills: ['Docker', 'Kubernetes'],
    credentialUrl: 'https://www.udemy.com/certificate/UC-efe69b36-8bde-4a8d-9b67-dc6ac9c53b41/',
  },
  {
    id: 5,
    title: 'Claude Code - The Practical Guide',
    issuer: 'Udemy',
    platform: 'Udemy',
    month: 'Apr',
    year: '2026',
    credentialId: 'UC-03d91f67-2e12-41b9-82dd-6305863ebb17',
    skills: ['Claude Code', 'AI-Assisted Development', 'Developer Productivity'],
    credentialUrl: 'https://ude.my/UC-03d91f67-2e12-41b9-82dd-6305863ebb17',
  },
  {
    id: 6,
    title: 'Make an E-Commerce Website with Blazor WebAssembly in .NET 6',
    issuer: 'Udemy',
    platform: 'Udemy',
    month: 'Mar',
    year: '2023',
    credentialId: 'UC-61ea1095-7ae2-4757-9d06-6794437423ca',
    skills: ['Blazor', '.NET'],
    credentialUrl: 'https://www.udemy.com/certificate/UC-61ea1095-7ae2-4757-9d06-6794437423ca/',
  },
]

export const projects = [
  {
    id: 1,
    title: 'This Portfolio',
    description:
      "The very site you're looking at — built with React, TypeScript, Tailwind CSS, and Framer Motion. Dockerized and deployed on Netlify.",
    tags: ['React', 'TypeScript', 'Tailwind', 'Docker'],
    github: 'https://github.com/alexndrr/portfolio',
    status: 'live' as const,
  },
]

export const education = {
  degree: "Bachelor's Degree in Information Technology Engineering",
  institution: 'College of Applied Studies for Information Technologies (ITS)',
  location: 'Belgrade, Serbia',
  period: '2018 – 2021',
}
