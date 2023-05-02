// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsw2WmcSsWc-ZQ65GQzZfb7ORet9qmGzE",
  authDomain: "delicious-assignment-client.firebaseapp.com",
  projectId: "delicious-assignment-client",
  storageBucket: "delicious-assignment-client.appspot.com",
  messagingSenderId: "180779843611",
  appId: "1:180779843611:web:7a93cf6a3be584268178be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;