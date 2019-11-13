import {films as allFilms} from "../mocks/films";
import {genres as allGenres} from "../mocks/genres";

export const getFilteredFilms = (films, genre) => {
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
  getFilmsList: () => ({
    type: `GET_FILMS_LIST`,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {currentGenre: action.payload});
    case `GET_FILMS_LIST`:
      const {films, currentGenre} = state;
      const ALL_GENRES = `All genres`;
      if (currentGenre === ALL_GENRES) {
        return Object.assign({}, state, {currentListOfFilms: films});
      }
      const filteredFilms = getFilteredFilms(films, currentGenre);
      return Object.assign({}, state, {currentListOfFilms: filteredFilms});
  }
  return state;
};
