import { Car, Sprout, Tractor } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Ezykheti from "../../public/images/case-studies/ezykheti-logo.png";
import RSGoa from "../../public/images/case-studies/rs-goa-car-rental-logo.png";
import Ezyfarms from "../../public/images/case-studies/Ezyfarms-logo.png";
import { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  name: string;
  handle: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  tags: string[];
  headerColor: string;
  themeColor: string;
  icon: StaticImageData; // store icon component instead of JSX
  avatar: string;
}

export const caseStudies: Project[] = [
  {
    slug: "rs-goa-car-rental",
    name: "RS Goa Car Rental",
    handle: "@rs_goa_car_rental",
    title: "Enterprise Fleet & Reservation System",
    description:
      "Replaces legacy manual processes with a high-performance web dashboard for real-time inventory management and customer reservations.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    headerColor: "bg-[#E0F7FA]",
    themeColor: "#0D9488",
    icon: RSGoa,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  },
  {
    slug: "ezykheti",
    name: "Ezykheti",
    handle: "@ezykheti",
    title: "AgriTech Booking & Scheduling Hub",
    description:
      "A comprehensive solution solving fragmented coordination between farmers and machine operators through real-time booking and dispatch.",
    problem:
      "Farmers relied on fragmented local networks to find machinery operators, resulting in delays and higher operational costs.",

    solution:
      "We built a real-time booking and scheduling platform that connects farmers with nearby machinery operators.",

    metrics: [
      { label: "Farmers Served", value: "5000+" },
      { label: "Operators", value: "150+" },
      { label: "Bookings Processed", value: "20K+" },
    ],
    tags: ["React", "Firebase", "Flutter", "Laravel", "MySQL", "Tailwind CSS"],
    headerColor: "bg-[#F1F8E9]",
    themeColor: "#00B86C",
    icon: Ezykheti,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper",
  },
  {
    slug: "ezyfarms",
    name: "Ezyfarms",
    handle: "@ezyfarms_ops",
    title: "Farm Operations Management Platform",
    description:
      "Empowering agricultural managers with data-driven activity logging and location-based resource tracking to ensure operational stability.",
    tags: ["React Native", "Firebase", "AWS S3"],
    headerColor: "bg-[#FFF3E0]",
    themeColor: "#F57C00",
    icon: Ezyfarms,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
  },
];
