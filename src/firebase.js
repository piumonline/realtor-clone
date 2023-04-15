// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGZDGkLXfoxPaTzH8dbi7T2_P8ejgNgH4",
  authDomain: "realtor-clone-react-aed28.firebaseapp.com",
  projectId: "realtor-clone-react-aed28",
  storageBucket: "realtor-clone-react-aed28.appspot.com",
  messagingSenderId: "596449459187",
  appId: "1:596449459187:web:adfd1f4ced20a44217f086"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// const initializeAppIfNecessary=()=>{
//   try{
//     return getApp()
//   }catch{
//     return initializeApp(firebaseConfig)
//   }
// }
// let app = initializeAppIfNecessary()
// export const auth = getAuth(app);
