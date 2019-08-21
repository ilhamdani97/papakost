import React, {Component} from 'react';
import { Card,Paragraph,IconButton} from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,ScrollView,Dimensions,StatusBar,Text} from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer} from 'react-navigation'

import Market from './Market'
import Contract from './Contract'
import Complain from './Complain';
import Setting from './Setting';
import Verifikasi from './Verifikasi';
import ItemUser from './ItemUser';
import Ads from '../ads/Ads';
import BookingList from '../booking/BookingList';
import BookingDetail from '../booking/BookingDetail';
import BookingCancel from '../booking/BookingCancel';

class Profile extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView style={{position:'relative'}}>
        <View style={{flexDirection:'row', backgroundColor:'#FF9800',position:'absolute',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
        <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
        <View style={{flex: 1, flexDirection: 'row',margin:10}}>
          <View style={{width:width*15/100}} >
           <IconButton style={styles.paragraf}
            icon="insert-emoticon"
            color="#FFFFFF"
            size={30}
            onPress={() => console.log('Pressed')}
          />
          </View>
          <View style={{width:width*65/100}}>
            <Paragraph style={{color:'#FFFFFF',}}>Ilham Ramadani</Paragraph>
            <Paragraph style={{color:'#FFFFFF', fontSize:14, }}>081361517171</Paragraph>
          </View>
          <View style={{width:width*35/100}}>
          <Text style={{color:'#FFFFFF', fontSize:14}}>Edit Profile</Text>
          </View>
        </View>
          <View style={{padding:60,flex:1}}/>
          
        </View>
      <View style={styles.container}>
      <Card>
        <Card.Content >
          <Paragraph style={styles.paddingButtom}>PapaKost</Paragraph>
          <View style={styles.coloumn}>
              <View style={styles.colloumStyle}> 
                <IconButton style={styles.paragraf}
                  icon="camera-front"
                  color="#FF9800"
                  size={30}
                  onPress={() => this.props.navigation.navigate('Contract')}
                />
                <Paragraph style={{alignItems:'center'}}>Contract</Paragraph>
              </View>
              <View style={styles.colloumStyle}> 
                <IconButton style={styles.paragraf}
                  icon="book"
                  color="#FF9800"
                  size={30}
                  onPress={() => console.log('Pressed')}
                />
                <Paragraph>Bill</Paragraph>
              </View>
              <View style={styles.colloumStyle}> 
                <IconButton style={styles.paragraf}
                  icon="settings-applications"
                  color="#FF9800"
                  size={30}
                 
                />
                <Paragraph>Complain</Paragraph>
              </View>
              <View style={styles.colloumStyle}> 
                <IconButton 
                  icon="home"
                  color="#FF9800"
                  size={30}
                  onPress={() => this.props.navigation.navigate('Contract')}
                />
                <Paragraph style={styles.paragraf}>Market </Paragraph>
              </View>
          </View>
        </Card.Content>
      </Card>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('ItemUser')} underlayColor="white">
      <Card style={styles.paddingTop}>
        <Card.Content >
          <View style={styles.coloumnList}>
            <View style={styles.colloumList}>
              <Icon
                name='assignment'
                size={30}
                color="#FF9800"
              />
            </View>
            <View>
              <Paragraph style={styles.paddingLeft}>History Booking</Paragraph>
            </View>
          </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('ItemUser')} underlayColor="white">
        <Card style={styles.paddingTop}>
          <Card.Content >
            <View style={styles.coloumnList}>
              <View style={styles.colloumList}>
                <Icon
                  name='business-center'
                  size={30}
                  color="#FF9800"
                />
              </View>
              <View>
                <Paragraph style={styles.paddingLeft}>Item and Service</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Verifikasi')} underlayColor="white">
        <Card style={styles.paddingTop}>
          <Card.Content >
            <View style={styles.coloumnList}>
              <View style={styles.colloumList}>
                <Icon
                  name='offline-pin'
                  size={30}
                  color="#FF9800"
                />
              </View>
              <View>
                <Paragraph style={styles.paddingLeft}>Account Verification</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Setting')} underlayColor="white">
        <Card style={styles.paddingTop}>
          <Card.Content >
            <View style={styles.coloumnList}>
              <View style={styles.colloumList}>
                <Icon
                  name='hdr-weak'
                  size={30}
                  color="#FF9800"
                />
              </View>
              <View>
                <Paragraph style={styles.paddingLeft}>Setting</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.hubungiCs}>
        <Card style={styles.padding1px}>
          <Card.Content >
            <View style={styles.coloumnList}>
              <View style={styles.colloumList}>
                <Icon
                  name='headset-mic'
                  size={30}
                  color="#FF9800"
                />
              </View>
              <View>
                <Paragraph style={styles.paddingLeft}>Call Center</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.syaratKetentuan}>
        <Card style={styles.padding1px}>
          <Card.Content  >
            <View style={styles.coloumnList}>
              <View style={styles.colloumList}>
                <Icon
                  name='library-books'
                  size={30}
                  color="#FF9800"
                />
              </View>
              <View>
                <Paragraph style={styles.paddingLeft}>Term and Condition</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flexGrow: 1,
      padding: 20,
      marginTop:50
      
  },
  paddingButtom:{
    paddingBottom: 8,
    
  },
  paddingTop:{
    marginTop:12,
    padding : 2
  },
  padding1px:{
    marginTop:1,
    padding : 2
  },
  paddingLeft:{
    paddingLeft: 10,
    paddingTop:3
  },
  buttonCenter:{

  },
  paragraf:{
    textAlign:'center'
  },
  coloumn:{
    paddingBottom: 8,
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  coloumnList:{
    paddingRight: 10,
    flexDirection:'row',
    
  },
  colloumListContent:{
    height: 50, 
    width: 50,
  },
  colloumStyle:{
    height: 60, 
    width: 60,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputInbox:{
      width : 300,
      backgroundColor:'rgb(63,59,255)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10,
      alignContent: "flex-end"

  },
  text:{
    alignItems: 'center'
  },
  button: {
      width:300,
      backgroundColor:'#1c313a',
      borderRadius: 25,
      marginVertical: 10,
  },
  buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
  }
})

const ProfileNavigator = createStackNavigator({
  Profile :{screen:Profile},
  Contract : {screen:Contract},
  Market : {screen:Market},
  Setting : {screen:Setting},
  Verifikasi : {screen:Verifikasi},
  Complain :{screen:Complain},
  ItemUser :{screen:ItemUser},
  Ads      : {screen:Ads},
  Detail :{screen:BookingDetail},
  HistoryBooking :{screen:BookingList},
  BookingCancel:{ screen:BookingCancel}
});

export default Profile = createAppContainer(ProfileNavigator);