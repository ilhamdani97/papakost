import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Share } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage'
import { Marker } from 'react-native-maps';

export default class DetailPage extends Component {
  state = {
    bookingLogin: false,
    position: 1,
    interval: null,
  }
  componentDidMount() {
    this.check()
  }
  check = async () => {
    const fetchData = await AsyncStorage.getItem('token')
    if (fetchData) {
      this.setState({
        bookingLogin: true
      })
    } else {
      this.setState({
        bookingLogin: false
      })
    }
  }
  constructor(props) {
    super(props)
    params = props.navigation.state.params.rows

  }
  toRupiah = (price) => {
    let rupiah = '';
    let convert = price.toString().split('').reverse().join('');
    for (var i = 0; i < convert.length; i++) if (i % 3 == 0) rupiah += convert.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }
  render() {
    const { navigation } = this.props;
    const { width, height } = Dimensions.get('window');
    const data = navigation.getParam('dorms');

    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Appbar.Header style={{ backgroundColor: 'transparent' }}>
            <Appbar.BackAction color="black"
              onPress={() => this.props.navigation.goBack()}
            />
          </Appbar.Header>
          <Image source={{ uri: `http://192.168.1.25:3000/images/${data.image}` }}
            style={{ width: width * 100 / 100, height: 200, }} />
          <View style={{ flexDirection: "row", paddingTop: 15, paddingLeft: 20 }}>
            <View >
              <TouchableOpacity><Icon name={'favorite-border'} /></TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 18 }}>
              <TouchableOpacity onPress={() => Share.share({
                message: 'Call owner Dorms'+data.createdBy.no_tlp,
                url: 'papakost.com',
                title: 'Papa Kost'
              }, {
                  // Android only:
                  dialogTitle: 'Share ',

                })} ><Icon name={'share'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>{data.name_kost}</Text>
            <Text style={{ color: 'black' }}>{data.address_kost}</Text>
            <Text style={{ color: '#FF9800' }}>{data.stock_room} Room left</Text>
            <View style={{ width: width * 90 / 100, height: 1, backgroundColor: '#FF9800', marginBottom: 15, marginTop: 15 }} />
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Rating :</Text>
            <Text style={{ fontSize: 40, color: '#FF9800' }}>9.4<Text style={{ fontSize: 20, color: 'black' }}>/10</Text></Text>
            <Text style={{ color: 'black', paddingTop: 25, paddingBottom: 10, fontWeight: 'bold' }}>Facilities :</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: '#FF9800', marginRight: 10 }}>
                <View style={{ paddingTop: 20 }}>
                  <Icon name={'wifi'} />
                </View>
              </View>
              <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: '#FF9800', marginRight: 10 }}>
                <View style={{ paddingTop: 20 }}>
                  <Icon name={'smoking-rooms'} />
                </View>
              </View>
              <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: '#FF9800', marginRight: 10 }}>
                <View style={{ paddingTop: 20 }}>
                  <Icon name={'wc'} />
                </View>
              </View>
            </View>
            <Text style={{ color: 'black', paddingTop: 25, fontWeight: 'bold' }}>location :</Text>
            <View style={{ height: 200, width: width * 90 / 100 }}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: data.latitude,
                  longitude: data.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                }}
              >
                <Marker
                  coordinate={
                    {
                      latitude: data.latitude,
                      longitude: data.longitude
                    }
                  }
                  title={data.name_kost}
                  description={data.description}
                />
              </MapView>
            </View>
            <Text style={{ color: 'black', paddingTop: 25, fontWeight: 'bold' }}>About This Kost:</Text>
            <Text style={{ color: 'black', paddingTop: 10 }}>{data.description}</Text>
            <View style={{ borderRadius: 8, alignItems: 'center', backgroundColor: '#FF9800', marginTop: 15, marginBottom: 10, height: 80 }}>
              <Text style={{ color: 'white', fontSize: 20, paddingLeft: 5, paddingBottom: 4 }}>{this.toRupiah(data.price)}</Text>
              <TouchableOpacity 
               onPress={() => {
                if (this.state.doLogin) {
                  this.props.navigation.navigate('BookingDate')
                } else {
                  this.props.navigation.navigate('LoginStart')
                }
                // alert(this.state.udahLogin)
              }}>
                <Button style={{ padding: 2, margin: 2, backgroundColor: '#FF9800', borderRadius: 5, borderWidth: 1, borderColor: '#fff' }}><Text style={{ color: '#fff' }}>Booking</Text></Button>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    marginTop: 10,
    height: 200
  },
});
