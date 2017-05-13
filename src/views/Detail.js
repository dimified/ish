import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { tags } = this.props.navigation.state.params;
        return (
            <ScrollView>
                <Image
                    source={{ uri: 'http://placehold.it/500x300' }}
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