import { Image, ImageSourcePropType, useColorScheme, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, TouchableOpacity } from '../Themed';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

type RecipeProps = {
    name: string;
    image: ImageSourcePropType;
    difficulty: string;
    preparationTime: number;
    calories: number;
}

const Recipe = ({ name, image, difficulty, preparationTime, calories }: RecipeProps) => {
    const colorScheme = useColorScheme();

    return (
        <TouchableOpacity style={styles.recipeItem} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
            <Image source={image} style={styles.recipeImage} />
            <View style={styles.recipeDescription} >
                <Text style={styles.recipeText}>
                    {name}
                </Text>
                <Text style={styles.difficulty}>
                    {difficulty}
                </Text>
                <View style={styles.recipeData} >
                    <View style={{ alignItems: 'center', alignSelf: 'flex-end', marginRight: 'auto' }}>
                        <MaterialCommunityIcons
                            name="stomach"
                            size={12}
                            color={Colors[colorScheme ?? 'light'].text}
                        />
                        <Text style={styles.infoText}>
                            {calories} kcal
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', alignSelf: 'flex-end', marginLeft: 'auto' }}>
                        <FontAwesome
                            name="clock-o"
                            size={12}
                            color={Colors[colorScheme ?? 'light'].text}
                        />
                        <Text style={styles.infoText}>
                            {preparationTime} min
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Recipe

const styles = StyleSheet.create({
    recipeItem: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
    },
    recipeImage: {
        width: '70%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-start'
    },
    recipeText: {
        fontWeight: 'bold',
    },
    difficulty: {
        marginVertical: 5,
        fontStyle: 'italic',
        fontSize: 13
    },
    recipeDescription: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 30,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        width: '30%',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 10,
    },
    recipeData: {
        display: 'flex',
        marginTop: 'auto',
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '20%',
    },
    infoText: {
        fontSize: 12,
    }
});