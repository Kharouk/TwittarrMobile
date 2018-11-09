import React, { Component } from "react";
import { Button, Text, View, TextInput, FlatList } from "react-native";
import SendPeep from "../scripts/SendPeep";

const URL = "https://chitter-backend-api.herokuapp.com/peeps";
export default class NewPeep extends Component {
  constructor(props) {
    this.state = {};
  }

  render() {
    return <SendPeep />;
  }
}
