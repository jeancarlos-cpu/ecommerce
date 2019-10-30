import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { googleProvider, auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFaillure } from './user.actions';

export function* SignInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield createUserProfileDoc(user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
    catch (error) {
        yield put(googleSignInFaillure(error));
    }
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle);
};


export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}

