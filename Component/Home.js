import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PageTitle from './PageTitle'
import Map from './Map'

class Home extends React.Component {

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
      };

    render() {
        return (
            <View>
                <PageTitle title={"Home"} />
                <View style={styles.title_container}>
                    <Text style={styles.title}>Find your home all around the world</Text>
                </View>
                <Map/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title_container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})

export default Home