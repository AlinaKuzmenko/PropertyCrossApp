import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers';
// reducers
import { listingsReducer } from './reducers';
// Screens
import DetailsScreen from './screens/DetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import ListScreen from './screens/ListScreen';
import SearchScreen from './screens/SearchScreen';
// Components
import ReduxNavigation from './navigation/ReduxNavigation';

const AppNavigator = createStackNavigator(
    {
        Details: DetailsScreen,
        Favourites: FavouritesScreen,
        List: ListScreen,
        Search: SearchScreen,
    },
    {
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9ba',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    listings: listingsReducer,
    nav: navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

export const App = reduxifyNavigator(AppNavigator, 'root');

const store = createStore(appReducer, applyMiddleware(middleware));

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxNavigation />
            </Provider>
        );
    }
}

