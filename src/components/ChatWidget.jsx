import { Minus } from 'lucide-react';
import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[1000] font-sans">
   
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-t-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          
      
          <div className="bg-[#0052cc] p-4 flex justify-between items-center text-white">
            <h3 className="font-bold text-sm">Welcome</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 px-2 rounded text-xl font-bold transition-colors"
            >
              <Minus className='cursor-pointer'/>
            </button>
          </div>

       
          <form action="">
            <div className="p-4 space-y-3 bg-white overflow-y-auto max-h-[400px]">
            <div>
              <label className="text-xs font-bold text-gray-600">Name</label>
              <input required type="text" className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-gray-600">Email</label>
              <input required type="email" className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">Choose a department</label>
              <select className="w-full border cursor-pointer border-gray-300 p-2 rounded mt-1 text-gray-500 bg-white">
                <option className='cursor-pointer'>-</option>
                <option className='cursor-pointer'>Flight Booking</option>
                <option className='cursor-pointer'>Hotel Booking</option>
                <option className='cursor-pointer'>Support</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">Phone Number</label>
              <input required type="tel" className="w-full border border-gray-300 p-2 rounded mt-1" />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded mt-1 h-20 resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#0052cc] text-white font-bold py-2 rounded-md mt-2 hover:bg-blue-700 transition-colors shadow-md">
              Send Message
            </button>
          </div>
          </form>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0052cc] cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="text-xl">💬</span>
          {isOpen ? 'Close' : 'Chat'}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;