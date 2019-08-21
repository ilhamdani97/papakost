import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet,View,Text, Image,StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {  Item, Input, Icon} from 'native-base';

class Login extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800',
      elevation: 0,
    },
  };
  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
      
        <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
        <View style={{height:110,justifyContent:'center', borderBottomLeftRadius:90, backgroundColor:'#FF9800',}}>
          <View style={{alignContent:'center',alignItems: 'center',margin:20}}>
            <Image
              style={{width: 60, height: 60,justifyContent:'center',alignItems: 'center',}}
              source={require('../assets/man.png')}
            /> 
            <Text style={{paddingTop:20, color:'white', fontSize:20, paddingBottom:10}}>Register</Text>
          </View>
        </View>
        <View style={{padding: 20, paddingTop: 35}}>
          <Item regular style={{borderRadius: 20, Colors:'#FF9800'}}>
            <Icon style={styles.icon} active name='paper' />
            <Input placeholder='Email' autoCapitalize='none'/>
          </Item>
        </View>
        <View style={{paddingLeft:20, paddingRight:20,paddingTop:5}}>
          <Item regular style={{borderRadius: 20, Colors:'#FF9800'}}>
            <Icon style={styles.icon} active name='person' />
            <Input placeholder='Full Name'/>
          </Item>
        </View>
        <View style={{padding: 20, paddingTop: 25}}>
          <Item regular style={{borderRadius: 20, Colors:'#FF9800'}}>
            <Icon style={styles.icon} active name='keypad' />
            <Input placeholder='No. Hanphone' keyboardType={'numeric'}/>
          </Item>
        </View>
        <View style={{paddingLeft:20, paddingRight:20,paddingTop:8}}>
          <Item regular style={{borderRadius: 20, Colors:'#FF9800'}}>
            <Icon style={styles.icon} active name='eye' />
            <Input placeholder='Password' secureTextEntry={true}/>
          </Item>
        </View>
          <View style={{padding:20}}>
            <Button style={{height:40 ,borderRadius:25, backgroundColor:'#FF9800'}} color="black" mode="contained" onPress={() => console.log('Pressed')}>
              Register
            </Button>
          </View>
      </View>
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignContent: 'center',
  }, 
  input:{
    width :200,
    borderColor:"#FF9800",
    paddingTop:5
  },
  
  icon:{
    color:"#FF9800" 
    
  },
})


export default Login;

