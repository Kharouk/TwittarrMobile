import React, { Component } from "react";
import LogIn from "./logIn";
import { Text, View, ActivityIndicator, Button, FlatList } from "react-native";

const URL = "https://chitter-backend-api.herokuapp.com/users";

class SignPeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson
        },
        function() {}
      );
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <Text>Welcome to Chittarr.</Text>
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("NewPeeper")}
        />
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate("SignPeeper")}
        />

        <LogIn />

        <FlatList
          data={this.state.dataSource.reverse()}
          renderItem={({ item }) => (
            <Text>
              <Text>{item.id} </Text>
              <Text>{item.handle} </Text>
              <Text />
            </Text>
          )}
          keyExtractor={({ id }, index) => id.id}
        />
      </View>
    );
  }
}

export default SignPeeper;
