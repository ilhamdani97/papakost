import React,{Component} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginNav from './src/navigation/LoginNav'
import PublicNav from './src/navigation/PublicNav'
import LoginStack from './src/navigation/LoginStack'
import PublicStack from './src/navigation/PublicStack'
import CheckStack from './src/navigation/CheckSatck'
import Explore from './src/screen/ExplorePage'

const AppNavigator = createSwitchNavigator({
  LoginStack:LoginStack,
  PublicStack: PublicStack,
  CheckStack: CheckStack
}, {
  initialRouteName: 'CheckStack'
})
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App;