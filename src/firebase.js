import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import "firebase/compat/remote-config";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHfHqofD-08feKLT-0SJW3hftXlwsGk_g",
    authDomain: "greenlines-69a5c.firebaseapp.com",
    projectId: "greenlines-69a5c",
    storageBucket: "greenlines-69a5c.appspot.com",
    messagingSenderId: "965232689144",
    appId: "1:965232689144:web:a4548cafffb8db013c200d",
    measurementId: "G-VK1P69RQ7J"
  });

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const analytics = firebaseApp.analytics();

export { db, auth, analytics };
  
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

export default firebase;

