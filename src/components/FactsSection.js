import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

function SectionToggle({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer px-4"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {open ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        )}
      </div>
      {open && (
        <div className="mt-4 px-4">
          {children}
        </div>
      )}
    </div>
  );
}

export function FactsSection() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-10">
      {/* Interior Section */}
      <div className="mb-6">
        <h2 className="text-[#2450A0] font-bold text-[24px] mb-2">Facts & features :</h2>
        <p className="font-semibold text-[24px] text-[24px] mb-2">Interior</p>
        <div className="bg-white rounded-xl shadow-sm">
          <SectionToggle title="Bedrooms & bathrooms">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Badge label="Bedrooms: 2" />
              <Badge label="Bathrooms: 1" />
              <Badge label="Full bathrooms: 1" />
            </div>
          </SectionToggle>
          <SectionToggle title="Dining room" />
          <SectionToggle title="Living room" />
        </div>
      </div>

      {/* Construction Section */}
      <div className="mb-6">
        <h2 className="text-[#2450A0] font-bold text-[24px] mb-2">Facts & features :</h2>
        <p className="text-[#2450A0] font-bold text-[24px] mb-2">Construction</p>
        <div className="bg-white rounded-xl shadow-sm">
          <SectionToggle title="Materials" />
          <SectionToggle title="Year Built" />
        </div>
      </div>

      {/* Property Section */}
      <div className="mb-6">
        <h2 className="text-[#2450A0] font-bold text-[24px] mb-2">Facts & features :</h2>
        <p className="text-[#2450A0] font-bold text-[24px] mb-2">Property</p>
        <div className="bg-white rounded-xl shadow-sm">
          <SectionToggle title="Lot Size" />
          <SectionToggle title="Type" />
        </div>
      </div>
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-800">
      <CheckCircleIcon className="h-5 w-5 text-green-600" />
      {label}
    </span>
  );
}
