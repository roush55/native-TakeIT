import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

 function AppText({childern}) {
    return (
        <View>
            <Text style={styles.text}>{childern}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'black',
        fontSize:18,
        fontFamily:Platform.OS ==='android'?"Roboto":"Avenir",
    },
})
export default AppText;