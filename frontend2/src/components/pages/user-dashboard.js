// import React from 'react';

// const UserDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg text-white">
//         <h1 className="text-4xl font-bold text-blue-400 mb-6">Welcome to User Dashboard</h1>
//         <p className="text-lg mb-4">
//           This is the main hub for users. Here, you can access your profile, manage your account, view reports, and perform other user-related activities.
//         </p>
//         <ul className="list-disc list-inside">
//           <li>View your personal details</li>
//           <li>Manage your settings</li>
//           <li>Access personalized content</li>
//           <li>Track your progress</li>
//         </ul>
//         <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//           Explore More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

// import React, { useState } from 'react';
// import Profile from './StudentProfile';
// import EnrolledCourses from './EnrolledCourses';
// import CourseMaterials from './CourseMaterials';
// import Exams from './Exams';
// import Certificates from './Certificates';

// const StudentDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Profile');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Profile':
//         return <Profile />;
//       case 'EnrolledCourses':
//         return <EnrolledCourses />;
//       case 'CourseMaterials':
//         return <CourseMaterials />;
//       case 'Exams':
//         return <Exams />;
//       case 'Certificates':
//         return <Certificates />;
//       default:
//         return <Profile />;
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Menu Boxes */}
//       <div className="w-full md:w-1/4 bg-gray-500 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Profile' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('Profile')}
//         >
//           <h3 className="font-bold text-lg">Profile</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'EnrolledCourses' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('EnrolledCourses')}
//         >
//           <h3 className="font-bold text-lg">Enrolled Courses</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'CourseMaterials' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('CourseMaterials')}
//         >
//           <h3 className="font-bold text-lg">Course Materials</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Exams' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('Exams')}
//         >
//           <h3 className="font-bold text-lg">Exams</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Certificates' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('Certificates')}
//         >
//           <h3 className="font-bold text-lg">Certificates</h3>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4 p-6">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

// import React, { useState } from 'react';
// import Profile from './StudentProfile';
// import EnrolledCourses from './EnrolledCourses';
// import CourseMaterials from './CourseMaterials';
// import Exams from './Exams';
// import Certificates from './Certificates';

// const StudentDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Profile');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Profile':
//         return <Profile />;
//       case 'EnrolledCourses':
//         return <EnrolledCourses />;
//       case 'CourseMaterials':
//         return <CourseMaterials />;
//       case 'Exams':
//         return <Exams />;
//       case 'Certificates':
//         return <Certificates />;
//       default:
//         return <Profile />;
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Menu Boxes */}
//       <div className="w-full md:w-1/4 bg-gray-800 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Profile' ? 'bg-blue-600' : 'bg-gray-700'
//           }`}
//           onClick={() => setActiveSection('Profile')}
//         >
//           <h3 className="font-bold text-lg">Profile</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'EnrolledCourses' ? 'bg-blue-600' : 'bg-gray-700'
//           }`}
//           onClick={() => setActiveSection('EnrolledCourses')}
//         >
//           <h3 className="font-bold text-lg">Enrolled Courses</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'CourseMaterials' ? 'bg-blue-600' : 'bg-gray-700'
//           }`}
//           onClick={() => setActiveSection('CourseMaterials')}
//         >
//           <h3 className="font-bold text-lg">Course Materials</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Exams' ? 'bg-blue-600' : 'bg-gray-700'
//           }`}
//           onClick={() => setActiveSection('Exams')}
//         >
//           <h3 className="font-bold text-lg">Exams</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Certificates' ? 'bg-blue-600' : 'bg-gray-700'
//           }`}
//           onClick={() => setActiveSection('Certificates')}
//         >
//           <h3 className="font-bold text-lg">Certificates</h3>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4 p-6 bg-gray-900">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;



// import React, { useState } from 'react';
// import Profile from './StudentProfile';
// import EnrolledCourses from './EnrolledCourses';
// import CourseMaterials from './CourseMaterials';
// import Exams from './Exams';
// import Certificates from './Certificates';

// const StudentDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Profile');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Profile':
//         return <Profile />;
//       case 'EnrolledCourses':
//         return <EnrolledCourses />;
//       case 'CourseMaterials':
//         return <CourseMaterials />;
//       case 'Exams':
//         return <Exams />;
//       case 'Certificates':
//         return <Certificates />;
//       default:
//         return <Profile />;
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
//       {/* Menu Sidebar */}
//       <div className="w-full md:w-1/4 bg-gray-800 p-6 grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
//         <div
//           className={`p-4 md:p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Profile'
//               ? 'bg-blue-700 text-white shadow-lg'
//               : 'bg-gray-700 text-blue-300 hover:bg-gray-600'
//           }`}
//           onClick={() => setActiveSection('Profile')}
//           role="button"
//           aria-label="Profile"
//         >
//           <h3 className="font-semibold text-lg md:text-xl ">Profile</h3>
//         </div>
//         <div
//           className={`p-4 md:p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'EnrolledCourses'
//               ? 'bg-blue-700 text-white shadow-lg'
//               : 'bg-gray-700 text-blue-300 hover:bg-gray-600'
//           }`}
//           onClick={() => setActiveSection('EnrolledCourses')}
//           role="button"
//           aria-label="Enrolled Courses"
//         >
//           <h3 className="font-semibold text-lg md:text-xl">Enrolled Courses</h3>
//         </div>
//         <div
//           className={`p-4 md:p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'CourseMaterials'
//               ? 'bg-blue-700 text-white shadow-lg'
//               : 'bg-gray-700 text-blue-300 hover:bg-gray-600'
//           }`}
//           onClick={() => setActiveSection('CourseMaterials')}
//           role="button"
//           aria-label="Course Materials"
//         >
//           <h3 className="font-semibold text-lg md:text-xl">Course Materials</h3>
//         </div>
//         <div
//           className={`p-4 md:p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Exams'
//               ? 'bg-blue-700 text-white shadow-lg'
//               : 'bg-gray-700 text-blue-300 hover:bg-gray-600'
//           }`}
//           onClick={() => setActiveSection('Exams')}
//           role="button"
//           aria-label="Exams"
//         >
//           <h3 className="font-semibold text-lg md:text-xl">Exams</h3>
//         </div>
//         <div
//           className={`p-4 md:p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Certificates'
//               ? 'bg-blue-700 text-white shadow-lg'
//               : 'bg-gray-700 text-blue-300 hover:bg-gray-600'
//           }`}
//           onClick={() => setActiveSection('Certificates')}
//           role="button"
//           aria-label="Certificates"
//         >
//           <h3 className="font-semibold text-lg md:text-xl">Certificates</h3>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="w-full md:w-3/4 p-6 bg-gray-900 text-white">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;




// src/components/StudentDashboard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const StudentDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
//       <h1 className="text-2xl font-bold text-white mb-6">Student Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
//         <Link to="/pages/StudentProfile">
//           <motion.div
//             className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-lg font-semibold text-blue-300">Profile</h2>
//             <p className="text-gray-300">View and update your profile information.</p>
//           </motion.div>
//         </Link>
//         <Link to="/pages/EnrolledCourses">
//           <motion.div
//             className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-lg font-semibold text-blue-300">Enrolled Courses</h2>
//             <p className="text-gray-300">View your enrolled courses and progress.</p>
//           </motion.div>
//         </Link>
//         <Link to="/components/pages/CourseMaterials">
//           <motion.div
//             className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-lg font-semibold text-blue-300">Course Materials</h2>
//             <p className="text-gray-300">Access course materials and resources.</p>
//           </motion.div>
//         </Link>
//         <Link to="/components/pages/Exams">
//           <motion.div
//             className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-lg font-semibold text-blue-300">Exams</h2>
//             <p className="text-gray-300">View upcoming exams and your results.</p>
//           </motion.div>
//         </Link>
//         <Link to="//pages/Certificates">
//           <motion.div
//             className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h2 className="text-lg font-semibold text-blue-300">Certificates</h2>
//             <p className="text-gray-300">View and download your certificates.</p>
//           </motion.div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaUser } from 'react-icons/fa';

// const StudentDashboard = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="min-h-screen bg-gray-800 flex flex-col items-center p-6">
//       <h1 className="text-2xl font-bold text-white mb-6">Student Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
//         {/* <motion.button
//           className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full text-left"
//           whileHover={{ scale: 1.05 }}
//           onClick={() => handleNavigation('/pages/StudentProfile')}
//         >
//           <h2 className="text-lg font-semibold text-blue-300">Profile</h2>
//           <p className="text-gray-300">View and update your profile information.</p>
//         </motion.button> */}
        


// <motion.div
//   className="bg-gray-700 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center" // Adjusted padding for better spacing
//   whileHover={{ scale: 1.05 }}
//   onClick={() => handleNavigation('/pages/StudentProfile')}
//   aria-label="View and update your profile information" // Added aria-label for accessibility
// >
//   <motion.div 
//     className="text-blue-300 text-2xl mr-3" 
//     whileHover={{ color: '#60A5FA' }} // Change color on hover
//   >
//     <FaUser />
//   </motion.div>
//   <div>
//     <h2 className="text-lg font-semibold text-blue-300">Profile</h2>
//     <p className="text-gray-300">View and update your profile information.</p>
//   </div>
// </motion.div>


//         <motion.button
//           className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full text-left"
//           whileHover={{ scale: 1.05 }}
//           onClick={() => handleNavigation('/pages/EnrolledCourses')}
//         >
//           <h2 className="text-lg font-semibold text-blue-300">Enrolled Courses</h2>
//           <p className="text-gray-300">View your enrolled courses and progress.</p>
//         </motion.button>

//         <motion.button
//           className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full text-left"
//           whileHover={{ scale: 1.05 }}
//           onClick={() => handleNavigation('/components/pages/CourseMaterials')}
//         >
//           <h2 className="text-lg font-semibold text-blue-300">Course Materials</h2>
//           <p className="text-gray-300">Access course materials and resources.</p>
//         </motion.button>

//         <motion.button
//           className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full text-left"
//           whileHover={{ scale: 1.05 }}
//           onClick={() => handleNavigation('/components/pages/Exams')}
//         >
//           <h2 className="text-lg font-semibold text-blue-300">Exams</h2>
//           <p className="text-gray-300">View upcoming exams and your results.</p>
//         </motion.button>

//         <motion.button
//           className="bg-gray-700 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer w-full text-left"
//           whileHover={{ scale: 1.05 }}
//           onClick={() => handleNavigation('/components/pages/Certificates')}
//         >
//           <h2 className="text-lg font-semibold text-blue-300">Certificates</h2>
//           <p className="text-gray-300">View and download your certificates.</p>
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaUser, FaBook, FaCertificate, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

// const LeftSideMenu = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const menuItems = [
//     { 
//       label: 'Profile', 
//       icon: <FaUser />, 
//       path: '/pages/StudentProfile', 
//       description: 'View and update your profile information' 
//     },
//     { 
//       label: 'Enrolled Courses', 
//       icon: <FaGraduationCap />, 
//       path: '/pages/EnrolledCourses', 
//       description: 'View your enrolled courses and progress' 
//     },
//     { 
//       label: 'Course Materials', 
//       icon: <FaBook />, 
//       path: '/components/pages/CourseMaterials', 
//       description: 'Access course materials and resources' 
//     },
//     { 
//       label: 'Exams', 
//       icon: <FaClipboardList />, 
//       path: '/components/pages/Exams', 
//       description: 'View upcoming exams and your results' 
//     },
//     { 
//       label: 'Certificates', 
//       icon: <FaCertificate />, 
//       path: '/components/pages/Certificates', 
//       description: 'View and download your certificates' 
//     },
//   ];

//   return (
//     <div className="flex flex-col w-64 bg-black-900 text-white p-6 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
//       <div className="space-y-4">
//         {menuItems.map((item, index) => (
//           <motion.button
//             key={index}
//             className="flex items-center w-full p-4 rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => handleNavigation(item.path)}
//             aria-label={item.label} // Accessibility label
//           >
//             <motion.div
//               className="text-blue-300 text-xl mr-4"
//               whileHover={{ color: '#60A5FA' }} // Change color on hover
//             >
//               {item.icon}
//             </motion.div>
//             <div className="text-left">
//               <h2 className="text-lg font-semibold text-blue-300">{item.label}</h2>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeftSideMenu;

// import React, { useState } from 'react'; // Import useState
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaUser, FaBook, FaCertificate, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

// const LeftSideMenu = () => {
//   const navigate = useNavigate();
  
//   // State to track the active menu item
//   const [activeMenu, setActiveMenu] = useState('/pages/StudentProfile'); // Default active item

//   const handleNavigation = (path) => {
//     setActiveMenu(path); // Set active menu when navigating
//     navigate(path);
//   };

//   const menuItems = [
//     { 
//       label: 'Profile', 
//       icon: <FaUser />, 
//       path: '/pages/StudentProfile', 
//       description: 'View and update your profile information' 
//     },
//     { 
//       label: 'Enrolled Courses', 
//       icon: <FaGraduationCap />, 
//       path: '/pages/EnrolledCourses', 
//       description: 'View your enrolled courses and progress' 
//     },
//     { 
//       label: 'Course Materials', 
//       icon: <FaBook />, 
//       path: '/components/pages/CourseMaterials', 
//       description: 'Access course materials and resources' 
//     },
//     { 
//       label: 'Exams', 
//       icon: <FaClipboardList />, 
//       path: '/components/pages/Exams', 
//       description: 'View upcoming exams and your results' 
//     },
//     { 
//       label: 'Certificates', 
//       icon: <FaCertificate />, 
//       path: '/components/pages/Certificates', 
//       description: 'View and download your certificates' 
//     },
//   ];

//   return (
//     <div className="flex flex-col w-64 bg-black text-white p-6 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
//       <div className="space-y-4">
//         {menuItems.map((item, index) => (
//           <motion.button
//             key={index}
//             className={`flex items-center w-full p-4 rounded-lg ${activeMenu === item.path ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-gray-700 cursor-pointer transition-all duration-300`}
//             whileHover={{ scale: 1.05 }}
//             onClick={() => handleNavigation(item.path)}
//             aria-label={item.label} // Accessibility label
//             role="button" // Accessibility role
//             tabIndex="0" // Keyboard navigation
//           >
//             <motion.div
//               className="text-blue-300 text-xl mr-4"
//               whileHover={{ color: '#60A5FA' }} // Change color on hover
//             >
//               {item.icon}
//             </motion.div>
//             <div className="text-left">
//               <h2 className="text-lg font-semibold text-blue-300">{item.label}</h2>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeftSideMenu;

// import React, { useState } from 'react'; // Import useState
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaUser, FaBook, FaCertificate, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

// const LeftSideMenu = () => {
//   const navigate = useNavigate();
  
//   // State to track the active menu item 
//   const [activeMenu, setActiveMenu] = useState('/pages/StudentProfile'); // Default active item

//   const handleNavigation = (path) => {
//     setActiveMenu(path); // Set active menu when navigating
//     navigate(path);
//   };

//   const menuItems = [
//     { 
//       label: 'Profile', 
//       icon: <FaUser />, 
//       path: '/pages/StudentProfile', 
//       description: 'View and update your profile information' 
//     },
//     { 
//       label: 'Enrolled Courses', 
//       icon: <FaGraduationCap />, 
//       path: '/pages/EnrolledCourses', 
//       description: 'View your enrolled courses and progress' 
//     },
//     { 
//       label: 'Course Materials', 
//       icon: <FaBook />, 
//       path: '/components/pages/CourseMaterials', 
//       description: 'Access course materials and resources' 
//     },
//     { 
//       label: 'Exams', 
//       icon: <FaClipboardList />, 
//       path: '/components/pages/Exams', 
//       description: 'View upcoming exams and your results' 
//     },
//     { 
//       label: 'Certificates', 
//       icon: <FaCertificate />, 
//       path: '/components/pages/Certificates', 
//       description: 'View and download your certificates' 
//     },
//   ];

//   return (
//     <div className="flex flex-col w-64 bg-black text-white p-6 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
//       <div className="space-y-4">
//         {menuItems.map((item, index) => (
//           <motion.button
//             key={index}
//             className={`flex items-center w-full p-4 rounded-lg ${activeMenu === item.path ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-gray-700 cursor-pointer transition-all duration-300`}
//             whileHover={{ scale: 1.05 }}
//             onClick={() => handleNavigation(item.path)}
//             aria-label={item.label} // Accessibility label
//             role="button" // Accessibility role
//             tabIndex="0" // Keyboard navigation
//           >
//             <motion.div
//               className="text-blue-300 text-xl mr-4"
//               whileHover={{ color: '#60A5FA' }} // Change color on hover
//             >
//               {item.icon}
//             </motion.div>
//             <div className="text-left">
//               <h2 className="text-lg font-semibold text-blue-300">{item.label}</h2>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeftSideMenu;


// import React, { useState } from 'react'; // Import useState
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaUser, FaBook, FaCertificate, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

// const Sidebar = () => {
//   const navigate = useNavigate();
  
//   // State to track the active menu item 
//   const [activeMenu, setActiveMenu] = useState('/pages/StudentProfile'); // Default active item

//   const handleNavigation = (path) => {
//     setActiveMenu(path); // Set active menu when navigating
//     navigate(path);
//   };

//   const menuItems = [
//     { 
//       label: 'Profile', 
//       icon: <FaUser />, 
//       path: '/pages/StudentProfile', 
//       description: 'View and update your profile information' 
//     },
//     { 
//       label: 'Enrolled Courses', 
//       icon: <FaGraduationCap />, 
//       path: '/pages/EnrolledCourses', 
//       description: 'View your enrolled courses and progress' 
//     },
//     { 
//       label: 'Course Materials', 
//       icon: <FaBook />, 
//       path: '/components/pages/CourseMaterials', 
//       description: 'Access course materials and resources' 
//     },
//     { 
//       label: 'Exams', 
//       icon: <FaClipboardList />, 
//       path: '/components/pages/Exams', 
//       description: 'View upcoming exams and your results' 
//     },
//     { 
//       label: 'Certificates', 
//       icon: <FaCertificate />, 
//       path: '/components/pages/Certificates', 
//       description: 'View and download your certificates' 
//     },
//   ];

//   return (
//     <div className="flex flex-col w-64 bg-black text-white p-6 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
//       <div className="space-y-4">
//         {menuItems.map((item, index) => (
//           <motion.button
//             key={index}
//             className={`flex items-center w-full p-4 rounded-lg ${activeMenu === item.path ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-gray-700 cursor-pointer transition-all duration-300`}
//             whileHover={{ scale: 1.05 }}
//             onClick={() => handleNavigation(item.path)}
//             aria-label={item.label} // Accessibility label
//             role="button" // Accessibility role
//             tabIndex="0" // Keyboard navigation
//           >
//             <motion.div
//               className="text-blue-300 text-xl mr-4"
//               whileHover={{ color: '#60A5FA' }} // Change color on hover
//             >
//               {item.icon}
//             </motion.div>
//             <div className="text-left">
//               <h2 className="text-lg font-semibold text-blue-300">{item.label}</h2>
//               <p className="text-gray-300 text-sm">{item.description}</p>
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, Suspense, lazy } from 'react';
import Sidebar from './Sidebar2';
import ErrorBoundary from './ErrorBoundary'; // Custom error boundary component
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Lazy load components
const StudentProfile = lazy(() => import('./StudentProfile'));
const EnrolledCourses = lazy(() => import('./EnrolledCourses'));
const CourseMaterials = lazy(() => import('./CourseMaterials'));
const Exams = lazy(() => import('./Exams'));
const Certificates = lazy(() => import('./Certificates'));

const SuperadminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('DashboardHome');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'StudentProfile':
        return <StudentProfile />;
      case 'EnrolledCourses':
        return < EnrolledCourses/>;
      case 'CourseMaterials':
        return <CourseMaterials />;
      case 'Exams':
        return <Exams />;
      case 'Certificates':
        return <Certificates />;
      default:
        return <div className="text-white text-2xl">Welcome to Student Dashboard!</div>;
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
    <div className="flex h-screen bg-gray-800 text-white">
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

