import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { googleProvider, auth, createUserProfileDoc, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFaillure } from './user.actions';
import { signOutSuccess, signOutFailure } from './user.actions';

export function* SignInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(getUserSnapshot, user);
    }
    catch (error) {
        yield put(signInFaillure(error));
    }
};

export function* SignInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getUserSnapshot, user);
    }
    catch (error) {
        yield put(signInFaillure(error));
    }
};

export function* getUserSnapshot(user) {
    try {
        const userRef = yield createUserProfileDoc(user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
    catch (error) {
        yield put(signInFaillure(error));
    }
};

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield call(getUserSnapshot, userAuth);
    }
    catch(error) {
        yield put(signInFaillure(error))
    }
    yield 
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle);
};

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, SignInWithEmail);
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
};