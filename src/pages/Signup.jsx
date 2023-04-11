import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'



function Signup() {
  return (
    <div>
      <h1 className='p-10 text-3xl'>Sign Up</h1>
      <section className='flex justify-center flex-wrap'>
        <div className=''>
          <img className='rounded-lg mx-10 object-scale-down h-537 w-491' src='https://media.istockphoto.com/id/636732466/photo/handing-over-the-house-keys.jpg?s=612x612&w=0&k=20&c=9CLNLlacw619oCIAQXp5QQOqV_0d5ETXe1AkBg-g8ws='/>
        </div>

        <div className='mx-10 flex justify-center items-center w-72'>
          <form className='flex flex-col  w-full items-center'>
            
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='text' placeholder='Full Name' name='name'/>       
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='text' placeholder='Email addresss' name='email'/>       
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='Password' placeholder='Password' name='password'/>

            <p className='pt-10 text-sm'>Do you already have an account? <span className='text-blue-600'><Link to='/signin'>Sign In</Link></span></p>
             
              <button className='bg-blue-500 w-full py-2 text-white mt-3'>SIGN UP</button>
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

export default Signup