import React, { useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Testimonial() {
  const reviews = [
    { id: 1, title: "Scout was very happy to assist me...", text: "Scout was very happy to assist me with fixing a typo on my booking. Very...", author: "Jill", time: "12 hours ago", rating: 5 },
    { id: 2, title: "prompt service", text: "prompt service", author: "JOHN BUNCH", time: "13 hours ago", rating: 5 },
    { id: 3, title: "I could not locate my reservation", text: "I could not locate my reservation. I chatted with Scout and quickly had that...", author: "Rachel", time: "16 hours ago", rating: 3 },
    { id: 4, title: "Amazing support", text: "Customer support was quick and helpful...", author: "David", time: "1 day ago", rating: 5 },
    { id: 5, title: "Good experience", text: "Booking was smooth and easy...", author: "Alex", time: "2 days ago", rating: 4 },
    { id: 6, title: "Nice UI", text: "Website UI is clean and fast...", author: "Priya", time: "3 days ago", rating: 5 }
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 3

  const handleNext = () => {
    if (index + visibleCards < reviews.length) {
      setIndex(index + 1)
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleReviews = reviews.slice(index, index + visibleCards);

  return (
    <section className="bg-[#331994] text-white mb-10 md:py-16 px-3 md:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-xl md:text-3xl font-bold uppercase mb-10">
          Our Customer Reviews
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 border-r-0 lg:border-white/20 pr-0 lg:pr-6">
            <span className="text-2xl font-bold">Excellent</span>

            <div className="flex gap-1 justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-[#00b67a] p-1">
                  <AiFillStar />
                </div>
              ))}
            </div>

            <p className="text-sm opacity-80">
              Based on <span className="underline">10,037 reviews</span>
            </p>

            <div className="flex items-center gap-1 font-bold text-lg justify-center lg:justify-start">
              <AiFillStar className="text-[#00b67a]" /> Trustpilot
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:block lg:col-span-9 relative">

            {/* ARROWS (desktop only) */}
            <button
              onClick={handlePrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:scale-110 transition"
            >
              <AiOutlineLeft />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:scale-110 transition"
            >
              <AiOutlineRight />
            </button>

            {/* CARDS */}
            <div className="grid grid-cols-3 gap-6 px-6">
              {visibleReviews.map((review) => (
                <div key={review.id} className="bg-white text-black p-4 rounded-xl shadow-sm hover:shadow-md transition">

                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="bg-[#00b67a] p-0.5 rounded-sm">
                        <AiFillStar size={14} className="text-white" />
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-sm mb-1 line-clamp-1">
                    {review.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 mb-2">
                    "{review.text}"
                  </p>

                  <div className="text-xs text-gray-400">
                    <span className="font-semibold text-black">{review.author}</span>, {review.time}
                  </div>

                </div>
              ))}
            </div>

            <p className="mt-6 text-xs opacity-60 italic px-6">
              Showing our 4 & 5 star reviews
            </p>

          </div>
        </div>
      </div>
      
    </section>
  );
}