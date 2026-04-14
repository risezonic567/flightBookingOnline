import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp, BiSupport, BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best time to book cheap flights from the USA?",
      answer: `The best time to book cheap flights from the USA is typically 6 to 8 weeks in advance for international travel and 3 to 4 weeks for domestic flights. Booking early helps you secure lower prices and better seat availability, especially during peak seasons.`
    },
    {
      question: "How can I find cheap international flights from the USA?",
      answer: "To find cheap international flights from the USA, compare multiple airlines, book in advance, and stay flexible with your travel dates. You can also explore our latest flight deals to destinations like India, Dubai, and the UK for the best prices."
    },
    {
      question: "Are last-minute flight deals from the USA cheaper?",
      answer: "Last-minute flight deals can sometimes be cheaper, but they are usually more expensive due to high demand. For the best prices, it is recommended to book early or monitor limited-time deals available on our platform."
    },
    {
      question: "Which are the most popular international routes from the USA?",
      answer: "Some of the most popular international routes from the USA include flights to India, Dubai, the United Kingdom, Canada, and Australia. These routes often have competitive pricing and frequent airline options."
    },
    {
      question: "Is it safe to book flights online?",
      answer: "Yes, booking flights online is completely safe when using a secure and trusted platform. We use advanced security measures to protect your personal and payment information, ensuring a safe booking experience."
    },

  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f4f7f9] min-h-screen font-sans">


      <div className="bg-[#002b70] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase"> How can we help you?</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Find answers to frequently asked questions about bookings, rewards, and our services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6  -mt-10 pb-20">

        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl  border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <BiChevronUp className="text-blue-600 cursor-pointer" size={28} />
                ) : (
                  <BiChevronDown className="text-gray-400 cursor-pointer" size={28} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>


        <div className="mt-16 bg-blue-50 rounded-2xl p-4 sm:p-5 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6 border border-blue-100">

          <div className="flex items-start gap-3 md:gap-4 w-full">

            <div className="bg-blue-600 p-2.5 sm:p-3 md:p-4 rounded-full text-white flex-shrink-0">
              <BiSupport className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 leading-snug">
                Do you offer customer support for flight bookings?
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
                Yes, we provide 24/7 customer support to assist you with flight bookings, cancellations, changes, and travel queries. Our travel experts are always ready to help you find the best deals.
              </p>
            </div>

          </div>

          <button className="w-full md:w-auto bg-[#0a3375] text-white px-5 sm:px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold hover:bg-blue-800 transition-all text-sm sm:text-base">
            <Link to="/contact-us">Contact Us</Link>
          </button>

        </div>
      </div>
    </div>
  );
};

export default FaqPage;