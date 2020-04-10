import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from '../Component/Home'
import Chat from '../Component/Chat'
import Collective from '../Component/Collective'
import Contacts from '../Component/Contacts'
import Profile from '../Component/Profile'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_earth.png')}
                    style={styles.icon}/>
                )
            }
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_chat.png')}
                    style={styles.icon}/>
                )
            }
        }
    },
    Collective: {
        screen: Collective,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_collective_intel2.png')}
                    style={styles.icon}/>
                )
            }
        }
    },
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_contact.png')}
                    style={styles.icon}/>
                )
            }
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_profile.png')}
                    style={styles.icon}/>
                )
            }
        }
    }}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'

    }
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }

})

export default createAppContainer(TabNavigator)