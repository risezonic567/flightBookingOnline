import React, { useState } from "react";
import { BiHotel } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdFlightTakeoff } from "react-icons/md";
import TravelerModal from "../components/TravelModal";

const FlightPage = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round");

  const [from, setFrom] = useState("DEL");
  const [to, setTo] = useState("HYD");

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="w-full bg-[#f4f7f9] font-sans">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <img
          src="/Images/flight 1920x450.jpg.jpeg"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
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

      <form action="">
        <div className="max-w-7xl mx-auto px-4  -mt-20 sm:-mt-24 md:-mt-45 relative z-20">

          {/* BOX */}
          <div className="bg-white rounded-xl shadow-2xl p-2 md:p-6">

            {activeTab === "flights" && (
              <>
                {/* Trip Type */}
                <div className="flex gap-6 mb-6 text-sm font-semibold">
                  <label className="cursor-pointer">
                    <input
                      required
                      type="radio"
                      checked={tripType === "round"}
                      onChange={() => setTripType("round")}
                    /> Round Trip
                  </label>

                  <label className="cursor-pointer">
                    <input
                      required
                      type="radio"
                      checked={tripType === "one"}
                      onChange={() => setTripType("one")}
                    /> One Way
                  </label>
                </div>

                {/* FORM */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3">

                  {/* FROM TO */}
                  <div className="md:col-span-4 flex flex-col md:flex-row relative gap-2 md:gap-0">

                    <input
                      required
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="w-full md:w-1/2 border rounded-lg md:rounded-l-lg p-2 bg-gray-100"
                      placeholder="From"
                    />

                    {/* Swap */}
                    <div
                      onClick={handleSwap}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full w-7 h-7 flex items-center justify-center shadow-sm cursor-pointer hover:bg-blue-50"
                    >
                      <BsArrowLeftRight size={14} />
                    </div>

                    <input
                      required
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="w-full md:w-1/2 border rounded-lg md:rounded-r-lg p-4 bg-gray-100"
                      placeholder="To"
                    />
                  </div>

                  {/* DEPARTURE */}
                  <div className="md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center">
                    <label className="text-[10px] text-gray-500 font-bold">
                      Departure
                    </label>
                    <input
                      required
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="bg-transparent outline-none text-sm font-bold"
                    />
                  </div>

                  {/* RETURN */}
                  <div className={`md:col-span-2 border rounded-lg p-3 bg-[#f0f4f8] h-16 flex flex-col justify-center ${tripType === "one" ? "opacity-50 pointer-events-none" : ""
                    }`}>
                    <label className="text-[10px] text-gray-500 font-bold">
                      Return
                    </label>
                    <input
                      required
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      disabled={tripType === "one"}
                      className="bg-transparent outline-none text-sm font-bold"
                    />
                  </div>

                  {/* TRAVELER */}
                  <div className="md:col-span-2">
                    <TravelerModal />
                  </div>

                  {/* BUTTON */}
                  <button type="submit" className="md:col-span-2 w-full cursor-pointer bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700">
                    Search Flights
                  </button>

                </div>
              </>
            )}


          </div>
        </div>

      </form>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black text-center text-blue-600">
          Handpicked Top Flight Deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {[
            { from: "LAX", to: "LAS", price: "$87.99*", date: "02 May - 04 May" },
            { from: "DEN", to: "HOU", price: "$131.97*", date: "05 May - 11 May" },
            { from: "LAX", to: "LAS", price: "$87.99*", date: "02 May - 04 May" },
            { from: "DEN", to: "HOU", price: "$131.97*", date: "05 May - 11 May" },
            { from: "LAX", to: "LAS", price: "$87.99*", date: "02 May - 04 May" },
            { from: "DEN", to: "HOU", price: "$131.97*", date: "05 May - 11 May" },
          ].map((deal, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow border flex justify-between">
              <div>
                <p className="text-xs text-gray-400">{deal.date}</p>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{deal.from}</span>
                  <div className="border-t-2 border-dashed w-10"></div>
                  <span className="font-bold">{deal.to}</span>
                </div>
              </div>
              <p className="text-xl font-bold text-green-600">{deal.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FlightPage;