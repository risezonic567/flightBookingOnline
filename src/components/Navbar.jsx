import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarHero() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full">
            {/* TOP BAR */}
            <div className="flex justify-between items-center px-4 md:px-10 h-16 bg-white border-b">
                {/* Logo */}
                <div className="flex items-center gap-2">

                    <img
                        src="/Images/logo/flight-booking-online-logo-final-png.png"
                        alt=""
                        className="h-35 object-contain"
                    />

                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-6 font-bold">
                    <p className="cursor-pointer">My Booking</p>
                    <p className="cursor-pointer">English (US)</p>

                    <div className="flex items-center gap-2 border hover:text-orange-800 cursor-pointer border-orange-300 text-orange-500 px-4 py-2 rounded-full font-semibold">
                        <FaPhoneAlt />
                        <span>+1-216-302-2732</span>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* MENU BAR */}
            <div className="hidden md:flex justify-center gap-8 py-3 bg-white shadow-sm font-bold">
                <Link to="/" className="cursor-pointer hover:text-blue-600 hover:underline  decoration-blue-500">Flights</Link>
                <Link to="/hotels" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Hotels</Link>
                <Link to="/card" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Cars</Link>
                <Link to="/cruise" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Cruise</Link>


                <Link to="/testimonial" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Reviews</Link>
                <Link to="/customer-support" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Customer Support</Link>
                <Link to="/contact-us" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Contact Us</Link>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
                    <Link to="/flights">Flights</Link>
                    <Link to="/hotels">Hotels</Link>
                    <Link to="/cars">Cars</Link>
                    <Link to="/cruise">Cruise</Link>
                    <Link to="/deals">Deals</Link>
                    <Link to="/testimonial">Reviews</Link>
                    <Link to="/customer-support">Customer Support</Link>
                    <Link to="/contactus">Contact Us</Link>

                    <div className="flex items-center gap-2 border border-orange-400 text-orange-500 px-4 py-2 rounded-full font-semibold">
                        <FaPhoneAlt />
                        <span>+1-216-302-2732</span>
                    </div>
                </div>
            )}

        </div>
    );
}
