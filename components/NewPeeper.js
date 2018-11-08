import React, { Component } from "react";
import { Button, Text, View, TextInput } from "react-native";

const URL = "https://chitter-backend-api.herokuapp.com/users";

class NewPeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  createNewUser(user, password) {
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          handle: user,
          password: password
        }
      })
    });
  }

  render() {
    return (
      <View>
        <Text>Make a New Account!</Text>
        <TextInput
          placeholder="name"
          onChangeText={text => this.setState({ name })}
        />
        <TextInput
          placeholder="password"
          onChangeText={text => this.setState({ password })}
        />
        <Button
          onPress={this.createNewUser(this.state.name, this.state.password)}
          title="Press to submit"
          color="#841584"
        />
      </View>
    );
  }
}

export default NewPeeper;
