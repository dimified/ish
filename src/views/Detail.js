import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';

export default class Detail extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    render() {
        const { tags, image } = this.props.navigation.state.params.item;
        return (
            <ScrollView>
                <Image
                    source={{ uri: image }}
                    style={ styles.image }
                />
                <Text style={ styles.headline }>Headline</Text>
                <View style={ styles.tags }>
                    { tags.map(tag => <Text style={ styles.tag } key={ tag }>tag</Text>) }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300
    },
    tags: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    tag: {
        marginLeft: 10,
        marginRight: 10
    },
    headline: {
        marginBottom: 10,
        fontSize: 30
    }
});