import React, { useState, useEffect } from 'react';
import { Dashbar, Table } from "../../components/index.js";
import { TrackingContext } from '../../Context/TrackingContext.js';

export const FciDashboard = () => {
  // Define state to hold shipment data
  const [allShipmentsdata, setAllShipmentsdata] = useState([]);

  // Fetch shipment data when the component mounts
  useEffect(() => {
    // Function to fetch shipment data
    const fetchShipmentData = async () => {
      try {
        // Fetch the shipment data here (e.g., from an API)
        // Example:
        const response = await fetch('api/shipments');
        if (!response.ok) {
          throw new Error('Failed to fetch shipment data');
        }
        const data = await response.json();
        setAllShipmentsdata(data);
      } catch (error) {
        console.error('Error fetching shipment data:', error);
      }
    };

    // Call the fetchShipmentData function
    fetchShipmentData();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h1>FCI</h1>
      <Dashbar />
      <Table allShipmentsdata={allShipmentsdata} /> {/* Pass allShipmentsdata to the Table component */}
    </div>
  );
};
