import { StyleSheet,Dimensions } from 'react-native';
const dimen = Dimensions.get('window');
export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop:"25%",
    backgroundColor: "#FFFFFF"
  },
  heading: {
    flex: 1,
    paddingTop:"5%",
    color: "#2699FB",
    alignSelf: "center",
    fontFamily: "Lato",
    fontSize: 28,
    //opacity: 1.0,
    //fontWeight: "bold"
  },
  bannerLogo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: "80%"
  },
  inputStyle: {
    marginBottom: 185,
    width: dimen.width * 0.8,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor:'white'
  },
  buttonStyle: {
    backgroundColor: "#2699FB",
    width: dimen.width * 0.9,
    height:dimen.height * 0.08,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop:30,
    marginHorizontal: 20,
    borderRadius: 0,
    margin: 10,
    marginBottom: 25
  },
});
