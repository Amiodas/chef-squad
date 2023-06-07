// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxyY2cmIX3Lr_PruC4np16KnaAvA6zjGg",
  authDomain: "assignment-10-frontend.firebaseapp.com",
  projectId: "assignment-10-frontend",
  storageBucket: "assignment-10-frontend.appspot.com",
  messagingSenderId: "686412179650",
  appId: "1:686412179650:web:8cdabc478516cec101b35b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;