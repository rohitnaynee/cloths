import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfgcLVzFaRdGlhKNfgG4MqO4KNs5bAZvw",
    authDomain: "on-cloth.firebaseapp.com",
    databaseURL: "https://on-cloth.firebaseio.com",
    projectId: "on-cloth",
    storageBucket: "on-cloth.appspot.com",
    messagingSenderId: "33316052655",
    appId: "1:33316052655:web:ab22cf5eb05925dbea3e5a",
    measurementId: "G-YQKW83GFMS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =  firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;