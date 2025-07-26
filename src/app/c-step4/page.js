"use client";

import Image from "next/image";
import Header2 from "@/components/Header2";
import Link from "next/link";
import { useState } from "react";

export default function Page4() {
  return (
    <div className="font-nunito text-gray-900 min-h-screen flex flex-col bg-white relative">
      {/* 🔹 Background Images Behind Header */}
      <div className="absolute top-0 right-0 z-0">
        {/* 🔸 Image 1 */}
        <Image
          src="/bubble.png" // 🔁 Replace with actual image path
          alt="BG Image 1"
          width={200}
          height={200}
          className="w-[150px] md:w-[400px] mt-[-90px] md:h-[250px]"
        />
        {/* 🔸 Image 2 Overlapping Image 1 */}
        <Image
          src="/bubble1.png" // 🔁 Replace with actual image path
          alt="BG Image 2"
          width={200}
          height={200}
          className="absolute top-0 right-0 w-[100px] md:w-[350px] mt-[-50px] md:h-[450px]"
        />
      </div>

      {/* 🔹 Header Overlapping both images */}
      <div className="relative z-10">
        <Header2 />
      </div>

      {/* 🔹 Main Content */}
      <main className="flex-1 px-4 md:px-8 lg:px-20 pt-4 pb-24 bg-white">
        <div className="mt-[120px] md:mt-[120px] text-left md:ml-[120px]">
          <h2 className="text-2xl md:text-4xl font-bold">
            Property <span className="text-[#2450A0]">Type</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-2 md:mt-3 mb-6 md:mb-10 max-w-2xl">
            Answer a few questions and get your no-obligation cash offer in as
            little as 3 minutes.
          </p>
        </div>

        {/* 🔹 Bottom Next Button */}
        <div className="relative w-full mt-10">
          <Link href="/c-step4">
            <Image
              src="/next.png"
              alt="Next"
              width={300}
              height={300}
              className="absolute mt-4 right-4 md:right-1/2 md:translate-x-1/2 md:left-auto cursor-pointer"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}

