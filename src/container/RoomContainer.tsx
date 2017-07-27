import React, { Component } from 'react';
import {
  View,
  Text
}from 'react-native'

import { Button } from 'react-native-elements'
import * as ReactNativeElements from 'react-native-elements'
import * as ReactNavigation from 'react-navigation'

import { HeaderContainer } from './HeaderContainer'
import Images from '../Images'

interface IProps extends ReactNavigation.NavigationScreenProps<any> { }

interface IState {

}

export default class RoomContainer extends Component<IProps, IState> {

    static navigationOptions = {
        drawerLabel: 'HomeContainer',
        // other configurations
    };

    render() {
      return(
        <View>
          <HeaderContainer navigation={this.props.navigation} title='Room' />
        </View>
      )
    }
}
