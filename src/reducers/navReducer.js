import {createNavigationReducer} from "react-navigation-redux-helpers";
import AppNavigator from '../navigation/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
