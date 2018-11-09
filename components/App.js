import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Peeps from "./Peeps";
import NewPeeper from "./NewPeeper";
import SignPeeper from "./SignPeeper";

const RootStack = createStackNavigator(
  {
    Home: Peeps,
    NewPeeper: NewPeeper,
    SignPeeper: SignPeeper
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
