import { Linkedin, Instagram } from "lucide-react";
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
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-green text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Logo & About */}
          <div>
            <a
              href="#hero"
              className="text-xl md:text-2xl font-bold mb-4 inline-block"
            >
              <span className="text-yellow">Ariful</span>UI
            </a>
            <p className="text-white/80 mt-4">
              Crafting beautiful and intuitive user interfaces that make digital experiences 
              delightful and engaging.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/arifulislamofficialprofile/"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_md._ariful_islam/"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arifulcreatorstudio/"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net/arifulcreatorstudio"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
              >
                <FaBehance className="h-5 w-5" />
              </a>
              <a
                href="https://dribbble.com/arifulcreatorstudio"
                className="bg-white/10 p-2 rounded-full hover:bg-yellow hover:text-black-soft transition-all duration-300"
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
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/landing-page-ui"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Landing Page UI
                </a>
              </li>
              <li>
                <a
                  href="/services/website-ui"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Website UI
                </a>
              </li>
              <li>
                <a
                  href="/services/dashboard-ui"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  Dashboard UI
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow mr-3">Email:</span>
                <a
                  href="mailto:acs.arifulislam@gmail.com"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  acs.arifulislam@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">Phone:</span>
                <a
                  href="tel:+8801938434733"
                  className="text-white/80 hover:text-yellow transition-colors duration-300"
                >
                  +880 1938-434733
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">Address:</span>
                <span className="text-white/80">Khulna, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 text-center text-white/60">
          <p>Copyright © 2025 Ariful Islam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
