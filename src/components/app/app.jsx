import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  const {genres} = props;
  return <MainPage
    genres={genres}
  />;
};

App.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
