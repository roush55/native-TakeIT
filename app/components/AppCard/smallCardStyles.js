import { StyleSheet} from 'react-native'

import colors from '../../config/colors'

const styles = StyleSheet.create({
    card:{
       
        borderRadius:15,
        backgroundColor:'#fff',
        marginBottom:20,
        overflow:'hidden',
        color:'black',
        fontSize:14,
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'row'
    
    
    },

    subTitle:{
        color:'#6e6969'

    },
    
    detailsContainer:{
        width:'50%',
        padding:15,
        justifyContent:'center',
        alignItems:'center'
        
      
    },
    image:{
        
        width:"88%",
        height:100,
        
    },
    imageContainer:{
        width:"50%",
        // borderRightWidth:2,
        // borderRightColor:colors.meduim,

    },
    line:{
        width:2,
        backgroundColor:'lightgray',
        height:'60%',
        alignSelf:'center'
    },
    title:{
        marginBottom:7

    },
    
    })
export default styles