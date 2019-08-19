import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import ExplorePage from '../ExplorePage'
import SearchPage from '../SearchPage'
import DetailPage from '../DetailPage'
import WishlistPage from '../WishlistPage'
import Loginnull from '../Loginnull'
import Login from '../Login'
import Register from '../Register'
import Profile from '../profile/Profile'
import Market from '../profile/Market';
import Complain from '../profile/Complain';
import BookingList from '../booking/BookingList'
import ItemUser from '../profile/ItemUser'
import Ads from '../ads/Ads'
import Verifikasi from '../profile/Verifikasi'
import Setting from '../profile/Setting'
import Contract from '../profile/Contract'
import Navigation from '../../screen/Navigation'
import BookingDate from '../booking/BookingDate'
import Booking from '../booking/Booking'
import BookingDetail from '../booking/BookingDetail'
import BookingItem from '../booking/BookingItem'
import BookingSucces from '../booking/BookingSucces'
import BookingDuration from '../booking/BookingDuration'
import Filter from '../Filter';

const AppNavigator = createStackNavigator({
    ExplorePage: {
        screen: ExplorePage
    }, SearchPage: {
        screen: SearchPage
    }, DetailPage: {
        screen: DetailPage
    }, WishlistPage: {
        screen: WishlistPage
    }, LoginPage: {
        screen: Loginnull
    }, Login: {
        screen: Login
    }, Register: {
        screen: Register
    }, Profile: {
        screen: Profile
    }, Market:{
        screen: Market
    }, Complain:{
        screen: Complain
    }, HistoryBooking :{
        screen:BookingList
    }, ItemUser:{
        screen:ItemUser
    }, Ads:{
        screen:Ads
    }, Verifikasi:{
        screen:Verifikasi
    }, Setting:{
        screen:Setting
    }, Contract:{
        screen:Contract
    }, BookingDate: {
        screen: BookingDate
    }, Booking: {
        screen: Booking
    }, BookingDetail: {
        screen: BookingDetail
    }, BookingDuration : {
        screen: BookingDuration
    }, BookingItem : {
        screen: BookingItem
    }, BookingList : {
        screen: BookingList
    }, BookingSucces : {
        screen: BookingSucces
    }, Filter:{
        screen:Filter
    }
}, {
        initialRouteName: 'ExplorePage',
    });
 
const AppNavigatorr = createAppContainer(AppNavigator);
 
export default class Routes extends Component {
    render() {
        return (
            <AppNavigatorr />

        );
    }
}