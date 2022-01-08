import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_Uuk8dWKhzzZGLBqWsL2tjTpa9D3MMBo",
  authDomain: "learning-firebase-v9-c6a6c.firebaseapp.com",
  projectId: "learning-firebase-v9-c6a6c",
  storageBucket: "learning-firebase-v9-c6a6c.appspot.com",
  messagingSenderId: "1075099557841",
  appId: "1:1075099557841:web:5004b93e835e3a3ac9caf0",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
