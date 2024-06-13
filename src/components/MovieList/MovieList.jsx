import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import MovieListItem from "./MovieListItem";
import { useEffect, useState } from "react";
import { useGetPopularMoviesQuery, useGetTopRatedQuery, useGetUpcomingQuery } from "../../app/api/movieApiSlice";
import { useSelector } from "react-redux";
import { fetchGenres } from "../../app/genres/genreSlice";
import { LoadingData } from "./LoadingData";

const MovieList = ({title}) => {

  const topRatedQuery = useGetTopRatedQuery();
  const getPopularQuery = useGetPopularMoviesQuery()
  const getUpcomingQuery = useGetUpcomingQuery()

  const query = title === 'Top Picks For You' ? topRatedQuery : title === 'Trending Now' ? getPopularQuery : title === 'Upcoming' ? getUpcomingQuery : '';

  const { data, error, isLoading } = query;

  useEffect(() => {
    if (error) {
      console.error('there is an error:', error);
    } else if (!isLoading) {
      console.log('loading');
    }
  }, [data, isLoading, error]);

 const genres = useSelector(fetchGenres)


 
 const uniqueButton = title === 'Top Picks For You' ? 'TopPicks' : title === 'Trending Now' ? 'Trending' : 'Upcoming' 



  return (
    <div className="mb-32 relative top-40">
      <div className="flex flex-col  relative mt-[-140px] ">
        {/* List Heading */}
        <div className="text-[21px] text-white px-[60px] font-semibold">
          <h2>{title}</h2>
        </div>
      </div>

      <div className=" pl-[20px] overflow-hidden w-[100%] pr-0 flex items-center  ">
          <div className={`right-0 hover:z-[20] z-[20] flex items-center justify-center swiper-button-next text-[#E5E5E5] bg-[#141414] bg-opacity-80 py-[68px] px-8 top-[58px] rounded-[5px] ${uniqueButton} `}
          >
            <PiCaretRightBold className=" flex items-center justify-center" />
          </div>
          <div className={`left-0 flex items-center justify-center swiper-button-prev text-[#E5E5E5] bg-[#141414] bg-opacity-80 py-[68px] px-7 top-[58px]  rounded-[5px] hover:z-[20] z-[20] ${uniqueButton} `}>
            <PiCaretLeftBold className="flex items-center justify-center" />
          </div>
      </div>

      {/* Movie List */}
      <Swiper
      navigation={{
        nextEl: `.swiper-button-next.${uniqueButton}`,
        prevEl: `.swiper-button-prev.${uniqueButton}`,
      }}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={-64}
        className={`relative -mt-4 items-center my-custom-swiper overflow-y-visible flex hover:z-[10]`}
       
      >
        {/* Navigation Arrows */}
        {data ? (
          data.results.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative h-[400px]  hover:z-[1] custom-slide whitespace-nowrap flex items-center px-[10px]"
            style={{
              width: "135px", 
              minWidth: "135px", 
              height: "180px",
            }}
          >
            <MovieListItem 
            index={index} 
            imgPath={item.backdrop_path} 
            title={item.title} 
            movieGenres={item.genre_ids} 
            genres={genres}
            id={item.id}
            />
          </SwiperSlide>
        ))
        ) : (
          LoadingData.map((item, index)=> (
            <SwiperSlide
            className=" h-[400px]  custom-slide whitespace-nowrap flex items-center "
            style={{
              width: "135px", 
              minWidth: "135px", 
              height: "180px",
            }}
            key={index}
            >      
              <div className="skeleton-loader transition-all ease-in-out duration-300"></div>
          </SwiperSlide>
          )) 
        )
        }
      </Swiper>
      
    </div>
  );
};

export default MovieList;
