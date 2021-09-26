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
   Image
 } from 'react-native';
  import WelcomeScreen from './app/screens/welcomeScreen';
  import ViewProduct from './app/screens/viewProduct'
 import Container from './app/screens/Container'
 
 const App=()=> {
   
   
   return (
   <>
  
              <WelcomeScreen/> 
                 {/* <ViewProduct/>   */}
               {/* <Container/>  */}

 
     
       </>
  
   );
 };
 
 const styles = StyleSheet.create({
  
   
 });
 
 export default App;
 