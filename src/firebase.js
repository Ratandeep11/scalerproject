//eslint no-use-before-define: 0
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




var firebaseConfig = {
  apiKey: "AIzaSyCwMBwa38SUrXEvJfb5KRKf90YyRoyt15c",
  authDomain: "projectnametoshfirebase.firebaseapp.com",
  databaseURL: "https://projectnametoshfirebase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projectnametoshfirebase",
  storageBucket: "projectnametoshfirebase.appspot.com",
  messagingSenderId: "539281283499",
  appId: "1:539281283499:web:7034e336b73cf371285aee",
  measurementId: "G-8CR6KGN42T"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();






