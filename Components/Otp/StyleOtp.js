import{
    StyleSheet,
    StatusBar
}from 'react-native'

import { FONTS } from '../../constants'

const styles=StyleSheet.create({
    dspflex:{
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
    },
    bgimage:{
        flex:1,
        justifyContent:'center',
        position:'relative'
    },
    lineargradient:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0, 
    },
    toptext:{
        fontSize:30,
        fontFamily:FONTS.Merienda,
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15,
        color:'#fff'
    },
    topinfo:{
        paddingLeft:15,
        paddingRight:15,
        textAlign:'center',
        color:'#fff',
        fontFamily:FONTS.RubikRegular,
        fontSize:14
    },
    topinfoemail:{
        color:'#b7b7b7',
        marginTop:10
    },
    formcontainer:(Height)=>({
      width:'100%',
      height:Height,
      alignItems:'center',
      justifyContent:'space-evenly',
    }),
    inputbox:{
        width:'90%',
        height:45,
        position:'relative',
        borderRadius:3,
    },
    input:{
       width:'100%',
       height:'100%',
       backgroundColor:'#fff',
       borderRadius:3,
       textAlign:'center',
       fontSize:20,
       alignItems:'center',
       letterSpacing:2,
       color:'#000'
    },
    inputvalidation:{
        position:'absolute',
        right:5,
        top:-15,
        zIndex:1,
        fontSize:10,
        color:'red',
        fontFamily:FONTS.RubikRegular,
    },
    icon:{
        position:'absolute',
        left:10,
        top:12.5,
        zIndex:1,
        color:'#f37646'
    },
    button:{
        width:300,
        height:43,
        backgroundColor:'#f37646',
        borderRadius:50
    },
    btntext:{
        color:'#fff',
        fontSize:15,
        fontFamily:FONTS.RubikRegular,
    },
    alreadycontainer:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    accounttext:{
        textAlign:'center',
        fontSize:13,
        fontFamily:FONTS.RubikRegular,
        color:'#fff'
    },
    loginheretext:{
        textAlign:'center',
        fontSize:13,
        alignItems:'center',
        marginLeft:5,
        fontFamily:FONTS.RubikSemiBold,
        color:'#f37646'
    },
    verifycontainer:{
        width:'100%',
        height:200,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    verifytoptext:{
        fontSize:25,
        fontFamily:FONTS.Merienda,
        marginBottom:10,
        color:'#fff'
    },
    verifyinfo:{
        fontSize:15,
        fontFamily:FONTS.RubikRegular,
        color:'#fff',
        textAlign:'center'
    }
})

export default styles