import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  const {films, genres} = props;
  return <MainPage
    films={films}
    genres={genres}
  />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  })).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
