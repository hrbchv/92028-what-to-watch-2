import React from "react";
import PropTypes from "prop-types";

const VIDEO_WIDTH = `280`;

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._playerRef = React.createRef();
  }

  componentDidUpdate() {
    const player = this._playerRef.current;
    if (this.props.index === this.props.activeMovieIndex) {
      player.play();
    } else {
      player.pause();
      player.currentTime = 0;
      player.load();
    }
  }

  render() {
    const {
      imgSrc,
      videoSrc
    } = this.props;

    return <video
      ref={this._playerRef}
      preload="true"
      src={videoSrc}
      poster={imgSrc}
      width={VIDEO_WIDTH}
      muted
    />;
  }
}

VideoPlayer.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeMovieIndex: PropTypes.number.isRequired
};

export default VideoPlayer;
