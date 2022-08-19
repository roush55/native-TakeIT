import React from 'react'
import {View,FlatList } from 'react-native'
import Screen from '../../components/Screen'
import ListItem from '../../components/ListItem/ListItem'
import styles from './styles'
import Icon from '../../components/Icon'
import Separator from '../../components/separator'
import colors from '../../config/colors'

export const list=[

    {
    title:'T1',
  
    
    },
    
    {
        title:'T2',
      
        
        },
    
    ]

 function AccountScreen() {
    return (
        <Screen style={styles.screen}>
<View style={styles.container}>
       
            </View>

            <View style={styles.container}>

            <FlatList
        data={list}
        keyExtractor={menuItem => menuItem.title}
        renderItem={({item})=>(

            <ListItem
            title={item.title}
        
            onPress={()=>console.log('hhhhh')}
            
            />
        )}
        ItemSeparatorComponent={()=><Separator/>}
       
      
        />
            </View>
            <ListItem
            title={'logOut'}

            onPress={()=>console.log('hhhhh')}
            />

        </Screen>
    )
}

export default AccountScreen

