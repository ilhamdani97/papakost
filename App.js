import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import LoginStack from './src/navigation/LoginStack'
import PublicStack from './src/navigation/PublicStack'
import RootStack from './src/navigation/RootStack'

const AppNavigator = createSwitchNavigator({
  LoginStack: LoginStack,
  PublicStack: PublicStack,
  RootStack:RootStack
}, {
    initialRouteName: 'RootStack'
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