import React, {Component} from 'react';
import { Paragraph,Button } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View, StatusBar} from 'react-native';
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
        <Paragraph style={styles.padding}>Please Login First For Unlock Your Happiness</Paragraph>
        <Button style={styles.padding} color="#FF9800" mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
          <Paragraph style={{color:'white'}}>Login</Paragraph>
        </Button>
        <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
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
    marginTop:80,
    textAlign:'center',
    borderRadius:20
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