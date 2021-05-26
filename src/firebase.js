import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDhPdBOOnRi_90KEoCnKksnuAvDDvhZ5Yc",
  authDomain: "remoteup-22a06.firebaseapp.com",
  databaseURL: "https://remoteup-22a06-default-rtdb.firebaseio.com",
  projectId: "remoteup-22a06",
  storageBucket: "remoteup-22a06.appspot.com",
  messagingSenderId: "118445848597",
  appId: "1:118445848597:web:da1f48e8ae99abce2ef61c",
  measurementId: "G-65G04XYE81"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
