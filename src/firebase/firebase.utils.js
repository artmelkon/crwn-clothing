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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

