import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./videoplayer.jsx";

const imgSrc = `img/bohemian-rhapsody.jpg`;
const videoSrc = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
const index = 3;
const isPlay = true;

describe(`FilmsList`, () => {
  it(`should renders correctly`, () => {

    const tree = renderer
      .create(<VideoPlayer
        imgSrc={imgSrc}
        videoSrc={videoSrc}
        index={index}
        isPlay={isPlay}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
