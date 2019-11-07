import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import films from "../../mocks/films";

describe(`SmallMovieCard`, () => {
  it(`should renders correctly`, () => {
    const index = 2;
    const activeMovieIndex = 1;
    const movie = films[index];

    const tree = renderer
      .create(<SmallMovieCard
        movie={movie}
        index={index}
        activeMovieIndex={activeMovieIndex}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
