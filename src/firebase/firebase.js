import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSevdBfXybFhr6b_mV5TEuIiteUUoo9SA",
  authDomain: "filmyverse-85a2d.firebaseapp.com",
  projectId: "filmyverse-85a2d",
  storageBucket: "filmyverse-85a2d.appspot.com",
  messagingSenderId: "415103997799",
  appId: "1:415103997799:web:12dd8ecdb0d3b7a814c1c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;