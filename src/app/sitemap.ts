import { MetadataRoute } from "next";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://intellicryst.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/projects",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const servicePages = services.map((service) => `/services/${service.slug}`);

  const allRoutes = [...routes, ...servicePages];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
