import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8e9iac6k4v7AyoAXLh56aDFHfM5R5L5w",
  authDomain: "eng-amphora-256816.firebaseapp.com",
  projectId: "eng-amphora-256816",
  storageBucket: "eng-amphora-256816.appspot.com",
  messagingSenderId: "103701025328",
  appId: "1:103701025328:web:f55ba4e7e8c20d667293f5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
