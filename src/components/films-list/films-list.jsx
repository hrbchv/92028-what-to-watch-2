import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "./../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";
import {getFilteredFilms} from "../../reducer/reducer";

const DEFAULT_MOVIE_INDEX = -1;

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovieIndex: DEFAULT_MOVIE_INDEX
    };
    this._activeCardHandler = this._activeCardHandler.bind(this);
  }

  _activeCardHandler(indexOfActiveFilm = null) {
    this.setState({
      activeMovieIndex: indexOfActiveFilm
    });
  }

  render() {
    const {
      filmsCards
    } = this.props;

    return <div className="catalog__movies-list">
      {filmsCards.map((movie, index) => {
        return <SmallMovieCard
          key={`movie-${index}`}
          movie={movie}
          index={index}
          onClick={this._activeCardHandler}/>;
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

const mapStateToProps = (state) => {
  const {currentGenre, films} = state;
  const filmsCards = getFilteredFilms(films, currentGenre);
  return {
    filmsCards
  };
};

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
