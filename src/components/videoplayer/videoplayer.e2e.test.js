import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./videoplayer.jsx";

Enzyme.configure({adapter: new Adapter()});

const movie = {
  name: `Bohemian Rhapsody`,
  imgSrc: `img/bohemian-rhapsody.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`,
  year: `2015`
};
const index = 1;
let isPlay = true;

it(`Video player has two kind of state`, () => {
  const videoPlayerComponent = shallow(<VideoPlayer
    imgSrc={movie.imgSrc}
    videoSrc={movie.videoSrc}
    index={index}
    isPlay={isPlay}
  />);

  expect(videoPlayerComponent.state().isPlay).toEqual(true);
  videoPlayerComponent.setState({isPlay: false});
  expect(videoPlayerComponent.state().isPlay).toEqual(false);
});
