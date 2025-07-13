import Image from 'next/image';
import Home10 from '../svgfiles/Home10';
import CpuLineDuotone from '../svgfiles/CpuLineDuotone';
import CoffeeHot from '../svgfiles/CofeeHot';
import Book24 from '../svgfiles/Book24';
import ProfileLight from '../svgfiles/Profilelight';
import Rocket from '../svgfiles/Rocket';
import Link from 'next/link';

export default function Header() {
  return (
    <>

     <span>
        <div className='pt-20'>
        <div className=' px-10 '>

        <div>
    <Image
  src="/myphoto.JPG"
  alt="My Profile Photo"
  width={100}
  height={100}
  priority
  className="rounded-full object-cover aspect-square"
/>
        </div>
        <div className='text-2xl py-1 flex'>
            Abhay kumar 
   <Image
  src="/verified.png"
  alt="Verified Badge"
  width={30}
  height={30}
  className="mx-2"
  style={{ height: "auto", width: "auto" }}
/>
        </div>
        <div className='text-xl'>
            @leanwithkumar
        </div>
            
        </div>
        <div className="h-full">
        <div className="p-5">
    
    <Link href="/">
        <div className="flex items-center py-2 px-4 h-12 hover:bg-[#404040] rounded-md transition-colors duration-300 cursor-pointer">
        <Home10 size={20} className="text-current" />
        <span className="px-3 text-gray-200 hover:text-white">Home</span>
        </div>
    </Link>

    <Link href="/Dashboard">
        <div className="flex items-center py-2 px-4 h-12 hover:bg-[#404040] rounded-md transition-colors duration-300 cursor-pointer">
        <CpuLineDuotone size={20} className="text-current" />
        <span className="px-3 text-gray-200 hover:text-white">Dashboard</span>
        </div>
    </Link>

    <Link href="/Projects">
        <div className="flex items-center py-2 px-4 h-12 hover:bg-[#404040] rounded-md transition-colors duration-300 cursor-pointer">
        <CoffeeHot size={20} className="text-current" />
        <span className="px-3 text-gray-200 hover:text-white">Project</span>
        </div>
    </Link>

    <Link href="/Blogs">
         <div className="flex items-center py-2 px-4 h-12 hover:bg-[#404040] rounded-md transition-colors duration-300 cursor-pointer">
        <Book24 size={20} className="text-current" />
        <span className="px-3 text-gray-200 hover:text-white">Blogs</span>
        </div>
    </Link>

    <Link href="/About">
        <div className="flex items-center py-2 px-4 h-12 hover:bg-[#404040] rounded-md transition-colors duration-300 cursor-pointer">
        <ProfileLight size={20} className="text-current" />
        <span className="px-3 text-gray-200 hover:text-white">About</span>
        </div>
    </Link>
    <Link href="/Contact">
        <div className="flex items-center py-2 px-4 h-12 hover:bg-[#404040] rounded-md transition-colors duration-300 cursor-pointer">
        <Rocket size={20} className="text-current" />
        <span className="px-3 text-gray-200 hover:text-white">Contact</span>
        </div>
    </Link>

  </div>
</div>



</div>
        
        
    
 </span>


    </>
   
  );
}