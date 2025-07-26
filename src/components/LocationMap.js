// फ़ाइल: components/LocationMap.js

import Image from 'next/image';

const LocationMap = ({ title, listedDate, mapImageSrc }) => {
  return (
    <div>
      <h2 className=" bg-white text-3xl text-[24px] font-bold text-[#121828] mb-2" style={{ fontFamily: '"Open Sans", "Nunito Sans", sans-serif' }}>
        {title}
      </h2>

      <p className="text-[#0A0909A6] text-[14px] mb-6">
        Property listed on <span className="font-semibold text-blue-600">{listedDate}</span>
      </p>

      <div className="relative w-full h-70">
  <Image
    src={mapImageSrc}
    alt="Property location on map"
    fill
    className="object-cover rounded-2xl  rounded-[20px]"
  />
</div>
    </div>
  );
};

export default LocationMap;