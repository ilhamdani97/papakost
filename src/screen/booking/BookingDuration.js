import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors,Button,List, Checkbox  } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Dimensions,Picker} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Icon } from 'react-native-elements'

class BookingDuration extends Component {
  state={
    mount : true
  }
  mountPrees = ()=>
    this.setState({
      mount : !this.state.mount
  })
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
        <Text style={styles.text}>How Long Does It Cost?</Text>
        <Text style={{marginTop:5,marginBottom:10,fontSize:14,color:'#455A64'}}>At least 1 month</Text>
        <Text style={{marginBottom:10,color:'#455A64',fontSize:12}}>Start Date Maximum 2 Months From Now</Text>
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <View style={{width:width*60/100}} >
           <Text>Durasi Sewa</Text>
          </View>
          <View style={{width:width*40/100}}>
            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width:width*35/100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="1 Month" value="1 Month" />
              <Picker.Item label="2 Month" value="2 Month" />
              <Picker.Item label="3 Month" value="3 Month" />
              <Picker.Item label="4 Month" value="4 Month" />
              <Picker.Item label="5 Month" value="5 Month" />
              <Picker.Item label="6 Month" value="6 Month" />
              <Picker.Item label="7 Month" value="7 Month" />
              <Picker.Item label="8 Month" value="8 Month" />
              <Picker.Item label="9 Month" value="9 Month" />
              <Picker.Item label="10 Month" value="10 Month" />
              <Picker.Item label="11 Month" value="11 Month" />
              <Picker.Item label="12 Month" value="12 Month" />
            </Picker>
          </View>
        </View>
        <View>
          <Button style={styles.button} color="#FF9800" mode="contained" onPress={() => this.props.navigation.navigate('Booking')}>
            Next
          </Button>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      padding: 20,
  },
  text:{
    color:'#FF9800',
    fontSize:20
  },
  padding:{
    margin:10,
    textAlign:'center'
  },
  button:{
    borderRadius:20,
    marginTop:80,
    alignSelf: 'flex-end',
    width:150,
    bottom:0
  },
})
export default BookingDuration;