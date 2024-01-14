import { StyleSheet, Image, FlatList, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity } from '../../components/Themed';
import Category from '../../components/cards/Category';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

export default function DiscoverScreen() {
  const categories = [
    { name: 'Main Dishes', image: require('../../assets/images/maindish.jpg'), items: 10 },
    { name: 'Healthy Eats', image: require('../../assets/images/healthyeats.jpg'), items: 10 },
    { name: 'Desserts', image: require('../../assets/images/desserts.jpg'), items: 10 },
    { name: 'Soups & Stews', image: require('../../assets/images/soupsandstews.jpg'), items: 10 },
    { name: 'Cakes', image: require('../../assets/images/cakes.jpg'), items: 10 },
    { name: 'Vegetarian', image: require('../../assets/images/vegetarian.jpg'), items: 10 },
    { name: 'Appetizers', image: require('../../assets/images/apetizers.jpg'), items: 10 },
    { name: 'Seafood', image: require('../../assets/images/seafood.jpg'), items: 10 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={
          ({ item }) =>
            <Category
              name={item.name}
              image={item.image}
              amount={item.items}
            />
        }
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20, // Space between rows
  },
});