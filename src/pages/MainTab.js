import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./Home";
import Favorite from "./Favorite";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
import KebabMenu from "../components/KebabMenu/KebabMenu";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";

const Tab = createMaterialTopTabNavigator();

const MainTab = (props) => {
  const route = useRoute();
  const [isHome, setIsHome] = useState(true);

  const [loaded] = useFonts({
    Montserrat: require("../assets/font/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../assets/font/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    let isCurrentlyHome =
      route?.state?.history[1]?.key.includes("home") ?? true;
    setIsHome(isCurrentlyHome);
  }, [route]);

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/logoBlanco.png")}
        />
        <Text style={styles.title}>Radio CTC</Text>
        <KebabMenu navigation={props.navigation} />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12, fontFamily: "Montserrat" },
          showIcon: true,
          activeTintColor: "#003876",
          inactiveTintColor: "#fff",
          indicatorStyle: {
            backgroundColor: "#fff",
            height: "100%",
          },
          iconStyle: {
            margin: 0,
            position: "absolute",
            padding: 0,
            top: 2,
            left: -10,
          },
          style: {
            width: "100%",
            elevation: 0,
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#003876",
          },
        }}
      >
        <Tab.Screen
          name="home"
          options={{
            tabBarIcon: () => (
              <Icon color={isHome ? "#003876" : "#fff"} name="home" size={25} />
            ),
            title: "",
          }}
          component={Home}
        />
        <Tab.Screen
          name="favorite"
          options={{ tabBarLabel: "Favoritos" }}
          component={Favorite}
        />
      </Tab.Navigator>
      <View
        style={{
          height: 300,
          backgroundColor: "red",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    marginTop: 28,
    backgroundColor: "#003876",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  menu: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 3,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 50,
    marginBottom: 3,
    backgroundColor: "#FFF",
  },
});

export default MainTab;
