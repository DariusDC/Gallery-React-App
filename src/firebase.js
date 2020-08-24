import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDU3VpKS35kVMvMu_29m0Mwo6NsQ82fGew",
  authDomain: "gallery-4a351.firebaseapp.com",
  databaseURL: "https://gallery-4a351.firebaseio.com",
  projectId: "gallery-4a351",
  storageBucket: "gallery-4a351.appspot.com",
  messagingSenderId: "1019712013357",
  appId: "1:1019712013357:web:2da6cd0657763979fca4a4",
  measurementId: "G-NVC5CZ01LJ",
});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage };
