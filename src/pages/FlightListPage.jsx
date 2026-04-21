import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FlightListPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [flights, setFlights] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedStops, setSelectedStops] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ DATA FETCH
  useEffect(() => {
    async function fetchFlights() {
      try {
        // 👉 agar search page se data aaya hai
        if (state && state.length > 0) {
          setFlights(state);
          setFiltered(state);
          setLoading(false);
          return;
        }

        // 👉 warna API call
        const res = await fetch("http://localhost:5000/api/flights");

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();

        setFlights(data);
        setFiltered(data);
      } catch (err) {
        console.log("Error:", err);

        // ✅ fallback dummy (jab backend band ho)
        const dummyFlights = [
          {
            id: 1,
            airline: "IndiGo",
            price: 3200,
            stops: "non-stop",
            depTime: "10:00 AM",
            arrTime: "12:00 PM",
            retDepTime: "02:00 PM",
            retArrTime: "04:00 PM",
            from: "DEL",
            to: "BOM",
          },
        ];

        setFlights(dummyFlights);
        setFiltered(dummyFlights);
      } finally {
        setLoading(false);
      }
    }

    fetchFlights();
  }, [state]);

  // ✅ FILTER LOGIC
  useEffect(() => {
    let result = flights;

    result = result.filter((f) => f.price <= maxPrice);

    if (selectedAirlines.length > 0) {
      result = result.filter((f) =>
        selectedAirlines.includes(f.airline)
      );
    }

    if (selectedStops.length > 0) {
      result = result.filter((f) =>
        selectedStops.includes(f.stops)
      );
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
        
        {/* SIDEBAR */}
        <aside className="md:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            
            <h2 className="font-bold mb-4">Stops</h2>
            {["non-stop", "1-stop", "2+ stops"].map((stop) => (
              <label key={stop} className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckbox(stop, setSelectedStops, selectedStops)
                  }
                />
                {stop}
              </label>
            ))}

            <h2 className="font-bold mt-6 mb-4">Airlines</h2>
            {["IndiGo", "Air India", "SpiceJet"].map((airline) => (
              <label key={airline} className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckbox(
                      airline,
                      setSelectedAirlines,
                      selectedAirlines
                    )
                  }
                />
                {airline}
              </label>
            ))}

            <div className="mt-6">
              <p className="font-bold">Price</p>
              <input
                type="range"
                min="100"
                max="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <p>Max: ₹{maxPrice}</p>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="md:col-span-3 space-y-4">
          <div className="bg-white p-4 rounded shadow flex justify-between">
            <h1 className="font-bold">
              {loading
                ? "Loading..."
                : `Showing ${filtered.length} flights`}
            </h1>
          </div>

          {!loading && filtered.length === 0 && (
            <p className="text-center">No flights found</p>
          )}

          {filtered.map((f) => (
            <div key={f.id} className="bg-white p-5 rounded shadow flex justify-between">
              
              <div>
                <p className="font-bold">{f.airline}</p>
                <p>{f.depTime} → {f.arrTime}</p>
                <p>{f.from} → {f.to}</p>
                <p>{f.stops}</p>
              </div>

              <div>
                <p className="text-green-600 font-bold">₹{f.price}</p>
                <button
                  onClick={() => navigate("/checkout", { state: f })}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
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