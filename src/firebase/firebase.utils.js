import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC_ABQGHLJvm087mK3F9dcouvZCYidOcRg",
  authDomain: "crown-db-7f063.firebaseapp.com",
  projectId: "crown-db-7f063",
  storageBucket: "crown-db-7f063.appspot.com",
  messagingSenderId: "1061615424798",
  appId: "1:1061615424798:web:c446fe86b49b5ee31f650f",
  measurementId: "G-1V20GGMW5D",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (err) {
      console.error("error creating user ", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

