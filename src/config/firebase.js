import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAclMcKfH5ou2Yap0VO_f42tEKS5U7dnag",
  authDomain: "fir-tuts-c1432.firebaseapp.com",
  projectId: "fir-tuts-c1432",
  storageBucket: "fir-tuts-c1432.appspot.com",
  messagingSenderId: "351913396161",
  appId: "1:351913396161:web:efd2667a667fe86779d140",
  measurementId: "G-B9QKQGH5MB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
