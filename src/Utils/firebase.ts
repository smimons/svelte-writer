import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDbLXIqNksPlcb9ZqUm1gup1nN9B9r-Nfk",
    authDomain: "svelte-writer.firebaseapp.com",
    projectId: "svelte-writer",
    storageBucket: "svelte-writer.appspot.com",
    messagingSenderId: "210858784861",
    appId: "1:210858784861:web:e725d609bd4dbe1bba75b4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();