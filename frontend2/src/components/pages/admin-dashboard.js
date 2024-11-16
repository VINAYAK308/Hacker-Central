

// src/components/Menu.jsx
  // import React from "react";
  // import { useNavigate } from "react-router-dom";
  // import { motion } from "framer-motion";

  // const Menu = () => {
  //   const navigate = useNavigate();

  //   const handleNavigation = (path) => {
  //     navigate(path);
  //   };

  //   // Animation variants for buttons
  //   const buttonVariants = {
  //     hidden: { opacity: 0, y: 20 },
  //     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  //     hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  //   };

  //   return (
  //     <div className="flex flex-col justify-center items-center h-screen bg-gray-900 px-6">
  //       {/* Admin Dashboard Heading */}
  //       <motion.h1
  //         className="text-5xl font-bold text-white mb-12"
  //         initial={{ opacity: 0, y: -50 }}
  //         animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
  //       >
  //         Admin Dashboard
  //       </motion.h1>

  //       {/* Button Grid */}
  //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full">
  //         {/* Course Management Button */}
  //         <motion.button
  //           onClick={() => handleNavigation("/course-management.jsx")}
  //           className="bg-gray-700 text-white w-full h-40 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
  //           variants={buttonVariants}
  //           initial="hidden"
  //           animate="visible"
  //           whileHover="hover"
  //         >
  //           <span className="text-xl font-semibold">Course Management</span>
  //         </motion.button>

  //         {/* User Management Button */}
  //         <motion.button
  //           onClick={() => handleNavigation("/user-management.jsx")}
  //           className="bg-gray-700 text-white w-full h-40 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
  //           variants={buttonVariants}
  //           initial="hidden"
  //           animate="visible"
  //           whileHover="hover"
  //         >
  //           <span className="text-xl font-semibold">User Management</span>
  //         </motion.button>

  //         {/* Course Assignment Button */}
  //         <motion.button
  //           onClick={() => handleNavigation("/course-assignment.jsx")}
  //           className="bg-gray-700 text-white w-full h-40 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
  //           variants={buttonVariants}
  //           initial="hidden"
  //           animate="visible"
  //           whileHover="hover"
  //         >
  //           <span className="text-xl font-semibold">Course Assignment</span>
  //         </motion.button>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Menu;
//   import React from "react";
//   import { useNavigate } from "react-router-dom";
//   import { motion } from "framer-motion";
  
//   const Menu = () => {
//     const navigate = useNavigate();
  
//     const handleNavigation = (path) => {
//       navigate(path);
//     };
  
//     const handleLogout = () => {
//       // Clear user session (you can also clear local storage, session storage, or cookies based on your setup)
//       localStorage.removeItem('user'); // Adjust the key as per your application logic
//       sessionStorage.removeItem('user'); // You may also clear session storage if you're using it
//       navigate('/dashboard'); // Redirect to the login page after logout
//     };
  
//     // Animation variants for buttons
//     const buttonVariants = {
//       hidden: { opacity: 0, y: 20 },
//       visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//       hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
//     };
  
//     return (
//       <div className="flex flex-col justify-center items-center h-screen bg-gray-900 px-6 relative">
//         {/* Logout Button Positioned at Top-Right */}
//         <motion.button
//   onClick={handleLogout}
//   className="bg-red-600 text-white w-32 h-12 rounded-lg absolute top-6 right-6 cursor-pointer hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 shadow-md"
//   variants={buttonVariants}
//   initial="hidden"
//   animate="visible"
//   whileHover="hover"
// >
//   <span className="text-xl font-semibold">Logout</span>
// </motion.button>

  
//         {/* Admin Dashboard Heading */}
//         <motion.h1
//           className="text-5xl font-bold text-white mb-12"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
//         >
//           Admin Dashboard
//         </motion.h1>
  
//         {/* Button Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl w-full">
//           {/* Course Management Button */}
//           <motion.button
//             onClick={() => handleNavigation("/course-management")}
//             className="bg-gray-700 text-white w-full h-40 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
//             variants={buttonVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//           >
//             <span className="text-xl font-semibold">Course Management</span>
//           </motion.button>
  
//           {/* User Management Button */}
//           <motion.button
//             onClick={() => handleNavigation("/user-management")}
//             className="bg-gray-700 text-white w-full h-40 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
//             variants={buttonVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//           >
//             <span className="text-xl font-semibold">User Management</span>
//           </motion.button>
  
//           {/* Course Assignment Button */}
//           <motion.button
//             onClick={() => handleNavigation("/course-assignment")}
//             className="bg-gray-700 text-white w-full h-40 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
//             variants={buttonVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//           >
//             <span className="text-xl font-semibold">Course Assignment</span>
//           </motion.button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Menu;
  

import React, { useState, Suspense, lazy } from 'react';
import Sidebar from './Sidebar3';
import ErrorBoundary from './ErrorBoundary'; 
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Custom error boundary component

// Lazy load components
const UserManagement = lazy(() => import('./user-management'));
const CourseManagement = lazy(() => import('./course-management'));
const CourseAssignment = lazy(() => import('./course-assignment'));
// const Reporting = lazy(() => import('./Reporting'));
// const Settings = lazy(() => import('./Settings'));

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('DashboardHome');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'UserManagement':
        return <UserManagement />;
      case 'CourseManagement':
        return <CourseManagement />;
      case 'AdminManagement':
        return <CourseAssignment />;
      // case 'Reporting':
      //   return <Reporting />;
      // case 'Settings':
      //   return <Settings />;
      default:
        return <div className="text-white text-2xl">Welcome to Admin Dashboard!</div>;
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

export default AdminDashboard;
