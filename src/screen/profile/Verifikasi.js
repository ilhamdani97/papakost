import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors,List } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,} from 'react-native';
import { Icon } from 'react-native-elements'

class Verifikasi extends Component {
  static navigationOptions =
  {
    title: 'Verifikasi Akun',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Why Verification Is Important ?</Text>
        <Text style={styles.textTitle}>Verification can prevent your account from being hacked by someone else, because accessing your account still requires a verification code that only you know about</Text>
        <TouchableHighlight onPress={this.email}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',marginTop:20,
        }}>
          <View style={{width: 50, height: 60, }}>
            <IconButton style={{paddingTop:8}}
              icon="email"
              color="#FF9800"
              size={30}
            />
          </View>
          <View style={{width: 200, height: 60, }}>
            <Text style={{fontWeight: "bold"}}>Email</Text>
            <Text style={{paddingTop:8}}>{}ramadaniilham63</Text>
          </View>
          <View style={{width: 50, height: 60, }}>
            <IconButton style={{paddingTop:8}}
              icon="keyboard-arrow-right"
              color="#FF9800"
              size={30}
            />
          </View>
        </View>
        </TouchableHighlight>
        {/* <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',marginTop:20,
        }}>
          <View style={{width: 50, height: 60, }}>
            <IconButton style={{paddingTop:8}}
              icon="email"
              color="#FF9800"
              size={30}
            />
          </View>
          <View style={{width: 200, height: 60, }}>
            <Text style={{fontWeight: "bold"}}>Email</Text>
            <Text style={{paddingTop:8}}>{}ramadaniilham63</Text>
          </View>
          <View style={{width: 50, height: 60, }}>
            <IconButton style={{paddingTop:8}}
              icon="keyboard-arrow-right"
              color="#FF9800"
              size={30}
            />
          </View>
        </View> */}
      </View>
    );
  }
}
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });
const styles = StyleSheet.create({
  container:{
      flexGrow: 1,
      padding: 20,
  },
  Text:{
    color:"#FF9800",
    marginTop:20
  },
  textTitle:{
    color:"#37474F",
    marginTop:20,
    lineHeight:20
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
  },
})

export default Verifikasi;