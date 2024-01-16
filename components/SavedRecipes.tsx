import { View, Text } from './Themed';
import React from 'react';
import Recipe from './cards/Recipe';
import { ImageSourcePropType } from 'react-native';

interface Recipe {
    name: string;
    image: ImageSourcePropType;
    difficulty: string;
    preparationTime: number;
    calories: number;
}

interface SavedRecipesProps {
    recipes: Recipe[];
}

const SavedRecipes: React.FC<SavedRecipesProps> = ({ recipes }) => {
    if (recipes.length === 0) {
        return (
            <View>
                <Text style={{ fontFamily: 'DMRegular' }}>No recipes saved yet</Text>
            </View>
        );
    }

    return (
        <View>
            {recipes.map((recipe, index) => (
                <Recipe
                    key={index}
                    name={recipe.name}
                    image={recipe.image}
                    difficulty={recipe.difficulty}
                    preparationTime={recipe.preparationTime}
                    calories={recipe.calories}
                />
            ))}
        </View>
    );
};

export default SavedRecipes;