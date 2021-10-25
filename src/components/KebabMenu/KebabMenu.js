import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { marginRight } from 'styled-system'

const KebabMenu = () => {
	return (
		<TouchableOpacity style={styles.menu}>
			<View style={styles.dot}></View>
			<View style={styles.dot}></View>
			<View style={styles.dot}></View>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	menu: {
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		marginTop: 3,
		marginRight: 5,
	},
	dot: {
		height: 4,
		width: 4,
		borderRadius: 50,
		marginBottom: 3,
		backgroundColor: '#fff'
	},
})
export default KebabMenu
