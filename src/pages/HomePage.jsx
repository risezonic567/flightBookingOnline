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

  const [from, setFrom] = useState("DEL");
  const [to, setTo] = useState("HYD");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!departureDate) {
      alert("Please select a date");
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      console.log("Search Params:", {
        from,
        to,
        departureDate,
        returnDate,
        tripType,
        activeTab,
      });

      
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
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
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Find the best flights deals and explore the world
            </h1>
            {/* <p className="text-sm md:text-lg">
              Find the best deals globally
            </p> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:-mt-20 relative z-20">

        <div className="bg-white rounded-t-xl shadow-lg flex w-fit mx-auto overflow-hidden">
          <button
            onClick={() => {
              setActiveTab("flights");
              setResults([]);
            }}
            className={`px-6 py-3 flex items-center gap-2 font-bold ${
              activeTab === "flights"
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
            className={`px-6 py-3 flex items-center gap-2 font-bold ${
              activeTab === "hotels"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500"
            }`}
          >
            <BiHotel /> Hotels
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-6">
          <form onSubmit={handleSearch}>

            {activeTab === "flights" ? (
              <>
                <div className="flex gap-6 mb-4 text-sm font-semibold">
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

                  <div className="md:col-span-4 flex relative h-16">
                    <input
                      value={from}
                      onChange={(e) =>
                        setFrom(e.target.value.toUpperCase())
                      }
                      className="w-1/2 border rounded-l-lg p-3 bg-gray-50 uppercase font-bold"
                    />

                    <button
                      type="button"
                      onClick={handleSwap}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-full p-2 z-10"
                    >
                      <BsArrowLeftRight />
                    </button>

                    <input
                      value={to}
                      onChange={(e) =>
                        setTo(e.target.value.toUpperCase())
                      }
                      className="w-1/2 border rounded-r-lg p-3 bg-gray-50 uppercase font-bold"
                    />
                  </div>

                  <div className="md:col-span-2 border rounded-lg p-2 bg-gray-50">
                    <label className="text-[10px] text-gray-400 font-bold uppercase">
                      Departure
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) =>
                        setDepartureDate(e.target.value)
                      }
                      className="w-full bg-transparent font-bold text-sm outline-none"
                    />
                  </div>

                  <div
                    className={`md:col-span-2 border rounded-lg p-2 bg-gray-50 ${
                      tripType === "one" ? "opacity-30" : ""
                    }`}
                  >
                    <label className="text-[10px] text-gray-400 font-bold uppercase">
                      Return
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      disabled={tripType === "one"}
                      onChange={(e) =>
                        setReturnDate(e.target.value)
                      }
                      className="w-full bg-transparent font-bold text-sm outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <TravelerModal />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="md:col-span-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    {loading ? "..." : "Search"}
                  </button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  value={from}
                  onChange={(e) =>
                    setFrom(e.target.value.toUpperCase())
                  }
                  className="border rounded-lg p-2 bg-gray-50"
                  placeholder="City Code"
                />

                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) =>
                    setDepartureDate(e.target.value)
                  }
                  className="border rounded-lg p-2 bg-gray-50"
                />

                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) =>
                    setReturnDate(e.target.value)
                  }
                  className="border rounded-lg p-2 bg-gray-50"
                />

                <button
                  type="button"
                  className="bg-blue-600 text-white font-bold rounded-lg"
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

            {!loading && results.length === 0 && (
              <p className="text-center text-gray-400">
                No results found
              </p>
            )}

            {results.map((f, i) => (
              <div
                key={i}
                className="flex justify-between items-center border p-4 rounded-xl shadow-sm"
              >
                <div>
                  <p className="text-blue-600 font-black">
                    {f.validatingAirlineCodes?.[0]}
                  </p>
                  <p className="font-bold text-lg">
                    {from} → {to}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-green-600">
                    {f.price?.total} {f.price?.currency}
                  </p>

                  <button
                  type="button"
                    onClick={() =>
                      navigate("/flights-list", {
                        state: {
                          from,
                          to,
                          departureDate,
                          returnDate,
                          results: f,
                        },
                      })
                    }
                    className="bg-blue-600 text-white text-xs px-4 py-1 rounded mt-2 uppercase font-bold"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      <WhyChooseUs/>  
      <FeaturePage />
      <FlightDeals />
      <Testimonial />
      <FaqPage />
    </section>
  );
}