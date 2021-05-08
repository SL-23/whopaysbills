import React, { Component } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
const MyContext = React.createContext();

class MyProvider extends Component {
	state = {
		stage: 1,
		players: [],
		result: ''
	}

	addPlayerHandler = (name) => {
		this.setState((prevState) => ({
			players: [
				...prevState.players,
				name
			]
		}))

	}

	removePlayerHandler = (idx) => {
		let newArr = this.state.players;
		newArr.splice(idx,1);
		this.setState(() => ({
			players: newArr
		}))
	}

	NextHandler = () => {
		const { players } = this.state;

		if(players.length < 2) {
			Toast.show({
				type: 'error',
				position: 'top',
				text1: 'sorry',
				text2: 'you need at least 2 players'
			})
		} else {
			this.setState({
				stage: 2
			}, () => {
				this.generateLooser()
			})
		}
	}

	generateLooser = () => {
		const { players } = this.state;
		this.setState({
			result: players[Math.floor(Math.random() * players.length)]
		})
	}

	resetGameHandler = () => {
		this.setState({
			stage: 1,
			players: [],
			result: ''
		})
	}

	render() {
		return (
			<>
				<MyContext.Provider value={{
					state: this.state,
					addPlayer: this.addPlayerHandler,
					removePlayer: this.removePlayerHandler,
					next: this.NextHandler,
					getNewLooser: this.generateLooser,
					resetGame: this.resetGameHandler
				}}>
					{this.props.children}
				</MyContext.Provider>
			</>

		)
	}
}

export {
	MyProvider,
	MyContext }