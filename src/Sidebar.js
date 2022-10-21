import React from 'react'
import "./Sidebar.css"
import GitHubIcon from '@mui/icons-material/GitHub'
import { Avatar } from '@mui/material'

import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className='sidebar'>
      
      <div className='profile'>
      <Avatar className="avatar-profile" src="https://pbs.twimg.com/profile_images/1356228586299142149/ZA8n5UNJ_400x400.jpg"></Avatar>
         <SidebarOption />
      
          
          <div className='slack'>
           <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam0FuWgg8yQYrnL7A4FlXLD84D12pxVgkMdgcC5SWfQ&s" alt="img" />
           
           </div>
           <GitHubIcon  className='github'/>
         </div>
         <h4>HNG Internship 9 Frontend Task</h4>
         <div className='ingressive'>
         
         <img className='zuri' src= "https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt="img" />
         
            <img className='ing' src= "https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1" alt="img" />
            
         </div>
         
      
    </div>
  )
}

export default Sidebar