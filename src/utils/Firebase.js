import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase-config";
import { getAuth, signOut, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { doc, addDoc, getDocs, updateDoc, collection } from "firebase/firestore";

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const store = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const loginWithPopup = () => signInWithRedirect(auth, provider);

export const checkUser = (callback) => onAuthStateChanged(auth, callback);
export const logOut = () => signOut(auth);

// Set it up such a way that all the pref is fetched from the getUser itself somehow.

export const getUserData = async (userObj) => {
  // Checks if the user exists on the Firestore DB, returns x>0 such
  const { uid } = userObj;
  let exists = 0;
  let userData = {
    fullName: "No user",
    photo: null,
    emailId: "abc@example.com",
    pref: [],
  };
  const querySnapshot = await getDocs(collection(store, uid));
  querySnapshot.forEach((item) => {
    userData = item.data();
    exists += 1;
  });

  return { userData, exists };
};

export const getPref = async (userObj) => {
  const { uid } = userObj;
  const querySnapshot = await getDocs(collection(store, uid));
  let data;
  querySnapshot.forEach((item) => {
    data = item.data().pref;
  });

  return data || [];
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
      pref: [],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const postPref = async (userObj, newPrefArr) => {
  const { uid } = userObj;
  const querySnapshot = await getDocs(collection(store, uid));
  querySnapshot.forEach(async (item) => {
    const ref = doc(store, uid, item.id);
    await updateDoc(ref, {
      pref: [...newPrefArr],
    });
  });
};
