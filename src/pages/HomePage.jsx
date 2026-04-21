import { useState } from "react";
import { BiHotel } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdFlightTakeoff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TravelerModal from "../components/TravelModal";
import FeaturePage from "./FeaturePage";
import FaqPage from "./FaqPage";
import FlightDeals from "../components/FlightDeals";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "./WhyChooseUs";

export default function HomePage() {
  const [tripType, setTripType] = useState("round");
  const [activeTab, setActiveTab] = useState("flights");
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [flight, setFlight] = useState([])

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("/flightData.json")
      const data = await res.json();

      const result = data.filter(
        (f) =>
          f.source.toLowerCase() === from.toLowerCase() &&
          f.destination.toLowerCase() === to.toLowerCase()
      );

      setFlight(result)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      {/* Banner */}
      <div className="relative w-full h-[250px] md:h-[450px] overflow-hidden">
        <img
          src="/Images/Home page banner 1920 x 450.jpg.jpeg"
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Find the best flights deals and explore the world
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:-mt-20 relative z-20">

        {/* Tabs */}
        <div className="bg-white rounded-t-xl shadow-lg flex w-full md:w-fit mx-auto overflow-x-auto">
          <button
            onClick={() => {
              setActiveTab("flights");
              setResults([]);
            }}
            className={`flex-1 md:flex-none px-6 py-3 flex items-center justify-center gap-2 font-bold ${activeTab === "flights"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500"
              }`}
          >
            <MdFlightTakeoff /> Flights
          </button>

          <button
            onClick={() => {
              setActiveTab("hotels");
              setResults([]);
            }}
            className={`flex-1 md:flex-none px-6 py-3 flex items-center justify-center gap-2 font-bold ${activeTab === "hotels"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500"
              }`}
          >
            <BiHotel /> Hotels
          </button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
          <form onSubmit={handleSearch}>

            {activeTab === "flights" ? (
              <>
                <div className="flex gap-4 mb-4 text-sm font-semibold flex-wrap">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={tripType === "round"}
                      onChange={() => setTripType("round")}
                    />
                    Round Trip
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={tripType === "one"}
                      onChange={() => setTripType("one")}
                    />
                    One Way
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

                  {/* FROM / TO */}
                  <div className="md:col-span-4 flex relative h-14 md:h-16">
                    <input
                      value={from}
                      onChange={(e) => setFrom(e.target.value.toUpperCase())}
                      className="w-1/2 border rounded-l-lg p-2 md:p-3 bg-gray-50 uppercase font-bold text-sm"
                    />

                    <button
                      type="button"
                      onClick={handleSwap}
                      className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full p-1.5 md:p-2 shadow"
                    >
                      <BsArrowLeftRight />
                    </button>

                    <input
                      value={to}
                      onChange={(e) => setTo(e.target.value.toUpperCase())}
                      className="w-1/2 border rounded-r-lg p-2 md:p-3 bg-gray-50 uppercase font-bold text-sm"
                    />
                  </div>

                  {/* Departure */}
                  <div className="md:col-span-2 border rounded-lg p-2 bg-gray-50">
                    <label className="text-[10px] text-gray-400 font-bold uppercase">
                      Departure
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-transparent font-bold text-sm outline-none"
                    />
                  </div>

                  {/* Return */}
                  <div
                    className={`md:col-span-2 border rounded-lg p-2 bg-gray-50 ${tripType === "one" ? "opacity-30" : ""
                      }`}
                  >
                    <label className="text-[10px] text-gray-400 font-bold uppercase">
                      Return
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      disabled={tripType === "one"}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-transparent font-bold text-sm outline-none"
                    />
                  </div>

                  {/* Traveler */}
                  <div className="md:col-span-2">
                    <TravelerModal />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="md:col-span-2 w-full h-12 md:h-auto bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    {loading ? "..." : "Search"}
                  </button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value.toUpperCase())}
                  className="border rounded-lg p-2 bg-gray-50"
                  placeholder="City Code"
                />

                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="border rounded-lg p-2 bg-gray-50"
                />

                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border rounded-lg p-2 bg-gray-50"
                />

                <button
                  type="button"
                  className="bg-blue-600 text-white font-bold rounded-lg h-12"
                >
                  Search Hotels
                </button>
              </div>
            )}
          </form>

          {/* Results */}
          <div className="mt-8 space-y-4">
            {loading && (
              <div className="text-center font-bold text-blue-600">
                Finding best deals...
              </div>
            )}

            {/* {!loading && results.length === 0 && (
              <p className="text-center text-gray-400">
                No results found
              </p>
            )} */}

            <div className="mt-10 max-w-7xl mx-auto">
              {flight.length === 0 ? (
                ""
              ) : (
                flight.map((f) => (
                  <div
                    key={f.id}
                    className="bg-white p-6 mb-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center"
                  >
                    {/* Left: Airline Info */}
                    <div className="flex flex-col mb-4 md:mb-0">
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                        {f.airline}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">{f.flight_no}</span>
                    </div>

                    {/* Center: Route Information */}
                    <div className="flex items-center space-x-8">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-800">{f.source}</p>
                        <p className="text-xs text-gray-500 uppercase">Origin</p>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="h-px w-16 bg-gray-300 relative">
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-[10px]">✈</div>
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 uppercase">Non-stop</span>
                      </div>

                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-800">{f.destination}</p>
                        <p className="text-xs text-gray-500 uppercase">Destination</p>
                      </div>
                    </div>

                    <div className="text-right flex flex-col items-center md:items-end">
                      <p className="text-2xl font-black text-gray-900">₹{f.price.toLocaleString('en-IN')}</p>
                      <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <FeaturePage />
      <FlightDeals />
      <Testimonial />
      <FaqPage />
    </section>
  );
}