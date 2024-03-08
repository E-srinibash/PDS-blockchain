import React, { useContext, useState } from 'react';
import { TrackingContext } from '../../Context/TrackingContext.js'; // Update the path accordingly
import { CompleteShipment } from '../CompleteShipment.js'; // Import CompleteShipment component

export const CompleteOrder = () => {
  const { completeShipment } = useContext(TrackingContext); // Access completeShipment function from TrackingContext
  const [completeModal, setCompleteModal] = useState(false); // State to control modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setCompleteModal(!completeModal);
  };

  // Function to handle completing shipment
  const handleCompleteShipment = async () => {
    try {
      const result = await completeShipment({ receiver: 'Receiver Name', index: 1 }); // Example usage
      console.log(result); // Handle the result if needed
    } catch (error) {
      console.error('Error completing shipment:', error);
    }
  };

  // Render CompleteOrder component
  return (
    <div>
      <div className="order-btn">
        {/* Button to toggle modal */}
        <button type="button" className="custom-button" onClick={toggleModal}>Complete Order</button>
      </div>
      {/* Render CompleteShipment component and pass necessary props */}
      <CompleteShipment 
        completeModal={completeModal} 
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
    </div>
  );
};
