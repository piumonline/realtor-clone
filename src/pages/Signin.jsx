import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'


function Signin() {
  return (
    <div>
      <h1 className='p-10 text-3xl'>Sign In</h1>
      <section className='flex justify-center flex-wrap'>
        <div>
          <img className='rounded-lg mx-10' src='https://getblogo.com/wp-content/uploads/2021/03/How-much-does-it-cost-for-a-locksmith-to-open-a-door.jpg'/>
        </div>

        <div className='mx-10 flex justify-center items-center w-72'>
          <form className='flex flex-col  w-full items-center'>
            <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='text' placeholder='Email addresss' name='email'/>       
            <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='Password' placeholder='Password' name='password'/>

            <p className='pt-10 text-sm'>Don't have an account? <span className='text-blue-600'><Link to='/signup'>Register</Link></span></p>
             
              <button className='bg-blue-500 w-full py-2 text-white mt-3'>SIGN IN</button>
              <p className='text-sm p-2'>OR</p>
              <button className='bg-red-500 w-full py-2 text-white -3 flex justify-center items-center'>
              <FcGoogle className='bg-white rounded-full m-1'/>
                CONTINUE WITH GOOGLE
                </button>

          </form>
        </div>
      </section>
    </div>
  )
}

export default Signin