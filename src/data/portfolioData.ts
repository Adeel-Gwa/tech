import { ExperienceItem, ProcessStep, ServiceItem, TechSkill, TestimonialItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'fullstack',
    number: '01',
    title: 'Full-Stack Development',
    subtitle: 'Scalable Architecture & Web Applications',
    description:
      'Modern, high-performance web applications built from the ground up using React, Next.js, Node.js, TypeScript, and cloud databases. Engineered for speed, clean modular code, and high search engine visibility.',
    highlights: [
      'Next.js & React single-page and SSR applications',
      'Node.js & Express REST/GraphQL APIs',
      'Database design (PostgreSQL, MySQL, MongoDB, Firebase)',
      'State synchronization & zero-latency edge caching'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    icon: 'Code',
    gradient: 'from-blue-500/20 via-indigo-600/10 to-transparent'
  },
  {
    id: 'genai',
    number: '02',
    title: 'Generative AI Solutions',
    subtitle: 'Intelligent Workflows & LLM Integration',
    description:
      'AI-powered applications, document intelligence, conversational assistants, and automated workflows. Leveraging Google Gemini, vector embeddings, and multimodal models to transform raw business data into actionable answers.',
    highlights: [
      'Google Gemini & OpenAI API fine-tuning & integration',
      'Retrieval-Augmented Generation (RAG) on private docs',
      'Automated multimodal content & video captioning',
      'AI agentic workflows & custom prompt matrix systems'
    ],
    techStack: ['Gemini AI', 'Python', 'Vector DBs', 'RAG Pipelines', 'LangChain', 'Node.js'],
    icon: 'Sparkles',
    gradient: 'from-violet-500/20 via-purple-600/10 to-transparent'
  },
  {
    id: 'saas',
    number: '03',
    title: 'SaaS Product Engineering',
    subtitle: 'From Concept to Recurring Revenue',
    description:
      'End-to-end software-as-a-service development. Designing multi-tenant architectures, subscription billing, authentication, role-based access control, and telemetry dashboards that scale smoothly.',
    highlights: [
      'Stripe & multi-currency recurring subscription billing',
      'Multi-tenant database tenancy & RBAC permissions',
      'Customer churn mitigation & telemetry analytics',
      'Zero-upload client-side processing via WebAssembly'
    ],
    techStack: ['Next.js', 'Stripe', 'Supabase', 'Docker', 'Redis', 'Tailwind CSS'],
    icon: 'Rocket',
    gradient: 'from-fuchsia-500/20 via-pink-600/10 to-transparent'
  },
  {
    id: 'uiux',
    number: '04',
    title: 'UI/UX & Creative Development',
    subtitle: 'Interactive Aesthetics & Design Systems',
    description:
      'Modern, human-centered interfaces focused on conversion, tactile micro-interactions, and visual distinction. From initial hand-drawn wireframes to design tokens in Figma and pixel-perfect React code.',
    highlights: [
      'Complete mobile app & web design systems in Figma',
      'Wireframing & empathetic user journey mapping',
      'Interactive 3D visuals & Three.js canvas compositions',
      'WCAG AA accessible contrast & micro-interactions'
    ],
    techStack: ['Figma', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Design Tokens'],
    icon: 'Palette',
    gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent'
  },
  {
    id: 'ecommerce',
    number: '05',
    title: 'E-Commerce & Digital Storefronts',
    subtitle: 'High-Converting Buying Experiences',
    description:
      'High-converting online stores, custom commerce checkouts, and bespoke product configurators tailored for luxury brands, fashion streetwear, and subscription retail.',
    highlights: [
      'Headless Shopify Storefront API & custom checkouts',
      'Instant 1-step cart checkout with Apple Pay / Stripe',
      'Interactive product visualizers & fragrance/size quizzes',
      'Real-time inventory sync & warehouse dispatch webhooks'
    ],
    techStack: ['Shopify API', 'React', 'Stripe', 'Tailwind CSS', 'Next.js'],
    icon: 'ShoppingBag',
    gradient: 'from-amber-500/20 via-orange-600/10 to-transparent'
  },
  {
    id: 'cybersecurity',
    number: '06',
    title: 'Security-Conscious Development',
    subtitle: 'Hardened Systems & Threat Defense',
    description:
      'Security-first engineering practices safeguarding applications against the OWASP Top 10 vulnerabilities. Penetration testing audits, Zero-Trust authentication, and tamper-proof logging.',
    highlights: [
      'OWASP Top 10 vulnerability prevention & automated linting',
      'WebAuthn / FIDO2 biometric authentication & MFA',
      'DDoS rate-limiting shields & token-bucket algorithms',
      'Tamper-proof cryptographically signed audit ledgers'
    ],
    techStack: ['WebAuthn', 'OpenSSL', 'Redis Rate Limiter', 'Docker', 'Security Audits'],
    icon: 'ShieldCheck',
    gradient: 'from-emerald-500/20 via-teal-600/10 to-transparent'
  }
];

export const skillsData: TechSkill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', level: 'Expert (6+ Yrs)', iconName: 'Atom', highlight: true },
  { name: 'Next.js', category: 'Frontend', level: 'Advanced', iconName: 'Layers', highlight: true },
  { name: 'TypeScript', category: 'Frontend', level: 'Advanced', iconName: 'FileCode', highlight: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Expert', iconName: 'Cpu', highlight: true },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', iconName: 'Wind', highlight: true },
  { name: 'HTML5 & Semantic SEO', category: 'Frontend', level: 'Expert', iconName: 'Code', highlight: false },
  { name: 'CSS3 / Modern Layouts', category: 'Frontend', level: 'Expert', iconName: 'Maximize', highlight: false },
  { name: 'Three.js / 3D Canvas', category: 'Frontend', level: 'Intermediate', iconName: 'Box', highlight: true },

  // AI & GenAI
  { name: 'Gemini AI API', category: 'AI & Machine Learning', level: 'Expert', iconName: 'Sparkles', highlight: true },
  { name: 'OpenAI APIs', category: 'AI & Machine Learning', level: 'Advanced', iconName: 'Bot', highlight: true },
  { name: 'Generative AI Workflows', category: 'AI & Machine Learning', level: 'Specialist', iconName: 'Brain', highlight: true },
  { name: 'RAG & Vector Search', category: 'AI & Machine Learning', level: 'Advanced', iconName: 'Database', highlight: true },
  { name: 'Prompt Engineering', category: 'AI & Machine Learning', level: 'Expert', iconName: 'Terminal', highlight: false },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Expert', iconName: 'Server', highlight: true },
  { name: 'Express.js', category: 'Backend', level: 'Advanced', iconName: 'Zap', highlight: false },
  { name: 'PHP & Modern CMS', category: 'Backend', level: 'Proficient', iconName: 'FileText', highlight: false },
  { name: 'REST & GraphQL APIs', category: 'Backend', level: 'Advanced', iconName: 'Share2', highlight: true },
  { name: 'WebSockets & Realtime', category: 'Backend', level: 'Advanced', iconName: 'Activity', highlight: false },

  // Databases & Cloud
  { name: 'PostgreSQL', category: 'Database & Cloud', level: 'Advanced', iconName: 'Database', highlight: true },
  { name: 'MySQL', category: 'Database & Cloud', level: 'Advanced', iconName: 'HardDrive', highlight: false },
  { name: 'MongoDB', category: 'Database & Cloud', level: 'Advanced', iconName: 'Boxes', highlight: false },
  { name: 'Firebase & Firestore', category: 'Database & Cloud', level: 'Expert', iconName: 'Flame', highlight: true },
  { name: 'Supabase', category: 'Database & Cloud', level: 'Advanced', iconName: 'Bolt', highlight: false },
  { name: 'Git & GitHub', category: 'Database & Cloud', level: 'Expert', iconName: 'GitBranch', highlight: true },
  { name: 'Docker Containers', category: 'Database & Cloud', level: 'Proficient', iconName: 'Package', highlight: false },

  // Design
  { name: 'Figma (UI/UX)', category: 'Design & Tools', level: 'Expert', iconName: 'Figma', highlight: true },
  { name: 'Canva Pro', category: 'Design & Tools', level: 'Advanced', iconName: 'Image', highlight: false },
  { name: 'Wireframing & UX Research', category: 'Design & Tools', level: 'Advanced', iconName: 'PenTool', highlight: true },
  { name: 'Cybersecurity Fundamentals', category: 'Design & Tools', level: 'Security Conscious', iconName: 'Shield', highlight: true }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'webdev-masters',
    period: '2022 — Present',
    role: 'Founder & Lead Full-Stack Architect',
    organization: 'WebDev Masters',
    location: 'Pakistan & Remote (UK / Global)',
    description:
      'Founded and scaled a digital product studio building AI-powered platforms, custom web applications, and high-conversion e-commerce systems for international clients.',
    achievements: [
      'Delivered 70+ client projects across South Asia, UAE, and United Kingdom with 100% on-time milestone record',
      'Architected WebDev AI Space (webdevai.space), supporting multimodal LLM workflows for technical teams',
      'Managed agile product lifecycles from Figma prototyping to Dockerized cloud deployment',
      'Mentored junior engineers and university students in modern TypeScript and React ecosystems'
    ],
    skills: ['Leadership', 'React', 'Next.js', 'Generative AI', 'System Architecture', 'Client Management']
  },
  {
    id: 'senior-fullstack',
    period: '2020 — 2022',
    role: 'Full-Stack Developer & Technical Consultant',
    organization: 'Independent Client Advisory',
    location: 'Pakistan & United Kingdom Clients',
    description:
      'Engineered scalable commercial web applications, real estate platforms, SaaS dashboards, and automated API backends for UK and regional businesses.',
    achievements: [
      'Designed and deployed high-converting real estate portals including EMAAR Dubai discovery tools and luxury living sites',
      'Integrated Stripe, PayPal, and international payment gateways across SaaS and e-commerce platforms',
      'Engineered optimized database indexing that reduced dashboard query response times by over 60%',
      'Implemented robust zero-downtime CI/CD deployment pipelines'
    ],
    skills: ['Full-Stack Engineering', 'API Design', 'PostgreSQL', 'Stripe Billing', 'Performance Optimization']
  },
  {
    id: 'genai-specialist',
    period: '2023 — Present',
    role: 'Generative AI Research & Workflow Developer',
    organization: 'WebDev AI Labs',
    location: 'Remote',
    description:
      'Pioneering practical applications of Google Gemini models, structured RAG pipelines, and automated speech-to-captioning pipelines.',
    achievements: [
      'Created WebCapAI automated video subtitle synchronizer processing thousands of audio minutes',
      'Developed prompt evaluation matrices decreasing model invocation token costs by 35%',
      'Built in-browser code assistance engines with AST syntax validation and sandboxed execution'
    ],
    skills: ['Google Gemini', 'RAG Pipelines', 'Prompt Engineering', 'Vector Databases', 'Audio/Video AI']
  },
  {
    id: 'cybersecurity-lead',
    period: '2019 — 2021',
    role: 'Cybersecurity Education & Secure Dev Lead',
    organization: 'Academic & Community Initiatives',
    location: 'Pakistan',
    description:
      'Championed security-conscious coding principles, student workshops on network defense fundamentals, and web application vulnerability assessment.',
    achievements: [
      'Conducted security audits uncovering critical OWASP vulnerabilities in commercial web portals prior to launch',
      'Authored educational guides on Zero-Trust authentication and cryptographically verifiable audit logging',
      'Mentored undergraduate developers in secure authentication and password hashing algorithms'
    ],
    skills: ['Cybersecurity', 'Vulnerability Assessment', 'OWASP Top 10', 'WebAuthn', 'Ethical Standards']
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Requirements & Architecture',
    description:
      'Deep dive into the problem space, target audience personas, competitor landscape, and technical specifications. We define clear milestones and avoid costly rework later.',
    deliverables: ['Functional Spec Document', 'Tech Stack Selection', 'Information Architecture', 'Project Timeline']
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'System Design & Data Models',
    description:
      'Define database schemas, REST/GraphQL API contracts, security authentication boundaries, and state management flow before writing code.',
    deliverables: ['Database ERD Schemas', 'API Contract Specs', 'Security Review', 'Milestone Roadmap']
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'Wireframes to High-Fidelity UI',
    description:
      'Create empathetic user experiences. Starting from manual wireframes to high-fidelity Figma prototypes with custom typography, tokens, and tactile micro-interactions.',
    deliverables: ['Wireframes & User Flows', 'Figma Interactive Prototype', 'Design Tokens & Colors', 'Design Sign-off']
  },
  {
    step: '04',
    title: 'Build',
    subtitle: 'Full-Stack Engineering & AI',
    description:
      'Write clean, modular, typed TypeScript code. Integrate AI models, database queries, responsive UI components, and thorough error handling.',
    deliverables: ['Production TypeScript Code', 'API & AI Model Integrations', 'Unit & Integration Tests', 'Staging Preview']
  },
  {
    step: '05',
    title: 'Launch',
    subtitle: 'Deploy, Optimize & Scale',
    description:
      'Deploy to high-speed cloud infrastructure with automated CI/CD pipelines, SSL certificates, performance audits, and post-launch analytics.',
    deliverables: ['Cloud Deployment', 'Lighthouse 90+ Performance', 'SEO Schema Metadata', 'Documentation Handover']
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    client: 'David Harrison',
    role: 'Managing Director',
    company: 'Sterling Property Group',
    market: 'United Kingdom',
    feedback:
      'Muhammad Adeel brought an exceptional level of technical rigor and design sophistication to our digital real estate portal. The search speed and aesthetic polish directly impressed our private high-net-worth investors.',
    projectTitle: 'Luxury Living & Real Estate Portal',
    isPlaceholder: false
  },
  {
    id: 't2',
    client: 'Tariq Mehmood',
    role: 'Co-Founder & CTO',
    company: 'EduTech Innovations',
    market: 'Pakistan',
    feedback:
      'Adeel built our interactive learning platform with remarkable speed and flawless execution. The browser-based code playground and student dashboard transformed our student completion rates.',
    projectTitle: 'Interactive Learning & Testing Academy',
    isPlaceholder: false
  },
  {
    id: 't3',
    client: 'Sophia Chen',
    role: 'Head of Product',
    company: 'NeuralStream Labs',
    market: 'Global',
    feedback:
      'Working with Muhammad on our Generative AI tooling was effortless. He has a deep grasp of both modern frontend aesthetics and complex LLM stream latency handling.',
    projectTitle: 'Generative AI Productivity Suite',
    isPlaceholder: false
  },
  {
    id: 't4',
    client: 'Client Verification Slot',
    role: 'Senior Executive',
    company: 'Enterprise Partner',
    market: 'United Kingdom / Global',
    feedback:
      'Client testimonial will appear here. Reserved for upcoming Q3 enterprise collaboration case study.',
    projectTitle: 'Cybersecurity Compliance Platform',
    isPlaceholder: true
  }
];
