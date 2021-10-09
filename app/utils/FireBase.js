import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJC7Iudczu751M7LEmPgUXKkzeBdvBLs8",
  authDomain: "asistenciasuro.firebaseapp.com",
  databaseURL: "https://asistenciasuro.firebaseio.com",
  projectId: "asistenciasuro",
  storageBucket: "asistenciasuro.appspot.com",
  messagingSenderId: "581272151663",
  appId: "1:581272151663:web:5f2875034cbb163a24cf9a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
