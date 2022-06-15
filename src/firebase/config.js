import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuAj6fxy9UvtcWu1jJShk0oTZulTHobr4",
    authDomain: "fir-7e189.firebaseapp.com",
    projectId: "fir-7e189",
    storageBucket: "fir-7e189.appspot.com",
    messagingSenderId: "970959265294",
    appId: "1:970959265294:web:32acebdd8933b55db1265f",
    measurementId: "G-BL6EPFCZ4P"
  };

  export default   firebase.initializeApp(firebaseConfig)