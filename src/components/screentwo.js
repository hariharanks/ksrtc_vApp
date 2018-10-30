
import React, { Component } from 'react';
import { AppRegistry,View, Text } from 'react-native';
import Header from './src/components/header';
import {createStackNavigator,} from 'react-navigation';
import Footer from './src/components/footer';
import { Container, Content,Button,Form,Item, Input } from 'native-base';



class ScreenTwo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{state.params.screen}</Text>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => this.props.navigation.goBack()}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigate("ScreenThree", { screen: "Screen Three" })}
            style={[styles.button, {backgroundColor: '#8E84FB'}]}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};
//Render

//Render
