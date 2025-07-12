import React from "react";

export default function Blogcard() {
  return (
    <div className="relative w-[320px] min-h-[400px] rounded-2xl overflow-hidden group shadow-lg border border-slate-700">
      
     
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/c0/2d/67/c02d671205b3f9ca19c33d414e8b2d39.jpg')`,
        }}
      ></div>

      
      <div className="absolute inset-0 bg-[#0f172a]/80"></div>

      <div className="relative z-10 text-white p-6 h-full flex flex-col justify-between">
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="bg-[#1e293b] text-sm px-3 py-1 rounded-full text-slate-300"># Markdown</span>
          <span className="bg-[#1e293b] text-sm px-3 py-1 rounded-full text-slate-300"># Wordpress</span>
        </div>

        <h3 className="text-lg font-semibold leading-snug hover:underline cursor-pointer mb-2">
          How to Get Markdown Response from WordPress API
        </h3>

        <div className="text-sm text-slate-400 mb-3">
          March 16, 2024
        </div>

        <p className="text-sm pt-20 text-slate-300 mb-6">
          Integrating Markdown functionality into WordPress can significantly enhance your content creation...
        </p>

        
        <div className="flex justify-end">
          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-semibold text-white  px-4 py-2 rounded-full">
            READ
          </button>
        </div>
      </div>
    </div>
  );
}
