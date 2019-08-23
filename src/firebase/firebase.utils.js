import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbIG6H99C1p7GIgsX6ZxZLHpRUbcKnYtk",
  authDomain: "crwn-db-49780.firebaseapp.com",
  databaseURL: "https://crwn-db-49780.firebaseio.com",
  projectId: "crwn-db-49780",
  storageBucket: "",
  messagingSenderId: "248079474988",
  appId: "1:248079474988:web:e9e13b21b282dc2d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error while creating user', error.message);
    }
  }
  
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
