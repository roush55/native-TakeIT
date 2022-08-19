import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Screen from '../../components/Screen'
import SmallCard from '../../components/AppCard/SmallCard'
import styles from './styles'


export const list=[

    {
    title:'T1',
   
    
    },
    
    {
        title:'T2',
      
        
        },
    
    ]

 function ListScreen() {
    return (
        <Screen style={styles.screen}>


            <View style={styles.container}>

            <FlatList
        data={list}
        keyExtractor={menuItem => menuItem.title}
        renderItem={({item})=>(

            <SmallCard
            title={item.title}
           image={require('../../assets/background.jpg')}
           
           
            
            />
        )}
      
       
      
        />
            </View>
          

        </Screen>
    )
}

export default ListScreen

