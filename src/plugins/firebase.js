// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "fmds-auth01.firebaseapp.com",
  projectId: "fmds-auth01",
  storageBucket: "fmds-auth01.appspot.com",
  messagingSenderId: "343514225064",
  appId: "seu-api-id-aqui"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;