import { Text } from "native-base";
import React from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem/ListItem";
import { colors } from "../utils/colors";

const Favorite = ({ navigation }) => {
  const { favoriteStations } = useSelector((state) => state.stations);

  return (
    <ScrollView style={styles.container}>
      <View
        horizontal={false}
        style={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {favoriteStations.length ? (
          favoriteStations.map((station, index) => (
            <ListItem navigation={navigation} station={station} key={index} />
          ))
        ) : (
          <Text
            color={colors.primary}
            textAlign="center"
            fontSize="lg"
            fontFamily="Montserrat"
          >
            No has seleccionado emisoras favoritas.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: "100%",
    minHeight: "100%",
  },
  content: {
    width: "100%",
    marginTop: 20,
  },
});

export default Favorite;
