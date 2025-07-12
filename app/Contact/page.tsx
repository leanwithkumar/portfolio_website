'use client';

import CalCard from "../components/CalCard";
import EmailForm from "../components/EmailRestAPI";

export default function Contact() {
  return (
    <>
      <div className="pb-5">
        <div className="">
          <div className="text-2xl text-white py-5 border-b">Contact</div>
          <div className="border-b border-dashed py-5 text-white">
            Feel free to get in touch and let&apos;s have a discussion about how we can work together.
          </div>
        </div>

        <div className="border-b py-5">
          <div className="py-2">Find me on social media</div>
          <div className="py-2">
  <div className="flex flex-wrap gap-3">

      <a
      href="https://github.com/leanwithkumar"
      target="_blank"
      rel="noopener noreferrer"
      >
      <div className="flex-1 min-w-[120px] text-center border text-white rounded-2xl px-4 py-2">
      @github
      </div>
      </a>

      <a
      href="https://x.com/leanwithkumar"
      target="_blank"
      rel="noopener noreferrer"
      >
      <div className="flex-1 min-w-[120px] text-center bg-blue-500 text-white rounded-2xl px-4 py-2">@twitter</div>
      </a>


      <a
      href="https://www.linkedin.com/in/abhay-kumar-443b981b6/"
      target="_blank"
      rel="noopener noreferrer"
      >
      <div className="flex-1 min-w-[120px] text-center bg-blue-400 text-white rounded-2xl px-4 py-2">@linkedin</div>
      </a>


      <a
      href="https://www.instagram.com/leanwithkumar/"
      target="_blank"
      rel="noopener noreferrer"
      >
      <div className="flex-1 min-w-[120px] text-center bg-pink-500 text-white rounded-2xl px-4 py-2">@instagram</div>

      </a>


    
  </div>
</div>
</div>










        <CalCard/>












        <div className="py-5 border-b">
          <div className="py-2">
            Or send me a message
          </div>
          <div>
            <EmailForm/>
          </div>
        </div>
      </div>
    </>
  );
}
