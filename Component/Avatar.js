import React from 'react'
import { StyleSheet, Image } from 'react-native'

class Avatar extends React.Component {
    render() {
        return (
            <Image
                source={require('../Images/ic_profile.png')}
                style={styles.avatar}
            />
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    }
})

export default Avatar