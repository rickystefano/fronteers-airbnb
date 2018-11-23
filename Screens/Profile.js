import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text } from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})