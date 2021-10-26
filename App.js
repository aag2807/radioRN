//MODULES
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import { MenuProvider } from 'react-native-popup-menu';

//STORE
import { store } from './src/store/store';

//COMPONENTS
import MainTab from './src/pages/MainTab';
import Login from './src/pages/Login';
import Terms from './src/pages/menu_options/Terms';
import Policy from './src/pages/menu_options/Policy';
import About from './src/pages/menu_options/About';
import AdminTab from './src/pages/AdminTab';
import Edit from './src/pages/Edit';


const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./src/assets/font/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./src/assets/font/Montserrat-Bold.ttf'),
  });

  return (
    loaded && (
      <MenuProvider>
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
              <Stack.Screen name="terms" options={{ headerShown: false }} component={Terms} />
              <Stack.Screen name="policy" options={{ headerShown: false }} component={Policy} />
              <Stack.Screen name="about" options={{ headerShown: false }} component={About} />
              <Stack.Screen name="adminTabs" options={{ headerShown: false }} component={AdminTab} />
              <Stack.Screen name="edit" options={{ headerShown: false }} component={Edit} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
      </MenuProvider>
    )
  );
}

