import React from "react";
import MainPage from "./main-page.jsx";
import films from "../../mocks/films";
import Adapter from "enzyme-adapter-react-16/build/index";
import Enzyme, {shallow} from "enzyme/build/index";

Enzyme.configure({adapter: new Adapter()});

const filmsGenres = [`Romance`, `Sci-Fi`, `Thrillers`];

describe(`MainPage`, () => {
  it(`should renders correctly`, () => {
    const tree = shallow(<MainPage
      films={films}
      genres={filmsGenres}/>);
    expect(tree).toMatchSnapshot();
  });
});
