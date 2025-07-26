// फ़ाइल: components/OwnerProfileCard.js

import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const OwnerProfileCard = ({ owner }) => {
  return (
    <div>
      <h2 className="text-[24px] font-bold mb- text-[#121828]">
        Owned <span className="text-[#2450A0] text-[24px]">by</span>
      </h2>

      <div className="relative bg-white rounded-2xl shadow-lg p-6 pt-12">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 -top-2 -left-2 w-[112px] h-[112px] border-l-4 border-t-4 border-b-4 border-gray-100 rounded-full"></div>
          
          <Image
  src={owner.image}
  alt={owner.name}
  width={96}
  height={96}
  className="rounded-full object-cover border-4 border-white relative z-10"
/>

        </div>

        <div className="flex flex-col items-end gap-3 mb-6">
          <div className="w-full sm:w-auto flex items-center gap-3 bg-gray-100/70 py-2.5 px-4 rounded-full">
            <PhoneIcon className="h-5 w-5 text-gray-700" />
            <span className="text-[#20202099] text-[14px] font-medium">{owner.phone}</span>
          </div>
          <div className="w-full sm:w-auto flex items-center gap-3 bg-gray-100/70 py-2.5 px-4 rounded-full">
            <EnvelopeIcon className="h-5 w-5 text-gray-700" />
            <span className="text-[#20202099] text-[14px] font-medium">{owner.email}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-[18px] font-bold text-[#000000]">{owner.name}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <p className="text-[#20202099] text-[14px]">{owner.location}</p>
            </div>
          </div>
          <button className="w-full sm:w-auto bg-[#2450A0] hover:bg-blue-700 text-white text-[14px] font-bold py-3 px-6 rounded-full transition-colors">
            SEE PROFILE
          </button>
        </div>

      </div>
    </div>
  );
};

export default OwnerProfileCard;