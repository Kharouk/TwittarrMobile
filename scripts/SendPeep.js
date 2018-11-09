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

export default class SendPeep extends Component {
  constructor(props) {
    super(props);
    this.postPeepsHandler = this.postPeepsHandler.bind(this);
  }

  postPeepsHandler() {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: {
        peep: {
          user_id: this.state.userId,
          body: this.state.body
        }
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ data: JSON.stringify(data) }, () => {}))
      .then(() => Alert.alert("You have successfully posted a peep!"));
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Access Key" />
        <TextInput placeholder="id" />
        <TextInput placeholder="body" />
      </View>
    );
  }
}
