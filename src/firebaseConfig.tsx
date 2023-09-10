import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAdfIW9rMMaHgOtaT0Hz7T7tnWL0GUyX4",
  authDomain: "docs-28c1d.firebaseapp.com",
  projectId: "docs-28c1d",
  storageBucket: "docs-28c1d.appspot.com",
  messagingSenderId: "598266487923",
  appId: "1:598266487923:web:0a5bc0c85bb6bf85343606",
  measurementId: "G-H8Z7W5RZWR"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth= getAuth(app)