import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addTopRatedMovies } from "@/store/redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRated = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopRatedMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
