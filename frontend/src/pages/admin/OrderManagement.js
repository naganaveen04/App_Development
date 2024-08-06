// src/pages/admin/OrderManagement.js

import React, { useState, useEffect } from 'react';
import './OrderManagement.css'; // Create this CSS file for styling

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Fetch orders from the backend or use a dummy data
    const fetchOrders = async () => {
      // Replace this with actual data fetching logic
      const dummyOrders = [
        { id: 1, customerName: 'John Doe', total: 100, status: 'Pending' },
        { id: 2, customerName: 'Karthik', total: 200, status: 'Shipped' },
        { id: 3, customerName: 'Jane Smith', total: 150, status: 'Cancelled' },
        { id: 4, customerName: 'Dinakar', total: 300, status: 'Delivered' },
        { id: 5, customerName: 'Anand', total: 500, status: 'Shipped' },
        { id: 6, customerName: 'Gowtham', total: 200, status: 'Pending' },
        { id: 7, customerName: 'Johnny', total: 225, status: 'Delivered' },
      ];
      setOrders(dummyOrders);
    };
    
    fetchOrders();
  }, []);
  
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="order-management">
      <h1>User's Order Information</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <select
                  value={order.status}
                  onChange={e => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
