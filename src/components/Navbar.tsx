import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import EmotionalButton from "./EmotionalButton";

// ==== Animation CSS ====
// More pronounced left-to-right slide-in (mobile nav)
const mobileNavAnimStyle = `
@keyframes slideInLeftMobile {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleInLogo {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInHireMe {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-slidein {
  animation: slideInLeftMobile 0.3s ease-out both;
}

.logo-animation {
  animation: scaleInLogo 0.5s ease-out both;
}

.hire-me-animation {
  animation: slideInHireMe 0.4s ease-out both;
  animation-delay: 0.1s;
}
`;

if (typeof window !== "undefined") {
  const styleId = "mobile-nav-slidein";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = mobileNavAnimStyle;
    document.head.appendChild(style);
  }
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  // { name: "Blog", href: "/blogs" },
  // { name: "FAQs", href: "/faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconKey, setIconKey] = useState(0);
  const location = useLocation();
  const activeLink = location.pathname;

  // Add body scroll lock when mobile menu open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle menu open/close
  const handleMenuToggle = () => {
    setIsOpen((v) => !v);
    setIconKey((prev) => prev + 1);
  };

  // Staggered animation delay for each nav item
  const getAnimDelay = (idx: number) => ({
    animationDelay: `${idx * 0.1 + 0.08}s`,
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black-soft shadow-lg">
      <div className="container mx-auto px-4 md:px-8 flex items-center min-h-[64px]">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold flex items-center group shrink-0 logo-animation"
        >
          <Heart
            className="mr-2 text-amber-200 fill-amber-200 transition-colors"
            size={20}
          />
          <span className="text-amber-200 group-hover:text-white transition-colors">
            Ariful
          </span>
          <span className="text-white group-hover:text-amber-200 transition-colors">
            GFX
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium nav-item transition-colors duration-300 ${
                  activeLink === link.href 
                    ? "text-amber-200" 
                    : "text-white/90 hover:text-amber-200"
                }`}
                style={{
                  animationName: "slideInFromRight",
                  animationDuration: "0.5s",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Hire Me Button - Right aligned */}
        <div className="hidden md:block shrink-0 hire-me-animation">
          <EmotionalButton
            href="/contact"
            className="bg-amber-200 text-blue-900 py-2 px-6 rounded-full font-medium hover:scale-105 hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center"
            emotionType="heart"
            numEmotions={3}
          >
            Hire Me <Heart className="ml-2 h-4 w-4" />
          </EmotionalButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={handleMenuToggle}
            className="p-2 text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                key={"x-" + iconKey}
                className="h-6 w-6"
                data-testid="mobile-menu-close"
              />
            ) : (
              <Menu
                key={"menu-" + iconKey}
                className="h-6 w-6"
                data-testid="mobile-menu-open"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-in */}
      {isOpen && (
        <div className="md:hidden bg-black-soft border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  block font-medium rounded-lg transition-colors duration-200 mobile-nav-slidein
                  ${
                    activeLink === link.href
                      ? "bg-white/10 text-amber-200"
                      : "text-white/90 hover:bg-white/5 hover:text-amber-200"
                  }
                `}
                style={getAnimDelay(idx)}
                onClick={() => setIsOpen(false)}
              >
                <div className="px-4 py-3 text-base">
                  {link.name}
                </div>
              </Link>
            ))}
            <div style={getAnimDelay(navLinks.length)}>
              <EmotionalButton
                href="/contact"
                className="block w-full bg-amber-200 text-blue-900 py-3 px-6 rounded-lg font-medium text-center hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center mobile-nav-slidein"
                emotionType="heart"
                numEmotions={2}
                onClick={() => setIsOpen(false)}
              >
                Hire Me <Heart className="ml-2 h-4 w-4" />
              </EmotionalButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
