import React from 'react';
import { BsArrowLeftRight } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';

const deals = [
  {
    id: 1,
    from: "New York",
    to: "New York City",
    img: "/Images/New York City.jpg.jpeg",
    airline: "Delta",
    price: 120,
    date: "May 02, 2026 - May 05, 2026"
  },
  {
    id: 2,
    from: "Chicago",
    to: "San Francisco",
    img: "/Images/Chicago.jpg.jpeg",
    airline: "United",
    price: 180,
    date: "May 10, 2026 - May 14, 2026"
  },
  {
    id: 3,
    from: "Dallas",
    to: "Los Angeles",
    img: "/Images/Los Angeles.jpg.jpeg",
    airline: "American Airlines",
    price: 150,
    date: "May 12, 2026 - May 16, 2026"
  },
  {
    id: 4,
    from: "Seattle",
    to: "Las Vegas",
    img: "/Images/Las Vegas.jpg.jpeg",
    airline: "Southwest",
    price: 95,
    date: "May 15, 2026 - May 18, 2026"
  },
  {
    id: 5,
    from: "Atlanta",
    to: "Miami",
    img: "/Images/Cleveland.jpg.jpeg",
    airline: "JetBlue",
    price: 130,
    date: "May 18, 2026 - May 22, 2026"
  },
  {
    id: 6,
    from: "Phoenix",
    to: "Grand Canyon",
    img: "/Images/Houston.jpg.jpeg",
    airline: "Frontier",
    price: 80,
    date: "May 20, 2026 - May 23, 2026"
  },
  {
    id: 7,
    from: "Orlando",
    to: "Walt Disney World",
    img: "/Images/Denver.jpg.jpeg",
    airline: "Alaska Airlines",
    price: 110,
    date: "May 25, 2026 - May 28, 2026"
  },
  {
    id: 8,
    from: "Denver",
    to: "Yellowstone National Park",
    img: "/Images/Boston.jpg.jpeg",
    airline: "United",
    price: 170,
    date: "May 28, 2026 - June 01, 2026"
  }
];

export default function FlightDeals(){
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-[#f3f7ff] py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white cursor-pointer rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 relative">

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-2 uppercase">
              Cheap Flight Deals from USA to Top Destinations
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Explore the latest deals on international and domestic flights from the USA. Book affordable tickets to top destinations at the best prices.
            </p>
          </div>

          <button className="prev-btn absolute left-0 md:-left-5 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100">
            <IoIosArrowBack size={20} />
          </button>

          <button className="next-btn absolute right-0 md:-right-5 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-100">
            <IoIosArrowForward size={20} />
          </button>

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

                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

                  <img
                    src={deal.img}
                    alt={deal.to}
                    className="w-full h-full  sm:h-[220px] md:h-[250px] object-cover hover:scale-110 transition duration-500"
                  />

                  <div className="p-5">

                    <div className="flex items-center justify-between font-bold text-sm mb-4">
                      <span>{deal.from}</span>
                      <BsArrowLeftRight className="text-blue-500" size={12} />
                      <span>{deal.to}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-gray-600">
                        {deal.airline} • Economy
                      </span>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-2 flex items-center gap-2 mb-5">
                      <SlCalender size={14} />
                      <span className="text-xs">{deal.date}</span>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">
                          Starting From
                        </p>
                        <span className="text-xl font-bold text-green-600">
                          ${deal.price}
                        </span>
                      </div>

                      <button onClick={()=>navigate("/checkout",{state:deal})} className="bg-blue-600 cursor-pointer hover:bg-blue-300 text-white text-xs px-4 py-2 rounded-lg transition">
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>
             {/* <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-2 mt-4 uppercase">
              Cheap Flights Booking from USA
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
             Finding affordable flights from the USA is easier than ever with FlightsBookingOnline. We help travelers compare and book cheap international and domestic flights to top destinations like India, Dubai, the UK, and Canada. Whether you’re looking for last-minute deals or planning your next vacation, our platform ensures the best prices and a seamless booking experience.
             </p>
          </div> */}
        </div>
      </div>

      {/* <div className="mb-10"></div> */}
    </>
  );
};
