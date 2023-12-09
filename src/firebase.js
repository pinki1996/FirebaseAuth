import firebase from "firebase/compat/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_e3ovvu6jaytJzXFnarknFghvddzrQPE",
  authDomain: "authentucation-project.firebaseapp.com",
  projectId: "authentucation-project",
  storageBucket: "authentucation-project.appspot.com",
  messagingSenderId: "690691261647",
  appId: "1:690691261647:web:8a3702dbe711d63ce9a3ba",
  measurementId: "G-G0JFMRXQCN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//Authentication
export const auth = getAuth(app)

//Google Authentication 
export const provider = new GoogleAuthProvider()

