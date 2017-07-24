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


interface IProps extends ReactNavigation.NavigationScreenProps<any> { }

interface IState { }

@observer
class LoginContainer extends Component<IProps, IState> {

    private handleNext() {

        this.props.navigation.navigate('Auth');
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Something something login</Text>
                <Button

                    icon={{name: 'settings', size: 32}}
                    buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Auth`}
                    onPress={ () => this.handleNext() }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { LoginContainer };