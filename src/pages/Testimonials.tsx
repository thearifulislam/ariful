import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowLeft, Filter, Search } from 'lucide-react';
import { testimonials, Testimonial } from '../data/testimonials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const Testimonials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Get unique companies for filter
  const companies = ['All', ...new Set(testimonials.map(t => t.company))];

  // Filter and sort testimonials
  const filteredTestimonials = testimonials
    .filter(testimonial => {
      const matchesSearch = testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           testimonial.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           testimonial.project.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCompany = selectedCompany === 'All' || testimonial.company === selectedCompany;
      return matchesSearch && matchesCompany;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return 0; // Keep original order
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'company') return a.company.localeCompare(b.company);
      return 0;
    });

  return (
    <>
      <Seo 
        title="Client Testimonials | Ariful GFX"
        description="Read what our clients say about working with Ariful GFX. Real testimonials from satisfied clients about our design services."
        keywords="testimonials, client reviews, design feedback, satisfied clients, Ariful GFX reviews"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-40 pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937]/10 to-[#374151]/10"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-[#1f2937] transition-colors duration-300 mb-12 group"
              >
                <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
              </Link>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-16 mb-20 border border-white/20">
                <div className="inline-block p-6 bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl mb-8 shadow-xl">
                  <Quote className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1f2937] to-[#4b5563] bg-clip-text text-transparent">
                  What Our Clients Say
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Real feedback from satisfied clients who have experienced the quality and creativity of our design services.
                </p>
                <div className="flex items-center justify-center gap-2 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-700">5.0 Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search testimonials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#1f2937] focus:ring-[#1f2937] focus:ring-opacity-20 bg-white/60"
                    />
                  </div>

                  {/* Company Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      value={selectedCompany}
                      onChange={(e) => setSelectedCompany(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#1f2937] focus:ring-[#1f2937] focus:ring-opacity-20 bg-white/60 appearance-none"
                    >
                      {companies.map(company => (
                        <option key={company} value={company}>
                          {company}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#1f2937] focus:ring-[#1f2937] focus:ring-opacity-20 bg-white/60 appearance-none"
                    >
                      <option value="newest">Newest First</option>
                      <option value="name">Sort by Name</option>
                      <option value="company">Sort by Company</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              {filteredTestimonials.length === 0 ? (
                <div className="text-center py-32">
                  <div className="inline-block p-6 bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl mb-8 shadow-xl">
                    <Search className="h-16 w-16 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No testimonials found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 transform hover:-translate-y-2"
                    >
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-xl shadow-lg">
                          <Quote className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>

                                             {/* Quote Text */}
                       <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                         "{testimonial.quote}"
                       </blockquote>

                       {/* Project Info */}
                       <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                         <p className="text-sm font-medium text-gray-900">
                           Project: {testimonial.project}
                         </p>
                         <p className="text-xs text-gray-600">
                           Completed: {testimonial.date}
                         </p>
                       </div>

                       {/* Client Info */}
                       <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                         <div className="flex-shrink-0">
                           <img
                             src={testimonial.image}
                             alt={testimonial.name}
                             className="w-12 h-12 rounded-full object-cover shadow-lg"
                           />
                         </div>
                         <div className="flex-1 min-w-0">
                           <h4 className="font-semibold text-gray-900 truncate">
                             {testimonial.name}
                           </h4>
                           <p className="text-sm text-gray-600 truncate">
                             {testimonial.company}
                           </p>
                         </div>
                       </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Trusted by Clients Worldwide
                </h2>
                <p className="text-xl text-gray-600">
                  Our commitment to excellence has earned us the trust of clients across various industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1f2937] mb-2">
                    {testimonials.length}+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1f2937] mb-2">5.0</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1f2937] mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl p-16 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Join Our Happy Clients?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create something amazing together. Start your project today and become part of our success story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-amber-200 text-blue-900 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
