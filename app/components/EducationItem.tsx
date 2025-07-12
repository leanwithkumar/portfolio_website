'use client';

import Image from 'next/image';

interface EducationItemProps {
  logoSrc: string;
  university: string;
  degree: string;
  field: string;
  years: string;
  location: string;
}

export default function EducationItem({
  logoSrc,
  university,
  degree,
  field,
  years,
  location,
}: EducationItemProps) {
  return (
    <div className="bg-[#1f1f1f] rounded-xl p-4 flex items-start gap-4 text-white max-w-3xl mx-auto shadow-sm hover:shadow-md transition-shadow">
      {/* Logo */}
      <div className="min-w-[50px]">
        <Image
          src={logoSrc}
          alt={`${university} logo`}
          width={50}
          height={50}
          className="rounded-md object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 text-sm">
        <h3 className="text-base font-semibold">{university}</h3>
        <p className="text-gray-300">
          {degree} &bull; {field}
        </p>
        <p className="text-gray-400 text-xs">
          {years} &bull; <span className="text-gray-300">{location}</span>
        </p>
      </div>
    </div>
  );
}
