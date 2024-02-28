import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addPopularMovies } from "@/store/redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopular = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopularMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopularMovies;
