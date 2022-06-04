import { initializeApp } from "firebase/app"
import { getFirestore} from 'firebase/firestore';
import {getAuth,signInWithPopup} from  "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCxcUTkovRgocvXvVYrzoZ5NM-rVSE_szM",
    authDomain: "disneyplus-19571.firebaseapp.com",
    projectId: "disneyplus-19571",
    storageBucket: "disneyplus-19571.appspot.com",
    messagingSenderId: "890445878188",
    appId: "1:890445878188:web:24fa80590c835f4c35e009",
    measurementId: "G-0GNDTLBCJW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage  = getStorage() ;
  export {auth,provider,storage,signInWithPopup};

  export default db;

  //const analytics = getAnalytics(app);