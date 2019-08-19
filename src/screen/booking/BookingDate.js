import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors,Button } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,StatusBar} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

class BookingDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  static navigationOptions =
  {
    title: 'Booking',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
        <Text style={styles.text}>Started Date</Text>
        <Text style={{marginTop:5,marginBottom:10,fontSize:14,color:'#455A64'}}>Monday, 19 January 2019</Text>
        <CalendarPicker style={{marginTop:40,padding:4}}
            onDateChange={this.onDateChange}
          />
        <Text style={{marginBottom:10,color:'#455A64',fontSize:12}}>Start Date Maximum 2 Months From Now</Text>
        <View>
          <Button style={styles.button} color="#FF9800" mode="contained" onPress={() => this.props.navigation.navigate('BookingDuration')}>
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
    alignSelf: 'flex-end',
    width:150,
  },
})

export default BookingDate;