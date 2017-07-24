// src/index.ts
import * as React from 'react';
import { observer } from 'mobx-react';
import { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewStyle,
    TextStyle
} from 'react-native';

import {
    StackNavigator
} from 'react-navigation';

import { Button } from 'react-native-elements';
import * as ReactNativeElements from 'react-native-elements';
import * as ReactNavigation from 'react-navigation';

import { HeaderContainer } from './HeaderContainer';


interface IProps extends ReactNavigation.NavigationScreenProps<any> { }

interface IState { }

@observer
class SecondContainer extends Component<IProps, IState> {

    static navigationOptions = {
        drawerLabel: 'SecondContainer',
        // other configurations
    };

    render() {

        const Header = (ReactNativeElements as any).Header;
        const Icon = (ReactNativeElements as any).Icon;

        return (
            <View>
                <HeaderContainer navigation={this.props.navigation} title='Second' />
            </View>
        );
    }
}

export { SecondContainer };