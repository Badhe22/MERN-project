// components/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="bg-violet-800 text-black p-4 ">
      <div className="mb-6 bg-violet-800 p-1">
        <h3 className="text-xl font-bold mb-2">Admin Panel</h3>
        <ul>
          <li>
            <Link to="/admin/categories" className="block py-2 border-b border-gray-600">Categories</Link>
          </li>
          <li>
            <Link to="/admin/products" className="block py-2 border-b border-gray-600">Products</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default AdminSidebar;
