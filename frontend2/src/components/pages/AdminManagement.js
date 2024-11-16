// src/components/AdminManagement.jsx
// import React from 'react';

// function AdminManagement() {
//   return (
//     <div id="admin-management" className="mb-10">
//       <h2 className="text-xl font-semibold mb-4">Admin Management</h2>
//       <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">Assign Admin</button>
//     </div>
//   );
// }

// export default AdminManagement;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'; // Icons for actions
// import { MdAdminPanelSettings } from 'react-icons/md'; // Icon for Admin role
// import { Tooltip } from 'react-tooltip';

// // Modal Component for assigning admins to cybersecurity courses
// function AssignAdminModal({ isOpen, onClose, onAssign }) {
//   const [course, setCourse] = useState("");

//   const handleAssign = () => {
//     if (course) {
//       onAssign(course);
//       setCourse("");
//       onClose();
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Admin to Cybersecurity Course</h3>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement({ isSuperadmin }) {
//   const [admins, setAdmins] = useState([
//     { id: 1, name: "Ravi Kumar", email: "ravi.kumar@example.com", role: "Admin", course: "Network Security" },
//     { id: 2, name: "Priya Singh", email: "priya.singh@example.com", role: "Admin", course: "Ethical Hacking" },
//     { id: 3, name: "Amit Sharma", email: "amit.sharma@example.com", role: "Admin", course: "Cryptography" },
//     { id: 4, name: "Sunita Verma", email: "sunita.verma@example.com", role: "Admin", course: "Cloud Security" },
//     { id: 5, name: "Rajesh Iyer", email: "rajesh.iyer@example.com", role: "Admin", course: "Incident Response" },
//     { id: 6, name: "Anjali Gupta", email: "anjali.gupta@example.com", role: "Admin", course: "Malware Analysis" },
//     { id: 7, name: "Vikram Mehta", email: "vikram.mehta@example.com", role: "Admin", course: "Penetration Testing" },
//     { id: 8, name: "Sneha Rao", email: "sneha.rao@example.com", role: "Admin", course: "Data Protection" },
//     { id: 9, name: "Deepak Joshi", email: "deepak.joshi@example.com", role: "Admin", course: "Network Defense" },
//     { id: 10, name: "Nisha Nair", email: "nisha.nair@example.com", role: "Admin", course: "Security Auditing" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newAdmin, setNewAdmin] = useState({ name: "", email: "", role: "Admin" });
//   const [successMessage, setSuccessMessage] = useState("");

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleAssignCourse = (course) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === prevAdmins.length
//           ? { ...admin, course }
//           : admin
//       )
//     );
//   };

//   const addAdmin = () => {
//     if (newAdmin.name && newAdmin.email) {
//       setAdmins([
//         ...admins,
//         {
//           id: admins.length + 1,
//           name: newAdmin.name,
//           email: newAdmin.email,
//           role: newAdmin.role,
//           course: "Not assigned"
//         }
//       ]);
//       setNewAdmin({ name: "", email: "", role: "Admin" });
//       setSuccessMessage("New admin added successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
//     }
//   };

//   return (
//     <motion.div
//       id="admin-management"
//       className="mb-10 p-4 bg-gray-900 shadow-md rounded-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-white">Admin Management - Cybersecurity Courses</h2>
//       {isSuperadmin ? (
//         <div>
//           <motion.button
//             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2 mr-2 flex items-center"
//             onClick={toggleModal}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <AiOutlinePlus className="mr-2" />
//             Assign Admin
//           </motion.button>
//           <motion.button
//             className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <MdAdminPanelSettings className="mr-2" />
//             Manage Access Rights
//           </motion.button>

//           <AssignAdminModal isOpen={isModalOpen} onClose={toggleModal} onAssign={handleAssignCourse} />

//           <div className="mt-4 mb-6">
//             <h3 className="text-lg font-semibold mb-2 text-white">Add New Admin</h3>
//             {successMessage && <p className="text-green-400 mb-2">{successMessage}</p>}
//             <div className="flex flex-col space-y-2 mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 value={newAdmin.name}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
//                 className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
//               />
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 value={newAdmin.email}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//                 className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
//               />
//               <select
//                 value={newAdmin.role}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, role: "Admin" })}
//                 className="p-2 border border-gray-600 rounded bg-gray-800 text-white"
//                 disabled
//               >
//                 <option value="Admin">Admin</option>
//               </select>
//               <button
//                 className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-2 flex items-center"
//                 onClick={addAdmin}
//               >
//                 <AiOutlineCheck className="mr-2" />
//                 Add Admin
//               </button>
//             </div>
//           </div>

//           <h3 className="text-lg font-semibold mt-6 mb-3 text-white">Admin List</h3>
//           <motion.table
//             className="w-full border border-gray-700"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <thead>
//               <tr className="bg-gray-800">
//                 <th className="py-2 px-4 border-b text-white">Name</th>
//                 <th className="py-2 px-4 border-b text-white">Email</th>
//                 <th className="py-2 px-4 border-b text-white">Role</th>
//                 <th className="py-2 px-4 border-b text-white">Course</th>
//               </tr>
//             </thead>
//             <tbody>
//               {admins.map((admin, index) => (
//                 <motion.tr
//                   key={admin.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <td className="py-2 px-4 border-b text-white">{admin.name}</td>
//                   <td className="py-2 px-4 border-b text-white">{admin.email}</td>
//                   <td className="py-2 px-4 border-b">
//                     <span className="px-2 py-1 rounded-full text-xs bg-blue-500 text-white flex items-center">
//                       <MdAdminPanelSettings className="mr-1" />
//                       {admin.role}
//                     </span>
//                   </td>
//                   <td className="py-2 px-4 border-b text-white">{admin.course}</td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </motion.table>
//         </div>
//       ) : (
//         <p className="text-gray-400">Access restricted to superadmins only.</p>
//       )}
//     </motion.div>
//   );
// }

// export default function App() {
//   const [isSuperadmin, setIsSuperadmin] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-900 p-6">
//       <AdminManagement isSuperadmin={isSuperadmin} />
//       <Tooltip />
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'; // Icons for actions
// import { MdAdminPanelSettings } from 'react-icons/md'; // Icon for Admin role

// // Modal Component for assigning admins to cybersecurity courses
// function AssignAdminModal({ isOpen, onClose, onAssign }) {
//   const [course, setCourse] = useState("");

//   const handleAssign = () => {
//     if (course) {
//       onAssign(course);
//       setCourse("");
//       onClose();
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Admin to Cybersecurity Course</h3>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // Modal Component for managing access rights
// function ManageAccessRightsModal({ isOpen, onClose, admins }) {
//   const [selectedAdmin, setSelectedAdmin] = useState(null);
//   const [newRights, setNewRights] = useState("");

//   const handleAssignRights = () => {
//     // Here, you can add logic to manage access rights for the selected admin
//     console.log(`Assigning rights to ${selectedAdmin.name}: ${newRights}`);
//     setNewRights(""); // Clear the input field after assigning rights
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Manage Access Rights</h3>
//             <select
//               value={selectedAdmin?.id || ""}
//               onChange={(e) => setSelectedAdmin(admins.find(admin => admin.id === parseInt(e.target.value)))}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{admin.name}</option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={newRights}
//               onChange={(e) => setNewRights(e.target.value)}
//               placeholder="Enter New Rights"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssignRights}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign Rights
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement() {
//   const [admins, setAdmins] = useState([
//     { id: 1, name: "Ravi Kumar", email: "ravi.kumar@example.com", role: "Admin", course: "Network Security" },
//     { id: 2, name: "Priya Singh", email: "priya.singh@example.com", role: "Admin", course: "Ethical Hacking" },
//     { id: 3, name: "Amit Sharma", email: "amit.sharma@example.com", role: "Admin", course: "Cryptography" },
//     { id: 4, name: "Sunita Verma", email: "sunita.verma@example.com", role: "Admin", course: "Cloud Security" },
//     { id: 5, name: "Rajesh Iyer", email: "rajesh.iyer@example.com", role: "Admin", course: "Incident Response" },
//     { id: 6, name: "Anjali Gupta", email: "anjali.gupta@example.com", role: "Admin", course: "Malware Analysis" },
//     { id: 7, name: "Vikram Mehta", email: "vikram.mehta@example.com", role: "Admin", course: "Penetration Testing" },
//     { id: 8, name: "Sneha Rao", email: "sneha.rao@example.com", role: "Admin", course: "Data Protection" },
//     { id: 9, name: "Deepak Joshi", email: "deepak.joshi@example.com", role: "Admin", course: "Network Defense" },
//     { id: 10, name: "Nisha Nair", email: "nisha.nair@example.com", role: "Admin", course: "Security Auditing" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
//   const [newAdmin, setNewAdmin] = useState({ name: "", email: "", role: "Admin" });
//   const [successMessage, setSuccessMessage] = useState("");

//   const toggleModal = () => setIsModalOpen(!isModalOpen);
//   const toggleAccessModal = () => setIsAccessModalOpen(!isAccessModalOpen);

//   const handleAssignCourse = (course) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === prevAdmins.length
//           ? { ...admin, course }
//           : admin
//       )
//     );
//   };

//   const addAdmin = () => {
//     if (newAdmin.name && newAdmin.email) {
//       setAdmins([
//         ...admins,
//         {
//           id: admins.length + 1,
//           name: newAdmin.name,
//           email: newAdmin.email,
//           role: newAdmin.role,
//           course: "Not assigned"
//         }
//       ]);
//       setNewAdmin({ name: "", email: "", role: "Admin" });
//       setSuccessMessage("New admin added successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
//     }
//   };
//   const editAdmin = (adminId) => {
//     // Logic to handle admin editing (e.g., open a modal with admin details)
//     const adminToEdit = admins.find(admin => admin.id === adminId);
//     console.log('Edit admin:', adminToEdit);
//     // You could implement a modal to edit the selected admin's details
//   };

//   const deleteAdmin = (adminId) => {
//     // Logic to handle admin deletion
//     setAdmins(admins.filter(admin => admin.id !== adminId));
//     console.log('Deleted admin with ID:', adminId);
//   };
//   return (
//     <motion.div
//       id="admin-management"
//       className="mb-10 p-4 bg-gray-900 shadow-md rounded-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-white">Admin Management - Cybersecurity Courses</h2>
//       <div>
//         <motion.button
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2 mr-2 flex items-center"
//           onClick={toggleModal}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <AiOutlinePlus className="mr-2" />
//           Assign Admin
//         </motion.button>
//         <motion.button
//           className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//           onClick={toggleAccessModal}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <MdAdminPanelSettings className="mr-2" />
//           Manage Access Rights
//         </motion.button>

//         {successMessage && (
//           <div className="mb-4 text-green-500">{successMessage}</div>
//         )}

//         <AssignAdminModal isOpen={isModalOpen} onClose={toggleModal} onAssign={handleAssignCourse} />
//         <ManageAccessRightsModal isOpen={isAccessModalOpen} onClose={toggleAccessModal} admins={admins} />

//         {/* <div className="mt-4">
//           <h3 className="text-lg font-semibold text-white">Current Admins</h3>
//           <ul className="list-disc list-inside text-gray-300">
//             {admins.map((admin) => (
//               <li key={admin.id}>
//                 {admin.name} - {admin.email} - {admin.role} - Course: {admin.course}
//               </li>
//             ))}
//           </ul>
//         </div> */}
//         {/* <div className="mt-4">
//   <h3 className="text-lg font-semibold text-white mb-3">Current Admins</h3>
//   {admins.length === 0 ? (
//     <p className="text-gray-400">No admins have been assigned yet.</p>
//   ) : (
//     <ul className="list-disc list-inside text-gray-300 space-y-2">
//       {admins.map((admin) => (
//         <li key={admin.id} className="flex justify-between items-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200">
//           <span>
//             <strong className="text-blue-400">{admin.name}</strong> - {admin.email} - <span className="italic">{admin.role}</span> - Course: <span className="font-semibold">{admin.course}</span>
//           </span>
//           <div className="flex items-center space-x-2">
//             <button className="text-blue-500 hover:underline" onClick={() => editAdmin(admin.id)}>
//               Edit
//             </button>
//             <button className="text-red-500 hover:underline" onClick={() => deleteAdmin(admin.id)}>
//               Delete
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )}
// </div> */}
// <div className="mt-4">
//       <h3 className="text-lg font-semibold text-white mb-3">Current Admins</h3>
//       {admins.length === 0 ? (
//         <p className="text-gray-400">No admins have been assigned yet.</p>
//       ) : (
//         <table className="min-w-full bg-gray-800 text-white border border-gray-700">
//           <thead>
//             <tr>
//               <th className="py-2 border-b border-gray-700">Name</th>
//               <th className="py-2 border-b border-gray-700">Email</th>
//               <th className="py-2 border-b border-gray-700">Role</th>
//               <th className="py-2 border-b border-gray-700">Course</th>
//               <th className="py-2 border-b border-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-700">
//             {admins.map((admin) => (
//               <tr key={admin.id} className="hover:bg-gray-700">
//                 <td className="py-3 px-4">{admin.name}</td>
//                 <td className="py-3 px-4">{admin.email}</td>
//                 <td className="py-3 px-4">{admin.role}</td>
//                 <td className="py-3 px-4">{admin.course}</td>
//                 <td className="py-3 px-4 flex space-x-2">
//                   <button 
//                     className="text-blue-500 hover:underline" 
//                     onClick={() => editAdmin(admin.id)}
//                   >
//                     Edit
//                   </button>
//                   <button 
//                     className="text-red-500 hover:underline" 
//                     onClick={() => deleteAdmin(admin.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>

//       </div>
//     </motion.div>
//   );
// }

// export default AdminManagement;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
// import { MdAdminPanelSettings } from 'react-icons/md';

// function AssignAdminModal({ isOpen, onClose, admins, onAssign }) {
//   const [selectedAdmin, setSelectedAdmin] = useState("");
//   const [course, setCourse] = useState("");

//   const handleAssign = () => {
//     if (selectedAdmin && course) {
//       onAssign(selectedAdmin, course);
//       setCourse("");
//       setSelectedAdmin("");
//       onClose();
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Course to Admin</h3>
//             <select
//               value={selectedAdmin}
//               onChange={(e) => setSelectedAdmin(e.target.value)}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{admin.name}</option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function ManageAccessRightsModal({ isOpen, onClose, admins, onRevokeAccess }) {
//   const [selectedAdmin, setSelectedAdmin] = useState(null);
//   const [courseToRevoke, setCourseToRevoke] = useState("");

//   const handleRevokeAccess = () => {
//     if (selectedAdmin && courseToRevoke) {
//       onRevokeAccess(selectedAdmin, courseToRevoke);
//       setCourseToRevoke("");
//       onClose();
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Manage Access Rights</h3>
//             <select
//               value={selectedAdmin?.id || ""}
//               onChange={(e) => setSelectedAdmin(admins.find(admin => admin.id === parseInt(e.target.value)))}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{admin.name}</option>
//               ))}
//             </select>
//             <input
//               type="text"
//               value={courseToRevoke}
//               onChange={(e) => setCourseToRevoke(e.target.value)}
//               placeholder="Enter Course to Revoke Access"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleRevokeAccess}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Revoke Access
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement() {
//   const [admins, setAdmins] = useState([
//     { id: 1, name: "Ravi Kumar", email: "ravi.kumar@example.com", role: "Admin", course: "Network Security", status: "Active" },
//     { id: 2, name: "Priya Singh", email: "priya.singh@example.com", role: "Admin", course: "Ethical Hacking", status: "Active" },
//     { id: 3, name: "Amit Sharma", email: "amit.sharma@example.com", role: "Admin", course: "Cryptography", status: "Active" },
//     { id: 4, name: "Sunita Verma", email: "sunita.verma@example.com", role: "Admin", course: "Cloud Security", status: "Active" },
//     { id: 5, name: "Rajesh Iyer", email: "rajesh.iyer@example.com", role: "Admin", course: "Incident Response", status: "Active" },
//     { id: 6, name: "Anjali Gupta", email: "anjali.gupta@example.com", role: "Admin", course: "Malware Analysis", status: "Active" },
//     { id: 7, name: "Vikram Mehta", email: "vikram.mehta@example.com", role: "Admin", course: "Penetration Testing", status: "Active" },
//     { id: 8, name: "Sneha Rao", email: "sneha.rao@example.com", role: "Admin", course: "Data Protection", status: "Active" },
//     { id: 9, name: "Deepak Joshi", email: "deepak.joshi@example.com", role: "Admin", course: "Network Defense", status: "Active" },
//     { id: 10, name: "Nisha Nair", email: "nisha.nair@example.com", role: "Admin", course: "Security Auditing", status: "Active" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const toggleModal = () => setIsModalOpen(!isModalOpen);
//   const toggleAccessModal = () => setIsAccessModalOpen(!isAccessModalOpen);

//   const handleAssignCourse = (adminId, course) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === parseInt(adminId)
//           ? { ...admin, course }
//           : admin
//       )
//     );
//     setSuccessMessage(`Course "${course}" assigned to admin.`);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   const revokeAccess = (admin, course) => {
//     setAdmins(prevAdmins =>
//       prevAdmins.map(a =>
//         a.id === admin.id && a.course === course
//           ? { ...a, course: "Not assigned" }
//           : a
//       )
//     );
//     setSuccessMessage(`Access revoked for ${admin.name} from ${course}`);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   return (
//     <motion.div
//       id="admin-management"
//       className="mb-10 p-4 bg-gray-900 shadow-md rounded-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-white">Admin Management</h2>
//       <div className="mb-4">
//         <motion.button
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//           onClick={toggleModal}
//         >
//           <AiOutlinePlus className="mr-2" />
//           Assign Admin
//         </motion.button>
//         <motion.button
//           className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//           onClick={toggleAccessModal}
//         >
//           Manage Access Rights
//         </motion.button>
//       </div>
//       {successMessage && <div className="text-green-400 mb-2">{successMessage}</div>}
//       <table className="min-w-full bg-gray-800 border border-gray-600">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 text-left text-white">Admin Name</th>
//             <th className="py-2 px-4 text-left text-white">Email</th>
//             <th className="py-2 px-4 text-left text-white">Course</th>
//             <th className="py-2 px-4 text-left text-white">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins.map((admin) => (
//             <tr key={admin.id} className="border-b border-gray-600">
//               <td className="py-2 px-4 text-white">{admin.name}</td>
//               <td className="py-2 px-4 text-white">{admin.email}</td>
//               <td className="py-2 px-4 text-white">{admin.course}</td>
//               <td className="py-2 px-4 text-white">{admin.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <AssignAdminModal isOpen={isModalOpen} onClose={toggleModal} admins={admins} onAssign={handleAssignCourse} />
//       <ManageAccessRightsModal isOpen={isAccessModalOpen} onClose={toggleAccessModal} admins={admins} onRevokeAccess={revokeAccess} />
//     </motion.div>
//   );
// }

// export default AdminManagement;
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

// function AssignAdminModal({ isOpen, onClose, admins, onAssign }) {
//   const [selectedAdmin, setSelectedAdmin] = useState("");
//   const [course, setCourse] = useState("");
//   const [error, setError] = useState("");

//   const handleAssign = () => {
//     if (!selectedAdmin || !course) {
//       setError("Please select an admin and enter a course name.");
//       return;
//     }

//     setError("");
//     const assigningDate = new Date().toLocaleDateString();
//     onAssign(selectedAdmin, course, assigningDate);
//     setCourse("");
//     setSelectedAdmin("");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Course to Admin</h3>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <label className="block text-gray-300 mb-2">Select Admin</label>
//             <select
//               value={selectedAdmin}
//               onChange={(e) => setSelectedAdmin(e.target.value)}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
//               ))}
//             </select>
//             <label className="block text-gray-300 mb-2">Course Name</label>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function ManageAccessRightsModal({ isOpen, onClose, admins, onRevokeAccess }) {
//   const [selectedAdmin, setSelectedAdmin] = useState(null);
//   const [courseToRevoke, setCourseToRevoke] = useState("");
//   const [error, setError] = useState("");

//   const handleRevokeAccess = () => {
//     if (!selectedAdmin || !courseToRevoke) {
//       setError("Please select an admin and enter a course name.");
//       return;
//     }

//     setError("");
//     onRevokeAccess(selectedAdmin, courseToRevoke);
//     setCourseToRevoke("");
//     setSelectedAdmin(null);
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Manage Access Rights</h3>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <label className="block text-gray-300 mb-2">Select Admin</label>
//             <select
//               value={selectedAdmin?.id || ""}
//               onChange={(e) => setSelectedAdmin(admins.find(admin => admin.id === parseInt(e.target.value)))}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
//               ))}
//             </select>
//             <label className="block text-gray-300 mb-2">Course to Revoke</label>
//             <input
//               type="text"
//               value={courseToRevoke}
//               onChange={(e) => setCourseToRevoke(e.target.value)}
//               placeholder="Enter Course to Revoke Access"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleRevokeAccess}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Revoke Access
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement() {
//   const [admins, setAdmins] = useState([
//     { id: 1, uniqueId: 'ADM001', name: "Ravi Kumar", role: "Admin", course: "Network Security", status: "Active", assigningDate: "" },
//     { id: 2, uniqueId: 'ADM002', name: "Priya Singh", role: "Admin", course: "Ethical Hacking", status: "Active", assigningDate: "" },
//     { id: 3, uniqueId: 'ADM003', name: "Amit Sharma", role: "Admin", course: "Cryptography", status: "Active", assigningDate: "" },
//     { id: 4, uniqueId: 'ADM004', name: "Sunita Verma", role: "Admin", course: "Cloud Security", status: "Active", assigningDate: "" },
//     { id: 5, uniqueId: 'ADM005', name: "Rajesh Iyer", role: "Admin", course: "Incident Response", status: "Active", assigningDate: "" },
//     { id: 6, uniqueId: 'ADM006', name: "Anjali Gupta", role: "Admin", course: "Malware Analysis", status: "Active", assigningDate: "" },
//     { id: 7, uniqueId: 'ADM007', name: "Vikram Mehta", role: "Admin", course: "Penetration Testing", status: "Active", assigningDate: "" },
//     { id: 8, uniqueId: 'ADM008', name: "Sneha Rao", role: "Admin", course: "Data Protection", status: "Active", assigningDate: "" },
//     { id: 9, uniqueId: 'ADM009', name: "Deepak Joshi", role: "Admin", course: "Network Defense", status: "Active", assigningDate: "" },
//     { id: 10, uniqueId: 'ADM010', name: "Nisha Nair", role: "Admin", course: "Security Auditing", status: "Active", assigningDate: "" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [error, setError] = useState("");

//   const toggleModal = () => setIsModalOpen(!isModalOpen);
//   const toggleAccessModal = () => setIsAccessModalOpen(!isAccessModalOpen);

//   const handleAssignCourse = (adminId, course, assigningDate) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === parseInt(adminId)
//           ? { ...admin, course, assigningDate }
//           : admin
//       )
//     );
//     setSuccessMessage(`Course "${course}" assigned to admin with ID "${adminId}".`);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   const handleRevokeAccess = (adminId, course) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === parseInt(adminId) && admin.course === course
//           ? { ...admin, course: "", assigningDate: "" }
//           : admin
//       )
//     );
//     setSuccessMessage(`Access revoked for course "${course}" from admin with ID "${adminId}".`);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-white mb-5">Admin Management</h1>
//       {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
//       {error && <p className="text-red-500 mb-2">{error}</p>}
//       <button
//         onClick={toggleModal}
//         className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//       >
//         <AiOutlinePlus className="mr-2" />
//         Assign Course
//       </button>
//       <button
//         onClick={toggleAccessModal}
//         className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//       >
//         Manage Access Rights
//       </button>

//       <table className="min-w-full bg-gray-800 border border-gray-700">
//         <thead>
//           <tr>
//             <th className="text-left p-4">Admin Name</th>
//             <th className="text-left p-4">Unique ID</th>
//             <th className="text-left p-4">Course Assigned</th>
//             <th className="text-left p-4">Assigning Date</th>
//             <th className="text-left p-4">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins.map((admin) => (
//             <tr key={admin.id} className="border-b border-gray-700">
//               <td className="p-4 text-white">{admin.name}</td>
//               <td className="p-4 text-white">{admin.uniqueId}</td>
//               <td className="p-4 text-white">{admin.course || "None"}</td>
//               <td className="p-4 text-white">{admin.assigningDate || "N/A"}</td>
//               <td className="p-4 text-white">{admin.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <AssignAdminModal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         admins={admins}
//         onAssign={handleAssignCourse}
//       />
//       <ManageAccessRightsModal
//         isOpen={isAccessModalOpen}
//         onClose={toggleAccessModal}
//         admins={admins}
//         onRevokeAccess={handleRevokeAccess}
//       />
//     </div>
//   );
// }

// export default AdminManagement;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

// function AssignAdminModal({ isOpen, onClose, admins, onAssign }) {
//   const [selectedAdmin, setSelectedAdmin] = useState("");
//   const [course, setCourse] = useState("");
//   const [error, setError] = useState("");

//   const handleAssign = () => {
//     if (!selectedAdmin || !course) {
//       setError("Please select an admin and enter a course name.");
//       return;
//     }

//     setError("");
//     const assigningDate = new Date().toLocaleDateString();
//     onAssign(selectedAdmin, course, assigningDate);
//     setCourse("");
//     setSelectedAdmin("");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Course to Admin</h3>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <label className="block text-gray-300 mb-2">Select Admin</label>
//             <select
//               value={selectedAdmin}
//               onChange={(e) => setSelectedAdmin(e.target.value)}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
//               ))}
//             </select>
//             <label className="block text-gray-300 mb-2">Course Name</label>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function ManageAccessRightsModal({ isOpen, onClose, admins, onRevokeAccess }) {
//   const [selectedAdmin, setSelectedAdmin] = useState(null);
//   const [courseToRevoke, setCourseToRevoke] = useState("");
//   const [error, setError] = useState("");

//   const handleRevokeAccess = () => {
//     if (!selectedAdmin || !courseToRevoke) {
//       setError("Please select an admin and enter a course name.");
//       return;
//     }

//     setError("");
//     onRevokeAccess(selectedAdmin, courseToRevoke);
//     setCourseToRevoke("");
//     setSelectedAdmin(null);
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Manage Access Rights</h3>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <label className="block text-gray-300 mb-2">Select Admin</label>
//             <select
//               value={selectedAdmin?.id || ""}
//               onChange={(e) => setSelectedAdmin(admins.find(admin => admin.id === parseInt(e.target.value)))}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
//               ))}
//             </select>
//             <label className="block text-gray-300 mb-2">Course to Revoke</label>
//             <input
//               type="text"
//               value={courseToRevoke}
//               onChange={(e) => setCourseToRevoke(e.target.value)}
//               placeholder="Enter Course to Revoke Access"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleRevokeAccess}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Revoke Access
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement() {
//   const [admins, setAdmins] = useState([
//     { id: 1, uniqueId: 'ADM001', name: "Ravi Kumar", username: "ravi.kumar", course: "Network Security", assigningDate: "" },
//     { id: 2, uniqueId: 'ADM002', name: "Priya Singh", username: "priya.singh", course: "Ethical Hacking", assigningDate: "" },
//     { id: 3, uniqueId: 'ADM003', name: "Amit Sharma", username: "amit.sharma", course: "Cryptography", assigningDate: "" },
//     { id: 4, uniqueId: 'ADM004', name: "Sunita Verma", username: "sunita.verma", course: "Cloud Security", assigningDate: "" },
//     { id: 5, uniqueId: 'ADM005', name: "Rajesh Iyer", username: "rajesh.iyer", course: "Incident Response", assigningDate: "" },
//     { id: 6, uniqueId: 'ADM006', name: "Anjali Gupta", username: "anjali.gupta", course: "Malware Analysis", assigningDate: "" },
//     { id: 7, uniqueId: 'ADM007', name: "Vikram Mehta", username: "vikram.mehta", course: "Penetration Testing", assigningDate: "" },
//     { id: 8, uniqueId: 'ADM008', name: "Sneha Rao", username: "sneha.rao", course: "Data Protection", assigningDate: "" },
//     { id: 9, uniqueId: 'ADM009', name: "Deepak Joshi", username: "deepak.joshi", course: "Network Defense", assigningDate: "" },
//     { id: 10, uniqueId: 'ADM010', name: "Nisha Nair", username: "nisha.nair", course: "Security Auditing", assigningDate: "" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [error, setError] = useState("");

//   const toggleModal = () => setIsModalOpen(!isModalOpen);
//   const toggleAccessModal = () => setIsAccessModalOpen(!isAccessModalOpen);

//   const handleAssignCourse = (adminId, course, assigningDate) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === parseInt(adminId)
//           ? { ...admin, course, assigningDate }
//           : admin
//       )
//     );
//     setSuccessMessage(`Course "${course}" assigned to admin with ID "${adminId}".`);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

  // const handleRevokeAccess = (adminId, course) => {
  //   setAdmins((prevAdmins) =>
  //     prevAdmins.map((admin) =>
  //       admin.id === parseInt(adminId) && admin.course === course
  //         ? { ...admin, course: "", assigningDate: "" }
  //         : admin
  //     )
  //   );
  //   setSuccessMessage(`Access revoked for course "${course}" from admin with ID "${adminId}".`);
  //   setTimeout(() => setSuccessMessage(""), 3000);
  // };

//   const toggleActiveStatus = (adminId) => {
//     setAdmins((prevAdmins) =>
//       prevAdmins.map((admin) =>
//         admin.id === adminId
//           ? { ...admin, status: admin.status === "Active" ? "Inactive" : "Active" }
//           : admin
//       )
//     );
//     setSuccessMessage(`Admin with ID "${adminId}" status updated to "${admins.find(a => a.id === adminId).status === "Active" ? "Inactive" : "Active"}".`);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-white mb-5">Admin Management</h1>
//       {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
//       {error && <p className="text-red-500 mb-2">{error}</p>}
//       <button
//         onClick={toggleModal}
//         className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//       >
//         <AiOutlinePlus className="mr-2" />
//         Assign Course
//       </button>
//       <button
//         onClick={toggleAccessModal}
//         className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//       >
//         Manage Access Rights
//       </button>

//       <table className="min-w-full bg-gray-800 border border-gray-700">
//         <thead>
//           <tr>
//             <th className="text-left p-4">Admin Name</th>
//             <th className="text-left p-4">Username</th>
//             <th className="text-left p-4">Unique ID</th>
//             <th className="text-left p-4">Course Assigned</th>
//             <th className="text-left p-4">Assigning Date</th>
//             <th className="text-left p-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins.map((admin) => (
//             <tr key={admin.id} className="border-b border-gray-700">
//               <td className="p-4 text-white">{admin.name}</td>
//               <td className="p-4 text-white">{admin.username}</td>
//               <td className="p-4 text-white">{admin.uniqueId}</td>
//               <td className="p-4 text-white">{admin.course || "None"}</td>
//               <td className="p-4 text-white">{admin.assigningDate || "N/A"}</td>
//               <td className="p-4 text-white">
//                 <button
//                   onClick={() => toggleActiveStatus(admin.id)}
//                   className={`py-1 px-3 rounded ${admin.status === "Active" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white`}
//                 >
//                   {admin.status === "Active" ? "Deactivate" : "Activate"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <AssignAdminModal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         admins={admins}
//         onAssign={handleAssignCourse}
//       />
//       <ManageAccessRightsModal
//         isOpen={isAccessModalOpen}
//         onClose={toggleAccessModal}
//         admins={admins}
//         onRevokeAccess={handleRevokeAccess}
//       />
//     </div>
//   );
// }

// export default AdminManagement;
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

// function AssignAdminModal({ isOpen, onClose, admins, onAssign }) {
//   const [selectedAdmin, setSelectedAdmin] = useState("");
//   const [course, setCourse] = useState("");
//   const [error, setError] = useState("");

//   const handleAssign = () => {
//     if (!selectedAdmin || !course) {
//       setError("Please select an admin and enter a course name.");
//       return;
//     }

//     setError("");
//     const assigningDate = new Date().toLocaleDateString();
//     onAssign(selectedAdmin, course, assigningDate);
//     setCourse("");
//     setSelectedAdmin("");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Course to Admin</h3>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <label className="block text-gray-300 mb-2">Select Admin</label>
//             <select
//               value={selectedAdmin}
//               onChange={(e) => setSelectedAdmin(e.target.value)}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
//               ))}
//             </select>
//             <label className="block text-gray-300 mb-2">Course Name</label>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement() {
//   const [availableAdmins, setAvailableAdmins] = useState([
//     { id: 1, uniqueId: 'ADM001', name: "Ravi Kumar", username: "ravi.kumar" },
//     { id: 2, uniqueId: 'ADM002', name: "Priya Singh", username: "priya.singh" },
//     { id: 3, uniqueId: 'ADM003', name: "Amit Sharma", username: "amit.sharma" },
//     { id: 4, uniqueId: 'ADM004', name: "Sunita Verma", username: "sunita.verma" },
//     { id: 5, uniqueId: 'ADM005', name: "Rajesh Iyer", username: "rajesh.iyer" },
//     { id: 6, uniqueId: 'ADM006', name: "Anjali Gupta", username: "anjali.gupta" },
//     { id: 7, uniqueId: 'ADM007', name: "Vikram Mehta", username: "vikram.mehta" },
//     { id: 8, uniqueId: 'ADM008', name: "Sneha Rao", username: "sneha.rao" },
//     { id: 9, uniqueId: 'ADM009', name: "Deepak Joshi", username: "deepak.joshi" },
//     { id: 10, uniqueId: 'ADM010', name: "Nisha Nair", username: "nisha.nair" },
//     { id: 11, uniqueId: 'ADM011', name: "Pooja Shah", username: "pooja.shah" },
//     { id: 12, uniqueId: 'ADM012', name: "Manish Tiwari", username: "manish.tiwari" },
//     { id: 13, uniqueId: 'ADM013', name: "Neha Kapoor", username: "neha.kapoor" },
//     { id: 14, uniqueId: 'ADM014', name: "Arjun Reddy", username: "arjun.reddy" },
//     { id: 15, uniqueId: 'ADM015', name: "Kiran Desai", username: "kiran.desai" },
//     { id: 16, uniqueId: 'ADM016', name: "Swati Patil", username: "swati.patil" },
//     { id: 17, uniqueId: 'ADM017', name: "Yash Gupta", username: "yash.gupta" },
//     { id: 18, uniqueId: 'ADM018', name: "Preeti Agarwal", username: "preeti.agarwal" },
//     { id: 19, uniqueId: 'ADM019', name: "Rahul Jain", username: "rahul.jain" },
//     { id: 20, uniqueId: 'ADM020', name: "Meena Rathore", username: "meena.rathore" },
//   ]);

//   const [admins, setAdmins] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleAssignCourse = (adminId, course, assigningDate) => {
//     const selectedAdmin = availableAdmins.find((admin) => admin.id === parseInt(adminId));
//     if (selectedAdmin) {
//       setAdmins((prevAdmins) => [
//         ...prevAdmins,
//         { ...selectedAdmin, course, assigningDate }
//       ]);
//       setSuccessMessage(`Course "${course}" assigned to admin with ID "${adminId}".`);
//       setTimeout(() => setSuccessMessage(""), 3000);
//     }
//   };
  
//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-white mb-5">Admin Management</h1>
//       {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
//       <button
//         onClick={toggleModal}
//         className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//       >
//         <AiOutlinePlus className="mr-2" />
//         Assign Course
//       </button>

//       <table className="min-w-full bg-gray-800 border border-gray-700">
//         <thead>
//           <tr>
//             <th className="text-left p-4">Admin Name</th>
//             <th className="text-left p-4">Username</th>
//             <th className="text-left p-4">Unique ID</th>
//             <th className="text-left p-4">Course Assigned</th>
//             <th className="text-left p-4">Assigning Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins.map((admin) => (
//             <tr key={admin.id} className="border-b border-gray-700">
//               <td className="p-4 text-white">{admin.name}</td>
//               <td className="p-4 text-white">{admin.username}</td>
//               <td className="p-4 text-white">{admin.uniqueId}</td>
//               <td className="p-4 text-white">{admin.course || "None"}</td>
//               <td className="p-4 text-white">{admin.assigningDate || "N/A"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <AssignAdminModal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         admins={availableAdmins}
//         onAssign={handleAssignCourse}
//       />
//     </div>
//   );
// }

// export default AdminManagement;
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

// function AssignAdminModal({ isOpen, onClose, admins, onAssign }) {
//   const [selectedAdmin, setSelectedAdmin] = useState("");
//   const [course, setCourse] = useState("");
//   const [error, setError] = useState("");

//   const handleAssign = () => {
//     if (!selectedAdmin || !course) {
//       setError("Please select an admin and enter a course name.");
//       return;
//     }

//     setError("");
//     const assigningDate = new Date().toLocaleDateString();
//     onAssign(selectedAdmin, course, assigningDate);
//     setCourse("");
//     setSelectedAdmin("");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-lg font-semibold mb-4 text-white">Assign Course to Admin</h3>
//             {error && <p className="text-red-500 mb-2">{error}</p>}
//             <label className="block text-gray-300 mb-2">Select Admin</label>
//             <select
//               value={selectedAdmin}
//               onChange={(e) => setSelectedAdmin(e.target.value)}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             >
//               <option value="" disabled>Select Admin</option>
//               {admins.map(admin => (
//                 <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
//               ))}
//             </select>
//             <label className="block text-gray-300 mb-2">Course Name</label>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               placeholder="Enter Cybersecurity Course Name"
//               className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
//             />
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
//               onClick={handleAssign}
//             >
//               <AiOutlineCheck className="mr-2" />
//               Assign
//             </button>
//             <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
//               <AiOutlineClose className="mr-2" />
//               Cancel
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function AdminManagement() {
//   const [availableAdmins, setAvailableAdmins] = useState([
//     { id: 1, uniqueId: 'ADM001', name: "Ravi Kumar", username: "ravi.kumar" },
//     { id: 2, uniqueId: 'ADM002', name: "Priya Singh", username: "priya.singh" },
//     // ... add more admins as needed
//   ]);

//   const [admins, setAdmins] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [selectedAdminToRevoke, setSelectedAdminToRevoke] = useState(null);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleAssignCourse = (adminId, course, assigningDate) => {
//     const selectedAdmin = availableAdmins.find((admin) => admin.id === parseInt(adminId));
//     if (selectedAdmin) {
//       setAdmins((prevAdmins) => [
//         ...prevAdmins,
//         { ...selectedAdmin, course, assigningDate }
//       ]);
//       setSuccessMessage(`Course "${course}" assigned to admin with ID "${adminId}".`);
//       setTimeout(() => setSuccessMessage(""), 3000);
//     }
//   };

//   const handleRevokeCourse = (adminId) => {
//     setAdmins((prevAdmins) => prevAdmins.map((admin) => 
//       admin.id === adminId ? { ...admin, course: null, assigningDate: null } : admin
//     ));
//     setSuccessMessage(`Course revoked from admin with ID "${adminId}".`);
//     setShowConfirm(false);
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   const confirmRevoke = (adminId) => {
//     setSelectedAdminToRevoke(adminId);
//     setShowConfirm(true);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold text-white mb-5">Admin Management</h1>
//       {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
//       <button
//         onClick={toggleModal}
//         className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 flex items-center"
//       >
//         <AiOutlinePlus className="mr-2" />
//         Assign Course
//       </button>

//       <table className="min-w-full bg-gray-800 border border-gray-700">
//         <thead>
//           <tr>
//             <th className="text-left p-4">Admin Name</th>
//             <th className="text-left p-4">Username</th>
//             <th className="text-left p-4">Unique ID</th>
//             <th className="text-left p-4">Course Assigned</th>
//             <th className="text-left p-4">Assigning Date</th>
//             <th className="text-left p-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins.map((admin) => (
//             <tr key={admin.id} className="border-b border-gray-700">
//               <td className="p-4 text-white">{admin.name}</td>
//               <td className="p-4 text-white">{admin.username}</td>
//               <td className="p-4 text-white">{admin.uniqueId}</td>
//               <td className="p-4 text-white">{admin.course || "None"}</td>
//               <td className="p-4 text-white">{admin.assigningDate || "N/A"}</td>
//               <td className="p-4">
//                 {admin.course && (
//                   <button
//                     className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded flex items-center"
//                     onClick={() => confirmRevoke(admin.id)}
//                   >
//                     <AiOutlineDelete className="mr-1" />
//                     Revoke
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <AssignAdminModal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         admins={availableAdmins}
//         onAssign={handleAssignCourse}
//       />

//       <AnimatePresence>
//         {showConfirm && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h3 className="text-lg font-semibold mb-4 text-white">Confirm Revoke</h3>
//               <p className="text-white mb-4">Are you sure you want to revoke the course from this admin?</p>
//               <button
//                 className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full mb-2"
//                 onClick={() => handleRevokeCourse(selectedAdminToRevoke)}
//               >
//                 Confirm
//               </button>
//               <button
//                 className="text-gray-400 hover:underline w-full text-center"
//                 onClick={() => setShowConfirm(false)}
//               >
//                 Cancel
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default AdminManagement;
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlus, AiOutlineClose, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

function AssignAdminModal({ isOpen, onClose, admins, onAssign }) {
  const [selectedAdmin, setSelectedAdmin] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const handleAssign = () => {
    if (!selectedAdmin || !course) {
      setError("Please select an admin and enter a course name.");
      return;
    }

    setError("");
    const assigningDate = new Date().toLocaleDateString();
    onAssign(selectedAdmin, course, assigningDate);
    setCourse("");
    setSelectedAdmin("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Assign Course to Admin</h3>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <label className="block text-gray-300 mb-2">Select Admin</label>
            <select
              value={selectedAdmin}
              onChange={(e) => setSelectedAdmin(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
            >
              <option value="" disabled>Select Admin</option>
              {admins.map(admin => (
                <option key={admin.id} value={admin.id}>{`${admin.name} (${admin.uniqueId})`}</option>
              ))}
            </select>
            <label className="block text-gray-300 mb-2">Course Name</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Enter Cybersecurity Course Name"
              className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white mb-4"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full mb-2 flex items-center"
              onClick={handleAssign}
            >
              <AiOutlineCheck className="mr-2" />
              Assign
            </button>
            <button className="text-gray-400 hover:underline w-full flex items-center justify-center" onClick={onClose}>
              <AiOutlineClose className="mr-2" />
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AdminManagement() {
  const [availableAdmins, setAvailableAdmins] = useState([
    // { id: 1, uniqueId: 'ADM001', name: "Ravi Kumar", username: "ravi.kumar" },
    // { id: 2, uniqueId: 'ADM002', name: "Priya Singh", username: "priya.singh" },
    { id: 1, uniqueId: 'ADM001', name: "Ravi Kumar", username: "ravi.kumar" },
    { id: 2, uniqueId: 'ADM002', name: "Priya Singh", username: "priya.singh" },
    { id: 3, uniqueId: 'ADM003', name: "Anil Mehta", username: "anil.mehta" },
    { id: 4, uniqueId: 'ADM004', name: "Sita Devi", username: "sita.devi" },
    { id: 5, uniqueId: 'ADM005', name: "Rajesh Gupta", username: "rajesh.gupta" },
    { id: 6, uniqueId: 'ADM006', name: "Neha Sharma", username: "neha.sharma" },
    { id: 7, uniqueId: 'ADM007', name: "Karan Singh", username: "karan.singh" },
    { id: 8, uniqueId: 'ADM008', name: "Deepa Rao", username: "deepa.rao" },
    // ... add more admins as needed
  ]);

  const [admins, setAdmins] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedAdminToRevoke, setSelectedAdminToRevoke] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState('asc');

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleAssignCourse = (adminId, course, assigningDate) => {
    const selectedAdmin = availableAdmins.find((admin) => admin.id === parseInt(adminId));
    if (selectedAdmin) {
      const alreadyAssigned = admins.find((admin) => admin.id === selectedAdmin.id);
      if (alreadyAssigned) {
        setSuccessMessage(`Course "${course}" is already assigned to admin with ID "${adminId}".`);
        return;
      }
      setAdmins((prevAdmins) => [
        ...prevAdmins,
        { ...selectedAdmin, course, assigningDate }
      ]);
      setSuccessMessage(`Course "${course}" assigned to admin with ID "${adminId}".`);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleRevokeCourse = (adminId) => {
    // Remove the admin with the specified ID from the admins array
    setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin.id !== adminId));
    setSuccessMessage(`Course revoked and admin removed with ID "${adminId}".`);
    setShowConfirm(false);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const confirmRevoke = (adminId) => {
    setSelectedAdminToRevoke(adminId);
    setShowConfirm(true);
  };

  // Search and sort logic
  const filteredAdmins = useMemo(() => {
    return admins.filter(admin => 
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      admin.username.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => {
      const isAsc = sortDirection === 'asc';
      return isAsc ? (a.name.localeCompare(b.name)) : (b.name.localeCompare(a.name));
    });
  }, [admins, searchTerm, sortDirection]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-white mb-5">Admin Management</h1>
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search Admin..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-600 rounded bg-gray-900 text-white mr-2 w-1/3"
        />
        <button
          onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Sort by Name ({sortDirection === 'asc' ? '↑' : '↓'})
        </button>
      </div>

      <button
        onClick={toggleModal}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4 flex items-center"
      >
        <AiOutlinePlus className="mr-2" />
        Assign Course
      </button>

      <table className="min-w-full bg-gray-800 border border-gray-700">
        <thead>
          <tr>
            <th className="text-left p-4">Admin Name</th>
            <th className="text-left p-4">Username</th>
            <th className="text-left p-4">Unique ID</th>
            <th className="text-left p-4">Course Assigned</th>
            <th className="text-left p-4">Assigning Date</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.map((admin) => (
            <tr key={admin.id} className="border-b border-gray-700 hover:bg-gray-700">
              <td className="p-4 text-white">{admin.name}</td>
              <td className="p-4 text-white">{admin.username}</td>
              <td className="p-4 text-white">{admin.uniqueId}</td>
              <td className="p-4 text-white">{admin.course || "None"}</td>
              <td className="p-4 text-white">{admin.assigningDate || "N/A"}</td>
              <td className="p-4">
                {admin.course && (
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded flex items-center"
                    onClick={() => confirmRevoke(admin.id)}
                  >
                    <AiOutlineDelete className="mr-1" />
                    Revoke
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AssignAdminModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        admins={availableAdmins}
        onAssign={handleAssignCourse}
      />

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4 text-white">Confirm Revocation</h3>
            <p className="text-gray-300 mb-4">Are you sure you want to revoke the course for this admin?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                onClick={() => handleRevokeCourse(selectedAdminToRevoke)}
              >
                Yes
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                onClick={() => setShowConfirm(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminManagement;

// import React from 'react';

// const AdminManagement = () => {
//   return (
//     <div>
//       <h1>Admin</h1>
//     </div>
//   );
// };

// export default AdminManagement;
