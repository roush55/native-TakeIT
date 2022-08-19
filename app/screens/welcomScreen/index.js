import React from 'react'
import { View ,ImageBackground,Image} from 'react-native';
import AppButton from '../../components/AppButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
    const navigation= useNavigation()
    return (
       // <ImageBackground source={require('../../assets/logo-green.png')} style={styles.bk}>
           <View style={styles.bk}>
           <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo-green.png')} style={styles.logo}/>
            
            </View>


            <View style={styles.buttonContainer}>
            <AppButton title='product'  onPress={()=>navigation.navigate({name:'offer'})}/>
              <AppButton title='msg' onPress={()=>navigation.navigate({name:'msg'})}/>
            </View> 
            </View>
        // </ImageBackground>
    )
}




export default  WelcomeScreen;