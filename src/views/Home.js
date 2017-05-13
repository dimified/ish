import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const items = Array(5).fill(
    {
        headline: 'Item',
        tags: ['t', 'a', 'g', 's'],
        image: 'http://placehold.it/500x300'
    }
);

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
                    onPress={() => navigate('List', { items })}
                    title="LIST"
                />
            </View>
        );
    }
}