import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import Slideshow from 'react-native-slideshow';
import { Card } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';
const data = [
  {
    imageUrl: "https://www.raunsumatra.com/home/wp-content/uploads/2015/09/bandung.jpg",
    title: "Bandung",
  },
  {
    imageUrl: "https://idetrips.com/wp-content/uploads/2018/07/Monas-jakarta-tourism-go-id-640x427.jpg",
    title: "Jakarta",
  },
  {
    imageUrl: "https://www.alodiatour.com/wp-content/uploads/2018/04/Foto-Tugu-Jogja.jpg",
    title: "Yogyakarta",
  },
  {
    imageUrl: "http://blog.airyrooms.com/wp-content/uploads/2018/02/Panduan-Tips-Pergi-Liburan-Ke-Semarang-via-@novemlawalata.jpg",
    title: "Semarang",
  },
  {
    imageUrl: "https://pluginongkoskirim.com/wp-content/uploads/2019/07/kantor-wahana-surabaya-1000x500.jpg",
    title: "Surabaya",
  },
  {
    imageUrl: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/bali/denpasar/denpasar1.jpg",
    title: "Denpasar",
  }
];

export default class ExplorePage extends Component {
  state = {
    isLogin: false,
    position: 1,
    interval: null,
  }
  componentDidMount() {
    this.checkLogin()
  }
  checkLogin = async () => {
    const fetchData = await AsyncStorage.getItem('token')
    if (fetchData) {
      this.setState({
        isLogin: true
      })
    } else {
      this.setState({
        isLogin: false
      })
    }
  }
  
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: 'https://static.mamikos.com/uploads/cache/data/user/2019-07-31/z2algAvh-360x480.jpg',
        },
        {
          url: 'https://static.mamikos.com/uploads/cache/data/user/2019-05-10/A82cx34O-360x480.jpg',
        },
        {
          url: 'https://static.mamikos.com/uploads/cache/data/user/2019-05-03/odhbQ7NP-360x480.jpg',
        },
      ],
      data: data
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="face"
            color="#FF9800"
            size={28}
            onPress={() => console.log('Pressed')}
          />
          <Text style={styles.header}>PAPAKOST</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <IconButton
            icon="hotel"
            color="#FF9800"
            size={23}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="domain"
            color="#FF9800"
            size={23}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="local-grocery-store"
            color="#FF9800"
            size={23}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="work"
            color="#FF9800"
            size={23}
            onPress={() => console.log('Pressed')}
          />

        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.welcome}>Hi,</Text>
          <Text style={styles.intro}>What Are You Looking For?</Text>
          <Button color='#FF9800' borderColor='#FF9800' icon="search" mode="outlined" onPress={() => this.props.navigation.navigate('SearchPage')}><Text style={styles.button}>search Here</Text></Button>
          <Text style={styles.promo}>Promo</Text>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
            arrowSize={0}
            height={145} />
          <View style={{ borderRadius: 8, alignItems: 'center', backgroundColor: '#FF9800', marginTop: 15, flexDirection: 'row', height: 50 }}>
            <Text style={{ fontSize: 12, paddingLeft: 10, color: 'white', flex: 8, alignContent: 'center' }}>
              You Are Owner?
            {"\n"}
              Create Your's Ads
          </Text>
            <TouchableOpacity
              onPress={() => {
                if (this.state.isLogin) {
                  this.props.navigation.navigate('Ads')
                } else {
                  this.props.navigation.navigate('LoginStart')
                }
                // alert(this.state.udahLogin)
              }}>
              <Button style={{ flex: 2, margin: 6, backgroundColor: '#FF9800', borderRadius: 5, borderWidth: 1, borderColor: '#fff' }}><Text style={{ color: '#fff' }}>Ads</Text></Button>
            </TouchableOpacity>
          </View>

          {/* <View style={{borderRadius:8,alignItems:'center', backgroundColor:'silver', marginTop: 15, flexDirection:'row', height:50}}>  
          <Text style={{fontSize:13,paddingLeft:10, color:'white', flex:8, alignContent:'center'}}>
            Tertarik Mengiklankan Kosmu?
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Button style={{flex:2, margin:10,}} mode="contained">Pasang Iklan</Button>
          </TouchableOpacity>
        </View> */}

          <View style={{ flexDirection: 'row', flex: 1, }}>
            <Text style={{ flex: 1, marginTop: 15, fontWeight: 'bold', color: 'black', justifyContent: 'flex-start' }}>Popular City</Text>
            <TouchableOpacity>
              <Text style={{ marginTop: 15, color: '#FF9800', justifyContent: 'flex-end', textAlign: 'right', flex: 1 }}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.title}
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchPage')}>
                  <Card
                    title={null}
                    image={{ uri: rowData.imageUrl }}
                    containerStyle={{ padding: 0, width: 150 }}>
                    <Text style={{ textAlign: 'center' }}>
                      {rowData.title}
                    </Text>
                  </Card>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  welcome: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  intro: {
    fontSize: 15,
    color: 'black',
    marginBottom: 15,
  },
  promo: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
    color: 'black',
    fontWeight: "bold",
  }, header: {
    fontWeight: 'bold',
    color: '#FF9800',
    fontSize: 15,
    marginTop: 13
  }

});
