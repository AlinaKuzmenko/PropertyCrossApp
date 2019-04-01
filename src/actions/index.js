export const actionTypes = {
    GET_LISTINGS: 'GET_LISTINGS',
    SELECT_LISTING: 'SELECT_LISTING',
    ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
    REMOVE_FROM_FAVOURITES: 'REMOVE_FROM_FAVOURITES',
};

export function getListings(list) {
    return {
        type: actionTypes.GET_LISTINGS,
        list,
    }
}

export function selectListing(id) {
    return {
        type: actionTypes.SELECT_LISTING,
        id,
    }
}

export function addToFavourites(id) {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        id,
    }
}

export function removeFromFavourites(id) {
    return {
        type: actionTypes.REMOVE_FROM_FAVOURITES,
        id,
    }
}
