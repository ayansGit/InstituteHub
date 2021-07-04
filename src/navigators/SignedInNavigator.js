import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../components/screens/adminAndTeacher/Dashboard';
import StudentList from '../components/screens/adminAndTeacher/students/StudentList';
import StudentDetails from '../components/screens/adminAndTeacher/students/StudentDetails';
import CourseList from '../components/screens/adminAndTeacher/students/CourseList';
import CourseDetails from '../components/screens/adminAndTeacher/students/CourseDetails';


const Stack = createStackNavigator();

export default function SignedInNavigator() {
  return (
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="StudentDetails" component={StudentDetails} />
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
      </Stack.Navigator>
  );
}