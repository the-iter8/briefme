import { initializeApp, deleteApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, signOut } from "firebase/auth";

import { firebaseConfig } from "@config/firebase-config";

export let firebaseApp: FirebaseApp;
export let firebaseAuth: Auth;

export function firebaseConnect() {
  firebaseApp = initializeApp(firebaseConfig);
  return getAuth(firebaseApp);
}

export const firebaseAuthConnect = firebaseConnect();

export function userLogout() {
  const auth = getAuth(firebaseApp);

  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

}

export function firebaseDisconnect() {
  deleteApp(firebaseApp)
    .then(() => console.log("Firebase app deleted successfully."))
    .catch((error) => console.log("Error delete Firebase app", error));
}

export async function verifyPhoneOtp(otp) {
  return window.confirmationResult
    .confirm(otp)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      return user;
    })
    .catch((error) => {});
}
