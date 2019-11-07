import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "./../small-movie-card/small-movie-card.jsx";

const DEFAULT_MOVIE_INDEX = -1;

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieIndex: DEFAULT_MOVIE_INDEX
    };
  }

  render() {
    const {
      filmsCards
    } = this.props;

    return <div className="catalog__movies-list">
      {filmsCards.map((movie, index) => {
        return <SmallMovieCard
          activeMovieIndex={this.state.activeMovieIndex}
          key={`movie-${index}`}
          movie={movie}
          index={index}
          onLeave={() => {
            this.setState({
              activeMovieIndex: DEFAULT_MOVIE_INDEX
            });
          }}
          onEnter={(indexOfFilm) => {
            this.setState({
              activeMovieIndex: indexOfFilm
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
