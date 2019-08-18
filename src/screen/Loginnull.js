import React, {Component} from 'react';
import { Paragraph,Button } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,} from 'react-native';
import { Icon } from 'react-native-elements'

class Loginnull extends Component {
  static navigationOptions = {
    title: 'Papa Kost',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  render() {
    return (
    <View style={styles.container}>
        <Icon
          name='https'
          size={150}
          color='#FF9800'
        />
        <Paragraph style={styles.padding}>Kamu Belum Login Nih, Yuk Login Untuk Menikmati Fitur Mamikos Lebih Banyak</Paragraph>
        <Button style={styles.padding} color="#03A9F4" mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
          <Paragraph style={{color:'white'}}>Login</Paragraph>
        </Button>
        <TouchableHighlight onPress={this.syarat}>
          <Paragraph style={{marginTop:10,textAlign:'center',textDecorationLine: 'underline'}}>Syarat dan Ketentuan</Paragraph>
        </TouchableHighlight>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flexGrow: 1,
      padding: 20,
      alignContent: 'center',
      justifyContent:'center'
  },
  padding:{
    padding:8,
    marginTop:30,
    textAlign:'center'
  },
  button:{
    borderRadius:20,
    padding:8,
    marginTop:30,
    textAlign:'center',
    textDecorationColor:"#FF9800"

  },
  image:{
    
    height:180,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default Loginnull