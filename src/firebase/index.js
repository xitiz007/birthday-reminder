import firebase from 'firebase/app';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxp969AatU8oMLB5GXCiRE0GrM3XOpXM8",
  authDomain: "birthday-reminder-pandit.firebaseapp.com",
  databaseURL: "https://birthday-reminder-pandit.firebaseio.com",
  projectId: "birthday-reminder-pandit",
  storageBucket: "birthday-reminder-pandit.appspot.com",
  messagingSenderId: "626779699582",
  appId: "1:626779699582:web:87f23d440df7cbe96b9b2f",
  measurementId: "G-FT26NJKZ8N"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

export default firebase;