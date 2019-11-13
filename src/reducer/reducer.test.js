import {reducer, getFilteredFilms} from "./reducer";
import {films as allFilms} from "../mocks/films";

describe(`Business logic is correct`, () => {
  it(`Reducer should change genre correctly`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: `CHANGE_GENRE`,
      payload: `Dramas`,
    })).toEqual({
      currentGenre: `Dramas`,
    });
  });

  it(`Reducer should filtered films correctly`, () => {
    expect(reducer({
      currentGenre: `Romance`,
      currentListOfFilms: allFilms,
      films: allFilms
    }, {
      type: `GET_FILMS_LIST`
    })).toEqual({
      currentGenre: `Romance`,
      currentListOfFilms: getFilteredFilms(allFilms, `Romance`),
      films: allFilms
    });
  });
});
