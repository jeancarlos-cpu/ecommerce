import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCAHptOwS6BqGgf8iLnWeolIiBDI1p1Dlc",
    authDomain: "crown-db-12f34.firebaseapp.com",
    databaseURL: "https://crown-db-12f34.firebaseio.com",
    projectId: "crown-db-12f34",
    storageBucket: "crown-db-12f34.appspot.com",
    messagingSenderId: "1088368175379",
    appId: "1:1088368175379:web:44c8a934f3697aa411d2e6",
    measurementId: "G-CFF44N6QGJ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const usubscribe = auth.onAuthStateChanged( userAuth => {
            usubscribe();
            resolve(userAuth);
        }, reject)
    })
}

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('Error creating user:', error.message)
        }
    }
    return userRef;
};

export const addCollectionAndDocs = async (collectionKey, arrayOfObjects) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    arrayOfObjects.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();

};

export const convertSnapToMap = collections => {
    const collection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });


    return collection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
}

export default firebase;