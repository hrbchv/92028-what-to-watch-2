import {films as allFilms} from "../mocks/films";
import {genres as allGenres} from "../mocks/genres";
const ALL_GENRES = `All genres`;

export const getFilteredFilms = (films, genre) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

const initialState = {
  currentGenre: ALL_GENRES,
  films: allFilms,
  genres: allGenres
};

export const ActionCreators = {
  changeGenre: (payload) => ({
    type: `CHANGE_GENRE`,
    payload
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {currentGenre: action.payload});
  }
  return state;
};
