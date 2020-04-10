import React from 'react'
import { View, Text } from 'react-native'
import PageTitle from './PageTitle'

class Contacts extends React.Component {
    render() {
        return (
            <View>
                <PageTitle title={"Contacts"}/>
                <Text>Hello</Text>
            </View>
        )
    }
}

export default Contacts