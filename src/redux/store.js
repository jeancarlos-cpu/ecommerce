import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createStateSyncMiddleware } from 'redux-state-sync';
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';
import persistedReducer from './root-reducer';
import { persistStore } from 'redux-persist';


const sagaMiddleware = createSagaMiddleware();

const config = {
    blacklist: ['TOGGLE_CART']
};

const middlewares = [logger, createStateSyncMiddleware(config), sagaMiddleware];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);