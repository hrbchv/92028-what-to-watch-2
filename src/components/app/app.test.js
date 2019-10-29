import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const filmsNames = [`East Lynne	Fox`, `The Front`, `Page`, `The Caddo`, `Company`, `Skippy`];
const filmsGenres = [`Romance`, `Sci-Fi`, `Thrillers`];

it(`renders App component is correctly`, () => {
  const tree = renderer
    .create(<App
      films={filmsNames}
      genres={filmsGenres}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
