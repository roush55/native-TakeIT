import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({

    bk:{
        flex:1,
         justifyContent:'flex-end',
        alignItems:'center',
    },
    login:{
        
        justifyContent:'center',
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65',
       
    },
   
    logo:{
        width:100,
        height:100,
       marginBottom:5
    },
    Brand:{
    
        color:'blue',
        fontSize:18,
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center',
        width:'100%',
       
    },
    text:{
    padding:20,
    flex:1,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
    },

    container:{

        flex:1,
        backgroundColor:'black',
     
    },
    product:{
        height:'100%',
        width:'100%',
    },
    closeIcon:{
        
        position:'absolute',
        top:50,
        right:30,
        backgroundColor:'#4ECDC4',
        height:50,
        width:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       
    },
    deleteIcon:{
        height:50,
        width:50,
        position:'absolute',
        top:50,
        left:30,
        backgroundColor:'#4ECDC4',
    },
    mainContaner:{
        backgroundColor:'#f8f4f4',
        padding:20,
        paddingTop:100,
        flex:1
    }
    ,
    buttonContainer:{
        width:'100%',
        padding:20
    },

    tagLine:{
        fontSize:20,
         fontWeight:'600',
         paddingVertical:10,
         color:'#6b6b6b',
        
       
    }

    
    })
    export default styles;