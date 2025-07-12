import React from "react";
import Image from "next/image";

interface CollaborationCardProps {
  title: string;
  tags: string[];
  description: string;
  image: string;
}

export default function CollaborationCard({
  title,
  tags,
  description,
  image,
}: CollaborationCardProps) {
  return (
    <div className="relative bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-md w-[300px] sm:w-[340px] md:w-[360px] h-[450px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority // <--- this helps preload the image
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover opacity-80"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 p-4 flex flex-col h-full justify-end bg-gradient-to-t from-black via-black/60 to-transparent text-white">
        {/* Tags */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-[#2a2a2a] rounded-full px-3 py-1 text-white"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-200 line-clamp-6">{description}</p>
      </div>
    </div>
  );
}
