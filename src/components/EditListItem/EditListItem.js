import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {default as FAIcon} from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../utils/colors'
import Avatar from '../Avatar/Avatar'
import { Box, Text } from 'native-base'
import { borderColor } from 'styled-system'

const redBG = 'rgba(238, 42, 36, 0.1)';
const redBorder = '#ee2a24'

const greenBG = 'rgba(57, 181, 74, 0.15)';
const greenBorder = '#39b54a';


const EditListItem = ({ station = {} }) => {
  const [isFavorite, setIsFavorite] = useState(station.favorite ?? false)
  const [isActive, setIsActive] = useState(station.isActive ?? false)


  const toggleFavorite = () => setIsFavorite(!isFavorite)

  return (
    <TouchableOpacity style={styles.container}>
      <Avatar />
      <View style={styles.textContainer}>
        <Text style={{
          fontSize: 20, color: '#003876',
          fontFamily: 'Montserrat-Bold',
          paddingTop: 10
        }}>{station.name ?? 'Name'}</Text>
        <Text style={{ color: '#003876', fontSize: 12, fontFamily: 'Montserrat' }}>{station.province ?? 'Province'}</Text>
      </View>

      <Box position="absolute" right="10" mt={5} h={5} w={12} bg={isActive ? greenBG : redBG} borderRadius={6} display='flex' > 
          <Text
            w="100%"
            fontFamily="Montserrat"
            fontSize={10}
            m={0}
            p={0}
            pt={0.5}
            color={isActive ? greenBorder : redBorder}
            alignSelf='center'
            textAlign="center"
            >
            {isActive ? 'Activo': 'Inactivo'}
          </Text>
      </Box>
      
      <TouchableOpacity onPress={toggleFavorite} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 'auto' }}>
        <FAIcon name="pen" style={{ fontSize: 25, paddingBottom: 10 }} color={colors.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    minWidth:"50%",
    
  },
  textContainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column'
  }
})


export default EditListItem
