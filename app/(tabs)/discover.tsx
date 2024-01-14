import { StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function DiscoverScreen() {
  // const categories = ['Weeknight Dinners', 'Healthy Eats', 'Desserts', 'Low calories',
  //   'Gluten-free', 'Vegetarian', 'Keto', 'Paleo', 'Whole30', 'Quick & Easy',
  //   'Slow Cooker', 'Instant Pot', 'Air Fryer', 'Sheet Pan', 'Casseroles',
  //   'Soups & Stews', 'Breads', 'Cookies', 'Cakes', 'Chicken', 'Beef', 'Pork',
  //   'Seafood', 'Pasta', 'Salads', 'Sandwiches', 'Appetizers', 'Breakfast & Brunch',
  //   'Drinks', 'Desserts', 'Snacks', 'Side Dishes', 'Main Dishes', 'Lunch',
  //   'Dinner', 'Dessert', 'Breakfast', 'Brunch', 'Appetizer', 'Snack', 'Side Dish', 'Main Dish',];

  const categories = [
    { name: 'Main Dish', image: require('../../assets/images/maindish.jpg') },
    { name: 'Healthy Eats', image: require('../../assets/images/healthyeats.jpg') },
    { name: 'Desserts', image: require('../../assets/images/desserts.jpg') },
    { name: 'Soups & Stews', image: require('../../assets/images/soupsandstews.jpg') },
    { name: 'Cakes', image: require('../../assets/images/cakes.jpg') },
    { name: 'Vegetarian', image: require('../../assets/images/vegetarian.jpg') },
    { name: 'Appetizers', image: require('../../assets/images/apetizers.jpg') },
    { name: 'Seafood', image: require('../../assets/images/seafood.jpg') },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
        numColumns={2} // Adjust the number of columns here
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20, // Space between rows
  },
  categoryItem: {
    width: '45%', // Adjust the width for item spacing
    height: 200, // Adjust the height based on your layout
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '80%', // Image height is 80% of the item container
    borderRadius: 10, // Optional: if you want rounded corners
  },
  categoryText: {
    fontWeight: 'bold',
    marginTop: 5, // Space between image and text
  },
});