import React, {Component} from 'react';
import { Paragraph } from 'react-native-paper';
import {StyleSheet,View, Text} from 'react-native';
import { Icon } from 'react-native-elements';


class Chatnull extends Component {
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  render() {
    return (
    <View style={styles.container}>
        <Icon
          name='chat'
          size={100}
          color="#FF9800"
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
      justifyContent:'center',
      backgroundColor: 'white'
  },
  padding:{
    margin:10,
    textAlign:'center'
  }
})


export default Chatnull;
