import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../../components/AppCard/Card'
import ListItem from '../../components/ListItem/ListItem'
import styles from '../welcomScreen/styles';
import { useNavigation, useRoute } from '@react-navigation/native';

 function Container() {
    const route =useRoute();
    const navigate=useNavigation()
    return (
         <View style={styles.mainContaner}>
            <Card
            title='try it iorioioior'
            subTitle='20$'
            image={require('../../assets/chair.jpg')}/>

            <ListItem
            title={'try it'}
            subTitle={'20$'}
            image={require('../../assets/chair.jpg')}
            />
            {/* <Text>{route.params.id}</Text>  */}
        </View>
    )
}


export default Container