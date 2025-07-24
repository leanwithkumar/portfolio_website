import Link from "next/link";
import Blogcard from "../components/Blogcad";
import TechCarousel from "../components/TechCarousel";
import Rocket from "../svgfiles/Rocket";
import Image from "next/image";
import Blogcard2 from "../components/Blogcard2";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

export default function Home() {
  return (
    <>
    <FadeInWhenVisible delay={0.1}>
      <div>
       
        <div className="border-b sm:py-5">
          <div className="text-3xl font-medium text-white flex">
            Hi, I&apos;m Abhay <div className="px-3  "><Image src="/handyyy.svg" alt="React" width={38} height={38} className=""/>
            </div> 
          </div>
          <div className="flex pt-2">
            <div className="pr-5">• Based in Bokaro, India</div>
            <div>• Working remotely</div>
          </div>
          <div className="py-5">
            Seasoned Software Engineer especially in Web Development, with a
            passion for creating pixel-perfect web experiences. I work with
            JavaScript and specialize in all-things web. I thrive on
            collaborating with teams to deliver efficient, scalable, and
            visually appealing web applications.
          </div>
        </div>

       
        <div className="border-b py-5">
          <div className="py-5 text-2xl">Latest Article</div>
          <div className="flex flex-wrap">
        
            <div className="w-full lg:w-1/2 pr-2 mb-4">
            <a
              href="https://medium.com/@leanwithkumar/node-a-runtime-environment-82e153c66864"
              target="_blank"
              rel="noopener noreferrer"> 
              <Blogcard />
              </a>
              </div>




        <div className="w-full lg:w-1/2 pr-2 mb-4 hidden lg:block">
            <a
            href="https://medium.com/@leanwithkumar/api-api-api-1967f1ca9e13"
            target="_blank"
            rel="noopener noreferrer">
            <Blogcard2 />
            </a>
            </div>
          </div>
        </div>

       
        




        <div className="py-5 border-b">
          <TechCarousel />
        </div>

        
        <div>
          <div className="py-5 text-2xl">What I have been working on</div>
          <div>
            I assist brands, companies, institutions, and startups in creating
            exceptional digital experiences for their businesses through
            strategic development services.
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-5 border-b">
          <div>
            <div className="bg-[#404040] rounded-xl overflow-hidden text-white">
              <div className=" p-5">
                <div className="flex items-center py-2 px-4 h-12 rounded-md transition-colors duration-300 cursor-pointer">
                  <Rocket size={20} className="text-current" />
                  <span className="px-3 text-2xl">Let&apos;s work together!</span>
                </div>
                <div className="px-5">
                 I&apos;m open for freelance projects, feel free to email me to see how can we collaborate.
                </div>
                <div className="px-5 hover:underline">
                  <Link href="/Contact">Contact Me</Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </FadeInWhenVisible>


   
      
    </>
  );
}
