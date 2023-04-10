import React from 'react'
import logo from '../img/rdc-logo-default.svg'
import { Link, useLocation } from 'react-router-dom'


function Navbar() {

  const location = useLocation();
  

  function pathMathRouter(route){
    if(route===location.pathname){
      return true
    }
    // route === location.pathname ? true:null
  }

  console.log(location.pathname, pathMathRouter('/'));

  return (
    <div className='flex justify-between items-center px-20  bg-white border-b shadow-sm sticky top-0 z-50 cursor-pointer'>
        
        <div className='flex items-center'>
            <img src={logo} alt='logo' className='h-5  pl-5'/>

            <ul className='flex  pl-10 text-sm text-gray-600 border-b-red-600'>

              <Link to='/'>
              <li className={`py-3 px-3  ${pathMathRouter("/") && "text-black border-b-4 border-b-red-600"}`}>Buy</li>
              </Link>

              <Link to='/sell'>
              <li className={`py-3 px-3 ${pathMathRouter("/sell") && "text-black border-b-4 border-b-red-600"}`}>Sell</li>
              </Link>

              <Link to='/rent'>
              <li className={`py-3 px-3 ${pathMathRouter("/rent") && "text-black border-b-4 border-b-red-600"}`}>Rent</li>
              </Link>

              <Link to='mortgage'>
              <li className={`py-3 px-3 ${pathMathRouter("/mortgage") && "text-black border-b-4 border-b-red-600"}`}>Mortgage</li>
              </Link>

              <Link to='/realtors'>
              <li className={`py-3 px-3 ${pathMathRouter("/realtors") && "text-black border-b-4 border-b-red-600"}`}>Find Realtors</li>
              </Link>

              <Link to='/news'>
              <li className={`py-3 px-3 ${pathMathRouter("/news") && "text-black border-b-4 border-b-red-600"}`}>News & Insights</li>
              </Link>

          </ul>

        </div>


        <div>
        <ul className='flex space-x-3 text-sm items-center'>
              <li>Login</li>
              <div className='rounded-full bg-red-700 px-3 py-1 text-white'>
              <li >Sign up</li>
              </div>
            </ul>
        </div>

            

    </div>
   
  )
}

export default Navbar