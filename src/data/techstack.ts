import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaLinux,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiLaravel,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGooglecloud,
  SiFlutter,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiNginx,
  SiApache,
  SiElasticsearch,
  SiKibana,
  SiPrometheus,
  SiGrafana,
  SiAndroid,
  SiSwift,
//   SiGithub,
  SiCloudflare,
  SiAuth0,
  SiGoogle,
  SiGooglechrome,
  SiJest,
  SiTestinglibrary,
  SiK6,
  SiSelenium,
} from "react-icons/si";

export const techStack = [

  {
    title: "Frontend Engineering",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
    ],
  },

  {
    title: "Backend Development",
    technologies: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "Laravel", icon: SiLaravel },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },

  {
    title: "Mobile Applications",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: FaReact },
      { name: "Android (Kotlin)", icon: SiAndroid },
      { name: "iOS (Swift)", icon: SiSwift },
    ],
  },

  {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "Cloud Infrastructure",
    technologies: [
      { name: "AWS", icon: FaAws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Linux", icon: FaLinux },
    ],
  },

  {
    title: "DevOps & Automation",
    technologies: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
    //   { name: "CI/CD Pipelines", icon: SiGithub },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
    ],
  },

  {
    title: "Networking & Infrastructure",
    technologies: [
      { name: "Nginx", icon: SiNginx },
      { name: "Apache", icon: SiApache },
      { name: "Load Balancers", icon: FaAws },
      { name: "CDN & Edge", icon: SiCloudflare },
    ],
  },

  {
    title: "Security Engineering",
    technologies: [
      { name: "Zero Trust Architecture", icon: FaAws },
      { name: "WAF", icon: SiCloudflare },
      { name: "OAuth2 / JWT", icon: SiAuth0 },
      { name: "Penetration Testing", icon: FaLinux },
    ],
  },

  {
    title: "Search & Data Systems",
    technologies: [
      { name: "Elasticsearch", icon: SiElasticsearch },
      { name: "Kibana", icon: SiKibana },
      { name: "Analytics Pipelines", icon: FaAws },
    ],
  },

  {
    title: "SEO & Performance",
    technologies: [
      { name: "Technical SEO", icon: SiGoogle },
      { name: "Core Web Vitals", icon: SiGooglechrome },
    //   { name: "Structured Data", icon: SiSchema },
    //   { name: "PageSpeed Optimization", icon: SiGooglepagespeedinsights },
    ],
  },

  {
    title: "Testing & QA",
    technologies: [
      { name: "Unit Testing", icon: SiJest },
      { name: "Integration Testing", icon: SiTestinglibrary },
      { name: "Load Testing", icon: SiK6 },
      { name: "Automation Testing", icon: SiSelenium },
    ],
  },

];