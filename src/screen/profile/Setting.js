import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton,Checkbox, Colors,List } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,} from 'react-native';
import { Icon } from 'react-native-elements'

class Setting extends Component {
  static navigationOptions =
  {
    title: 'Pengaturan',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  state = {
    checkbarang: false,
    checkjasa: false,
  };
  render() {
    const { checkbarang,checkjasa } = this.state;
    return (
      <View style={styles.container}>
        <Card >
          <Card.Content >
            <Text style={styles.textTitle}>Notifikasi</Text>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:20,
              marginBottom:20
            }}>
              <View style={{width: 250, height: 40, }}>
                <Text style={{paddingTop:5}}>Rekomendasi Via Email</Text>
              </View>
              <View style={{width: 40, height: 40, }}>
                <Checkbox style={styles.input}
                  status={checkjasa? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkjasa: !checkjasa }); }}
                />
              </View>       
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:20,
              marginBottom:30
            }}>
              <View style={{width: 250, height: 40, }}>
                <Text style={{paddingTop:5}}>Notifikasi Chat</Text>
              </View>
              <View style={{width: 40, height: 40, }}>
                <Checkbox style={styles.input}
                  status={checkbarang? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkjasa: !checkbarang }); }}
                />
              </View>     
            </View>
          </Card.Content>
        </Card>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Booking')} underlayColor="white">
        <Card style={styles.paddingTop}>
          <Card.Content >
            <View style={{
              flex: 1,
              flexDirection: 'row',
              marginBottom:30
            }}>
              <View style={{width: 40, height: 40, }}>
                <Icon
                  name='forward'
                  size={30}
                  color="#FF9800"
                />
              </View>
              <View style={{width: 200, height: 40, }}>
              <Text style={{paddingTop:5}}>Logout Acount</Text>
              </View>       
            </View>
          </Card.Content>
        </Card>
        </TouchableHighlight>
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
      padding: 30,
  },
  Text:{
    color:"#FF9800",
    marginTop:20
  },
  textTitle:{
    color:"#37474F",
    fontWeight: "bold"
  },
  textContent:{
    color:"#37474F",
    marginTop:25
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
  },
  paddingTop:{
    marginTop:12,
  },
})

export default Setting;