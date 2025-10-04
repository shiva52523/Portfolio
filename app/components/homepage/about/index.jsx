// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-full p-[3px] 
             bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 
             shadow-xl shadow-purple-400/60
             transition-all duration-700 ease-in-out
             hover:scale-110 hover:rotate-6 hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]
             cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;