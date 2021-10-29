import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Share } from "react-native";
import {
  Box,
  Center,
  HStack,
  IconButton,
  Text,
  View,
  VStack,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { StackActions } from "@react-navigation/routers";

import Icon from "react-native-vector-icons/FontAwesome5";
import { default as FAIcon } from "react-native-vector-icons/FontAwesome";
import { default as IonicIcon } from "react-native-vector-icons/Ionicons";

import { Audio } from 'expo-av';

//Components
import KebabMenu from "../components/KebabMenu/KebabMenu";

//UTILS
import { colors } from "../utils/colors";
import {
  addToFavorites,
  removeFromFavorites,
  startPlaying,
  stopPlaying,
} from "../store/features/stations";
import { setPlayer } from "../store/features/player";

const Player = ({ navigation, route }) => {
  const { initials, station: passedStation } = route.params;
  const dispatch = useDispatch();
  const popAction = StackActions.pop(1);


  const [station, setStation] = useState({});

  const { Allprovinces } = useSelector((state) => state.provinces);
  const { player } = useSelector((state) => state.player);

  useEffect(() => {
    const bootstrap = async () => {
      setStation(passedStation);
      try{
        const { sound } = await Audio.Sound.createAsync({ uri: passedStation.Source });
        dispatch(setPlayer(sound));
      }catch(err){
        console.error(err)
      }
      console.log('SETTING UP PLAYER')
    }
    bootstrap();
  }, []);

  const handleGoBack = () => navigation.dispatch(popAction);


  const updateCurrentStation = (field, value) => {
    let updatedStation = Object.assign({}, station);
    updatedStation[field] = value;
    setStation(updatedStation);
  }

  const handleFavorite = () => {
    if (station.Favorite) {
      dispatch(removeFromFavorites(station));
      updateCurrentStation('Favorite', false)
    } else {
      dispatch(addToFavorites(station));
      updateCurrentStation('Favorite', true)
    }
  };

  const handlePlayButton = () => {
    if (station.IsPlaying) {
      dispatch(stopPlaying(station));
      updateCurrentStation('IsPlaying', false)
      stopPlayingAudio()
    } else {
      dispatch(startPlaying(station));
      updateCurrentStation('IsPlaying', true)
      startPlayingAudio()
    }

  }

  const startPlayingAudio = async () => {
    try {
      await player.playAsync()
    } catch (err) {
      console.error(err)
    }
  }


  const stopPlayingAudio = async () => {
    console.log('HIT STOP')
    try {
      await player.stopAsync()
    } catch (err) {
      console.error(err)
    }
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      {/** HEADER-TEXT-MENU START*/}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/logoBlanco.png")}
        />
        <Text style={styles.title}>Radio CTC</Text>
        <KebabMenu navigation={navigation} />
      </View>
      {/** HEADER-TEXT-MENU END*/}

      {/** ICONS AND BACK BUTTONS START*/}
      <HStack px="1" py="3" justifyContent="space-between" alignItems="center">
        <HStack w="100%" alignItems="center">
          <IconButton
            marginRight="auto"
            onPress={handleGoBack}
            icon={<Icon name="chevron-left" color={colors.primary} size={30} />}
            marginTop={-0.5}
          />

          {station.Favorite ? (
            <IconButton
              onPress={handleFavorite}
              marginLeft="auto"
              icon={<FAIcon name="heart" color={colors.secondary} size={30} />}
              marginTop={-0.5}
            />
          ) : (
            <IconButton
              onPress={handleFavorite}
              icon={
                <FAIcon name="heart-o" color={colors.secondary} size={30} />
              }
              marginTop={-0.5}
            />
          )}

          <IconButton
            onPress={onShare}
            icon={
              <IonicIcon
                name="md-share-social-outline"
                color={colors.primary}
                size={40}
              />
            }
            marginTop={-0.5}
          />
        </HStack>
      </HStack>
      {/** ICONS AND BACK BUTTONS END*/}

      {/** AVATAR AND TEXT START*/}
      <VStack w="100%" alignItems="center">
        <Box style={styles.container} borderColor={colors.primary} mt={12}>
          <Text fontSize="70" color={colors.primary}>
            {initials}
          </Text>
        </Box>
        <Center mt={5}>
          <Text color={colors.primary} fontSize={30}>
            {station.Name ?? "Cargando"}
          </Text>
          <Text fontSize={22} color={colors.primary}>
            {Allprovinces[station.PlaceId] ?? "Cargando"}
          </Text>
        </Center>
      </VStack>
      {/** AVATAR AND TEXT END*/}

      {/** PLAY ICONS START*/}
      <VStack w="100%" mt={10} alignItems="center">
        <Center>
          <HStack>
            <IconButton
              icon={
                <IonicIcon
                  style={{ marginTop: 2 }}
                  name="ios-play-skip-back"
                  color={colors.primary}
                  size={50}
                />
              }
              marginTop={-0.5}
            />

            <Center
              borderRadius={50}
              h={16}
              w={16}
              mt={1}
              activeStations
              bg={colors.primary}
              justifyContent="center"
              alignItems="center"
            >
              {station.IsPlaying ? (
                <IconButton
                  borderRadius={50}
                  onPress={handlePlayButton}
                  w="100%"
                  h="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  icon={
                    <Icon
                      name="pause"
                      style={{ marginTop: 2 }}
                      color={colors.white}
                      size={30}
                    />
                  }
                />
              ) : (
                <IconButton
                  borderRadius={50}
                  onPress={handlePlayButton}
                  w="100%"
                  h="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  icon={
                    <Icon
                      style={{ marginTop: 2, paddingLeft: 5 }}
                      name="play"
                      color={colors.white}
                      size={30}
                    />
                  }
                />
              )}
            </Center>

            <IconButton
              icon={
                <IonicIcon
                  style={{ marginTop: 2 }}
                  name="ios-play-skip-forward"
                  color={colors.primary}
                  size={50}
                />
              }
              marginTop={-0.5}
            />
          </HStack>
        </Center>
      </VStack>
      {/** PLAY ICONS END*/}
    </View>
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
  container: {
    display: "flex",
    height: 150,
    width: 150,
    borderWidth: 4,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "Montserrat-Bold",
  },
});

export default Player;
