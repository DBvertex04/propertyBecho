// app/page.js

"use client";
import Head from 'next/head';
import Image from "next/image";
import Header2 from "@/components/Header2";
import PropertyInfoBar from "@/components/PropertyInfoBar";
import LocationMap from "@/components/LocationMap";
import MainFeatures from '@/components/MainFeatures';
import OwnerProfileCard from '@/components/OwnerProfileCard';
import ApartmentCard from "@/components/ApartmentCard";
import Footer from "@/components/Footer";
import PropertyGallery from '@/components/PropertyGallery';
import ApartmentCardWeb from '@/components/ApartmentCard';
import PropertyCard from '@/components/PropertyCard';
import { FactsSection } from '@/components/FactsSection';
import { SimilarPlacesCard } from '@/components/SimilarPlacesCard';
// import PropertyDetails from '@/components/PropertyDetails'
import PropertyDetail from '@/components/PropertyDetails';
import DetailedPropertyLayout from '@/components/DetailedPropertyLayout';

export default function Home() {
  const propertyDetails = {
    price: 280000,
    likes: 25,
    bhk: 2,
    bath: 2,
    sqft: 2400,
    address: '1030 Spruce St, Aurora, IL, 60506',
  };
  const propertyImages = [
    { id: 1, src: '/gallery.png', alt: 'Front view of the house' },
    { id: 2, src: '/banner.png', alt: 'Living room with modern furniture' },
    { id: 3, src: '/41497508918e9a1de58f8ba85966f963cc79f00a.png', alt: 'Another view of the living room' },
    { id: 4, src: '/41497508918e9a1de58f8ba85966f963cc79f00a.png', alt: 'Side view of the house with driveway' },
    { id: 5, src: '/41497508918e9a1de58f8ba85966f963cc79f00a.png', alt: 'Modern kitchen with white cabinets' },
    { id: 6, src: '/41497508918e9a1de58f8ba85966f963cc79f00a.png', alt: 'Cozy bedroom' },
    { id: 7, src: '/41497508918e9a1de58f8ba85966f963cc79f00a.png', alt: 'Clean bathroom' },
  ];

  const locationData = {
    title: '4BHK Home and XYZ Here Will Come',
    listedDate: '06/01/2000',
    mapImageSrc: '/newmap.png'
  };

  const ownerData = {
    name: 'Josef Jorden',
    location: 'Aurora, IL',
    phone: '+91 9292989798',
    email: 'shop@gmail.com',
    image: '/femailowner.jpg'
  };
  const data = [
    { address: "21301 Sw 376 St, Florida City FL", city: "Florida City", state: "FL", location: "Aurora, IL", size: "102 057 Sq Ft", bedrooms: "2 Bedrooms", imgSrc: "/property.png", },
    { address: "21301 Sw 376 St, Florida City FL", city: "Florida City", state: "FL", location: "Aurora, IL", size: "102 057 Sq Ft", bedrooms: "2 Bedrooms", imgSrc: "/property.png", },
    { address: "21301 Sw 376 St, Florida City FL", city: "Florida City", state: "FL", location: "Aurora, IL", size: "102 057 Sq Ft", bedrooms: "2 Bedrooms", imgSrc: "/property.png", },
  ];
  const sampleOwner = {
  name: 'John Doe',
  image: 'https://randomuser.me/api/portraits/men/32.jpg', // Example image URL
  phone: '+1 234 567 890',
  email: 'john.doe@example.com',
  location: 'New York, USA',
};

const sampleApartment = {
  name: 'Ilahi Apartment',
  image: '/apartment.png', // Make sure this image is in your public folder
  location: 'Aurora, IL',
  features: {
    bhk: 2,
    bathrooms: 4,
    showers: 4,
    area: 24,
  },
};

  return (
    <div className=" bg-white font-nunito text-gray-900 bg-gray-50 min-h-screen">
      
      {/* Container for Header and Gallery */}
      <div className=" relative container mx-auto px-4 pt-35 md:pt-32">
        {/* Header will float over the gallery */}
        <Header2 />
        <div className='mt-8'>
        {/* Gallery is the base of this section */}
        <PropertyGallery images={propertyImages} />
      </div>

      <div className="max-w-7xl mx-auto px-4"></div>
      {/* The rest of the page content follows normally */}
      <main className="container mx-auto px-4 pt-8 pb-12 py-4 ">
        <div className="mb-12 px-4 py-4 max-w-7xl ">
          <PropertyInfoBar property={propertyDetails} />
        </div>
        <div className="mb-12 max-w-7xl mx-auto">
          <LocationMap
            title={locationData.title}
            listedDate={locationData.listedDate}
            mapImageSrc={locationData.mapImageSrc}
          />
        </div>
        <div className="mb-12 max-w-7xl mx-auto">
          <MainFeatures />
        </div>
          <div className="bg-white max-w-7xl mx-auto ">
      <PropertyDetail owner={sampleOwner} apartment={sampleApartment} />
    </div>
        {/* <div className="mb-12">
          <OwnerProfileCard owner={ownerData} />
        </div>
        <ApartmentCardWeb /> */}
        {/* <div className="   bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-[24px] px-6 py-5 text-[#121828]" style={{ fontFamily: '"Nunito Sans"' }}>Properties in same <span className="text-[#2450A0] text-[24px]" style={{ fontFamily: '"Nunito Sans"' }}>Apartments</span></h2>
          {data.map((property, idx) => (
            <PropertyCard key={idx} {...property} />
          ))}
        </div>
        <FactsSection />
        <SimilarPlacesCard /> */}
         <div>
      {/* Other components on your page can go here */}
      <div className="bg-gray-50 max-w-7xl mx-auto ">
      <DetailedPropertyLayout propertiesData={data} />


      </div>
      
      
      {/* Other components can go here */}
    </div>
      </main>

      <div className="mb-12">
        <Footer />
      </div>
    </div>
    </div>
  );
}