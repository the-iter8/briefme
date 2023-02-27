import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../config/firebase-config';
import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const store = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const loginWithPopup = () => signInWithRedirect(auth, provider);

export const checkUser = (callback) => onAuthStateChanged(auth, callback);
export const logOut = () => signOut(auth);

export const getUser = async (userObj) => {
  // Checks if the user exists on the Firestore DB, returns x>0 such
  const { uid } = userObj;
  let count = 0;
  const querySnapshot = await getDocs(collection(store, uid));
  querySnapshot.forEach((doc) => {
    count += 1;
  });
  return count;
};

export const postUser = async (userObj) => {
  // Posts the user details on Firestore DB upon completion of the Instruction modal.
  const { uid, email, displayName, photoURL } = userObj;
  // What if the photo url is updateD?
  // set the preferance object

  try {
    const docRef = await addDoc(collection(store, uid), {
      fullName: displayName,
      photo: photoURL,
      emailId: email,
      pref: {},
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
