import React from 'react'
import { StyleSheet, View ,Image} from 'react-native';
import AppText from './AppText.js'

 function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
          <Image style={styles.image} source={image}/>
          <View style={styles.detailsContainer}>
          <AppText>{title}</AppText>
          <AppText>{subTitle}</AppText>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
card:{

    borderRadius:15,
    backgroundColor:'#fff',
    marginBottom:20,
    overflow:'hidden',
    color:'black',
    fontSize:14,



},

detailsContainer:{
    padding:20,
},
image:{
    
    width:"100%",
    height:200,
    
}

})
export default Card;