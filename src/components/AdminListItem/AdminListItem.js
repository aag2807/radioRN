import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { startPlaying, stopPlaying } from "../../store/features/stations";
import { colors } from "../../utils/colors";
import Avatar from "../Avatar/Avatar";

const AdminListItem = ({ station = {} }) => {
  const dispatch = useDispatch();

  const { Allprovinces } = useSelector((state) => state.provinces);

  const togglePlaying = () => {
    if (station.IsPlaying) {
      dispatch(stopPlaying(station));
    } else {
      dispatch(startPlaying(station));
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Avatar name={station.Name} />
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 16,
            color: "#003876",
            fontFamily: "Montserrat-Bold",
          }}
        >
          {station.Name ?? "cargando"}
        </Text>
        <Text
          style={{ color: "#003876", fontSize: 12, fontFamily: "Montserrat" }}
        >
          {Allprovinces[station.PlaceId] ?? "Cargando"}
        </Text>
      </View>
      <TouchableOpacity
        onPress={togglePlaying}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginLeft: "auto",
        }}
      >
        {station.IsPlaying ? (
          <Icon
            name="pause-sharp"
            style={{ fontSize: 25, paddingBottom: 10 }}
            color={colors.primary}
          />
        ) : (
          <Icon
            name="play-sharp"
            style={{ fontSize: 25, paddingBottom: 10 }}
            color={colors.primary}
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

export default AdminListItem;
