import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layout,
  Globe,
  Brush,
  Palette,
  PenTool,
  Type,
  PackageOpen,
  ImagePlus,
  Sparkles,
} from "lucide-react";

// ==== Glassmorphism & Modern CSS for Services Section ====
const servicesAnimStyle = `
  .service-card {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
    border-left: 6px solid var(--accent-color, #2563eb);
    opacity: 0;
    transform: translateY(40px);
    transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
  }
  .service-card.animate {
    animation: cardAppear 0.7s cubic-bezier(.4,0,.2,1) forwards;
  }
  @keyframes cardAppear {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .service-card:hover {
    box-shadow: 0 16px 40px 0 rgba(31,38,135,0.18);
    transform: translateY(-6px) scale(1.03);
    border-left-color: #6366f1;
  }
  .service-icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%);
    box-shadow: 0 2px 8px 0 rgba(31,38,135,0.08);
    margin-bottom: 1.25rem;
    font-size: 2rem;
  }
`;

if (typeof window !== "undefined") {
  const styleId = "services-section-anim-glass";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = servicesAnimStyle;
    document.head.appendChild(style);
  }
}

const accentColors = [
  "#2563eb", // blue
  "#a21caf", // purple
  "#0e7490", // teal
  "#f59e42", // orange
  "#e11d48", // rose
  "#059669", // emerald
  "#f59e42", // amber
  "#7c3aed", // violet
  "#f43f5e", // pink
  "#84cc16", // lime
  "#f472b6", // fuchsia
  "#0ea5e9", // sky
  "#fbbf24", // yellow
];

const services = [
  {
    id: "logo-design",
    icon: <PenTool className="w-7 h-7 text-blue-600" />,
    title: "Logo Design",
    description:
      "Unique, memorable logos that stand out in a crowded marketplace.",
    features: ["Custom logo design", "Brand identity", "Versatile formats"],
    subServices: ["Minimalist", "Vintage", "Modern"],
    accent: accentColors[0],
  },
  {
    id: "business-card-design",
    icon: <Layout className="w-7 h-7 text-purple-600" />,
    title: "Business Card Design",
    description:
      "Impactful business cards that leave a lasting impression.",
    features: ["Unique layouts", "High-quality printing", "Brand consistency"],
    subServices: ["Standard", "Folded", "Luxury"],
    accent: accentColors[1],
  },
  {
    id: "letterhead-design",
    icon: <Type className="w-7 h-7 text-indigo-600" />,
    title: "Letterhead Design",
    description:
      "Professional letterheads that enhance your brand's credibility.",
    features: ["Custom typography", "Brand colors", "Print-ready files"],
    subServices: ["Corporate", "Personalized", "Stationery Sets"],
    accent: accentColors[2],
  },
  {
    id: "brand-guidelines-design",
    icon: <Palette className="w-7 h-7 text-pink-600" />,
    title: "Brand Guidelines",
    description:
      "Comprehensive brand guidelines for consistency across all platforms.",
    features: ["Consistent branding", "Visual identity", "Color schemes"],
    subServices: ["Identity", "Visuals", "Typography"],
    accent: accentColors[3],
  },
  {
    id: "social-media-post-design",
    icon: <Globe className="w-7 h-7 text-cyan-600" />,
    title: "Social Media Post Design",
    description:
      "Visually appealing and shareable social media posts.",
    features: ["Engaging visuals", "Clear messaging"],
    subServices: ["Instagram", "Facebook", "Twitter"],
    accent: accentColors[4],
  },
  {
    id: "banner-design",
    icon: <Layout className="w-7 h-7 text-emerald-600" />,
    title: "Banner Design",
    description:
      "Eye-catching banners that grab attention and drive traffic.",
    features: ["High-impact visuals", "Dynamic content"],
    subServices: ["Banner Ads", "Social Media", "Website"],
    accent: accentColors[5],
  },
  {
    id: "billboards-design",
    icon: <ImagePlus className="w-7 h-7 text-amber-600" />,
    title: "Billboards Design",
    description:
      "Eye-catching billboards that grab attention and drive traffic.",
    features: ["High-impact visuals", "Dynamic content"],
    subServices: ["Billboards", "Social Media", "Website"],
    accent: accentColors[6],
  },
  {
    id: "stationery-design",
    icon: <PackageOpen className="w-7 h-7 text-lime-600" />,
    title: "Stationery Design",
    description:
      "Stationery items like envelopes, labels, and business cards.",
    features: ["Professional design", "Brand identity"],
    subServices: ["Stationery", "Labels", "Business Cards"],
    accent: accentColors[7],
  },
  {
    id: "image-editing",
    icon: <Brush className="w-7 h-7 text-orange-600" />,
    title: "Image Editing",
    description:
      "Editing and enhancing images for professional results.",
    features: ["Image editing", "Retouching"],
    subServices: ["Editing", "Retouching", "Color Correction"],
    accent: accentColors[8],
  },
  {
    id: "resume-design",
    icon: <Type className="w-7 h-7 text-sky-600" />,
    title: "Resume Design",
    description:
      "Professional, visually appealing resumes that showcase your skills.",
    features: ["Resume design", "Professional layout"],
    subServices: ["Resume", "Cover Letter"],
    accent: accentColors[9],
  },
  {
    id: "background-removal",
    icon: <ImagePlus className="w-7 h-7 text-fuchsia-600" />,
    title: "Background Removal",
    description:
      "Removing backgrounds from images for clean, professional results.",
    features: ["Background removal", "Image editing"],
    subServices: ["Background Removal", "Editing"],
    accent: accentColors[10],
  },
];

const Services = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-8 pb-8">
        <Navbar />
        {/* Hero Section */}
        <section className="pt-32 pb-16 flex flex-col md:flex-row items-center md:items-start md:justify-between container mx-auto px-4 md:px-8">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-base font-semibold tracking-wide text-blue-700">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Design that <span className="text-blue-600">elevates</span> your brand
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              18+ years of experience helping brands create meaningful digital experiences.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="rounded-full bg-blue-100 p-8 shadow-lg animate-bounce-slow">
              <PenTool className="w-16 h-16 text-blue-500" />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24 container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="service-card group p-8 flex flex-col h-full"
                style={{
                  // @ts-ignore
                  '--accent-color': service.accent,
                }}
              >
                <div className="service-icon-circle mb-4" style={{ background: `linear-gradient(135deg, ${service.accent}11 0%, #fff 100%)` }}>
                  {service.icon}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-700 transition-colors"
                >
                  {service.title}
                </Link>
                <p className="text-slate-600 mb-4 text-base">{service.description}</p>
                <ul className="mb-4 space-y-1">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: service.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.subServices.map((sub, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700 font-semibold">
                      {sub}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm text-blue-700 font-semibold hover:text-blue-900 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white border-t border-slate-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Ready to start your project?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Let's collaborate to create something amazing. Contact me today to discuss your next design project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
