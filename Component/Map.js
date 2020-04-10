import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class Map extends React.Component {

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    render() {
        return (
            <View>
                <MapView
                    style={{ alignSelf: 'stretch', height: 300 }}
                    onRegionChange={this._handleMapRegionChange}
                    initialRegion={{
                        latitude: 16.6283284,
                        longitude: 102.773609,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 16.6283284,
                            longitude: 102.773609,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        title={'Mindfulness Project Thailand'}
                    //   description={marker.description}
                    />
                </MapView>
            </View>
        )
    }
}

export default Map