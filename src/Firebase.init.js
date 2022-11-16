// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnas9NJxJKRmr-hf_kDMqVS77RI8xE7bg",
  authDomain: "random-user2.firebaseapp.com",
  projectId: "random-user2",
  storageBucket: "random-user2.appspot.com",
  messagingSenderId: "874259658667",
  appId: "1:874259658667:web:eeb3b51c96dddef1b044ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;