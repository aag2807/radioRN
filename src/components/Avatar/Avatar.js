import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';




const Avatar = () => {
	const [loaded] = useFonts({
		Montserrat: require('../../assets/font/Montserrat-Regular.ttf'),
		'Montserrat-Bold': require('../../assets/font/Montserrat-Bold.ttf'),
	});

	const [randomNum, setRandomNum] = useState(0)

	useEffect(() => {
		//let ran = Math.round(Math.random() * 100)
		setRandomNum(0)
	}, [])

	return (
		loaded && (
			<View style={{ borderColor: randomNum % 2 == 0 ? '#003876' : '#ee2a24', ...styles.container }}>
				<Text style={{color:randomNum % 2 == 0 ? '#003876' : '#ee2a24', ...styles.text}}>JS</Text>
			</View>
		)

	)
}
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: 55,
		width: 55,
		borderWidth: 2,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 25,
		fontFamily: 'Montserrat-Bold'
	},
})


export default Avatar
