import React from "react";
import MainPage from "./main-page.jsx";
import Adapter from "enzyme-adapter-react-16/build/index";
import Enzyme, {shallow} from "enzyme/build/index";

Enzyme.configure({adapter: new Adapter()});

describe(`MainPage`, () => {
  it(`should renders correctly`, () => {
    const tree = shallow(<MainPage/>);
    expect(tree).toMatchSnapshot();
  });
});
