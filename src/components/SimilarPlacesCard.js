import { HeartIcon, ArrowLeftIcon, ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/solid';

function SimilarPlacesCard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[24px] text-[#121828] font-bold">Discover <span className="text-[#2450A0] text-[24px]">Similar Places</span></h2>
          <p className="text-gray-500 text-sm max-w-md mt-1">
            Duis vel interdum elit. Vivamus vel risus est. Integer a porta Quisque nisi felis, tincidunt cursus efficitur at.
          </p>
        </div>
        <div className="space-x-3 hidden md:flex">
          <button className="p-2 rounded-md bg-white border shadow">
            <ArrowLeftIcon className="w-5 h-5 text-blue-600" />
          </button>
          <button className="p-2 rounded-md bg-blue-600 shadow">
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md p-4 md:flex md:items-start md:space-x-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/similarsection.png"
            alt="house"
            className="rounded-xl w-full md:w-64 h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-4 md:mt-0 flex-1 relative">
          <h3 className="text-lg text-[16px] font-bold text-[#0A0909]">$280,000</h3>
          <p className="text-[12px] text-[#000104CC] mb-3">By Owner</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <InfoBadge text="2 BHK" />
            <InfoBadge text="2 BA" />
            <InfoBadge text="24 sqft" />
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <MapPinIcon className="w-4 h-4 mr-1 text-[10px] text-[#0A090999]" />
            1030 Spruce St, Aurora, IL, 60506
          </div>

          {/* Heart Icon */}
          <button className="absolute top-0 right-0">
            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Badge Component
function InfoBadge({ text }) {
  return (
    <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-blue-700 font-medium">
      {text}
    </span>
  );
}

export { SimilarPlacesCard };
