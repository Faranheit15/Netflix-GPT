import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addTopRatedMovies } from "@/store/redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRated = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      TMDB_API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopRatedMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    !topRatedMovies && getTopRated();
  }, []);
};

export default useTopRatedMovies;
