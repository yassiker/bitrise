// src/index.ts
import * as React from 'react';
import { Component } from 'react';

import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

import { HomeContainer } from './container/HomeContainer';
import { SecondContainer } from './container/SecondContainer';
import { DrawerMenuComponent } from './container/DrawerMenuComponent';
import { SplashContainer } from './container/SplashContainer';
import { LoginContainer } from './container/LoginContainer';

import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';


interface IProps { }
interface IState { }

const Auth = DrawerNavigator(
    {
        Home: {
            path: '/home',
            screen: HomeContainer
        },
        Second: {
            path: '/second',
            screen: SecondContainer
        }
    },
    {
        initialRouteName: 'Home',
        drawerWidth: SCREEN_WIDTH * 0.8,
        drawerPosition: 'left',
        contentComponent: DrawerMenuComponent
    }
);

const App = StackNavigator(
    {
        Splash: {
            path: '/splash',
            screen: SplashContainer
        },
        Login: {
            path: '/login',
            screen: LoginContainer
        },
        Auth: {
            path: '/auth',
            screen: Auth
        }
    },
    {
        headerMode: 'none',
        mode: 'modal'
    }
);

export { App };
