import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: props.isPlay
    };
    this._playerRef = React.createRef();
  }

  componentDidMount() {
    const player = this._playerRef.current;
    if (player) {
      player.style.width = `100%`;
      player.style.height = `100%`;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const player = this._playerRef.current;
      if (player) {
        if (this.props.isPlay) {
          player.src = this.props.videoSrc;
          player.play();
        } else {
          player.pause();
          player.src = ``;
        }
      }
    }
  }

  render() {
    const {
      imgSrc
    } = this.props;

    return <video
      ref={this._playerRef}
      preload="true"
      poster={imgSrc}
      muted
    />;
  }
}

VideoPlayer.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired
};

export default VideoPlayer;
