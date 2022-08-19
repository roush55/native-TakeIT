import { StyleSheet,Platform} from 'react-native'
import colors from '../../config/colors'





const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center',
      padding:15,
      width:'100%',
      marginVertical:10,
    

    },
    
    textStyle:{
        
        color:colors.white,
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase'
    },


   
       
})


export default styles