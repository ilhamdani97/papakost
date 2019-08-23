import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";

class CheckStack extends Component {
  state = {
    isLogin: 'false',
    good: ''
  }
  constructor(props) {
    super(props);
    this.isLogin
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    try {
      const fetchData = await AsyncStorage.getItem('key')
      if (fetchData != null) {
        this.props.navigation.navigate('LoginStack')
      } else {
        this.props.navigation.navigate('PublicStack')
      }
    } catch (e) {
      alert(e)
    }
  };

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold'
        }}>Please Wait</Text>
        <ActivityIndicator size={50} color="#FF9800" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//export default App;
export default CheckStack;