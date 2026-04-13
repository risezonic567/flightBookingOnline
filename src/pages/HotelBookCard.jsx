import React from 'react';
import { MapPin, Star, Wifi, Coffee, Wind, Monitor, Utensils } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HotelDetails = () => {
    const navigate=useNavigate()
    const {state}=useLocation()

    const {data}=state
  return (
    <div className="max-w-6xl mt-10 mx-auto p-4  min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <button onClick={()=>navigate("/hotels-list")} className="text-blue-600 cursor-pointer font-medium mb-2 flex items-center gap-1">
            ← Back to Result
          </button>
          <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
        </div>
        <div className="flex gap-2">
          <Link className="px-4 py-2 border rounded-md bg-white shadow-sm text-sm font-medium">{data.location}</Link>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Gallery Section */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-2 h-[400px]">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800" 
              className="w-full h-full object-cover rounded-l-xl" 
              alt="Main" 
            />
          </div>
          <div className="grid grid-rows-2 gap-2 h-full">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600" 
              className="w-full h-full object-cover rounded-tr-xl" 
              alt="Sub 1" 
            />
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600" 
                className="w-full h-full object-cover rounded-br-xl" 
                alt="Sub 2" 
              />
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">DOUBLE QUEEN SIZE BED</h2>
            <p className="text-sm text-gray-500 mt-1 italic">Fit 2 Adult(s) <span className="text-red-500 font-medium ml-2">Non Refundable</span></p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600"><Utensils size={18}/> Bar</div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><Wind size={18}/> Laundry</div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><Monitor size={18}/> Lift</div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><Wifi size={18}/> Free WiFi</div>
            </div>
          </div>
          
          <button onClick={()=>navigate("/checkout")} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg mt-8 transition-colors">
            Select Room
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="mt-8 border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto">
          {['Overview', 'Rooms', 'Amenities & Facilities', 'Map', 'About'].map((tab, idx) => (
            <button 
              key={tab} 
              className={`pb-4 text-sm font-semibold whitespace-nowrap ${idx === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Room Description Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">Room Description & Details</h3>
        <p className="text-gray-600 leading-relaxed">
          Yeh room premium comfort ke liye design kiya gaya hai. Isme aapko milte hain do spacious queen-size beds, 
          jo families ya doston ke sath travel karne walon ke liye perfect hain. Room ke andar modern amenities jaise 
          ki high-speed internet, ek mini-bar aur flat-screen TV available hai. 
        </p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">• 24/7 Room Service available</li>
          <li className="flex items-center gap-2">• Air conditioning with climate control</li>
          <li className="flex items-center gap-2">• In-room safe for valuables</li>
          <li className="flex items-center gap-2">• Complimentary toiletries and hair dryer</li>
        </ul>
      </div>
    </div>
  );
};

export default HotelDetails;