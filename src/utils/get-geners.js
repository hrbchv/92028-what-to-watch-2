const ALL_GENRES = `All genres`;

const getGenres = (films) => {
  let genres = [];
  if (films) {
    genres = films.map((film) => film.genre).filter((genre, index, arr) => arr.indexOf(genre) === index);
  }
  genres.unshift(ALL_GENRES);
  return genres;
};

export default getGenres;
