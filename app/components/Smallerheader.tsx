import Rocket from '../svgfiles/Rocket';
import Book24 from "../svgfiles/Book24";
import CoffeeHot from "../svgfiles/CofeeHot";
import CpuLineDuotone from "../svgfiles/CpuLineDuotone";
import Home10 from "../svgfiles/Home10";
import ProfileLight from "../svgfiles/Profilelight";
import Link from "next/link";

export default function Smallheader(){
    return(
        <>
    <div>
    <div>
    <div className="flex justify-evenly">

    <div className="px-2">
    <Link href="/">
    <Home10 size={30} className="text-current" />
    </Link>
    </div>





    <div className="px-2">
    <Link href="/Dashboard">
    <CpuLineDuotone size={35} className="text-current" />
    </Link>
    </div>



    <div className="px-2">
    <Link href="/Projects">
    <CoffeeHot size={35} className="text-current" />
    </Link>

    </div>



        <div className="px-2">
            <Link href="/Blogs">
        <Book24 size={35} className="text-current" />
    </Link>
    </div>

        <div className="px-2">
        <Link href="/About">
        <ProfileLight size={35} className="text-current" />
       </Link>

        </div>


   

    <div className="px-2 pt-1">
        <Link href="/Contact">
        <Rocket size={30} className="text-current" />
    </Link>

    </div>

    

    

    
    
                </div>
            </div>
        </div>
        </>
    )
}