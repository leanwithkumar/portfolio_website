// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Smallheader from "./components/Smallerheader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhay's Portfolio",
  description: "all copyrights @ leanwithkumar",
   icons: {
    icon: "favicon.ico", // or /custom-icon.png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#090909] text-[#a7a7a7] overflow-x-hidden">
        <div className="px-4 sm:px-6 md:px-20 lg:px-20 max-w-screen-xl mx-auto min-h-screen flex flex-col">
          
          {/* Smallheader for mobile */}
          <div className="block lg:hidden text-center font-semibold text-white rounded-lg py-5">
            <Smallheader />
          </div>

          {/* Main layout */}
          <div className="flex flex-col lg:flex-row gap-8 flex-1">
            
            {/* Sidebar */}
            <div className="hidden lg:block w-full lg:w-1/3 sticky top-0 h-fit overflow-hidden">
  <Header />
</div>

            {/* Scrollable main content */}
            <div className="w-full lg:w-2/3 overflow-y-auto hide-scrollbar md:py-10 px-5 pb-5">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
