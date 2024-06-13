import { useEffect, useState, useRef } from "react";
import HoveredCard from "./HoveredCard";
import { useGetVideoQuery } from "../../app/api/movieApiSlice";
import { useNavigate } from "react-router-dom";


const MovieListItem = ({ index, imgPath,  movieGenres, genres, id }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const navigate = useNavigate();
  const imgUrl = `https://image.tmdb.org/t/p/original${imgPath}`;
  const handleHoverEnter = (index) => {
    setIsHovered(index);
  };
  const handleHoverLeave = () => {
    setIsHovered(null);
  };
  const genreList = genres.filter((genre) => movieGenres.includes(genre.id));
  const {data, error, isLoading} = useGetVideoQuery(id);

  useEffect(()=>{
    if(!isLoading && data  && data.results.length>0){
      const video = data.results.map((video)=> video);
      const videoKey = video[0]['key']
      setVideoKey(videoKey)
    }
  }, [isLoading, data, error])


  return (
    <>
      <div
        onMouseEnter={() => handleHoverEnter(index)}
        onMouseLeave={() => handleHoverLeave()}
        className={`relative whitespace-nowrap -mr-[46px] flex flex-row transition-transform hover:scale-110  ease-in-out transform ${
          isHovered === index ? "hovered" : ""
        }`}
        onClick={()=> navigate(`/player?videoId=${videoKey}`)}
      >
        <img
          alt=""
          src={imgUrl}
          className="w-[65%] rounded-[4px] hover:cursor-pointer whitespace-nowrap"
        />

        {isHovered === index && (
          <HoveredCard videoKey={videoKey} imgUrl={imgUrl} genreList={genreList}/>
        )}
      </div>
    </>
  );
};

export default MovieListItem;
