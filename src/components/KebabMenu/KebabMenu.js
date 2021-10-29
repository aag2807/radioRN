import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { colors } from "../../utils/colors";
import { routes } from "../../utils/routes";

const KebabMenu = ({ navigation }) => {
  const handleNavigate = (to) => navigation.navigate(to);

  return (
    <Menu>
      <MenuTrigger>
        <TouchableOpacity style={styles.menu}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </TouchableOpacity>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => handleNavigate(routes.term)}>
          <Text style={{ color: colors.primary, margin: 10 }}>
            Terminos de uso
          </Text>
        </MenuOption>

        <MenuOption onSelect={() => handleNavigate(routes.policy)}>
          <Text style={{ color: colors.primary, margin: 10 }}>
            Politica de privacidad
          </Text>
        </MenuOption>

        <MenuOption onSelect={() => handleNavigate(routes.about)}>
          <Text style={{ color: colors.primary, margin: 10 }}>
            Acerca de la aplicacion
          </Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 3,
    marginRight: 5,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 50,
    marginBottom: 3,
    backgroundColor: "#fff",
  },
});
export default KebabMenu;
