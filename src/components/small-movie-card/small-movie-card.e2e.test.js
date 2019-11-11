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

it(`Small movie card is correctly works with click`, () => {
  const clickHandler = jest.fn();
  const movieCardComponent = shallow(<SmallMovieCard
    movie={movie}
    index={index}
    activeMovieIndex={activeMovieIndex}
    onClick={clickHandler}
  />);

  const card = movieCardComponent.find(`.small-movie-card`);
  card.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledWith(index);
});
