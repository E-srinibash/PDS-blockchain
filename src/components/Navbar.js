import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import {Avatar} from "@mui/material";
import Logo from "../assets/logo.jpeg";
import { TrackingContext } from '../Context/TrackingContext.js';

export const Navbar = () => {

  const {name,setName}=useContext(TrackingContext);
  const token=sessionStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-bg">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand logo d-flex flex-row align-items-center"
        >
          <Avatar alt="Remy Sharp" src={Logo} className="me-2" />
          <span className='n1'>PDS</span>
        </NavLink>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link nav-item">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link nav-item">
              About Us
            </NavLink>
          </li>
          <li className="nav-item"> 
            <NavLink
              to="/read"
              className="nav-link nav-item"             
            >
              {token?"Dashboard":""}
            </NavLink>   
            </li> 
          <li className="nav-item ">
            <NavLink
              to="/login"
              className="btn btn-primary mx-2 p-2"
              onClick={() => {
                if (token && name === "LogOut") {
                  setName("Login");
                  sessionStorage.removeItem("token");
                }
              }}
            >
              {name}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
