import React from 'react'
import { PiPlusLight } from "react-icons/pi";
import { IoMdPlay } from "react-icons/io";
import { BsHandThumbsUp } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

const playMovie = (e) =>{
    e.stopPropagation();
}

const thumbsUp = (e) =>{
    e.stopPropagation()
}

const addMovie = (e) =>{
    e.stopPropagation();
}

const dropDown = (e) => {
  e.stopPropagation()
}

const HoveredCard = ({videoKey, imgUrl, genreList}) => {
  return (
    <div className="absolute inset-0 shadow-xl  bg-[#141414] text-white   transition-transform hover:rounded-lg w-[315px] h-[300px] rounded-lg ease-in-out duration-300 transform cursor-pointer delay-100 -top-[110px]  -left-7  flex-col flex z-[9999999999] hover:z-[999999999] overflow-hidden "
    style={{zIndex: 9999}}
    >
      <div className="flex items-start justify-center">
        {videoKey ? (
         <div className="wrapper"> 
         <iframe src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&disablekb=1&loop=1&modestbranding=1&playsinline=1&color=white&mute=1&`} 
         className="hover-iframe hover:cursor-pointer  overflow-hidden mr-10 right-10"
         ></iframe>
       </div>
        ):(
          <img
          alt=""
          src={imgUrl}
          className="w-[100%] h-[100%]  hover:cursor-pointer whitespace-nowrap object-cover overflow-hidden"
        />
        )}
     
      </div>
      {/* action buttons */}
      <div className="text-white flex flex-row  mx-5 py-4">
        <div className="flex items-start gap-x-3 w-full">
          <IoMdPlay className="bg-white rounded-full font-thin text-[36px]   p-1 flex justify-center pl-2 text-black hover:bg-opacity-90" 
           onClick={(e)=> playMovie(e)}
          />
          <PiPlusLight className="bg-white rounded-full bg-opacity-10 font-thin text-[36px]  border-[1px] border-[white] border-opacity-70  p-1 hover:bg-opacity-20" 
          onClick={(e)=> addMovie(e) }
          />
          <BsHandThumbsUp className="bg-white rounded-full bg-opacity-10 font-thin text-[36px]  border-[1px] border-[white] p-[8px] border-opacity-70 hover:bg-opacity-20 " 
          onClick={(e)=> thumbsUp(e)}
          />
        </div>
        <div className="flex items-end">
          <HiChevronDown className="bg-white rounded-full bg-opacity-10 font-thin text-[38px]  border-[1px] border-[white] p-[8px] border-opacity-70 hover:bg-opacity-20 text-white items-center flex " 
          onClick={(e)=> dropDown(e)}
          />
        </div>
      </div>
      {/* Genres */}
      <div className="flex flex-row gap-x-3 mx-5 text-sm font-extralight">
        {genreList.map((genre, index) => (
          <div key={index}>
            <div className="flex flex-row items-center gap-x-2">
              {index !== 3 && genre.name}

              {genreList.length < 3 ? (
                index !== genreList.length - 1 && ( 
                  <GoDotFill className="text-[#6D6D6EB3] text-xs" />
                )
              ) : index < 3 ? (
                index === 2 ? (
                  <div className="hidden"></div>
                ) : (
                  <GoDotFill className="text-[#6D6D6EB3] text-xs" />
                )
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HoveredCard