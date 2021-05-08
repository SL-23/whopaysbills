import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, ListItem, Text } from 'react-native-elements';
import { MyContext } from '../context'
const StageOne = () => {
	const context = useContext(MyContext);

	const renderPlayers = () => (
		context.state.players.map((item, idx) => (
			<ListItem
				key={idx}
				bottomDivider
				style={{ width: '100%' }}
				onLongPress={ () => context.removePlayer(idx) } 
			>
				<ListItem.Chevron> </ListItem.Chevron>
				<ListItem.Content>
					<ListItem.Title>
						<Text>{item}</Text>
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>
		))
	)

	return (
		<>
			<Formik
				initialValues={{player:''}}
				validationSchema={Yup.object({
					player: Yup.string()
					.min(3, 'Must be more than 3 characters')
					.max(30, 'Must be less than 30 characters')
					.required('Name is required')
				})}
				onSubmit={ (values, { resetForm }) => {
					context.addPlayer(values.player);
					resetForm();
				}}
			>
				{( {handleChange, handleBlur, handleSubmit, values, touched, errors} ) => (
					<>
						<Text>Who pays the bills</Text>
						<Input 
							placeholder='enter name'
							leftIcon={{type: 'antdesign', name:'adduser'}}
							inputContainerStyle={{
								marginHorizontal: 50,
								marginTop: 50
							}}

							renderErrorMessage={errors.player && touched.player}
							
							errorMessage={errors.player}
							errorStyle={{
								marginHorizontal: 50
							}}

							onChangeText={handleChange('player')}
							onBlur={handleBlur('player')}
							value={values.player}
						/>
						<Button 
							buttonStyle={styles.button}
							title='Add player'
							onPress={() => handleSubmit('player')}
						/>
					</>
				)}

				
			</Formik>
			<View style={{padding: 20, width: '100%'}}>
			{
				context.state.players && context.state.players.length > 0 ?
				<>
					<Text>List of players</Text>
					{ renderPlayers() }
					<Button 
						buttonStyle={styles.button}
						title='Get the looser'
						onPress={() => context.next()}
					/>
				</>
				:
				null
			}
			</View>
		</>
	)
}



const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3EB1',
    marginTop: 20,
  },
});

export default StageOne;