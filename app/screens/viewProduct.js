import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


 function ViewProduct() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/chair.jpg')} style={styles.product}/> 
            <View style={styles.closeIcon}>
              <Icon name='trash' size={20} color='#000'/>  
             </View>
            <View style={styles.deleteIcon}></View>  
        </View>
    )
}

const styles = StyleSheet.create({
container:{

    flex:1,
    backgroundColor:'black',

    
},
product:{
    height:'100%',
    width:'100%',
},
closeIcon:{
    
    position:'absolute',
    top:50,
    right:30,
    backgroundColor:'#4ECDC4',
    height:50,
    width:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   
},
deleteIcon:{
    height:50,
    width:50,
    position:'absolute',
    top:50,
    left:30,
    backgroundColor:'#4ECDC4',
}

})
export default ViewProduct;