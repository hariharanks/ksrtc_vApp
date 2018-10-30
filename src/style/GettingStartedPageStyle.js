import { StyleSheet,Dimensions } from 'react-native';
const dimen = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2699FB"
    //border: dotted
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height:10
  },
  background: {
  	backgroundColor:"#2699FB"
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#2699FB",
    alignItems: "center"
  },
  headingContainer: {
    justifyContent: "center",
    height: "25%",
    //opacity: 1.0
  },
  upperContainer: {
    alignSelf: "center",
    paddingLeft: 20,
    justifyContent: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  //  opacity: .2,
    height: "95%",
    width:"95%",

  },
  bannerLogo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: "80%"
  },
  heading: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontFamily: 'Lato',
    fontSize: 28,
    //opacity: 1.0,
    //fontWeight: "bold"
  },
  signInContainer: {
    flexDirection: "row",
    height: "20%",
    alignItems: "center"
  },
  signInText: {
    color: "#FFFFFF"
  },
  signInLink: {
    color: "#FFFFFF"
  }
});
