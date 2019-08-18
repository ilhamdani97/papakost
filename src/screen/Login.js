import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight,ScrollView, Dimensions,Image} from 'react-native';
import { Text,Card,Button,Checkbox,  } from 'react-native-paper';
import {  Item, Input, Icon} from 'native-base'; 

class Login extends Component {
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
      <View style={{flex: 1,padding:8,backgroundColor: '#FF9800',height:height*100/100}}>
        <Text style={{fontSize:26,color:"#ffff",textAlign: 'center',fontWeight: "bold",marginTop:20}}>Page Login Papa Kost</Text>
        <Text style={{fontSize:20,color:"#ffff",textAlign: 'center',fontWeight: "bold",marginTop:3}}>For User</Text>
        <Card style={styles.card}>
          <Card.Content >
            <View style={{alignContent:'center',alignItems: 'center',margin:20}}>
               <Image
                style={{width: 60, height: 60,justifyContent:'center',alignItems: 'center',}}
                source={require('../image/man.png')}
              /> 
            </View>
            
            
            <Item regular style={{marginTop:14,width:width*90/100}}>
              <Icon style={styles.icon} active name='calculator' />

              <Input style={{borderColor: 'red'}} placeholder='No. Hanphone' keyboardType={'numeric'} />
            </Item>
            
            <Item regular style={{marginTop:16,width:width*90/100}}>
              <Icon style={styles.icon} active name='eye' />
              <Input style={{borderColor: 'red'}} placeholder='Password' secureTextEntry={true}/>
            </Item>

            <View style={{ flexDirection: 'row', marginTop:10}}>
              <View style={{width:width*10/100, height: 40, }}>
                 <Checkbox style={styles.input}
                  status={checklogin? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checklogin: !checklogin }); }}
                /> 
              </View>
              <View style={{width:width*45/100, height: 40,}} >
                <Text style={{marginTop:8}}>Remember Me</Text>
              </View>
              <TouchableHighlight onPress={this.hubungiCs}>
                <View style={{width:width*35/100, height: 40}}>
                  <Text style={{marginTop:10}}>Forgot Password ?</Text>
                </View>
              </TouchableHighlight>
            </View>
            <Button style={{width:width*90/100,height:40, marginTop:14,borderRadius:20}} color="#03A9F4" mode="contained" onPress={() => console.log('Pressed')}>
              Login
            </Button>
            <View style={{flex: 1, flexDirection: 'row',marginTop:8}}>
              <View style={{width: 210, height: 40,}}>
                <Text style={{marginTop:10,textAlign:'right', }}>Don't have an account ? </Text>
              </View>
              <View style={{width: 60, height: 40,}}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={{marginTop:10,textDecorationLine: 'underline',color:"#FF9800",textAlign: 'center',}}>
                      Register
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
            
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
    height:440,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor:'#FF9800',
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
export default Login;