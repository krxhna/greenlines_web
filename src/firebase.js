import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHfHqofD-08feKLT-0SJW3hftXlwsGk_g",
    authDomain: "greenlines-69a5c.firebaseapp.com",
    projectId: "greenlines-69a5c",
    storageBucket: "greenlines-69a5c.appspot.com",
    messagingSenderId: "965232689144",
    appId: "1:965232689144:web:a4548cafffb8db013c200d",
    measurementId: "G-VK1P69RQ7J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();