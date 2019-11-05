import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import films from "../../mocks/films";

describe(`SmallMovieCard`, () => {
  it(`should renders correctly`, () => {
    const index = 2;
    const film = films[index];

    const tree = renderer
      .create(<SmallMovieCard
        film={film}
        index={index}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
