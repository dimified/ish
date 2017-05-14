import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import Item from '../components/Item';

export default class List extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const { state } = this.props.navigation;
        this.state = {
            dataSource: ds.cloneWithRows(state.params.items)
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <ListView
                    enableEmptySections
                    dataSource={ this.state.dataSource }
                    renderRow={item =>
                        item.product ? <Item
                            item={ item }
                            onPress={ () => navigate('Detail', { item }) }
                        /> : null
                    }
                />
            </ScrollView>
        );
    }
}