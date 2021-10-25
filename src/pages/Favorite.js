import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import ListItem from '../components/ListItem/ListItem'

const Favorite = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View horizontal={false} style={styles.content} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
           
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: '100%',
        minHeight:'100%'
    },
    content: {
        width: '100%',
        marginTop:20
    }
});

export default Favorite
