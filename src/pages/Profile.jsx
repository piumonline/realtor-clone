import React from 'react'
import logo from '../img/logo.png'

function Profile() {
  return (
    <div >
      <h1 className='p-5'>My Profile</h1>
      <div className='flex justify-center'>
        <form className='flex flex-col w-96'>
          <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='text' placeholder='Full Name' name='name'/>
          <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='text' placeholder='Full Name' name='name'/>
        </form>
      </div>
    </div>
  )
}

export default Profile