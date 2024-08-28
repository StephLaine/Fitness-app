// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHsXVf-XrPI3swu1jFecy9_kvNJ0u_tKE",
  authDomain: "fitness-app-9515e.firebaseapp.com",
  projectId: "fitness-app-9515e",
  storageBucket: "fitness-app-9515e.appspot.com",
  messagingSenderId: "684616997688",
  appId: "1:684616997688:web:c09740d8a3c64284cc7fcd",
  measurementId: "G-CHB6ZEJRPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);

export{app, auth};