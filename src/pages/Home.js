import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";

import ListItem from "../components/ListItem/ListItem";
import { routes } from "../utils/routes";
import { HTTPStationClient } from "../utils/httpclient";
import { AlertModal } from "../components/Modal/AlertModal";

//HOOKS
import useGetStations from "../hooks/useGetStations";
import { Box, Center, Heading, HStack, Spinner, VStack } from "native-base";
import { colors } from "../utils/colors";

const Home = ({ navigation }) => {
  const { isLoading } = useGetStations();

  const { allStations } = useSelector((state) => state.stations);

  console.log(allStations);
  return (
    <View>
      {!isLoading ? (
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
          <Text
            style={{
              fontSize: 12,
              paddingLeft: 5,
              marginTop: 8,
              color: "#003876",
              fontFamily: "Montserrat",
            }}
          >
            Escuchados Recientemente
          </Text>
          <Text
            style={{
              fontSize: 17,
              textAlign: "center",
              marginTop: 10,
              color: "#003876",
              fontFamily: "Montserrat",
            }}
          >
            No tienes emisoras escuchadas recientemente.
          </Text>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#003877",
              marginVertical: 20,
            }}
          ></View>
          <View horizontal={false} style={styles.content}>
            {allStations &&
              allStations.map((station, index) => (
                <ListItem station={station} key={index} />
              ))}
          </View>
        </ScrollView>
      ) : (
				<VStack h="100%">

        <Center flex={1} >
          <Box
            flex={1}
						display="flex"
            flexDir={"column"}
            justifyContent="center"
            space={2}
            alignItems="center"
          >
            <Spinner size={"lg"} accessibilityLabel="Loading posts" color={colors.primary}/>
            <Heading color={colors.primary} fontSize="sm">
              Cargando mas emisoras
            </Heading>
          </Box>
        </Center>
				</VStack>
      )}
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
    height: 40,
    paddingLeft: 13,
    width: "88%",
    marginLeft: 30,
    fontFamily: "Montserrat",
  },
  iconBox: {
    height: 40,
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
export default Home;
