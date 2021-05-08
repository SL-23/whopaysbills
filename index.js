import { registerRootComponent } from 'expo';
import React from 'react';
import Toast from 'react-native-toast-message';

import { MyProvider } from './src/context'

import App from './App';

const provider = () => (
	<MyProvider>
		<App/>
		<Toast ref={(ref) => Toast.setRef(ref)} />
	</MyProvider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
