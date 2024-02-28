import Header from "@/components/Header/Header";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularMovies from "@/hooks/usePopularMovies";
import useTopRatedMovies from "@/hooks/useTopRatedMovies";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import MainContainer from "@/components/Browse/MainContainer/MainContainer";
import SecondaryContainer from "@/components/Browse/SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
