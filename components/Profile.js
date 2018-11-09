import React from "react";
import { View, Text } from "react-native";
import SendPeep from "../scripts/SendPeep";
export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Your Profile Page</Text>
        <SendPeep />
      </View>
    );
  }
}
