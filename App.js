import React from 'react';
import { Provider } from "react-redux";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import store from "./src/store";

import Home from "./src/screens/home";
import Other from "./src/screens/other";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

const AppNavigator =  createBottomTabNavigator({
	Home: {
		screen: Home
	},
	Other: {
		screen: Other
	}
})