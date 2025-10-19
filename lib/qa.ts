// lib/qa.ts
export type QA = { tag: string; text: string };

export const qaCorpus: QA[] = [
  {
    tag: "summary",
    text:
      "Software Development Engineer with 5 years experience in full-stack apps, Spring Boot, FastAPI/Django, React+TypeScript, AWS (ECS/ECR/RDS/Lambda/S3/CloudWatch), Kubernetes (EKS), CI/CD (GitHub Actions/Jenkins), ETL with Airflow+dbt.",
  },
  {
    tag: "bny-mellon",
    text:
      "At BNY Mellon: Spring Boot microservices for trade-exposure analytics; JPA+PostgreSQL tuning; Airflow ETL integrating Bloomberg and custodial data (8× faster refresh); OAuth 2.1 + JWT APIs; AWS S3/RDS; Docker + Kubernetes (EKS) with 99.99% uptime; CI/CD with GitHub Actions/Jenkins.",
  },
  {
    tag: "acl",
    text:
      "At ACL Digital: Django + Spring Boot enterprise APIs; replaced legacy SQL with JPA ORM (~35% faster); React portals; Docker + Jenkins; Grafana/Prometheus + CloudWatch; UX speedup ~25%.",
  },
  {
    tag: "adani",
    text:
      "At Adani: Spring Boot microservices for IoT logistics; Flask + PostgreSQL backends (~30% faster reports); REST APIs for sensor pipelines; visual analytics.",
  },
  {
    tag: "purdue-ivbf",
    text:
      "Purdue IVBF: Python (Dash) + React/Plotly real-time industrial dashboard; dockerized on AWS EC2; ~30% efficiency improvement.",
  },
  {
    tag: "purdue-vr",
    text:
      "VR Crane Simulator: Unity + C#; -20% trainee errors; +40% accuracy; collab with simulation engineers.",
  },
  {
    tag: "skills",
    text:
      "Backend: Spring Boot 3, JPA 6, FastAPI, DRF, GraphQL, OAuth 2.1/JWT, OpenAPI. Frontend: React 18, Next.js 14, Redux Toolkit, Tailwind, shadcn/ui, Framer Motion. Cloud/DevOps: AWS (ECS/ECR/RDS/Lambda/S3/CloudWatch), Kubernetes (EKS), Docker, Terraform, GitHub Actions, Jenkins, GitLab CI. Data/ETL: PostgreSQL, MySQL, MongoDB, Airflow 2.x, dbt.",
  },
];
