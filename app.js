import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './Router';

class Bitrise extends React.Component {

  render() {
    return (
        <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('bitrise', () => Bitrise);

export default Bitrise;
