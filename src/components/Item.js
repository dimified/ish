import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';

export default class Item extends Component {
    render() {
        const { item, onPress } = this.props;
        return (
            <TouchableHighlight
                onPress={ onPress }
                style={ styles.item }
            >
                <View style={ styles.wrapper }>
                    <Image style={ styles.image} source={{ uri: item.image }} />
                    <Text>{ item.product.name }</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
});