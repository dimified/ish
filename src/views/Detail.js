import React, { Component } from 'react';
import { Linking, Button, ScrollView, Text, Image, StyleSheet, View } from 'react-native';

export default class Detail extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    handleClick = (tags) => {
        const url = `https://amazon.com/s/?field-keywords=mustang+shoe`;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    };

    render() {
        const { item } = this.props.navigation.state.params;
        const { product } = item;
        return (
            <ScrollView>
                <Text style={ styles.headline }>
                    We have found the right product for the cheapest price for you!
                </Text>
                <Image
                    source={{ uri: product.images[0].url }}
                    style={ styles.image }
                />
                <View style={ styles.wrapper }>
                    <Text style={ styles.name }>{ product.name }</Text>
                    {
                        Array.isArray(item.tags) ?
                            <View style={ styles.tags }>
                                { item.tags.map(tag => <Text style={ styles.tag } key={ tag }>{ tag }</Text>) }
                            </View> : null
                    }
                    <Text style={ styles.desc }>{ product.desc }</Text>
                    <Button
                        title={ `Buy it at ${product.shop.name} for ${product.price} €` }
                        onPress={ () => { this.handleClick(item.tags) }  }
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10
    },
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
    name: {
        marginBottom: 10,
        fontSize: 30
    },
    desc: {
        marginTop: 10,
        marginBottom: 30
    },
    wrapper: {
        marginLeft: 20,
        marginRight: 20
    }
});