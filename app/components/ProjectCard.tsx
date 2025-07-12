import React from "react";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-[#181818] rounded-2xl p-4 md:p-6 text-white shadow-lg max-w-xl mx-auto">
      
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src="/juniorme.png"
          alt="Project preview"
          width={900}
          height={400}
          className="w-full object-cover rounded-xl"
        />
       
      </div>

      
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Junior Me </h3>
        <p className="text-sm text-gray-400 mt-1">
          A place where electronics undergrands can get there resources.
        </p>
      </div>

      
      <div className="flex flex-wrap gap-4 mt-4 text-white text-xl">
        <Image src="/react.svg" alt="React" width={24} height={24} />
        <Image src="/javascript.svg" alt="React" width={24} height={24} />
        <Image src="/tailwind.svg" alt="Tailwind" width={24} height={24} />
      </div>
    </div>
  );
}
