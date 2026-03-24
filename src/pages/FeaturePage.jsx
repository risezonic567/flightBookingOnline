import React from 'react'
import { BiMapPin, BiShield, BiHeadphone, BiSolidPlaneTakeOff } from 'react-icons/bi'

export default function FeaturePage() { 
    const Features = [
        {
            icon: <BiSolidPlaneTakeOff size={28} />,
            title: "Easy Flight Booking",
            desc: "Book flights quickly with our simple and user-friendly platform. Search, compare, and confirm tickets in just a few clicks."
        },
        {
            icon: <BiMapPin size={28} />,
            title: "Multiple Destinations",
            desc: "Travel to thousands of destinations worldwide with ease. Explore both domestic and international routes with flexibility."
        },
        {
            icon: <BiShield size={28} />,
            title: "100% Secure Booking",
            desc: "Your booking is completely safe with us. We use advanced security measures to protect your personal details."
        },
        {
            icon: <BiHeadphone size={28} />,
            title: "24/7 Support",
            desc: "Our support team is available 24/7 to assist you. Get help with bookings, cancellations, or any queries anytime."
        },
    ]

    return (
        <section 
            data-aos="fade-up" 
            data-aos-duration="1500" 
            className="py-16 bg-gray-50" 
        >
            {/* Main Container jo content ko center mein rakhega aur side padding dega */}
            <div className="max-w-7xl mx-auto px-6 ">
                
                <h2 className="text-center text-3xl font-black uppercase tracking-tight text-blue-900 mb-12">
                    Our Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        Features.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white cursor-pointer rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                {/* Icon Container */}
                                <div className="text-blue-600 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-xl mb-3 text-gray-800">
                                    {item.title}
                                </h3>

                                {/* Description */}
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