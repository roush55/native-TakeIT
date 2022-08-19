import React from 'react'
import {Text,TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
import styles from './styles';

 function AppButton({title,onPress ,color =colors.primary}) {
    return (
       <TouchableOpacity  style={[styles.container,{backgroundColor:color}]}onPress={onPress}> 
     <Text style={styles.textStyle}>{title}</Text>
       </TouchableOpacity>
    )
}


export default AppButton;