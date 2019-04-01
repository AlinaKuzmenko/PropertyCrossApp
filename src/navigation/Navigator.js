import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// Screens
import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Navigator = createStackNavigator(
    {
        Search: { screen: SearchScreen },
        List: { screen: ListScreen },
        Details: {
            screen: DetailsScreen,
            path: 'details/:id',
            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.name}'s details'`,
            }),
        },
        Favourites: { screen: FavouritesScreen },
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
    },
);

export default Navigator;

