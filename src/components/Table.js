import React from 'react';

export const Table = ({ allShipmentsdata }) => {

  const convertTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    
    return dataTime;
  };

  console.log(allShipmentsdata);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-600 mt-2">
            All the orders placed can be seen here.
          </h3>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sender</th>
              <th scope="col">Receiver</th>
              <th scope="col">Pickup Time</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Delivery Time</th>
              <th scope="col">Paid</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allShipmentsdata?.map((shipment, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{shipment.sender}</td>
                <td>{shipment.receiver}</td>
                <td>{convertTime(shipment.pickupTime)}</td>
                <td>{shipment.distance} quintals</td>
                <td>{shipment.price}</td>
                <td>{shipment.deliveryTime}</td>
                <td>{shipment.isPaid ? "Completed" : "Not Complete"}</td>
                <td>
                  {shipment.status === 0
                    ? "Pending"
                    : shipment.status === 1
                    ? "IN_TRANSIT"
                    : "Delivered"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
