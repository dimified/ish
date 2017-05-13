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
            this.setState({ image: imageUri });
        }, () => {});
    };

    render() {
        console.log(this.state.image);
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