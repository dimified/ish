import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Welcome to our awesome app!</Text>
                <Button
                    onPress={() => navigate('List')}
                    title="LIST"
                />
            </View>
        );
    }
}