
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6gI0IE56Ht6booomUVaSKz0WHj5eFua4",
  authDomain: "foodie-bb38d.firebaseapp.com",
  projectId: "foodie-bb38d",
  storageBucket: "foodie-bb38d.appspot.com",
  messagingSenderId: "258028282554",
  appId: "1:258028282554:web:6bd0118fca69de451b5883",
  measurementId: "G-3W9B89XP1S"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const storage=getStorage(app);

export {db,storage};