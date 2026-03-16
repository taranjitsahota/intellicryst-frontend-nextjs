import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { technologies } from "@/data/technologies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://intellicryst.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/projects",
    "/contact",
    "/technology",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  
  const servicePages = services.map((service) => `/services/${service.slug}`);

  const technologyPages = technologies.map(
    (tech) => `/technology/${tech.slug}`,
  );

  const allRoutes = [...routes, ...servicePages, ...technologyPages];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
