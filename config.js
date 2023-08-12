import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA_wstJUpaye81f2HhH0mGk9nkrO73LW8w",
    authDomain: "project-c71-25668.firebaseapp.com",
    projectId: "project-c71-25668",
    storageBucket: "project-c71-25668.appspot.com",
    messagingSenderId: "1049417586086",
    appId: "1:1049417586086:web:d7ee0b7dba7049b14d6b67"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
