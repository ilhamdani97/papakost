import React, {Component} from 'react';
import {BottomNavigation, Provider,DefaultTheme, Colors} from 'react-native-paper';

import WishlistPage from './src/screen/WishlistPage';
import ChatPage from './src/screen/ChatPage';
import Loginnull from './src/screen/Loginnull';
import routes from './src/screen/lib/Routes';
import Profile from './src/screen/profile/Profile';


export default class app extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'explore', title: 'Explore', icon: 'search'},
      { key: 'wishlist', title: 'Wish List', icon: 'favorite-border'},
      { key: 'chat', title: 'Chat', icon: 'chat-bubble-outline'},
      { key: 'login', title: 'Login', icon: 'face' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    explore: routes,
    wishlist: WishlistPage,
    chat: ChatPage,
    login: Profile
  });

  render() {
    return (
      <Provider theme={theme}>
        <BottomNavigation
          shifting={false}
          activeColor="#FF9800"
          inactiveColor='silver'
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </Provider>
      
    );
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.White,
    accent: '#FF9800',
  }
};