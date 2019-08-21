import React, {Component} from 'react';
import { Paragraph,IconButton, Colors,Button } from 'react-native-paper';
import {StyleSheet,TouchableHighlight,View,Image,StatusBar} from 'react-native';
import { Icon } from 'react-native-elements'
class ItemUser extends Component {
  static navigationOptions = {
    title: 'Item And Service',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#FF9800'
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View>
      <StatusBar backgroundColor='#FF9800' barStyle='light-content' />
      <View style={styles.coloumn}>
        <View style={styles.colloumStyle}>
           <Paragraph style={styles.paddingView}>List Ads :</Paragraph>
        </View>
        <View >
        <Button style={styles.button} color="#FF9800" mode="contained" onPress={() => this.props.navigation.navigate('Ads')}>
           Ads
        </Button>
        </View>
      </View>
      <View style = {styles.lineStyle} />
      <View style={styles.container}>
        <Icon
          name='important-devices'
          size={150}
          color="#FF9800"
        />
        <Paragraph style={styles.padding}>You Don't Have Any Ads</Paragraph>
    </View>
    </View>
    
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flexGrow: 1,
      padding: 20,
      marginTop:60,
      alignContent: 'center',
      justifyContent:'center'
  },
  padding:{
    padding:8,
    marginTop:20,
    textAlign:'center'
  },
  paddingView:{
    padding:8,
    marginTop:16,
    marginBottom:16,
    alignContent:'flex-start'

  },
  button:{
    borderRadius:20,
    textAlign:'center',
    marginTop:12,
    marginRight:6,
    textDecorationColor:"#FF9800"

  },
  image:{
    
    height:180,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#546E7A',
  },
  coloumn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colloumStyle:{
    height: 60, 
    width: 100,
    justifyContent: 'space-between'
  },
})

export default ItemUser ;