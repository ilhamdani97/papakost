import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import PublicNav from '../navigation/PublicNav'
import Explore from '../screen/ExplorePage'
import Wishlist from '../screen/WishlistPage'
import Loginnul from '../screen/LoginPage'
import LoginStack from '../navigation/LoginStack'
import ClassLogin from '../screen/login/Login'
import Register from '../screen/login/Register'

const SatckPublic = createStackNavigator({
    PublicNav:PublicNav,
    Explore:Explore,
    Wishlist:Wishlist,
    Login:Loginnul,
    LoginStack:LoginStack,
    ClassLogin:ClassLogin,
    Register:Register
} ,{
    initialRouteName: "PublicNav",
    headerMode: 'none'
});

class PublicStack extends Component {
    render() {
      return (
        <PublicStack />
      );
    }
  }
  export default SatckPublic;