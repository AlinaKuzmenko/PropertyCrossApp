import React from 'react';
// Native components
import { Button } from 'react-native';
// Styles
import styles from './styles';

const Header = ({ navigation: { navigate } }) => {

    return (
        <Button
            style={styles.button}
            title="Go to Favourites"
            onPress={() => navigate('Favourites')}
        >
            Faves
        </Button>
    )
};

export default Header;
