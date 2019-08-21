import React, { Component } from 'react';
import { FlatList, Text, StyleSheet,TouchableHighlight,Image,Dimensions} from 'react-native';
import { Provider as PaperProvider,Card,Title,Paragraph,IconButton, Colors} from 'react-native-paper';
import { View } from 'native-base';
import { Icon } from 'react-native-elements'
const rows = [
  { id: 0, picture:"./src/assets/pictures.png", title: 'Kos Mami Kos Padjajaran Sumedang', date:'17 Agu 2019',time:'2 bulan', confirm:'Tunggu Konfirmasi' },
  {  id: 1, picture:"./src/assets/pictures.png", title: 'Kos Mami Kos Padjajaran Sumedang', date:'16 Agu 2019',time:'5 bulan', confirm:'Sudah Konfirmasi'},
]

const extractKey = ({ id }) => id
class BookingList extends Component {

  renderItem = ({ item }) => {
    const { width, height } = Dimensions.get('window');
    return (
        <TouchableHighlight underlayColor="white">
          <Card style={{marginTop:10}} >
            <Card.Content >
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width:width*30/100}}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../assets/pictures.png')}
              />
              </View>
              <View style={{width:width*65/100,marginLeft:4,marginTop:5}}>
                <Text style={{fontSize: 14,fontWeight:"bold"}}>{item.title}</Text>
                <Text style={{fontSize: 12,}}>{item.massage}</Text>
                <View style={{flex: 1, flexDirection: 'row',}}>
                  <View style={{width: 80, height: 40}}>
                    <Text style={{fontSize: 10}}>Booking</Text>
                    <Text style={{fontSize: 11}}>{item.date}</Text>
                  </View>
                  <View style={{width: 80, height: 40}}>
                    <Text style={{fontSize: 10}}>Duration</Text>
                    <Text style={{fontSize: 11}}>{item.time}</Text>
                  </View>
                </View>
                <View style={{height:26,width:120, backgroundColor:"#FF9800", borderRadius:50}}>
                  <Text style={{fontSize: 12,color:"white", padding:2, textAlign:"center",alignContent:"center",justifyContent:"center"}}>{item.confirm}</Text>
                </View>
              </View>
            </View>
            </Card.Content>
          </Card>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  card:{
    margin:10

  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
export default BookingList;