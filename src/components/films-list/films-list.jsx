import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "./../small-movie-card/small-movie-card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };
  }

  render() {
    const {
      filmsCards
    } = this.props;

    return <div className="catalog__movies-list">
      {filmsCards.map((film, index) => {
        return <SmallMovieCard
          key={`film-${index}`}
          film={film}
          index={index}
          onEnter={(indexOfFilm) => {
            this.setState({
              activeFilm: indexOfFilm
            });
          }}/>;
      })}
    </div>;
  }
}

FilmsList.propTypes = {
  filmsCards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  })).isRequired
};

export default FilmsList;
