import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, TouchableHighlight, Image, Dimensions, StatusBar } from 'react-native';
import { Provider as PaperProvider, Card, Title, Paragraph, IconButton, Colors } from 'react-native-paper';
import { View } from 'native-base';
import { Icon } from 'react-native-elements'
import axios from 'axios';

class BookingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: []
    };
  }
  componentDidMount() {
    axios.get("http://192.168.0.11:3000/api/details")
      .then(response => {
        const detail = response.data;
        this.setState({ detail });
        console.log(detail);
      })
      .catch(error => {
        alert(error)
      })
  }
  static navigationOptions =
    {
      title: 'Booking List',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#FF9800'
      }
    };
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => {
    const { width, height } = Dimensions.get('window');
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', { rows: item })} underlayColor="white">
        <Card style={{ marginTop: 10 }} >
          <Card.Content >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
              <View style={{ width: width * 30 / 100 }}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../assets/pictures.png')}
                />
              </View>
              <View style={{ width: width * 65 / 100, marginLeft: 4, marginTop: 5 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.name_kost}</Text>
                <Text style={{ fontSize: 12, }}>{item.address_kost}</Text>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ width: 80, height: 40 }}>
                    <Text style={{ fontSize: 10 }}>Booking</Text>
                    <Text style={{ fontSize: 11 }}>{item.stock_room}</Text>
                  </View>
                  <View style={{ width: 80, height: 40 }}>
                    <Text style={{ fontSize: 10 }}>Durasi Sewa</Text>
                    <Text style={{ fontSize: 11 }}>{item.rate}</Text>
                  </View>
                </View>
                <View style={{ height: 22, width: 120, backgroundColor: "#FFA726", borderRadius: 50 }}>
                  <Text style={{ fontSize: 12, color: "white", padding: 3, textAlign: "center", alignContent: "center", justifyContent: "center" }}>{item.booking_availabel}</Text>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableHighlight>
    )
  }
  render() {
    const extractKey = ({ id }) => id.toString()
    return (
      <FlatList
        style={styles.container}
        data={this.state.detail}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  card: {
    margin: 10

  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
export default BookingList;