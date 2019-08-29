import React, { Component } from 'react';
import { Paragraph, Button, Appbar } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, StatusBar ,Dimensions} from 'react-native';
import { Icon } from 'react-native-elements'

class Loginnull extends Component {
  static navigationOptions = {
    headerTintColor: '#FF9800',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0,
    },
  };
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: 'transparent' }}>
          <Appbar.BackAction color="black"
            onPress={() => this.props.navigation.goBack()}
          />
        </Appbar.Header>
        <View style={{ padding: 20, alignContent: 'center', justifyContent: 'center' }}>
          <Icon
            name='https'
            size={150}
            color='#FF9800'
          />
          <Paragraph style={styles.padding0}>Please Login First For Unlock Your Happiness</Paragraph>
        </View>
        <View style={{ backgroundColor: '#FF9800', borderTopLeftRadius: 80, borderTopRightRadius: 80, height:height*50/100 }}>
          <Button style={styles.padding} color="white" mode="contained" onPress={() => this.props.navigation.navigate('ClassLogin')}>
            <Paragraph style={{ color: 'black' }}>Login</Paragraph>
          </Button>
          <Button style={styles.padding1} color="#FF9800" mode="outlined" onPress={() => this.props.navigation.navigate('Register')}>
            <Paragraph style={{ color: 'white' }}>Register</Paragraph>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  padding0: {
    marginTop: 30,
    textAlign: 'center',
    borderRadius: 20,
  },
  padding: {
    padding: 8,
    marginTop: 60,
    textAlign: 'center',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    elevation: 0,
    justifyContent: 'center'
  },
  padding1: {
    padding: 8,
    marginTop: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    borderColor: 'white',
    elevation: 0
  },
  button: {
    borderRadius: 20,
    padding: 8,
    marginTop: 30,
    textAlign: 'center',
    textDecorationColor: "black",


  },
  image: {

    height: 180,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default Loginnull