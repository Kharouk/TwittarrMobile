import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";

const styles = StyleSheet.create({
  peeps: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 20,
    alignItems: "center"
  },
  textBody: {
    fontSize: 30,
    color: "red"
  },
  textUser: {
    textDecorationLine: "underline",
    color: "blue"
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
            <Text style={styles.peeps}>
              <Text style={styles.textBody}>{item.body} </Text>
              by <Text style={styles.textUser}>{item.user.handle} </Text>
              at <Text style={styles.textDate}>{item.created_at}</Text>
            </Text>
          )}
          keyExtractor={({ id }, index) => id.id}
        />
      </View>
    );
  }
}

export default Peeps;
