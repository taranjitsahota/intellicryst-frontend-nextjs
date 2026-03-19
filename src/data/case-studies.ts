import { Car, Sprout, Tractor } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Ezykheti from "../../public/images/case-studies/logos/ezykheti-logo.png";
import RSGoa from "../../public/images/case-studies/logos/rs-goa-car-rental-logo.png";
import Ezyfarms from "../../public/images/case-studies/logos/Ezyfarms-logo.png";
import EzykhetiSsDashboard from "../../public/images/case-studies/ezykheti-ss-dashboard.png";
import Mockup1 from "../../public/images/case-studies/MOCKUP-1.png";
import Mockup11 from "../../public/images/case-studies/MOCKUP-11.png";
import Mockup12 from "../../public/images/case-studies/MOCKUP-12.png";
import { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  name: string;
  handle: string;
  title: string;
  description: string;
  problemSection?: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      desc: string;
    }[];
    image?: StaticImageData | string;
  };

  solutionSection?: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: "smartphone" | "dashboard" | "shield";
    }[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  tags: string[];
  headerColor: string;
  themeColor: string;
  icon: StaticImageData; // store icon component instead of JSX
  avatar: string;
  screenshots?: StaticImageData[];
  features?: {
    title: string;
    desc: string;
  }[];

  stats?: {
    label: string;
    value: string;
  }[];
  users?: string[];
  highlight?: {
    value: string;
    label: string;
  };
  overview?: {
    title: string;
    subtitle: string;
  };
  productSection?: {
    title: string;
    subtitle: string;

    dashboard?: {
      image: StaticImageData | string;
      title: string;
      description: string;
      points: string[];
    };

    mobile?: {
      images: (StaticImageData | string)[];
      title: string;
      description: string;
      highlight?: string;
    };
  };
  featuresSection?: {
    title: string;
    subtitle: string;
    items: {
      icon: "calendar" | "map" | "payment" | "database";
      title: string;
      desc: string;
    }[];
  };

  impactSection?: {
    title: string;
    subtitle: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
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
    problemSection: {
      title: "The Fragmented Reality",
      subtitle:
        "Before Ezykheti, the agricultural service market was a black box of inefficiency.",
      points: [
        {
          title: "Zero Transparency",
          desc: "Farmers relied on word-of-mouth for pricing, often paying 40% more than market rates.",
        },
        {
          title: "Coordination Chaos",
          desc: "Operators managed bookings manually, causing errors.",
        },
        {
          title: "Geographic Barriers",
          desc: "No discovery beyond local radius.",
        },
      ],
      image: "https://picsum.photos/seed/agri-problem/800/600",
    },

    solutionSection: {
      title: "A Unified Ecosystem",
      subtitle:
        "We engineered a three-tier solution that brings Uber-like efficiency to farming.",
      items: [
        {
          icon: "smartphone",
          title: "Farmer App",
          desc: "Book machinery in 3 taps.",
        },
        {
          icon: "dashboard",
          title: "Operator Hub",
          desc: "Real-time fleet management.",
        },
        {
          icon: "shield",
          title: "Admin Engine",
          desc: "Full control over pricing & regions.",
        },
      ],
    },

    metrics: [
      { label: "Farmers Served", value: "5000+" },
      { label: "Operators", value: "150+" },
      { label: "Bookings Processed", value: "20K+" },
    ],
    tags: [
      "React",
      "Firebase",
      "Flutter",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "AWS",
      "vapor",
      "Vercel",
    ],
    headerColor: "bg-[#F1F8E9]",
    themeColor: "#00B86C",
    icon: Ezykheti,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper",
    screenshots: [EzykhetiSsDashboard, Mockup1, Mockup11, Mockup12],
    features: [
      {
        title: "Smart Booking",
        desc: "Slot-based scheduling system with real-time availability.",
      },
      {
        title: "Location Intelligence",
        desc: "Village-level service mapping with hierarchy.",
      },
      {
        title: "Admin Dashboard",
        desc: "Full control over services, pricing, and operations.",
      },
      {
        title: "Payments",
        desc: "Razorpay integration with subscription model.",
      },
    ],

    stats: [
      { label: "Efficiency Increase", value: "45%" },
      { label: "Cost Reduction", value: "30%" },
      { label: "User Retention", value: "92%" },
      { label: "System Uptime", value: "99.9%" },
    ],
    users: [
      "https://picsum.photos/seed/1/100/100",
      "https://picsum.photos/seed/2/100/100",
      "https://picsum.photos/seed/3/100/100",
      "https://picsum.photos/seed/4/100/100",
    ],

    highlight: {
      value: "5000+ Farmers",
      label: "Empowered across 4 regions",
    },
    overview: {
      title: "Digital Transformation for the Soil",
      subtitle:
        "Ezykheti isn't just an app; it's a critical infrastructure for rural economies. We built a bridge between fragmented supply and desperate demand.",
    },
    productSection: {
      title: "Designed for Impact",
      subtitle:
        "We prioritized high-contrast UI and intuitive workflows to ensure accessibility for all users.",

      dashboard: {
        image: EzykhetiSsDashboard,
        title: "Command Center",
        description:
          "Admin dashboard with full control over bookings, operators, and revenue tracking.",
        points: [
          "Real-time Availability Tracking",
          "Automated Slot Management",
          "Revenue Analytics",
        ],
      },

      mobile: {
        images: [
          Mockup1,
          Mockup11,
          // Mockup12,
        ],
        title: "Booking in the Palm",
        description:
          "Flutter-powered mobile experience optimized for low-end devices.",
        highlight: "Booking reduced from 20 min calls → 45 sec app flow",
      },
    },
    featuresSection: {
      title: "Engineered for Scale",
      subtitle:
        "Behind the simple UI lies a powerful system designed to handle thousands of concurrent operations.",
      items: [
        {
          icon: "calendar",
          title: "Smart Booking",
          desc: "Intelligent slot-based scheduling that prevents overlaps.",
        },
        {
          icon: "map",
          title: "Location Hierarchy",
          desc: "State → District → Tehsil → Village structure.",
        },
        {
          icon: "payment",
          title: "Payments System",
          desc: "Razorpay integration with subscriptions.",
        },
        {
          icon: "database",
          title: "Substation Architecture",
          desc: "Scalable multi-region backend system.",
        },
      ],
    },

    impactSection: {
      title: "Real World Results",
      subtitle:
        "Ezykheti transformed agricultural service delivery across regions.",
      stats: [
        { label: "Efficiency Increase", value: "45%" },
        { label: "Cost Reduction", value: "30%" },
        { label: "User Retention", value: "92%" },
        { label: "System Uptime", value: "99.9%" },
      ],
    },
  },
  {
    slug: "ezyfarms",
    name: "Ezyfarms",
    handle: "@ezyfarms_ops",
    title: "Farm Operations Management Platform",
    description:
      "Empowering agricultural managers with data-driven activity logging and location-based resource tracking to ensure operational stability.",
    tags: ["Flutter", "Firebase", "AWS S3"],
    headerColor: "bg-[#FFF3E0]",
    themeColor: "#F57C00",
    icon: Ezyfarms,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
  },
];
