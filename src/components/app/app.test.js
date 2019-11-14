import React from "react";
import Enzyme, {shallow} from "enzyme";
import App from "./app.jsx";
import films from "../../mocks/films";
import Adapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({adapter: new Adapter()});

const filmsGenres = [`Romance`, `Sci-Fi`, `Thrillers`];

describe(`App`, () => {
  it(`should renders correctly`, () => {
    const tree = shallow(<App
      films={films}
      genres={filmsGenres}/>);
    expect(tree).toMatchSnapshot();
  });
});

