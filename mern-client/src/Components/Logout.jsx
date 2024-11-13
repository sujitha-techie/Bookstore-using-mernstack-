import React, { useContext } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'

const Logout = () => {
    const {logout} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const handleLogout =()=>{
        logout().then(() => {
            // Sign-out successful.
            alert("Log out successfully")
            navigate(from, {replace:true})
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='h-5 bg-teal-100 sm-h-2 flex items-center justify-center'>
      <button className='text-black px-4 py-2 rounded shadow-lg' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;