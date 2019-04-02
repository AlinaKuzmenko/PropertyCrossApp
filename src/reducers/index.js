import { actionTypes as actions } from '../actions';

const initialState = {
    listings: [],
    selectedListing: null,
    favourites: [],
};

export function listingsReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_LISTINGS:
            return Object.assign({}, state, {
                listings: [ ...action.list ],
            });
        case actions.SELECT_LISTING:
            return Object.assign({}, state, {
                selectedListing: action.id,
            });
        case actions.ADD_TO_FAVOURITES:
            return Object.assign({}, state, {
                favourites: [ ...state.favourites, action.id ],
            });
        case actions.REMOVE_FROM_FAVOURITES:
            return Object.assign({}, state, {
                favourites: state.favourites.filter(el => el !== action.id),
            });
        default:
            return state;
    }
}
