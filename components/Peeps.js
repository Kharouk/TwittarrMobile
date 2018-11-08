import React, { Component } from "react";
import { fetchPeeps } from "../apiPeeps";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    alignItems: "center"
  }
});
const URL = "https://chitter-backend-api.herokuapp.com/peeps";

class Peeps extends Component {
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
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.body} by {item.user.handle} at {item.created_at}
            </Text>
          )}
          keyExtractor={({ id }, index) => id.id}
        />
      </View>
    );
  }
}

export default Peeps;
