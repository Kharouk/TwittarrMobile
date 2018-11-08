import React from "react";
import HelloWorld from "../components/HelloWorld";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("renders correctly", () => {
  const comp = renderer.create(<HelloWorld />).toJSON();
  expect(comp).toMatchSnapshot();
});

describe("HelloWorld  component", () => {
  it("shallow renders", () => {
    const wrapper = shallow(<HelloWorld />);
    const instance = wrapper.instance();
    console.log(instance);
    expect(instance.state.text).toEqual("Placeholder");
  });
});
