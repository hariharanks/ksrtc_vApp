import { StyleSheet,Dimensions } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
const dimen = Dimensions.get('window');
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 50,
    //paddingTop:"25%",
    backgroundColor: "#ffffff"
  },
  headerStyle:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    backgroundColor:"#2699FB",
    height:50
  },
  headerProfile:
  { 
    
    backgroundColor:"#2699FB",
    height:150
  },
  logoutIcon:
  { 
    width:25,
    height:25
  },
  icon: {
    alignSelf: "center",
    resizeMode: "contain",
    width: "80%"
  },
  font:{
    fontFamily: 'lato',
    // fontWeight:'bold',
    fontSize:18,
    color:"#fff"
  },
  placeCard:
  {
    marginTop:-45,
    height:75,
    width: dimen.width * 0.9,
    alignSelf: "center",

  },
    cardStyle:{
      flex: 3,
      flexDirection:'row',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.8,
      shadowRadius:1,
      elevation: 2,
      height: 75,
      borderRadius:0,
      alignSelf: "center",
      justifyContent: 'space-between',
      padding:25,
      paddingTop:15

    },
    headerImage:{
      alignSelf:"center",
      
    },
    textInputStyle:{
      flexDirection: 'row',
      padding: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5
    },
    headerDetails:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:30,
    },
    punchDiv:{
      flex:1,
      //flexDirection: 'row',
      justifyContent: 'space-between',
      width: dimen.width * .7,
      height:48,
      backgroundColor:"#2699FB",
      padding:5,
      alignSelf:'center'
    },
    footerContainer:{
      flexDirection:'row',
      alignSelf: 'flex-end',
    },
    footerMenu:{
      width: dimen.width * 1,
      flex:2,
      paddingRight:30,
      paddingLeft:30,
      paddingTop:10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:"#ffffff",
      alignSelf: 'flex-end',
    },
    wayBill:{
      // marginTop:320,
      height:48,
      width: dimen.width * .3,
      backgroundColor:'#707070',
      alignSelf: 'flex-end',
    },

    timeLine:{
      height:dimen.height * .45,
      width: dimen.width * 4,
      padding:5,
      backgroundColor:'#ffffff',
     
      
    }

})
export default styles;
