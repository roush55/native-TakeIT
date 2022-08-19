import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from '../welcomScreen/styles';

 function ViewList() {
     const list =useRoute()
   
    return (
        <View>
            <Text>{list.params.title}</Text>
        </View>
    )
}

export default ViewList;