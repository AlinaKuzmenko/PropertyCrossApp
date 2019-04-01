import React from 'react';
// Native components
import { Text, View } from 'react-native';
// Styles
import styles from './styles';

class ListScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'List Screen',
    });

    render() {
        return (
            <View style={styles.list}>
                <Text>List Screen</Text>
            </View>
        );
    }
}

export default ListScreen;
