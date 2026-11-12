export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'UI/UX Design' | 'Frontend Engineering' | 'Full Stack & Web';
  role: string;
  duration: string;
  company: string;
  techStack: string[];
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: { title: string; description: string }[];
  impactMetrics: { label: string; value: string; desc: string }[];
  image: string;
  liveUrl?: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    highlight?: boolean;
    tags?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  points: string[];
  techStack: string[];
  keyHighlight: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  methods: string[];
  deliverables: string[];
  tools: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Deepankar Sharma",
    title: "UI/UX Designer & Frontend Developer",
    location: "Gurgaon, Haryana, India",
    experienceYears: "2+ Years",
    tagline: "Designing intuitive digital experiences. Building responsive, scalable web applications.",
    heroHeadline: "Designing experiences. Building possibilities.",
    heroIntro: "Hey, I'm Deepankar Sharma — a UI/UX Designer and Frontend Developer passionate about transforming complex ideas into intuitive, beautiful, and functional digital experiences.",
    positioning: "I bridge the gap between human-centered UI/UX design thinking and modern frontend engineering, ensuring aesthetics never compromise performance or accessibility.",
    email: "Sharmadeepankar0712@gmail.com",
    phone: "+91 9599880107",
    linkedin: "https://linkedin.com/in/deepankar07",
    linkedinHandle: "deepankar07",
    behance: "https://behance.net/deepankarsharma1",
    behanceHandle: "deepankarsharma1",
    resumeUrl: "/Deepankar_Sharma_Resume.pdf",
    downloadEndpoint: "/api/resume/download",
    avatar: "/deepankar-portrait.png"
  },

  capabilities: [
    {
      num: "01",
      title: "Design Thinking & UX Research",
      tagline: "Uncovering user needs, reducing friction",
      description: "Rooted in user empathy and systemic problem framing. Conducting usability audits, journey mapping, heuristic evaluation, and competitive analysis to turn ambiguity into crystal-clear interaction architectures.",
      deliverables: ["User Personas & Scenarios", "Heuristic UX Audits", "Information Architecture", "Wireframing & User Flows"],
      accentColor: "#38BDF8"
    },
    {
      num: "02",
      title: "Interface & Design Systems",
      tagline: "Crafting cohesive visual languages",
      description: "Designing pixel-perfect, accessible (WCAG 2.1 AA) interfaces in Figma with auto-layout, token hierarchies, and dynamic interactive prototyping. Architecting design systems that scale seamlessly across multi-product teams.",
      deliverables: ["Atomic Design Systems", "Figma Interactive Prototypes", "High-Fidelity Screen Mockups", "Responsive Breakpoint Layouts"],
      accentColor: "#2DD4BF"
    },
    {
      num: "03",
      title: "Frontend Engineering",
      tagline: "Clean, performant, component-driven code",
      description: "Translating Figma designs into production-ready Angular, React, and TypeScript code. Implementing reactive state flows, REST API integrations, dynamic pricing computations, and optimizing for sub-second Core Web Vitals.",
      deliverables: ["Modular Component Architecture", "REST & API Integrations", "Code Splitting & Lazy Loading", "Dynamic Pricing & Workflows"],
      accentColor: "#818CF8"
    }
  ],

  projects: [
    {
      id: "instaspaces",
      title: "Instaspaces",
      subtitle: "Virtual Office Booking & Commercial Real Estate Platform",
      category: "Frontend Engineering",
      role: "Frontend Development Engineer & UI Designer",
      duration: "Jan 2024 – Present",
      company: "Instaspaces Realtech Pvt. Ltd.",
      techStack: ["Angular", "TypeScript", "Tailwind CSS", "REST APIs", "RxJS", "Figma"],
      summary: "A high-traffic commercial booking platform that streamlines virtual office selection, GST registration compliance, and business presence setup across major Indian tech hubs.",
      problem: "Customers faced confusing multi-step booking funnels, ambiguous state-by-state GST calculations, and sluggish mobile responsiveness, leading to high drop-offs during payment authorization.",
      solution: "Engineered a streamlined 3-step booking experience with instant city/hub filtering, an automated dynamic GST computation engine, and high-performance reusable UI components built strictly from Figma design tokens.",
      keyFeatures: [
        {
          title: "Intelligent Hub & Venue Discovery",
          description: "Interactive location browser with real-time availability filters, amenities toggles, and state regulatory guidelines."
        },
        {
          title: "Dynamic Pricing & Multi-Tier GST Calculator",
          description: "Real-time cost breakdown engine computing state-specific CGST, SGST, IGST, and duration-based volume discounts."
        },
        {
          title: "Mobile-First Checkout Pipeline",
          description: "Smooth multi-stage form with instant field validation, document uploads, and payment gateway integration."
        },
        {
          title: "Design System Component Library",
          description: "Architected 40+ reusable Angular components with Tailwind utility classes for consistent branding across products."
        }
      ],
      impactMetrics: [
        { label: "Funnel Completion", value: "+35%", desc: "Increase in end-to-end booking completions" },
        { label: "Checkout Drop-off", value: "-40%", desc: "Reduction in abandoned checkout steps" },
        { label: "Component Reuse", value: "100%", desc: "Consistency across 12+ product modules" }
      ],
      image: "/instaspaces-preview.png",
      liveUrl: "https://instaspaces.in",
      tags: ["Angular", "Tailwind CSS", "Dynamic GST", "Booking Engine", "WCAG Compliant"]
    },
    {
      id: "trendkreations",
      title: "TrendKreations",
      subtitle: "Modern E-Commerce Fashion & Lifestyle Platform",
      category: "Full Stack & Web",
      role: "Web Developer & UI Designer",
      duration: "Oct 2023 – Dec 2023",
      company: "M/s Him Marketing / TrendKreations",
      techStack: ["WordPress", "WooCommerce", "JavaScript ES6+", "Custom PHP", "CSS3 / Sass", "Payment Gateways"],
      summary: "A comprehensive digital storefront engineered for visual appeal, high-speed product catalog browsing, and conversion-optimized mobile shopping.",
      problem: "The legacy storefront suffered from slow page loads (>4.5s), cluttered product taxonomies, and an outdated checkout flow that hurt mobile conversion rates.",
      solution: "Designed and developed a custom WooCommerce theme with instant faceted filtering, an AJAX-powered slide-over cart drawer, and aggressive asset optimization to cut load times.",
      keyFeatures: [
        {
          title: "Faceted Product Filtering",
          description: "Instant category, price range, size, and material filtering without full page reloads."
        },
        {
          title: "Optimized Single-Page Checkout",
          description: "Reduced cart friction with address autofill, guest checkout, and secure multi-currency payment gateways."
        },
        {
          title: "Performance & Asset Optimization",
          description: "Responsive WebP images, critical CSS inlining, and lazy-loaded galleries achieving 90+ mobile PageSpeed scores."
        },
        {
          title: "Content & Inventory Management",
          description: "Structured backend catalogue allowing non-technical editors to update 500+ SKUs with inventory alerts."
        }
      ],
      impactMetrics: [
        { label: "Mobile Conversion", value: "+28%", desc: "Growth in successful mobile checkout orders" },
        { label: "Page Load Speed", value: "1.4s", desc: "Decreased from over 4.5 seconds previously" },
        { label: "Catalog Size", value: "500+", desc: "Products seamlessly indexed with zero latency" }
      ],
      image: "/trendkreations-preview.png",
      liveUrl: "https://trendkreations.com",
      tags: ["WordPress", "WooCommerce", "E-Commerce", "Responsive UX", "Fast Checkout"]
    },
    {
      id: "business-dashboard",
      title: "Enterprise Quotation & Analytics Dashboard",
      subtitle: "Dynamic B2B Quotation Engine & Workspace Experience",
      category: "UI/UX Design",
      role: "Frontend Engineer & UI Architect",
      duration: "2024",
      company: "Instaspaces Realtech Pvt. Ltd.",
      techStack: ["Angular", "TypeScript", "SCSS", "REST APIs", "Chart.js", "Figma"],
      summary: "An enterprise internal tool providing sales teams and business partners with interactive rate configuration, instant multi-hub quotation generation, and operational revenue analytics.",
      problem: "Sales representatives spent 20+ minutes creating manual quote proposals using offline spreadsheets, resulting in pricing discrepancies and slow client turnaround times.",
      solution: "Engineered a reactive single-page quotation suite featuring configurable billing matrices, real-time discount limits, instant branded PDF export, and interactive deal analytics.",
      keyFeatures: [
        {
          title: "Interactive Quotation Builder",
          description: "Configurable line items, duration toggles, custom add-on bundles, and automated tier-based rate cards."
        },
        {
          title: "Real-time Margin & Discount Guardrails",
          description: "Built-in approval rules ensuring sales quotes adhere to managerial margin constraints."
        },
        {
          title: "Instant PDF Proposal Generation",
          description: "One-click export of pixel-perfect, branded PDF contracts formatted for corporate legal compliance."
        },
        {
          title: "Executive Revenue KPI Dashboard",
          description: "Visual data widgets displaying quotation volume, conversion status, average deal value, and regional demand."
        }
      ],
      impactMetrics: [
        { label: "Turnaround Time", value: "< 2 min", desc: "Down from 20 minutes per custom proposal" },
        { label: "Calculation Errors", value: "0%", desc: "Eliminated pricing calculation discrepancies" },
        { label: "Sales Adoption", value: "100%", desc: "Daily active utilization across the entire sales team" }
      ],
      image: "/quotation-preview.png",
      tags: ["Angular", "TypeScript", "Dynamic Pricing", "B2B SaaS", "Data Visualization"]
    }
  ] as Project[],

  designProcess: [
    {
      step: "01",
      title: "Discover",
      tagline: "Empathy & Exploration",
      description: "Every great interface begins with deep curiosity. I dig into user motivations, interview stakeholders, analyze analytics funnels, and benchmark market competitors to define what success truly looks like.",
      methods: ["User Interviews", "Stakeholder Alignment", "Competitor UX Audits", "Quantitative Analytics Review"],
      deliverables: ["User Personas", "Problem Statement", "Empathy Maps", "Feature Priority Matrix"],
      tools: ["Figma", "FigJam", "Miro", "Google Analytics", "Hotjar"]
    },
    {
      step: "02",
      title: "Define",
      tagline: "Strategy & Structure",
      description: "Transforming insights into an intuitive blueprint. I architect information hierarchies, map end-to-end user journeys, and establish edge-case scenarios before touching visual design.",
      methods: ["Card Sorting", "Information Architecture", "Journey Mapping", "Task Flow Analysis"],
      deliverables: ["Site Maps", "Interactive User Flows", "Low-Fi Wireframes", "UX Specification Sheet"],
      tools: ["Figma", "Whimsical", "Notion", "Draw.io"]
    },
    {
      step: "03",
      title: "Design",
      tagline: "Fidelity & Polish",
      description: "Bringing clarity to life with high-fidelity visuals. I craft cohesive typography, color scales, and atomic design systems in Figma, pairing them with micro-interactions and rigorous WCAG accessibility checks.",
      methods: ["Design System Creation", "High-Fidelity Mockups", "Interactive Prototyping", "Usability Testing (RITE)"],
      deliverables: ["Atomic UI Components", "Interactive Prototypes", "Design Token Specs", "WCAG 2.1 Audit"],
      tools: ["Figma (Auto Layout & Variables)", "Adobe Illustrator", "Adobe XD", "Stark"]
    },
    {
      step: "04",
      title: "Develop",
      tagline: "Execution & Precision",
      description: "Bridging the gap between design and reality. I write clean, modular Angular/React code with TypeScript and Tailwind, ensuring responsive fidelity, smooth transitions, and high-performance API integrations.",
      methods: ["Component Engineering", "REST API Wiring", "Performance Profiling", "Cross-Browser & Device QA"],
      deliverables: ["Production-Ready SPA", "Reusable Component Library", "Optimized Asset Pipeline", "Automated Builds"],
      tools: ["Angular", "React.js", "TypeScript", "Tailwind CSS", "Git / GitHub", "Chrome DevTools"]
    }
  ] as ProcessStep[],

  skills: [
    {
      category: "UI/UX Design",
      description: "Human-centered research, systemized visual design, and accessible interfaces.",
      skills: [
        { name: "Figma", level: "Expert", highlight: true, tags: "Auto Layout, Variables, Interactive Components" },
        { name: "Design Systems", level: "Expert", highlight: true, tags: "Atomic Architecture, Tokens, Documentation" },
        { name: "Wireframing & Prototyping", level: "Expert", highlight: true, tags: "Low to High Fidelity Flow Specs" },
        { name: "User Research & Audits", level: "Advanced", tags: "Heuristic Evaluations, Journey Maps" },
        { name: "WCAG Accessibility", level: "Advanced", highlight: true, tags: "Contrast, Focus States, Screen Reader QA" },
        { name: "Adobe XD", level: "Advanced", tags: "Screen Design & Vector Specs" },
        { name: "Adobe Illustrator", level: "Proficient", tags: "Vector Icons & Digital Brand Assets" },
        { name: "Usability Testing", level: "Advanced", tags: "Task Analysis & Iterative Testing" }
      ]
    },
    {
      category: "Frontend Development",
      description: "Modern, reactive web applications built with type safety and performant architectures.",
      skills: [
        { name: "TypeScript", level: "Expert", highlight: true, tags: "Strict Typings, Interfaces, Generics" },
        { name: "Angular", level: "Expert", highlight: true, tags: "RxJS, Reactive Forms, Lazy Modules, Services" },
        { name: "React.js", level: "Advanced", highlight: true, tags: "Hooks, Context, State Management" },
        { name: "Tailwind CSS", level: "Expert", highlight: true, tags: "Utility-First, JIT, Custom Design Tokens" },
        { name: "JavaScript (ES6+)", level: "Expert", highlight: true, tags: "Async/Await, DOM APIs, Functional JS" },
        { name: "HTML5 & Semantic Web", level: "Expert", tags: "SEO, Semantic Tags, ARIA Roles" },
        { name: "CSS3 & SCSS", level: "Expert", tags: "Flexbox, CSS Grid, Custom Animations" },
        { name: "Next.js", level: "Proficient", tags: "SSR Basics, Routing, Server Components" },
        { name: "REST API Integration", level: "Expert", highlight: true, tags: "HTTP Clients, Error Handling, Interceptors" },
        { name: "Bootstrap & Material UI", level: "Advanced", tags: "Component Frameworks" }
      ]
    },
    {
      category: "Tools & Workflow",
      description: "Developer tooling, version control, and collaborative delivery ecosystems.",
      skills: [
        { name: "Git & GitHub", level: "Expert", highlight: true, tags: "Branching, Pull Requests, Code Reviews" },
        { name: "VS Code", level: "Expert", tags: "Debugging, Linters, Prettier" },
        { name: "Chrome DevTools", level: "Expert", tags: "Network Profiling, Lighthouse, DOM Inspect" },
        { name: "Postman", level: "Advanced", tags: "API Testing & Mocking" },
        { name: "Jira & Agile / Scrum", level: "Advanced", tags: "Sprint Planning, Story Grooming, Standups" },
        { name: "WordPress & WooCommerce", level: "Advanced", tags: "Custom Theming, Storefront Config" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: "instaspaces-exp",
      role: "Frontend Development Engineer – I",
      company: "Instaspaces Realtech Pvt. Ltd.",
      location: "Gurgaon, Haryana, India",
      period: "Jan 2024 – Present",
      type: "Full-time",
      summary: "Leading frontend development and design system implementation for India's leading virtual office and commercial real estate platform.",
      points: [
        "Designed and developed scalable, high-conversion web applications utilizing Angular, TypeScript, and Tailwind CSS.",
        "Engineered a comprehensive library of reusable UI components based on Figma design tokens, slashing frontend development cycle times by 30%.",
        "Collaborated closely with product managers, UX researchers, and backend teams in rapid Agile 2-week sprint cycles.",
        "Integrated complex REST APIs and optimized client-side performance through aggressive lazy loading, tree-shaking, and code splitting.",
        "Audited and remediated user flows to achieve WCAG 2.1 AA accessibility compliance across key customer-facing booking modules.",
        "Actively drove UX reviews, usability testing sessions, and interactive prototyping to validate design assumptions before production rollouts."
      ],
      techStack: ["Angular", "TypeScript", "Tailwind CSS", "RxJS", "REST APIs", "Figma", "Git"],
      keyHighlight: "Pioneered reusable component architecture reducing redundant code by 40% across all web portals."
    },
    {
      id: "him-marketing-exp",
      role: "Web Developer",
      company: "M/s Him Marketing",
      location: "Gurgaon, Haryana, India",
      period: "Oct 2023 – Dec 2023",
      type: "Full-time",
      summary: "Delivered responsive web experiences, e-commerce storefronts, and custom client web solutions.",
      points: [
        "Engineered fully responsive WordPress websites using modern custom themes, child themes, and bespoke PHP/JavaScript integrations.",
        "Built robust WooCommerce e-commerce portals equipped with secure payment gateways, inventory trackers, and shipping calculators.",
        "Audited and optimized Core Web Vitals, image compression, caching strategies, and on-page SEO best practices.",
        "Partnered directly with external business stakeholders to translate unique commercial requirements into clean digital touchpoints."
      ],
      techStack: ["WordPress", "WooCommerce", "JavaScript", "PHP", "CSS3 / Sass", "SEO"],
      keyHighlight: "Delivered customized e-commerce storefronts with fast checkout and seamless payment integration."
    }
  ] as ExperienceItem[],

  achievements: [
    {
      number: "20+",
      label: "Delivered Solutions",
      sublabel: "Websites, Dashboards & Apps",
      description: "Successfully built and deployed responsive web apps, SaaS dashboards, and commercial digital storefronts.",
      iconName: "Layout"
    },
    {
      number: "2+",
      label: "Years Professional",
      sublabel: "Design × Development",
      description: "Continuous hands-on experience bridging UI/UX design thinking with production frontend engineering.",
      iconName: "Briefcase"
    },
    {
      number: "40%",
      label: "Code Reusability",
      sublabel: "Design System Architecture",
      description: "Standardized tokenized UI libraries in Figma and Angular, dramatically accelerating sprint velocities.",
      iconName: "Boxes"
    },
    {
      number: "35%+",
      label: "Speed & Conversion",
      sublabel: "Performance Optimization",
      description: "Enhanced Core Web Vitals, implemented route lazy-loading, and streamlined checkout pipelines.",
      iconName: "Zap"
    },
    {
      number: "100%",
      label: "WCAG Compliance",
      sublabel: "Accessibility Standards",
      description: "Enforced color contrast, keyboard navigation, and semantic DOM structures across customer workflows.",
      iconName: "CheckCircle2"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science Engineering",
      institution: "Dronacharya College of Engineering",
      location: "Gurgaon, Haryana",
      period: "2020 – 2023",
      focus: "Data Structures, Algorithms, Software Engineering, Web Technologies & Database Systems"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Swaminarayan College of Engineering & Technology",
      location: "Ahmedabad, Gujarat",
      period: "2017 – 2020",
      focus: "Object Oriented Programming, Web Development Fundamentals, Computer Networking"
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "UI/UX Designing Certification",
      issuer: "Physics Wallah",
      year: "2025",
      badge: "Design Systems & User Research"
    },
    {
      title: "Angular Deep Dive",
      issuer: "Udemy",
      year: "2024",
      badge: "RxJS, State & Enterprise Architecture"
    },
    {
      title: "React.js Professional Certification",
      issuer: "Great Learning",
      year: "2023",
      badge: "Component Lifecycles & Hooks"
    },
    {
      title: "MERN Stack Development",
      issuer: "Ducat Academy",
      year: "2023",
      badge: "Full Stack JavaScript Ecosystem"
    },
    {
      title: "JavaScript & Modern Web Development",
      issuer: "IIT Bombay (Spoken Tutorial)",
      year: "2022",
      badge: "ES6+, DOM APIs & Web Architecture"
    }
  ] as Certification[]
};
