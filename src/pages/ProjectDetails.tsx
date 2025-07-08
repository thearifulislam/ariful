import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  User,
  Tag,
  CheckCircle,
  Layers,
  ChevronRight,
  Eye,
  Clock,
  ArrowRight,
  Target,
  Lightbulb,
  Trophy,
  Workflow,
} from "lucide-react";
import {
  FaBehance,
  FaDribbble,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

// Import project images
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import momentum2 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/2.jpg";
import momentum3 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/3.jpg";
import momentum4 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/4.jpg";
import momentum5 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/5.jpg";
import momentum6 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/6.jpg";
import momentum7 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/7.jpg";
import momentum8 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/8.jpg";
import momentum9 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/9.jpg";
import momentum10 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/10.jpg";
import momentum11 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/11.jpg";
import momentum12 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/12.jpg";
import momentum13 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/13.jpg";
import momentum14 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/14.jpg";
import momentum15 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/15.jpg";
import momentum16 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/16.jpg";
import momentum17 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/17.jpg";
import momentum18 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/18.jpg";
import momentum19 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/19.jpg";
import momentum20 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/20.jpg";
import momentum21 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/21.jpg";
import momentum22 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/22.jpg";

import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import arborsphere2 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/2.jpg";
import arborsphere3 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/3.jpg";
import arborsphere4 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/4.jpg";
import arborsphere5 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/5.jpg";
import arborsphere6 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/6.jpg";
import arborsphere7 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/7.jpg";
import arborsphere8 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/8.jpg";
import arborsphere9 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/9.jpg";
import arborsphere10 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/10.jpg";
import arborsphere11 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/11.jpg";
import arborsphere12 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/12.jpg";
import arborsphere13 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/13.jpg";
import arborsphere14 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/14.jpg";
import arborsphere15 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/15.jpg";
import arborsphere16 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/16.jpg";
import arborsphere17 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/17.jpg";
import arborsphere18 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/18.jpg";
import arborsphere19 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/19.jpg";
import arborsphere20 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/20.jpg";
import arborsphere21 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/21.jpg";
import arborsphere22 from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/22.jpg";

import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";

import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import boldpath2 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/2.jpg";
import boldpath3 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/3.jpg";
import boldpath4 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/4.jpg";
import boldpath5 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/5.jpg";
import boldpath6 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/6.jpg";
import boldpath7 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/7.jpg";
import boldpath8 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/8.jpg";
import boldpath9 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/9.jpg";
import boldpath10 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/10.jpg";
import boldpath11 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/11.jpg";
import boldpath12 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/12.jpg";
import boldpath13 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/13.jpg";
import boldpath14 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/14.jpg";
import boldpath15 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/15.jpg";
import boldpath16 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/16.jpg";
import boldpath17 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/17.jpg";
import boldpath18 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/18.jpg";
import boldpath19 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/19.jpg";
import boldpath20 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/20.jpg";
import boldpath21 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/21.jpg";
import boldpath22 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/22.jpg";
import boldpath23 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/23.jpg";
import boldpath24 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/24.jpg";
import boldpath25 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/25.jpg";
import boldpath26 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/26.jpg";
import boldpath27 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/27.jpg";
import boldpath28 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/28.jpg";
import boldpath29 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/29.jpg";
import boldpath30 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/30.jpg";
import boldpath31 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/31.jpg";
import boldpath32 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/32.jpg";
import boldpath33 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/33.jpg";
import boldpath34 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/34.jpg";
import boldpath35 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/35.jpg";
import boldpath36 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/36.jpg";
import boldpath37 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/37.jpg";
import boldpath38 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/38.jpg";
import boldpath39 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/39.jpg";
import boldpath40 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/40.jpg";
import boldpath41 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/41.jpg";
import boldpath42 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/42.jpg";
import boldpath43 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/43.jpg";
import boldpath44 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/44.jpg";
import boldpath45 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/45.jpg";
import boldpath46 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/46.jpg";
import boldpath47 from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/47.jpg";

// business card
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";

// photo editing
import imageretouching from "../assets/portfolios/image-editing/image-retouching/1/image-retouching.jpg";
import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";
import colorcorrection from "../assets/portfolios/image-editing/color-correction/1/colorcorrection.jpeg";
import spotremoval from "../assets/portfolios/image-editing/sport-removal/1/spotremove.jpg";

// letterhead
import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";

// banner
import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";


import { projectsData, ProjectType } from "../data/projects";
import "./ProjectDetails.css";

// Project Categories
const projectCategories = {
  // logo
  logo: {
    title: "Logo Design Projects",
    description:
      "Creative and professional logo designs that capture brand essence",
    projects: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear Logo Design",
        description:
          "A modern and sophisticated logo design for a premium menswear brand",
        date: "March 2024",
        client: "Momentum Clothing",
        category: "Logo Design",
        coverImage: momentum,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Fashion", "Minimalist"],
        creativeFields: ["Brand Identity", "Logo Design"],
        galleryImages: [
          momentum,
          momentum2,
          momentum3,
          momentum4,
          momentum5,
          momentum6,
          momentum7,
          momentum8,
          momentum9,
          momentum10,
          momentum11,
          momentum12,
          momentum13,
          momentum14,
          momentum15,
          momentum16,
          momentum17,
          momentum18,
          momentum19,
          momentum20,
          momentum21,
          momentum22,
        ],
      },
      {
        id: "blood-donation-logo",
        title: "Blood Donation Campaign Logo",
        description:
          "A meaningful and impactful logo for a blood donation awareness campaign",
        date: "February 2024",
        client: "LifeSave Foundation",
        category: "Logo Design",
        coverImage: blooddonation,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Healthcare", "Campaign"],
        creativeFields: ["Brand Identity", "Logo Design"],
        galleryImages: [blooddonation],
      },

      {
        id: "boldpath-brand-guidelines",
        title: "BoldPath Complete Brand Guidelines",
        description:
          "A complete brand guidelines package for BoldPath, including logo, colors, typography, and more",
        date: "March 2024",
        client: "BoldPath",
        category: "Logo Design",
        coverImage: boldpath,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Brand Guidelines", "Brand Identity", "Complete Package"],
        creativeFields: ["Brand Identity", "Logo Design"],
        galleryImages: [
          boldpath,
          boldpath2,
          boldpath3,
          boldpath4,
          boldpath5,
          boldpath6,
          boldpath7,
          boldpath8,
          boldpath9,
          boldpath10,
          boldpath11,
          boldpath12,
          boldpath13,
          boldpath14,
          boldpath15,
          boldpath16,
          boldpath17,
          boldpath18,
          boldpath19,
          boldpath20,
          boldpath21,
          boldpath22,
          boldpath23,
          boldpath24,
          boldpath25,
          boldpath26,
          boldpath27,
          boldpath28,
          boldpath29,
          boldpath30,
          boldpath31,
          boldpath32,
          boldpath33,
          boldpath34,
          boldpath35,
          boldpath36,
          boldpath37,
          boldpath38,
          boldpath39,
          boldpath40,
          boldpath41,
          boldpath42,
          boldpath43,
          boldpath44,
          boldpath45,
          boldpath46,
          boldpath47,
        ],
      },

      {
        id: "arborsphere-environmental",
        title: "Blood Donation Campaign Logo",
        description:
          "A meaningful and impactful logo for a blood donation awareness campaign",
        date: "February 2024",
        client: "LifeSave Foundation",
        category: "Logo Design",
        coverImage: arborsphere,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Healthcare", "Campaign"],
        creativeFields: ["Brand Identity", "Logo Design"],
        galleryImages: [
          arborsphere,
          arborsphere2,
          arborsphere3,
          arborsphere4,
          arborsphere5,
          arborsphere6,
          arborsphere7,
          arborsphere8,
          arborsphere9,
          arborsphere10,
          arborsphere11,
          arborsphere12,
          arborsphere13,
          arborsphere14,
          arborsphere15,
          arborsphere16,
          arborsphere17,
          arborsphere18,
          arborsphere19,
          arborsphere20,
          arborsphere21,
          arborsphere22,
        ],
      },

      {
        id: "blood-donation-logo",
        title: "Blood Donation Campaign Logo",
        description:
          "A meaningful and impactful logo for a blood donation awareness campaign",
        date: "February 2024",
        client: "LifeSave Foundation",
        category: "Logo Design",
        coverImage: blooddonation,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Healthcare", "Campaign"],
        creativeFields: ["Brand Identity", "Logo Design"],
        galleryImages: [blooddonation],
      },
    ],
  },

  // image editing
  imageEditing: {
    title: "Image Editing Projects",
    description:
      "Professional photo editing and retouching services that transform ordinary images into extraordinary visuals",
    projects: [
      {
        id: "photo-retouching-service",
        title: "Professional Photo Retouching",
        description:
          "Advanced photo retouching and enhancement for professional photography",
        date: "March 2024",
        client: "Studio Photography Pro",
        category: "Image Editing",
        coverImage: imageretouching,
        tools: ["Adobe Photoshop", "Adobe Lightroom", "Capture One"],
        tags: ["Photo Retouching", "Portrait", "Professional"],
        creativeFields: ["Photo Editing", "Retouching", "Color Correction"],
        galleryImages: [imageretouching],
      },
      {
        id: "background-removal-service",
        title: "Professional Background Removal",
        description:
          "Precise background removal and clipping path services for e-commerce and marketing",
        date: "February 2024",
        client: "E-Commerce Plus",
        category: "Image Editing",
        coverImage: imageclippingpath,
        tools: ["Adobe Photoshop", "Pen Tool", "Layer Masks"],
        tags: ["Background Removal", "Clipping Path", "E-commerce"],
        creativeFields: [
          "Photo Editing",
          "Background Removal",
          "Product Photography",
        ],
        galleryImages: [imageclippingpath],
      },
      {
        id: "color-correction-mastery",
        title: "Advanced Color Correction",
        description:
          "Professional color grading and correction for photography and digital art",
        date: "January 2024",
        client: "Digital Art Studio",
        category: "Image Editing",
        coverImage: colorcorrection,
        tools: ["Adobe Photoshop", "Adobe Lightroom", "Color Grading Tools"],
        tags: ["Color Correction", "Color Grading", "Professional"],
        creativeFields: [
          "Color Correction",
          "Photo Enhancement",
          "Digital Art",
        ],
        galleryImages: [colorcorrection],
      },
      {
        id: "spot-removal-expertise",
        title: "Professional Spot Removal",
        description:
          "Expert spot removal and blemish correction for portrait and product photography",
        date: "December 2023",
        client: "Portrait Studio Elite",
        category: "Image Editing",
        coverImage: spotremoval,
        tools: ["Adobe Photoshop", "Healing Brush", "Clone Stamp"],
        tags: ["Spot Removal", "Blemish Correction", "Portrait"],
        creativeFields: [
          "Photo Retouching",
          "Blemish Removal",
          "Portrait Enhancement",
        ],
        galleryImages: [spotremoval],
      },
    ],
  },

  // business card
  businessCard: {
    title: "Business Card Design Projects",
    description:
      "Professional and creative business card designs that make lasting impressions",
    projects: [
      {
        id: "bespoke-business-card",
        title: "Modern Camera Business Card",
        description:
          "A sleek and professional business card design for a photography studio",
        date: "January 2024",
        client: "Lens & Light Studio",
        category: "Business Card Design",
        coverImage: customcard,
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        tags: ["Business Card", "Photography", "Modern"],
        creativeFields: ["Print Design", "Business Card"],
        galleryImages: [customcard],
      },

      {
        id: "modern-minimalist-camera-business-card",
        title: "Modern Camera Business Card",
        description:
          "A sleek and professional business card design for a photography studio",
        date: "January 2024",
        client: "Lens & Light Studio",
        category: "Business Card Design",
        coverImage: modernminimalistcamerabusinesscard,
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        tags: ["Business Card", "Photography", "Modern"],
        creativeFields: ["Print Design", "Business Card"],
        galleryImages: [modernminimalistcamerabusinesscard],
      },
    ],
  },

  // letterhead
  letterhead: {
    title: "Letterhead Design Projects",
    description: "Professional and creative letterhead designs for modern businesses.",
    projects: [
      {
        id: "elite-corporate-letterhead",
        title: "Modern Minimalist Corporate Letterhead",
        description:
          "A clean and professional letterhead design for a corporate brand, focusing on minimalism and strong brand identity.",
        date: "April 2024",
        client: "Corporate Inc.",
        category: "Letterhead Design",
        coverImage: elegantgoldaccentedcorporateletterhead,
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        tags: ["Letterhead", "Minimalist", "Corporate"],
        creativeFields: ["Print Design", "Stationery", "Brand Identity"],
        galleryImages: [elegantgoldaccentedcorporateletterhead]
      }
    ]
  },

  // banner

  banner: {
    title: "Banner Design Projects",
    description: "Professional and creative banner designs for modern businesses.",
    projects: [
      {
        id: "promotional-banner",
        title: "Promotional Banner",
        description:
          "A professional and creative banner design for a marketing campaign.",
        date: "May 2024",
        client: "Marketing Pro",
        category: "Banner Design",
        coverImage: professionalpromotionalbanner,
        tools: ["Adobe Photoshop", "Adobe Illustrator"],
        tags: ["Banner", "Promotional", "Marketing"],
        creativeFields: ["Banner Design", "Marketing", "Branding"],
        galleryImages: [professionalpromotionalbanner]
      }
    ]
  },


};

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const projectId = params.projectId;
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [projectId]);

  // Find project from all categories
  const findProject = () => {
    for (const category of Object.values(projectCategories)) {
      const project = category.projects.find((p) => p.id === projectId);
      if (project) return project;
    }
    return undefined;
  };

  const project = findProject();

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      switch (e.key) {
        case "ArrowLeft":
          if (project?.galleryImages) {
            const newIndex =
              activeImageIndex === 0
                ? project.galleryImages.length - 1
                : activeImageIndex - 1;
            setActiveImageIndex(newIndex);
          }
          break;
        case "ArrowRight":
          if (project?.galleryImages) {
            const newIndex =
              activeImageIndex === project.galleryImages.length - 1
                ? 0
                : activeImageIndex + 1;
            setActiveImageIndex(newIndex);
          }
          break;
        case "Escape":
          handleCloseModal();
          break;
        case "z":
          if (e.ctrlKey) {
            setIsZoomed(!isZoomed);
          }
          break;
      }
    },
    [activeImageIndex, project?.galleryImages, isZoomed]
  );

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && project?.galleryImages) {
      const newIndex =
        activeImageIndex === project.galleryImages.length - 1
          ? 0
          : activeImageIndex! + 1;
      setActiveImageIndex(newIndex);
    }

    if (isRightSwipe && project?.galleryImages) {
      const newIndex =
        activeImageIndex === 0
          ? project.galleryImages.length - 1
          : activeImageIndex! - 1;
      setActiveImageIndex(newIndex);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (activeImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeImageIndex, handleKeyDown]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600 font-medium">
              Loading project details...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center">
              {/* 404 Illustration */}
              <div className="mb-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-red-50 rounded-full blur-xl" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-1.5 w-12 bg-red-100 rounded-full mx-auto" />
                    <div className="h-1.5 w-8 bg-red-50 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Project Not Found
              </h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Oops! The project you're looking for doesn't exist or has been
                moved to a different location.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#1f2937] hover:bg-[#1f2937]/90 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Projects
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Go to Homepage
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const creativeFields = project.creativeFields?.length
    ? project.creativeFields
    : project.tags;

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setActiveImageIndex(null);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link
              to="/projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Link
                to="/projects"
                className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Eye className="w-5 h-5 mr-2 text-primary" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Project Details */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Project Details
                  </h3>

                  {project.tools && project.tools.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Layers className="w-4 h-4 mr-2 text-primary" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-primary" />
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {creativeFields && creativeFields.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        Creative Fields
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creativeFields.map((field, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="lg:col-span-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Project Gallery
                </h2>
                <div className="gallery-grid">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="gallery-item"
                      onClick={() => handleImageClick(index)}
                    >
                      <img src={image} alt={`Gallery ${index + 1}`} />
                      <div className="gallery-overlay">
                        <Eye className="w-6 h-6 text-white/90" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Other Portfolio Links */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              See in the other portfolio website:
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {project.id === "momentum-clothing-brand-for-men" && (
                <>
                  <a
                    href="https://www.behance.net/gallery/123456789/Momentum-Menswear-Logo-Design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300"
                  >
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://dribbble.com/shots/1234567-Momentum-Menswear-Logo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300"
                  >
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/username_momentum-menswear-logo-design-activity-123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/pin/momentum-menswear-logo-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300"
                  >
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p/momentum-menswear/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </>
              )}

              {project.id === "modern-minimalist-camera-business-card" && (
                <>
                  <a
                    href="https://www.behance.net/gallery/987654321/Modern-Camera-Business-Card"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300"
                  >
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://dribbble.com/shots/7654321-Modern-Camera-Business-Card"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300"
                  >
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/username_modern-camera-business-card-design-activity-987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/pin/modern-camera-business-card-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300"
                  >
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p/modern-camera-business-card/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.otherportfolio.com/modern-camera-business-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300"
                  >
                    <span>Other</span>
                  </a>
                </>
              )}

              {/* Image Editing Projects */}
              {project.id === "professional-photo-retouching" && (
                <>
                  <a
                    href="https://www.behance.net/gallery/123456789/Professional-Photo-Retouching"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300"
                  >
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://dribbble.com/shots/1234567-Professional-Photo-Retouching"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300"
                  >
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/username_professional-photo-retouching-activity-123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/pin/professional-photo-retouching/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300"
                  >
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p/professional-photo-retouching/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </>
              )}

              {project.id === "background-removal-service" && (
                <>
                  <a
                    href="https://www.behance.net/gallery/234567890/Background-Removal-Service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300"
                  >
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://dribbble.com/shots/2345678-Background-Removal-Service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300"
                  >
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/username_background-removal-service-activity-234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/pin/background-removal-service/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300"
                  >
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p/background-removal-service/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </>
              )}

              {project.id === "color-correction-mastery" && (
                <>
                  <a
                    href="https://www.behance.net/gallery/345678901/Color-Correction-Mastery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300"
                  >
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://dribbble.com/shots/3456789-Color-Correction-Mastery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300"
                  >
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/username_color-correction-mastery-activity-345678901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/pin/color-correction-mastery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300"
                  >
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p/color-correction-mastery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </>
              )}

              {project.id === "spot-removal-expertise" && (
                <>
                  <a
                    href="https://www.behance.net/gallery/456789012/Spot-Removal-Expertise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300"
                  >
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://dribbble.com/shots/4567890-Spot-Removal-Expertise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300"
                  >
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/username_spot-removal-expertise-activity-456789012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.pinterest.com/pin/spot-removal-expertise/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300"
                  >
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p/spot-removal-expertise/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300"
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {activeImageIndex !== null && (
        <div
          className={`fixed inset-0 image-modal-backdrop z-50 flex items-center justify-center p-4 ${
            isClosing ? "modal-closing" : ""
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`relative image-modal-content ${
              isClosing ? "modal-content-closing" : ""
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 right-4 text-white/90 hover:text-white transition-colors"
              onClick={handleCloseModal}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Close</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>

            {/* Navigation Buttons - Fixed Position */}
            {project.galleryImages && project.galleryImages.length > 1 && (
              <>
                <button
                  className="image-modal-nav-button prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeImageIndex !== null) {
                      const newIndex =
                        activeImageIndex === 0
                          ? project.galleryImages!.length - 1
                          : activeImageIndex - 1;
                      setActiveImageIndex(newIndex);
                    }
                  }}
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  className="image-modal-nav-button next"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeImageIndex !== null && project.galleryImages) {
                      const newIndex =
                        activeImageIndex === project.galleryImages.length - 1
                          ? 0
                          : activeImageIndex + 1;
                      setActiveImageIndex(newIndex);
                    }
                  }}
                  aria-label="Next image"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="image-container">
              <div
                className="relative rounded-2xl overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={project.galleryImages?.[activeImageIndex]}
                  alt={`Gallery ${activeImageIndex + 1}`}
                  className={`image-modal-image ${isZoomed ? "zoomed" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                />

                {/* Image Counter */}
                <div className="image-counter">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="font-medium">{activeImageIndex + 1}</span>
                    <span className="mx-1">/</span>
                    <span className="text-white/70">
                      {project.galleryImages?.length}
                    </span>
                  </div>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 bg-black/50 text-white/90 px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                  {isZoomed ? "Click to zoom out" : "Click to zoom in"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
