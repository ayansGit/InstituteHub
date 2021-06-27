import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../components/screens/Dashboard';
import StudentList from '../components/screens/StudentList';


const Stack = createStackNavigator();

export default function SignedInNavigator() {
  return (
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StudentList" component={StudentList} />
      </Stack.Navigator>
  );
}