import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aibasedexamnotes.firebaseapp.com",
  projectId: "aibasedexamnotes",
  storageBucket: "aibasedexamnotes.firebasestorage.app",
  messagingSenderId: "620427244413",
  appId: "1:620427244413:web:bc73254c50a2b4253a1214",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
