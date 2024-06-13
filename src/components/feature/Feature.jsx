import React from "react";
import { IoMdPlay } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const navigate = useNavigate()
  return (
    <div className="relative top-0 h-[100vh] bg-gradient-to-r from-[rgba(0, 0, 0, 0.6)] to-transparent flex flex-col w-full justify-between">
      <div
        className="w-full h-full flex bg-cover bg-center justify-between relative "
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(20,20,20,0) 50%,rgba(20,20,20,.15) 65%,rgba(20,20,20,.35) 79%, rgba(20,20,20,.58) 94%, #141414 100%), url("https://occ-0-3769-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRX1tvA9B35v15OQmJXZZiGdnGd6USomaPOapET2yFxKlyZ4Tl5RQKLpt2IlrCmWY9-W9XPdRr-EqwPABdPrN3ZfIbNleN9oT2B8.webp?r=694")`,
        }}
      >
        {/* Side Movie Title */}
        <div className="flex w-[100%] items-center"
         style={{
          background: 'linear-gradient(to bottom, rgba(20,20,20,.30) 10%,rgba(20,20,20,.35) 25%,rgba(20,20,20,.35) 79%, rgba(20,20,20,.58) 94%, #141414 100%)'
        }}
        >
          <div
            className="relative top-1 text-white flex flex-start text-2xl p-4 h-[85%] w-full bg-gradient-to-r"
           
          >
            <div className="flex top-[50%] flex-col gap-y-5 px-[50px] pb-[100px]">
              {/* Picture Title */}
              <div>
                <img
                  src="https://occ-0-3769-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQf_41jBj7phbXHfWDFAZuG1DRtO54iamDhz9xuGGCoHhsiCLe3qQsk-xfQCqt3cLyfdhOZXb2F07BOLQLtUXmTUhADU7Bd-NlCQ4gJlXSvraqslnM3FosryXo9fSwNw5IREVuvKHj8z-jZ4-T16lPaaUAOtyiqmDLgkU3nDjR7bvUvOSd4K7A.webp?r=c62"
                  alt=""
                />
              </div>

              {/* Title Heading */}
              <div className="flex items-center text-[28px] text-white font-bold pb-200">
                <h2>#1 in TV Shows Today</h2>
              </div>

              {/* Info */}
              <div className="flex text-white text-[18px] w-[50%] items-center leading-snug pb-250">
                <p>
                  Gifted with superhuman strength, a young woman returns to
                  korea to find her birth family - only to be entangled in a
                  drug case that could test her power.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-x-[20px] pb:300px">
                <button className="py-[7px] pr-[28px] pl-[24px] rounded-[5px] bg-white mr-[10px] align-center items-center flex hover:opacity-90 text-black text-[18px] font-bold tracking-wide"
                onClick={()=> navigate('/player')}
                >
                  <div className="flex items-center justify-center gap-x-2">
                    <IoMdPlay className="text-[31px]" />
                    <div>
                      <span>Play</span>
                    </div>
                  </div>
                </button>

                <button className="py-[7px] pr-[30px] pl-[25px] rounded-[5px] bg-[#6D6D6EB3] mr-[10px] align-center items-center flex hover:opacity-90 text-white text-[18px] font-semibold tracking-wide ">
                  <div className="flex items-center justify-center gap-x-2">
                    <AiOutlineInfoCircle className="text-[32px]" />
                    <div>
                      <span>More Info</span>
                    </div>
                  </div>
                </button>
              </div>//
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Feature;
