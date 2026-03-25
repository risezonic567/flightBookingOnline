import React from 'react';
import { Link } from 'react-router-dom';

const hotels = [
  {
    id: 1,
    city: "Las Vegas",
    name: "Four Queens Hotel And Casino",
    address: "202 Fremont St, Las Vegas, NV-Nevada, US, 89101",
    price: "164.83",
    rating: "Very Good",
    image: "https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    city: "Miami",
    name: "Hilton Miami Airport",
    address: "5101 Blue Lagoon Dr, Miami, FL-Florida, US, 33126",
    price: "179.84",
    rating: "Very Good",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    city: "New York",
    name: "The Manhattan Center Hotel",
    address: "405 Lexington Ave, New York, NY, US, 10174",
    price: "245.50",
    rating: "Excellent",
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    city: "Orlando",
    name: "Wyndham Garden Lake Buena Vista",
    address: "1850 Hotel Plaza Blvd, Orlando, FL, US, 32830",
    price: "135.20",
    rating: "Very Good",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    city: "Los Angeles",
    name: "Sheraton Grand Los Angeles",
    address: "711 S Hope St, Los Angeles, CA, US, 90017",
    price: "210.15",
    rating: "Good",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    city: "Seattle",
    name: "The Edgewater Hotel",
    address: "2411 Alaskan Way, Seattle, WA, US, 98121",
    price: "225.40",
    rating: "Very Good",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function HotelDeals() {
  return (
   <>
    <div className=" mt-10 min-h-screen font-sans">
      
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold uppercase text-blue-600 mb-6">Today's Popular Destinations</h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              
              {/* Image & City Label */}
              <div className="relative h-60">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-[550px] h-[250px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-5 py-1.5 rounded-full font-bold text-gray-800 shadow-lg">
                  {hotel.city}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 leading-tight">{hotel.name}</h2>
                <p className="text-sm text-gray-500 mt-2 flex items-start gap-1">
                  <span className="text-gray-400">📍</span> {hotel.address}
                </p>

                {/* Rating & Status */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <span className="text-cyan-600 font-semibold text-sm underline cursor-pointer hover:text-cyan-700">
                    {hotel.rating}
                  </span>
                </div>

                {/* Price & Action Row */}
                <div className="mt-6 pt-4 border-t flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Starting From</span>
                    <span className="text-3xl font-black text-gray-900">${hotel.price}</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200 shadow-md">
                    View Deal
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* Floating Chat Button
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 hover:bg-blue-700">
        <Link to="/contact-us">💬 Chat</Link>
      </button> */}
    </div>
   </>
  );
};
