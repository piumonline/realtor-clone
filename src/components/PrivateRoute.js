import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus'
// import { loggedIn, checkingStatus } from "../hooks/useAuthStatus";


function PrivateRoute() {

    const { loggedIn, checkingStatus } = useAuthStatus();
    if(checkingStatus){
        return <h1>Loading...</h1>
    }

  return loggedIn ? <Outlet/> : <Navigate to='/signin'/>
}

export default PrivateRoute