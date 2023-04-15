import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function Profile() {

  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const {name, email }= formData

  return (
    <div >
      <h1 className='p-5'>My Profile</h1>
      <div className='flex justify-center'>
        <form className='flex flex-col w-96'>
          <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='text' placeholder='Full Name' name='name' value={name}/>
          <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='text' placeholder='Full Name' name='email' value={email}/>
          <p className='pb-8 text-xs text-blue-600 flex justify-end items-end'><Link to='/fogotpwd'>Sign Out</Link></p>

        </form>
      </div>
    </div>
  )
}

export default Profile