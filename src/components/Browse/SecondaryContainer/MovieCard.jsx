import { TMDB_IMAGE_CDN } from "@/utils/constants";

import PropTypes from "prop-types";

const MovieCard = ({ posterPath, originalTitle }) => {
  return (
    <div className="pr-4 transition-transform w-36 md:w-48 hover:scale-110">
      <img alt={originalTitle} src={TMDB_IMAGE_CDN + posterPath} />
    </div>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  originalTitle: PropTypes.string,
};

export default MovieCard;
