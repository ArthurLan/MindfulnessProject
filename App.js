import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header'
import TabNavigator from './Navigation/Navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/> 
      <TabNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
