import { Image, ImageSourcePropType, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from '../Themed';
import Colors from '../../constants/Colors';

type CategoryProps = {
    name: string;
    image: ImageSourcePropType;
    amount: number;
}

const Category = ({ name, image, amount }: CategoryProps) => {
    const colorScheme = useColorScheme();

    return (
        <TouchableOpacity style={styles.categoryItem} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
            <Image source={image} style={styles.categoryImage} />
            <View style={styles.categoryDescription} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
                <Text style={styles.categoryText}>
                    {name}
                </Text>
                <FontAwesome
                    name="paperclip"
                    size={12}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 'auto', marginRight: 5 }}
                />
                <Text style={styles.categoryText}>
                    {amount}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryItem: {
        width: '45%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingTop: 0
    },
    categoryImage: {
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    categoryText: {
        fontFamily: 'DMBold',
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

export default Category