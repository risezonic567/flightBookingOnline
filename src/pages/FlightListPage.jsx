import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FlightListPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  // const {data}=state

  const [flights, setFlights] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);

  useEffect(() => {
    const dummyFlights = [
      { 
        id: 1, 
        airline: "Westjet", 
        price: 235.50, 
        stops: "non-Stop", 
        depTime: "01:50pm", 
        arrTime: "02:22pm", 
        retDepTime: "03:45pm", 
        retArrTime: "06:05pm",
        from: "YYC", 
        to: "YXX" 
      },
      { 
        id: 2, 
        airline: "Flair Airlines", 
        price: 158.60, 
        stops: "1-stop", 
        depTime: "09:40am", 
        arrTime: "10:10am", 
        retDepTime: "03:50pm", 
        retArrTime: "06:15pm",
        from: "YYC", 
        to: "YXX" 
      },
    ];
    setFlights(dummyFlights);
    setFiltered(dummyFlights);
  }, []);

  useEffect(() => {
    let result = flights;
    result = result.filter((f) => f.price <= maxPrice);
    if (selectedAirlines.length > 0) {
      result = result.filter((f) => selectedAirlines.includes(f.airline));
    }
    if (selectedStops.length > 0) {
      result = result.filter((f) => selectedStops.includes(f.stops));
    }
    setFiltered(result);
  }, [maxPrice, selectedAirlines, selectedStops, flights]);

  const handleCheckbox = (value, stateSetter, stateValue) => {
    if (stateValue.includes(value)) {
      stateSetter(stateValue.filter((v) => v !== value));
    } else {
      stateSetter([...stateValue, value]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
    

      <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-4 gap-6">
        
        <aside className="md:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="font-bold text-gray-700 border-b pb-2 mb-4">Stops</h2>
            {["non-stop", "1-stop", "2+ stops"].map((stop) => (
              <label key={stop} className="flex items-center justify-between py-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" onChange={() => handleCheckbox(stop, setSelectedStops, selectedStops)} />
                  <span className="text-sm capitalize">{stop}</span>
                </div>
              </label>
            ))}

            <h2 className="font-bold text-gray-700 border-b pb-2 mt-6 mb-4">Airlines</h2>
            {["Westjet", "Flair Airlines", "IndiGo"].map((airline) => (
              <label key={airline} className="flex items-center justify-between py-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-blue-600" onChange={() => handleCheckbox(airline, setSelectedAirlines, selectedAirlines)} />
                  <span className="text-sm">{airline}</span>
                </div>
              </label>
            ))}

            <div className="mt-6">
              <p className="font-bold text-gray-700 mb-2">Price Range</p>
              <input type="range" min="100" max="1000" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs mt-1 text-gray-500 font-semibold">
                <span>$100</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="md:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-800">Showing {filtered.length} flights</h1>
           
          </div>

          {filtered.length === 0 && <p className="text-center py-10 text-gray-500">No flights match your filters.</p>}

          {filtered.map((f) => (
            <div key={f.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div className="flex-grow p-6 space-y-6">
                <div className="grid grid-cols-4 items-center">
                  <div className="col-span-1">
                    <p className="text-xs font-bold text-gray-400 uppercase">Departure</p>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="font-bold text-blue-900">{f.airline}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black">{f.depTime}</p>
                    <p className="text-xs text-gray-500 font-bold">{f.from}</p>
                  </div>
                  <div className="flex flex-col items-center px-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{f.stops}</p>
                    <div className="w-full h-[1px] bg-gray-300 relative my-1">
                       <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">✈</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black">{f.arrTime}</p>
                    <p className="text-xs text-gray-500 font-bold">{f.to}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center pt-4 border-t border-dashed border-gray-200">
                  <div className="col-span-1">
                    <p className="text-xs font-bold text-gray-400 uppercase">Return</p>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="font-bold text-blue-900">{f.airline}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black">{f.retDepTime}</p>
                    <p className="text-xs text-gray-500 font-bold">{f.to}</p>
                  </div>
                  <div className="flex flex-col items-center px-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{f.stops}</p>
                    <div className="w-full h-[1px] bg-gray-300 relative my-1">
                       <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 rotate-180">✈</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black">{f.retArrTime}</p>
                    <p className="text-xs text-gray-500 font-bold">{f.from}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l border-gray-200 p-6 flex flex-col items-center justify-center min-w-[200px]">
                <p className="text-xs font-bold text-gray-500 uppercase">Economy</p>
                <p className="text-2xl font-black text-green-600 mt-1">${f.price.toFixed(2)}</p>
                <p className="text-[10px] text-gray-400 mb-4">Price Per Adult</p>
                <button 
                  onClick={() => navigate("/checkout", { state: f })}
                  className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md shadow-blue-200"
                >
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