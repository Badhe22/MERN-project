// components/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="bg-yellow-400 text-black p-4 w-64 flex flex-col justify-between h-screen">
  <div className="mb-6 bg-yellow-400 p-1">
    <h3 className="text-xl font-bold mb-2">Admin Panel</h3>
    <ul>
      <li>
        <Link to="/admin/categories" className="block py-4 mb-2 border-b border-gray-600">Categories</Link>
      </li>
      <li>
        <Link to="/admin/products" className="block py-4 border-b border-gray-600">Products</Link>
      </li>
      <li>
        <Link to="/admin/order" className="block py-4 border-b border-gray-600 mt-4">Orders</Link>
      </li>
    </ul>
  </div>
 
</aside>

  );
}

export default AdminSidebar;
