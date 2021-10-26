import React from "react";
import { TextInput, StyleSheet, } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import { default as IonicIcon } from "react-native-vector-icons/Ionicons";
import { Button, Center, HStack, View, Text, Select, ScrollView, Box } from "native-base";

//HOOKS
import useGetStations from "../hooks/useGetStations";

//UTILS
import { colors } from "../utils/colors";

//COMPONENTS
import { TouchableOpacity } from "react-native-gesture-handler";
import EditListItem from "../components/EditListItem/EditListItem";
import { routes } from "../utils/routes";


const AdminGestion = ({ navigation }) => {
  const { isLoading } = useGetStations();

  const { allStations } = useSelector((state) => state.stations);

  return (
    <View>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

        <Center w="100%">
          <TouchableOpacity 
            onPress={() => navigation.navigate(routes.edit)}
            style={{ 
              backgroundColor: colors.primary, 
              height: 53, 
              marginTop: 40,
              borderRadius: 10, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' }}
          >
            <HStack w="100%" justifyContent="center">
              <Text color={colors.white} style={{ paddingTop: 9, paddingRight: 10, marginLeft: 60 }} display="flex">
                <IonicIcon size={30} style={{ marginLeft: 'auto' }} name='add-sharp' />
              </Text>
              <Text color={colors.white} style={{ marginRight: 60 }} 
                fontSize="18"
              >
                Agregar emisora
              </Text>
            </HStack>
          </TouchableOpacity>
        </Center>


        <HStack>
          <View style={styles.searchbarContainer}>
            <View style={styles.iconBox}>
              <Icon name="search" style={{ fontSize: 18 }} color={"#fff"} />
            </View>
            <TextInput 
            placeholder="Buscar" style={styles.searchbar} />
          </View>

          <Select 
            w="45%" 
            mt={5} 
            ml={2} 
            fontFamily="Montserrat" 
            fontSize="12"
            style={{ height: 33 }} 
            borderColor='transparent' 
            borderRadius={7} 
            bg={'#E5E7E7'}
            accessibilityLabel="Filtrar"
            placeholder="Filtrar"
            _text={{
              fontSize: 16
            }}
          >
            <Select.Item label="Activa" value="ux" />
            <Select.Item label="Desactivada" value="web" />
            <Select.Item label="Todas" value="ui" />
          </Select>
        </HStack>

        <View horizontal={false} style={styles.content}>
          {allStations &&
            allStations.map((station, index) => (
              <EditListItem station={station} />
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
    width: '50%'
  },
  searchbar: {
    marginTop: 20,
    borderRadius: 7,
    backgroundColor: "#E5E7E7",
    height: 35,
    width: 130,
    paddingLeft: 25,
    marginLeft: 30,
    marginRight: 'auto',
    fontFamily: "Montserrat",
    fontSize: 12
  },
  iconBox: {
    height: 35,
    width: 40,
    backgroundColor: "#003877",
    position: "absolute",
    zIndex: 2,
    bottom: 1,
    left: 7,
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
export default AdminGestion;
