import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwC-J0Su8R0DHDxk_hwQCuZQxa2Qfvbss",
  authDomain: "twitter-afd64.firebaseapp.com",
  databaseURL: "https://twitter-afd64-default-rtdb.firebaseio.com",
  projectId: "twitter-afd64",
  storageBucket: "twitter-afd64.appspot.com",
  messagingSenderId: "725046896770",
  appId: "1:725046896770:web:81c7c77411ce5cb7acec9b"
  };

  const app = initializeApp(firebaseConfig);

  export const firebaseInstance = firebaseConfig;

  export const authService = getAuth();
  export const dbService = getFirestore();
  export const storageService = getStorage();