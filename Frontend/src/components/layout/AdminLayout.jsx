import React, { Fragment } from 'react';
import AdminSidebar from '../../adminside/AdminSidebar';
import AdminFooter from '../../adminside/AdminFooter';

const AdminLayout = ({ children }) => {
  return (
    <Fragment>
      <section className="flex bg-gray-100">
        <AdminSidebar />
        <div className="w-full md:w-11/12 h-full">
          {/* All Children pass from here */}
          {children}
        </div>
      </section>
      
    </Fragment>
  );
};

export default AdminLayout;
