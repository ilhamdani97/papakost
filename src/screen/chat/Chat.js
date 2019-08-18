import React, { Component } from 'react';
import { FlatList, Text, StyleSheet,TouchableHighlight} from 'react-native';
import { Provider as PaperProvider,Card,Title,Paragraph,IconButton, Colors} from 'react-native-paper';
import { View } from 'native-base';
import { Icon } from 'react-native-elements'
const rows = [
  { id: 0, icon:"account-circle", title: 'Cs Mamikos', massage:'Ilham Create Group kosss',time:'20:16' },
  { id: 1, icon:"account-circle", title: 'Cs Papa Kos', massage:'Papa Create Group koss',time:'20:20' },
  { id: 2, icon:"account-circle", title: 'Cs Ibu Kos', massage:'Ibu Create Group',time:'20:19' },
  { id: 3, icon:"account-circle", title: 'Cs Oom Kos', massage:'Oom Create Group',time:'20:16' },
  { id: 4, icon:"account-circle", title: 'Cs Mamikos', massage:'Ilham Create Group',time:'20:16' },
]

const extractKey = ({ id }) => id
 class PageChat extends Component {

  renderItem = ({ item }) => {
    return (
        <TouchableHighlight underlayColor="white">
          <Card style={styles.card}>
            <Card.Content >
            <View style={{flex: 1, flexDirection: 'row',marginBottom:4}}>
              <View style={{width: 70, height: 60, }}>
              <Icon
                reverse
                name='ios-person'
                type='ionicon'
                color='#FF9800'
              />
              </View>
              <View style={{width: 180, height: 60,marginLeft:4,marginTop:6}}>
                <Text style={{fontSize: 16, marginBottom:4}}>{item.title}</Text>
                <Text style={{fontSize: 12,}}>{item.massage}</Text>
              </View>
              <View style={{width: 70, height: 60,marginTop:6}}>
              <Text style={{fontSize: 12, marginBottom:4}}>{item.time}</Text>
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
    padding:20
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


export default PageChat;