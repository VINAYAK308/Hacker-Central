// import React from 'react';
// import { motion } from 'framer-motion';

// const Sidebar = ({ activeComponent, setActiveComponent }) => {
//   const menuItems = [
//     { name: 'StudentProfile', label: 'Student Profile' },
//     { name: 'EnrolledCourses', label: 'Enrolled Courses' },
//     { name: 'CourseMaterials', label: 'Course Materials' },
//     { name: 'Exams', label: 'Exams' },
//     { name: 'Certificates', label: 'Certificates' }
//   ];

//   return (
//     <aside className="w-full md:w-1/4 bg-gray-800 p-6 shadow-md">
//       <h2 className="text-white text-2xl font-semibold">Dashboard Menu</h2>
//       <ul className="mt-4 space-y-2">
//         {menuItems.map(item => (
//           <motion.li
//             key={item.name}
//             onClick={() => setActiveComponent(item.name)}
//             className={`text-white py-3 px-4 rounded cursor-pointer transition duration-200 ease-in-out ${
//               activeComponent === item.name ? 'bg-gray-700' : 'hover:bg-gray-700'
//             }`}
//             role="button"
//             tabIndex={0}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter') {
//                 setActiveComponent(item.name);
//               }
//             }}
//             // Framer Motion Animation
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             {item.label}
//           </motion.li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
// src/components/Sidebar.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faFolderOpen, faClipboard, faCertificate } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const menuItems = [
    { name: 'StudentProfile', label: 'Student Profile', icon: faUser },
    { name: 'EnrolledCourses', label: 'Enrolled Courses', icon: faBook },
    { name: 'CourseMaterials', label: 'Course Materials', icon: faFolderOpen },
    { name: 'Exams', label: 'Exams', icon: faClipboard },
    { name: 'Certificates', label: 'Certificates', icon: faCertificate },
  ];

  return (
    <aside className="w-full md:w-1/4 bg-gray-900 p-6 shadow-lg">
      <h2 className="text-white text-2xl font-semibold mb-6">Student Dashboard</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            onClick={() => setActiveComponent(item.name)}
            className={`flex items-center text-white py-3 px-4 rounded-lg cursor-pointer transition duration-200 ease-in-out ${
              activeComponent === item.name ? 'bg-gray-700' : 'hover:bg-gray-800'
            }`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setActiveComponent(item.name);
              }
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3 text-lg" />
            <span className="text-sm font-medium">{item.label}</span>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
