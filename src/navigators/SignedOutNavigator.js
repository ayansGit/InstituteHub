import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/screens/auth/Login"

const Stack = createStackNavigator();

export default function SignedOutNavigator() {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
}