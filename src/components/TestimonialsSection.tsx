import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, Star, Heart, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 mb-6">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-sm font-medium text-blue-700">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What My Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from amazing people I've had the pleasure of working with. 
            Their success stories and satisfaction drive my passion for excellence.
          </p>
          
          <div className="flex justify-center items-center gap-2 mt-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper"
            style={{ paddingBottom: '60px' }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 flex flex-col h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-blue-200/50">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    {/* Quote Icon */}
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed mb-8 flex-grow relative z-10 text-lg italic">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-6 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-yellow-400" 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                    </div>
                    
                    {/* Client Info */}
                    <div className="flex items-center relative z-10">
                      <div className="relative">
                        <img
                          className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-blue-600 font-medium">{testimonial.company}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Verified Client
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <Heart className="w-5 h-5 text-red-500 fill-red-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-blue-700 font-medium">Join 100+ Happy Clients</span>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection; 