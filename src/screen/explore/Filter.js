import React, {Component} from 'react'
import {View,Text,InputText,Picker,Dimensions,TextInput} from 'react-native'
import { Card,Button} from 'react-native-paper';
class Filter extends Component {
  state = {
    value: 'filterman',
  };
  mountPrees = ()=>
    this.setState({
      mount : !this.state.mount
  })
  static navigationOptions = {
    title: 'Filter',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800',
      elevation: 0,
    },
  };
  render(){
    const { width, height } = Dimensions.get('window');
    return(
      <View style={{padding:20}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Type Kost (Gender)</Text>
        <View style = {{borderWidth: 0.5,borderColor:'#FF9800',marginTop:16,}} />
        {/* <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
          <View style={{width:width*8/100}}>
            <RadioButton value="filterman" />
          </View>
          <View style={{width:width*15/100}}>
              <Text>Man</Text>
          </View>
          <View style={{width:width*8/100}}>
            <RadioButton value="filterwoman" />
          </View>
          <View style={{width:width*20/100}}>
            
          </View>
          <View style={{width:width*8/100}}>
            <RadioButton value="filtermanand" />
          </View>
          <View style={{width:width*25/100}}>
            
          </View>
          </RadioButton.Group>
        </View> */}
         <Picker
            selectedValue={this.state.language}
            style={{height: 50, width:width*90/100,}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label=" - Gender - " value=" - Gender - " />
            <Picker.Item label="Man" value="Man" />
            <Picker.Item label="Women" value="Women" />
            <Picker.Item label="Man/Woman" value="Man/Woman" />
            
          </Picker> 
        <View style = {{borderWidth: 0.5,borderColor:'#FF9800',marginTop:2}} />
        <Text style={{fontSize:16,fontWeight:'bold',marginTop:20}}>Time Period</Text>
        <View style = {{borderWidth: 0.5,borderColor:'#FF9800',marginTop:16,}} />
        <Picker
            selectedValue={this.state.language}
            style={{height: 50, width:width*90/100,}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label=" - Time - " value=" - Time - " />
            <Picker.Item label="Days" value="Man" />
            <Picker.Item label="Weeks" value="Weeks" />
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="Years" value="Years" />
          </Picker> 
          <View style = {{borderWidth: 0.5,borderColor:'#FF9800',marginTop:2,marginBottom:10}} />
          <Text style={{fontSize:16,fontWeight:'bold',marginTop:5}}>Range Price</Text>
          <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
            <View style={{width:width*40/100, marginTop:2}}>
              <TextInput
                style={{height: 36, borderColor: '#FF9800', borderWidth: 1, borderRadius:20,paddingLeft:6}}
                value="200.000"
              />
            </View>
            <View style={{width:width*8/100, marginTop:2}}>
              <Text style={{marginTop:8,marginLeft:10}}> - </Text>
            </View> 
            <View style={{width:width*40/100, marginTop:2,marginLeft:6}}>
              <TextInput
                style={{height: 36, borderColor: '#FF9800', borderWidth: 1, borderRadius:20,paddingLeft:6}}
                value="20.000.000"
              />
            </View>
          </View>
          <Button style={{width:width*90/100,height:40, marginTop:50,borderRadius:20}} color="#FF9800" mode="contained" >
            <Text style={{color:'white'}}>Search</Text>
          </Button>
      </View>
    )
  }
}
export default Filter