import React from 'react'
import { Platform, Text, View } from 'react-native';
import styles from './styles';

 function UText({childern}) {
    return (
       <>
     <Text style={styles.textStyle}>{{childern}}</Text>
     </>
       
    )
}


export default UText;