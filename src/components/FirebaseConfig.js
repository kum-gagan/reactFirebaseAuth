import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAo7TophCcwRUS6u_ZOT5J7S6XyWuOtWoY",
  authDomain: "reactemailpassword.firebaseapp.com",
  projectId: "reactemailpassword",
  storageBucket: "reactemailpassword.appspot.com",
  messagingSenderId: "734505485576",
  appId: "1:734505485576:web:b8a8992cbea8f68562d8bd"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)