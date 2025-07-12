import Rocket from '../svgfiles/Rocket';
import Book24 from "../svgfiles/Book24";
import CoffeeHot from "../svgfiles/CofeeHot";
import CpuLineDuotone from "../svgfiles/CpuLineDuotone";
import Home10 from "../svgfiles/Home10";
import ProfileLight from "../svgfiles/Profilelight";
import Link from "next/link";

export default function Smallheader() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 px-2 py-3 rounded-lg shadow-md">
        <Link href="/" className="p-2">
          <Home10 size={28} className="text-current" />
        </Link>

        <Link href="/Dashboard" className="p-2">
          <CpuLineDuotone size={28} className="text-current" />
        </Link>

        <Link href="/Projects" className="p-2">
          <CoffeeHot size={28} className="text-current" />
        </Link>

        <Link href="/Blogs" className="p-2">
          <Book24 size={28} className="text-current" />
        </Link>

        <Link href="/About" className="p-2">
          <ProfileLight size={28} className="text-current" />
        </Link>

        <Link href="/Contact" className="p-2">
          <Rocket size={28} className="text-current" />
        </Link>
      </div>
    </div>
  );
}
