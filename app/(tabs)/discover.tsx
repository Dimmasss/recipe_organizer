import { StyleSheet, Image, FlatList, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, TouchableOpacity } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

export default function DiscoverScreen() {
  // const categories = ['Weeknight Dinners', 'Healthy Eats', 'Desserts', 'Low calories',
  //   'Gluten-free', 'Vegetarian', 'Keto', 'Paleo', 'Whole30', 'Quick & Easy',
  //   'Slow Cooker', 'Instant Pot', 'Air Fryer', 'Sheet Pan', 'Casseroles',
  //   'Soups & Stews', 'Breads', 'Cookies', 'Cakes', 'Chicken', 'Beef', 'Pork',
  //   'Seafood', 'Pasta', 'Salads', 'Sandwiches', 'Appetizers', 'Breakfast & Brunch',
  //   'Drinks', 'Desserts', 'Snacks', 'Side Dishes', 'Main Dishes', 'Lunch',
  //   'Dinner', 'Dessert', 'Breakfast', 'Brunch', 'Appetizer', 'Snack', 'Side Dish', 'Main Dish',];
  const colorScheme = useColorScheme();

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

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.categoryItem} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <Image source={item.image} style={styles.categoryImage} />
      <View style={styles.categoryDescription} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
        <Text style={styles.categoryText}>
          {item.name}
        </Text>
        <FontAwesome
          name="paperclip"
          size={12}
          color={Colors[colorScheme ?? 'light'].text}
          style={{ marginLeft: 'auto', marginRight: 5 }}
        />
        <Text style={styles.categoryText}>
          {item.items}
        </Text>
      </View>
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
    marginLeft: 10,
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
    borderRadius: 10,
    paddingTop: 0
  },
  categoryImage: {
    width: '100%',
    height: '80%', // Image height is 80% of the item container
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // marginTop: -10
  },
  categoryText: {
    fontWeight: 'bold',
  },
  categoryDescription: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
  }
});