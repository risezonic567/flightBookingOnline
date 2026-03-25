import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function BlogCard({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* HEADING */}
      <h2 className="text-3xl uppercase font-bold text-center text-blue-600 mb-8">
        Latest Travel Blogs
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map((post, i) => (
          <SwiperSlide key={i}>
            
            {/* CARD */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition hover:scale-105 duration-300">

              {/* IMAGE */}
              <div className="relative w-full h-[220px]">
                <img
                  src={ "https://source.unsplash.com/800x600/?travel"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

                {/* DATE */}
                <div className="absolute bottom-2 left-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {new Date(post.createdAt || Date.now()).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-2">
                  {post.metaDescription?.slice(0, 100)}...
                </p>

                <Link className="text-blue-600 text-sm font-semibold mt-2 inline-block">
                  Read More →
                </Link>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}