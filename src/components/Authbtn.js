import React from 'react'
import { FcGoogle } from 'react-icons/fc'

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Authbtn() {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }


  return (
    
        <button className='bg-red-500 py-2 text-white -3 flex justify-center items-center w-full' onClick={onGoogleClick}>
              <FcGoogle className='bg-white rounded-full m-1'/>
                CONTINUE WITH GOOGLE
        </button>
   
  )
}

export default Authbtn