import React, { Component } from 'react';
import { StyleSheet, TextInput, FlatList, Text, Dimensions, TouchableOpacity,Share,ScrollView} from 'react-native';
import { Appbar} from 'react-native-paper';
import { View } from 'native-base';
import { Card,Icon} from "react-native-elements";
import ActionSheet from 'react-native-actionsheet';

const options = [
    <Text style={{color: '#FF9800'}}>A-Z</Text>,
    <Text style={{color: '#FF9800'}}>Newest</Text>, 
    <Text style={{color: '#FF9800'}}>High To Low Price</Text>,
    <Text style={{color: '#FF9800'}}>Low To High Price</Text>,
    <Text style={{color: '#FF9800'}}>The Best Rating</Text>,
    <Text style={{color: 'red'}}>Cancel</Text>
  ]
const {width,height} = Dimensions.get('window');
const data = [
    {
      name: 'Rumah Bang Haji Ahmad Solihin Binti Hambali  ',
      address: 'Jalan Kaliurang no 34 Sleman Daerah Istimewa Yogyakarta',
      longitude: -6.280229,
      latitude:  106.710818,
      price: 'Rp. 450.000 / Room / Mounth',
      status:"Booking Available",
      available: '9 Rooms left',
      cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-26/HMBkCoNa-540x720.jpg'
    },
    {
      name: 'Rumah Bang Jono',
      address: 'Jalan Kaliurang no 70 Yogyakarta',
      longitude: -6.284310,  
      latitude: 106.727432,
      price: 'Rp. 500.000 / Room / Mounth',
      status:"Booking Available",
      available: '1 Rooms left',
      cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-26/HMBkCoNa-540x720.jpg'
    },
    {
      name: 'Rumah Bang Karni',
      address: 'Jalan Kaliurang no 36 Yogyakarta',
      longitude: -6.280613, 
      latitude: 106.730325,
      price: 'Rp. 350.000 / Room / Mounth',
      status:"Booking Available",
      available: '1 Rooms left',
      cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-05/urFdLr1U-540x720.jpg'
    },
    {
      name: 'Rumah Bang miun',
      address: 'Jalan Kaliurang no 37 Yogyakarta',
      longitude: -6.283002, 
      latitude: 106.712428,
      price: 'Rp. 550.000 / Room / Mounth',
      status:"Booking Available",
      available: '3 Rooms left',
      cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-05/rqjtRQqI-540x720.jpg'
    },
    {
      name: 'Rumah Bang jali',
      address: 'Jalan Kaliurang no 38 Yogyakarta',
      longitude: -6.282341,
      latitude: 106.722792,
      price: 'Rp. 400.000 / Room / Mounth',
      available: '4 Rooms left',
      status:"Booking Available",
      cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-05/c1QOnr0p-540x720.jpg'
    },
    {
      name: 'Rumah Bang tarmin',
      address: 'Jalan Kaliurang no 39 Yogyakarta',
      longitude: -6.282980, 
      latitude: 106.744423,
      price: 'Rp. 500.000 / Room / Mounth',
      available: '5 Rooms left',
      status:"Booking Available",
      cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-01/cPEYt5ij-540x720.jpg'
    },
   ]
  
export default class SearchPage extends Component { 
showActionSheet = () => {
    this.ActionSheet.show()
    }
    
constructor(props) {
    super(props);
    
    this.state = {
        data: data,
        width: width,
        height: height
    };
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{backgroundColor:'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Appbar.Header style={{backgroundColor:'transparent'}}>
                <Appbar.BackAction color="black"
                     onPress={() => this.props.navigation.goBack()}
                />
                <TextInput style={styles.header} placeholder="Search Here" />
            </Appbar.Header>

                <View>
                    <FlatList
                        keyExtractor={item=>item.name}
                        data={this.state.data}
                        renderItem={({ item: rowData }) => {
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPage', {rowData:rowData})} >
                                <View style={{ flex:1,width:width*96/100,marginLeft:width*2/100,marginRight:width*2/100}} >
                                    <Card
                                        image={{ uri: rowData.cover }}
                                        containerStyle={{ padding: 2}}
                                        >

                                        <Text style={{marginBottom: 10}}>
                                            {rowData.name}
                                        </Text>
                                        <Text style={{marginBottom: 6,fontWeight:'bold'}}>
                                            {rowData.price}
                                        </Text>
                                        <Text style={{marginBottom: 6}}>
                                            {rowData.address}
                                        </Text>
                                        <View style={{flex: 1, flexDirection: 'row',marginTop:6}}>
                                            <View style={{width:width*62/100}} >
                                                <View style={{height:26,width:130, backgroundColor:"#FF9800", borderRadius:50}}>
                                                    <Text style={{fontSize: 16,color:"white", textAlign:"center",justifyContent:"center"}}>{rowData.status}</Text>
                                                </View>
                                            </View>
                                            <View style={{width:width*30/100}} >
                                                <Text style={{color:'red'}}>{rowData.available}</Text>
                                            </View>
                                        </View>
                                        </Card>
                                </View>
                            </TouchableOpacity>
                        );
                        }}
                    />
                </View>
            </ScrollView>
            <View style={{flex:1}}>
                <View style={styles.filter}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    
                        <View style={{width:width*8/100,marginTop:18,marginLeft:5}}>
                        <Icon
                            name='md-funnel'
                            type='ionicon'
                            color='#FF9800'
                        />
                        </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Filter')} underlayColor="white">
                        <View style={{width:width*14/100,marginLeft:4,marginTop:19}}>
                            <Text style={{fontSize:16}}>Filter</Text>
                        </View>
                    </TouchableOpacity>
                        <View
                            style={{
                            borderLeftWidth: 0.7,
                            borderLeftColor: '#9E9E9E',
                            }}
                        />
                    
                        <View style={{width:width*10/100,marginTop:18,marginLeft:8}}>
                        <Icon
                            name='md-arrow-down'
                            type='ionicon'
                            color='#FF9800'
                        />
                        </View>
                    <TouchableOpacity onPress={this.showActionSheet} underlayColor="white">
                        <View style={{width:width*14/100,marginLeft:4,marginTop:19}}>
                            <Text style={{fontSize:16}}>Sort</Text>
                        </View>
                    </TouchableOpacity>
                    </View>     
                </View>
            </View>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Sort By:'}
                    options={options}
                    cancelButtonIndex={5}
                    destructiveButtonIndex={1}
                    onPress={(index) => { /* do something */ }}
                    color={'#FF9800'}
                />                 
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    header: {
        width: 280,
        backgroundColor: 'transparent'
    },
    filter:{
        borderBottomWidth: 0,
        shadowColor: '#9E9E9E',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
        borderRadius:8, 
        position:'absolute',
        bottom:0,
        alignSelf:'center', 
        backgroundColor:"#FFFFFF",
        width: width*50/100,
        height:60,
        marginBottom:20
    }
})