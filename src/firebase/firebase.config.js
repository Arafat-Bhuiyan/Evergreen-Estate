// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRvSqwtE15RtBw4RU6WTCyXH38zEki_94",
  authDomain: "evergreen-estate-cfb0f.firebaseapp.com",
  projectId: "evergreen-estate-cfb0f",
  storageBucket: "evergreen-estate-cfb0f.appspot.com",
  messagingSenderId: "390419969118",
  appId: "1:390419969118:web:3e8cd167663d53b71b70cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;