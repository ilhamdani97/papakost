import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Title,Paragraph,IconButton, Colors,Button,List, Checkbox  } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Dimensions,Picker,Image,ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'

class Booking extends Component {
  state={
    mount : true,
    checkBook: false,
  }
  mountPrees = ()=>
    this.setState({
      mount : !this.state.mount,
  })
  static navigationOptions =
  {
    title: 'Data Booking',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  render() {
    const { checkBook } = this.state;
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Booking')} underlayColor="white">
            <View style={{width:width*30/100}} >
              <Text style={{fontSize:12,color:'#455A64'}} >Data In</Text>
              <Text style={{fontSize:12,fontWeight: "bold"}}>14 December 2019 </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Booking')} underlayColor="white">
          <View style={{width:width*35/100}}>
          <Text style={{fontSize:12,color:'#455A64',marginLeft:7}} >Duration of Rent</Text>
          <Picker
              selectedValue={this.state.language}
              style={{height: 18, width:width*32/100,fontSize:12}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="1 Bulan" value="1 Bulan" />
              <Picker.Item label="2 Bulan" value="2 Bulan" />
              <Picker.Item label="3 Bulan" value="3 Bulan" />
              <Picker.Item label="4 Bulan" value="4 Bulan" />
              <Picker.Item label="5 Bulan" value="5 Bulan" />
              <Picker.Item label="6 Bulan" value="6 Bulan" />
              <Picker.Item label="7 Bulan" value="7 Bulan" />
              <Picker.Item label="8 Bulan" value="8 Bulan" />
              <Picker.Item label="9 Bulan" value="9 Bulan" />
              <Picker.Item label="10 Bulan" value="10 Bulan" />
              <Picker.Item label="11 Bulan" value="11 Bulan" />
              <Picker.Item label="12 Bulan" value="12 Bulan" />
            </Picker>
          </View>
          </TouchableHighlight>
          <View style={{width:width*30/100}}>
            <Text style={{fontSize:12,color:'#455A64'}} >Date Out</Text>
              <Text style={{fontSize:12,fontWeight: "bold"}}>14 Juny 2020 </Text>
          </View>
        </View>
        <View style = {styles.lineStyle} />
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:width*30/100}} >
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/pictures.png')}
            />
          </View>
          <View style={{width:width*65/100}} >
            <Text style={{fontSize:14}} >Kost Mamikos Padjajaran Tipe C Sumedang Jatingangor Jawa Barat</Text>
            <View style={{flex: 1, flexDirection: 'row',marginTop:5,marginBottom:5}}>
              <View style={{width: 28, height: 22,}}>
                <Icon
                  name='vpn-key'
                  size={20}
                  color="#FF9800"
                />
              </View>
              <View style={{width: 28, height: 22,}}>
                <Icon
                  name='wifi'
                  size={20}
                  color="#FF9800"
                />
              </View>
              <View style={{width: 28, height: 22, }}>
                <Icon
                  name='beenhere'
                  size={20}
                  color="#FF9800"
                />
              </View>
              <View style={{width: 28, height: 22,}}>
                <Icon
                  name='business'
                  size={20}
                  color="#FF9800"
                />
              </View>
            </View>
            <Text style={{fontSize:14,fontWeight: "bold",marginTop:20}} >Rp.1.500.000,00 / mounth</Text>
          </View>
        </View>
        <View style = {{marginTop:20, borderWidth: 0.5,borderColor:'#546E7A',}} />
        <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>
          <View style={{width:width*60/100}} >
            <Text style={{fontSize:14,fontWeight: "bold"}}>Data User</Text>    
          </View>
          <View style={{width:width*30/100}} >
            <Text style={{fontSize:12,textAlign:'right',color:"#FF9800"}}>Edit</Text>  
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:40}}>
          <View style={{width:width*60/100}} >
            <Text style={{fontSize:14}}>Full Name</Text>    
          </View>
          <View style={{width:width*30/100}} >
            <Text style={{fontSize:14,textAlign:'right',fontWeight: "bold"}}>Ilham Ramadani</Text>  
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:40}}>
          <View style={{width:width*60/100}} >
            <Text style={{fontSize:14}}>Gender</Text>    
          </View>
          <View style={{width:width*30/100}} >
            <Text style={{fontSize:14,textAlign:'right',fontWeight: "bold"}}>Man</Text>  
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:40}}>
          <View style={{width:width*60/100}} >
            <Text style={{fontSize:14}}>No Handphone</Text>    
          </View>
          <View style={{width:width*30/100}} >
            <Text style={{fontSize:14,textAlign:'right',fontWeight: "bold"}}>08128191816</Text>  
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:40}}>
          <View style={{width:width*60/100}} >
            <Text style={{fontSize:14}}>Job</Text>    
          </View>
          <View style={{width:width*30/100}} >
            <Text style={{fontSize:14,textAlign:'right',fontWeight: "bold"}}>Another</Text>  
          </View>
        </View>
        <View style = {{marginTop:40, borderWidth: 0.5,borderColor:'#546E7A',}} />
        <Text style={{fontSize:14,fontWeight: "bold",marginTop:10}}>Ilham Ramadani</Text>  
        <Text style={{fontSize:14,marginTop:10}}>-</Text>  
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
        <View style={{width:width*10/100}} >
          <Checkbox style={styles.input}
            status={checkBook? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checkBook: !checkBook }); }}
          />
        </View>
        <View style={{width:width*78/100}} >
            <Text style={{fontSize:12,marginLeft:3}}>I agree to the terms and conditions and ensure the above data is correct</Text>  
          </View>
        </View>
        <Button style={{width:width*90/100,height:40, marginTop:30,borderRadius:20}} color="#FF9800" mode="contained" onPress={() => this.props.navigation.navigate('BookingSucces')}>
          Book
        </Button>
      </View>
      </ScrollView>
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
  lineStyle:{
    marginTop:50,
    borderWidth: 0.5,
    borderColor:'#546E7A',
  },
  padding:{
    margin:10,
    textAlign:'center'
  },
  button:{
    marginTop:100,
    alignSelf: 'flex-end',
    width:150,
    bottom:0
  },
})

export default Booking;