// src/index.ts
import * as React from 'react';
import { observer } from 'mobx-react';
import { Component } from 'react';
import {
    StyleSheet,
    Image,
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

import Images from '../Images';

interface IProps extends ReactNavigation.NavigationScreenProps<any> { }

interface IState { }

@observer
class SplashContainer extends Component<IProps, IState> {

    private handleNext() {

        this.props.navigation.navigate('Login');
    }

    render() {

        return (
            <View>
                <Image source={ Images.cats } />
                <Button

                    icon={{name: 'home', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Login`}
                    onPress={ () => this.handleNext() }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingVertical: '10'
    }
});

export { SplashContainer };