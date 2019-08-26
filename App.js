import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Provider, connect } from 'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { Dormstore } from './src/redux/dormStore'

import LoginStack from './src/navigation/LoginStack'
import PublicStack from './src/navigation/PublicStack'
import RootStack from './src/navigation/RootStack'

const AppNavigator = createSwitchNavigator({
  LoginStack: LoginStack,
  PublicStack: PublicStack,
  RootStack: RootStack
}, {
    initialRouteName: 'RootStack'
  })
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={Dormstore}>
        <AppContainer />
        </Provider> 
    )
  }
}

export default App;