import React, { Component } from 'react';
import { Text, Button, Checkbox } from 'react-native-paper';
import { StyleSheet, TouchableHighlight, View, ScrollView, Image, Dimensions, StatusBar } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';


const { width, height } = Dimensions.get('window');
class Ads extends Component {
  static navigationOptions = {
    title: 'Ads',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  state = {
    photo: null,
    checkbarang: false,
    checkjasa: false,
  };
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    const logo = require('../../assets/photo.png')
    const { checkbarang, checkjasa, photo } = this.state;
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
            <Text style={styles.font}>Title</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='Insert Here' />
              <Icon name='star' style={styles.icon} />
            </Item>
            <Text style={styles.font}>Price of Item</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} keyboardType={'numeric'} placeholder='Insert Here' />
              <Icon name='star' style={styles.icon} />
            </Item>
            <Text style={styles.font}>Description</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='Insert Here' />
              <Icon name='star' style={styles.icon} />
            </Item>
            <Text style={styles.font}>Category</Text>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
              <View style={{ width: 40, height: 40, }}>
                <Checkbox style={styles.input}
                  status={checkbarang ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkbarang: !checkbarang }); }}
                />
              </View>
              <View style={{ width: 140, height: 40, }} >
                <Text style={{ marginTop: 8, marginLeft: 2 }}>Item</Text>
              </View>
              <View style={{ width: 40, height: 40, }}>
                <Checkbox style={styles.input}
                  status={checkjasa ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ checkjasa: !checkjasa }); }}
                />
              </View>
              <View style={{ width: 140, height: 40, }}>
                <Text style={{ marginTop: 8, marginLeft: 2 }}>Service</Text>
              </View>
            </View>
            <Text style={styles.font}>Search</Text>
            <Item regular style={{ marginTop: 5 }}>
              <Icon style={styles.icon} active name='search' />
              <Input style={{ borderColor: 'red' }} placeholder='Insert Here' />
            </Item>
            <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
              Edit Location
            </Button>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: -6.301795,
                longitude: 106.735051,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}

            >
              <Marker
                coordinate={
                  {
                    latitude: -6.301645,
                    longitude: 106.735260
                  }
                }
                title={"marker.title"}
                description={"marker.description"}
              />
            </MapView>
            <Text style={styles.font}>Address</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='Insert Here' />
            </Item>
            <Text style={styles.font}>Picture</Text>
            <TouchableHighlight underlayColor="white" onPress={this.handleChoosePhoto}>
              {/* onPress={this.props}  */}
              <Image
                style={styles.logo}
                source={logo}
              />
            </TouchableHighlight>

            <Text style={{ paddingTop: 2, fontSize: 16, }}>Name</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='Insert Here' />
              <Icon name='star' style={styles.icon} />
            </Item>
            <Text style={styles.font}>No Telpon / Hp</Text>
            <Item style={styles.input}>
              <Input style={styles.inputcolor} placeholder='Insert Here' />
              <Icon name='star' style={styles.icon} />
            </Item>
          </View>

        </ScrollView>
        <View style={styles.viewbutton}>
          <Button style={styles.buttonfooter} mode="contained" onPress={() => console.log('Pressed')}>
            SUBMIT
              </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    marginBottom: 40

  },
  viewbutton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: "#FFFFFF",
    width: width * 100 / 100,
    flex: 1
  },
  font: {
    marginTop: 15,
    fontSize: 16,
  },
  buttonSmall: {
    marginTop: 8,
    width: 150,
    height: 40,
    color:"#FF9800"
  },
  buttonfooter: {
    marginLeft: (width * 5 / 100),
    marginRight: (width * 5 / 100),
    marginTop: (width * 2 / 100),
    marginBottom: (width * 2 / 100),
    width: (width * 90 / 100),
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 20,
    color:"#FF9800"
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