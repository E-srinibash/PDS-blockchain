import React, { useContext } from 'react';
import { TrackingContext } from '../Context/TrackingContext.js';
import {Nav3} from "./index.js";

export const Dashbar = () => {
  const { currentUser,connectWallet, user } = useContext(TrackingContext);
  console.log(user);

  const handleConnectWallet = () => {
    connectWallet()
      .then((response) => {
        console.log(response); // Log response from connectWallet function
      })
      .catch((error) => {
        console.error("Error connecting wallet:", error); // Log any errors
      });
  };

  return (
    <div>
      <div className="wallet">
            {currentUser ? (
              <p className="btn btn-primary flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                {currentUser.slice(0, 25)}..
              </p>
            ) : (
              <button
                onClick={() => handleConnectWallet()}
                className="btn btn-primary flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Connect Wallet
                <Nav3 />
              </button>
            )}
          </div>
      <div className="dashbar">
        <h2>User Dashboard</h2>
        {user && (
          <div>
            <p>Role: {user.role}</p>
            <p>Name: {user.username}</p>
            <p>Reference ID: {user.referenceID}</p>
          </div>
        )}
      </div>
    </div>
  );
};
