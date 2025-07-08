import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Eye, Filter, X, ExternalLink, Star, Grid, List, ChevronDown, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

// Asset imports
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
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";
import visitingcard from "../assets/portfolios/business-card/professional/1/1.jpg";
import minimalistcard from "../assets/portfolios/business-card/minimalist/3/mnvb-24.jpg";
import professionalcard from "../assets/portfolios/business-card/professional/2/1.jpg";
import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";
import moderncard from "../assets/portfolios/business-card/modern/1/1.jpg";
import custombusinesscard from "../assets/portfolios/business-card/custom/2/custombusinesscard1.jpeg";
import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";
import corporate from "../assets/portfolios/letterhead/minimalist-corporate/1/3.jpg";
import modern from "../assets/portfolios/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg";
import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";
import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";
import colorcorrection from "../assets/portfolios/image-editing/color-correction/1/colorcorrection.jpeg";
import imageretouching from "../assets/portfolios/image-editing/image-retouching/1/image-retouching.jpg";
import spotremoval from "../assets/portfolios/image-editing/sport-removal/1/spotremove.jpg";
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";
import nexus from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/1.jpg";
import dynamic from "../assets/portfolios/logo-design/brand-guidelines/letter-d/1.jpg";

// Categories with Sub-categories
const categories = [
  { 
    id: "all", 
    name: "All Projects", 
    icon: "🎨",
    subCategories: []
  },
  { 
    id: "logo", 
    name: "Logo Design", 
    icon: "✨",
    subCategories: [
      { id: "abstract", name: "Abstract Marks" },
      { id: "lettermark", name: "Letter Marks" },
      { id: "wordmark", name: "Word Marks" },
      { id: "combination", name: "Combination Marks" },
      { id: "brand-guidelines", name: "Brand Guidelines" }
    ]
  },
  { 
    id: "business-card", 
    name: "Business Cards", 
    icon: "💼",
    subCategories: [
      { id: "minimalist", name: "Minimalist" },
      { id: "modern", name: "Modern" },
      { id: "professional", name: "Professional" },
      { id: "custom", name: "Custom" }
    ]
  },
  { 
    id: "letterhead", 
    name: "Letterheads", 
    icon: "📄",
    subCategories: [
      { id: "corporate", name: "Corporate" },
      { id: "minimalist", name: "Minimalist" },
      { id: "modern", name: "Modern" }
    ]
  },
  { 
    id: "social-media-post", 
    name: "Social Media", 
    icon: "📱",
    subCategories: [
      { id: "facebook-cover", name: "Facebook Covers" },
      { id: "instagram-post", name: "Instagram Posts" },
      { id: "linkedin-banner", name: "LinkedIn Banners" }
    ]
  },
  { 
    id: "banner", 
    name: "Banners", 
    icon: "🎯",
    subCategories: [
      { id: "promotional", name: "Promotional" },
      { id: "event", name: "Event" },
      { id: "corporate", name: "Corporate" }
    ]
  },
  { 
    id: "image-editing", 
    name: "Image Editing", 
    icon: "🖼️",
    subCategories: [
      { id: "background-removal", name: "Background Removal" },
      { id: "color-correction", name: "Color Correction" },
      { id: "retouching", name: "Retouching" },
      { id: "spot-removal", name: "Spot Removal" }
    ]
  },
  { 
    id: "stationery", 
    name: "Stationery", 
    icon: "📝",
    subCategories: [
      { id: "business-cards", name: "Business Cards" },
      { id: "letterheads", name: "Letterheads" },
      { id: "envelopes", name: "Envelopes" }
    ]
  },
];

// Sort Options
const sortOptions = [
  { id: "title", name: "Title A-Z", icon: "🔤" },
  { id: "title-desc", name: "Title Z-A", icon: "🔤" },
  { id: "newest", name: "Newest First", icon: "🆕" },
  { id: "oldest", name: "Oldest First", icon: "📅" },
  { id: "popular", name: "Most Popular", icon: "⭐" },
  { id: "category", name: "By Category", icon: "📂" }
];

// Portfolio Items
const portfolioItems = [
  {
    id: "momentum-clothing-brand-for-men",
    title: "Momentum Menswear Brand Identity",
    categories: ["logo"],
    subCategories: ["abstract"],
    tags: ["Logo Design", "Brand Identity"],
    image: momentum,
  },
  {
    id: "techvision-business-card",
    title: "TechVision Camera Business Card",
    categories: ["business-card"],
    subCategories: ["minimalist"],
    tags: ["Business Card"],
    image: modernminimalistcamerabusinesscard,
  },
  {
    id: "elite-corporate-letterhead",
    title: "Luxury Corporate Letterhead",
    categories: ["letterhead"],
    subCategories: ["corporate"],
    tags: ["Letterhead", "Luxury", "Corporate", "Gold Accents"],
    image: elegantgoldaccentedcorporateletterhead,
  },
  {
    id: "promotional-banner",
    title: "Dynamic Promotional Banner",
    categories: ["banner"],
    subCategories: ["promotional"],
    tags: ["Banner", "Promotional", "Marketing", "Dynamic"],
    image: professionalpromotionalbanner,
  },
  {
    id: "luxury-real-estate-cover",
    title: "Luxury Real Estate Facebook Cover",
    categories: ["social-media-post"],
    subCategories: ["facebook-cover"],
    tags: ["Social Media", "Real Estate", "Luxury", "Facebook Cover"],
    image: socialmediacoverdesign,
  },
  {
    id: "photoperfect-background-removal",
    title: "Professional Background Removal",
    categories: ["image-editing"],
    subCategories: ["background-removal"],
    tags: ["Image Editing", "Background Removal", "Clipping Path", "Professional"],
    image: imageclippingpath,
  },
  {
    id: "boldpath-brand-guidelines",
    title: "BoldPath Complete Brand Guidelines",
    categories: ["logo"],
    subCategories: ["brand-guidelines"],
    tags: ["Brand Guidelines", "Brand Identity", "Complete Package"],
    image: boldpath,
  },
  {
    id: "lifesaver-blood-donation",
    title: "LifeSaver Blood Donation Campaign",
    categories: ["logo"],
    subCategories: ["combination"],
    tags: ["Logo Design", "Healthcare", "Non-Profit", "Campaign"],
    image: blooddonation,
  },
  {
    id: "innovatetech-business-cards",
    title: "InnovateTech Business Card Collection",
    categories: ["business-card"],
    subCategories: ["modern"],
    tags: ["Business Card", "Technology", "Modern", "Creative"],
    image: modernbusinesscard,
  },
  {
    id: "minimalist-letterhead",
    title: "Clean Minimalist Letterhead",
    categories: ["letterhead"],
    subCategories: ["minimalist"],
    tags: ["Letterhead", "Minimalist", "Clean", "Professional"],
    image: modernminimalist,
  },
  {
    id: "uniflora-healthcare",
    title: "Uniflora Healthcare & Wellness Logo",
    categories: ["logo"],
    subCategories: ["lettermark"],
    tags: ["Logo Design", "Healthcare", "Wellness", "Professional"],
    image: uniflora,
  },
  {
    id: "ranova-corporate",
    title: "Ranova Corporate Brand Guidelines",
    categories: ["logo"],
    subCategories: ["brand-guidelines"],
    tags: ["Brand Guidelines", "Corporate", "Complete Package"],
    image: ranova,
  },
  {
    id: "executive-business-cards",
    title: "Executive Business Card Collection",
    categories: ["business-card"],
    subCategories: ["professional"],
    tags: ["Business Card", "Professional", "Corporate", "Executive"],
    image: visitingcard,
  },
  {
    id: "winnest-real-estate",
    title: "WinNest Real Estate Brand Identity",
    categories: ["logo"],
    subCategories: ["wordmark"],
    tags: ["Logo Design", "Real Estate", "Wordmark", "Brand Identity"],
    image: winnest,
  },
  {
    id: "pure-minimalist-card",
    title: "Pure Minimalist Business Card",
    categories: ["business-card"],
    subCategories: ["minimalist"],
    tags: ["Business Card", "Minimalist", "Clean", "Simple"],
    image: minimalistcard,
  },
  {
    id: "corporate-professional-card",
    title: "Corporate Professional Business Card",
    categories: ["business-card"],
    subCategories: ["professional"],
    tags: ["Business Card", "Professional", "Corporate", "Clean"],
    image: professionalcard,
  },
  {
    id: "nexus-technology-system",
    title: "Nexus Technology Brand System",
    categories: ["logo"],
    subCategories: ["brand-guidelines"],
    tags: ["Brand Guidelines", "Logo Design", "Technology", "Complete System"],
    image: nexus,
  },
  {
    id: "bespoke-business-card",
    title: "Bespoke Business Card Design",
    categories: ["business-card"],
    subCategories: ["custom"],
    tags: ["Business Card", "Custom", "Bespoke", "Unique"],
    image: customcard,
  },
  {
    id: "meloplay-music",
    title: "Meloplay Music Streaming Logo",
    categories: ["logo"],
    subCategories: ["lettermark"],
    tags: ["Logo Design", "Music", "Lettermark", "Entertainment"],
    image: meloplay,
  },
  {
    id: "player-gaming",
    title: "Player Gaming Brand Logo",
    categories: ["logo"],
    subCategories: ["abstract"],
    tags: ["Logo Design", "Gaming", "Abstract", "Dynamic"],
    image: player,
  },
  {
    id: "arborsphere-environmental",
    title: "ArborSphere Environmental Logo",
    categories: ["logo"],
    subCategories: ["combination"],
    tags: ["Logo Design", "Environmental", "Abstract", "Nature"],
    image: arborsphere,
  },
  {
    id: "modern-typography-card",
    title: "Modern Typography Business Card",
    categories: ["business-card"],
    subCategories: ["modern"],
    tags: ["Business Card", "Modern", "Typography", "Clean"],
    image: moderncard,
  },
  {
    id: "wind-energy-logo",
    title: "Wind Energy Solutions Logo",
    categories: ["logo"],
    subCategories: ["lettermark"],
    tags: ["Logo Design", "Energy", "Lettermark", "Renewable"],
    image: wind,
  },
  {
    id: "zxon-technology-logo",
    title: "Zxon Technology Logo",
    categories: ["logo"],
    subCategories: ["lettermark"],
    tags: ["Logo Design", "Technology", "Lettermark", "Modern"],
    image: zxon,
  },
  {
    id: "zepeq-innovation-logo",
    title: "Zepeq Innovation Logo",
    categories: ["logo"],
    subCategories: ["lettermark"],
    tags: ["Logo Design", "Innovation", "Lettermark", "Technology"],
    image: zepeq,
  },
  {
    id: "ecogrow-sustainable-logo",
    title: "EcoGrow Sustainable Logo",
    categories: ["logo"],
    subCategories: ["combination"],
    tags: ["Logo Design", "Sustainability", "Lettermark", "Green"],
    image: ecogrow,
  },
  {
    id: "corporate-executive-letterhead",
    title: "Corporate Executive Letterhead",
    categories: ["letterhead"],
    subCategories: ["corporate"],
    tags: ["Letterhead", "Corporate", "Executive", "Professional"],
    image: corporate,
  },
  {
    id: "contemporary-letterhead",
    title: "Contemporary Letterhead Design",
    categories: ["letterhead"],
    subCategories: ["modern"],
    tags: ["Letterhead", "Modern", "Contemporary", "Clean"],
    image: modern,
  },
  {
    id: "player-sports-logo",
    title: "The Player Sports Logo",
    categories: ["logo"],
    subCategories: ["abstract"],
    tags: ["Logo Design", "Sports", "Abstract", "Dynamic"],
    image: playerlogo,
  },
  {
    id: "cycle-fitness-logo",
    title: "Cycle Fitness Logo",
    categories: ["logo"],
    subCategories: ["lettermark"],
    tags: ["Logo Design", "Fitness", "Lettermark", "Health"],
    image: cycle,
  },
  {
    id: "color-correction-service",
    title: "Professional Color Correction Service",
    categories: ["image-editing"],
    subCategories: ["color-correction"],
    tags: ["Image Editing", "Color Correction", "Professional", "Photoshop"],
    image: colorcorrection,
  },
  {
    id: "photo-retouching-service",
    title: "Advanced Photo Retouching",
    categories: ["image-editing"],
    subCategories: ["retouching"],
    tags: ["Image Editing", "Retouching", "Advanced", "Professional"],
    image: imageretouching,
  },
  {
    id: "custom-business-card-design",
    title: "Bespoke Business Card Design",
    categories: ["business-card"],
    subCategories: ["custom"],
    tags: ["Business Card", "Custom", "Bespoke", "Unique"],
    image: custombusinesscard,
  },
  {
    id: "spot-removal-service",
    title: "Professional Spot Removal Service",
    categories: ["image-editing"],
    subCategories: ["spot-removal"],
    tags: ["Image Editing", "Spot Removal", "Professional", "Clean"],
    image: spotremoval,
  },
  {
    id: "dynamic-brand-system",
    title: "Dynamic Brand Identity System",
    categories: ["logo"],
    subCategories: ["brand-guidelines"],
    tags: ["Logo Design", "Brand Guidelines", "Dynamic", "Complete System"],
    image: dynamic,
  },
];

// Staggered grid animation variants
const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Portfolio Card Component for Grid View
const PortfolioCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
        <CardContent className="p-0">
          {/* Image Container */}
          <Link to={`/projects/${item.id}`} className="block relative aspect-[4/3] overflow-hidden rounded-t-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110 rounded-t-lg"
            />
          </Link>
          
          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <Link to={`/projects/${item.id}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>
            </Link>
            
            {/* View Button */}
            <div className="flex items-center justify-between">
              <Link 
                to={`/projects/${item.id}`} 
                className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300"
              >
                View Project 
                <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Portfolio Card Component for List View
const PortfolioListCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
        show: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white group-hover:border-blue-200 group-hover:border">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
                        {/* Image Container */}
            <Link to={`/projects/${item.id}`} className="block relative w-full md:w-80 h-64 md:h-auto overflow-hidden rounded-l-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110 rounded-l-lg"
              />
 
              {/* Overlay with category info */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm">
                  {item.categories[0]?.charAt(0).toUpperCase() + item.categories[0]?.slice(1)}
                </Badge>
              </div>
            </Link>
            
            {/* Content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <Link to={`/projects/${item.id}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </Link>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags?.slice(0, 4).map((tag: string, tagIndex: number) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {item.tags?.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.tags.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Category and Sub-category info */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Category:</span>
                      <span className="capitalize">{item.categories[0]}</span>
                    </div>
                    {item.subCategories?.[0] && (
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="font-medium">Type:</span>
                        <span className="capitalize">{item.subCategories[0]}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <Link 
                      to={`/projects/${item.id}`} 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Project #{index + 1}</span>
                    <span>•</span>
                    <span>{item.categories[0]?.charAt(0).toUpperCase() + item.categories[0]?.slice(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Projects Component
const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSubFilter, setActiveSubFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("title");
  // Add state for pagination
  const [visibleCount, setVisibleCount] = useState(15);
  // Add loading state for See More
  const [loadingMore, setLoadingMore] = useState(false);
  // Add this new state near the other useState hooks
  const [showSubCategories, setShowSubCategories] = useState(false);
  // Add this new state near the other useState hooks
  const [lastAnimatedCategory, setLastAnimatedCategory] = useState<string | null>(null);

  // Get current category's sub-categories
  const currentCategory = categories.find(cat => cat.id === activeFilter);
  const availableSubCategories = currentCategory?.subCategories || [];

  // ==== Filtering Logic ====
  const filteredProjects = portfolioItems.filter((item) => {
    // Search filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags &&
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    // Category filter
    const matchesCategory =
      activeFilter === "all" ||
      (Array.isArray(item.categories) &&
        item.categories.includes(activeFilter));

    // Sub-category filter
    const matchesSubCategory =
      activeSubFilter === "all" ||
      (Array.isArray(item.subCategories) &&
        item.subCategories.includes(activeSubFilter));

    return matchesSearch && matchesCategory && matchesSubCategory;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "newest":
        return 0; // You can add date field later
      case "oldest":
        return 0; // You can add date field later
      case "popular":
        return 0; // You can add popularity field later
      case "category":
        return a.categories[0]?.localeCompare(b.categories[0] || '');
      default:
        return 0;
    }
  });

  // Reset sub-filter when main category changes
  useEffect(() => {
    setActiveSubFilter("all");
  }, [activeFilter]);

  // Reset visibleCount when filters/search change
  useEffect(() => {
    setVisibleCount(15);
  }, [searchQuery, activeFilter, activeSubFilter, sortBy]);

  // Projects to show
  const projectsToShow = sortedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProjects.length;

  // See More handler with loading
  const handleSeeMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 9);
      setLoadingMore(false);
    }, 1000);
  };

  // Add this effect to reset subcategory visibility when category changes
  useEffect(() => {
    if (activeFilter === "all") {
      setShowSubCategories(false);
      setLastAnimatedCategory(null);
    } else if (categories.find(cat => cat.id === activeFilter)?.subCategories?.length > 0) {
      setShowSubCategories(true);
      setLastAnimatedCategory(activeFilter);
    } else {
      setShowSubCategories(false);
      setLastAnimatedCategory(null);
    }
  }, [activeFilter]);

  return (
    <>
      <Seo 
        title="Projects | Ariful Creator Studio"
        description="Explore the portfolio projects of Ariful Islam, a top graphic designer in Bangladesh. See branding, logo design, UI/UX, and creative works."
        keywords="portfolio, projects, Ariful Creator Studio, arifulcreatorstudio, graphic design, logo design, branding, UI/UX, Bangladesh, best designer, creative studio, hire designer, top graphic designer"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 md:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100/50 mb-6 hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Portfolio Collection
                </span>
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Creative Portfolio
                <span className="block mt-2">Showcase</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
                Explore my diverse collection of design projects, each crafted with precision 
                and creativity to deliver exceptional visual experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-8">
            <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                {/* Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center mb-6">
                    <div className="relative flex-1">
                      <input
                        type="text"
                      placeholder="Search projects, clients, or tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-4 pl-14 pr-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
                      />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      variant="outline"
                      className="flex items-center gap-2 px-6 py-4 hover:bg-gray-50"
                    >
                      <Filter size={18} />
                      <span>Filters</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    
                    <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                      <Button
                        onClick={() => setViewMode("grid")}
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="sm"
                        className="rounded-none"
                      >
                        <Grid size={16} />
                      </Button>
                      <Button
                        onClick={() => setViewMode("list")}
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="sm"
                        className="rounded-none"
                      >
                        <List size={16} />
                    </Button>
                    </div>
                  </div>
                  </div>

                  {/* Filter Panel */}
                  <AnimatePresence>
                    {isFilterOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-gray-100 pt-6"
                      >
                        <div className="space-y-6">
                          {/* Categories */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
                            <div className="flex flex-wrap gap-2">
                              {categories.map((category) => (
                                <Button
                                  key={category.id}
                                  onClick={() => {
                                    if (activeFilter === category.id) {
                                      setShowSubCategories((prev) => !prev);
                                    } else {
                                      setActiveFilter(category.id);
                                      setShowSubCategories(true);
                                      setLastAnimatedCategory(category.id);
                                    }
                                  }}
                                  variant={activeFilter === category.id ? "default" : "outline"}
                                  size="sm"
                                  className="text-sm"
                                >
                                  <span className="mr-2">{category.icon}</span>
                                  {category.name}
                                </Button>
                              ))}
                            </div>
                          </div>

                          {/* Sub-categories - Only show if there are available sub-categories */}
                          <AnimatePresence initial={false}>
                            {availableSubCategories.length > 0 && showSubCategories && (
                              <motion.div
                                key={lastAnimatedCategory || activeFilter}
                                initial={{ opacity: 0, y: -10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Sub-categories</h4>
                                <div className="flex flex-wrap gap-2">
                                  <Button
                                    onClick={() => setActiveSubFilter("all")}
                                    variant={activeSubFilter === "all" ? "default" : "outline"}
                                    size="sm"
                                    className="text-sm"
                                  >
                                    All Sub-categories
                                  </Button>
                                  {availableSubCategories.map((subCategory) => (
                                    <Button
                                      key={subCategory.id}
                                      onClick={() => setActiveSubFilter(subCategory.id)}
                                      variant={activeSubFilter === subCategory.id ? "default" : "outline"}
                                      size="sm"
                                      className="text-sm"
                                    >
                                      {subCategory.name}
                                    </Button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Sort Options and Clear Filter Button Row */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Sort By</h4>
                            <div className="flex items-center gap-3">
                              <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                {sortOptions.map((option) => (
                                  <option key={option.id} value={option.id}>{option.name}</option>
                                ))}
                              </select>
                              <Button
                                variant="ghost"
                                className="h-10 text-sm text-red-500 hover:text-red-700 border border-red-300 px-4"
                                onClick={() => {
                                  setActiveFilter("all");
                                  setActiveSubFilter("all");
                                  setSearchQuery("");
                                  setSortBy("title");
                                }}
                              >
                                <X className="w-4 h-4 mr-2" /> Clear Filter
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </div>
        </section>

        {/* Projects Grid */}
        <section className={`py-12 relative ${viewMode === "list" ? "bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30" : ""}`}>
          {viewMode === "list" && (
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
          )}
          <div className="container mx-auto px-4 md:px-8 relative">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{projectsToShow.length}</span> of <span className="font-semibold">{sortedProjects.length}</span> projects
              </p>
              {searchQuery && (
                <Button
                  variant="ghost"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear Search
                </Button>
              )}
            </div>

            {/* Projects Grid */}
            {projectsToShow.length > 0 ? (
              <>
                <motion.div
                  className={`grid gap-8 ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                  variants={gridVariants}
                  initial="hidden"
                  animate="show"
                >
                  {projectsToShow.map((item, index) => (
                    viewMode === "grid" ? (
                      <PortfolioCard key={item.id} item={item} index={index} />
                    ) : (
                      <PortfolioListCard key={item.id} item={item} index={index} />
                    )
                  ))}
                </motion.div>
                {/* See More Button */}
                {hasMore && (
                  <div className="flex justify-center mt-10">
                    <Button
                      onClick={handleSeeMore}
                      className="px-8 py-3 text-base font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                      disabled={loadingMore}
                    >
                      {loadingMore ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="animate-spin w-5 h-5" /> Loading...
                        </span>
                      ) : (
                        "See More"
                      )}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full py-24 flex flex-col items-center justify-center">
                <Search className="w-16 h-16 mb-6 text-gray-300" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">No items available</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Social Media Style Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Follow My Work
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover more of my creative work across different platforms and get inspired by the latest design trends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Behance Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => window.open('https://www.behance.net/arifulcreatorstudio', '_blank')}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl">🎨</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Behance</h3>
                          <p className="text-sm opacity-90">Professional Portfolio</p>
                        </div>
                      </div>
                      <img
                        src={momentum}
                        alt="Behance Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">@arifulcreatorstudio</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://www.behance.net/arifulcreatorstudio', '_blank');
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dribbble Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group cursor-pointer"
                onClick={() => window.open('https://dribbble.com/arifulcreatorstudio', '_blank')}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 opacity-90 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl">🏀</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Dribbble</h3>
                          <p className="text-sm opacity-90">Design Shots</p>
                        </div>
                      </div>
                      <img
                        src={blooddonation}
                        alt="Dribbble Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">@arifulcreatorstudio</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group-hover:bg-pink-500 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://dribbble.com/arifulcreatorstudio', '_blank');
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pinterest Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group cursor-pointer"
                onClick={() => window.open('https://pinterest.com/arifulcreatorstudio', '_blank')}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-90 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl">📌</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Pinterest</h3>
                          <p className="text-sm opacity-90">Design Inspiration</p>
                        </div>
                      </div>
                      <img
                        src={uniflora}
                        alt="Pinterest Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">@arifulcreatorstudio</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group-hover:bg-red-600 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://pinterest.com/arifulcreatorstudio', '_blank');
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Instagram Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group cursor-pointer"
                onClick={() => window.open('https://instagram.com/arifulcreatorstudio', '_blank')}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-90 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl">📸</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Instagram</h3>
                          <p className="text-sm opacity-90">Visual Stories</p>
                        </div>
                      </div>
                      <img
                        src={winnest}
                        alt="Instagram Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">@arifulcreatorstudio</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://instagram.com/arifulcreatorstudio', '_blank');
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Stay Updated</h3>
                  <p className="text-sm text-gray-600">Follow for daily design inspiration and updates</p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => {
                    // Open all social media links in new tabs
                    const links = [
                      'https://www.behance.net/arifulcreatorstudio',
                      'https://dribbble.com/arifulcreatorstudio',
                      'https://pinterest.com/arifulcreatorstudio',
                      'https://instagram.com/arifulcreatorstudio'
                    ];
                    links.forEach(link => window.open(link, '_blank'));
                  }}
                >
                  Follow All
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />

        <style>{`        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </>
  );
};

export default Projects;