import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCppi80ouBQpBxWkr2Q11x1T878e_5NZXM",
    authDomain: "crown-db-aa457.firebaseapp.com",
    databaseURL: "https://crown-db-aa457.firebaseio.com",
    projectId: "crown-db-aa457",
    storageBucket: "crown-db-aa457.appspot.com",
    messagingSenderId: "502180809018",
    appId: "1:502180809018:web:b9765895c4baed61d62803",
    measurementId: "G-GCJXCEYS3J"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;