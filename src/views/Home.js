/* global fetch, FormData */
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ImagePickerIOS,
    Image
} from 'react-native';

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

    constructor() {
        super();
        this.state = {
            image: null
        };
    }

    pickImage = () => {
        // openSelectDialog(config, successCallback, errorCallback);
        ImagePickerIOS.openSelectDialog({}, imageUri => {

            // Show the image on the view
            this.setState({ image: imageUri });

            // Send image to image-ish service (API)
            // this.sendImage(imageUri);
        }, () => {});
    };

    sendImage = (imageUri) => {
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
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
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
                <Button
                    onPress={ this.pickImage }
                    title="Select image"
                />
                <Button
                    onPress={ () => this.sendImage(this.state.image) }
                    title="Upload image"
                />

                {
                    this.state.image ?
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: this.state.image }}
                        /> : null
                }
            </View>
        );
    }
}