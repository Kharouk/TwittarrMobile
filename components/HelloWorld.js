import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Placeholder",
      display: false
    };
  }

  showInformation = () => {
    this.setState({ text: "🦟", display: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Send Message:</Text>
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <Button title="Send" onPress={this.showInformation} />
        {this.state.display == true && <Text>Message Sent.</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 10
  }
});
