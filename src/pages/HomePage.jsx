import React, { useState } from "react";
import { BiHotel } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";

import FlightDeals from "../components/FlightDeals";
import FeaturePage from "./FeaturePage";
import TravelerModal from "../components/TravelModal";
// import BlogCard from "./BlogCard";
// import { blogs } from "../data/blog";
import Testimonial from "../components/Testimonial";
import FaqPage from "./FaqPage";
import {  MdFlightTakeoff } from "react-icons/md";

const HomePage = () => {
  const [tripType, setTripType] = useState("round");
  const [activeTab, setActiveTab] = useState("flights");

  const [from, setFrom] = useState("DEL");
  const [to, setTo] = useState("HYD");

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <section>

      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden">

        <img
          src="/Images/Home page banner 1920 x 450.jpg.jpeg"  
          alt="banner"
          className="absolute inset-0 border h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Book Flights Easily 
            </h1>
            <p className="text-sm md:text-lg">
              Find the best deals and explore the world
            </p>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4  md:-mt-30 relative z-20">

        <div className="bg-white  rounded-t-xl shadow-lg flex w-full md:w-fit mx-auto overflow-hidden">

          <button
            onClick={() => setActiveTab("flights")}
            className={`flex-1 cursor-pointer flex items-center font-semibold justify-center gap-2 px-4 py-2 text-md ${activeTab === "flights"
                ? "bg-blue-100 text-blue-600"
                : "text-blue-600"
              }`}
          >
            <MdFlightTakeoff /> Flights
          </button>

          <button
            onClick={() => setActiveTab("hotels")}
            className={`flex-1 flex cursor-pointer items-center font-semibold justify-center gap-2 px-4 py-2 text-md ${activeTab === "hotels"
                ? "bg-blue-100 text-blue-600"
                : "text-blue-600"
              }`}
          >
            <BiHotel /> Hotels
          </button>

          {/* <button className="flex items-center gap-2 px-4 py-2 text-gray-600 text-sm">
            <FaCar /> Cars
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 text-sm">
            <FaShip /> Cruise
          </button> */}

        </div>

        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">

          {activeTab === "flights" && (
            <>
              <div className="flex gap-6 mb-6  text-sm font-semibold">
                <label className="cursor-pointer font-semibold">
                  <input
                    type="radio"
                    checked={tripType === "round"}
                    onChange={() => setTripType("round")}
                    required
                  /> Round Trip
                </label>

                <label className="cursor-pointer font-semibold">
                  <input
                    type="radio"
                    checked={tripType === "one"}
                    onChange={() => setTripType("one")}
                    required
                  /> One Way
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

                <div className="md:col-span-4 flex relative h-16">
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-1/2 border rounded-l-lg p-2 bg-gray-100"
                    required
                  />

                  <div
                    onClick={handleSwap}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full p-2 cursor-pointer"
                  >
                    <BsArrowLeftRight />
                  </div>

                  <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                    className="w-1/2 border  rounded-r-lg p-6 bg-gray-100"
                  />
                </div>

                <div className="md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center">
                  <label className="text-[10px] text-gray-500 uppercase font-bold">
                    Departure
                  </label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                    className="bg-transparent outline-none text-sm cursor-pointer font-bold"
                  />
                </div>

                <div className={`md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center ${tripType === "one" ? "opacity-50 pointer-events-none" : ""
                  }`}>
                  <label className="text-[10px] text-gray-500 uppercase font-bold">
                    Return
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    required
                    onChange={(e) => setReturnDate(e.target.value)}
                    disabled={tripType === "one"}
                    className="bg-transparent outline-none cursor-pointer text-sm font-bold"
                  />
                </div>

                <div className="md:col-span-2 ">
                  <TravelerModal />
                </div>

                <button type="submit" className="md:col-span-2 bg-blue-600 text-white cursor-pointer rounded-lg py-3">
                  Search Flights
                </button>

              </div>
            </>
          )}

          {activeTab === "hotels" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input type="text" required placeholder="City / Hotel" className="border p-3 rounded-lg bg-gray-100" />
              <input type="date" required className="border p-3 rounded-lg bg-gray-100" />
              <input type="date" required className="border p-3 rounded-lg bg-gray-100" />
              <button type="submit" className="bg-blue-600 cursor-pointer text-white rounded-lg py-3">
                Search Hotels
              </button>
            </div>
          )}

        </div>
      </div>

      <FeaturePage />
      <FlightDeals />
      <Testimonial />

    {/* <BlogCard posts={blogs} /> */}
      <FaqPage />
    </section>
  );
};

export default HomePage;