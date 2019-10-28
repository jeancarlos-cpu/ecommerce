import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createStateSyncMiddleware } from 'redux-state-sync';
import persistedReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const config = {
    blacklist: ['TOGGLE_CART']
}

const middlewares = [logger, createStateSyncMiddleware(config), thunk];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);