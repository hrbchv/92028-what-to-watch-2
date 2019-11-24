const ALL_GENRES = `All genres`;

const getFilteredFilms = (films, genre) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  if (films.length) {
    return films.filter((film) => film.genre === genre);
  }
  return films;
};

export default getFilteredFilms;
