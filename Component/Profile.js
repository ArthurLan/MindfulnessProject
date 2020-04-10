import React from 'react'
import { View, Text } from 'react-native'
import PageTitle from './PageTitle'
import Avatar from './Avatar'

class Profile extends React.Component {
    render() {
        return (
            <View>
                <PageTitle title={"Profile"}/>
                <Avatar/>
                <Text>Hello</Text>
            </View>
        )
    }
}

export default Profile