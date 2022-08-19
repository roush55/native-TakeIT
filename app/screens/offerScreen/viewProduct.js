import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from '../welcomScreen/styles';

 function ViewProduct() {
    
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/chair.jpg')} style={styles.product}/> 
            <View style={styles.closeIcon}>
              <Icon name='trash' size={20} color='#000'/>  
             </View>
            <View style={styles.deleteIcon}></View> 
        </View>
    )
}

export default ViewProduct;