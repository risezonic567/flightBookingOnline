import React, { useState } from "react";
import {
  BiHotel,
  BiPlanet
} from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaCar, FaShip } from "react-icons/fa";

import FlightDeals from "../components/FlightDeals";
import FeaturePage from "./FeaturePage";
import TravelerModal from "../components/TravelModal";
import BlogCard from "./BlogCard";
import { blogs } from "../data/blog";

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
      <div className="relative w-full bg-gradient-to-r from-[#0046ad] to-[#002b70] min-h-[500px] p-4 md:p-8 overflow-visible">

        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <BiPlanet className="absolute top-10 left-10 text-white" size={40} />
          <BiPlanet className="absolute bottom-20 right-20 text-white" size={60} />
        </div>

        <div className="max-w-7xl mx-auto md:mt-70 mt-20 relative z-20">

          {/* Tabs */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-t-xl shadow-lg flex p-1 w-[95%] md:w-auto overflow-x-auto">

            <button
              onClick={() => setActiveTab("flights")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${activeTab === "flights"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
                }`}
            >
              <BiPlanet /> Flights
            </button>

            <button
              onClick={() => setActiveTab("hotels")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${activeTab === "hotels"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
                }`}
            >
              <BiHotel /> Hotels
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 text-sm">
              <FaCar /> Cars
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 text-sm">
              <FaShip /> Cruise
            </button>
          </div>

          {/* Main Box */}
          <div className="bg-white  rounded-xl shadow-2xl p-4 md:p-6 pt-10">

            {/* Flights UI */}
            {activeTab === "flights" && (
              <>
                {/* Trip Type */}
                <div className="flex gap-6 mb-6 text-sm font-semibold">
                  <label>
                    <input
                      type="radio"
                      checked={tripType === "round"}
                      onChange={() => setTripType("round")}
                    />{" "}
                    Round Trip
                  </label>

                  <label>
                    <input
                      type="radio"
                      checked={tripType === "one"}
                      onChange={() => setTripType("one")}
                    />{" "}
                    One Way
                  </label>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

                  {/* From / To */}
                  <div className="md:col-span-4 flex relative h-16">
                    <input
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="w-1/2 border rounded-l-lg p-2 bg-gray-100"
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
                      className="w-1/2 border rounded-r-lg p-5 bg-gray-100"
                    />
                  </div>

                  {/* Departure */}
                  <div className="md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center">
                    <label className="text-[10px] text-gray-500 uppercase font-bold">
                      Departure
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="bg-transparent outline-none text-sm font-bold"
                    />
                  </div>

                  {/* Return */}
                  <div className={`md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center ${tripType === "one" ? "opacity-50 pointer-events-none" : ""
                    }`}>
                    <label className="text-[10px] text-gray-500 uppercase font-bold">
                      Return
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      disabled={tripType === "one"}
                      className="bg-transparent outline-none text-sm font-bold"
                    />
                  </div>

                  {/* Traveler Modal */}
                  <div className="md:col-span-2 ">
                    <TravelerModal />
                  </div>

                  {/* Search */}
                  <button className="md:col-span-2 bg-blue-600 text-white rounded-lg py-3">
                    Search Flights
                  </button>
                </div>
              </>
            )}

            {/* Hotels UI */}
            {activeTab === "hotels" && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="City / Hotel"
                  className="border p-3 rounded-lg bg-gray-100"
                />

                <input
                  type="date"
                  className="border p-3 rounded-lg bg-gray-100"
                />

                <input
                  type="date"
                  className="border p-3 rounded-lg bg-gray-100"
                />

                <button className="bg-blue-600 text-white rounded-lg py-3">
                  Search Hotels
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <FeaturePage />
      <FlightDeals />
      <div className="max-w-7xl px-3 py-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10  items-stretch">

  {/* LEFT BIG */}
  <div className="md:col-span-2">
    <BlogCard post={blogs[0]} isFeatured />
  </div>

  {/* RIGHT SIDE (EK HI DIV) */}
  <div className="flex flex-col justify-between h-full gap-6">
    <BlogCard post={blogs[1]} />
    <BlogCard post={blogs[2]} />
  </div>

</div>
    </section>
  );
};

export default HomePage;