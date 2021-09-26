import React from 'react'
import { StyleSheet, Text, View ,ImageBackground,Image} from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.bk}>
            <View style={styles.logoContainer}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <Text styles={styles.brand}>Take IT</Text>
            </View>


            <View style={styles.login}><Text style={styles.text}>log In</Text></View>
            <View style={styles.register}><Text style={styles.text}>sign up</Text></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

bk:{
    flex:1,
     justifyContent:'flex-end',
    alignItems:'center',
},
login:{
    
    justifyContent:'center',
    width:'100%',
    height:70,
    backgroundColor:'#fc5c65',
   
},
register:{
    justifyContent:'center',
    width:'100%',
    height:70,
    backgroundColor:'#4ECDC4',
   
},
logo:{
    width:100,
    height:100,
   marginBottom:5
},
Brand:{
   
    color:'blue',
    fontSize:100,
},
logoContainer:{
    position:'absolute',
    top:70,
    alignItems:'center'
},text:{

padding:10,
flex:1,
textAlign:'center',
fontSize:12,
fontWeight:'bold'
}

})


export default  WelcomeScreen;