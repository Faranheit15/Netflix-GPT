import { TMDB_IMAGE_CDN } from "@/utils/constants";

import PropTypes from "prop-types";

const MovieCard = ({ posterPath, originalTitle }) => {
  return (
    <div className="w-48 pr-4">
      <img alt={originalTitle} src={TMDB_IMAGE_CDN + posterPath} />
    </div>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
};

export default MovieCard;
