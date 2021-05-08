import React, { useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MyContext } from '../context';
import { Input, Button, ListItem } from 'react-native-elements';



const StageTwo = () => {

	const context = useContext(MyContext);

	return (
		<View style={styles.container} >
			<Text style={{marginTop: 20, fontSize: 30}}>The looser is</Text>
			<Text style={{marginTop: 20, fontSize: 30}}>{context.state.result}</Text>
			<Button
				title='Try again'
				onPress={() => context.getNewLooser()}
				buttonStyle={styles.button}
			/>
			<Button
				title='Start over'
				onPress={() => context.resetGame()}
				buttonStyle={styles.button}
			/>
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
  button: {
    backgroundColor: '#DB3EB1',
    marginTop: 20,
  },
});

export default StageTwo;