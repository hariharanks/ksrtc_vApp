import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
} from "react-native";
import styles from '../style/HomeStyle'
import Icons from "../components/Icons"
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator,NavigationActions,StackActions } from 'react-navigation';


export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (
       <View style={styles.headerStyle}>
       <Image source={Icons.menu}/>
       <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={ ()=>this.props.navigation.navigate('SignIn') } >
              <Text style={{fontWeight:'bold',color:'white'}}  >
              Logout 
              </Text>
            </TouchableOpacity>
          <Image source={Icons.logout} style={styles.logoutIcon} />
       </View>
       </View>
    );
    
  }
}
