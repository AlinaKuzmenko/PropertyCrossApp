import {createStackNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import DetailsScreen from '../screens/DetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import ListScreen from '../screens/ListScreen';
import SearchScreen from '../screens/SearchScreen';

const AppNavigator = createStackNavigator(
    {
        Details: DetailsScreen,
        Favourites: FavouritesScreen,
        List: ListScreen,
        Search: SearchScreen,
    },
    {
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9ba',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default AppNavigator;
