import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,Dimensions,Share} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import {Icon} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class DetailPage extends Component {

  // static navigationOptions = {
  //     header: null
  //   }
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View>
          <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Appbar.Header style={{position:'absolute'}}>
            <Appbar.BackAction color="black"
                  onPress={() => this.props.navigation.navigate('SearchPage')}
                  />
        </Appbar.Header> */}
        <Image source={{uri:'https://static.mamikos.com/uploads/cache/data/style/2019-08-01/cPEYt5ij-540x720.jpg'}}
        style={{width:width*100/100, height: 200,}}/>
        <View style={{flexDirection:"row", paddingTop: 15, paddingLeft: 20}}>
        <View >
              <TouchableOpacity><Icon name={'favorite-border'}/></TouchableOpacity>
          </View>
          <View style={{paddingLeft: 18}}>
              <TouchableOpacity onPress={() =>  Share.share({
                                                message: 'BAM: we\'re helping your business with awesome React Native apps',
                                                url: 'http://bam.tech',
                                                title: 'Wow, did you see that?'
                                              }, {
                                              // Android only:
                                              dialogTitle: 'Share ',
                                              
                                            })} ><Icon name={'share'} />
            </TouchableOpacity>
          </View>
        </View>
          <View style={{paddingLeft:20, paddingRight:20}}>
            <Text style={{fontWeight:'bold', fontSize:30, color:'black'}}>{this.props.navigation.getParam('rowData').name}</Text>
            <Text style={{color:'black'}}>{this.props.navigation.getParam('rowData').address}</Text>
            <Text style={{color:'#FF9800'}}>9 Room left</Text>
            <View style={{width:width*90/100, height: 1, backgroundColor:'#FF9800' , marginBottom:15, marginTop:15}} />
            <Text style={{color:'black', fontWeight:'bold'}}>Rating :</Text>
            <Text style={{fontSize:40, color:'#FF9800'}}>9.4<Text style={{fontSize:20, color:'black'}}>/10</Text></Text>
            <Text style={{color:'black', paddingTop:25, paddingBottom:10 , fontWeight:'bold' }}>Facilities :</Text>
            <View style={{flexDirection:"row"}}>
              <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: '#FF9800', marginRight:10 }}>
                  <View style={{paddingTop:20}}>
                    <Icon name={'wifi'}/>
                  </View>
              </View>
              <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: '#FF9800', marginRight:10 }}>
                  <View style={{paddingTop:20}}>
                    <Icon name={'smoking-rooms'}/>
                  </View>
              </View>
              <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: '#FF9800', marginRight:10 }}>
                  <View style={{paddingTop:20}}>
                    <Icon name={'wc'}/>
                  </View>
              </View>
            </View>
            <Text style={{color:'black', paddingTop:25 , fontWeight:'bold'}}>location :</Text>
            <View style={{height:200,width:width*90/100}}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: this.props.navigation.getParam('rowData').longitude,
                longitude: this.props.navigation.getParam('rowData').latitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              
            >
              <Marker
                coordinate={
                  {latitude:this.props.navigation.getParam('rowData').longitude,
                    longitude:this.props.navigation.getParam('rowData').latitude
                  }
                }
                title={"marker.title"}
                description={"marker.description"}
              />
            </MapView>
            </View>
            <Text style={{color:'black', paddingTop:25 , fontWeight:'bold'}}>About This Kost:</Text>
            <Text style={{color:'black', paddingTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
            <View style={{borderRadius:8,alignItems:'center', backgroundColor:'#FF9800', marginTop: 15,marginBottom:10, height:80}}>  
                <Text style={{color:'white', fontSize:20, paddingLeft:5,paddingBottom:4}}>{this.props.navigation.getParam('rowData').price}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingDate')}>
                <Button style={{padding:2, margin:2,backgroundColor:'#FF9800', borderRadius:5,borderWidth: 1,borderColor: '#fff'}}><Text style={{color:'#fff'}}>Booking</Text></Button>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  map:{
    marginTop:10,
    height:200
  },
});
