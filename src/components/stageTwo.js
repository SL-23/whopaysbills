import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

const StageTwo = () => {
	return (
		<View style={styles.container} >
			<Text>Hello StageTwo</Text>
		</View>
	)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StageTwo;