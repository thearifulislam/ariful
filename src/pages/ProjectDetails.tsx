import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  ArrowLeft,
  User,
  Tag,
  CheckCircle,
  Circle,
  Layers,
  ChevronRight,
  Eye,
  Clock,
  ArrowRight,
  Target,
  Lightbulb,
  Trophy,
  Workflow
} from "lucide-react";
import { FaBehance, FaDribbble, FaLinkedin, FaPinterest, FaInstagram } from 'react-icons/fa';
import Seo from "../components/Seo";

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


import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";

// business card
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";

import { projectsData, ProjectType } from "../data/projects";
import "./ProjectDetails.css";

// Project Categories
const projectCategories = {
  // logo
  logo: {
    title: "Logo Design Projects",
    description: "Creative and professional logo designs that capture brand essence",
    projects: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear Logo Design",
        description: "A modern and sophisticated logo design for a premium menswear brand",
        date: "March 2024",
        client: "Momentum Clothing",
        category: "Logo Design",
        coverImage: momentum,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Fashion", "Minimalist"],
        creativeFields: ["Brand Identity", "Logo Design"],
        challenge: "Creating a logo that represents both luxury and contemporary fashion while maintaining simplicity",
        solution: "Developed a minimalist yet impactful logo that combines modern typography with subtle fashion elements",
        results: [
          "Increased brand recognition by 40%",
          "Positive feedback from target audience",
          "Successfully launched across all platforms"
        ],
        process: [
          {
            title: "Research & Discovery",
            description: "Analyzed market trends and competitor logos to identify unique opportunities"
          },
          {
            title: "Concept Development",
            description: "Created multiple concepts focusing on typography and minimal design elements"
          },
          {
            title: "Refinement",
            description: "Refined the chosen concept through multiple iterations and client feedback"
          }
        ],
        galleryImages: [momentum, momentum2, momentum3, momentum4, momentum5, momentum6, momentum7, momentum8, momentum9, momentum10, momentum11, momentum12, momentum13, momentum14, momentum15, momentum16, momentum17, momentum18, momentum19, momentum20, momentum21, momentum22]
      },
      {
        id: "blood-donation-logo",
        title: "Blood Donation Campaign Logo",
        description: "A meaningful and impactful logo for a blood donation awareness campaign",
        date: "February 2024",
        client: "LifeSave Foundation",
        category: "Logo Design",
        coverImage: blooddonation,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Healthcare", "Campaign"],
        creativeFields: ["Brand Identity", "Logo Design"],
        challenge: "Creating a logo that conveys trust, care, and urgency while being easily recognizable",
        solution: "Developed a heart-shaped logo incorporating a blood drop element with warm, inviting colors",
        results: [
          "Increased campaign awareness by 60%",
          "Higher engagement on social media",
          "Successful implementation across all campaign materials"
        ],
        process: [
          {
            title: "Research & Analysis",
            description: "Studied healthcare logos and blood donation campaigns globally"
          },
          {
            title: "Concept Development",
            description: "Created concepts focusing on heart and blood drop symbolism"
          },
          {
            title: "Finalization",
            description: "Refined the design based on stakeholder feedback and testing"
          }
        ],
        galleryImages: [blooddonation]
      }
    ]
  },

  // business card
  businessCard: {
    title: "Business Card Design Projects",
    description: "Professional and creative business card designs that make lasting impressions",
    projects: [
      {
        id: "modern-minimalist-camera-business-card",
        title: "Modern Camera Business Card",
        description: "A sleek and professional business card design for a photography studio",
        date: "January 2024",
        client: "Lens & Light Studio",
        category: "Business Card Design",
        coverImage: modernminimalistcamerabusinesscard,
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        tags: ["Business Card", "Photography", "Modern"],
        creativeFields: ["Print Design", "Business Card"],
        challenge: "Creating a business card that reflects the studio's modern and artistic approach",
        solution: "Designed a minimalist card with subtle camera elements and premium finishes",
        results: [
          "Enhanced brand perception",
          "Positive client feedback",
          "Increased networking effectiveness"
        ],
        process: [
          {
            title: "Concept Development",
            description: "Explored various design approaches focusing on photography elements"
          },
          {
            title: "Design Creation",
            description: "Developed the final design with attention to typography and spacing"
          },
          {
            title: "Production",
            description: "Selected premium materials and finishes for the final product"
          }
        ],
        galleryImages: [modernminimalistcamerabusinesscard]
      }
    ]
  }
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
  const [fade, setFade] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState<number | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [projectId]);

  // Find project from all categories
  const findProject = () => {
    for (const category of Object.values(projectCategories)) {
      const project = category.projects.find(p => p.id === projectId);
      if (project) return project;
    }
    return undefined;
  };

  const project = findProject();

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (displayedImageIndex === null) return;

    switch (e.key) {
      case 'ArrowLeft':
        if (project?.galleryImages) {
          const newIndex = displayedImageIndex === 0 
            ? project.galleryImages.length - 1 
            : displayedImageIndex - 1;
          handleImageChange(newIndex);
        }
        break;
      case 'ArrowRight':
        if (project?.galleryImages) {
          const newIndex = displayedImageIndex === project.galleryImages.length - 1 
            ? 0 
            : displayedImageIndex + 1;
          handleImageChange(newIndex);
        }
        break;
      case 'Escape':
        handleCloseModal();
        break;
      case 'z':
        if (e.ctrlKey) {
          setIsZoomed(!isZoomed);
        }
        break;
    }
  }, [displayedImageIndex, project?.galleryImages, isZoomed]);

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
      const newIndex = displayedImageIndex === project.galleryImages.length - 1 
        ? 0 
        : displayedImageIndex! + 1;
      handleImageChange(newIndex);
    }

    if (isRightSwipe && project?.galleryImages) {
      const newIndex = displayedImageIndex === 0 
        ? project.galleryImages.length - 1 
        : displayedImageIndex! - 1;
      handleImageChange(newIndex);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (displayedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [displayedImageIndex, handleKeyDown]);

  // When opening the modal, set displayedImageIndex and activeImageIndex
  useEffect(() => {
    if (displayedImageIndex !== null && activeImageIndex === null) {
      setActiveImageIndex(displayedImageIndex);
    }
    if (displayedImageIndex === null && activeImageIndex !== null) {
      setActiveImageIndex(null);
    }
  }, [displayedImageIndex, activeImageIndex]);

  // Helper for fade animation on image change
  const handleImageChange = (newIndex: number) => {
    setFadeOut(true);
    setTimeout(() => {
      setDisplayedImageIndex(newIndex);
      setFadeOut(false);
    }, 400); // match CSS transition
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600 font-medium">Loading project details...</p>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Project Not Found</h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Oops! The project you're looking for doesn't exist or has been moved to a different location.
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

  const creativeFields = project.creativeFields?.length ? project.creativeFields : project.tags;

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    setDisplayedImageIndex(index);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setActiveImageIndex(null);
      setDisplayedImageIndex(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={`${project.title} | Project | Ariful Creator Studio`}
        description={project.description}
        keywords={project.tags?.join(', ') + ', portfolio, graphic design, logo design, branding, UI/UX, Bangladesh, Ariful Creator Studio, arifulcreatorstudio'}
        image={project.coverImage}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Breadcrumb Navigation */}
        <section>
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">{project.title}</span>
            </div>
          </div>
        </section>
        {/* Hero Image */}
        <section>
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mb-10 relative">
            <img 
              src={project.coverImage} 
              alt={project.title + ' hero image'}
              className="w-full h-full object-cover"
            />
            {/* ...overlay code... */}
          </div>
        </section>
        {/* ...rest of the code, ensure all <img> have alt... */}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
