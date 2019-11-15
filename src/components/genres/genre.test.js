import React from "react";
import Enzyme, {shallow} from "enzyme";
import {Genres} from "./genres.jsx";
import Adapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({adapter: new Adapter()});

const filmsGenres = [`Romance`, `Sci-Fi`, `Thrillers`];
const currentGenre = `Thrillers`;
const onChangeGenreClick = jest.fn();

describe(`Genre`, () => {
  it(`should renders correctly`, () => {
    const tree = shallow(<Genres
      genres={filmsGenres}
      currentGenre={currentGenre}
      onChangeGenreClick={onChangeGenreClick}/>);
    expect(tree).toMatchSnapshot();
  });
});

