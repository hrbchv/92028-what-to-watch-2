import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {film, onEnter, index} = props;

  return <article onMouseEnter={() => onEnter(index)} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={film.imgSrc} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  onEnter: PropTypes.func
};

export default SmallMovieCard;
