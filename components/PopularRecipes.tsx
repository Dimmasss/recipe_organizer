import { View, Text, TouchableOpacity } from '../components/Themed';
import { FlatList, StyleSheet } from 'react-native';
import Recipe from './cards/RecipeCard';
import React from 'react'

const PopularRecipes = () => {
    const popularRecipes = [
        { name: 'Chicken Soup', image: require('../assets/images/chickensoup.jpg'), difficulty: 'easy', preparationTime: 30, calories: 200 },
        { name: 'Pancakes', image: require('../assets/images/pancakes.jpg'), difficulty: 'easy', preparationTime: 30, calories: 200 },
        { name: 'Pasta', image: require('../assets/images/pasta.jpg'), difficulty: 'medium', preparationTime: 30, calories: 200 },
        { name: 'Pizza', image: require('../assets/images/pizza.jpg'), difficulty: 'medium', preparationTime: 30, calories: 200 },
        { name: 'Salad', image: require('../assets/images/salad.jpg'), difficulty: 'easy', preparationTime: 30, calories: 200 },
    ];

    const recipeDifficulties = ['easy', 'medium', 'hard'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Popular Recipes</Text>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={recipeDifficulties}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab}
                            onTouchEnd={() => {
                                // setActiveJobType(item);
                                // router.push(`/search/${item}`);
                            }}>
                            <Text style={styles.tabText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 12 }}
                    horizontal
                />
            </View>
            <FlatList
                data={popularRecipes}
                renderItem={
                    ({ item }) =>
                        <Recipe
                            name={item.name}
                            image={item.image}
                            difficulty={item.difficulty}
                            preparationTime={item.preparationTime}
                            calories={item.calories}
                        />
                }
                keyExtractor={(item, index) => String(index)}
                key={1}
                numColumns={1}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default PopularRecipes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    tabsContainer: {
        width: "100%",
        marginBottom: 16,
    },
    tab: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#C1C0C8',
    },
    tabText: {
        fontFamily: 'DMMedium',
        color: '#C1C0C8',
    },
    title: {
        fontSize: 24,
        fontFamily: 'DMBold',
        marginBottom: 20,
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 20, // Space between rows
    },
});