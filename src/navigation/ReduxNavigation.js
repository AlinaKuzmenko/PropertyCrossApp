import React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Root from '../Root';

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

        return <Root state={nav} dispatch={dispatch} />;
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(ReduxNavigation);
