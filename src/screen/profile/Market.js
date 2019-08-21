import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors,StatusBar } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Button} from 'react-native';
import { Icon } from 'react-native-elements'

class Market extends Component {
static navigationOptions = {
  title: 'Kios',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#FF9800'
  }
};
  render() {
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
        <Icon
          name='home'
          size={100}
          color='#FF9800'
        />
        <Paragraph style={styles.padding}>You Don't Have Any Market</Paragraph>
        
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


export default Market;