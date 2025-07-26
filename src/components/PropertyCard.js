import { MapPinIcon } from '@heroicons/react/24/solid'; // ✅ v2 correct import

function PropertyCard({ address, city, state, location, size, bedrooms, imgSrc }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 p-6 border-b border-gray-300 items-center">
      <img 
        src={imgSrc} 
        alt="property" 
        className="w-full sm:w-32 h-32 rounded-lg object-cover flex-shrink-0" 
      />
      <div>
        <p className="font-semibold text-base">{address}, {city} {state}</p>
        <p className="flex items-center text-gray-500 text-sm mt-1">
          <MapPinIcon className="h-5 w-5 mr-2" />  {/* v2 icon */}
          {location}
        </p>
        <p className="text-blue-600 text-sm mt-1">{size}</p>
        <p className="text-gray-400 text-sm mt-1">{bedrooms}</p>
      </div>
    </div>
  );
}

// export { PropertyCard };

export default  PropertyCard;

