import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
  } else {
    console.log("User logged out");
  }
});
