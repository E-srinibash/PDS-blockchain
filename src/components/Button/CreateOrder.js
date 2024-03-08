import React, { useState } from 'react';
import { CreateShipment } from '../CreateShipment.js'; // Update the path accordingly

export const CreateOrder = ({ createShipment }) => {
  const [createShipmentModel, setCreateShipmentModel] = useState(false); // State to control the visibility of CreateShipment component

  // Function to handle opening CreateShipment component
  const handleOpenCreateShipment = () => {
    setCreateShipmentModel(true);
  };

  return (
    <div>
      <div className="order-btn">
        <button 
          type="button" 
          className='custom-button' 
          onClick={handleOpenCreateShipment} // Call handleOpenCreateShipment function on button click
        >
          Create Order
        </button>
      </div>
      
      {/* Render CreateShipment component if createShipmentModel is true */}
      {createShipmentModel && (
        <CreateShipment 
          createShipmentModel={createShipmentModel} 
          createShipment={createShipment}
          setCreateShipmentModel={setCreateShipmentModel} 
        />
      )}
    </div>
  );
};
