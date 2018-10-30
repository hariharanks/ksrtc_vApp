import React, { Component } from 'react';
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
import {Card} from 'react-native-shadow-cards';
import {
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Item,
  Input,
  Container,
  Content,
  FooterTab
} from 'native-base'
import styles from '../../style/HomeStyle'
import AutoSuggest from 'react-native-autosuggest'
import Icons from "../../components/Icons"
import SearchableDropdown from 'react-native-searchable-dropdown'
import Images from "../../components/Images"
import HeaderMenu from '../HeaderMenu'
import Footer from '../footer'
import Swipeable from 'react-native-swipeable';
import Timeline from 'react-native-timeline-listview'

export default class Home extends Component {

  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Archery Training', description: 'The Beginner you for the course. ', circleColor: '#009688',lineColor:'#009688'},
      {time: '10:45', title: 'Play Badminton', description: 'Badminton to hit a shuttlecock across a net.'},
    
    ]
} 
  render() {

    const miniCardStyle = {shadowColor: '#000000',shadowOffsetWidth: 2,shadowOffsetHeight: 2,shadowOpacity: 0.1,shadowRadius: 5,bgColor: '#ffffff',padding:5,margin: 5,borderRadius: 3,elevation: 3,
    };
    const leftContent = <Text>Pull to activate</Text>;
    const rightcontent = <Text>Swipe To Punch</Text>;
    
    return(
       <View style={styles.containerStyle}>
        <HeaderMenu/>
       <View style={styles.headerProfile}>
                   <Image style={styles.headerImage} source={Icons.profile}/>
                  <Text style={{alignSelf:'center'}}>Name</Text>
                  <View style={styles.headerDetails}>
                      <Text style={{fontWeight:'bold',color:'white'}}>Way Bill : 203849</Text>
                      <Text style={{fontWeight:'bold',color:'white'}}>Trip Code : 1800PNIBNG</Text>
                  </View>
       </View>
       <View style={styles.placeCard}>
         <Card style={styles.cardStyle}>
            <View>
              <Text>From</Text>
              <Text style={{fontWeight:'bold'}}>Ponnani</Text>
            </View>
              <View style={styles.arrowView}>
              <Image source={Icons.arrowBR}/>
            </View>
            <View>
              <Text>To</Text>
              <Text style={{fontWeight:'bold'}}>Perinthalmanna</Text>
            </View>
         </Card>
       </View>
          <View style={styles.timeLine}>
              <Timeline 
              style={styles.list}
              data={this.data}
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{minWidth:52, marginTop: 5}}
              timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
              descriptionStyle={{color:'gray' }}
              options={{
                style:{paddingTop:5}
              }}
              innerCircle={'dot'}
              />
          </View>
       <View style={styles.footerContainer} >
            <View style={styles.punchDiv}>
                <Swipeable leftContent={leftContent} >
                  <Image source={Icons.arrowW}/>
                </Swipeable>
            </View>
            <View style={styles.wayBill}>
            </View>
        </View>
       <Footer/>
      </View>
    );
  }
}
