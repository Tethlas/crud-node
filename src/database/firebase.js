import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCA2YYNOvvizQrok8_5TvN2mgu25z49uyM",
  authDomain: "crud-node-89621.firebaseapp.com",
  projectId: "crud-node-89621",
  storageBucket: "crud-node-89621.appspot.com",
  messagingSenderId: "429881573541",
  appId: "1:429881573541:web:8e315d7061e6e9a6f1cd4c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
