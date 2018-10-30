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
export default class footer extends Component {
  render() {
    return (
       
       <View style={styles.footerMenu}>
          <Image source={Icons.wayBill}/>
          <Image source={Icons.yourRide}/>
          <Image source={Icons.trackMe}/>
          <Image source={Icons.signOn}/>
       </View>
    );
    
  }
}