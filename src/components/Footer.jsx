import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { 
  FaFacebookF, FaLinkedinIn, FaInstagram, 
  FaPinterestP, FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full font-sans">

      {/* NEWSLETTER */}
      <div className="max-w-7xl mx-auto px-4 -mb-16 relative z-10">
        <div className="bg-gradient-to-l from-[#9fb3d3] to-[#cfd5df] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-xl">

          <div className="text-black md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Subscribe to our Newsletter
            </h2>
            <p>Get latest offers from FlightBook Online</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <input 
                type="email" 
                placeholder="Example@gmail.com" 
                className="px-4 py-3 rounded-md w-full sm:w-64 border outline-none"
              />
              <button className="bg-[#1D4ED8] hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* ICON */}
          <div className="hidden md:flex items-center justify-center w-40 h-40 bg-white/20 rounded-full">
            <span className="text-5xl">✉️</span>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#1A2B49] text-white pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">

          {/* LOGO + ABOUT */}
          <div className="md:col-span-2">
           
           <img src="/Images/logo/flight-booking-online-logo-final-png.png"
            alt=""
            className='h-30'
            />
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              Book flights, hotels and travel services at the best price. 
              We provide a smooth and fast booking experience for our customers.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              <div className="p-2 bg-blue-600 rounded-full hover:scale-110 transition cursor-pointer"><FaFacebookF /></div>
              <div className="p-2 bg-black rounded-full hover:scale-110 transition cursor-pointer"><FaXTwitter /></div>
              <div className="p-2 bg-blue-700 rounded-full hover:scale-110 transition cursor-pointer"><FaLinkedinIn /></div>
              <div className="p-2 bg-red-500 rounded-full hover:scale-110 transition cursor-pointer"><BsGoogle /></div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className=" font-bold mb-4 uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-white">Faq</Link></li>
              <li><Link to="/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
            </ul>
          </div>

          {/* BOOK */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Book</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/flights" className="hover:text-white">Cheap Flights</Link></li>
              <li><Link to="/hotels" className="hover:text-white">Cheap Hotels</Link></li>
              <li><Link to="/sitemap" className="hover:text-white">Site Map</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link  className="hover:text-white">Privacy Policy</Link></li>
              <li><Link  className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-gray-200 text-sm mt-6">
          © 2026 FlightBook. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;