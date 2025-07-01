import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer id="footer" className="bg-black-soft text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Logo & About */}
          <div>
            <a
              href="#hero"
              className="text-xl md:text-2xl font-bold mb-4 inline-block"
            >
              <span className="text-amber-200">Ariful</span>GFX
            </a>
            <p className="text-white/80 mt-4">
              Crafting beautiful and intuitive user interfaces that make digital experiences 
              delightful and engaging.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/arifulislamofficialprofile/"
                className="bg-white/10 p-2 rounded-full hover:bg-[#fefefe] hover:text-black-soft transition-all duration-300"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_md._ariful_islam/"
                className="bg-white/10 p-2 rounded-full hover:bg-[#fefefe] hover:text-black-soft transition-all duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arifulcreatorstudio/"
                className="bg-white/10 p-2 rounded-full hover:bg-[#fefefe] hover:text-black-soft transition-all duration-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net/arifulcreatorstudio"
                className="bg-white/10 p-2 rounded-full hover:bg-[#fefefe] hover:text-black-soft transition-all duration-300"
              >
                <FaBehance className="h-5 w-5" />
              </a>
              <a
                href="https://dribbble.com/arifulcreatorstudio"
                className="bg-white/10 p-2 rounded-full hover:bg-[#fefefe] hover:text-black-soft transition-all duration-300"
              >
                <FaDribbble className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/brand-guidelines-design"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  Brand Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/services/logo-design"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  Logo Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/stationery-design"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  Stationery Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/image-editing"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  Image Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ui-design"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  UI Design
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#fdd77a] mr-3">Email:</span>
                <a
                  href="mailto:acs.arifulislam@gmail.com"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  acs.arifulislam@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#fdd77a] mr-3">Phone:</span>
                <a
                  href="tel:+8801938434733"
                  className="text-white/80 hover:text-[#fefefe] transition-colors duration-300"
                >
                  +880 1938-434733
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#fdd77a] mr-3">Address:</span>
                <span className="text-white/80">Khulna, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/60">Copyright © {new Date().getFullYear()} Ariful Islam. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/60 hover:text-[#fefefe] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 hover:text-[#fefefe] transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-white/60 hover:text-[#fefefe] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
