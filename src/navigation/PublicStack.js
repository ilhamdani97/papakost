import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import PublicNav from '../navigation/PublicNav'
import Explore from '../screen/ExplorePage'
import Wishlist from '../screen/WishlistPage'
import Loginnul from '../screen/LoginPage'
import LoginStack from '../navigation/LoginStack'
import ClassLogin from '../screen/login/Login'
import Register from '../screen/login/Register'
import SearchPage from '../screen/SearchPage'
import Detail from '../screen/DetailPage'
import Filter from '../screen/Filter';
import Login from '../screen/LoginPage'
import Ads from '../screen/ads/Ads'

const SatckPublic = createStackNavigator({
    PublicNav:PublicNav,
    Explore:Explore,
    Wishlist:Wishlist,
    LoginStart:Loginnul,
    LoginStack:LoginStack,
    ClassLogin:ClassLogin,
    Register:Register,
    SearchPage:SearchPage,
    Detail:Detail,
    Filter:Filter,
    Login:Login,
    Ads:Ads

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