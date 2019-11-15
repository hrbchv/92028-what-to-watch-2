import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreators} from "../../reducer/reducer";

class Genres extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      genres: props.genres,
      currentGenre: props.currentGenre,
      onChangeGenreClick: props.onChangeGenreClick
    };
    this._onChangeGenreClick = this._onChangeGenreClick.bind(this);
  }

  _onChangeGenreClick(event) {
    event.preventDefault();
    this.state.onChangeGenreClick(event.target.text);
  }

  render() {
    const {genres, currentGenre} = this.props;
    return <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return <li
          key={genre + index}
          className={genre === currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a onClick={this._onChangeGenreClick} href="#" className="catalog__genres-link">{genre}</a>
        </li>;
      })}
    </ul>;
  }
}

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onChangeGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeGenreClick: (value) => {
      dispatch(ActionCreators.changeGenre(value));
    }
  };
};

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
