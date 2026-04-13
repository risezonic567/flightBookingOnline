import React from 'react';
import Testimonial from '../components/Testimonial';
import FaqPage from './FaqPage';
import WhyChooseUs from './WhyChooseUs';

const AboutPage = () => {
  return (
    <section className="bg-white font-sans">

      <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center">
        <img 
          src="/Images/About Us 1920x450.jpg.jpeg" 
          alt="About Us Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative z-10 text-white text-2xl md:text-5xl text-center px-4 font-semibold">
          About FlightsBookingOnline – Your Trusted Flight Booking Partner
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="w-full lg:w-5/12">
            <img 
              src="/Images/About Us intro 400x350.jpg.jpeg" 
              alt="Our Team" 
              className="w-full h-[300px] object-cover rounded-lg shadow"
            />
          </div>

          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ✈️ About FlightsBookingOnline
            </h2>

            <div className="text-gray-600 space-y-5 leading-relaxed text-sm md:text-base">
              <p>
                FlightsBookingOnline is a growing online travel platform dedicated to helping travelers across the United States find affordable and reliable flight options. Our goal is simple — to make flight booking easy, transparent, and budget-friendly for everyone.
              </p>

              <p>
                We understand that every traveler has different needs, whether it’s a family vacation, business trip, or last-minute travel. That’s why we focus on offering a seamless booking experience where users can compare multiple flight options and choose what works best for them.
              </p>

              <h3 className="text-xl font-bold text-gray-800 pt-4">
                Value-Driven Travel at Affordable Prices
              </h3>

              <p>
               At <b>FlightsBookingOnline</b>, we believe that travel should not be expensive or complicated. Our platform is designed to help you discover the best flight deals without wasting time searching across multiple websites.
              </p>

              <p>
                From <b>domestic routes within the USA to international destinations</b> like India, Dubai, the UK, and Canada, we aim to provide competitive pricing and flexible travel options tailored to your needs.
              </p>
              <p>
                We continuously work on improving our platform by analyzing travel trends, pricing patterns, and customer preferences to ensure you always get the best available deals.
              </p>
            </div>
          </div>

        </div>
      </div>

      <WhyChooseUs />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-6">

          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🌍 Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to simplify flight booking for travelers by offering affordable, transparent, and user-friendly solutions. We aim to help people travel smarter by providing access to the best flight deals without unnecessary complexity.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🚀 Our Vision</h2>
            <p className="text-gray-600">
              We strive to become a trusted travel platform in the United States by continuously improving our services, adopting new technologies, and focusing on customer satisfaction.
            </p>
          </div>

        </div>
      </div>

      <FaqPage />
      <Testimonial />

    </section>
  );
};

export default AboutPage;