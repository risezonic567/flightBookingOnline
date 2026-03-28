import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  return (

    <>
      <div className="relative h-[450px]">

        <img
          src="/Images/contact Us 1920x450.jpg.jpeg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">

          <div className="mt-20">

            <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-center">
             Contact Us
            </h1>
          </div>
        </div>
      </div>
      <section className=" py-10 px-4">
         <div className="text-center">
              <h2 className="text-3xl text-blue-600 font-bold mb-2">Contact Us</h2>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you. Reach out anytime.
              </p>
            </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Left Side - Info */}
          <div className="bg-white p-8 rounded-2xl shadow-blue-300 space-y-6 hover:shadow-md transition">

            {/* Heading */}
           

            {/* 🔥 ONE LINE CONTACT INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

              {/* Phone */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-300 p-3 rounded-full">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Phone:</strong><br />
                  <Link to="tel:+918986286734">+91 8986286734</Link>
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-300 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <p className="text-gray-700 text-sm break-all">
                  <strong>Email:</strong><br />
                  <Link to="mailto:kumarsunny919200@gmail.com">
                    kumarsunny919200@gmail.com
                  </Link>
                </p>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-300 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Address:</strong><br />
                  Delhi, India
                </p>
              </div>

            </div>

            {/* 🔥 MAP DIV */}
            <div className="w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.255672588097!2d77.08272457528753!3d28.592105775686825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bae6d0904b7%3A0x938fa4b31f997e05!2sAi.Risezonic!5e0!3m2!1sen!2sin!4v1774012786260!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>


          {/* Right Side - Form */}
          {/* Right Side - Form */}
{/* import BookingInfoPage from './BookingInfoPage'; */}

          <form className="bg-white p-6 rounded-2xl shadow-blue-300 hover:shadow-md space-y-4">
            <label>Name*</label>
            <input
              type="text"
              required
              placeholder="Enter Your Full Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <label>Email*</label>
            <input
              type="email"
              required
              placeholder="Enter Your Email Address"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <label>Phone*</label>
            <input
              type="tel"
              required
              placeholder="Enter Your Phone Number"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <label>Subject*</label>
            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <label>Message*</label>
            <textarea
              rows="3"
              required
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <button type="submit" className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </>

  );
}