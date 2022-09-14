import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjC_Zz4wkTRkZycdjpDMQw283SHJzIB0U",
  authDomain: "crwn-clothing-db-85d0d.firebaseapp.com",
  projectId: "crwn-clothing-db-85d0d",
  storageBucket: "crwn-clothing-db-85d0d.appspot.com",
  messagingSenderId: "239405175275",
  appId: "1:239405175275:web:71df1b833770d7be1c89ae",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
