import Header from "@/components/Header/Header";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import MainContainer from "@/components/Browse/MainContainer/MainContainer";
import SecondaryContainer from "@/components/Browse/SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
