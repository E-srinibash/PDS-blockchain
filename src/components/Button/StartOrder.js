import React, { useContext, useState } from 'react';
import { TrackingContext } from '../../Context/TrackingContext.js'; // Update the path accordingly
import { StartShipment } from '../StartShipment.js'; // Import StartShipment component

export const StartOrder = () => {
  const { startShipment } = useContext(TrackingContext); // Access startShipment function from TrackingContext
  const [startModal, setStartModal] = useState(false); // State to control modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setStartModal(!startModal);
  };

  // Function to handle starting shipment
  const handleStartShipment = async () => {
    try {
      // Call startShipment function with appropriate data
      const result = await startShipment({ receiver: 'Receiver Name', index: 1 }); // Example usage
      console.log(result); // Handle the result if needed
    } catch (error) {
      console.error('Error starting shipment:', error);
    }
  };

  // Render StartOrder component
  return (
    <div>
      <div className="order-btn">
        {/* Button to toggle modal */}
        <button type="button" className="custom-button" onClick={toggleModal}>Start Order</button>
      </div>
      {/* Render StartShipment component and pass necessary props */}
      <StartShipment 
        startModal={startModal} 
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
    </div>
  );
};
