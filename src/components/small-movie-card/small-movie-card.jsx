import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoplayer/videoplayer.jsx";

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      timeoutId: null,
      ONE_SECOND: 1000
    };
    this._enterHandler = this._enterHandler.bind(this);
    this._leaveHandler = this._leaveHandler.bind(this);
  }

  _enterHandler() {
    this.setState({
      timeoutId: setTimeout(() => {
        this.setState({
          isPlay: true
        });
      }, this.state.ONE_SECOND)
    });
  }

  _leaveHandler() {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }
    this.setState({
      isPlay: false,
      timeoutId: null
    });
  }

  render() {
    const {movie, index, onClick} = this.props;

    return <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={this._enterHandler}
      onMouseLeave={this._leaveHandler}
      onClick={() => onClick(index)}>
      <div className="small-movie-card__image">
        <VideoPlayer
          imgSrc={movie.imgSrc}
          videoSrc={movie.videoSrc}
          index={index}
          isPlay={this.state.isPlay}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
      </h3>
    </article>;
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default SmallMovieCard;
