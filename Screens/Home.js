import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';
import { Categories } from '../Components/Categories'
import { Listings } from '../Components/Listings';

class HomeScreen extends React.Component {

  render() {
    const categories = [
      { "key": "1", "title": "Accomodations", "image": "http://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=small" },
      { "key": "2", "title": "Experiences", "image": "http://a0.muscache.com/im/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg?aki_policy=small" },
      { "key": "3", "title": "Restaurants", "image": "http://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=small" }
    ];

    const listings = [
      { "key": "1", "title": "I Sette Coni - Trullo Edera", "image": "http://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=small" },
      { "key": "2", "title": "Luxury Gold Coast Hinterland Villa", "image": "http://a0.muscache.com/im/pictures/7787384/03380852_original.jpg?aki_policy=small" },
      { "key": "3", "title": "Luxurious stone villa in Crete", "image": "http://a0.muscache.com/im/pictures/17588525/94250ea3_original.jpg?aki_policy=small" },
      { "key": "4", "title": "Best location design quiet AC free wifi citycenter", "image": "http://a0.muscache.com/im/pictures/6061582/a643208f_original.jpg?aki_policy=small" },
      { "key": "5", "title": "I Sette Coni - Trullo Edera", "image": "http://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=small" },
      { "key": "6", "title": "Luxury Gold Coast Hinterland Villa", "image": "http://a0.muscache.com/im/pictures/7787384/03380852_original.jpg?aki_policy=small" },
      { "key": "7", "title": "Luxurious stone villa in Crete", "image": "http://a0.muscache.com/im/pictures/17588525/94250ea3_original.jpg?aki_policy=small" },
      { "key": "8", "title": "Best location design quiet AC free wifi citycenter", "image": "http://a0.muscache.com/im/pictures/6061582/a643208f_original.jpg?aki_policy=small" }
    ];

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories data={categories} />
          <Listings data={listings} />
        </ScrollView>
      </View>
    );
  }
}

export default Home = createStackNavigator({
  App: {
    screen: HomeScreen,
    navigationOptions: { title: 'Home' }
  }
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});