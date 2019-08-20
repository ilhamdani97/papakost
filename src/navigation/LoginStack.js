import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import LoginNav from '../navigation/LoginNav'
import Explore from '../screen/ExplorePage'
import Search from '../screen/explore/SearchPage'
import Detail from '../screen/explore/DetailPage'
import Profile from '../screen/ProfilePage'

const StackLogin = createStackNavigator({
    LoginNav:LoginNav,
    Explore:Explore,
    Search:Search,
    Detail:Detail,
    Profile:Profile
}, {
    initialRouteName: "LoginNav",
    headerMode: 'none'
});

class LoginStack extends Component{
    render() {
        return (
            <LoginStack />
        );
    }
}
export default StackLogin