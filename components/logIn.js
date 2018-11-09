import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  FlatList,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2
  }
});

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      password: ""
    };
  }

  render() {
    return <TextInput style={styles.textInput} />;
  }
}
