import { techStacks } from "./techstack";
import { slugify } from "./slugify";

export const technologies = techStacks.flatMap((stack) =>
  stack.technologies.map((tech) => ({
    name: tech.name,
    icon: tech.icon,
    category: stack.title,
    slug: slugify(tech.name),
    title: `${tech.name} Development`,
    description: `Professional ${tech.name} development services for scalable and high-performance applications.`,
  }))
);