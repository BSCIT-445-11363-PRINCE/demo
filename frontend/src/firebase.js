// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMe_8p_Bk50rqsoOz0X1o0bheJneXGTfA",
  authDomain: "studio-6379801514-e3578.firebaseapp.com",
  projectId: "studio-6379801514-e3578",
  storageBucket: "studio-6379801514-e3578.firebasestorage.app",
  messagingSenderId: "106922390962",
  appId: "1:106922390962:web:f6d36d546a6eff798e20ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();