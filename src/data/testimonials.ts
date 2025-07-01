export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  image: string; // Client image URL
  rating: number;
  project: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    company: "Tech Innovators",
    quote: "Ariful's design sense is impeccable. He transformed our vision into a stunning brand identity that truly represents our values. A pleasure to work with!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    project: "Brand Identity & Logo Design",
    date: "March 2024"
  },
  {
    name: "Jane Smith",
    company: "Creative Solutions Ltd.",
    quote: "The entire process was seamless from start to finish. Ariful GFX delivered a high-quality website UI that our users love. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    project: "Website UI/UX Design",
    date: "February 2024"
  },
  {
    name: "Samuel Green",
    company: "Market Leaders Co.",
    quote: "Exceptional creativity and attention to detail. The new logo and business cards have significantly boosted our professional image. We couldn't be happier.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    project: "Logo & Business Card Design",
    date: "January 2024"
  },
  {
    name: "Emily White",
    company: "Startup Hub",
    quote: "Working with Ariful was a game-changer for our startup. The brand identity he created is modern, memorable, and perfectly captures our mission. Fantastic!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    project: "Complete Brand Identity",
    date: "December 2023"
  },
  {
    name: "Michael Brown",
    company: "E-commerce Experts",
    quote: "The new website design has improved our conversion rates by over 20%. Ariful's understanding of user experience is second to none.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    project: "E-commerce Website Design",
    date: "November 2023"
  },
  {
    name: "Jessica Black",
    company: "Future Forward Inc.",
    quote: "I was impressed by the quick turnaround and the quality of the work. The social media graphics are vibrant and have increased our engagement significantly.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    project: "Social Media Graphics",
    date: "October 2023"
  },
  {
    name: "David Wilson",
    company: "Healthcare Solutions",
    quote: "Ariful created a professional and trustworthy brand identity for our healthcare startup. The design perfectly balances professionalism with approachability.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
    project: "Healthcare Brand Identity",
    date: "September 2023"
  },
  {
    name: "Sarah Johnson",
    company: "EduTech Pro",
    quote: "The educational app interface Ariful designed is intuitive and engaging. Our students love the new design and it has improved learning outcomes.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    rating: 5,
    project: "Educational App UI Design",
    date: "August 2023"
  },
  {
    name: "Robert Chen",
    company: "Finance First",
    quote: "Ariful's financial dashboard design is both beautiful and functional. Complex data is now presented in an intuitive way that our clients appreciate.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5,
    project: "Financial Dashboard Design",
    date: "July 2023"
  }
]; 