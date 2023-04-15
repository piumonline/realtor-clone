import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Authbtn from '../components/Authbtn';


function Signin() {

  const[inputs, setInputs] = useState({
    email:"",
    password:"",
  });

const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]: e.target.value})
  }

  console.log(inputs.email, inputs.password)

  return (
    <div>
      <h1 className='p-10 text-3xl'>Sign In</h1>
      <section className='flex justify-center flex-wrap'>
        <div>
          <img className='rounded-lg mx-10' src='https://getblogo.com/wp-content/uploads/2021/03/How-much-does-it-cost-for-a-locksmith-to-open-a-door.jpg'/>
        </div>
        <div className='mx-10 flex justify-center items-center w-80'>
          <form className='flex flex-col  w-full items-center'>
            <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='text' placeholder='Email addresss' name='email' onChange={handleChange}/>       
            <input className='m-1 w-full h-10 my-4 border-2 border-indigo-300 p-2' type='Password' placeholder='Password' name='password' onChange={handleChange}/>
            
            <div className='w-full'l>
            <p className='pb-8 text-xs text-blue-600 flex justify-end items-end'><Link to='/fogotpwd'>Fogot Password?</Link></p>
            </div>
             
              <button className='bg-blue-500 w-full py-2 text-white mt-3'>SIGN IN</button>
              <p className='text-sm p-2'>OR</p>
              <Authbtn/>
            <p className='pt-10 text-sm'>Don't have an account? <span className='text-blue-600'><Link to='/signup'>Register</Link></span> </p>


          </form>
        </div>
      </section>
    </div>
  )
}

export default Signin