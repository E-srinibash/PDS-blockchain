import React, { useContext, useState, useEffect } from 'react'; // Import useContext, useState, and useEffect
import { Dashbar, Table } from "../../components/index.js";
import { StartOrder } from '../../components/Button/index.js';
import { TrackingContext } from '../../Context/TrackingContext.js';

export const MillerDashboard = () => {
  const { getAllShipment } = useContext(TrackingContext); // Get getAllShipment from the context

  // Define state to hold shipment data
  const [allShipmentsdata, setAllShipmentsdata] = useState([]);

  // Fetch all shipments data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shipmentsData = await getAllShipment();
        setAllShipmentsdata(shipmentsData);
      } catch (error) {
        console.log("Error fetching shipments data:", error);
      }
    };

    fetchData();
  }, [getAllShipment]); // Run this effect whenever getAllShipment changes

  return (
    <div>
      <h1>MILLER</h1>
      <Dashbar />
      <StartOrder />
      <Table allShipmentsdata={allShipmentsdata} /> {/* Pass allShipmentsdata to the Table component */}
    </div>
  );
};
