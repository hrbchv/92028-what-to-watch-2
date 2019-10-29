import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const filmsNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Inception`];
const filmsGenres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];

const init = () => {
  ReactDOM.render(
      <App
        films={filmsNames}
        genres={filmsGenres}
      />,
      document.querySelector(`#root`)
  );
};

init();
