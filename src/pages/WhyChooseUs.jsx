import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FiGlobe, FiShield, FiPhoneCall, FiShuffle, FiHeadphones, FiClock } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/pagination';

const WhyChooseUs = () => {
  const features = [
    {
    icon: <HiOutlineRocketLaunch className="text-blue-600" />,
    title: "Best Flight Deals from USA",
    desc: "We help you find competitive airfare for domestic and international routes."
  },
  {
    icon: <FiClock className="text-blue-600" />,
    title: "Easy & Fast Booking Process",
    desc: "Book your flight in just a few simple steps without confusion."
  },
  {
    icon: <FiHeadphones className="text-blue-600" />,
    title: "24/7 Customer Support",
    desc: "Our team is available anytime to assist with bookings and queries."
  },
  {
    icon: <FiShield className="text-blue-600" />, 
    title: "Trusted & Secure Platform",
    desc: "Your payments and personal information are always protected."
  },
  {
    icon: <FiPhoneCall className="text-blue-600" />, 
    title: "Last-Minute Flight Deals",
    desc: "Get affordable options even for urgent travel plans."
  },
  {
    icon: <FiShuffle className="text-blue-600" />, 
    title: "Flexible Travel Options",
    desc: "Compare airlines, prices, and schedules in one place."
  }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          ✈️ Why Travelers Choose Us
        </h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center group">
                <div className="text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyChooseUs;