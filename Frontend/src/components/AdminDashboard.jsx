// AdminDashboard.jsx

import React from 'react';
import AdminSidebar from '../adminside/AdminSidebar';
import AdminNavbar from '../adminside/AdminNavbar';
import AdminFooter from '../adminside/AdminFooter';

const AdminDashboard = () => {
  return (
    <div className="flex">
      
      <div className="flex flex-col w-full">
       {/* <AdminNavbar />*/} {/* Corrected component name */}
        {/* Main content area for managing categories, products, and orders */}
        <div className="p-4">
          {/* Add your content here */}
          {/*<h2>Admin Dashboard</h2>*/}
        </div>
      
      </div>
    </div>
  );
};

export default AdminDashboard;
