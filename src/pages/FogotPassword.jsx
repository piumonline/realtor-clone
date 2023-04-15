import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Authbtn from '../components/Authbtn';

function FogotPassword() {

  const[email, setEmail] = useState("");

  const handleChange=(e)=>{
    setEmail(e.target.value)
  }

  // console.log(inputs);

  return (
    <div>
      <h1 className='p-10 text-3xl'>Fogot Password</h1>
      <section className='flex justify-center flex-wrap'>
        <div className=''>
          <img className='rounded-lg mx-10 object-scale-down h-491 w-491' src='https://thumbs.dreamstime.com/b/lost-keys-many-times-tend-to-forget-51883226.jpg'/>
        </div>

        <div className='mx-10 flex justify-center items-center w-80'>
          <form className='flex flex-col  w-full items-center'>
            
            <input className='m-1 w-full h-10 my-3 border-2 border-indigo-300 p-2' type='text' placeholder='Email addresss' name='email' onChange={handleChange}/>       
             
              <button className='bg-blue-500 w-full py-2 text-white mt-3'>SEND E-MAIL</button>

            <p className='pt-10 text-sm'><span className='text-blue-600'><Link to='/signin'>Sign In Insted</Link></span></p>

  



          </form>
        </div>
      </section>
    </div>
  )
}

export default FogotPassword