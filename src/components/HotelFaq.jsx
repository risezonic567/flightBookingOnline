import React, { useState } from "react";

export default function HotelFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqQ = [
    {
      id: 1,
      question: "How can I book a flight?",
      answer: "You can book flights directly from our website by selecting your destination and travel dates."
    },
    {
      id: 2,
      question: "Do you provide hotel booking?",
      answer: "Yes, we offer hotel booking services at the best prices."
    },
    {
      id: 3,
      question: "Can I cancel my booking?",
      answer: "Yes, cancellation depends on airline or hotel policy."
    },
    {
      id: 4,
      question: "Do you offer customer support?",
      answer: "Yes, we provide 24/7 customer support."
    },
    {
      id: 5,
      question: "Is payment secure?",
      answer: "Yes, all payments are encrypted and secure."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqQ.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-sm overflow-hidden"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50"
            >
              <h3 className="font-semibold text-gray-800">
                {item.question}
              </h3>

              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}