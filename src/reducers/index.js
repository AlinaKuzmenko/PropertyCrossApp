import {combineReducers} from 'redux';
// Reducers
import navReducer from './navReducer';
import listingsReducer from './listingsReducer';

export default combineReducers({
    listings: listingsReducer,
    nav: navReducer
});
