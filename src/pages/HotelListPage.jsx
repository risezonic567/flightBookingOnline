import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Westgate Las Vegas Resort & Casino",
    location: "Las Vegas",
    distance: "1.616 Mi from city center",
    rating: 3.5,
    reviews: 2725,
    stars: 4,
    pricePerNight: 13.19,
    totalPrice: 68.55,
    image:"",
  },
  {
    id: 2,
    name: "Circus Circus Hotel, Casino & Theme Park",
    location: "Las Vegas",
    distance: "1.468 Mi from city center",
    rating: 3.0,
    reviews: 17619,
    stars: 3,
    discount: "25% off",
    pricePerNight: 15.11,
    totalPrice: 340.76,
    amenities: ["24-hour front desk", "24-hour security", "Accessible parking"],
    image:"",
  },
  {
    id: 3,
    name: "Westgate Las Vegas Resort & Casino",
    location: "Las Vegas",
    distance: "1.616 Mi from city center",
    rating: 3.5,
    reviews: 2725,
    stars: 4,
    pricePerNight: 13.19,
    totalPrice: 68.55,
    image:"",
  },
  {
    id: 4,
    name: "Circus Circus Hotel, Casino & Theme Park",
    location: "Las Vegas",
    distance: "1.468 Mi from city center",
    rating: 3.0,
    reviews: 17619,
    stars: 3,
    discount: "25% off",
    pricePerNight: 15.11,
    totalPrice: 340.76,
    amenities: ["24-hour front desk", "24-hour security", "Accessible parking"],
    image:"",
  },
];

export default function HotelListPage() {
  const [search, setSearch] = useState("");
  const [selectedStars, setSelectedStars] = useState([]);
  const [maxPrice, setMaxPrice] = useState(4000);

  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const navigate = useNavigate()

  const applyFilters = () => {
    let result = [...hotels];

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (h) =>
          h.name.toLowerCase().includes(query) ||
          h.location.toLowerCase().includes(query)
      );
    }

    if (selectedStars.length) {
      result = result.filter((h) => selectedStars.includes(h.stars));
    }

    result = result.filter((h) => h.totalPrice <= maxPrice);

    return result;
  };

  useEffect(() => {
    setFilteredHotels(applyFilters());
  }, [search, selectedStars, maxPrice]);

  const toggleStar = (star) => {
    setSelectedStars((prev) =>
      prev.includes(star)
        ? prev.filter((s) => s !== star)
        : [...prev, star]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
       <button onClick={()=>navigate("/hotels")} className="text-blue-600 cursor-pointer font-medium py-2 flex mx-35 gap-1">
            ← Back to Hotel
          </button>
      <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-4 gap-6">

        <aside className="md:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-lg border shadow-sm">

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Enter area, locality or hotel"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border p-2 rounded-md pr-10 text-sm focus:outline-blue-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-3">Star Rating</h3>
              <div className="grid grid-cols-2 gap-2">
                {[5, 4, 3, 2].map((star) => (
                  <button
                    key={star}
                    onClick={() => toggleStar(star)}
                    className={`border rounded-full py-1.5 text-xs font-semibold transition ${
                      selectedStars.includes(star)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-blue-400 text-blue-600"
                    }`}
                  >
                    {star} Star
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-3">Price Range</h3>
              <input
                type="range"
                min="0"
                max="4000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs mt-2 font-bold">
                <span>$0</span>
                <span>${maxPrice}</span>
              </div>
            </div>

          </div>
        </aside>

        <main className="md:col-span-3 space-y-4">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl border shadow-sm hover:shadow-blue-600 overflow-hidden flex flex-col md:flex-row md:h-64"
            >
              <div className="md:w-1/3">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full border object-cover"
                />
              </div>

              <div className="flex-grow p-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-black">{hotel.name}</h2>
                  <p className="text-xs text-blue-600 mt-1">
                 {hotel.location}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {hotel.rating}
                  </div>
                  <p className="text-xs text-gray-500">
                    {hotel.stars} Star {"★".repeat(hotel.stars)}
                  </p>
                </div>
              </div>

              <div className="md:w-1/4 bg-gray-50 p-5 text-right">
                <p className="text-lg font-bold">${hotel.totalPrice}</p>
                <button onClick={()=>navigate("/hotel-facility",{
                  state:{
                    type:"hotel",
                    data:hotel
                  }
                })} className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                  Select
                </button>
              </div>
            </div>
          ))}
        </main>

      </div>
    </div>
  );
}