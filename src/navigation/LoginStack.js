import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import LoginNav from './LoginNav'
import Explore from '../screen/ExplorePage'
import Search from '../screen/explore/SearchPage'
import Detail from '../screen/explore/DetailPage'
import Profile from '../screen/ProfilePage'
import BookingDate from '../screen/booking/BookingDate'
import Booking from '../screen/booking/Booking'
import BookingDetail from '../screen/booking/BookingDetail'
import BookingItem from '../screen/booking/BookingItem'
import BookingSucces from '../screen/booking/BookingSucces'
import BookingDuration from '../screen/booking/BookingDuration'
import BookingList from '../screen/booking/BookingList'
import Complain from '../screen/profile/Complain'
import Contract from '../screen/profile/Contract'
import ItemUser from '../screen/profile/ItemUser'
import Market from '../screen/profile/Market'
import Setting from '../screen/profile/Setting'
import Verification from '../screen/profile/Verifikasi'
import Ads from '../screen/ads/Ads'

const StackLogin = createStackNavigator({
    LoginNav: LoginNav,
    Explore: Explore,
    Search: Search,
    Detail: Detail,
    Profile: Profile,
    BookingDate: BookingDate,
    Booking: Booking,
    BookingDetail: BookingDetail,
    BookingItem: BookingItem,
    BookingSucces: BookingSucces,
    BookingDuration: BookingDuration,
    BookingList: BookingList,
    Complain: Complain,
    Contract: Contract,
    ItemUser: ItemUser,
    Market: Market,
    Setting: Setting,
    Verification: Verification,
    Ads: Ads,

}, {
        initialRouteName: "LoginNav",
        headerMode: 'none'
    });

class LoginStack extends Component {
    render() {
        return (
            <LoginStack />
        );
    }
}
export default StackLogin