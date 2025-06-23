import { Heart, Mail, Phone, MapPin, ArrowRight, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Logo Design", href: "/services/logo-design" },
    { name: "Brand Identity", href: "/services/brand-identity" },
    { name: "Business Cards", href: "/services/business-cards" },
    { name: "Letterhead Design", href: "/services/letterhead-design" },
    { name: "Social Media Graphics", href: "/services/social-media-graphics" },
    { name: "Web Design", href: "/services/web-design" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/arifulislamofficialprofile/", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/_md._ariful_islam/", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/arifulcreatorstudio/", label: "LinkedIn" },
    { icon: FaBehance, href: "https://behance.net/arifulcreatorstudio", label: "Behance" },
    { icon: FaTwitter, href: "https://twitter.com/arifulcreator", label: "Twitter" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-6">
              <span className="text-3xl font-bold">
                <span className="text-indigo-400">Ariful</span>
                <span className="text-white">GFX</span>
              </span>
              <Heart className="ml-2 text-indigo-400" size={24} />
            </a>
            <p className="pr-10 mb-6">
              Creative designer passionate about crafting unique brand identities and
              delivering exceptional design solutions that make businesses stand out.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 text-indigo-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 text-indigo-400" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 mb-8">
              <a href="mailto:acs.arifulislam@gmail.com" className="flex items-center hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-indigo-400" />
                <span>acs.arifulislam@gmail.com</span>
              </a>
              <a href="tel:+8801938434733" className="flex items-center hover:text-indigo-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-indigo-400" />
                <span>+880 1938-434733</span>
              </a>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                <span>Khulna, Bangladesh</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-800 rounded-full px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-32"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ariful GFX. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">Terms of Service</a>
            <a href="/cookies" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">Cookie Policy</a>
          </div>
          {/* <button 
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
