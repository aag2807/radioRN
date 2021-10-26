import { Center, ScrollView, Text } from 'native-base'
import React from 'react'


//COMPONENTS
import AppBar from '../../components/Appbar/Appbar'

//UTILS
import { colors } from '../../utils/colors'



const Policy = ({ navigation }) => {
  return (
    <ScrollView>
      <AppBar navigation={navigation} title={'Política de privacidad'} />
      <Center mx={5} mt={5}>

        <Text textAlign="justify" mb={5} color={colors.primary} mt={3}>
          Los Centros Tecnológicos Comunitarios no recopilan ni hacen uso de datos provenientes de los
          dispositivos de los usuarios finales, fuera de los datos generales sobre el dispositivo en
          cuestión o cookies de navegación que se recogen por defecto al navegar por internet. Para
          mayor detalle sobre el uso de datos privados en móvil y en la web, favor referirse a los
          Términos de Uso, apartado 3.
        </Text>

      </Center>
    </ScrollView>
  )
}

export default Policy
