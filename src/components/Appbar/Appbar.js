import React from "react";
import { Box, HStack, IconButton, StatusBar, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { StackActions } from "@react-navigation/routers";

//utils
import { colors } from "../../utils/colors";
import { routes } from "../../utils/routes";

const AppBar = ({ navigation, title = "", route = routes.home }) => {
  const popAction = StackActions.pop(1);

  const handleGoHome = () => navigation.dispatch(popAction);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <Box safeAreaTop backgroundColor={colors.primary} />

      <HStack
        bg={colors.primary}
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack w="100%" alignItems="center">
          <IconButton
            marginRight="auto"
            icon={<Icon name="chevron-back" color={colors.white} size={20} />}
            marginTop={2.5}
            onPress={handleGoHome}
          />
          <Text
            color="white"
            fontSize="18"
            style={{ marginRight: "auto", paddingRight: 35, paddingTop: 5 }}
            fontWeight="bold"
          >
            {title}
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

export default AppBar;
