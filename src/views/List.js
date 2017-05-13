import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Detail'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>List</Text>
                <Button
                    onPress={() => navigate('Detail', { tags: ['t', 'a', 'g', 's']})}
                    title="Detail"
                />
            </View>
        );
    }
}