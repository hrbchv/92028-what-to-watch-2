import React from "react";
import Enzyme, {shallow} from "enzyme";
import App from "./app.jsx";
import Adapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({adapter: new Adapter()});

describe(`App`, () => {
  it(`should renders correctly`, () => {
    const tree = shallow(<App/>);
    expect(tree).toMatchSnapshot();
  });
});

