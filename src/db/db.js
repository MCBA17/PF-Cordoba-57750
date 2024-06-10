import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwwWsuSgSKpJAwE-bYtLRAUarxkyieZAc",
    authDomain: "golden-palace-eb6f1.firebaseapp.com",
    projectId: "golden-palace-eb6f1",
    storageBucket: "golden-palace-eb6f1.appspot.com",
    messagingSenderId: "934101261738",
    appId: "1:934101261738:web:365c1cceee7acb6d7a5fd3"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db