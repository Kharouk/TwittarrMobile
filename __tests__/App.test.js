import React from "react";
import App from "../components/App";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const comp = renderer.create(<App />).toJSON;
  expect(comp).toMatchSnapshot();
});
