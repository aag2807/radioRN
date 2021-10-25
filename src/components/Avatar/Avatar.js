import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';

const Avatar = () => {
    const [loaded] = useFonts({
        Montserrat: require('../../assets/font/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/font/Montserrat-Bold.ttf'),
    });

    return (
        loaded && (
            <View style={styles.container}>
                <Text style={styles.text}>JS</Text>
            </View>
        )

    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 55,
        width: 55,
        borderColor: '#003876',
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#003876',
        fontFamily: 'Montserrat-Bold'
    },
})


export default Avatar
