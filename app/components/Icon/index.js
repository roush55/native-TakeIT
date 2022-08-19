import React from 'react'
import {View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

 function Icons({name,IconColor,size=40,backgroundColor,color}) {
    return (
        <View style={{width:size,height:size,backgroundColor,borderRadius:size/2,color:IconColor,justifyContent:'center',alignItems:'center'}}>
           <Icon size={size} name={name} color={color} size={size}/>
        </View>
    )
}
export default Icons
