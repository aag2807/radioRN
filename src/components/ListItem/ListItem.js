import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/features/stations";
import Avatar from "../Avatar/Avatar";

const ListItem = ({ navigation = {}, station = {} }) => {
  const dispatch = useDispatch();

  const { Allprovinces } = useSelector((state) => state.provinces);

  const toggleFavorite = () => {
    if (station.Favorite) {
      dispatch(removeFromFavorites(station));
    } else {
      dispatch(addToFavorites(station));
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Avatar navigation={navigation} station={station} />
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 16,
            color: "#003876",
            fontFamily: "Montserrat-Bold",
          }}
        >
          {station.Name ?? "Name"}
        </Text>
        <Text
          style={{ color: "#003876", fontSize: 12, fontFamily: "Montserrat" }}
        >
          {Allprovinces[station.PlaceId] ?? "Cargando"}
        </Text>
      </View>
      <TouchableOpacity
        onPress={toggleFavorite}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginLeft: "auto",
        }}
      >
        {station.Favorite ? (
          <Icon
            name="heart"
            style={{ fontSize: 25, paddingBottom: 10 }}
            color={"#EE2A24"}
          />
        ) : (
          <Icon
            name="heart-o"
            style={{ fontSize: 25, paddingBottom: 10 }}
            color={"#EE2A24"}
          />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    height: 60,
  },
  textContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
});

export default ListItem;
