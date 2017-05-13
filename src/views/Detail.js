import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Detail'
    };
    render() {
        return (
            <View>
                <Text>Detail view</Text>
            </View>
        );
    }
}