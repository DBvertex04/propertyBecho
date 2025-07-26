"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function Property() {
  const [likedStates, setLikedStates] = useState([false, false, false, false]);
  const [sortOrder, setSortOrder] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState(""); // State for dynamic location

  const likedCount = likedStates.filter(Boolean).length;

  const toggleLike = (index) => {
    const updatedLikes = [...likedStates];
    updatedLikes[index] = !updatedLikes[index];
    setLikedStates(updatedLikes);
  };

  const filters = ["BHK", "Sqft.", "Ownertype"];

  const propertyData = [
    {
      price: "280000",
      ownerType: "By Owner",
      bhk: 2,
      bath: 2,
      sqft: 900,
      address: "1030 Spruce St, Aurora, IL",
      imageUrl: "/Card media container.png",
    },
    {
      price: "350000",
      ownerType: "By Dealer",
      bhk: 3,
      bath: 2,
      sqft: 1200,
      address: "221B Baker Street, London",
      imageUrl: "/Card media.png",
    },
    {
      price: "180000",
      ownerType: "By Owner",
      bhk: 1,
      bath: 1,
      sqft: 600,
      address: "742 Evergreen Terrace, Springfield",
      imageUrl: "/Card media container.png",
    },
    {
      price: "420000",
      ownerType: "By Dealer",
      bhk: 4,
      bath: 3,
      sqft: 1600,
      address: "1600 Pennsylvania Ave NW, DC",
      imageUrl: "/Card media.png",
    },
    {
      price: "310000",
      ownerType: "By Owner",
      bhk: 3,
      bath: 2,
      sqft: 1100,
      address: "12 Grimmauld Place, London",
      imageUrl: "/Card media container.png",
    },
    {
      price: "265000",
      ownerType: "By Dealer",
      bhk: 2,
      bath: 2,
      sqft: 950,
      address: "4 Privet Drive, Little Whinging",
      imageUrl: "/Card media.png",
    },
  ];

  const sortedData = [...propertyData].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="text-gray-900 min-h-screen flex flex-col">
      <Header2 />

      <div className="w-full md:w-6xl max-w-screen-xl mx-auto px-4 md:px-10 mt-35">
        {/* Mobile Header */}
        <div className="block md:hidden space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-white border border-gray-300 rounded-2xl md:px-7 px-3 py-2 shadow-sm">
              <Image
                src="/locationblue.png"
                alt="Location"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mx-2 text-black text-base bg-transparent outline-none"
              />

              <IoMdClose
                className="text-gray-400 text-sm cursor-pointer"
                onClick={() => setLocation("")}
              />
              <Image
                src="/global.png"
                alt="Globe"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
            <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center">
              <div className="bg-gray-100 w-10 h-10 rounded-2xl px-1 py-1 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-gray-800 leading-tight">
                  {likedCount.toString().padStart(2, "0")}
                </span>
                <FiHeart className="text-[#2b56b6] text-base mt-[2px]" />
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1">
              {filters.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1.5 bg-[#edf1fd] text-sm text-[#2b56b6] font-medium rounded-full flex-shrink-0"
                >
                  {item} <IoIosArrowDown />
                </div>
              ))}
            </div>
            <div className="relative">
              <div
                className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-33 md:w-48 flex items-center gap-2 shadow-sm cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded-2xl">
                  <p className="text-sm md:text-sm text-gray-700 whitespace-nowrap">
                    Sort by
                  </p>
                  <IoIosArrowDown className="text-gray-500 text-base ml-1" />
                </div>
                <Image
                  src="/arrow-swap.png"
                  alt="Swap"
                  width={16}
                  height={16}
                />
              </div>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                  <button
                    onClick={() => {
                      setSortOrder("asc");
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("desc");
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Price: High to Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:flex md:items-center md:justify-between gap-2 mt-4">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-4">
            <div className="flex items-center bg-white border border-gray-300 rounded-2xl px-4 py-2 shadow-sm flex-shrink-0">
              <Image
                src="/locationblue.png"
                alt="Location"
                width={20}
                height={20}
              />
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mx-2 text-black text-base bg-transparent outline-none"
              />

              <IoMdClose
                className="text-gray-400 text-sm cursor-pointer"
                onClick={() => setLocation("")}
              />
              <Image
                src="/global.png"
                alt="Globe"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
            {filters.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#edf1fd] text-sm text-[#2b56b6] font-medium rounded-full flex-shrink-0"
              >
                {item} <IoIosArrowDown />
              </div>
            ))}
          </div>

          <div className="relative flex items-center gap-3">
            <div
              className="bg-white border border-gray-300 rounded-2xl px-3 py-2 w-33 md:w-35 flex items-center gap-2 shadow-sm cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className="flex items-center bg-gray-100 px-2 py-1 rounded-2xl">
                <p className="text-sm md:text-sm text-gray-700 whitespace-nowrap">
                  Sort by
                </p>
                <IoIosArrowDown className="text-gray-500 text-base ml-1" />
              </div>
              <Image src="/arrow-swap.png" alt="Swap" width={16} height={16} />
            </div>
            {showDropdown && (
              <div className="absolute right-24 mt-12 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <button
                  onClick={() => {
                    setSortOrder("asc");
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    setSortOrder("desc");
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Price: High to Low
                </button>
              </div>
            )}
            <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded-2xl flex items-center justify-center">
              <div className="bg-gray-100 rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-gray-800 leading-tight">
                  {likedCount.toString().padStart(2, "0")}
                </span>
                {likedCount > 0 ? (
                  <FaHeart className="text-[#2450A0] text-base mt-[2px]" />
                ) : (
                  <FiHeart className="text-gray-400 text-base mt-[2px]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 py-10">
          {sortedData.map((property, index) => (
            <div
              key={index}
              className="bg-white w-[350px] md:w-[320px] rounded-lg shadow-lg overflow-hidden relative"
            >
              <div className="relative">
                <Image
                  src={property.imageUrl}
                  alt={`Property ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLike(index);
                  }}
                  className="rounded-full absolute mt-[5px] right-2"
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
              <div className="p-4 space-y-1">
                <h2 className="text-lg font-extrabold text-black">
                  ${parseInt(property.price).toLocaleString("en-US")}
                </h2>
                <p className="text-xs text-gray-600">{property.ownerType}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {/* BHK (e.g., 2 BHK) */}
                  <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                    <span className="text-[#2b56b6]">{property.bhk}</span> BHK
                  </span>
                  {/* Bath (e.g., 2 Bath) */}
                  <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                    <span className="text-[#2b56b6]">{property.bath}</span> Bath
                  </span>
                  {/* Area (e.g., 900 sqft) */}
                  <span className="bg-gray-100 px-2 py-1 rounded-2xl text-xs font-bold text-gray-700">
                    <span className="text-[#2b56b6]">{property.sqft}</span> sqft
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
                  <p className="text-sm text-gray-800 font-semibold">
                    {property.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      {/* Fixed Map Icon */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Link href="/map">
          <Image
            src="/mapview.png"
            alt="Navigate to List View"
            width={150}
            height={150}
            className="cursor-pointer w-32 md:w-40"
          />
        </Link>
      </div>
    </div>
  );
}
