import Header from "@/components/Header/Header";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularMovies from "@/hooks/usePopularMovies";
import useTopRatedMovies from "@/hooks/useTopRatedMovies";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import MainContainer from "@/components/Browse/MainContainer/MainContainer";
import SecondaryContainer from "@/components/Browse/SecondaryContainer/SecondaryContainer";
import GptSearch from "@/components/Browse/GPTSearch/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
