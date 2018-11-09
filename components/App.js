import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Peeps from "./Peeps";
import NewPeeper from "./NewPeeper";

const RootStack = createStackNavigator(
  {
    Home: Peeps,
    NewPeeper: NewPeeper
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
