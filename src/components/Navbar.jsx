import { User2 } from "lucide-react";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarHero() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <div className="cursor-pointer">
                    <Link to="/login">
                        <User2 className="text-blue-600"/>
                    </Link>
                    </div>
                    <p className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">English (US)</p>

                    <div className="flex items-center gap-2 border hover:text-blue-800 cursor-pointer border-blue-600 text-blue-500 px-4 py-2 rounded-full font-semibold">
                        <FaPhoneAlt />
                        <span>
                            <Link to="tel:+1-216-302-2732">
                            +1-216-302-2732
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
                <Link to="/" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Home</Link>
                <Link to="/about-us" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">About Us</Link>
                <Link to="/flights" className="cursor-pointer hover:text-blue-600 hover:underline  decoration-blue-500">Flights</Link>
                <Link to="/hotels" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Hotels</Link>
                <Link to="/contact-us" className="cursor-pointer hover:text-blue-600 hover:underline decoration-blue-500">Contact Us</Link>          
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/flights">Flights</Link>
                    <Link to="/hotels">Hotels</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/login">Login</Link>
                    <div className="flex items-center gap-2 border border-blue-400 text-blue-500 px-4 py-2 rounded-full font-semibold">
                        <FaPhoneAlt />
                        <span>
                            <Link to="tel:+1-216-302-2732">+1-216-302-2732</Link>
                        </span>
                    </div>
                </div>
            )}

        </div>
    );
}
