import { createStore } from 'redux'
// reducers
import appReducer from '../reducers';

export const store = createStore(appReducer);

export const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();

