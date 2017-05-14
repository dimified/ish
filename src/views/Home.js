/* global fetch, FormData, Promise */
import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Button,
    ImagePickerIOS,
    Image,
    StyleSheet
} from 'react-native';

function timeout(ms, promise) {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            rej(new Error('timeout'));
        }, ms);
        promise.then(res, rej);
    })
}

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor() {
        super();
        this.state = {
            image: null,
            loading: false,
            error: false,
            items: Array(5).fill({
                tags: ['t', 'a', 'g', 's'],
                image: 'http://placehold.it/500x300',
                product: {
                    name: 'Item',
                    images: [{
                        url: 'http://placehold.it/500x300'
                    }],
                    shop: {
                        name: 'Amazon',
                        logo: 'http://placehold.it/500x300'
                    },
                    price: 34.95,
                    desc: 'Description'
                }
            })
        };
    }

    componentDidMount() {
        this.getList();
    }

    pickImage = () => {
        // openSelectDialog(config, successCallback, errorCallback);
        ImagePickerIOS.openSelectDialog({}, imageUri => {

            // Show the image
            this.setState({
                error: false,
                image: imageUri
            });
        }, () => {});
    };

    getList = () => {
        fetch('http://10.100.126.147:3000/ish').then(res => res.json()).then(json => {

            // Mapping items
            const items = json.map(item => {
                return {
                    image: item.image,
                    tags: item.tags || [],
                    product: item.product
                };
            });

            this.setState({
                error: false,
                loading: false,
                items
            });
        }).catch(err => {

            this.setState({
                error: true,
                loading: false
            });

            // Error
            console.log(err);
        });
    };

    sendImage = (imageUri) => {

        this.setState({
            error: false,
            loading: true
        });

        const body = new FormData();
        body.append('photo', {
            uri: imageUri,
            type: 'image/jpeg',
            name: `${Date.now()}.jpg`
        });

        fetch('http://10.100.126.147:3000/photoish', {
            method: 'POST',
            headers: {
                'Content-Type': 'image/jpeg',
            },
            body
        }).then(res => res.json()).then(json => {

            // Mapping items
            const items = json.map(item => {
                return {
                    image: item.image,
                    tags: item.tags || [],
                    product: item.product
                };
            });

            this.setState({
                error: false,
                loading: false,
                items
            });
        }).catch(err => {

            this.setState({
                error: true,
                loading: false
            });

            // Error
            console.log(err);
        });
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Text style={ styles.headline }>Your friends make your wishes come true</Text>
                <View style={ styles.wrapper }>
                    <Text style={ styles.text }>Have wishes already?</Text>
                    <Button
                        onPress={() => navigate('List', { items: this.state.items })}
                        title="SEE WISHLIST"
                    />
                </View>
                {
                    this.state.image ?
                        <View>
                            <Image
                                style={{ height: 300 }}
                                source={{ uri: this.state.image }}
                            />
                            {
                                this.state.loading ?
                                    <Text style={ styles.loading }>Your wish is my command...</Text> :
                                    <Button
                                        onPress={ () => this.sendImage(this.state.image) }
                                        title="TAKE IT"
                                    />
                            }
                            {
                                this.state.error ?
                                    <View style={ styles.wrapper }>
                                        <Text style={ styles.text }>Your wish seems too hard. Please try another one.</Text>
                                    </View> : null
                            }
                            <Button
                                onPress={ this.pickImage }
                                title="MAKE ANOTHER WISH"
                            />
                        </View> :
                        <View style={ styles.wrapper }>
                            <Text style={ styles.text }>
                                Make a photo, upload it and we will tell your friends where to buy it.
                            </Text>
                            <Button
                                onPress={ this.pickImage }
                                title="MAKE A WISH"
                            />
                        </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    headline: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    loading: {
        marginTop: 10,
        textAlign: 'center'
    },
    wrapper: {
        marginBottom: 20
    }
});