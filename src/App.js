import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignedInNavigator from "./navigators/SignedInNavigator"
import SignedOutNavigator from "./navigators/SignedOutNavigator"
import Splash from './components/screens/Splash';


function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignedOutNavigator" component={SignedOutNavigator} />
        <Stack.Screen name="SignedInNavigator" component={SignedInNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
