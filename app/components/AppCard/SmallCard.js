import React from 'react'
import { View ,Image,Text} from 'react-native';
import AppText from '../UText/index.js'
import styles from './smallCardStyles';
import Separator from '../separator/index.js';
import  { GestureHandlerRootView} from 'react-native-gesture-handler';



 function SmallCard({title,subTitle,image}) {
    return (
        <View style={styles.card}>
             <View style={styles.imageContainer}>
          <Image style={styles.image} source={image}/>
          </View>
          <Separator style={styles.line}/>
          <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      
    )
}


export default SmallCard;