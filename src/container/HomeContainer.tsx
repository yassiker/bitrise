// src/index.ts
import * as React from 'react'
import { observer } from 'mobx-react'
import { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ViewStyle,
    TextStyle
} from 'react-native'

import {
    StackNavigator
} from 'react-navigation'

import { Button } from 'react-native-elements'
import * as ReactNativeElements from 'react-native-elements'
import * as ReactNavigation from 'react-navigation'

import { HeaderContainer } from './HeaderContainer'
import Images from '../Images'

interface IProps extends ReactNavigation.NavigationScreenProps<any> { }

interface IState { }

interface RoomInterface {
  name: string
  avatar_url: string
}[]

@observer
class HomeContainer extends Component<IProps, IState> {

    static navigationOptions = {
        drawerLabel: 'HomeContainer',
        // other configurations
    };

    _handlePressButton = () => {
      this.props.navigation.navigate('RoomReserver');
    }

    render() {
      const listofRooms = [
        {
          name: 'Room 1',
          avatar_url: Images.room1,
        },
        {
          name: 'Room 2',
          avatar_url: Images.room2,
        },
        ];
        const Header = (ReactNativeElements as any).Header;
        const Icon = (ReactNativeElements as any).Icon;

        return (
          <View>
            <HeaderContainer navigation={this.props.navigation} title='Home' />
            <ReactNativeElements.List containerStyle={{top: 50}}>
            {
              listofRooms.map((l: any, i: number) => (
                <ReactNativeElements.ListItem
                  roundAvatar
                  avatar={l.avatar_url}
                  key={i}
                  title={l.name}
                  onPress = {() => this._handlePressButton()}
                />
              ))
            }
            </ReactNativeElements.List>
          </View>
        );
    }
}

export {  HomeContainer };