"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalCard() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleCardClick = () => {
    const openCal = document.querySelector("[data-cal-link]");
    if (openCal) (openCal as HTMLElement).click();
  };

  return (
    <div className="py-5 border-b">
      <div
        onClick={handleCardClick}
        className="cursor-pointer w-full max-w-3xl mx-auto bg-gradient-to-r from-[#0b4b4d] to-[#064e3b] border border-teal-500 rounded-xl p-6 text-white flex justify-between items-center transition-transform duration-300 hover:scale-[0.95]"
      >
        {/* Left content */}
        <div>
          <h3 className="text-lg font-semibold">1 on 1 Chit-chat Session</h3>
          <p className="text-sm text-gray-300 mt-1">
            Let&apos;s find some time to talk about anything
          </p>
          <div className="flex gap-6 items-center text-sm text-gray-300 mt-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 7a1 1 0 0 1 1 1v4h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
                <path
                  fillRule="evenodd"
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"
                />
              </svg>
              30 Minutes
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4.5l4 4v-11l-4 4z" />
              </svg>
              Google Meet
            </span>
          </div>
        </div>

        {/* Visible calendar icon */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click from triggering twice
            handleCardClick();
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-400 hover:bg-teal-700 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 text-teal-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M8 7V3M16 7V3M4 11h16M5 20h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z" />
          </svg>
        </button>

        {/* Hidden button to trigger Cal.com */}
        <button
          style={{ display: "none" }}
          data-cal-namespace="30min"
          data-cal-link="abhay-kumar-xhjnng/30min"
          data-cal-config='{"layout":"month_view"}'
        ></button>
      </div>
    </div>
  );
}
