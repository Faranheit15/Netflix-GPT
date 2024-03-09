import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addNowPlayingMovies } from "@/store/redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

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
    !nowPlayingMovies && getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
