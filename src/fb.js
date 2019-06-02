import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDSEGZlRv6rKLg82k3WI52pCSUgLw0i5Xg",
  authDomain: "mdproject-55396.firebaseapp.com",
  databaseURL: "https://mdproject-55396.firebaseio.com",
  projectId: "mdproject-55396",
  storageBucket: "mdproject-55396.appspot.com",
  messagingSenderId: "370328733369",
  appId: "1:370328733369:web:d29df696538426b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
  //timestampsInSnapshots: true
});

export default db;
