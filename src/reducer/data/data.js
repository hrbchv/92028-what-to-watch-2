import getGenres from "../../utils/get-geners";
import adapt from "../../utils/adapter";

const ALL_GENRES = `All genres`;

const initialState = {
  currentGenre: ALL_GENRES,
  films: [],
  genres: []
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  SET_GENRES: `SET_GENRES`
};

const ActionCreators = {
  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload
  }),
  loadFilms: (payload) => ({
    type: ActionType.LOAD_FILMS,
    payload
  }),
  setGenres: (payload) => ({
    type: ActionType.SET_GENRES,
    payload
  })
};

const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = adapt(response.data);
        dispatch(ActionCreators.loadFilms(films));
        dispatch(ActionCreators.setGenres(getGenres(films)));
      });
  }
};


const ActionCreator = {
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {currentGenre: action.payload});
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {films: action.payload});
    case ActionType.SET_GENRES:
      return Object.assign({}, state, {genres: action.payload});
  }
  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer
};
