import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function Authbtn() {
  return (
    
        <button className='bg-red-500 py-2 text-white -3 flex justify-center items-center w-full'>
              <FcGoogle className='bg-white rounded-full m-1'/>
                CONTINUE WITH GOOGLE
        </button>
   
  )
}

export default Authbtn