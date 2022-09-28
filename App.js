import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {store} from './app/store/store';
import {Provider, useSelector} from 'react-redux';

import { Tabs } from "./app/navigator/Tabs"

 const App = () => {

    return (
      
        <NavigationContainer>
            <Provider store={store}>
            <Tabs/>
            </Provider>
        </NavigationContainer>
    )
}

export default App
