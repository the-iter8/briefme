import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { firebaseConfig } from '../config/firebase-config';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const store = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const loginWithPopup = () => signInWithPopup(auth, provider);

export const checkUser = (callback) => onAuthStateChanged(auth, callback);
export const logOut = () => signOut(auth);
