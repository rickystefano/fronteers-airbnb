import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open developer menu.</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: App //Bind App to route Home
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
