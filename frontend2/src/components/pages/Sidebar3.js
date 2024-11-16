// Sidebar3.js

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaChalkboardTeacher, FaTasks, FaHome } from 'react-icons/fa';

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const menuItems = [
    { name: 'DashboardHome', label: 'Home', icon: <FaHome /> },
    { name: 'UserManagement', label: 'User Management', icon: <FaUser /> },
    { name: 'CourseManagement', label: 'Course Management', icon: <FaChalkboardTeacher /> },
    { name: 'AdminManagement', label: 'Course Assignment', icon: <FaTasks /> },
  ];

  const handleMenuClick = (name) => {
    setActiveComponent(name);
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, color: '#4b6cb7' }, // Example hover effect with scaling and color change
  };

  return (
    <div className="bg-gray-800 w-64 h-full text-white flex flex-col items-center py-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <nav className="flex flex-col w-full">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => handleMenuClick(item.name)}
            className={`flex items-center w-full px-6 py-4 my-2 rounded-lg text-lg font-medium transition-all duration-200 ${
              activeComponent === item.name ? 'bg-gray-700 text-blue-400' : 'text-gray-300'
            }`}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={itemVariants}
          >
            <span className="mr-4">{item.icon}</span>
            {item.label}
          </motion.button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
