import ShopActionTypes from './shop.types';
import {firestore, convertSnapToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(async snapshot => {
            const collections = convertSnapToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collections));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};

export const fetchCollectionsFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsSuccess = collections => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})