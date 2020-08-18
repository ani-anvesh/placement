import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBfLXREW0-cMv9oDTBW2xYFmHQHDlQPHuw",
  authDomain: "avasyu-764da.firebaseapp.com",
  databaseURL: "https://avasyu-764da.firebaseio.com",
  projectId: "avasyu-764da",
  storageBucket: "avasyu-764da.appspot.com",
  messagingSenderId: "628259589740",
  appId: "1:628259589740:web:34de5607eaae745d7ad249",
  measurementId: "G-FZ3Q7TFPLD",
};
// Initialize Firebase
const base = firebase.initializeApp(firebaseConfig);

export default base;
