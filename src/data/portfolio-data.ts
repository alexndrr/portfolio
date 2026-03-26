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
      { name: 'JavaScript', level: 'beginner' },
      { name: 'TypeScript', level: 'beginner' },
    ],
  },
  {
    category: 'Frameworks',
    icon: 'layers',
    items: [
      { name: '.NET / ASP.NET', level: 'expert' },
      { name: 'Spring Boot', level: 'proficient' },
      { name: 'Blazor', level: 'proficient' },
      { name: 'AngularJS', level: 'beginner' },
      { name: 'Next.js', level: 'beginner' },
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
    company: 'RedWood Digital',
    period: 'Jul 2024 – Jan 2025',
    type: 'Full-time',
    summary: 'Worked on backend integrations and system automation for eCommerce solutions.',
    highlights: [
      'Implemented integrations between ERP systems and platforms such as BigCommerce and WooCommerce',
      'Built background synchronization jobs processing 10k+ records daily for real-time stock and pricing updates',
      'Designed and implemented database models to ensure data integrity and performance across regionwide stores',
      'Took on a mentoring role — guided fellow developers on database modeling, best practices, and code reviews',
    ],
  },
  {
    id: 3,
    role: 'Junior Software Developer',
    company: 'Elephant Solutions',
    period: 'Aug 2022 – Jan 2025',
    type: 'Full-time',
    summary: 'Contributed to backend development and system integration across multiple enterprise client projects.',
    highlights: [
      'Developed backend modules and integrated third-party APIs including SAP, PKI services, and security platforms',
      'Maintained and enhanced multiple legacy codebases, reducing error rates in production by 40%',
      'Delivered features used by 500+ active users; implemented RabbitMQ & Kafka pipelines for real-time data exchange',
      'Led planning and development of an internal timesheet system and mentored teammates on OOP and database modeling',
    ],
  },
  {
    id: 4,
    role: 'Engineer – Associate for IT',
    company: 'TelradNet',
    period: 'Nov 2021 – Jul 2022',
    type: 'Internship',
    summary: 'Focused on backend automation, software modernization, and system reliability.',
    highlights: [
      'Developed and deployed automation solutions using Java Spring Boot for email and notification delivery',
      'Upgraded outdated internal software used for customer provisioning tracking',
      'Created APIs connecting DVB-C and IPTV provisioning systems, ensuring service delivery to 10,000+ subscribers',
      'Rebuilt outdated tracking tools, cutting manual data entry time by 50%',
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

export const education = {
  degree: "Bachelor's Degree in Information Technology Engineering",
  institution: 'College of Applied Studies for Information Technologies (ITS)',
  location: 'Belgrade, Serbia',
  period: '2018 – 2021',
}
