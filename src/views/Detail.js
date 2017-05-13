import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    render() {
        return (
            <View style={ styles.container }>
                <Image
                    source={{ uri: 'http://placehold.it/500x300' }}
                    style={ styles.image }
                />
                <Text style={ styles.headline }>Headline</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"
    },
    image: {
        flex: 1,
        width: null,
        height: null
    },
    headline: {
        flex: 1,
        fontSize: 30
    }
});