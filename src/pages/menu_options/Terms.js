import { Center, Container, Heading, ScrollView, Text } from 'native-base'
import React from 'react'


//COMPONENTS
import AppBar from '../../components/Appbar/Appbar'

//UTILS
import { colors } from '../../utils/colors'



const Terms = ({ navigation }) => {
	return (
		<ScrollView>
			<AppBar navigation={navigation} title="Términos de uso" />
			<Center mx={5} mt={5}>

				<Text textAlign="justify" mb={5} color={colors.primary} mt={3}>
					Los presentes términos de uso
					(en lo que sigue, los “Términos de Uso”) regulan los servicios de la app móvil y app web de
					CTC Radio Streaming disponible para Android, iOS y web en <Text textAlign="justify" bg={'yellow.300'}>https://radio-streaming.ctc.edu.do/</Text>
					(en lo que sigue, la “App”) de la cual es propietaria los Centros Tecnológicos Comunitarios
					(en lo que sigue, “CTC”), institución gubernamental con dependencia directa de la Presidencia
					y el Gabinete de Coordinación de Políticas Sociales de la República Dominicana, creada
					mediante el Decreto Núm. 489-12, de fecha veintiuno (21) del mes de agosto del año dos mil
					doce (2012) para fortalecer la Red de Protección Social, fomentar el cierre de brecha digital
					nacional y contribuir al logro de las metas de los planes de Gobierno.
				</Text>

				<Text textAlign="justify" mb={5} color={colors.primary}>
					El uso de la App le otorga la condición de usuario del Portal (en lo que sigue, el “Usuario”)
					e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones
					establecidas en los Términos de Uso y las Políticas publicadas por los CTC al momento en que
					el Usuario acceda a la App.
				</Text>

				<Heading textAlign="left" mr="auto" mb={3} color={colors.primary}>
					1. Objeto.
				</Heading>

				<Text textAlign="justify" mb={5} color={colors.primary}>
					A través de la App, los CTC facilita a los Usuarios el acceso y el uso de los servicios,
					informaciones y contenidos (en lo que sigue, los “Servicios”) colocados a disposición por los
					CTC o por terceros.
				</Text>


				<Heading mb={3} color={colors.primary}>
					2. Condiciones de Accesibilidad y Uso del Portal.
				</Heading>


				<Text textAlign="justify" mb={5} color={colors.primary}>
					1. Carácter gratuito del acceso y uso del App. – La prestación de los Servicios, de parte de
					los CTC, tiene carácter gratuito para el Usuario. Sin perjuicio de lo anterior, algunos de los
					Servicios suministrados por los CTC a través de la App podrían estar sujetos al pago de una
					tasa la cual estaría establecida en el mismo.
				</Text>

				<Text textAlign="justify" mb={5} color={colors.primary}>
					2. Registro del Usuario. – De manera general, la prestación de los Servicios no exige la
					suscripción o registro previo de parte del Usuario.
				</Text>



				<Text textAlign="justify" mb={5} color={colors.primary}>
					3. Propiedad Intelectual. - Todo el contenido de este Portal, ya sean textos, imágenes,
					recopilaciones, marcas, logotipos, combinaciones de colores, o cualquier otro elemento, su
					estructura y diseño, la selección y forma de presentación de los materiales incluidos en la
					misma, y los programas necesarios para su funcionamiento, acceso y uso, están protegidos por
					derechos de propiedad intelectual, de los cuales es titular CTC o de terceros licenciantes,
					que el Usuario de la App debe respetar.
				</Text>

				<Text textAlign="justify" mb={5} color={colors.primary}>
					4. El Usuario de la App deberá abstenerse de suprimir, alterar, eludir o manipular cualquier
					dispositivo de protección o sistema de seguridad que pueda estar instalado en el mismo.
				</Text>

				<Heading mb={3} color={colors.primary}>
					3. Protección de los datos personales.
				</Heading>

				<Text textAlign="justify" mb={5} color={colors.primary}>
					1. CTC tratará de forma automática los Datos Personales con la finalidad y las condiciones,
					definidas en su Política de Privacidad. CTC no garantiza la ausencia de virus ni de otros
					elementos en los Servicios prestados por terceros a través del Portal que puedan causar
					alteraciones en el sistema informático del Usuario (software y hardware) o en los documentos
					electrónicos y/o bases de datos de su sistema informático.
				</Text>
				<Text textAlign="justify" mb={5} color={colors.primary}>
					2. CTC ha adoptado los niveles de
					seguridad de protección que entiende necesarios y procura instalar los medios y medidas técnicas
					de protección que se vayan haciendo necesarias. Sin embargo, el Usuario debe estar consciente de
					que las medidas de seguridad en la Internet no son inviolables.
				</Text>
				<Text textAlign="justify" mb={5} color={colors.primary}>
					3. CTC puede utilizar cookies
					cuando un Usuario hace uso de la versión Web de la App. Las cookies que se puedan usar en los
					sitios y páginas Web de la App se asocian únicamente con el navegador de un computador
					determinado (un Usuario anónimo), y no proporcionan en sí mismas el nombre y apellido del
					Usuario. Gracias a las “cookies”, resulta posible que CTC reconozca los navegadores de los
					Usuarios registrados (luego de que éstos se hayan registrado por primera vez), esto ayuda que no
					tengan que registrarse cada vez que visita las áreas y los Servicios reservados exclusivamente a
					ellos. Las “cookies” utilizadas no pueden leer archivos “cookie” creados por otros proveedores.
					El Usuario tiene la posibilidad de configurar su navegador para ser avisado en su pantalla de la
					recepción de “cookies” y para impedir la instalación de las mismas en el disco duro.
				</Text>
			</Center>
		</ScrollView>
	)
}

export default Terms
