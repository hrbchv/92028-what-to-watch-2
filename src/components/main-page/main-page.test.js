import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import films from "../../mocks/films";

const filmsGenres = [`Romance`, `Sci-Fi`, `Thrillers`];

describe(`MainPage`, () => {
  it(`should renders correctly`, () => {

    const tree = renderer
      .create(<MainPage
        films={films}
        genres={filmsGenres}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
