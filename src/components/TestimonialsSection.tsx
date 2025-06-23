import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">What My Clients Say</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Honest feedback from people I've had the pleasure of working with. Their satisfaction is my greatest achievement.
          </p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper !pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full">
                <Quote className="w-10 h-10 text-indigo-100 mb-4" />
                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <img
                    className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-indigo-200 p-1"
                    src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=6366f1&color=fff&font-size=0.33`}
                    alt={testimonial.name}
                  />
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-indigo-500">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection; 