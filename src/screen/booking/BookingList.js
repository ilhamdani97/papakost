import React, { Component } from 'react';
import { FlatList, Text, StyleSheet,TouchableHighlight,Image,Dimensions,StatusBar} from 'react-native';
import { Provider as PaperProvider,Card,Title,Paragraph,IconButton, Colors} from 'react-native-paper';
import { View } from 'native-base';
import { Icon } from 'react-native-elements'
const rows = [
  { id: "0", picture:"./src/images/pictures.png", title: 'Kos Mami Kos Padjajaran Sumedang', date:'17 Agu 2019',time:'2 bulan', confirm:'Tunggu Konfirmasi' },
  {  id:"1", picture:"./src/images/pictures.png", title: 'Kos Papa Kos Bintaro Tangsel', date:'16 Agu 2019',time:'5 bulan', confirm:'Sudah Konfirmasi'},
]


class BookingList extends Component {
  static navigationOptions =
  {
    title: 'Booking List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
 
  renderItem = ({ item }) => {
    
    const { width, height } = Dimensions.get('window');
    return (
      
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail',{rows:item})} underlayColor="white">
          <Card style={{marginTop:10}} >
            <Card.Content >
            <View style={{flex: 1, flexDirection: 'row'}}>
            <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
              <View style={{width:width*30/100}}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../image/pictures.png')}
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
                    <Text style={{fontSize: 10}}>Durasi Sewa</Text>
                    <Text style={{fontSize: 11}}>{item.time}</Text>
                  </View>
                </View>
                <View style={{height:22,width:120, backgroundColor:"#FFA726", borderRadius:50}}>
                  <Text style={{fontSize: 12,color:"white", padding:3, textAlign:"center",alignContent:"center",justifyContent:"center"}}>{item.confirm}</Text>
                </View>
              </View>
            </View>
            </Card.Content>
          </Card>
      </TouchableHighlight>
    )
  }
  render() {
    const extractKey = ({ id }) => id
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