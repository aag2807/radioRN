import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../utils/colors'
import Avatar from '../Avatar/Avatar'

const AdminListItem = ({ station = {} }) => {
  const [isFavorite, setIsFavorite] = useState(station.favorite ?? false)


  const toggleFavorite = () => setIsFavorite(!isFavorite)
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar />
      <View style={styles.textContainer}>
        <Text style={{
          fontSize: 20, color: '#003876',
          fontFamily: 'Montserrat-Bold'
        }}>{station.name ?? 'Name'}</Text>
        <Text style={{ color: '#003876', fontSize: 12, fontFamily: 'Montserrat' }}>{station.province ?? 'Province'}</Text>
      </View>
      <TouchableOpacity onPress={toggleFavorite} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 'auto' }}>
        {
          isFavorite ?
            <Icon name="pause-sharp" style={{ fontSize: 25, paddingBottom: 10 }} color={colors.primary} />
            :
            <Icon name="play-sharp" style={{ fontSize: 25, paddingBottom: 10 }} color={colors.primary} />
        }
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
  },
  textContainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column'
  }
})


export default AdminListItem
