import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation, Pagination} from 'swiper/modules';
import {PiCaretLeftBold} from 'react-icons/pi'
import {PiCaretRightBold} from 'react-icons/pi'
import TopPicksTest from './TopPicksTest';

const movieData = [
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    },
    {
        title: 'first'
    }
]

const Test = () => {
  return (
    <>
        {/* Movie List */}

        <Swiper
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }}
        modules={[Navigation]}
        slidesPerView={6}
        className='pl-[90px] flex flex-row bg-blue-100 h-[400px] items-center my-custom-swiper'
        style={{display: 'flex', alignItems: 'center'}}
        >
            {movieData.map((item, index)=> (
                <SwiperSlide key={index} className='flex items-center -z-[999] hover:-z-50 custom-slide'
                style={{display: 'flex', alignItems: 'center',}}
                >
                
                     <TopPicksTest index={index}/>
       
                </SwiperSlide>
            ))}
        </Swiper>

       
        </>
      
 
  )
}

export default Test