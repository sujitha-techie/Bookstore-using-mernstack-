import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider';
function Dashboard() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <div className='mt-28 px-4 lg:px-24 shadow-2xl'>
      <h2 className='text-5xl font-bold text-center'>
        User Dashboard
      </h2>
      <div className='text-2xl font-semibold text-center mt-8'>
      <img src={user.photoURL} alt={user?.displayName || "User Photo"} className="rounded-full w-40 h-40 mx-auto " />
        <p>Username : {user?.displayName || "Demo User"
        }</p>
        <p/> Useremail : {user?.email || "Demo email"}
      </div>

    </div>
  )
}

export default Dashboard
