/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TextInput,
   Image,Button
 } from 'react-native';
  import WelcomeScreen from './app/screens/welcomScreen';
  import ViewProduct from './app/screens/offerScreen/viewProduct'
 import Container from './app/screens/offerScreen/Container'

import ListItem from './app/components/ListItem/ListItem';
import MessagesScreen from './app/screens/MsgScreen/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen/index';
import ListScreen from './app/screens/ListScreen';
import AppNavigator from './app/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';






 const App=()=> {
   
  
   return (
 
  <NavigationContainer >
      <AppNavigator/>
    </NavigationContainer>



 
    
      
  
   );
 };
 
 const styles = StyleSheet.create({
  
   
 });
 
 export default App;
 