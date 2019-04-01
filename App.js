import React from 'react';
import { createAppContainer } from 'react-navigation';
// Components
import Navigator from './src/navigation/Navigator';

const AppContainer = createAppContainer(Navigator);

class App extends React.Component {
    render() {
        return <AppContainer { ...this.props } />;
    };
}

export default App;
