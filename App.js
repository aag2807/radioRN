//MODULES
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

//COMPONENTS
import MainTab from './src/pages/MainTab';
import Login from './src/pages/Login';

//STORE
import { store } from './src/store/store';


const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./src/assets/font/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./src/assets/font/Montserrat-Bold.ttf'),
  });

  return (
    loaded && (
      <NativeBaseProvider>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar
              backgroundColor="#003876"
              barStyle="light-content"
            />
            <Stack.Navigator>
              <Stack.Screen name="homeTabs" options={{ headerShown: false }} component={MainTab} />
              <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    )
  );
}

