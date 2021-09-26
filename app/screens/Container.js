import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'

 function Container() {
    return (
         <View style={{backgroundColor:'#f8f4f4',
        padding:20,
        paddingTop:100,flex:1}}>
            <Card
            title='try it'
            subTitle='20$'
            image={require('../assets/chair.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
export default Container