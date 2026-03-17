import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { technologies } from "@/data/technologies";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://intellicryst.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/contact",
    "/technology",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  
  const servicePages = services.map((service) => `/services/${service.slug}`);

  const technologyPages = technologies.map(
    (tech) => `/technology/${tech.slug}`,
  );

  const caseStudyPages = caseStudies.map(
    (caseStudy) => `/case-studies/${caseStudy.slug}`,
  );

  const allRoutes = [...routes, ...servicePages, ...technologyPages, ...caseStudyPages];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
