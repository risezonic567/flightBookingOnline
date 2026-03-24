import React from 'react';
import { BsArrowLeftRight } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const deals = [
  {
    id: 1,
    from: "New York",
    to: "New York City",
    img: "/Images/New York City.jpg.jpeg",
    airline: "Delta",
    logo: "https://logo.clearbit.com/delta.com",
    price: 120,
    date: "May 02, 2026 - May 05, 2026"
  },
  {
    id: 2,
    from: "Chicago",
    to: "San Francisco",
    img: "/Images/San Francisco.jpg.jpeg",
    airline: "United",
    logo: "https://logo.clearbit.com/united.com",
    price: 180,
    date: "May 10, 2026 - May 14, 2026"
  },
  {
    id: 3,
    from: "Dallas",
    to: "Los Angeles",
    img: "/Images/Los Angeles.jpg.jpeg",
    airline: "American Airlines",
    logo: "https://logo.clearbit.com/aa.com",
    price: 150,
    date: "May 12, 2026 - May 16, 2026"
  },
  {
    id: 4,
    from: "Seattle",
    to: "Las Vegas",
    img: "/Images/Las Vegas.jpg.jpeg",
    airline: "Southwest",
    logo: "https://logo.clearbit.com/southwest.com",
    price: 95,
    date: "May 15, 2026 - May 18, 2026"
  },
  {
    id: 5,
    from: "Atlanta",
    to: "Miami",
    img: "/Images/Miami.jpg.jpeg",
    airline: "JetBlue",
    logo: "https://logo.clearbit.com/jetblue.com",
    price: 130,
    date: "May 18, 2026 - May 22, 2026"
  },
  {
    id: 6,
    from: "Phoenix",
    to: "Grand Canyon",
    img: "/Images/Grand Canyon national park.jpg.jpeg",
    airline: "Frontier",
    logo: "https://logo.clearbit.com/flyfrontier.com",
    price: 80,
    date: "May 20, 2026 - May 23, 2026"
  },
  {
    id: 7,
    from: "Orlando",
    to: "Walt Disney World",
    img: "/Images/Walt Disney World.jpg.jpeg",
    airline: "Alaska Airlines",
    logo: "https://logo.clearbit.com/alaskaair.com",
    price: 110,
    date: "May 25, 2026 - May 28, 2026"
  },
  {
    id: 8,
    from: "Denver",
    to: "Yellowstone National Park",
    img: "/Images/Yellowstone National Park.jpg.jpeg",
    airline: "United",
    logo: "https://logo.clearbit.com/united.com",
    price: 170,
    date: "May 28, 2026 - June 01, 2026"
  }
];

const FlightDeals = () => {
  return (
    <>
      <div className="bg-[#f3f7ff] py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 relative">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a] mb-2 uppercase">
              Handpicked Top Flight Deals
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Get access to unbeatable flight offers tailored to your travel needs.
            </p>
          </div>

          {/* ARROWS */}
          <button className="prev-btn absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100">
            <IoIosArrowBack size={20} />
          </button>

          <button className="next-btn absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100">
            <IoIosArrowForward size={20} />
          </button>

          {/* SWIPER */}
          <Swiper
            speed={500}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation, Autoplay]}
            className="py-5"
          >

            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>

                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-blue-300 hover:shadow-xl transition duration-300">

                  {/* IMAGE */}
                  <div className="h-[250px] w-[282px] border overflow-hidden">
                    <img
                      src={deal.img}
                      alt={deal.to}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    {/* ROUTE */}
                    <div className="flex items-center justify-between font-bold text-sm mb-4">
                      <span>{deal.from}</span>
                      <BsArrowLeftRight className="text-blue-500" size={12} />
                      <span>{deal.to}</span>
                    </div>

                    {/* AIRLINE */}
                    <div className="flex items-center gap-2 mb-4">
                      <img src={deal.logo} alt="" className="w-6 h-6" />
                      <span className="text-xs text-gray-600">
                        {deal.airline} • Economy
                      </span>
                    </div>

                    {/* DATE */}
                    <div className="bg-gray-100 rounded-lg p-2 flex items-center gap-2 mb-5">
                      <SlCalender size={14} />
                      <span className="text-xs">{deal.date}</span>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">
                          Starting From
                        </p>
                        <span className="text-xl font-bold text-green-600">
                          ${deal.price}
                        </span>
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-lg">
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>

      <div className="mb-10"></div>
    </>
  );
};

export default FlightDeals;