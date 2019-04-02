import React from 'react';
import { Provider } from 'react-redux';
// reducers
import store from './store';
// Components
import ReduxNavigation from './navigation/ReduxNavigation';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxNavigation />
            </Provider>
        );
    }
}

