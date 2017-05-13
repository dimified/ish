import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './src/views/Home';
import List from './src/views/List';
import Detail from './src/views/Detail';

export default StackNavigator({
    Home: { screen: Home },
    List: { screen: List },
    Detail: { screen: Detail },
});