import React, { useState } from 'react';
import Logo from "../assets/vuexyLogo.jpeg";

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen ]=useState(true);

    const toggleSidebar=()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    return(
        <div className="sidebar">
            <div className='logo'>
                <img src={Logo} alt="logo" className='me-2'/>
                <span className='fs-3 fw-medium'>Vuexy</span>
            </div>
            <button className='btn btn-primary' onClick={toggleSidebar}>
                {isSidebarOpen?'Collapse':'Expand'}
            </button>
            <div className="content">Content</div>
        </div>
    );
}

