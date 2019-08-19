import React, {Component} from 'react';
import { Provider as PaperProvider,Text,Card,Button,RadioButton, RadioGroup,withRadioGroup,} from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Dimensions,Image,ScrollView} from 'react-native';
import { Textarea, Form } from "native-base";
import { Icon } from 'react-native-elements'

class BookingCancel extends Component {
  
  static navigationOptions =
  {
    title: 'Detail Booking',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  state = {
    value: 'kostlain',
  };
  render() {
    const { checked} = this.state;
    const { width, height } = Dimensions.get('window');
    return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Berikan alasan pembatalan booking terhadap pemilik kost</Text>
        <RadioButton.Group
          onValueChange={value => this.setState({ value })}
          value={this.state.value}
        >
        <View style={{flex: 1, flexDirection: 'row',marginTop:20}}>
          <View style={{width:width*80/100, marginTop:7}}>
            <Text>Sudah dapat kost lain</Text>
          </View>
          <View style={{width:width*10/100}}>
            <RadioButton value="kostlain" />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <View style={{width:width*80/100, marginTop:7}}>
            <Text>Kamar tidak cocok</Text>
          </View>
          <View style={{width:width*10/100}}>
            <RadioButton value="tidakcocok" />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <View style={{width:width*80/100, marginTop:7}}>
            <Text>Lingkungan kost tidak cocok</Text>
          </View>
          <View style={{width:width*10/100}}>
            <RadioButton value="lingkungan" />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>
          <View style={{width:width*80/100, marginTop:7}}>
            <Text>Lainya</Text>
          </View>
          <View style={{width:width*10/100}}>
            <RadioButton value="lainya" />
          </View>
        </View>
        </RadioButton.Group>
        <Form style={{marginTop:5}}>
          <Textarea rowSpan={4} bordered placeholder="Masuka alasan lainya" />
        </Form>
        <Text style={{fontSize:11,marginTop:20}}>Anda tidak dapat melakukan pembayaran setelah membatalkan pesan ini</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width:width*48/100}}>
            <Button style={{width:width*40/100,height:40, marginTop:20,borderRadius:20}} color="#FF9800" mode="contained" onPress={() => console.log('Pressed')}>
              Tidak Jadi
            </Button>
          </View>
          <View style={{width:width*45/100}}>
            <Button style={{width:width*40/100,height:40, marginTop:20,borderRadius:20}} color="#FF9800" mode="contained" onPress={() => console.log('Pressed')}>
              Ya, Batalkan
            </Button>
          </View>
        </View>
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
  textTitle:{
    fontWeight: "bold",
    fontSize:16
  },
  padding:{
    margin:10,
    textAlign:'center'
  }
})
export default BookingCancel;