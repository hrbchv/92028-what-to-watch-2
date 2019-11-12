import {films as allFilms} from "./mocks/films";
import {genres as allGenres} from "./mocks/genres";
const getFilteredFilms = (films, genre) => {
  return films.filter((film) => film.genre === genre);
};

const initialState = {
  currentGenre: `All genres`,
  currentListOfFilms: allFilms,
  films: allFilms,
  genres: allGenres
};

export const ActionCreators = {
  changeGenre: (payload) => ({
    type: `CHANGE_GENRE`,
    payload
  }),
  getFilmsList: (films, genre) => {
    const ALL_GENRES = `All genres`;
    let filteredFilms = [];
    switch (genre) {
      case ALL_GENRES:
        filteredFilms = films;
        break;
      default:
        filteredFilms = getFilteredFilms(films, genre);
    }
    return {
      type: `GET_FILMS_LIST`,
      payload: filteredFilms
    };
  }}
;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {currentGenre: action.payload});
    case `GET_FILMS_LIST`:
      return Object.assign({}, state, {currentListOfFilms: action.payload});
  }
  return state;
};
