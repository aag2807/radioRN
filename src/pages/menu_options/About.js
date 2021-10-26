import { Button, Center, Heading, ScrollView, Text, View } from 'native-base'
import React from 'react'


//COMPONENTS
import AppBar from '../../components/Appbar/Appbar'

//UTILS
import { colors } from '../../utils/colors'
import { routes } from '../../utils/routes'



const About = ({ navigation }) => {
  return (
    <ScrollView h="100%">
      <AppBar navigation={navigation} title="Acerca de la Aplicación" />
      <Center mx={5} mt={10}>

        <Heading textAlign="justify"  color={colors.primary} mr={'auto'}>
          Acerca del desarollador
        </Heading>

        <Text mb={1} mt={4} color={colors.primary} mr={'auto'}>
          Centros Tecnológicos Comunitarios ©
        </Text>
        <Text mb={1} color={colors.primary} mr={'auto'}>
          C/ Pedro Henríquez Ureña, #12,
        </Text>

        <Text mb={1} color={colors.primary} mr={'auto'}>
          Gazcue, Santo Domingo, República Dominicana.
        </Text>

        <Heading mt={5} textAlign="justify" color={colors.primary} mr={'auto'}>
          Contacto:
        </Heading>
        <Text mb={1} mt={4} color={colors.primary} mr={'auto'}>
          colmena.desarrollo@ctc.edu.do
         </Text>
        <Text mb={1} color={colors.primary} mr={'auto'}>
          lenin.cepeda@ctc.edu.do
        </Text>


        <Heading mt={8} mb={10} textAlign="justify" color={colors.primary} mr={'auto'}>
          Versión 1.1
        </Heading>

      <View mt={10} w="100%">
        <Button bg={colors.primary} w="100%" mt={'auto'}  style={{height:55 }}  fontSize={28} fontWeight={'bold'} onPress={() => navigation.navigate(routes.login)} >
          <Text fontSize="20" color={colors.white} fontWeight="bold">
           ACCEDER
          </Text>
        </Button>
      </View>
      </Center>
      
    </ScrollView>
  )
}

export default About
