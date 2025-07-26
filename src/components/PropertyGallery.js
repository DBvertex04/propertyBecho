// components/PropertyGallery.js

import React, { useState } from 'react';
import Image from 'next/image';

const PropertyGallery = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };

    const maxThumbnails = 5;
    const displayedThumbnails = images.slice(0, maxThumbnails);
    const remainingImagesCount = images.length - maxThumbnails;

    return (
        <div className="w-full  bg-white  ">

            <div className="relative w-full h-[450px] overflow-hidden rounded-[30px]">
                <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute top-5 left-2 bg-green-500 text-white text-base font-semibold px-5 py-2 rounded-full shadow-lg">
                    For sale by owner
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                    {displayedThumbnails.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-4 bg-white' : 'w-2 bg-white/70 hover:bg-white'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* --- MODIFIED LINE BELOW --- */}


<div className="mt-4 flex justify-center items-center gap-2">
    {displayedThumbnails.map((image, index) => (
        <div
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className="relative cursor-pointer group" 
        >
            <div
                className={`w-[65px] h-[75px] overflow-hidden border-2 transition-all duration-300 ${
                    index % 2 === 0 ? 'thumbnail-shape-even' : 'thumbnail-shape-odd'
                } ${
                    activeIndex === index
                        ? 'border-blue-500 scale-105'
                        : 'border-transparent hover:border-gray-300'
                }`}
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                />
            </div>

            {index === maxThumbnails - 1 && remainingImagesCount > 0 && (
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-xl transition-opacity duration-300"
                >
                    <span className="text-white text-[16px] font-bold">{remainingImagesCount + 10}+</span>
                </div>
            )}
        </div>
    ))}
</div>

        </div>
    );
};

export default PropertyGallery;