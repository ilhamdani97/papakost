import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Button} from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Dimensions,Image,ScrollView,StatusBar} from 'react-native';
import { Icon } from 'react-native-elements'

class BookingDetail extends Component {
  static navigationOptions =
  {
    title: 'Detail Booking',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  constructor(props) {
    super(props);
     var params = props.navigation.state.params.rows;
  }
  
  render() {
    const {navigation} = this.props;
    const data = navigation.getParam('rows');
  
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView>
    <View style={styles.container}>
      <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
      <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
        <View style={{width:width*65/100}} >
          <Text style={{fontWeight:"bold"}} >{data.name_kost}</Text> 
          <View style={{flexDirection: 'row',marginTop:10}}>
            <View style={{width:width*15/100}}>
              <Text style={{fontSize:14,color:"#455A64"}}>Kamar</Text>
            </View>
            <View style={{width:width*40/100}}>
              <Text style={{fontSize:14,fontWeight:"bold"}}>{data.booking_availabel}</Text>
            </View>
          </View>
          <Text style={{fontSize:14,fontWeight:"bold",marginTop:10}}>{}Rp.1.900.000 / month</Text>
          <View style={{height:24,width:120, backgroundColor:"#FFA726",marginTop:10, borderRadius:50}}>
            <Text style={{ fontSize: 12,color:"white", padding:3, textAlign:"center",alignContent:"center",justifyContent:"center"}}>{data.booking_availabel}</Text>
          </View>
        </View>
        <View style={{width:width*30/100,}} >
          <Image
            style={{width: 100, height: 100}}
            source={require('../../assets/pictures.png')}
          />
        </View>
      </View>
      <View style = {{borderWidth: 0.5,borderColor:'#FF9800',marginTop:20}} />
      <View style={{flex: 1, flexDirection: 'row',marginTop:30}}>
        <View style={{width:width*30/100}}>
          <Text style={{fontSize:14,textAlign:"center"}}>Date In</Text>
          <Text style={{fontSize:14, marginTop:10,fontWeight:"bold",textAlign:"center"}}>{data.stock_room}</Text>
        </View>
        <View style={{width:width*30/100}}>
          <Text style={{fontSize:14,textAlign:"center"}}>Date Out</Text>
          <Text style={{fontSize:14, marginTop:10,fontWeight:"bold",textAlign:"center"}}>{}14 Sept 2019</Text>
        </View>
        <View style={{width:width*30/100}}>
          <Text style={{fontSize:14,textAlign:"center"}}>Rent Duration</Text>
          <Text style={{fontSize:14, marginTop:10,fontWeight:"bold",textAlign:"center"}}>{}6 Month</Text>
        </View>
      </View>
      <View style = {{borderWidth: 0.5,borderColor:'#FF9800',marginTop:30}} />
      <View style={{flex: 1, flexDirection: 'row',marginTop:30}}>
        <View style={{width:width*80/100}}>
          <Text style={{fontSize:14,fontWeight:"bold"}}>{}Facility</Text>
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('')} underlayColor="white">
        <View style={{width:width*15/100}}>
          <Text style={{fontSize:14,color:'#FF9800'}}>{}Other</Text>
        </View>
        </TouchableHighlight>
      </View>
      <View style={{flex: 1, flexDirection: 'row',marginTop:30}}>
        <View style={{width:width*30/100}}>
          <Icon
            name='vpn-key'
            size={34}
            color="#FF9800"
          />
          <Text style={{fontSize:14,textAlign:"center"}}>24 Hours Access</Text>
        </View>
        <View style={{width:width*30/100}}>
          <Icon
            name='wifi'
            size={34}
            color="#FF9800"
          />
          <Text style={{fontSize:14,textAlign:"center"}}>Wifi - Internet</Text>
        </View>
        <View style={{width:width*30/100}}>
          <Icon
            name='business'
            size={34}
            color="#FF9800"
          />
          <Text style={{fontSize:14,textAlign:"center"}}>Mall</Text>
        </View>
      </View>
      <Button style={{width:width*90/100,height:40, marginTop:30,borderRadius:20}} color="#FF9800" mode="contained" onPress={() => this.props.navigation.navigate('BookingCancel')}>
          Cancel Booking
        </Button>
    </View>
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flexGrow: 1,
      padding: 20,
  },
  padding:{
    margin:10,
    textAlign:'center'
  }
})
export default BookingDetail;