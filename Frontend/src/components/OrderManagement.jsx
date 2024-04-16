import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleStatusUpdate = (id, status) => {
    axios.put(`/api/orders/${id}/update-status`, { status })
      .then(response => {
        const updatedOrders = orders.map(order => order._id === id ? response.data : order);
        setOrders(updatedOrders);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Order Management</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Customer: {order.customer.name}</p>
            <p>Status: {order.status}</p>
            <select value={order.status} onChange={e => handleStatusUpdate(order._id, e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
