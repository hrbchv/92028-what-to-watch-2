import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import films from "../../mocks/films";

const filmsGenres = [`Romance`, `Sci-Fi`, `Thrillers`];

describe(`App`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer
      .create(<App
        films={films}
        genres={filmsGenres}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

