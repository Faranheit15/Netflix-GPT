import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addNowPlayingMovies } from "@/store/redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNowPlayingMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
