import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedId }) => {
  return (
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube-nocookie.com/embed/" +
        embedId +
        "?autoplay=1&mute=1&enablejsapi=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
};

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string,
};

export default YouTubeEmbed;
