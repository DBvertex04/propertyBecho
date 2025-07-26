// components/QuoteRequest.jsx

import React from 'react';
import Image from 'next/image'; // next/image ko import karein

const QuoteRequest = () => {
  return (
    // Main container
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background abstract shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-blue-200/50 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-blue-200/50 rounded-full filter blur-3xl opacity-50"></div>

      {/* Main content wrapper */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Layout ko stacked rakha gaya hai mobile par, aur side-by-side desktop par */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">

          {/* === Top Section: Text Content === */}
          {/* Iska order hamesha pehle rahega (order-1) */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
              Hi there! <span className="text-3xl">👋</span>
            </h1>
            <p className="mt-4 text-gray-600">
              You're about to connect with our team on WhatsApp to request a quote.
            </p>
            <p className="mt-3 text-gray-600">
              We'll respond shortly with pricing and details.
            </p>
            <p className="mt-3 text-gray-500 text-sm">
              Feel free to type your message or use the default one below:
            </p>
            <button className="mt-8 w-full md:w-auto bg-[#2450A0] text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              SEE OFFERS
            </button>
          </div>

          {/* === Bottom Section: Illustration === */}
          {/* Iska order hamesha baad me rahega (order-2) */}
          {/* 'relative' container taaki hum images ko ek doosre ke upar rakh sakein */}
          <div className="relative order-2 flex items-center justify-center h-80 md:h-[450px]">
            
            {/* Background Map Image */}
            <Image
              src="/images/map-background.svg" // <-- Yahan apni map image ka path daalein
              alt=""
              layout="fill"
              objectFit="contain"
              className="opacity-40"
            />

            {/* Character Pin Image (ye map ke upar aayegi) */}
            {/* 'relative' aur 'z-10' se ye upar rahegi */}
            <div className="relative z-10">
              <Image
                src="/pana.png" // <-- Yahan apni character image ka path daalein
                alt="Character waving from a location pin"
                width={300}  // <-- Apni image ke hisab se width adjust karein
                height={350} // <-- Apni image ke hisab se height adjust karein
                objectFit="contain"
              />
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;