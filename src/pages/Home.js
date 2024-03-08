import React from "react";
import Grains from "../assets/grsin.jpeg";
import Logo from "../assets/logo.jpeg";

export const Home = () => {
  return (
    <div className="bg-white">
      <h1 className="mt-3 " style={{ textAlign: 'center' }}>WELCOME TO PUBLIC DISTRIBUTION SYSTEM</h1>
      <div className="">
        <img src={Logo} className="mt-1 p-5 mb-3 rounded"></img>
        <img src={Grains} className="mt-1 p-5 mb-3 rounded"></img>
      </div>
    </div>
  );
};
