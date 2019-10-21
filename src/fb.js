import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig =  {
  apiKey: "AIzaSyAyFbRY6QXNAJAPB9JOwl237YfI47fD6UQ",
  authDomain: "todo-ninja-6a08b.firebaseapp.com",
  databaseURL: "https://todo-ninja-6a08b.firebaseio.com",
  projectId: "todo-ninja-6a08b",
  storageBucket: "todo-ninja-6a08b.appspot.com",
  messagingSenderId: "941630381283",
  appId: "1:941630381283:web:866ea31c927b95220239d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;