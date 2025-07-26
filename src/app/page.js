
"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";

export default function Home() {
  const [likedStates, setLikedStates] = useState([false, false, false, false]);

  const toggleLike = (index) => {
    const updatedLikes = [...likedStates];
    updatedLikes[index] = !updatedLikes[index];
    setLikedStates(updatedLikes);
  };

  const cardData = [
    {
      price: "$280,000",
      owner: "By Owner",
      type: "2 BHK",
      bath: "2 BA",
      area: "24 sqft",
      address: "1030 Spruce St, Aurora, IL, 60506",
      image: "/Card media container.png",
    },
    {
      price: "$450,000",
      owner: "By Agent",
      type: "3 BHK",
      bath: "3 BA",
      area: "36 sqft",
      address: "221B Baker Street, London, UK",
      image: "/Card media.png",
    },
    {
      price: "$320,000",
      owner: "By Owner",
      type: "1 BHK",
      bath: "1 BA",
      area: "18 sqft",
      address: "5th Ave, New York, NY 10011",
      image: "/Card media.png",
    },
    {
      price: "$600,000",
      owner: "By Agent",
      type: "4 BHK",
      bath: "4 BA",
      area: "48 sqft",
      address: "90210 Beverly Hills, CA",
      image: "/Card media.png",
    },
  ];

  return (
    <div className=" text-gray-900 w-full">
      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Banner Section */}
      <section
        className="relative w-full h-[110vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        {/* 🔹 Add padding to prevent overlap under header */}
        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 pt-32">
          {/* ✅ Heading Section */}
          <div className="text-center md:text-left md:ml-[120px]">
            <h1 className="text-[#ffffff] text-4xl md:text-7xl font-medium -mt-5 md:ml-[0px]">
              At One Place
            </h1>
            <h2 className="text-[#ffffff] text-4xl md:text-7xl font-extrabold mt-1">
              For Agent, Tours, <br /> Loans, Homes
            </h2>
          </div>

          {/* ✅ Search Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl mt-6 md:ml-[120px]">
            {/* 🔹 Location Input Box with Icon */}
            <div className="flex flex-grow bg-white rounded-xl shadow-md overflow-hidden max-w-[500px] ">
              <input
                type="text"
                placeholder="Location"
                className="px-10 md:px-4 py-4 text-[#414141] flex-grow outline-none rounded-l-full text-base font-bold placeholder:font-extrabold placeholder:text-[#7e7d7d]"
              />

              <div className="bg-white px-4 flex items-center justify-center">
                <Image
                  src="/Location.png"
                  alt="Location"
                  width={25}
                  height={25}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>

            {/* 🔹 Search Button with Icon */}
            <button className="mt-2 sm:mt-0 max-w-[270px] bg-[#2b56b6] hover:bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 border border-white">
              <Image
                src="/Button Icon.png"
                alt="Search Icon"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>SEARCH</span>
            </button>
          </div>
        </div>{" "}
        {/* ✅ Close the inner div here */}
        {/* 🔽 U-Shaped Bottom Notch */}
        <div className="absolute bottom-0 w-full z-10 overflow-hidden mt-5">
  {/* 🔹 Desktop SVG (visible on md and up) */}
  <svg
  className="w-full h-[100px] hidden md:block"
  viewBox="0 0 1440 100"
  preserveAspectRatio="xMidYMid slice"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <filter id="waveShadow" x="-30%" y="-40%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="black" floodOpacity="100" />
    </filter>
  </defs>
  <path
    d="M0,0 H600 C660,0 660,70 720,70 C780,70 780,0 840,0 H1440 V100 H0 Z"
    fill="#ffffff"
    filter="url(#waveShadow)"
  />
</svg>

  {/* 🔸 Mobile SVG (visible below md only) */}
  <svg
  className="w-full h-[100px] block md:hidden"
  viewBox="0 0 1440 100"
  preserveAspectRatio="xMidYMid slice"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <filter id="waveShadowMobile" x="-30%" y="-40%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="black" floodOpacity="100" />
    </filter>
  </defs>
  <path
    d="M0,0 H600 C680,0 680,40 720,40 C760,40 760,0 840,0 H1440 V100 H0 Z"
    fill="#ffffff"
    filter="url(#waveShadowMobile)"
  />
</svg>

  {/* ⬇️ Center Arrow */}
 <div className="absolute bottom-[60px] md:bottom-[35px] left-1/2 transform -translate-x-1/2 -mt-10">
  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#444444] rounded-full flex items-center justify-center shadow-lg border border-[#a5a4a4]">
    <span className="text-[#a5a4a4] text-lg sm:text-xl leading-none">
      ↓
    </span>
  </div>
</div>
</div>
      </section>

      <div className="relative w-full -mt-[90px] z-10">
        <Image
          src="/bg.svg"
          alt="Decoration"
          width={1200}
          height={1200}
          className="mx-auto pointer-events-none object-contain scale-[2.1] md:scale-[1.7]"
        />
      </div>

      {/* 🔹 Content Overlapping Background */}
      <div className="relative z-10 px-6 md:px-12 mt-0 md:mt-[-460px] overflow-visible">
        <div className="relative z-10 px-0 md:px-0 mt-10 md:mt-0">
          {/* Heading */}
          <h3 className="text-[31px] md:text-5xl ml-0 md:ml-[120px] text-left md:mt-1 mt-[-160px]">
            <span className="text-black font-extrabold">Discover</span>{" "}
            <span className="text-[#2b56b6] font-extrabold">
              Recommended Places
            </span>
          </h3>

          {/* Paragraph */}
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl text-left md:ml-[120px]">
      Duis vel interdum elit. Vivamus vel risus est. Integer a porta. Quisque
      nisi felis, tincidunt cursus efficitur at.
    </p>

          {/* Buttons */}
          <div className="mt-[-170px] md:mt-[-80px] flex flex-row items-center justify-end md:mr-[120px] mr-6">
            <button>
              <Image
                src="/Back Button.png"
                alt="Back"
                width={60}
                height={60}
                className="object-contain cursor-pointer hover:scale-105 transition-transform"
              />
            </button>
            <button>
              <Image
                src="/Next Button.png"
                alt="Next"
                width={60}
                height={60}
                className="object-contain cursor-pointer hover:scale-105 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Property Cards Section */}
      <section className="px-4 md:px-12 md:mt-[40px] mt-[110px] flex justify-center">
        <div className="grid grid-cols-1 z-15 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 gap-x-4 max-w-7xl w-full mt-[10px] md:mt-[50px]">
          {cardData.map((item, index) => (
            <Link key={index} href="/details">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
                {/* 🔹 Image */}

                <Image
                  src={item.image}
                  alt="Property"
                  width={500}
                  height={150}
                  className="object-contain h-full w-[110%] rounded-2xl"
                />

                {/* 🔹 Card Content */}
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-extrabold text-black">
                      {item.price}
                    </p>

                    {/* ❤️ Like Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent Link navigation
                        toggleLike(index);
                      }}
                      className="rounded-full"
                    >
                      <Image
                        src={
                          likedStates[index]
                            ? "/Heart buttion.svg"
                            : "/Heart buttion icon.svg"
                        }
                        alt="like"
                        width={20}
                        height={20}
                        className="w-10 h-10 transition-all duration-200"
                      />
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 -mt-2">{item.owner}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {/* Type (e.g., 4BHK) */}
                    <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                      <span className="text-[#2b56b6]">
                        {item.type.match(/^\d+/)}
                      </span>
                      {item.type.replace(/^\d+/, "")}
                    </span>

                    {/* Bath (e.g., 2 Bath) */}
                    <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                      <span className="text-[#2b56b6]">
                        {item.bath.match(/^\d+/)}
                      </span>
                      {item.bath.replace(/^\d+/, "")}
                    </span>

                    {/* Area (e.g., 2400 sqft) */}
                    <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                      <span className="text-[#2b56b6]">
                        {item.area.match(/^\d+/)}
                      </span>
                      {item.area.replace(/^\d+/, "")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600">
                    <Image
                      src="/loc.png"
                      alt="location"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span>{item.address}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------------------------------------------------------  */}
      <div className="relative w-full min-h-[30vh] md:min-h-screen bg-[#C5D8FF] overflow-hidden mt-30">
  {/* 🔷 Wavy Top */}
  <div className="absolute top-0 left-0 w-full z-15">
    {/* Desktop SVG */}
    <svg
      viewBox="0 0 1440 200"
      className="w-full h-[200px] md:block hidden"
      preserveAspectRatio="none"
    >
      <path fill="white" d="M0,0 L950,80 L1440,0 L1440,0 Z" />
      <path
        d="M0,0 L950,80 L1440,0"
        stroke="white"
        strokeWidth="4"
        fill="none"
        style={{ transform: "translateY(9px)" }}
      />
    </svg>

    <svg
      viewBox="0 0 360 100"
      className="w-full h-[100px] md:hidden block"
      preserveAspectRatio="none"
    >
      <path fill="white" d="M0,0 L237.5,55 L360,0 L360,0 Z" />
      <path
        d="M0,0 L237.5,55 L360,0"
        stroke="white"
        strokeWidth="4"
        fill="none"
        style={{ transform: "translateY(9px)" }}
      />
    </svg>
  </div>

  {/* 🔷 Left Background Decoration Image */}
  <Image
    src="/gridpurple.png"
    alt="Background Grid"
    width={450}
    height={450}
    className="absolute left-0 top-[30px]  z-0 pointer-events-none"
  />

  {/* 🔷 Main Content */}
  <div className="relative z-20 flex flex-col items-center justify-center px-4 mt-[200px] mb-[200px]">
    <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b56b6] text-center md:mt-0 mt-[-70px]">
      We are here <span className="text-black">For you</span>
    </h1>
    <p className="mt-4 text-[#9c9c9c] text-sm md:text-base max-w-xl text-center">
      Duis vel interdum elit. Vivamus vel risus est. Integer a porta. Quisque
      nisi felis, tincidunt cursus efficitur at.
    </p>

    {/* 🔷 Cards Grid */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* ------- Card 1 ------- */}
      <div className="bg-white rounded-2xl shadow-md px-6 pt-10 pb-6 flex flex-col items-center text-center transform hover:scale-105 transition relative overflow-visible mb-8 md:mb-0">
        <div className="relative flex flex-col items-center -mt-24">
          <Image src="/card1.png" alt="Buy" width={150} height={150} className="z-20 relative" />
          <Image src="/Profile Image Background.png" alt="House Icon" width={200} height={200} className="-mt-20 z-10" />
        </div>
        <h3 className="text-lg font-bold text-black mt-3">Buy a home</h3>
        <p className="text-sm text-gray-600 mt-2">
          Find your place with an immersive photo experience and the most
          listings, including things you won't find anywhere else.
        </p>
        <button className="mt-4 px-6 py-2 bg-[#2b56b6] text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
          <Image src="/Button Icon.png" alt="Browse Icon" width={16} height={16} />
          BROWSE HOME
        </button>
      </div>

      {/* ------- Card 2 ------- */}
      <div className="bg-white rounded-2xl shadow-md px-6 pt-10 pb-6 flex flex-col items-center text-center transform hover:scale-105 transition relative overflow-visible mb-8 md:mb-0">
        <div className="relative flex flex-col items-center -mt-24">
          <Image src="/card2.png" alt="Sell" width={150} height={150} className="z-20 relative" />
          <Image src="/Profile Image Background.png" alt="Sale Icon" width={200} height={200} className="-mt-20 z-10" />
        </div>
        <h3 className="text-lg font-bold text-black mt-3">Sell a home</h3>
        <p className="text-sm text-gray-600 mt-2">
          Find your place with an immersive photo experience and the most
          listings, including things you won’t find anywhere else.
        </p>
        <button className="mt-4 px-6 py-2 bg-[#2b56b6] text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
          <Image src="/receipt-item.png" alt="See Option Icon" width={16} height={16} />
          SEE YOUR OPTION
        </button>
      </div>

      {/* ------- Card 3 ------- */}
      <div className="bg-white rounded-2xl shadow-md px-6 pt-10 pb-6 flex flex-col items-center text-center transform hover:scale-105 transition relative overflow-visible mb-8 md:mb-0">
        <div className="relative flex flex-col items-center -mt-20">
          <Image src="/card3.png" alt="Valuation" width={130} height={130} className="z-20 relative" />
          <Image src="/Profile Image Background.png" alt="Valuation Icon" width={200} height={200} className="-mt-20 z-10" />
        </div>
        <h3 className="text-lg font-bold text-black mt-3">Get Valuation</h3>
        <p className="text-sm text-gray-600 mt-2">
          Find your place with an immersive photo experience and the most
          listings, including things you won’t find anywhere else.
        </p>
        <button className="mt-5 px-6 py-2 bg-[#2b56b6] text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
          <Image src="/calculator.png" alt="Browse Icon" width={16} height={16} />
          BROWSE HOME
        </button>
      </div>

      {/* ------- Card 4 (New) ------- */}
      <div className="bg-white rounded-2xl shadow-md px-6 pt-10 pb-6 flex md:mt-10 flex-col items-center text-center transform hover:scale-105 transition relative overflow-visible mb-8 md:mb-0">
        <div className="relative flex flex-col items-center -mt-24">
          <Image src="/card4.png" alt="Tour" width={150} height={150} className="z-20 relative" />
          <Image src="/Profile Image Background.png" alt="Tour Icon" width={200} height={200} className="-mt-20 z-10" />
        </div>
        <h3 className="text-lg font-bold text-black mt-3">Get a Rent</h3>
        <p className="text-sm text-gray-600 mt-2">
          Explore homes virtually with 3D tours and video walkthroughs,
          all from the comfort of your device.
        </p>
        <button className="mt-4 px-6 py-2 bg-[#2b56b6] text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
          <Image src="/calculator.png" alt="Start Tour" width={16} height={16} />
          START TOUR
        </button>
      </div>

      {/* ------- Card 5 (New) ------- */}
      <div className="bg-white rounded-2xl shadow-md px-6 pt-10 pb-6 md:mt-10 flex flex-col items-center text-center transform hover:scale-105 transition relative overflow-visible mb-8 md:mb-0">
        <div className="relative flex flex-col items-center -mt-23">
          <Image src="/card5.png" alt="Agent" width={120} height={120} className="z-20 relative" />
          <Image src="/Profile Image Background.png" alt="Agent Icon" width={200} height={200} className="-mt-20 z-10" />
        </div>
        <h3 className="text-lg font-bold text-black mt-3">Collaboration Made Easy</h3>
        <p className="text-sm text-gray-600 mt-2">
          Connect with top-rated local agents who know your market and
          help close the deal faster.
        </p>
        <button className="mt-5 px-6 py-2 bg-[#2b56b6] text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
          <Image src="/calculator.png" alt="Find Agent" width={16} height={16} />
          FIND AGENT
        </button>
      </div>

      {/* ------- Card 6 (New) ------- */}
      <div className="bg-white rounded-2xl shadow-md px-6 pt-10 pb-6 md:mt-10 flex flex-col items-center text-center transform hover:scale-105 transition relative overflow-visible mb-8 md:mb-0">
        <div className="relative flex flex-col items-center -mt-22">
          <Image src="/card6.png" alt="Loan" width={150} height={150} className="z-20 relative" />
          <Image src="/Profile Image Background.png" alt="Loan Icon" width={200} height={200} className="-mt-20 z-10" />
        </div>
        <h3 className="text-lg font-bold text-black mt-3">Upload Listing</h3>
        <p className="text-sm text-gray-600 mt-2">
          Get pre-approved and compare mortgage options with trusted
          lenders for your perfect plan.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#2b56b6] text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-blue-900 transition">
          <Image src="/calculator.png" alt="Loan Options" width={16} height={16} />
          VIEW LOANS
        </button>
      </div>
    </div>
  </div>

  {/* 🔻 Wavy Bottom (Flipped) */}
  <div className="absolute bottom-0 left-0 w-full z-10 rotate-180">
    <svg viewBox="0 0 1440 200" className="w-full h-[200px] hidden md:block" preserveAspectRatio="none">
      <path fill="white" d="M0,0 L950,80 L1440,0 L1440,0 Z" />
      <path
        d="M0,0 L950,80 L1440,0"
        stroke="white"
        strokeWidth="4"
        fill="none"
        style={{ transform: "translateY(9px)" }}
      />
    </svg>

    <svg viewBox="0 0 390 100" className="w-full h-[100px] block md:hidden" preserveAspectRatio="none">
      <path fill="white" d="M0,0 L300,80 L390,0 L390,0 Z" />
      <path
        d="M0,0 L300,80 L390,0"
        stroke="white"
        strokeWidth="4"
        fill="none"
        style={{ transform: "translateY(9px)" }}
      />
    </svg>
  </div>
</div>


      {/* ----------------------------------------------------------------------------------------------------------------------------------- */}
      {/* 🔹 Heading + Paragraph + Image Buttons */}
      <div className="px-4 md:px-12 mt-20 md:mt-[120px]">
        {/* 🔹 Heading */}
        <h3 className="text-[31px] md:text-5xl tracking-normal text-left md:ml-[120px]">
          <span className="text-black font-extrabold">Discover</span>{" "}
          <span className="text-[#2b56b6] font-extrabold">Previous Places</span>
        </h3>

        {/* 🔹 Paragraph */}
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl text-left md:ml-[120px]">
          Duis vel interdum elit. Vivamus vel risus est. Integer a porta Quisque
          nisi felis, tincidunt cursus efficitur at.
        </p>

        {/* 🔹 Buttons */}
        <div className="mt-[-90px] md:mt-[-93px] flex justify-end mr-4 md:mr-[120px]">
          <button>
            <Image
              src="/Back Button.png"
              alt="Button 1"
              width={60}
              height={60}
              className="w-[60px] h-[60px] object-contain cursor-pointer hover:scale-105 transition-transform"
            />
          </button>
          <button>
            <Image
              src="/Next Button.png"
              alt="Button 2"
              width={60}
              height={60}
              className="w-[60px] h-[60px] object-contain cursor-pointer hover:scale-105 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* 🔹 Property Cards Section */}
      <section className="px-4 md:px-12 mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 gap-x-4 max-w-7xl w-full mt-[10px] md:mt-[50px]">
          {cardData.map((item, index) => (
            <Link key={index} href="/Selling">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
                {/* 🔹 Image */}
                <Image
                  src={item.image}
                  alt="Property"
                  width={500}
                  height={150}
                  className="object-contain h-full w-[110%] rounded-2xl"
                />

                {/* 🔹 Card Content */}
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-extrabold text-black">
                      {item.price}
                    </p>

                    {/* ❤️ Like Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // prevent Link click
                        toggleLike(index);
                      }}
                      className="rounded-full"
                    >
                      <Image
                        src={
                          likedStates[index]
                            ? "/Heart buttion.svg"
                            : "/Heart buttion icon.svg"
                        }
                        alt="like"
                        width={20}
                        height={20}
                        className="w-10 h-10 transition-all duration-200"
                      />
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 -mt-2">{item.owner}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {/* Type (e.g., 4BHK) */}
                    <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                      <span className="text-[#2b56b6]">
                        {item.type.match(/^\d+/)}
                      </span>
                      {item.type.replace(/^\d+/, "")}
                    </span>

                    {/* Bath (e.g., 2 Bath) */}
                    <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                      <span className="text-[#2b56b6]">
                        {item.bath.match(/^\d+/)}
                      </span>
                      {item.bath.replace(/^\d+/, "")}
                    </span>

                    {/* Area (e.g., 2400 sqft) */}
                    <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                      <span className="text-[#2b56b6]">
                        {item.area.match(/^\d+/)}
                      </span>
                      {item.area.replace(/^\d+/, "")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-600">
                    <Image
                      src="/Locationcard.png"
                      alt="location"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span>{item.address}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
