import React, {Component} from 'react';
import {StyleSheet, View,Image,Dimensions,ScrollView} from 'react-native';
import { Text,Card,Button,} from 'react-native-paper';
import {  Item, Input,Icon} from 'native-base'; 
class Register extends Component {
  state = {
    checklogin: false,
  };
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800',
      elevation: 0,
    },
   
  };
  render() {
    const { checklogin } = this.state;
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView>
      <View style={{ flex: 1,padding:8,backgroundColor: '#FF9800',height:height*100/100}}>

        <Text style={{fontSize:26,color:"#ffff",textAlign: 'center',fontWeight: "bold",marginTop:20}}>Page Register Papa Kost</Text>
        <Text style={{fontSize:20,color:"#ffff",textAlign: 'center',fontWeight: "bold",marginTop:3}}>For User</Text>
        <Card style={styles.card}>
          <Card.Content >
            <View style={{alignContent:'center',alignItems: 'center',margin:20}}>
               <Image
                style={{width: 60, height: 60,justifyContent:'center',alignItems: 'center',}}
                source={require('../image/man.png')}
              /> 
            </View>
            <Item regular style={{marginTop:14,width:width*80/100,alignItems:'center'}}>
              <Icon style={styles.icon} active name='paper' />
              <Input style={{borderColor: 'red'}} placeholder='Email' />
            </Item>
            <Item regular style={{marginTop:14,width:width*80/100,alignItems:'center'}}>
              <Icon style={styles.icon} active name='person' />
              <Input style={{borderColor: 'red'}} placeholder='Full Name' />
            </Item>
            <Item regular style={{marginTop:14,width:width*80/100,alignItems:'center'}}>
              <Icon style={styles.icon} active name='keypad' />
              <Input style={{borderColor: 'red'}} placeholder='No.Handphone' />
            </Item>
            <Item regular style={{marginTop:14,width:width*80/100,alignItems:'center'}}>
              <Icon style={styles.icon} active name='eye' />
              <Input style={{borderColor: 'red'}} placeholder='Password' secureTextEntry={true}/>
            </Item>
            <Button style={{width:width*80/100,height:40, marginTop:14,borderRadius:20}} color="#03A9F4" mode="contained" onPress={() => console.log('Pressed')}>
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
      </ScrollView>

    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:8,
    backgroundColor: '#FF9800',
  },
  icon:{
    color:"#FF9800" 
    
  },
  input:{
    width :200,
    borderColor:"#FF9800",
    paddingTop:5
  },
  card:{
    marginTop:8,
    height:450,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  inputcolor:{
    color:"#455A64" ,
    fontSize: 14,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: 'steelblue',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    fontSize: 18,
    color: 'steelblue',
    marginBottom: 60,
  },
  button: {
    width: 100,
  },
  signuphere:{
    marginTop: 20,
    fontSize: 13,
  },
  forgotpass: {
    marginTop: 20,
    fontSize: 13,
    color : 'skyblue'
  }
 
});
export default Register;