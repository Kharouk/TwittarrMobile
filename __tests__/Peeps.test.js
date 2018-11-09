import React, { Component } from "react";
import Peeps from "../components/Peeps";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });

describe("Testing Peep Component", () => {
  it("processes information.", () => {
    const tree = renderer.create(<Peeps />).getInstance();
    expect(tree).toBeTruthy();
  });

  it("create snapshot", () => {
    const tree = renderer.create(<Peeps />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
