// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideMenu from './user-dashboard'; // Adjust the path as necessary

const Layout = () => {
  return (
    <div className="flex">
      <LeftSideMenu />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* This is where the page content will be rendered */}
      </div>
    </div>
  );
};

export default Layout;
