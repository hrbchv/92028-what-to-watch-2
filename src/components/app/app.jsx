import React from "react";
import {connect} from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    genres: state.genres
  };
};

export {App};
export default connect(mapStateToProps)(App);
