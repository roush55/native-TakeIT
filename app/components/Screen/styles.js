import { Platform, StatusBar, StyleSheet} from 'react-native'
import colors from '../../config/colors'





const styles = StyleSheet.create({
  
   screen:{
       paddingTop:Platform.OS === 'android'?StatusBar.currentHeight:0,
       flex:1
   },
  
})


export default styles