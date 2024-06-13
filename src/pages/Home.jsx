import Navbar from "../components/Navbar/Navbar";
import Feature from "../components/feature/Feature";
import MovieList from "../components/MovieList/MovieList";
import Test from "../components/MovieList/test";

const Home = () => {
  return (
    <>
      <Navbar />
      <Feature />
      <MovieList title={'Top Picks For You'}/>
      <MovieList title={'Trending Now'}/>
      <MovieList title={'Upcoming'}/>
      
    </>
  );
};

export default Home;
