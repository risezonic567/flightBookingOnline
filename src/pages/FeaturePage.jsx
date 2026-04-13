import React from 'react'
import { BiMapPin, BiShield, BiHeadphone, BiSolidPlaneTakeOff } from 'react-icons/bi'

export default function FeaturePage() { 
    const Features = [
        {
            icon: <BiSolidPlaneTakeOff size={28} />,
            title: "Cheap Flight Deals from USA",
            desc: "Find the best deals on domestic and international flights from the USA. We help you compare prices and book affordable tickets with ease."
        },
        {
            icon: <BiMapPin size={28} />,
            title: "Wide Range of Destinations",
            desc: "Explore flights from the USA to top destinations like India, Dubai, UK, and Canada with flexible booking options."
        },
        {
            icon: <BiShield size={28} />,
            title: "Safe & Secure Booking",
            desc: "Book your flights with confidence using our secure payment system and trusted booking process."
        },
        {
            icon: <BiHeadphone size={28} />,
            title: "24/7 Travel Support",
            desc: "Get expert assistance anytime for flight bookings, changes, cancellations, and last-minute deals."
        },
    ]

    return (
        <section 
            data-aos="fade-up" 
            data-aos-duration="1500" 
            className="py-16 " 
        >
            <div className="max-w-7xl mx-auto px-6 ">
                
                <h2 className="text-center uppercase text-3xl font-black  tracking-tight text-blue-600 mb-12">
                    Our Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        Features.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white cursor-pointer rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="text-blue-600 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>

                                <h3 className="font-bold text-xl mb-3 text-gray-800">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}