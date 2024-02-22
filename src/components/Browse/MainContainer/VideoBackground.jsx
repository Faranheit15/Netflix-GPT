import { useSelector } from "react-redux";
import useMovieTrailer from "@/hooks/useMovieTrailer";
import PropTypes from "prop-types";

import YouTubeEmbed from "./YouTubeEmbed";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="">
      <YouTubeEmbed embedId={trailerVideo?.key} />
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VideoBackground;
