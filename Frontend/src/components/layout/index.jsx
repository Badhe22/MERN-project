import React, { Fragment } from 'react';
import AdminNavbar from '../../adminside/AdminNavbar';
import AdminSidebar from '../../adminside/AdminSidebar';
import AdminFooter from '../../adminside/AdminFooter';

const AdminLayout = ({ children }) => {
  return (
    <Fragment>
      {/*<AdminNavbar />*/}
      <section className="flex bg-gray-100">
        <AdminSidebar />
        <div className="w-full md:w-11/12 h-full">
          {/* All Children pass from here */}
          {children}
        </div>
      </section>
      {/*<AdminFooter />*/}
    </Fragment>
  );
};

export default AdminLayout;
