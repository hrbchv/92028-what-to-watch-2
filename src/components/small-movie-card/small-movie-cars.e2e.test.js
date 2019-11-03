import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const film = {
  name: `Bohemian Rhapsody`,
  imgSrc: `img/bohemian-rhapsody.jpg`,
  genre: `Drama`,
  year: `2015`
};
const index = 1;

it(`App is correctly works with click`, () => {
  const enterHandler = jest.fn();
  const app = shallow(<SmallMovieCard
    film={film}
    index={index}
    onEnter={enterHandler}
  />);

  const card = app.find(`.small-movie-card`);
  card.simulate(`mouseenter`, {preventDefault() {}});
  expect(enterHandler).toHaveBeenCalledWith(index);
});
