import React, { useContext, useState, useEffect } from 'react'; // Import useState and useEffect
import { Dashbar, Table } from "../../components/index.js";
import { CreateOrder } from '../../components/Button/index.js';
import { TrackingContext } from '../../Context/TrackingContext.js';

export const FarmerDashboard = () => {
  const { createShipment, getAllShipment } = useContext(TrackingContext); // Get createShipment and getAllShipment from the context
  
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
      <h1>FARMER</h1>
      <Dashbar />
      <CreateOrder createShipment={createShipment} />
      <Table allShipmentsdata={allShipmentsdata} /> {/* Pass allShipmentsdata to the Table component */}
    </div>
  );
};

