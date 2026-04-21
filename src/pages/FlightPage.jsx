import React, { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdLocalFlorist, MdOutlineFlightTakeoff } from "react-icons/md";
import TravelerModal from "../components/TravelModal";
import { useNavigate } from "react-router-dom";

export default function FlightPage() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round");
  const [flight,setFlight]=useState([])

  const navigate = useNavigate()


  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const deals = [

  {
    id: 1,
    from: "Boston",
    to: "Washington DC",
    airline: "Delta",
    price: 140,
    date: "June 02, 2026 - June 06, 2026"
  },
  {
    id: 2,
    from: "San Diego",
    to: "San Jose",
    airline: "Southwest",
    price: 105,
    date: "June 05, 2026 - June 09, 2026"
  },
  {
    id: 3,
    from: "Houston",
    to: "New Orleans",
    airline: "Spirit",
    price: 90,
    date: "June 08, 2026 - June 11, 2026"
  },
  {
    id: 4,
    from: "Las Vegas",
    to: "San Francisco",
    airline: "United",
    price: 160,
    date: "June 10, 2026 - June 14, 2026"
  },
  {
    id: 5,
    from: "Philadelphia",
    to: "Chicago",
    airline: "American Airlines",
    price: 150,
    date: "June 12, 2026 - June 16, 2026"
  },
  {
    id: 6,
    from: "Detroit",
    to: "Atlanta",
    airline: "Delta",
    price: 135,
    date: "June 15, 2026 - June 19, 2026"
  },
  {
    id: 7,
    from: "Minneapolis",
    to: "Seattle",
    airline: "Alaska Airlines",
    price: 175,
    date: "June 18, 2026 - June 22, 2026"
  },
  {
    id: 8,
    from: "San Antonio",
    to: "Denver",
    airline: "Frontier",
    price: 120,
    date: "June 20, 2026 - June 24, 2026"
  },
  {
  id: 9,
  from: "Los Angeles",
  to: "Tokyo",
  img: "/Images/tokyo.jpg",
  airline: "Japan Airlines",
  price: 720,
  date: "July 05, 2026 - July 12, 2026"
},
];

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
    <div className="w-full bg-[#f4f7f9] font-sans">

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
              Book Cheap Flights from the USA – Fast & Easy Online
            </h1>
            <p className="text-sm md:text-lg">
              Find the best deals on domestic and international flights. Compare prices, save more,
              and travel smarter.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSearch}>
        <div className="max-w-7xl mx-auto px-4  -mt-20 sm:-mt-24 md:-mt-45 relative z-20">

          <div className="bg-white rounded-xl shadow-2xl p-2 md:p-6">

            {activeTab === "flights" && (
              <>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3">

                  <div className="md:col-span-4 flex flex-col md:flex-row relative gap-2 md:gap-0">

                    <input
                      required
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="w-full md:w-1/2 border rounded-lg md:rounded-l-lg p-2 bg-gray-100"
                      placeholder="From"
                    />

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

                  <div className="md:col-span-2">
                    <TravelerModal />
                  </div>

                  <button type="submit" className="md:col-span-2 w-full cursor-pointer bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700">
                    Search Flights
                  </button>

                </div>
              </>
            )}


          </div>
        </div>

      </form>

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

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 gap-4">

          <div className="text-center md:text-left px-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-snug">
              Today’s Best Flight Deals from the USA
            </h2>

            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl mx-auto md:mx-0">
              Compare fares and book affordable flights from major US cities to top international and domestic destinations. Limited-time deals available.
            </p>

            <div className="h-1 w-16 md:w-20 bg-blue-600 mt-3 rounded-full mx-auto md:mx-0"></div>
          </div>

          <button
            onClick={() => navigate("/flights-list")}
            className="w-full md:w-auto text-blue-600 font-semibold hover:underline text-center"
          >
            View All Deals
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MdOutlineFlightTakeoff size={22} />
                </div>

                <div className="text-right">
                  <span className="block text-[10px] md:text-xs text-gray-400 uppercase font-bold">
                    Starts from
                  </span>
                  <span className="text-lg md:text-xl font-black text-blue-600">
                    {deal.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-4 mb-3">
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-bold text-gray-700">
                    {deal.from}
                  </span>
                  <span className="text-[10px] text-gray-400">Origin</span>
                </div>

                <div className="flex-1 flex items-center justify-center relative">
                  <div className="w-full border-t-2 border-dashed border-gray-200"></div>
                  <MdLocalFlorist className="absolute text-gray-300 text-sm" />
                </div>

                <div className="flex flex-col text-right">
                  <span className="text-base md:text-lg font-bold text-gray-700">
                    {deal.to}
                  </span>
                  <span className="text-[10px] text-gray-400">Destination</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-sm bg-gray-50 p-2 rounded-lg">

                <input
                  type="date"
                  defaultValue="2026-03-31"
                  className="bg-transparent outline-none w-full md:w-auto"
                />

                <button
                  
                  className="w-full md:w-auto md:ml-auto bg-blue-600 text-white rounded-3xl px-4 py-2 cursor-pointer text-sm font-semibold"
                >
                  Book Now
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

