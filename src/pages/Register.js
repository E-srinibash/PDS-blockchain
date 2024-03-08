import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { register } from "../operations/config.js";

export const Register = () => {  
    
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message,setMessage]=useState("")
   
  const time=(ms)=>{
    setInterval(()=>{
      setMessage("");
    },ms)
   }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("Form data:", {
      username,
      email,
      password,
      role,
      dob,
      phoneNumber,
    });
    if(!username || !email || !password || !role || !dob || !phoneNumber){
    setMessage("All Fields Are Required!")
    time(3000)
    }
    else{
      try{
        if (role === "") {
          setMessage("Please select a role");
          time(3000);
          return;
      }
        const response=await axios.post(register,{
            username,
            email,
            password,
            role,
            dob,
            phoneNumber,
        })
        setMessage(response.data.message)
        time(3000)
        setUsername("");
        setEmail("");
        setPassword("");
        setRole("");
        setDob("");
        setPhoneNumber("");
      }catch(err){
        setMessage(err.response.data.message)
        time(3000)
      }
    }
  }
  
    return (
      <div className="box">
        <form onSubmit={handleSubmit}>

        <div className="form-outline mb-4">
          <label className="form-label">Select Role:</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="farmer">Farmer</option>
            <option value="miller">Miller</option>
            <option value="dealer">Dealer</option>
            <option value="FCI">FCI</option>
            <option value="godown">Godown</option>
            <option value="consumer">Consumer</option>
          </select>
        </div>
  
          <div className="form-outline mb-4 my-5">
            <label className="form-label">User Name</label>
            <input
              type="text"
              id="f1"
              className="form-control"
              onChange={(e)=>{setUsername(e.target.value)}}
              value={username}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </div>
  
          <div className="form-outline mb-4">
            <label className="form-label">Email address</label>
            <input
              type="text"
              id="f2"
              className="form-control"
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
              
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
  
          <div className="d-flex justify-content-start gap-2"> 
            <button
              type="submit"
              className="btn btn-danger btn-block mb-4"
            >
              Register
            </button>
            <Link to="/login" className="btn btn-secondary h-25">
                Back
            </Link>
            </div> 
            {
              message &&
              <div className="alert alert-warning mt-2" role="alert">
                {message}
              </div>
            }
        </form>
      </div>
    );
  };