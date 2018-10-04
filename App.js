import React from 'react';
import { Provider } from "react-redux";
import { Text, View } from 'react-native';
import store from "./src/store";

import Home from "./src/screens/home";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}
