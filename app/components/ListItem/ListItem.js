import React from 'react'
import { Image, Text,TouchableHighlight, View } from 'react-native'
import colors from '../../config/colors'
import styles from './styles'
import  Swipeable from 'react-native-gesture-handler/Swipeable'

 function ListItem({title,subTitle,image,onPress,IconComponenet,style}) {
    return (

       <Swipeable>
        <TouchableHighlight
         
          underlayColor={'#ded9d9'}
          onPress={onPress}
        
        >
        <View style={[styles.container ,style]}>
            {IconComponenet && (IconComponenet)}
               {image && (<Image  source={image} style={styles.image}/>)}
                 <View  style={styles.detailsContainer}>
                 <Text style={styles.title}>{title}</Text>
                {subTitle && (<Text style={styles.subTitle}>{subTitle}</Text>)}
                 </View>
            
        </View>
        </TouchableHighlight>

</Swipeable>
    )
}


export default ListItem
