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

import Api from '../api';

interface IProps extends ReactNavigation.NavigationScreenProps<any> { }

interface IState { }

@observer
class SplashContainer extends Component<IProps, IState> {

    componentWillMount() {
        Api.fetchEvents()
    }

    private handleNext() {
        this.props.navigation.navigate('Login');
    }

    render() {
        console.log('reach here');
        return (
            <View style={styles.container}>
                <Button
                  icon={{name: 'home', size: 32}}
                  buttonStyle={{backgroundColor: '#3AC6AA', borderRadius: 10}}
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
      backgroundColor: 'white',
      justifyContent: 'center'
    }
});

export { SplashContainer };