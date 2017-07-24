// src/index.ts
import * as React from 'react';
import { Component } from 'react';

import {
    StackNavigator
} from 'react-navigation';

import { Button } from 'react-native-elements';
import * as ReactNativeElements from 'react-native-elements';
import * as ReactNavigation from 'react-navigation';



interface IProps extends ReactNavigation.NavigationScreenProps<any> {
    title: string;
}

interface IState { }

class HeaderContainer extends Component<IProps, IState> {

    private handleMenuPress() {

        this.props.navigation.navigate('DrawerOpen');
    }

    private handleHomePress() {

        this.props.navigation.navigate('Home');
    }

    render() {

        const Header = (ReactNativeElements as any).Header;
        const Icon = (ReactNativeElements as any).Icon;

        const { title } = this.props;

        return (
            <Header backgroundColor='#1976d2' style = {{marginBottom: 5}}
                leftComponent={<Icon name='menu' color='#fff' onPress={() => this.handleMenuPress()} />}
                centerComponent={{ text: title, style: { color: '#fff' } }}
                rightComponent={<Icon name='home' color='#ffff'  onPress={() => this.handleHomePress()} />}
            />
        );
    }
}

export { HeaderContainer };