import React from 'react'
import { Box, Button, Center, HStack, Input, Select, Switch, Text, View } from 'native-base'
import AppBar from '../components/Appbar/Appbar'
import { colors } from '../utils/colors'
import { routes } from '../utils/routes'
import { Pressable } from 'react-native'
import { StackActions } from '@react-navigation/native';



const Edit = ({ navigation }) => {
  const popAction = StackActions.pop(1);

  const handleGoBack = () => navigation.dispatch(popAction);

  return (
    <View flex={1}>
      <AppBar title="Editar Emisora" route={routes.admin} />
      <Center>
        <HStack mt={10}>
          <Box
            borderRadius={12}
            h={20}
            w={20}
            bg={colors.primary}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color={colors.white}
              textAlign="center"
              fontSize="3xl"
            >
              N/A
            </Text>
          </Box>
          <Box
            borderRadius={12}
            h={20}
            w={'40%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color={colors.primary}
              textAlign="center"
              fontSize="3xl"
              lineHeight="sm"
            >
              Icono de perfil
            </Text>
          </Box>
        </HStack>
        <Input placeholder="Nombre" borderRadius="10" paddingLeft="5" color="#323637" fontSize="18" bg={colors.input} w="80%" style={{ height: 60 }} _focus={{ borderColor: 'gray.200' }} mt={8} />
        <Select placeholder="Provincia" borderRadius="10" paddingLeft="5" color="#323637" fontSize="18" bg={colors.input} w="80%" style={{ height: 60 }} _focus={{ borderColor: 'gray.200' }} mt={8}>
          <Select.Item>
            HEllo
          </Select.Item>
        </Select>
        <Input placeholder="URI" borderRadius="10" paddingLeft="5" color="#323637" fontSize="18" bg={colors.input} w="80%" style={{ height: 60 }} _focus={{ borderColor: 'gray.200' }} mt={8} />

        <HStack w="100%">
          <Text fontFamily="Montserrat" color={colors.primary} pt={2} fontSize={25} ml={10}>Estatus</Text>
          <Switch
            ml={'auto'}
            mr={10}
            size="lg"

            offTrackColor="rgba(238, 42, 36, 0.3)"
            offThumbColor="#ee2a24"

            onTrackColor="rgba(57, 181, 74, 0.15)"
            onThumbColor="#39b54a"
          />
        </HStack>

        <HStack justifyContent="space-between" mt={4} mx='auto'>
          <Pressable 
            onPress={handleGoBack}
            style={{ 
              height: 56, 
              width:'40%', 
              display:'flex', 
              justifyContent:'center', 
              alignItems:'center', 
              color: colors.primary, 
              borderColor: colors.primary, 
              borderWidth:1, 
              borderRadius:6 
            }} 
          >
            <Text fontSize="lg" color={colors.primary}>CANCELAR</Text>
          </Pressable>
          <Box w={4}></Box>
          <Button style={{ height: 56 }}  w="50%" bg={colors.primary} color={colors.white} w="40%" >
            <Text fontSize="lg" color={colors.white}>GUARDAR</Text>
          </Button>
        </HStack>
      </Center>
    </View>
  )
}

export default Edit
