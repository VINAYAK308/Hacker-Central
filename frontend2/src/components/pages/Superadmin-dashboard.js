// import React from 'react';

// const SuperadminDashboard = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <h1 className="text-white text-3xl">Welcome to Superadmin Dashboard!</h1>
//     </div>
//   );
// };

// export default SuperadminDashboard;

// import React from 'react';

// const SuperadminDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-900">
//       <aside className="w-1/4 bg-gray-800 p-4">
//         <h2 className="text-white text-xl">Dashboard Menu</h2>
//         <ul className="mt-4">
//           <li className="text-white py-2 hover:bg-gray-700 rounded">Manage Users</li>
//           <li className="text-white py-2 hover:bg-gray-700 rounded">Manage Courses</li>
//           <li className="text-white py-2 hover:bg-gray-700 rounded">Reports</li>
//           <li className="text-white py-2 hover:bg-gray-700 rounded">Settings</li>
//         </ul>
//       </aside>
//       <main className="flex-grow flex justify-center items-center">
//         <h1 className="text-white text-3xl">Welcome to Superadmin Dashboard!</h1>
//       </main>
//     </div>
//   );
// };

// export default SuperadminDashboard;
// src/App.jsx
// src/components/pages/SuperAdminDashboard.jsx
// import React from 'react';
// import Sidebar from './Sidebar';
// import UserManagement from './UserManagement';
// import CourseManagement from './CourseManagement';
// import AdminManagement from './AdminManagement';
// import Reporting from './Reporting';
// import Settings from './Settings';
// import SecurityManagement from './SecurityManagement';
// import FeedbackManagement from './FeedbackManagement';

// function SuperAdminDashboard() {
//   return (
//     <div className="flex h-screen bg-black text-white">
//       <Sidebar />
//       <div className="flex-1 p-6 overflow-y-auto">
//         <UserManagement />
//         <CourseManagement />
//         <AdminManagement />
//         <Reporting />
//         <Settings />
//         <SecurityManagement />
//         <FeedbackManagement />
//       </div>
//     </div>
//   );
// }

// export default SuperAdminDashboard;
// import React from 'react';

// const Sidebar = ({ setActiveComponent }) => {
//   return (
//     <aside className="w-1/4 bg-gray-800 p-4">
//       <h2 className="text-white text-xl">Dashboard Menu</h2>
//       <ul className="mt-4">
//         <li onClick={() => setActiveComponent('UserManagement')} className="text-white py-2 hover:bg-gray-700 rounded cursor-pointer">
//           Manage Users
//         </li>
//         <li onClick={() => setActiveComponent('CourseManagement')} className="text-white py-2 hover:bg-gray-700 rounded cursor-pointer">
//           Manage Courses
//         </li>
//         <li onClick={() => setActiveComponent('Reporting')} className="text-white py-2 hover:bg-gray-700 rounded cursor-pointer">
//           Reports
//         </li>
//         <li onClick={() => setActiveComponent('Settings')} className="text-white py-2 hover:bg-gray-700 rounded cursor-pointer">
//           Settings
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useState, Suspense, lazy } from 'react';
import Sidebar from './Sidebar';
import ErrorBoundary from './ErrorBoundary'; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Custom error boundary component

// Lazy load components
const UserManagement = lazy(() => import('./UserManagement'));
const CourseManagement = lazy(() => import('./CourseManagement'));
const AdminManagement = lazy(() => import('./AdminManagement'));
const Reporting = lazy(() => import('./Reporting'));
const Settings = lazy(() => import('./Settings'));

const SuperadminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('DashboardHome');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'UserManagement':
        return <UserManagement />;
      case 'CourseManagement':
        return <CourseManagement />;
      case 'AdminManagement':
        return <AdminManagement />;
      case 'Reporting':
        return <Reporting />;
      case 'Settings':
        return <Settings />;
      default:
        return <div className="text-white text-2xl">Welcome to Superadmin Dashboard!</div>;
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user session (you can also clear local storage, session storage, or cookies based on your setup)
    localStorage.removeItem('user'); // Adjust the key as per your application logic
    sessionStorage.removeItem('user'); // You may also clear session storage if you're using it
    navigate('/dashboard'); // Redirect to the login page after logout
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
       <motion.button
  onClick={handleLogout}
  className="bg-red-600 mt-[80px] text-white w-32 h-10 rounded-lg absolute top-6 right-6 cursor-pointer hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 shadow-md"
  variants={buttonVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
>
  <span className="text-xl font-semibold">Logout</span>
</motion.button>
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <main className="flex-1 p-6 overflow-y-auto">
        <ErrorBoundary>
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            {renderComponent()}
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default SuperadminDashboard;
