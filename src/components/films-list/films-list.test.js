import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import films from "../../mocks/films";

describe(`FilmsList`, () => {
  it(`should renders correctly`, () => {

    const tree = renderer
      .create(<FilmsList
        filmsCards={films}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
