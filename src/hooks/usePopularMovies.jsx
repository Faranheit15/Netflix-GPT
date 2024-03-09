import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addPopularMovies } from "@/store/redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopular = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?page=1", TMDB_API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPopularMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    !popularMovies && getPopular();
  }, []);
};

export default usePopularMovies;
