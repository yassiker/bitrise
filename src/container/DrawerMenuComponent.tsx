// src/index.ts
import * as React from 'react';
import { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewStyle,
    TextStyle
} from 'react-native';

import { Button } from 'react-native-elements';

import * as ReactNavigation from 'react-navigation';

interface IProps extends ReactNavigation.NavigationScreenProps<any> { }
interface IState { }

export class DrawerMenuComponent extends Component<IProps, IState> {

  private handleLogout() {

      this.props.navigation.navigate('Login');
  }

  render() {

    const DrawerItems = (ReactNavigation as any).DrawerItems;

    return (
      <View style={styles.container}>
        <View>
          <DrawerItems { ...this.props }
              activeTintColor='#2196f3'
              activeBackgroundColor='rgba(0, 0, 0, .04)'
              inactiveTintColor='rgba(0, 0, 0, .87)'
              inactiveBackgroundColor='transparent'
              labelStyle={{ color: '#ffffff' }}/>
        </View>
        <View>
          <Button
            backgroundColor='#63a4ff'
            title='Logout'
            icon={ {name: 'sign-out', type: 'font-awesome'} }
            onPress={ () => this.handleLogout() }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004ba0'
    }
});
