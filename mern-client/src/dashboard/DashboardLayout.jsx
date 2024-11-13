
import SideBar from '../dashboard/SideBar';
import React from 'react'
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row md:flex-row'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout;
