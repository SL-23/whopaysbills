import { StatusBar } from 'expo-status-bar';
import React, { Components } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Components {
  render() {
      return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
