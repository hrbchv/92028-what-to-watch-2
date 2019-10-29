import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

const filmsNames = [`The Caddo`, `Company`, `Skippy`, `East Lynne	Fox`, `Page`];
const filmsGenres = [`Crime`, `Documentary`, `Dramas`];

it(`App is correctly works with click`, () => {
  const preventDefault = jest.fn();
  const clickHandler = jest.fn();
  const app = shallow(<App
    films={filmsNames}
    genres={filmsGenres}
    onClick={clickHandler}
  />);

  const filmTitle = app.find(`.small-movie-card__link`);
  filmTitle.forEach((title) => {
    title.simulate(`click`, {preventDefault});
  });
  expect(clickHandler).toHaveBeenCalledTimes(filmsNames.length);
});
