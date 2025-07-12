'use client';
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaLinux,
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiVercel, SiCplusplus, SiShadcnui, SiStorybook, SiFirebase,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

// ✅ Tech stack with correct icons
const techs = [
  { label: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { label: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { label: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { label: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { label: 'React', icon: <FaReact className="text-cyan-400" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { label: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { label: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { label: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { label: 'ShadCN', icon: <SiShadcnui className="text-violet-400" /> },
  { label: 'Acrenity UI', icon: <SiShadcnui className="text-pink-300" /> }, // placeholder icon
  { label: 'Vercel', icon: <SiVercel className="text-white" /> },
  { label: 'C++', icon: <SiCplusplus className="text-blue-300" /> },
  { label: 'C', icon: <TbBrandCpp className="text-gray-300" /> },
  { label: 'GitHub', icon: <FaGithub className="text-white" /> },
  { label: 'Linux', icon: <FaLinux className="text-orange-400" /> },
  { label: 'Storybook', icon: <SiStorybook className="text-orange-300" /> },
  { label: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
];

function MarqueeRow({ reverse = false, speed = 45 }: { reverse?: boolean; speed?: number }) {
  return (
    <div className="relative overflow-hidden">
      {/* Left and right blur fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f0f0f] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f0f0f] to-transparent z-20" />

      <div
        className={`animate-marquee ${reverse ? 'reverse' : ''} flex gap-4 w-max py-2`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...techs, ...techs].map((tech, i) => (
          <div
            key={`${tech.label}-${i}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-[#1a1a1a] text-white text-sm whitespace-nowrap hover:bg-[#2c2c2c] transition-colors duration-300"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="font-medium">{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechCarousel() {
  return (
    <div className="space-y-3">
      <MarqueeRow speed={30} />
      <MarqueeRow reverse speed={40} />
      <MarqueeRow speed={30} />
    </div>
  );
}
