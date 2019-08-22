import React, { Component } from 'react';
import { Button, Appbar } from 'react-native-paper';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Item, Input, Icon } from 'native-base';
import axios from "axios";
class Register extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800',
      elevation: 0,
    },
  };
  constructor() {
    super()
    this.state = {
      email: "",
      user_name: "",
      full_name: "",
      no_tlp: "",
      password: ""
    }
  }

  handleChange = (text, name) => {
    this.setState({
      [name]: text
    })
  }
  onRegister = async state => {
    try {
      const { replace } = this.props.navigation
      const handleLogin = this.props.navigation.getParam(
        "handleLogin",
        "false"
      );
      const response = await axios({
        method: "post",
        url: "http://192.168.1.14:3500/api/register",
        data: {
          email: state.email,
          user_name: state.user_name,
          full_name: state.full_name,
          no_tlp: state.no_tlp,
          password: state.password
        }
      })
      if (response) {
        replace("ClassLogin", { handleLogin: handleLogin })
      }
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Appbar.Header style={{ backgroundColor: '#FF9800' }}>
            <Appbar.BackAction color="white"
              onPress={() => this.props.navigation.goBack()}
            />
          </Appbar.Header>

          <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
          <View style={{ height: 110, justifyContent: 'center', borderBottomLeftRadius: 90, backgroundColor: '#FF9800', }}>
            <View style={{ alignContent: 'center', alignItems: 'center', margin: 20 }}>
              <Image
                style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center', }}
                source={require('../../assets/man.png')}
              />
              <Text style={{ paddingTop: 20, color: 'white', fontSize: 20, paddingBottom: 10 }}>Register</Text>
            </View>
          </View>
          <View style={{ padding: 20, paddingTop: 35 }}>
            <Item regular style={{ borderRadius: 20, Colors: '#FF9800' }}>
              <Icon style={styles.icon} active name='paper' />
              <Input placeholder='Email' autoCapitalize='none'
                onChangeText={text => this.handleChange(text, "email")}
                value={this.state.email}
              />
            </Item>
          </View>
          <View style={{ padding: 20, paddingTop: 35 }}>
            <Item regular style={{ borderRadius: 20, Colors: '#FF9800' }}>
              <Icon style={styles.icon} active name='paper' />
              <Input placeholder='Username' italize='none'
                onChangeText={text => this.handleChange(text, "user_name")}
                value={this.state.user_name}
              />
            </Item>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 5 }}>
            <Item regular style={{ borderRadius: 20, Colors: '#FF9800' }}>
              <Icon style={styles.icon} active name='person' />
              <Input placeholder='Full Name'
                onChangeText={text => this.handleChange(text, "full_name")}
                value={this.state.full_name}
              />
            </Item>
          </View>
          <View style={{ padding: 20, paddingTop: 25 }}>
            <Item regular style={{ borderRadius: 20, Colors: '#FF9800' }}>
              <Icon style={styles.icon} active name='keypad' />
              <Input placeholder='No. Hanphone' keyboardType={'numeric'}
                onChangeText={text => this.handleChange(text, "no_tlp")}
                value={this.state.no_tlp}
              />
            </Item>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 8 }}>
            <Item regular style={{ borderRadius: 20, Colors: '#FF9800' }}>
              <Icon style={styles.icon} active name='eye' />
              <Input placeholder='Password' secureTextEntry={true}
                onChangeText={text => this.handleChange(text, "password")}
                value={this.state.password}
              />
            </Item>
          </View>
          <View style={{ padding: 20 }}>
            <Button style={{ height: 40, borderRadius: 25, backgroundColor: '#FF9800' }} color="black" mode="contained"
              onPress={() => {
                this.onRegister(this.state);
              }}>
              Register
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  input: {
    width: 200,
    borderColor: "#FF9800",
    paddingTop: 5
  },

  icon: {
    color: "#FF9800"

  },
})


export default Register;