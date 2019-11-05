import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const filmsGenres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];

const init = () => {
  ReactDOM.render(
      <App
        films={films}
        genres={filmsGenres}
      />,
      document.querySelector(`#root`)
  );
};

init();

