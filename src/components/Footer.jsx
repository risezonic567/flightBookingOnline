import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { 
  FaFacebookF, FaLinkedinIn, FaInstagram, 
  FaPinterestP, FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* 1. Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 -mb-16 relative z-10">
        <div className="bg-gradient-to-l from-[#9fb3d3] to-[#cfd5df] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl overflow-hidden relative">
          <div className="text-black z-10 md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-black">Get latest offers from FlightBook Online</p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Example@gmail.com" 
                className="px-4 py-3 rounded-md w-full border sm:w-64  outline-none"
              />
              {/* <div className="relative">
                <select className="appearance-none px-4 py-3 rounded-md w-full sm:w-40 bg-white text-gray-800 outline-none">
                  <option>🇺🇸 United States</option>
                </select>
              </div> */}
              <button className="bg-[#1D4ED8] hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Abstract Envelope Illustration (Simplified) */}
          <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2">
             <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                <div className="text-white text-6xl rotate-12">✉️</div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="bg-[#1A2B49] text-white pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-[#FF7A00] font-bold mb-4 uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Popular Airlines</li>
              <li className="hover:text-white cursor-pointer">Popular Flight Routes</li>
              <li className="hover:text-white cursor-pointer">Top U.S. Destinations</li>
              <li className="hover:text-white cursor-pointer">Top International Destinations</li>
              <li className="hover:text-white cursor-pointer">Top Airports</li>
              <li className="hover:text-white cursor-pointer">Cruise</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Book</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Cheap Flights</li>
              <li className="hover:text-white cursor-pointer">Cheap Hotels</li>
              <li className="hover:text-white cursor-pointer">Car Rentals</li>
              <li className="hover:text-white cursor-pointer">Group Travel</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Traveler Tools</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Customer Support</li>
              <li className="hover:text-white cursor-pointer">Online Check-in</li>
              <li className="hover:text-white cursor-pointer">Airline Baggage Fees</li>
              <li className="hover:text-white cursor-pointer">Travel Blog</li>
              <li className="hover:text-white cursor-pointer">Customer Reviews</li>
              <li className="hover:text-white cursor-pointer">Browser Compatibility</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">About Booking Online</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Site Map</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <p className="text-xs font-semibold mb-4 uppercase">Follow us on</p>
          <div className="flex gap-4 mb-8">
            <div className="p-2 bg-blue-600 rounded-full cursor-pointer hover:scale-110 transition-transform"><FaFacebookF /></div>
            <div className="p-2 bg-black rounded-full cursor-pointer hover:scale-110 transition-transform"><FaXTwitter /></div>
            <div className="p-2 bg-blue-700 rounded-full cursor-pointer hover:scale-110 transition-transform"><FaLinkedinIn /></div>
            <div className="p-2 bg- rounded-full cursor-pointer hover:scale-110 transition-transform"><BsGoogle /></div>
          </div>

          <div className="text-[10px] md:text-xs text-gray-400 leading-relaxed">
            Cheapflightsfares is an independent travel portal with no third party association. By using Cheapflightsfares.com, 
            you agree that Cheapflightsfares is not accountable for any loss - direct or indirect, arising of offers, materials 
            or links to other sites found on this website. In case of queries, reach us directly at our Contact Number 
            <span className="text-white underline ml-1">+1-216-302-2732</span> or, simply email at 
            <span className="text-white underline ml-1">support@cheapflightsfares.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;