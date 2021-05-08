import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyContext } from './src/context';
import StageOne from './src/components/stageOne';
import StageTwo from './src/components/stageTwo';

class App extends Component {
  static contextType = MyContext;

  render () {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {
            this.context.state.stage === 1 ?
              <StageOne/>
            :
              <StageTwo/>
          }
        </View>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40
  },
});

export default App;
