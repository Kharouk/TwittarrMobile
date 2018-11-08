import React, { Component } from "react";
import { Button, Text, View, TextInput, FlatList } from "react-native";

const URL = "https://chitter-backend-api.herokuapp.com/users";
let user, password;
class NewPeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      successSignUp: false
    };
    this.createNewUser = this.createNewUser.bind(this);
  }

  createNewUser() {
    return fetch(URL, {
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
    });
  }

  render() {
    if (this.state.successSignUp) {
      return (
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Text>
                <Text> {item} </Text>
              </Text>
            )}
            keyExtractor={({ id }, index) => id.id}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>Make a New Account!</Text>
          <TextInput
            placeholder="name"
            on
            onChangeText={text => this.setState({ user: text })}
          />
          <TextInput
            placeholder="password"
            onChangeText={text => this.setState({ password: text })}
          />
          <Button
            onPress={this.createNewUser}
            title="Press to submit"
            color="#841584"
          />
        </View>
      );
    }
  }
}

export default NewPeeper;
