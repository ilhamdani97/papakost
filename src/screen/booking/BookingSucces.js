import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors,Button } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Image,Dimensions} from 'react-native';
import { Icon } from 'react-native-elements'

class BookingSucces extends Component {
static navigationOptions = {
  title: 'Booking',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#FF9800'
  }
};
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center',justifyContent:'center'}} >
            <Image
              style={{width: 150, height: 150}}
              source={require('../../assets/checked.png')}
            />
          </View>
        <Paragraph style={styles.title}>Your booking request has been processed</Paragraph>
        <Text style={{marginTop:20,color:'#455A64',fontSize:12,textAlign:'center'}}>Your order has been forwarded to the boarding owner. Please wait for further confirmation</Text>
        
       
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
  title:{
    marginTop:30,
    fontSize:16,
    fontWeight: "bold",
    textAlign:'center'
  }
})

export default BookingSucces;