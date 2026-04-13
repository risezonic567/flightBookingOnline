import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { state: flight } = useLocation();
  const navigate = useNavigate();


  if (!flight) return <div className="p-10 text-center font-bold">
          <p className="mb-3">No flight selected. Please go back.</p>
          <Link to="/flights" className="bg-blue-600 text-white p-2 rounded-3xl hover:bg-blue-700">
          Search Flight
          </Link>
  </div>;

  return (
    <div className=" mt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-blue-900 px-6 py-3 text-white font-bold flex items-center gap-2">
               <span className="bg-white">👤</span> Passenger Details
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                <input type="text" placeholder="e.g. John" className="border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                <input type="text" placeholder="e.g. Doe" className="border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                <input type="email" placeholder="john@example.com" className="border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              
            </div>
          </section>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl text-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
            CONFIRM & PAY ₹{flight.price}
          </button>
        </div>

        {/* RIGHT COLUMN: Summary Card (Sticky) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden sticky top-6">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-black text-gray-800 text-lg uppercase">Trip Summary</h3>
            </div>
            
            <div className="p-5 space-y-4">
              {/* Flight Brief */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-black text-blue-900">{flight.title}</p>
                  <p className="text-sm text-gray-500">{flight.stops}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800"></p>
                  <p className="text-xs text-gray-400 uppercase font-bold">Departure</p>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-800">Regular Economy</span>
                <span className="text-xs font-bold text-blue-800">Refundable</span>
              </div>

              <hr className="border-gray-100" />

              {/* Price Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600 font-medium">
                  <span>Base Fare (1 Adult)</span>
                  <span>₹{flight.price - 450}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 font-medium">
                  <span>Taxes & Fees</span>
                  <span>$450</span>
                </div>
                <div className="flex justify-between text-lg font-black text-gray-900 pt-2 border-t border-gray-100 mt-2">
                  <span>Total Amount</span>
                  <span className="text-green-600">${flight.price}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 text-[11px] text-gray-400 leading-relaxed text-center">
              By clicking "Confirm & Pay", you agree to our Terms & Conditions and Privacy Policy. All fares are inclusive of GST.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}