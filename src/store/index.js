import { applyMiddleware, createStore } from 'redux';
import appReducer from '../reducers';
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

const store = createStore(appReducer, applyMiddleware(middleware));

export default store;
