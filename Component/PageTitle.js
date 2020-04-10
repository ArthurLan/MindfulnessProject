import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

class PageTitle extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        marginLeft: 10
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    }
})
export default PageTitle