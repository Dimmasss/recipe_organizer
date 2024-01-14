import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';


export default function AppInfo() {
    return (
        <View>
            <View style={styles.mainContainer}>
                <Text style={styles.mainText} lightColor={Colors.light.tint}>
                    <Text style={styles.boldText}>Cook Book Page: </Text>
                    This is the heart of the app, where users can access a personal
                    collection of recipes. It's designed with a user-friendly interface showcasing
                    recipes in a grid or list format. Each recipe is displayed with a thumbnail image,
                    title, and brief description. When a recipe is selected, it opens to reveal detailed
                    information including ingredients, step-by-step instructions, cooking time, and
                    nutritional facts. Users can easily add new recipes, edit existing ones, or delete them.
                    This page also offers a search bar and filter options to sort recipes by cuisine,
                    dietary restrictions, or ingredients.
                </Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.mainText} lightColor={Colors.light.tint}>
                    <Text style={styles.boldText}>Discover Page: </Text>
                    Aimed at inspiring users, this page features a variety
                    of recipes from around the world. It includes a dynamic and visually
                    appealing layout with high-quality images. The Discover page offers
                    curated collections, such as "Weeknight Dinners," "Healthy Eats," or
                    "Desserts," and also provides a trending section based on what’s popular
                    among the app's community. Users can browse, search, and filter recipes
                    based on their preferences. Selecting a recipe offers the option to save
                    it to their Cook Book for later use.
                </Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Text style={styles.mainText} lightColor={Colors.light.tint}>
                    <Text style={styles.boldText}>Saved Page: </Text>
                    This page is a dedicated space for users to quickly access
                    all their saved and favorite recipes from the Cook Book and Discover pages.
                    It allows users to organize their saved recipes into customizable folders or
                    categories like "Must Try," "Family Favorites," or "Holiday Specials."
                    Each saved recipe is displayed with a thumbnail, title, and a brief description.
                    Users can also share their favorite recipes with friends or family directly
                    from this page.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    mainContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    mainText: {
        textAlign: 'left',
    },
    separator: {
        marginVertical: 15,
        height: 1,
        width: '100%',
    },
});
