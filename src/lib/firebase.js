import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDR27-ENMpYDpmbSoOzcg_hi2WE3sAx-ao",
    authDomain: "instaclone-330db.firebaseapp.com",
    projectId: "instaclone-330db",
    storageBucket: "instaclone-330db.appspot.com",
    messagingSenderId: "1046124181267",
    appId: "1:1046124181267:web:8c48dfbacfa0437a1e8ce6",
    measurementId: "G-GT605MKYKB"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };