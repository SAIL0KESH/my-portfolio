// lib/data.ts
export const socials = {
    email: "sanisettysailokesh@gmail.com",
    github: "https://github.com/<your-username>",
    linkedin: "https://www.linkedin.com/in/sai-lokesh/",
    resumeUrl: "/Sai_Lokesh_Sanisetty_Resume.pdf", // place file in /public
  };
  
  export const skills = {
    Frontend: ["React 18", "Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "WCAG"],
    Backend: ["Java (Spring Boot 3+)", "JPA / Hibernate 6", "Python (FastAPI, Django DRF)", "GraphQL (Apollo)", "REST", "OpenAPI 3.1", "Redis"],
    Cloud_DevOps: ["AWS (ECS, ECR, RDS, Lambda, S3, CloudWatch)", "Kubernetes (EKS)", "Docker", "Terraform", "GitHub Actions", "Jenkins", "GitLab CI"],
    Data_ETL: ["PostgreSQL", "MySQL", "MongoDB", "Airflow 2.x", "dbt", "SQL optimization", "Data modeling"],
    Testing: ["JUnit 5", "Pytest", "Jest", "React Testing Library", "Postman/Newman", "TDD", "Integration testing"],
    Monitoring: ["Grafana", "Prometheus", "CloudWatch Dashboards", "Logging & alerting"],
  };
  
  export type ExperienceItem = {
    company: string;
    title: string;
    location: string;
    period: string;
    bullets: string[];
  };
  
  export const experience: ExperienceItem[] = [
    {
      company: "Bank of New York Mellon",
      title: "Software Development Engineer",
      location: "Illinois, USA",
      period: "Feb 2025 – Present",
      bullets: [
        "Modernize portfolio risk-tracking with Spring Boot microservices for trade-exposure analytics.",
        "Build JPA + PostgreSQL persistence; optimize queries to cut reporting latency ~40%.",
        "Automate ETL via Apache Airflow; integrate Bloomberg & custodial data to reduce refresh time 8×.",
        "Secure REST APIs with OAuth 2.1 + JWT; integrate AWS S3/RDS.",
        "Deploy with Docker + Kubernetes (EKS) on AWS; maintain 99.99% uptime.",
      ],
    },
    {
      company: "Purdue University",
      title: "Research Assistant (Software & Data Visualization)",
      location: "Hammond, IN",
      period: "Aug 2023 – Sep 2024",
      bullets: [
        "IVBF Dashboard: Python (Dash) + React/Plotly; improved efficiency 30%; AWS EC2 + Docker.",
        "VR Crane Simulator: Unity + C#; reduced trainee errors 20%; increased accuracy 40%.",
      ],
    },
    {
      company: "ACL Digital",
      title: "Software Development Engineer",
      location: "India",
      period: "Dec 2020 – Jan 2023",
      bullets: [
        "Enterprise transaction APIs with Django + Spring Boot; hardened security/perf.",
        "Replaced legacy SQL with JPA ORM; reduced execution time ~35%.",
        "React portals + REST; reduced navigation time across 5 portals by ~25%.",
        "Docker + Jenkins CI/CD; improved observability via Grafana/Prometheus & CloudWatch.",
      ],
    },
    {
      company: "Adani Group",
      title: "Software Engineer",
      location: "India",
      period: "Jan 2020 – Nov 2020",
      bullets: [
        "Spring Boot microservices for real-time IoT logistics tracking & sensor ingestion.",
        "Flask + PostgreSQL services; reduced report latency ~30%.",
      ],
    },
  ];
  
  export type Project = {
    title: string;
    blurb: string;
    stack: string[];
    github: string;
    demo?: string;
    preview?: string; // /project-previews/xxx.gif
    highlights?: string[];
  };
  
  export const projects: Project[] = [
    {
      title: "AI-Integrated Analytics Dashboard",
      blurb: "Next.js + FastAPI analytical dashboard with chat-based insights and citation bubbles.",
      stack: ["Next.js 14", "React", "Tailwind", "FastAPI", "OpenAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/SAIL0KESH/ai-analytics-dashboard",
      //demo: "https://<your-demo-url>",
      preview: "/project-previews/analytics-dashboard.jpg",
      //image: "/projects/ai-dashboard.jpg",
      highlights: ["RAG-style summaries", "Role-based auth (JWT)", "Server-sent streaming"]
    },
    {
      title: "ETL Pipeline Visualizer",
      blurb: "Airflow orchestration viewer with DAG runs, task status, and lineage overlay.",
      stack: ["Airflow 2.x", "React/Next.js", "Tailwind", "Postgres"],
      github: "https://github.com/SAIL0KESH/etl-visualizer",
      preview: "/project-previews/etl-pipelines.jpg",
      
      highlights: ["Live DAG status", "Retries/SLA indicators", "Run drilldowns"]
    },
    {
      title: "Spring Boot Microservices on EKS",
      blurb: "Java services on EKS with Terraform, GH Actions → GHCR, Grafana/Prometheus dashboards.",
      stack: ["Spring Boot 3", "EKS", "Docker", "Terraform", "Grafana", "GitHub Actions"],
      github: "https://github.com/SAIL0KESH/springboot-eks-microservices",
      preview: "/project-previews/cloud-microservices.jpg",
      //image: "/projects/eks-microservices.jpg",
      highlights: ["Blue/green deploys", "HPA autoscaling", "Structured logging"]
    },
    {
      title: "Serverless Contact + S3 Presigned Résumé",
      blurb: "SES-powered contact and S3 resume links; shows AWS IAM, least-privilege, and presign flows.",
      stack: ["Next.js", "AWS Lambda", "API Gateway", "SES", "S3"],
      github: "https://github.com/SAIL0KESH/serverless-contact-resume",
      preview: "/project-previews/serverless-contact.jpg",
      //image: "/projects/serverless-contact.jpg",
      highlights: ["Infra as code", "Presigned URL rotation", "Email deliverability checks"]
    },
    {
      title: "GraphQL BFF for React Apps",
      blurb: "Apollo Server BFF federating multiple REST services; typed hooks for React.",
      stack: ["Apollo Server", "Node.js", "TypeScript", "Jest", "Docker"],
      github: "https://github.com/SAIL0KESH/graphql-bff",
      preview: "/project-previews/graphql-bff.jpg",
      //image: "/projects/graphql-bff.jpg",
      highlights: ["Schema-first design", "DataLoader caching", "E2E tests"]
    }
  ];
  
  
  export const certifications = [
    {
      name: "Advanced Python Programming",
      issuer: "University of Michigan — Coursera",
      link: "https://www.coursera.org/learn/python-advanced" // replace with your cert URL
    },
    {
      name: "Cloud Computing Specialization",
      issuer: "University of Illinois — Coursera",
      link: "https://www.coursera.org/specializations/cloud-computing" // replace with your cert URL
    },
    {
      name: "IBM AI Developer Certificate",
      issuer: "IBM — Coursera",
      link: "https://www.coursera.org/professional-certificates/ibm-ai-developer" // replace
    },
    {
      name: "Machine Learning Specialization",
      issuer: "University of Washington — Coursera",
      link: "https://www.coursera.org/specializations/machine-learning" // replace
    },
    {
      name: "Programming the Internet of Things",
      issuer: "University of California — Coursera",
      link: "https://www.coursera.org/specializations/iot" // replace
    },
    {
      name: "Boomi Professional Developer",
      issuer: "Dell Boomi",
      link: "https://boomi.com/learn/certification/" // replace with your badge URL
    }
  ];
  