import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import { Box, Center, Heading, Spinner, VStack } from "native-base";

//HOOKS
import useGetStations from "../hooks/useGetStations";

//UTILS
import { colors } from "../utils/colors";

//COMPONENTS
import AdminListItem from "../components/AdminListItem/AdminListItem";

const AdminHome = ({ navigation }) => {

  const { isLoading } = useGetStations();

  const { allStations } = useSelector((state) => state.stations);

  return (
    <View>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.searchbarContainer}>
            <View style={styles.iconBox}>
              <Icon name="search" style={{ fontSize: 18 }} color={"#fff"} />
            </View>
            <TextInput placeholder="Buscar" style={styles.searchbar} />
          </View>
         
          <View horizontal={false} style={styles.content}>
            {allStations &&
              allStations.map((station, index) => (
                <AdminListItem station={station} key={index} />
              ))}
          </View>
        </ScrollView>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: "100%",
  },
  searchbarContainer: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchbar: {
    marginTop: 20,
    borderRadius: 7,
    backgroundColor: "#E5E7E7",
    height: 45,
    paddingLeft: 13,
    width: "88%",
    marginLeft: 30,
    fontFamily: "Montserrat",
  },
  iconBox: {
    height: 45,
    width: 40,
    backgroundColor: "#003877",
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  content: {
    width: "100%",
  },
});
export default AdminHome;
