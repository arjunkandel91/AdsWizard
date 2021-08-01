import React from 'react';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// onBoarding Screen
import Boarding from './app/screens/init/Boarding';
import WelcomeScreen from './app/screens/init/Welcome';

// Auth Screens 
import LoginScreen from './app/screens/auth/Login';
import RegisterScreen from './app/screens/auth/Register';

// Application Screens
import HomeScreen from './app/screens/home/Home';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoarding">

        <Stack.Screen name="onBoarding" options={{ headerShown: false }} component={Boarding} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />

        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />

        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
