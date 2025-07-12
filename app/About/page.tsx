'use client';

import { useState } from 'react';
import EducationItem from '../components/EducationItem';

export default function About() {
  const [activeTab, setActiveTab] = useState<'intro' | 'resume' | 'career' | 'education'>('intro');

  return (
    <>
      <div>
        <div>
          <div className="text-2xl text-white">About</div>
          <div className="border-b border-dashed py-5 text-white">
            An insightful glimpse into who I am because every detail adds depth to the canvas of life.
          </div>

          <div className="py-5">
            <div className="flex justify-evenly gap-4">
              <button
                onClick={() => setActiveTab('intro')}
                className={`bg-[#404040] px-10 py-2 rounded-md transition-all cursor-pointer flex-1 text-center hover:text-white `}
              >
                Intro
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className={`bg-[#404040] px-10 py-2 rounded-md transition-all cursor-pointer flex-1 text-center hover:text-white `}
              >
                Resume
              </button>
              <button
                onClick={() => setActiveTab('career')}
                className={`bg-[#404040] px-10 py-2 rounded-md transition-all cursor-pointer flex-1 text-center hover:text-white`}
              >
                Career
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`bg-[#404040] px-10 py-2 rounded-md transition-all cursor-pointer flex-1 text-center hover:text-white`}
              >
                Education
              </button>
            </div>
          </div>

          
          <div className="text-white">
            {activeTab === 'intro' && (
              <p>
                Hello! Thanks for stopping by my personal website.<br /><br />
                I&apos;m Abhay. I&apos;ve been working in web development for over a few months, doing both the coding you see on the screen (frontend) and the stuff that happens behind the scenes (backend). I know how to manage projects using methods like Waterfall and Agile. But what really gets me excited is making websites and apps that are easy for everyone to use and look good too!<br /><br />
                I&apos;m really into JavaScript and TypeScript, which are languages used to build websites. I also know a bunch of frameworks that make building websites even easier, like React, Next, Node.js, and Express frameworks like Codeigniter and Laravel. I love learning about new web tools and features.<br /><br />
                I believe that good communication is super important in any job.<br /><br />
                I&apos;m good at adapting to different situations, working efficiently, and always trying to do my best. My experience has taught me how to solve problems and lead teams, but I&apos;m also happy to work with others to get things done. I&apos;m excited about the chance to work together and make cool stuff!<br /><br />
                I&apos;m looking forward to the possibility of working with you!<br /><br />
                Best Regards,<br /><br />
                Abhay Kumar
              </p>
            )}

            {activeTab === 'resume' && <div>This is my resume.</div>}
            {activeTab === 'career' && <div>This is my career.</div>}


            {activeTab === 'education' &&
            <div>


            <div className='py-4'>
            <EducationItem
            logoSrc="/bitlogo.png"
            university="Birsa institute of Technology"
            degree="Bachelor's degree"
            field="Electronics and Communication Engineering"
            years="2022 - 2026"
            location="Jharkhand, India"
            />
            </div>

            <div className='py-4'>
            <EducationItem
            logoSrc="/schoollogoo.png"
            university="M.G.M higher Secondary School"
            degree="High School"
            field="Science"
            years="2010 - 2022"
            location="Jharkhand, India"
            />
            </div>




            </div>
            

            
            
            
            
            
            
            }
          </div>
        </div>
      </div>
    </>
  );
}
