import React, {Component} from 'react';
import { Paragraph,IconButton, Colors } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Button,StatusBar} from 'react-native';
import { Icon } from 'react-native-elements'

class Contract extends Component {
static navigationOptions = {
  title: 'Kontrakan',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#FF9800'
  }
};
  render() {
    return (
    <View style={styles.container}>
        <Icon
          name='home'
          size={100}
          color='#FF9800'
        />
        <Paragraph style={styles.padding}>You Don't Have Any Contract</Paragraph>
        
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
    margin:10,
    textAlign:'center'
  }
})


export default Contract;