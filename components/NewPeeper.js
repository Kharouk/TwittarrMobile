import React, { Component } from "react";
import { Button, Text, View, TextInput, FlatList } from "react-native";

const URL = "https://chitter-backend-api.herokuapp.com/users";
class NewPeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      successSignUp: false
    };
    this.createNewUser = this.createNewUser.bind(this);
    this.displayConfirmation = this.displayConfirmation.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  createNewUser() {
    return fetch("https://chitter-backend-api.herokuapp.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          handle: this.state.user,
          password: this.state.password
        }
      })
    })
      .then(response => response.json())
      .then(() => this.props.navigation.navigate("SignPeeper"));
  }

  displayConfirmation() {
    this.setState({ successSignUp: true });
    this.createNewUser()
      .then(data => this.saveData(JSON.stringify(data)))
      .catch(error => console.log(error));
  }

  saveData(data) {
    this.handle = data.handle;
    this.id = data.id;
    this.data = data;
  }
  render() {
    if (this.state.successSignUp === false) {
      return (
        <View>
          <Text>Make a New Account!</Text>
          <TextInput
            placeholder="name"
            onChangeText={text => this.setState({ user: text })}
          />
          <TextInput
            placeholder="password"
            onChangeText={text => this.setState({ password: text })}
          />
          <Button
            onPress={this.displayConfirmation}
            title="Press to submit"
            color="#841584"
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Hello: {this.state.data}</Text>
        </View>
      );
    }
  }
}

export default NewPeeper;
