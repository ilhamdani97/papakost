import React, { Component } from 'react';
import { Text, Card, Paragraph, Button, Colors, Checkbox, IconButton } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, ScrollView, Image, Dimensions, StatusBar } from 'react-native';
import { Item, Input, Label, Icon, Picker } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { APIPAPA } from 'react-native-dotenv'

class Ads extends Component {
  static navigationOptions = {
    title: 'Ads',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };

  constructor(props) {
    super(props)
    this.state = {
      image: "",
      name_kost: "",
      price: "",
      stock_room: "",
      description: "",
      address_kost: "",
      selectedCity: "",
      token: '',
      tmpProv: '',
      tmpProvName: '',
      tmpKab: '',
      tmpKabName: '',
      tmpKec: '',
      tmpKecName: '',
      tmpKel: '',
      tmpKelName: '',
      dataProv: [],
      dataKab: [],
      dataKec: '',
      dataKel: '',
      region: {
        latitude: -6.280229,
        longitude: 106.710818,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      markerRegion:
      {
        latitude: -6.90389,
        longitude: 107.61861,
      },

    }
  }
  Province = async () => {
    const responseTemporer = await axios.get("http://dev.farizdotid.com/api/daerahindonesia/provinsi");
    await this.setState({
      dataProv: responseTemporer.data.semuaprovinsi
    })
  }
  Kab = async () => {
    const responseTemporer = await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/${this.state.tmpProv}/kabupaten`);
    await this.setState({
      dataKab: responseTemporer.data.kabupatens
    })
  }
  Kec = async () => {
    await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${this.state.tmpKab}/kecamatan`);
  }
  Kel = async () => {
    await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/kecamatan/${this.state.tmpKec}/desa`);
  }
  componentDidMount() {
    this.Province();
  }

  handleImagePicker = () => {
    const options = {
      title: 'choose photo',
      storageOptions: {
        skipBackup: true,
        path: 'image'
      },
    }
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let tmpPhoto = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        const source = tmpPhoto;
        this.setState({
          image: source
        })
      }
    })
  }

  handleChange = (text, name) => {
    this.setState({
      [name]: text
    })
  }
  async componentWillMount() {
    const token = await AsyncStorage.getItem('token')
    this.setState({
      token: token
    })
  }

  onAds = async () => {
    let tempDorms = {
      name_kost: this.state.name_kost,
      price: this.state.price,
      stock_room: this.state.stock_room,
      description: this.state.description,
      address_kost: this.state.address_kost,
      provinsi: this.state.provinsi,
      kabupaten: this.state.kabupaten,
      longitude: this.state.region.longitude,
      latitude: this.state.region.latitude,
      image: this.state.image
    }

    let data = new FormData()
    data.append('name_kost', this.state.name_kost)
    data.append('price', this.state.price)
    data.append('stock_room', this.state.stock_room)
    data.append('description', this.state.description)
    data.append('provinsi', this.state.provinsi)
    data.append('kabupaten', this.state.kabupaten)
    data.append('address_kost', this.state.address_kost)
    data.append('longitude', this.state.region.longitude)
    data.append('latitude', this.state.region.latitude)
    data.append('images', this.state.image
    )

    await axios.post(APIPAPA + 'dorm', data, {
      headers: {
        authorization: await AsyncStorage.getItem('token'), 'Content-Type': 'multipart/form-data'
      },
    })
      .then((response) => {
        this.props.navigation.navigate('Explore')
      })
      .catch((error) => {
        console.log(error)
      });
  }

  handleRegionChange = (region) => {
    this.setState({
      region,
      data: {
        ...this.state.data,
        region: {
          latitude: region.latitude,
          longitude: region.longitude,
        }
      }
    })
    if (this.marker) {
      this.marker._component.animateMarkerToCoordinate(region, 100);
    }

  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    // console.log(this.state);

    const logo = require('../../assets/photo.png')
    const { width, height } = Dimensions.get('window')
    // console.warn(this.state.photo);
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            {/* title of kost */}
            <Text style={styles.font1}>Title</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='ex. Pondok rayu'
                onChangeText={text => this.handleChange(text, "name_kost")}
                value={this.state.title}
              />
              <Icon name='star' style={styles.icon} />
            </Item>
            {/* address kost */}
            <Text style={styles.font}>Address</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='ex. Jl. kenanga 12 No. 6 RT/RW 01/02'
                onChangeText={text => this.handleChange(text, "address_kost")}
                value={this.state.address_kost} />
            </Item>
            {/* price kos */}
            <Text style={styles.font}>Price</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} keyboardType={'numeric'} placeholder='Insert Price Per Month'
                onChangeText={text => this.handleChange(text, "price")}
                value={this.state.price} />
              <Icon name='star' style={styles.icon} />
            </Item>
            <Text style={styles.font}>Stock Rooms</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} keyboardType={'numeric'} placeholder='Insert Stock Rooms'
                onChangeText={text => this.handleChange(text, "stock_room")}
                value={this.state.stock_room} />
              <Icon name='star' style={styles.icon} />
            </Item>

            {/* complited address */}
            <Text style={styles.font}>Search</Text>
            <Item regular style={{ marginTop: 5 }}>
              <Icon style={styles.icon} active name='search' />
              <Input style={{ borderColor: 'red' }} placeholder='Search Here' />
            </Item>
            <MapView style={styles.map}
              region={this.state.region}
              onRegionChangeComplete={this.handleRegionChange}
            >
              <Marker.Animated
                ref={marker => {
                  this.marker = marker;
                }}
                coordinate={this.state.markerRegion}
              />
            </MapView>

            {/* lat long */}
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <Item style={styles.input}>
                  <Input editable={false} value={this.state.region.longitude.toString()} />
                </Item>
              </View>

              <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, }}>
                <Item style={styles.input}>
                  <Input editable={false} value={this.state.region.latitude.toString()} />
                </Item>
              </View>
            </View>

            {/* Location */}
            <Item>
              <Label>Provinsi</Label>
              <Picker
                selectedValue={this.state.tmpProv}
                style={{ flex: 1 }}
                onValueChange={async (itemValue, itemIndex) => {
                  await this.setState({
                    tmpProv: itemValue
                  })
                  if (this.state.tmpProv.length > 0) {
                    this.Kab().then().catch();
                  }
                }} styles={{ fontSize: 18 }}>
                {this.state.dataProv.map((item, index) => {
                  return (
                    <Picker.Item key={`${item.id}`} label={item.nama} value={item.id} />
                  )
                })}
              </Picker>
            </Item>
            <Item>
              <Label>Kota/Kabupaten</Label>
              <Picker
                  selectedValue={this.state.tmpKab}
                  style={{ flex: 1 }}
                  onValueChange={async (itemValue, itemIndex) =>
                    await this.setState({
                      tmpKab: itemValue
                    })
                  } styles={{ fontSize: 18 }}>
                  {this.state.dataKab.map((item, index) => {
                    return (
                      <Picker.Item key={`${item.id}`} label={item.nama} value={item.id} />
                    )
                  })}
                </Picker>
            </Item>

            {/* Picture */}
            <Text style={styles.font}>Picture</Text>
            <View style={{ height: 200, width: '100%', padding: 5 }}>
              <Image source={this.state.image} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
            </View>
            <Button onPress={this.handleImagePicker} style={{ borderRadius: 10, backgroundColor: '#FF9800', width: 200 }}>
              <Text>Upload Gambar</Text>
            </Button>


            {/* description kos */}
            <Text style={styles.font}>Description</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='Insert Here'
                onChangeText={text => this.handleChange(text, "description")}
                value={this.state.description} />
              <Icon name='star' style={styles.icon} />
            </Item>
          </View>
        </ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', backgroundColor: "#FFFFFF", width: width * 100 / 100, }}>
            <Button style={{ marginLeft: width * 5 / 100, marginRight: width * 5 / 100, marginTop: width * 2 / 100, marginBottom: width * 2 / 100, width: width * 90 / 100, height: 40, alignItems: 'center', alignContent: 'center', borderRadius: 20 }} color="#FF9800" mode="contained" onPress={() => { this.onAds(this.state) }}>
              SUBMIT
              </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    marginBottom: 40

  },
  font: {
    marginTop: 15,
    fontSize: 16,
  },
  font1: {
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    marginTop: 8,
    width: 150,
    height: 40
  },
  buttonfooter: {

  },
  input: {
    borderColor: "#FF9800",
    paddingTop: 5
  },
  icon: {
    color: "#F44336"

  },
  inputcolor: {
    color: "#455A64",
    fontSize: 14,
  },
  map: {
    marginTop: 10,
    height: 200
  },
  logo: {
    marginTop: 8,
    width: 110,
    height: 110,
  },
  submit: {
    marginTop: 8,
    width: 110,
    height: 110,
  },
})
export default Ads;