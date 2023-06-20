
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCp1v291rqJ4os8twsD26qAoOWuZFZps9w",
  authDomain: "tiktok---projeto-ebac.firebaseapp.com",
  projectId: "tiktok---projeto-ebac",
  storageBucket: "tiktok---projeto-ebac.appspot.com",
  messagingSenderId: "534387292212",
  appId: "1:534387292212:web:768af8a1a1bfbd40c97261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;