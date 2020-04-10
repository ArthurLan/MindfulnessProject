import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Mindfulness Project</Text>
                <Text style={styles.sub_title}>Community</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      height: 60,
      borderColor: '#BBBBBB',
      borderWidth: 0.5,
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.27,
        shadowRadius: 7.49,
        elevation: 12
    },
    title: {
        color: '#1F618D',
        fontSize: 30,
        fontWeight: 'bold'
    },
    sub_title: {
        color: '#1F618D',
        fontSize: 10,
        fontStyle: 'italic'
        // fontWeight: 'bold'
    }
  });

export default Header