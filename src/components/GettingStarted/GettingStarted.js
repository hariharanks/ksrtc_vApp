//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Button,
} from "native-base";
import Images from "../../components/Images";
import TimerMixin from 'react-timer-mixin';
import styles from "../../style/GettingStartedPageStyle";
import {NavigationActions,StackActions } from 'react-navigation'
import * as Progress from 'react-native-progress';
// create a component

class GettingStarted extends Component {
 // mixins: [TimerMixin],

  signIn(){
    this.props.navigation.navigate('SignIn');
  }
  componentDidMount() {
           
    setTimeout(()=>{
      const resetAction=StackActions.reset({
        index:0,
        actions:[NavigationActions.navigate({
          routeName:'Home'})]
      });

      this.props.navigation.dispatch(resetAction);
    }, 3000);
   }
	 render() {
  
    
        return <View style={styles.container}>
        <View style={styles.topContainer}>
        </View>
            <View style={styles.upperContainer}>
            <Image style={styles.bannerLogo} source={Images.logo} />
              <Text style={styles.heading}>
               Kerala State R T C
              </Text>
              <View style={styles.signInContainer}>
              </View>
            </View>
          <View style={styles.bottomContainer}>
          </View>
          {/* <Progress.Bar progress={0.1} width={500} value={this.state.progress} /> */}
        </View>;
        
       
    }
}

export default GettingStarted;
