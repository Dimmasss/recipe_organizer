import { ImageSourcePropType, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import SavedRecipes from '../../components/SavedRecipes';

export default function SavedScreen() {
  interface Recipe {
    name: string;
    image: ImageSourcePropType;
    difficulty: string;
    preparationTime: number;
    calories: number;
  }

  const recipes: Recipe[] = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SavedRecipes recipes={recipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'DMBold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
