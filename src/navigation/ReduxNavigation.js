import React from 'react';
import { BackHandler } from 'react-native';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import AppNavigator from './AppNavigator';

const App = createReduxContainer(AppNavigator);

class ReduxNavigation extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        const { nav, dispatch } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { nav, dispatch } = this.props;

        return <App state={nav} dispatch={dispatch} />;
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(ReduxNavigation);