import React from 'react'
import { View, Text } from 'react-native'
import PageTitle from './PageTitle'

class Chat extends React.Component {
    render() {
        return (
            <View>
                <PageTitle title={"Chat"}/>
                <Text>Hello</Text>
            </View>
        )
    }
}

export default Chat