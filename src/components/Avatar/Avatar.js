import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import useInitials from "../../hooks/useInitials";
import { Pressable, View } from "native-base";
import { routes } from "../../utils/routes";

const Avatar = ({ navigation = {}, station = {} }) => {
  let { text } = useInitials(station.Name);

  const [initials, setInitials] = useState("");
  const [randomNum, setRandomNum] = useState(0);

  const [loaded] = useFonts({
    Montserrat: require("../../assets/font/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../../assets/font/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    setRandomNum(0);
  }, []);

  useEffect(() => {
    setInitials(text);
  }, [text]);

  const handlePlayerNavigation = () => {
    navigation.navigate(routes.player, {
      stationID: station.Id,
      initials: initials,
      station: station,
    });
  };

  return (
    loaded && (
      <Pressable
        onPress={handlePlayerNavigation}
        style={{
          borderColor: randomNum % 2 == 0 ? "#003876" : "#ee2a24",
          ...styles.container,
        }}
      >
        <Text
          style={{
            color: randomNum % 2 == 0 ? "#003876" : "#ee2a24",
            ...styles.text,
          }}
        >
          {text}
        </Text>
      </Pressable>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 55,
    width: 55,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "Montserrat-Bold",
  },
});

export default Avatar;
