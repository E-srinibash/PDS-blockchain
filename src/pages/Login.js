import { loginUser } from "../operations/config.js";
import { Link, useNavigate } from "react-router-dom"; 
import "../App.css" 
import { useContext, useEffect, useState } from "react"; 
import axios from "axios"; 
import {  toast } from "react-toastify";
import { TrackingContext } from "../Context/TrackingContext.js";
 
export const Login=()=>{ 
 
  const [referenceIdOrPhoneNumber, setReferenceIdOrPhoneNumber] = useState("")
  const [password, setPassword]=useState("")
  const [role,setRole]=useState("") 
  const navigate=useNavigate();
  const {setName,setUser}=useContext(TrackingContext);
  const token =sessionStorage.getItem("token");
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!referenceIdOrPhoneNumber || !password || !role) {
      toast.success("All Fields Are Required!");
    } else {
      try {
        const response = await axios.post(loginUser, {
          referenceIdOrPhoneNumber,
          password,
          role
        });
        sessionStorage.setItem("token", response.data.accessToken);
        setName("LogOut");
        setUser(response.data); // Set user details in context
        navigate(`/read/${role}`); // Redirect to role-specific route
        
      } catch (error) {
        toast.success(error.message);
      }
    }
  }
  

  useEffect(()=>{
    if(token) navigate("/read");
    // eslint-disable-next-line
  },[token,navigate]);


    return( 
        <div className="box"> 
          <form onSubmit={handleSubmit}> 
          <div className="form-outline mb-4">
          <label className="form-label">Select Role:</label>
          <select
  className="form-control"
  value={role}
  onChange={(e) =>{ 
    setRole(e.target.value);
    }}
>
  <option value="">Select Role</option>
  <option value="farmer">Farmer</option>
  <option value="miller">Miller</option>
  <option value="dealer">Dealer</option>
  <option value="FCI">FCI</option>
  <option value="godown">Godown</option>
  <option value="consumer">Consumer</option>
</select>

        </div>
     
            <div className="form-outline mb-4 my-5"> 
              <label className="form-label">Reference ID/Phone Number</label> 
              <input 
                type="text" 
                id="f2" 
                className="form-control" 
                onChange={(e)=>{setReferenceIdOrPhoneNumber(e.target.value)}} 
              value={referenceIdOrPhoneNumber} 
              /> 
            </div> 
     
            <div className="form-outline mb-4"> 
              <label className="form-label">Password</label> 
              <input 
                type="password" 
                id="f3" 
                className="form-control" 
                onChange={(e)=>{setPassword(e.target.value)}} 
                value={password} 
              /> 
            </div> 
     
            <button 
              type="submit" 
              className="btn btn-danger btn-block" 
            > 
              Login 
            </button> 
             
            <Link to="/" className="btn btn-secondary ms-2"> 
                Back 
            </Link> 
            <div className="d-flex justify-content-end"> 
              <h3>Create New Account</h3> 
              <Link to="/register" className="btn btn-primary btn-block mx-3"> 
                Don't have an account? Create one!! 
              </Link> 
            </div> 
            
          </form> 
           
        </div> 
      );     
}