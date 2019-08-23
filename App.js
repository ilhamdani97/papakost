import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

import LoginStack from './src/navigation/LoginStack'
import PublicStack from './src/navigation/PublicStack'
import CheckStack from './src/navigation/CheckStack'

const AppNavigator = createSwitchNavigator({
  LoginStack: LoginStack,
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