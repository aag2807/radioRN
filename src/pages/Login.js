import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Center, Input, VStack } from "native-base";

import AppBar from "../components/Appbar/Appbar";

import { colors } from "../utils/colors";
import { routes } from "../utils/routes";

const Login = ({ navigation }) => {
  const handleLogIn = () => {
    navigation.navigate(routes.admin);
  };

  return (
    <>
      <AppBar navigation={navigation} title="CTC RADIO" />
      <Center alignItems="center">
        <Image
          source={require("../assets/logo_login.png")}
          style={{ height: 250, width: 250, marginTop: -20 }}
        />
        <VStack w="100%" alignItems="center" mt={-8}>
          <Input
            borderRadius="10"
            paddingLeft="5"
            color="#323637"
            fontSize="18"
            bg={colors.input}
            w="80%"
            style={{ height: 60 }}
            _focus={{ borderColor: "gray.200" }}
          />
          <Input
            borderRadius="10"
            paddingLeft="5"
            color="#323637"
            fontSize="18"
            bg={colors.input}
            w="80%"
            style={{ height: 60 }}
            _focus={{ borderColor: "gray.200" }}
            mt={8}
          />

          <Button
            bg={colors.primary}
            w="80%"
            style={{ marginTop: 60, height: 50 }}
            borderRadius="10"
            fontSize={28}
            fontWeight={"bold"}
            onPress={handleLogIn}
          >
            <Text
              style={{ fontSize: 25, color: colors.white }}
              fontWeight="bold"
            >
              ACCEDER
            </Text>
          </Button>
        </VStack>
      </Center>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
