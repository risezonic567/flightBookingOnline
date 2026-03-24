import React, { useState } from "react";

const TravelerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cabin, setCabin] = useState("Economy");
  const [counts, setCounts] = useState({
    adults: 1,
    children: 0,
    infantsLap: 0,
  });

  const updateCount = (field, delta) => {
    setCounts((prev) => ({
      ...prev,
      [field]: Math.max(0, prev[field] + delta),
    }));
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border p-2 rounded-lg w-full text-left bg-[#f0f4f8]"
      >
        <span className="text-xs text-gray-500 uppercase font-bold">
          Travelers / Class
        </span>
        <div className="text-sm font-bold">
          {counts.adults + counts.children} Travelers, {cabin}
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="absolute  left-1/2 -translate-x-1/2 w-[90%] md:w-[350px] bg-white border rounded-xl shadow-2xl z-[9999] p-5">

          {/* Cabin */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {["Economy", "Business", "First"].map((type) => (
              <button
                key={type}
                onClick={() => setCabin(type)}
                className={`py-2 border rounded ${
                  cabin === type
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Counters */}
          {["adults", "children", "infantsLap"].map((type) => (
            <div key={type} className="flex justify-between items-center mb-3">
              <span className="capitalize">{type}</span>
              <div className="flex gap-3 items-center">
                <button onClick={() => updateCount(type, -1)}>-</button>
                <span>{counts[type]}</span>
                <button onClick={() => updateCount(type, 1)}>+</button>
              </div>
            </div>
          ))}

          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default TravelerModal;