import { StyleSheet} from 'react-native'
import colors from '../../config/colors'





const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,

    },
    title:{
        fontWeight:'500',
        marginBottom:7

    },

    subTitle:{
        color:colors.meduim

    },

    detailsContainer:{

        justifyContent:'center',
        marginLeft:10
    }
})


export default styles