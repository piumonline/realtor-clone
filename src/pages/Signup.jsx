import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authbtn from '../components/Authbtn';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "../firebase";
import { Toast, toast } from 'react-toastify';


function Signup() {

  const[inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
  });

  const {name, email, password} = inputs
  const navigate = useNavigate();

  const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]: e.target.value})
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...inputs };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("sign up was successful")
      navigate('/')
    } catch (error) {
      toast.error(error.message)
      // toast.error("Something went wrong please check again")

      console.log(error.message)
    }
  
  }

  return (
    <div>
      <h1 className='p-10 text-3xl'>Sign Up</h1>
      <section className='flex justify-center flex-wrap'>
        <div className=''>
          <img className='rounded-lg mx-10 object-scale-down h-491 w-491' alt='pic' src='https://media.istockphoto.com/id/636732466/photo/handing-over-the-house-keys.jpg?s=612x612&w=0&k=20&c=9CLNLlacw619oCIAQXp5QQOqV_0d5ETXe1AkBg-g8ws='/>
        </div>

        <div className='mx-10 flex justify-center items-center w-80'>
          <form onSubmit={onSubmit} className='flex flex-col  w-full items-center'>
            
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='text' placeholder='Full Name' name='name' onChange={handleChange}/>       
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='text' placeholder='Email addresss' name='email' onChange={handleChange}/>       
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='Password' placeholder='Password' name='password' onChange={handleChange}/>

            <p className='pt-10 text-sm'>Do you already have an account? <span className='text-blue-600'><Link to='/signin'>Sign In</Link></span></p>
             
              <button className='bg-blue-500 w-full py-2 text-white mt-3'>SIGN UP</button>
              <p className='text-sm p-2'>OR</p>
              <Authbtn className=''/>


          </form>
        </div>
      </section>
    </div>
  )
}


export default Signup