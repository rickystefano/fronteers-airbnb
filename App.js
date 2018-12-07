import React from "react";
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import * as firebase from 'firebase';
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";

EStyleSheet.build();

//Init firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAgOcNvVc0_Y-EPJh4xEmwYvSoTv3GTI4k',
  authDomain: 'fronteers-8bd8c.firebaseapp.com',
  databaseURL: 'https://fronteers-8bd8c.firebaseio.com',
  storageBucket: 'fronteers-8bd8c.appspot.com'
};

firebase.initializeApp(firebaseConfig);

export default createBottomTabNavigator(
  {
    Home, //ES6+
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'search';
            break;
          case 'Profile':
            iconName = 'user-o'
            break;
        }
        return <FontAwesome name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#42ffaa',
      inactiveTintColor: 'gray',
    }
  }
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
