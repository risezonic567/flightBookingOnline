import { User2 } from "lucide-react";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function NavbarHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const {t} = useTranslation()

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  const currentLang = localStorage.getItem("lang") || "EN";

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-4 md:px-10 h-16 bg-white border-b">
        
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/Images/logo/flight-booking-online-logo-final-png.png"
              alt=""
              className="h-35 object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 font-bold">
          
          <Link to="/login">
            <User2 className="text-blue-600 cursor-pointer" />
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg shadow-md"
            >
              🌐 {currentLang.toUpperCase()}
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-44 bg-black border border-blue-500 rounded-xl shadow-xl overflow-hidden z-50">
                
                <button
                  onClick={() => changeLang("en")}
                  className="w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
                >
                  English ( 🇺🇸)
                </button>

                <button
                  onClick={() => changeLang("es")}
                  className="w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition"
                >
                 Spanish ( 🇪🇸 )
                </button>

              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border hover:text-blue-800 cursor-pointer border-blue-600 text-blue-500 px-4 py-2 rounded-full font-semibold">
            <FaPhoneAlt />
            <span>
              <Link to="tel:+18187726235">
                +18187726235
              </Link>
            </span>
          </div>
        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className="hidden md:flex justify-center gap-8 py-3 bg-white shadow-sm font-bold">
        <Link to="/" className="hover:text-blue-600">{t.home}</Link>
        <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
        <Link to="/flights" className="hover:text-blue-600">Book Flights</Link>
        <Link to="/hotels" className="hover:text-blue-600">Hotels</Link>
        <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">

          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/flights">Book Flights</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/login">Login</Link>

          <div className="flex gap-2">
            <button onClick={() => changeLang("en")} className="px-3 py-1 bg-blue-600 text-white rounded">EN</button>
            <button onClick={() => changeLang("es")} className="px-3 py-1 bg-blue-600 text-white rounded">ES</button>
          </div>

          <div className="flex items-center gap-2 border border-blue-400 text-blue-500 px-4 py-2 rounded-full font-semibold">
            <FaPhoneAlt />
            <Link to="tel:+18187726235">+18187726235</Link>
          </div>

        </div>
      )}
    </div>
  );
}