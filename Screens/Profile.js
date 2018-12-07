import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Button, Image } from 'react-native';
import { Permissions, ImagePicker } from 'expo';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      hasCameraRollPermission: null
    }
  }

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: status === "granted" });

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      if (!result.canceled) {
        this.setState({ image: result.uri })
      }
    }
  }

  removeImage = () => {
    this.setState({ image: null })
  }

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        {image && <Image source={{ uri: image }} style={styles.image}></Image>}
        <Button title="Add Image" onPress={this.pickImage}></Button>
        <Button title="Remove Image" onPress={this.removeImage}></Button>
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
  },
  image: {
    width: 200,
    height: 200
  }
})