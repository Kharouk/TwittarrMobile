import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  StyleSheet
} from "react-native";

const url = "https://chitter-backend-api.herokuapp.com/sessions";
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: "center",
    borderColor: "#aaa",
    textAlign: "center"
  }
});

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      password: ""
    };
    this.postSessionsHandler = this.postSessionsHandler.bind(this);
  }

  postSessionsHandler() {
    console.log("Hello!");
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          handle: this.state.handle,
          password: this.state.password
        }
      })
    })
      .then(response => response.json())
      .then(data => this.setState({ data: JSON.stringify(data) }, () => {}))
      .then(() => Alert.alert("You have successfully logged in!"));
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={value => this.setState({ handle: value })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={value => this.setState({ password: value })}
        />
        <Button title="Log in" onPress={this.postSessionsHandler} />
        <Text>Returned Data:"{this.state.data}"</Text>
      </View>
    );
  }
}
