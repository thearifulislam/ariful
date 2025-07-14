import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Eye,
  Filter,
  X,
  ExternalLink,
  Star,
  Grid,
  List,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { allProjects } from "../data/allProjects";

// Asset imports
// Remove all image imports (momentum, blooddonation, uniflora, winnest)

// Categories with Sub-categories
const categories = [
  {
    id: "all",
    name: "All Projects",
    icon: "🎨",
    subCategories: [],
  },
  {
    id: "logo design",
    name: "Logo Design",
    icon: "✨",
    subCategories: [
      { id: "fashion", name: "Fashion" },
      { id: "healthcare", name: "Healthcare" },
      { id: "nature", name: "Nature" },
      { id: "real estate", name: "Real Estate" },
      { id: "music", name: "Music" },
      { id: "gaming", name: "Gaming" },
      { id: "environmental", name: "Environmental" },
      { id: "energy", name: "Energy" },
      { id: "technology", name: "Technology" },
      { id: "business", name: "Business" },
      { id: "agriculture", name: "Agriculture" },
      { id: "sports", name: "Sports" },
    ],
  },
  {
    id: "business card",
    name: "Business Cards",
    icon: "💼",
    subCategories: [
      { id: "minimalist", name: "Minimalist" },
      { id: "modern", name: "Modern" },
      { id: "professional", name: "Professional" },
      { id: "custom", name: "Custom" },
    ],
  },
  {
    id: "letterhead",
    name: "Letterheads",
    icon: "📄",
    subCategories: [
      { id: "corporate", name: "Corporate" },
      { id: "minimalist", name: "Minimalist" },
      { id: "modern", name: "Modern" },
    ],
  },
  {
    id: "image editing",
    name: "Image Editing",
    icon: "🖼️",
    subCategories: [
      { id: "background removal", name: "Background Removal" },
      { id: "color correction", name: "Color Correction" },
      { id: "retouching", name: "Retouching" },
      { id: "spot removal", name: "Spot Removal" },
    ],
  },
  {
    id: "banner",
    name: "Banners",
    icon: "🎯",
    subCategories: [
      { id: "promotional", name: "Promotional" },
      { id: "marketing", name: "Marketing" },
      { id: "social media", name: "Social Media" },
    ],
  },
  {
    id: "cover",
    name: "Cover",
    icon: "🖼️",
    subCategories: [
      { id: "facebook cover", name: "Facebook Cover" },
    ],
  },
];

// Sort Options
const sortOptions = [
  { id: "title", name: "Title A-Z", icon: "🔤" },
  { id: "title-desc", name: "Title Z-A", icon: "🔤" },
  { id: "newest", name: "Newest First", icon: "🆕" },
  { id: "oldest", name: "Oldest First", icon: "📅" },
  { id: "popular", name: "Most Popular", icon: "⭐" },
  { id: "category", name: "By Category", icon: "📂" },
];

// Generate portfolio items from allProjects
const portfolioItems = allProjects.map((project) => ({
  ...project,
  image: project.coverImage,
}));

// Staggered grid animation variants
const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Unified ProjectCard component for both grid and list view
const ProjectCard = ({
  item,
  index,
  viewMode,
}: {
  item: any;
  index: number;
  viewMode: "grid" | "list";
}) => {
  const Wrapper = item.behanceUrl
    ? (props: any) => (
        <a
          href={item.behanceUrl}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      )
    : (props: any) => <Link to={`/projects/${item.id}`} {...props} />;

  // Find extra info from allProjects or projectsData if available
  const description = item.description || "";
  const client = item.client || "";
  const category = item.category || "";
  const tags = item.tags || [];

  return (
    <motion.div
      variants={
        viewMode === "grid"
          ? {
              hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }
          : {
              hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
              show: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group-hover:border-blue-200 group-hover:border rounded-3xl">
        <CardContent
          className={
            viewMode === "grid" ? "p-0" : "p-0 flex flex-col md:flex-row"
          }
        >
          <div
            className={`${
              viewMode === "grid"
                ? "block relative aspect-[4/3] overflow-hidden rounded-3xl"
                : "block relative w-full md:w-80 h-64 md:h-auto overflow-hidden rounded-3xl"
            }`}
            style={{ filter: "drop-shadow(0 6px 8px rgba(0, 0, 0, 0.15))" }}
          >
            <Wrapper className="w-full h-full block">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110 rounded-3xl"
              />
            </Wrapper>
          </div>
          <div
            className={
              viewMode === "grid"
                ? "p-6"
                : "flex-1 p-6 md:p-8 flex flex-col h-full"
            }
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 text-left">
                  {item.title}
                </h3>
              </div>
              <div className="mt-auto">
                <div className="space-y-2">
                  {category && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">
                        Category
                      </span>
                      <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs text-right max-w-[60%]">
                        {category}
                      </span>
                    </div>
                  )}
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
  const [lastAnimatedCategory, setLastAnimatedCategory] = useState<
    string | null
  >(null);

  // Get current category's sub-categories
  const currentCategory = categories.find((cat) => cat.id === activeFilter);
  const availableSubCategories = currentCategory?.subCategories || [];

  // ==== Filtering Logic ====
  const filteredProjects = portfolioItems.filter((item) => {
    // Search filter
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      activeFilter === "all" ||
      item.category?.toLowerCase() === activeFilter.toLowerCase();

    // Sub-category filter
    const matchesSubCategory =
      activeSubFilter === "all" ||
      (item.tags &&
        item.tags.some((tag: string) =>
          tag.toLowerCase().includes(activeSubFilter.toLowerCase())
        ));

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
        return a.title.localeCompare(b.title || "");
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
    } else if (
      categories.find((cat) => cat.id === activeFilter)?.subCategories?.length >
      0
    ) {
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
        keywords="portfolio, projects, ArifulCreatorStudio, arifulcreatorstudio, graphic design, logo design, branding, UI/UX, Bangladesh, best designer, creative studio, hire designer, top graphic designer"
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
                Explore my diverse collection of design projects, each crafted
                with precision and creativity to deliver exceptional visual
                experiences.
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
                    <Search
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      variant="outline"
                      className="flex items-center gap-2 px-6 py-4 hover:bg-gray-50"
                    >
                      <Filter size={18} />
                      <span>Filters</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isFilterOpen ? "rotate-180" : ""
                        }`}
                      />
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
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">
                            Categories
                          </h4>
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
                                variant={
                                  activeFilter === category.id
                                    ? "default"
                                    : "outline"
                                }
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
                          {availableSubCategories.length > 0 &&
                            showSubCategories && (
                              <motion.div
                                key={lastAnimatedCategory || activeFilter}
                                initial={{ opacity: 0, y: -10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                  Sub-categories
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  <Button
                                    onClick={() => setActiveSubFilter("all")}
                                    variant={
                                      activeSubFilter === "all"
                                        ? "default"
                                        : "outline"
                                    }
                                    size="sm"
                                    className="text-sm"
                                  >
                                    All Sub-categories
                                  </Button>
                                  {availableSubCategories.map((subCategory) => (
                                    <Button
                                      key={subCategory.id}
                                      onClick={() =>
                                        setActiveSubFilter(subCategory.id)
                                      }
                                      variant={
                                        activeSubFilter === subCategory.id
                                          ? "default"
                                          : "outline"
                                      }
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
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">
                            Sort By
                          </h4>
                          <div className="flex items-center gap-3">
                            <select
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              className="h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {sortOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                  {option.name}
                                </option>
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

        {/* Projects Grid/List Section (all projects together) */}
        <section
          className={`py-12 relative ${
            viewMode === "list"
              ? "bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30"
              : ""
          }`}
        >
          {viewMode === "list" && (
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          )}
          <div className="container mx-auto px-4 md:px-8 relative">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{projectsToShow.length}</span>{" "}
                of{" "}
                <span className="font-semibold">{sortedProjects.length}</span>{" "}
                projects
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

            {/* Projects Grid/List */}
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
                    <ProjectCard
                      key={item.id}
                      item={item}
                      index={index}
                      viewMode={viewMode}
                    />
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
                          <Loader2 className="animate-spin w-5 h-5" />{" "}
                          Loading...
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
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  No items available
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter criteria.
                </p>
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
                Discover more of my creative work across different platforms and
                get inspired by the latest design trends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Behance Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.behance.net/arifulcreatorstudio",
                    "_blank"
                  )
                }
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
                          <p className="text-sm opacity-90">
                            Professional Portfolio
                          </p>
                        </div>
                      </div>
                      <img
                        src="https://via.placeholder.com/300x200" // Placeholder for image
                        alt="Behance Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          @arifulcreatorstudio
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              "https://www.behance.net/arifulcreatorstudio",
                              "_blank"
                            );
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
                onClick={() =>
                  window.open(
                    "https://dribbble.com/arifulcreatorstudio",
                    "_blank"
                  )
                }
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
                        src="https://via.placeholder.com/300x200" // Placeholder for image
                        alt="Dribbble Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          @arifulcreatorstudio
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-pink-500 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              "https://dribbble.com/arifulcreatorstudio",
                              "_blank"
                            );
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
                onClick={() =>
                  window.open(
                    "https://pinterest.com/arifulcreatorstudio",
                    "_blank"
                  )
                }
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
                          <p className="text-sm opacity-90">
                            Design Inspiration
                          </p>
                        </div>
                      </div>
                      <img
                        src="https://via.placeholder.com/300x200" // Placeholder for image
                        alt="Pinterest Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          @arifulcreatorstudio
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-red-600 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              "https://pinterest.com/arifulcreatorstudio",
                              "_blank"
                            );
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
                onClick={() =>
                  window.open(
                    "https://instagram.com/arifulcreatorstudio",
                    "_blank"
                  )
                }
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
                        src="https://via.placeholder.com/300x200" // Placeholder for image
                        alt="Instagram Portfolio"
                        className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          @arifulcreatorstudio
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              "https://instagram.com/arifulcreatorstudio",
                              "_blank"
                            );
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
                  <p className="text-sm text-gray-600">
                    Follow for daily design inspiration and updates
                  </p>
                </div>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => {
                    // Open all social media links in new tabs
                    const links = [
                      "https://www.behance.net/arifulcreatorstudio",
                      "https://dribbble.com/arifulcreatorstudio",
                      "https://pinterest.com/arifulcreatorstudio",
                      "https://instagram.com/arifulcreatorstudio",
                    ];
                    links.forEach((link) => window.open(link, "_blank"));
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
