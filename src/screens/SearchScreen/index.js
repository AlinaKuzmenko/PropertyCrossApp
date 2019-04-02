import React from 'react';
// Native components
import { Button, Text, TextInput, View } from 'react-native';
// import getListings from '../';
//Components
import Header from '../../components/Header';
import List from '../../components/List';
// Styles
import styles from './styles';

class SearchScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Search Screen',
        headerTitle: <Header navigation={navigation}/>
    });

    state = {
        query: '',
    };

    getListings = () => {
        // getListings(this.state.query);
    };

    render() {
        return (
            <View style={styles.search}>
                <Text>
                    Use the form below to search for houses to buy.
                    Use the form below to search for houses to buy.
                    Use the form below to search for houses to buy.
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(query) => this.setState({ query })}
                    value={this.state.query}
                    placeholder="Search ..."
                    placeholderTextColor="#999"
                />
                <Button
                    onPress={this.getListings}
                    title="Go"
                    color="red"
                    accessibilityLabel="Get listings"
                />
                {/*<List />*/}
            </View>
        );
    };
}

export default SearchScreen;
