import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Explore from '../screen/ExplorePage'
import Wishlist from '../screen/WishlistPage'
import Chat from '../screen/ChatPage'
import Profile from '../screen/ProfilePage'
import { Card, Icon } from "react-native-elements";

const LoginNav = createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color={tintColor} size={25} />
            )
        }
    },
    Wishlist: {
        screen: Wishlist,
        navigationOptions: {
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="favorite" color={tintColor} size={25} />
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="chat" color={tintColor} size={25} />
            )
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="face" color={tintColor} size={25} />
            )
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: '#FF9800',
            inactiveTintColor: '#FFA726',
            style: {
                backgroundColor: '#ffffff',
                borderTopWidth: 0,
                shadowOffset: { width: 6, height: 6 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 6,
                paddingTop: 10
            }
        }
    });
export default createAppContainer(LoginNav)