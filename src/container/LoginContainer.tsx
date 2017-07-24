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
import { Button, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import * as ReactNativeElements from 'react-native-elements';
import * as ReactNavigation from 'react-navigation';

import { HeaderContainer } from './HeaderContainer';
import { FormView } from './FormView';

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
            <FormLabel>Email/Username</FormLabel>
            <FormInput placeholder='email'/>

            <FormLabel>Password</FormLabel>
            <FormInput placeholder='password'/>

            <Button
              icon={{name: 'settings', size: 32}}
              buttonStyle={{backgroundColor: '#3AC6AA', borderRadius: 10, margin: 10}}
              textStyle={{textAlign: 'center'}}
              title={`Auth`}
              onPress={ () => this.handleNext() }
            />
          </View>
        );
    }
}

// <FormView dateTaker={false} />

const styles = StyleSheet.create({
    container: {
        flex:      1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});

export { LoginContainer };