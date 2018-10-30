import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
} from "react-native";
import {Header,Footer,Title,Button,Icon,Left,Right,Body,Item,Input,Container, Content, FooterTab} from 'native-base'
import styles from '../../style/SignInStyles'
// import LinkedInModal from 'react-native-linkedin'
import Images from "../../components/Images";

// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
// import LoadingWidget from '../Utils/LoadingWidget'

export default class SignIn extends Component {
  Login(event){
    this.props.navigation.navigate('Home');
  }
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      userID: '',
      UserPassword: ''
 
    }
 
  }
  UserLoginFunction = () =>{
    //alert("cccccc");
    const { userID }  = this.state ;
    const { UserPassword }  = this.state ;
    
    
   fetch('http://192.168.216.2/ksrtc_webservice/Login.php', {
     
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       userId: userID,
    
       password:UserPassword

     })
    
   }).then((response) => response.json())
        
         .then((responseJson) => {
          //alert("aaaaaaaaaaas");
           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
    
               //Then open Profile activity and send user email to profile activity.
               this.props.navigation.navigate('Home', { userID: userID });
    
           }
           else{
    
             Alert.alert(responseJson);
           }
    
         }).catch((error) => {
          alert("bbbbbbbbbbbb");
          console.log(error);
           console.error(error);
         });
    
     }
  render() {
    return (
       <View style={styles.containerStyle}>
         <Image style={styles.bannerLogo} source={Images.logo} />
           <Text style={styles.heading}>
            Kerala State R T C
           </Text>
           <Text style={{fontSize: 24,marginLeft:45}}>
            Welcome Back,
           </Text>
           <Text style={{fontSize: 14,marginLeft:45}}>
           Sign in to continue
           </Text>
           <View style={styles.inputStyle}>
             <Item >
               <Input placeholder="Username" placeholderTextColor="#607B8D"   onChangeText={userID => this.setState({userID})}/>
             </Item>
             <Item >
               <Input placeholder="Password" placeholderTextColor="#607B8D" onChangeText={UserPassword => this.setState({UserPassword})} secureTextEntry />
             </Item>
             <Button light style={styles.buttonStyle} onPress={this.UserLoginFunction}>
               <Text style={{ color: "white", fontSize: 18 }}>
                 {" "}
                 Login{" "}
               </Text>
             </Button>
           </View>
       </View>
     );
    }
  }
