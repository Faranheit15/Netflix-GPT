import { useSelector } from "react-redux";

import VideoTitle from "@/components/Browse/MainContainer/VideoTitle";
import VideoBackgound from "@/components/Browse/MainContainer/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (movies == null) return;
  const mainMovie = movies.reduce((prev, current) => {
    return prev.popularity > current.popularity ? prev : current;
  });

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgound movieId={id} />
    </div>
  );
};

export default MainContainer;
