import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGFrYcewGOAqnLTSY7nAYUN7NctjGgo6g",
  authDomain: "domoproject-1f6db.firebaseapp.com",
  projectId: "domoproject-1f6db",
  storageBucket: "domoproject-1f6db.appspot.com",
  messagingSenderId: "36626929349",
  appId: "1:36626929349:web:964eb967007583c36fc2ac",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database().ref("/notes");
export const googleProvider = new firebase.auth.GoogleAuthProvider();