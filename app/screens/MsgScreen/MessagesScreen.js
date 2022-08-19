import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icons from '../../components/Icon';
import ListItem from '../../components/ListItem/ListItem'
import Screen from '../../components/Screen';
import Separator from '../../components/separator';

 export const msg=[

{id :1,
title:'T1',
subTitle:'D1',
image:require('../../assets/background.jpg')

},

{id :2,
    title:'T2',
    subTitle:'D2',
    image:require('../../assets/background.jpg')
    },

]

 function MessagesScreen() {
     const navigation =useNavigation()
    const  [msgs, setMsgs] = useState(msg)
 const  [refreshing, setRefreshing] = useState(false)
 
    return (

        <Screen>
           
        <FlatList
        data={msgs}
        keyExtractor={msg=>msg.id.toString()}
        renderItem={({item})=>(

            <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={()=>navigation.navigate('view',item)}
          
            
            />
        )}
        ItemSeparatorComponent={()=><Separator/>}
        refreshing={refreshing}
        onRefresh={()=>setMsgs([

            {id :2,
    title:'T2',
    subTitle:'D2',
    image:require('../../assets/background.jpg')
    },

        ])}
        />


</Screen>

       
    )
}


export default MessagesScreen