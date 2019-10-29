import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const filmsNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Inception`];
const filmsGenres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
const clickHandler = (evt) => {
  evt.preventDefault();
  return `click`;
};

const init = () => {
  ReactDOM.render(
      <App
        films={filmsNames}
        genres={filmsGenres}
        onClick={clickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
