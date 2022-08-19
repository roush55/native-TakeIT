

import React from 'react'
import WelcomeScreen from '../screens/welcomScreen';
import AccountScreen from '../screens/AccountScreen';
import Container from '../screens/offerScreen/Container';
import MessagesScreen from '../screens/MsgScreen/MessagesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../config/colors';
import ViewList from '../screens/MsgScreen/viewList';

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const TabNavgator=()=>(
  <Tab.Navigator screenOptions={{ headerShown: false,"tabBarActiveTintColor": "#fff",
  "tabBarActiveBackgroundColor": "#4ECDC4",
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]}}>
  <Tab.Screen  name ='Wlecome' component={WelcomeScreen}/>
  <Tab.Screen  name = 'Account' component={AccountScreen}/>
  <Stack.Screen  name = 'offer' component={Container}/>
  </Tab.Navigator>
)
const StackNavgator=()=>(
    <Stack.Navigator>
    <Stack.Screen  name = 'Home' component={TabNavgator}/>
    <Stack.Screen  name = 'msg' component={MessagesScreen}/>
    <Stack.Screen  name = 'view' component={ViewList}/>
    </Stack.Navigator>
  )
export default function AppNavigator() {
  return (
    <StackNavgator/>
  )
}
