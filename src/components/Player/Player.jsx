import React from 'react'
import {BsArrowLeft} from 'react-icons/bs';
import {useLocation, useNavigate} from 'react-router-dom'
import video from '../../assets/video/test.mp4'

const Player = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const videoKey = new URLSearchParams(location.search).get('videoId')
  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='absolute p-4 z-[999]  text-white text-5xl'>
            <BsArrowLeft onClick={()=> navigate(-1) }
            className='hover:cursor-pointer cursor-pointer'
            />
        </div>
        <div className="overflow-hidden h-full w-full"> 
         <iframe src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1&&loop=0&modestbranding=0&playsinline=0&color=white&mute=1&`} 
         className="player hover:cursor-pointer  overflow-hidden h-[100%] w-[100%] object-cover"
         ></iframe>
       </div>
     {/*    <video className='h-[100%] w-[100%] object-cover' src={video} autoPlay loop controls></video> */}
    </div>
  )
}

export default Player