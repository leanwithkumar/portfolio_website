import React from "react";

export default function Blogcard2() {
  return (
<div className="relative w-[300px] min-h-[400px] rounded-2xl overflow-hidden group shadow-lg border border-slate-700 mx-auto">
      
     
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/be/b3/81/beb381d02d98a24b7a3b85f02c5b7527.jpg')`,
        }}
      ></div>

      
      <div className="absolute inset-0 bg-[#0f172a]/80"></div>

      <div className="relative z-10 text-white p-6 h-full flex flex-col justify-between">
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="bg-[#1e293b] text-sm px-3 py-1 rounded-full text-slate-300"># Backend</span>
          <span className="bg-[#1e293b] text-sm px-3 py-1 rounded-full text-slate-300"># Server</span>
        </div>

        <h3 className="text-lg font-semibold leading-snug hover:underline cursor-pointer mb-2">
How web talks from scratch?        </h3>

        <div className="text-sm text-slate-400 mb-3">
          July 23, 2025
        </div>

        <p className="text-sm pt-20 text-slate-300 mb-6">
          What actually an API is?
          Application Programming Interface?Yes that’s correct..
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
