    
import React, {Component} from 'react';
import {Button,Checkbox,Appbar } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Text, Image,StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ScrollView } from 'react-native-gesture-handler';
import {  Item, Input, Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      textHandphone:"",
      textPassword:"",
      key:"",
      fatchUser:""
    }
  }
  componentDidMount(){
    axios.get('http://192.168.0.11:1997/api/users')
    .then(response =>{
      this.setState({
        fatchUser: response.data
      })
    })
    .catch(error =>{
      alert(error)
    })
  }

  _handleHanphone = (text)=>{
    this.setState({
      textHandphone:text
    })
  }
  _handlePassword = (text)=>{
    this.setState({
      textPassword:text
    })
  }
  aksiLogin  = async () =>{
    try{
      let tempUser = {
        handphone : this.state.textHandphone,
        password : this.state.textPassword
      }
      await axios.post("http://192.168.0.11:1997/api/login",{
        no_tlp: tempUser.handphone,
        password: tempUser.password
      })
      .then((response)=>{
        if(typeof response.data.key !=='undefined'){
          AsyncStorage.setItem('key',response.data.key)
          this.props.navigation.navigate('LoginStack')
        }else{
          alert('Wrong No Hanphone and Password ...')
        }
      })
      .catch((error)=>{
        alert(error)
      })
    }catch(e){
      console.log(e)
    }

  };
  render() {
    const { checklogin } = this.state;
    return (
    <ScrollView>
      <View style={styles.container}>
      <Appbar.Header style={{backgroundColor:'#FF9800'}}>
          <Appbar.BackAction color="white"
                onPress={() => this.props.navigation.goBack()}
                />
      </Appbar.Header>
        <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
        <View style={{height:170,justifyContent:'center', borderBottomLeftRadius:90, backgroundColor:'#FF9800',}}>
          <View style={{alignContent:'center',alignItems: 'center',margin:20}}>
            <Image
              style={{width: 60, height: 60,justifyContent:'center',alignItems: 'center',}}
              source={require('../../assets/man.png')}
            /> 
            <Text style={{paddingTop:20, color:'white', fontSize:20}}>Login</Text>
          </View>
        </View>

        <View style={{padding: 20, paddingTop: 35}}>
          <Item regular style={{borderRadius: 20, Colors:'#FF9800'}}>
            <Icon style={styles.icon} active name='calculator' />
            <Input placeholder='No. Handphone' keyboardType={'numeric'}
            onChangeText={this._handleHanphone}
            />
          </Item>
        </View>
        <View style={{paddingLeft:20, paddingRight:20,paddingTop:5}}>
          <Item regular style={{borderRadius: 20, Colors:'#FF9800'}}>
            <Icon style={styles.icon} active name='eye' />
            <Input placeholder='Password' secureTextEntry={true}
              onChangeText={this._handlePassword}
            />
          </Item>
        </View>
        <View style={{ flex:1, flexDirection: 'row', marginTop:10, padding:20}}>
            
            <View style={{flexDirection: 'row', flex:1}}>
              <View style={{ height: 30, }}>
                  <Checkbox style={styles.input}
                  status={checklogin? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checklogin: !checklogin }); }}
                /> 
              </View>
              <View style={{ height: 30}} >
                <Text style={{marginTop:8}}>Remember Me</Text>
              </View>
            </View>
            
            <View>
              <TouchableHighlight onPress={this.hubungiCs}>
                <View style={{height: 30}}>
                  <Text style={{marginTop:8, textAlign:'right',color:'#FF9800'}} >Forgot Password ?</Text>
                </View>
              </TouchableHighlight>
            </View>

          </View>

          <View style={{paddingLeft:20, paddingRight:20,}}>
            <Button style={{height:40 ,borderRadius:25, backgroundColor:'#FF9800'}} color="black" mode="contained" onPress={() => this.aksiLogin()}>
              Login
            </Button>
          </View>
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