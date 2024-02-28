import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TMDB_API_OPTIONS } from "@/utils/constants";
import { addUpcomingMovies } from "@/store/redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcoming = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      TMDB_API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addUpcomingMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
