import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const movie = {
  name: `Bohemian Rhapsody`,
  imgSrc: `img/bohemian-rhapsody.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`,
  year: `2015`
};
const index = 1;
const activeMovieIndex = 1;

it(`App is correctly works with click`, () => {
  const enterHandler = jest.fn();
  const app = shallow(<SmallMovieCard
    movie={movie}
    index={index}
    activeMovieIndex={activeMovieIndex}
    onEnter={enterHandler}
  />);

  const card = app.find(`.small-movie-card`);
  card.simulate(`mouseenter`, {preventDefault() {}});
  expect(enterHandler).toHaveBeenCalledWith(index);
});
