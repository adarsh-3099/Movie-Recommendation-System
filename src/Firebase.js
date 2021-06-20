import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwOsEkwyJLTkmtMgb1ZLBvlhzn00GvUlA",
    authDomain: "movie-recommendation-sys-b88cb.firebaseapp.com",
    projectId: "movie-recommendation-sys-b88cb",
    storageBucket: "movie-recommendation-sys-b88cb.appspot.com",
    messagingSenderId: "904866073414",
    appId: "1:904866073414:web:7d34e3cd2766d2039cb347",
    measurementId: "G-PFQRDZ35E1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default { db }