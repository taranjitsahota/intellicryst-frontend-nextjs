import { Car, Sprout, Tractor } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Ezykheti from "../../public/images/case-studies/logos/ezykheti-logo.png";
import RSGoa from "../../public/images/case-studies/logos/rs-goa-car-rental-logo.png";
import Ezyfarms from "../../public/images/case-studies/logos/Ezyfarms-logo.png";
import EzykhetiSsDashboard from "../../public/images/case-studies/ezykheti/dashboard.png";
import Mockup1 from "../../public/images/case-studies/ezykheti/MOCKUP-1.png";
import Mockup11 from "../../public/images/case-studies/ezykheti/MOCKUP-11.png";
import Mockup12 from "../../public/images/case-studies/ezykheti/MOCKUP-12.png";
import EzykhetiProblem from "../../public/images/case-studies/ezykheti/problem.png";
import EzyfarmsProblem from "../../public/images/case-studies/ezyfarms/problem.png";
import EzyfarmsDashboard from "../../public/images/case-studies/ezyfarms/dashboard.png";
import RsGoaCarRentalProblem from "../../public/images/case-studies/rs-goa-car-rental/problem.png";
import RsGoaCarRentalDashboard from "../../public/images/case-studies/rs-goa-car-rental/dashboard.png";
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
      icon:
        | "smartphone"
        | "dashboard"
        | "shield"
        | "map"
        | "database"
        | "calendar";
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

  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export const caseStudies: Project[] = [
  {
    slug: "ezykheti",
    name: "Ezykheti",
    liveUrl: "https://ezykheti.com",
    isFeatured: true,
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
      image: EzykhetiProblem,
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
    slug: "rs-goa-car-rental",
    name: "RS Goa Car Rental",
    liveUrl: "https://rsgoacarrental.com/",
    handle: "@rs_goa_car_rental",
    title: "Enterprise Fleet & Reservation System",
    description:
      "Replaces legacy manual processes with a high-performance web dashboard for real-time inventory management and customer reservations.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    headerColor: "bg-[#E0F7FA]",
    themeColor: "#0D9488",
    icon: RSGoa,
    problemSection: {
      title: "Manual Fleet Chaos",
      subtitle:
        "The business relied on manual tracking, leading to inefficiencies and revenue leakage.",
      points: [
        {
          title: "No Real-Time Inventory",
          desc: "Cars availability was tracked manually, causing double bookings.",
        },
        {
          title: "Booking Errors",
          desc: "Customer reservations were not synchronized across channels.",
        },
        {
          title: "Revenue Loss",
          desc: "Idle vehicles and missed bookings reduced profitability.",
        },
      ],
      image: RsGoaCarRentalProblem,
    },

    solutionSection: {
      title: "Centralized Fleet Engine",
      subtitle:
        "We built a real-time system to manage vehicles, bookings, and customers seamlessly.",
      items: [
        {
          icon: "dashboard",
          title: "Fleet Dashboard",
          desc: "Live tracking of all vehicles and availability.",
        },
        {
          icon: "calendar",
          title: "Reservation System",
          desc: "Automated booking with conflict prevention.",
        },
        {
          icon: "database",
          title: "Customer Management",
          desc: "Centralized records with booking history.",
        },
      ],
    },

    metrics: [
      { label: "Bookings Increased", value: "60%" },
      { label: "Manual Work Reduced", value: "70%" },
      { label: "Fleet Utilization", value: "85%" },
    ],

    features: [
      {
        title: "Real-time Inventory",
        desc: "Track availability and status of vehicles instantly.",
      },
      {
        title: "Automated Booking",
        desc: "Prevents double booking with smart scheduling.",
      },
      {
        title: "Analytics Dashboard",
        desc: "Revenue and usage insights for business decisions.",
      },
    ],

    stats: [
      { label: "Daily Bookings", value: "120+" },
      { label: "Fleet Size Managed", value: "50+" },
      { label: "System Accuracy", value: "99%" },
    ],

    productSection: {
      title: "Built for Fleet Intelligence",
      subtitle:
        "A powerful dashboard system to monitor vehicles, bookings, and revenue in real-time.",

      dashboard: {
        image: RsGoaCarRentalDashboard,
        title: "Fleet Control Dashboard",
        description:
          "Centralized system to track all vehicles, bookings, and availability.",
        points: [
          "Live Vehicle Availability",
          "Booking Conflict Prevention",
          "Revenue Tracking",
        ],
      },
    },

    featuresSection: {
      title: "Core Features",
      subtitle: "Everything needed to manage a modern fleet business.",
      items: [
        {
          icon: "calendar",
          title: "Smart Booking",
          desc: "Automated scheduling prevents conflicts.",
        },
        {
          icon: "map",
          title: "Fleet Tracking",
          desc: "Track vehicle status and availability.",
        },
        {
          icon: "payment",
          title: "Payment Handling",
          desc: "Manage bookings and payments efficiently.",
        },
        {
          icon: "database",
          title: "Customer Records",
          desc: "Store and manage user data securely.",
        },
      ],
    },

    impactSection: {
      title: "Business Impact",
      subtitle: "Transforming operations with automation.",
      stats: [
        { label: "Booking Efficiency", value: "+60%" },
        { label: "Manual Errors", value: "-70%" },
        { label: "Fleet Usage", value: "85%" },
        { label: "Revenue Growth", value: "+40%" },
      ],
    },
  },
  {
    slug: "ezyfarms",
    name: "Ezyfarms",
    liveUrl: "https://ezyfarms.com",
    handle: "@ezyfarms_ops",
    title: "Farm Operations Management Platform",
    description:
      "Empowering agricultural managers with data-driven activity logging and location-based resource tracking to ensure operational stability.",
    tags: ["Django", "Next.js", "Vercel", "AWS", "Docker", "Tailwind CSS"],
    headerColor: "bg-[#FFF3E0]",
    themeColor: "#F57C00",
    icon: Ezyfarms,
    problemSection: {
      title: "Unstructured Farm Operations",
      subtitle:
        "Farm management lacked visibility, tracking, and accountability.",
      points: [
        {
          title: "No Activity Tracking",
          desc: "Daily farm operations were not logged or monitored.",
        },
        {
          title: "Resource Mismanagement",
          desc: "Difficult to track labor, inputs, and outputs.",
        },
        {
          title: "Lack of Data",
          desc: "No insights for improving productivity.",
        },
      ],
      image: EzyfarmsProblem,
    },

    solutionSection: {
      title: "Data-Driven Farm Management",
      subtitle:
        "We created a mobile-first platform for tracking, monitoring, and optimizing farm operations.",
      items: [
        {
          icon: "smartphone",
          title: "Field Logging",
          desc: "Workers log activities in real-time.",
        },
        {
          icon: "map",
          title: "Location Tracking",
          desc: "Monitor activities based on farm zones.",
        },
        {
          icon: "dashboard",
          title: "Operations Dashboard",
          desc: "Centralized monitoring for managers.",
        },
      ],
    },

    metrics: [
      { label: "Productivity Increase", value: "35%" },
      { label: "Data Accuracy", value: "90%" },
      { label: "Operational Efficiency", value: "40%" },
    ],

    features: [
      {
        title: "Activity Logging",
        desc: "Track every farm task with timestamps.",
      },
      {
        title: "Geo-tagging",
        desc: "Location-based tracking of operations.",
      },
      {
        title: "Reports & Insights",
        desc: "Generate data-driven farm reports.",
      },
    ],

    stats: [
      { label: "Farms Managed", value: "20+" },
      { label: "Workers Tracked", value: "100+" },
      { label: "Tasks Logged", value: "10K+" },
    ],
    productSection: {
      title: "Operational Visibility",
      subtitle:
        "A mobile-first platform enabling real-time tracking of farm activities.",
      dashboard: {
        image: EzyfarmsDashboard,
        title: "Field Operations Dashboard",
        description:
          "Workers log tasks and activities directly from the field.",
        points: [
          "Improved tracking from manual logs → real-time system",
          "Enhanced visibility for managers",
          "Efficient resource allocation",
        ],
      },
      // mobile: {
      //   images: [
      //     "https://picsum.photos/seed/farm1/300/600",
      //     "https://picsum.photos/seed/farm2/300/600",
      //   ],
      //   title: "Field Operations App",
      //   description:
      //     "Workers log tasks and activities directly from the field.",
      //   highlight: "Improved tracking from manual logs → real-time system",
      // },
    },

    featuresSection: {
      title: "Farm Management Features",
      subtitle: "Built for real agricultural workflows.",
      items: [
        {
          icon: "calendar",
          title: "Task Scheduling",
          desc: "Plan and assign daily farm activities.",
        },
        {
          icon: "map",
          title: "Geo Tracking",
          desc: "Track operations based on farm location.",
        },
        {
          icon: "database",
          title: "Data Logging",
          desc: "Store all activities for analytics.",
        },
        {
          icon: "payment",
          title: "Resource Tracking",
          desc: "Monitor labor and inputs usage.",
        },
      ],
    },

    impactSection: {
      title: "Operational Impact",
      subtitle: "Driving efficiency through structured workflows.",
      stats: [
        { label: "Productivity", value: "+35%" },
        { label: "Data Accuracy", value: "90%" },
        { label: "Efficiency", value: "+40%" },
        { label: "Tasks Logged", value: "10K+" },
      ],
    },
  },
];
