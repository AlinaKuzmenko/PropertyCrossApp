import React from 'react';
// Native components
import { Text, View } from 'react-native';
// Styles
import styles from './styles';

class DetailsScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'Details Screen',
    });

    render() {
        return (
            <View style={styles.details}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

export default DetailsScreen;
