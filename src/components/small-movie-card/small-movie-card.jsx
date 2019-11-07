import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoplayer/videoplayer.jsx";

const SmallMovieCard = (props) => {
  const {movie, index, activeMovieIndex, onEnter, onLeave} = props;

  return <article
    className="small-movie-card catalog__movies-card"
    onMouseEnter={() => onEnter(index)}
    onMouseLeave={() => onLeave()}>
    <div className="small-movie-card__image">
      <VideoPlayer
        imgSrc={movie.imgSrc}
        videoSrc={movie.videoSrc}
        index={index}
        activeMovieIndex={activeMovieIndex}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired
  }).isRequired,
  activeMovieIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
};

export default SmallMovieCard;
