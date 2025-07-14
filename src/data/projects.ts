import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";
import winnest from "../assets/portfolios/logo-design/wordmark/real-estate/1/1.jpg";
import meloplay from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import player from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import wind from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/1.jpg";
import zxon from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/1.jpg";
import zepeq from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import ecogrow from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/1.jpg";
import playerlogo from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/1.jpg";
import cycle from "../assets/portfolios/logo-design/lettermark-logo/cycle/1.png";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";
import elegantletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";

export type ProjectType = {
  id: string;
  title: string;
  coverImage: string;
  behanceUrl?: string;
  category?: string;
  client?: string;
  date?: string;
  tags?: string[];
  description?: string;
  galleryImages?: string[];
  tools?: string[];
  creativeFields?: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  process?: {
    title: string;
    description: string;
  }[];
};

export const projectsData: Record<string, ProjectType> = {
  "blood-donation": {
    id: "blood-donation",
    title: "Blood Donation Campaign",
    category: "Logo Design",
    client: "Healthcare Organization",
    date: "2024",
    tags: ["Logo Design", "Healthcare", "Non-profit"],
    coverImage: blooddonation,
    description: "A compassionate and professional logo design for a blood donation campaign, emphasizing the importance of giving and saving lives.",
    galleryImages: [blooddonation],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    creativeFields: ["Logo Design", "Healthcare Branding", "Social Impact"]
  },
  
  "uniflora": {
    id: "uniflora",
    title: "Uniflora - Botanical Brand",
    category: "Logo Design",
    client: "Uniflora Botanicals",
    date: "2024",
    tags: ["Logo Design", "Nature", "Botanical"],
    coverImage: uniflora,
    description: "An elegant lettermark logo for a botanical brand, combining natural elements with modern typography.",
    galleryImages: [uniflora],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    creativeFields: ["Logo Design", "Typography", "Botanical Design"]
  },

  "winnest": {
    id: "winnest-logo",
    title: "Uniflora - Botanical Brand",
    category: "Logo Design",
    client: "Uniflora Botanicals",
    date: "2024",
    tags: ["Logo Design", "Nature", "Botanical"],
    coverImage: uniflora,
    description: "An elegant lettermark logo for a botanical brand, combining natural elements with modern typography.",
    galleryImages: [winnest],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    creativeFields: ["Logo Design", "Typography", "Botanical Design"]
  },

  "modern-business-card": {
    id: "modern-business-card",
    title: "Modern Business Card",
    category: "Business Card",
    client: "Creative Agency",
    date: "2024-02-15",
    tags: ["Business Card", "Modern", "Minimalist"],
    coverImage: modernbusinesscard,
    description: "A clean, professional business card for a creative agency.",
    galleryImages: [modernbusinesscard],
  },

  "elegant-letterhead": {
    id: "elegant-letterhead",
    title: "Elegant Corporate Letterhead",
    category: "Letterhead",
    client: "Corporate Inc.",
    date: "2024-01-20",
    tags: ["Letterhead", "Corporate", "Minimalist"],
    coverImage: elegantletterhead,
    description: "A minimalist, elegant letterhead for a corporate brand.",
    galleryImages: [elegantletterhead],
  },

  // Add more projects as needed...
};

export const projectsDataArray = [
  {
    id: "blood-donation",
    title: "Blood Donation Campaign",
    coverImage: blooddonation,
    description: "A compassionate and professional logo design for a blood donation campaign, emphasizing the importance of giving and saving lives.",
    tags: ["Logo Design", "Healthcare", "Non-profit"],
    client: "Healthcare Organization",
    date: "2024",
    category: "Logo Design",
    galleryImages: [blooddonation],
  },
  {
    id: "uniflora",
    title: "Uniflora - Botanical Brand",
    coverImage: uniflora,
    description: "An elegant lettermark logo for a botanical brand, combining natural elements with modern typography.",
    tags: ["Logo Design", "Nature", "Botanical"],
    client: "Uniflora Botanicals",
    date: "2024",
    category: "Logo Design",
    galleryImages: [uniflora],
  },
  {
    id: "winnest",
    title: "Uniflora - Botanical Brand",
    coverImage: uniflora,
    description: "An elegant lettermark logo for a botanical brand, combining natural elements with modern typography.",
    tags: ["Logo Design", "Nature", "Botanical"],
    client: "Uniflora Botanicals",
    date: "2024",
    category: "Logo Design",
    galleryImages: [winnest],
  },
  {
    id: "modern-business-card",
    title: "Modern Business Card",
    coverImage: modernbusinesscard,
    description: "A clean, professional business card for a creative agency.",
    tags: ["Business Card", "Modern", "Minimalist"],
    client: "Creative Agency",
    date: "2024-02-15",
    category: "Business Card",
    galleryImages: [modernbusinesscard],
  },
  {
    id: "elegant-letterhead",
    title: "Elegant Corporate Letterhead",
    coverImage: elegantletterhead,
    description: "A minimalist, elegant letterhead for a corporate brand.",
    tags: ["Letterhead", "Corporate", "Minimalist"],
    client: "Corporate Inc.",
    date: "2024-01-20",
    category: "Letterhead",
    galleryImages: [elegantletterhead],
  },
];