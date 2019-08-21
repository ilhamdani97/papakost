import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View} from 'react-native';
import { Icon } from 'react-native-elements'

class Chatnull extends Component {
  render() {
    return (
    <View style={styles.container}>
        <Icon
          name='chat'
          size={100}
          color='#FF9800'
        />
        <Paragraph style={styles.padding}>You Don't Have Any Chat</Paragraph>
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


export default Chatnull;
