import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3Sl94h9FldmIowWcPERHJ0L2n1XYW0vs",
  authDomain: "chatapp-feab9.firebaseapp.com",
  projectId: "chatapp-feab9",
  storageBucket: "chatapp-feab9.appspot.com",
  messagingSenderId: "296160362285",
  appId: "1:296160362285:web:cbe1860c33ae3558ab1da4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();