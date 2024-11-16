// import React, { useState } from "react";

// const CourseAssignment = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState("");

//   const users = ["John Doe", "Jane Smith"];
//   const courses = ["React Basics", "Advanced JavaScript"];

//   const handleAssignCourse = () => {
//     if (selectedUser && selectedCourse) {
//       setAssignments([...assignments, { user: selectedUser, course: selectedCourse }]);
//       setSelectedUser("");
//       setSelectedCourse("");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Course Assignment</h2>

//       <div className="space-y-4">
//         <div className="space-y-2">
//           <select
//             className="w-full p-2 bg-gray-800 rounded"
//             value={selectedUser}
//             onChange={(e) => setSelectedUser(e.target.value)}
//           >
//             <option value="">Select User</option>
//             {users.map((user) => (
//               <option key={user} value={user}>{user}</option>
//             ))}
//           </select>

//           <select
//             className="w-full p-2 bg-gray-800 rounded"
//             value={selectedCourse}
//             onChange={(e) => setSelectedCourse(e.target.value)}
//           >
//             <option value="">Select Course</option>
//             {courses.map((course) => (
//               <option key={course} value={course}>{course}</option>
//             ))}
//           </select>

//           <button
//             onClick={handleAssignCourse}
//             className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
//           >
//             Assign Course
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {assignments.map((assignment, index) => (
//             <li key={index} className="bg-gray-800 p-2 rounded">
//               {assignment.user} is assigned to {assignment.course}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CourseAssignment;


// import React, { useState } from "react";
// import Select from 'react-select'; // For searchable dropdowns
// import { format } from 'date-fns';
// import { motion, AnimatePresence } from "framer-motion"; // Framer Motion

// const CourseAssignment = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [deadline, setDeadline] = useState("");
//   const [error, setError] = useState("");
//   const [note, setNote] = useState("");

//   const users = [
//     { value: "John Doe", label: "John Doe" },
//     { value: "Jane Smith", label: "Jane Smith" },
//   ];

//   const courses = [
//     { value: "React Basics", label: "React Basics" },
//     { value: "Advanced JavaScript", label: "Advanced JavaScript" },
//   ];

//   const handleAssignCourse = () => {
//     if (selectedUsers.length === 0 || selectedCourses.length === 0) {
//       setError("Please select both users and courses.");
//       return;
//     }

//     const newAssignments = selectedUsers.map((user) => 
//       selectedCourses.map((course) => ({
//         user: user.value,
//         course: course.value,
//         dateAssigned: format(new Date(), 'MM/dd/yyyy'),
//         deadline,
//         note
//       }))
//     ).flat();

//     setAssignments([...assignments, ...newAssignments]);
//     setSelectedUsers([]);
//     setSelectedCourses([]);
//     setDeadline("");
//     setError("");  // Clear error after successful assignment
//   };

//   const handleUnassign = (index) => {
//     const updatedAssignments = [...assignments];
//     updatedAssignments.splice(index, 1); // Remove the assignment
//     setAssignments(updatedAssignments);
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <motion.h2 
//         className="text-3xl font-bold mb-6"
//         initial={{ opacity: 0, y: -20 }} 
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Course Assignment
//       </motion.h2>

//       <div className="space-y-4">
//         {/* Error message */}
//         {error && <p className="text-red-500">{error}</p>}

//         {/* User and Course Selection */}
//         <motion.div 
//           className="space-y-2"
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <Select
//             isMulti
//             options={users}
//             value={selectedUsers}
//             onChange={setSelectedUsers}
//             placeholder="Select Users"
//             className="w-full p-2 bg-gray-800 rounded"
//           />

//           <Select
//             isMulti
//             options={courses}
//             value={selectedCourses}
//             onChange={setSelectedCourses}
//             placeholder="Select Courses"
//             className="w-full p-2 bg-gray-800 rounded"
//           />

//           {/* Set Deadline */}
//           <input
//             type="date"
//             className="w-full p-2 bg-gray-800 rounded"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             placeholder="Set Deadline"
//           />

//           {/* Add a note */}
//           <textarea
//             className="w-full p-2 bg-gray-800 rounded"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//           ></textarea>

//           {/* Assign Course Button */}
//           <motion.button
//             onClick={handleAssignCourse}
//             className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Assign Course
//           </motion.button>
//         </motion.div>

//         {/* Assignment History with Unassign/Reassign */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold">Assignment History</h3>
//           {assignments.length === 0 ? (
//             <p>No assignments yet.</p>
//           ) : (
//             <ul className="space-y-2">
//               <AnimatePresence>
//                 {assignments.map((assignment, index) => (
//                   <motion.li 
//                     key={index} 
//                     className="bg-gray-800 p-4 rounded"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <p>
//                       <strong>{assignment.user}</strong> is assigned to <strong>{assignment.course}</strong>
//                       {assignment.deadline && (
//                         <span> (Deadline: {assignment.deadline})</span>
//                       )}
//                     </p>
//                     <p>{assignment.note && <em>Note: {assignment.note}</em>}</p>
//                     <button
//                       onClick={() => handleUnassign(index)}
//                       className="mt-2 px-3 py-1 bg-red-500 rounded hover:bg-red-600"
//                     >
//                       Unassign
//                     </button>
//                   </motion.li>
//                 ))}
//               </AnimatePresence>
//             </ul>
//           )}
//         </div>

//         {/* Export to CSV or Excel */}
//         <motion.button 
//           className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
//           whileHover={{ scale: 1.05 }}
//         >
//           Export Assignments to CSV
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default CourseAssignment;

// import React, { useState, useEffect } from "react";
// import Select from "react-select"; // For searchable dropdowns
// import { format } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion"; // For animation

// const CourseAssignment = () => {
//   const [users, setUsers] = useState([]); // State for fetched users
//   const [courses, setCourses] = useState([]); // State for fetched courses
//   const [assignments, setAssignments] = useState([]); // State for assignments
//   const [selectedUsers, setSelectedUsers] = useState([]); // Selected users
//   const [selectedCourses, setSelectedCourses] = useState([]); // Selected courses
//   const [deadline, setDeadline] = useState(""); // Deadline
//   const [error, setError] = useState(""); // Error message
//   const [note, setNote] = useState(""); // Additional notes

//   // Fetch users dynamically
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         const formattedUsers = data.map(user => ({
//           value: user.name,
//           label: user.name,
//         }));
//         setUsers(formattedUsers);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Fetch courses dynamically
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         const formattedCourses = data.map(course => ({
//           value: course.title,
//           label: course.title,
//         }));
//         setCourses(formattedCourses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleAssignCourse = () => {
//     if (selectedUsers.length === 0 || selectedCourses.length === 0) {
//       setError("Please select both users and courses.");
//       return;
//     }

//     const newAssignments = selectedUsers.map((user) =>
//       selectedCourses.map((course) => ({
//         user: user.value,
//         course: course.value,
//         dateAssigned: format(new Date(), "MM/dd/yyyy"),
//         deadline,
//         note,
//       }))
//     ).flat();

//     setAssignments([...assignments, ...newAssignments]);
//     setSelectedUsers([]);
//     setSelectedCourses([]);
//     setDeadline("");
//     setNote(""); // Clear note after successful assignment
//     setError(""); // Clear error after successful assignment
//   };

//   const handleUnassign = (index) => {
//     const updatedAssignments = [...assignments];
//     updatedAssignments.splice(index, 1); // Remove the assignment
//     setAssignments(updatedAssignments);
//   };

//   // Function to export assignments to CSV
//   const exportToCSV = () => {
//     const csvContent = [
//       ["User", "Course", "Date Assigned", "Deadline", "Note"],
//       ...assignments.map((assignment) => [
//         assignment.user,
//         assignment.course,
//         assignment.dateAssigned,
//         assignment.deadline,
//         assignment.note,
//       ]),
//     ]
//       .map(e => e.join(","))
//       .join("\n");

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.setAttribute("href", url);
//     link.setAttribute("download", "assignments.csv");
//     link.style.visibility = 'hidden';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="p-6 bg-black text-white min-h-screen">
//       <motion.h2
//         className="text-3xl font-bold mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Course Assignment
//       </motion.h2>

//       <div className="space-y-4">
//         {/* Error message */}
//         {error && <p className="text-red-500">{error}</p>}

//         {/* User and Course Selection */}
//         <motion.div
//           className="space-y-2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <label className="block text-sm font-medium">Select Users:</label>
//           <Select
//             isMulti
//             options={users}
//             value={selectedUsers}
//             onChange={setSelectedUsers}
//             placeholder="Select Users"
//             className="w-full p-2 bg-gray-800 rounded text-white"
//             styles={{
//               control: (base) => ({
//                 ...base,
//                 backgroundColor: '#1F2937', // Darker grey
//                 borderColor: '#3B82F6', // Blue border
//               }),
//               menu: (base) => ({
//                 ...base,
//                 backgroundColor: '#1F2937',
//                 color: 'white',
//               }),
//               option: (base, { isFocused, isSelected }) => ({
//                 ...base,
//                 backgroundColor: isFocused ? '#3B82F6' : isSelected ? '#3B82F6' : '#1F2937',
//                 color: 'white',
//               }),
//             }}
//           />

//           <label className="block text-sm font-medium">Select Courses:</label>
//           <Select
//             isMulti
//             options={courses}
//             value={selectedCourses}
//             onChange={setSelectedCourses}
//             placeholder="Select Courses"
//             className="w-full p-2 bg-gray-800 rounded text-white"
//             styles={{
//               control: (base) => ({
//                 ...base,
//                 backgroundColor: '#1F2937', // Darker grey
//                 borderColor: '#3B82F6', // Blue border
//               }),
//               menu: (base) => ({
//                 ...base,
//                 backgroundColor: '#1F2937',
//                 color: 'white',
//               }),
//               option: (base, { isFocused, isSelected }) => ({
//                 ...base,
//                 backgroundColor: isFocused ? '#3B82F6' : isSelected ? '#3B82F6' : '#1F2937',
//                 color: 'white',
//               }),
//             }}
//           />

//           <label className="block text-sm font-medium">Set Deadline:</label>
//           <input
//             type="date"
//             className="w-full p-2 bg-gray-800 rounded text-white"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//           />

//           <label className="block text-sm font-medium">Add a Note (optional):</label>
//           <textarea
//             className="w-full p-2 bg-gray-800 rounded text-white"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//           ></textarea>

//           {/* Assign Course Button */}
//           <motion.button
//             onClick={handleAssignCourse}
//             className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Assign Course
//           </motion.button>
//         </motion.div>

//         {/* Assignment History with Unassign/Reassign */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold">Assignment History</h3>
//           {assignments.length === 0 ? (
//             <p>No assignments yet.</p>
//           ) : (
//             <ul className="space-y-2">
//               <AnimatePresence>
//                 {assignments.map((assignment, index) => (
//                   <motion.li
//                     key={index}
//                     className="bg-gray-800 p-4 rounded"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <p>
//                       <strong>{assignment.user}</strong> is assigned to <strong>{assignment.course}</strong>
//                       {assignment.deadline && (
//                         <span> (Deadline: {assignment.deadline})</span>
//                       )}
//                     </p>
//                     <p>{assignment.note && <em>Note: {assignment.note}</em>}</p>
//                     <button
//                       onClick={() => handleUnassign(index)}
//                       className="mt-2 px-3 py-1 bg-red-500 rounded hover:bg-red-600"
//                     >
//                       Unassign
//                     </button>
//                   </motion.li>
//                 ))}
//               </AnimatePresence>
//             </ul>
//           )}
//         </div>

//         {/* Export to CSV or Excel */}
//         <motion.button
//           onClick={exportToCSV}
//           className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Export to CSV
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default CourseAssignment;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Mock data (replace with API calls)
// const mockUsers = [
//   { id: 1, name: "John Doe", role: "Student" },
//   { id: 2, name: "Alice Johnson", role: "Student" },
// ];

// const mockCourses = [
//   { id: 1, name: "Cybersecurity 101", category: "Cybersecurity", difficulty: "Beginner" },
//   { id: 2, name: "Network Security Basics", category: "Cybersecurity", difficulty: "Intermediate" },
//   { id: 3, name: "Advanced Ethical Hacking", category: "Cybersecurity", difficulty: "Advanced" },
// ];

// // Animation variants
// const containerVariant = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const itemVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// // Main component
// const CourseAssignment = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState("");
//   const [filteredCourses, setFilteredCourses] = useState([]);

//   // Fetch courses dynamically
//   useEffect(() => {
//     setFilteredCourses(mockCourses);
//   }, []);

//   const handleAssignCourse = () => {
//     if (selectedUser && selectedCourse) {
//       setAssignments([...assignments, { user: selectedUser, course: selectedCourse }]);
//       setSelectedUser("");
//       setSelectedCourse("");
//     }
//   };

//   return (
//     <motion.div
//       className="p-6 min-h-screen flex flex-col items-center justify-center"
//       style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
//       variants={containerVariant}
//       initial="hidden"
//       animate="visible"
//     >
//       {/* Heading */}
//       <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#0ea5e9" }}>
//         Course Assignment
//       </h2>

//       {/* Form section */}
//       <motion.div
//         className="w-full max-w-md space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
//         variants={itemVariant}
//       >
//         {/* User selection */}
//         <div>
//           <label className="block text-sm font-semibold mb-2" style={{ color: "#9ca3af" }}>
//             Select User:
//           </label>
//           <select
//             className="w-full p-2 mb-4 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={selectedUser}
//             onChange={(e) => setSelectedUser(e.target.value)}
//             aria-label="Select user"
//           >
//             <option value="">Select User</option>
//             {mockUsers.map((user) => (
//               <option key={user.id} value={user.name}>
//                 {user.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Course selection */}
//         <div>
//           <label className="block text-sm font-semibold mb-2" style={{ color: "#9ca3af" }}>
//             Select Course:
//           </label>
//           <select
//             className="w-full p-2 mb-4 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//             value={selectedCourse}
//             onChange={(e) => setSelectedCourse(e.target.value)}
//             aria-label="Select course"
//           >
//             <option value="">Select Course</option>
//             {filteredCourses.map((course) => (
//               <option key={course.id} value={course.name}>
//                 {course.name} - {course.difficulty}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Assign button */}
//         <motion.button
//           onClick={handleAssignCourse}
//           className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           aria-label="Assign course"
//         >
//           Assign Course
//         </motion.button>
//       </motion.div>

//       {/* Assigned courses section */}
//       <motion.div className="w-full max-w-lg mt-8" variants={containerVariant}>
//         <h3 className="text-xl font-semibold mb-4" style={{ color: "#0ea5e9" }}>
//           Assigned Courses:
//         </h3>
//         <motion.ul className="space-y-2">
//           {assignments.map((assignment, index) => (
//             <motion.li
//               key={index}
//               className="bg-gray-800 p-3 rounded-lg"
//               variants={itemVariant}
//               aria-label={`Assignment for ${assignment.user}`}
//             >
//               {assignment.user} is assigned to {assignment.course}
//             </motion.li>
//           ))}
//         </motion.ul>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CourseAssignment;
// import React, { useState, useEffect } from "react"; 
// import Select from "react-select";
// import { format } from "date-fns";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import { CSVLink } from "react-csv"; // Import CSVLink for export functionality
// import 'react-toastify/dist/ReactToastify.css';

// // Custom styles for react-select
// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: "#1f2937", // Dark grey
//     borderColor: "#3b82f6", // Blue border
//     boxShadow: "none",
//     "&:hover": {
//       borderColor: "#60a5fa", // Lighter blue on hover
//     },
//   }),
//   menu: (provided) => ({
//     ...provided,
//     backgroundColor: "#1f2937", // Dark grey for the dropdown menu
//     color: "#ffffff", // White text for dropdown items
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? "#3b82f6" : "#1f2937", // Blue when focused
//     color: "#ffffff", // White text
//     "&:active": {
//       backgroundColor: "#2563eb", // Darker blue on click
//     },
//   }),
//   placeholder: (provided) => ({
//     ...provided,
//     color: "#bfbfbf", // Light grey for placeholder text
//   }),
// };

// const CourseAssignment = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [deadline, setDeadline] = useState("");
//   const [note, setNote] = useState("");
//   const [users, setUsers] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false); // Loading state for actions
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [assignmentToUnassign, setAssignmentToUnassign] = useState(null); // Track assignment to unassign

//   // Sample users and courses related to cybersecurity
//   useEffect(() => {
//     const fetchUsers = () => {
//       return [
//         { value: "user1", label: "John Doe" },
//         { value: "user2", label: "Jane Smith" },
//         { value: "user3", label: "Alice Johnson" },
//       ];
//     };

//     const fetchCourses = () => {
//       return [
//         { value: "course1", label: "Cybersecurity Fundamentals" },
//         { value: "course2", label: "Network Security" },
//         { value: "course3", label: "Ethical Hacking" },
//         { value: "course4", label: "Web Application Security" },
//       ];
//     };

//     setUsers(fetchUsers());
//     setCourses(fetchCourses());
//   }, []);

//   const handleAssignCourse = () => {
//     if (selectedUsers.length === 0 || selectedCourses.length === 0) {
//       toast.error("Please select both users and courses.");
//       return;
//     }

//     setLoading(true); // Start loading
//     const newAssignments = selectedUsers.map((user) =>
//       selectedCourses.map((course) => ({
//         user: user.label,
//         course: course.label,
//         dateAssigned: format(new Date(), "MM/dd/yyyy"),
//         deadline,
//         note,
//       }))
//     ).flat();

//     setAssignments([...assignments, ...newAssignments]);
//     setSelectedUsers([]);
//     setSelectedCourses([]);
//     setDeadline("");
//     setNote("");
//     setLoading(false); // Stop loading
//     toast.success("Courses assigned successfully!");
//   };

//   const openModal = (assignment) => {
//     setAssignmentToUnassign(assignment);
//     setIsModalOpen(true);
//   };

//   const handleUnassign = () => {
//     const updatedAssignments = assignments.filter(
//       (assignment) => assignment !== assignmentToUnassign
//     );
//     setAssignments(updatedAssignments);
//     setIsModalOpen(false);
//     toast.success("Course unassigned successfully!");
//   };

//   // Prepare data for CSV export
//   const csvData = assignments.map((assignment) => ({
//     User: assignment.user,
//     Course: assignment.course,
//     "Date Assigned": assignment.dateAssigned,
//     Deadline: assignment.deadline || "N/A",
//     Note: assignment.note || "N/A",
//   }));

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <ToastContainer /> {/* Toast notifications */}
//       <h2 className="text-3xl font-bold mb-6">Course Assignment</h2>

//       <div className="space-y-4">
//         {/* User and Course Selection */}
//         <div className="space-y-2">
//           <Select
//             isMulti
//             options={users}
//             value={selectedUsers}
//             onChange={setSelectedUsers}
//             placeholder="Select Users"
//             styles={customStyles}
//             className="w-full"
//           />

//           <Select
//             isMulti
//             options={courses}
//             value={selectedCourses}
//             onChange={setSelectedCourses}
//             placeholder="Select Courses"
//             styles={customStyles}
//             className="w-full"
//           />

//           <input
//             type="date"
//             className="w-full p-2 bg-gray-800 rounded"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             placeholder="Set Deadline"
//           />

//           <textarea
//             className="w-full p-2 bg-gray-800 rounded"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//           ></textarea>

//           <button
//             onClick={handleAssignCourse}
//             className={`px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
//             disabled={loading} // Disable button while loading
//           >
//             {loading ? "Assigning..." : "Assign Course"}
//           </button>
//         </div>

//         {/* Assignment History with Unassign */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold">Assignment History</h3>
//           {assignments.length === 0 ? (
//             <p>No assignments yet.</p>
//           ) : (
//             assignments.map((assignment, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800 p-4 rounded flex justify-between items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <div>
//                   <p>
//                     <strong>{assignment.course}</strong> (Assigned on: {assignment.dateAssigned})
//                     {assignment.deadline && (
//                       <span className="text-sm text-gray-400"> - Deadline: {assignment.deadline}</span>
//                     )}
//                   </p>
//                   {assignment.note && <em className="text-gray-300">Note: {assignment.note}</em>}
//                 </div>
//                 <button
//                   onClick={() => openModal(assignment)}
//                   className="ml-4 px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition duration-200"
//                 >
//                   Unassign
//                 </button>
//               </motion.div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Confirmation Modal for Unassigning */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-gray-900 p-6 rounded shadow-lg">
//             <h4 className="text-lg font-bold mb-4">Confirm Unassignment</h4>
//             <p>Are you sure you want to unassign this course?</p>
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="mr-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUnassign}
//                 className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Export to CSV */}
//       <br></br>
//       <CSVLink
//         data={csvData}
//         filename={"course_assignments.csv"}
//         className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition duration-200"
//       >
//         Export Assignments to CSV
//       </CSVLink>
//     </div>
//   );
// };

// export default CourseAssignment;
// import React, { useState, useEffect } from "react"; 
// import Select from "react-select";
// import { format } from "date-fns";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import { CSVLink } from "react-csv"; // Import CSVLink for export functionality
// import 'react-toastify/dist/ReactToastify.css';

// // Custom styles for react-select
// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: "#1f2937", // Dark grey
//     borderColor: "#3b82f6", // Blue border
//     boxShadow: "none",
//     "&:hover": {
//       borderColor: "#60a5fa", // Lighter blue on hover
//     },
//   }),
//   menu: (provided) => ({
//     ...provided,
//     backgroundColor: "#1f2937", // Dark grey for the dropdown menu
//     color: "#ffffff", // White text for dropdown items
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? "#3b82f6" : "#1f2937", // Blue when focused
//     color: "#ffffff", // White text
//     "&:active": {
//       backgroundColor: "#2563eb", // Darker blue on click
//     },
//   }),
//   placeholder: (provided) => ({
//     ...provided,
//     color: "#bfbfbf", // Light grey for placeholder text
//   }),
// };

// const CourseAssignment = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [note, setNote] = useState("");
//   const [users, setUsers] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false); // Loading state for actions
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [assignmentToUnassign, setAssignmentToUnassign] = useState(null); // Track assignment to unassign

//   // Sample users and courses related to cybersecurity
//   useEffect(() => {
//     const fetchUsers = () => {
//       return [
//         { value: "user1", label: "Aarav Singh" },
//         { value: "user2", label: "Saanvi Sharma" },
//         { value: "user3", label: "Vihaan Mehta" },
//         { value: "user4", label: "Anika Gupta" },
//         { value: "user5", label: "Vivaan Patel" },
//         { value: "user6", label: "Ishaan Kumar" },
//         { value: "user7", label: "Aanya Reddy" },
//         { value: "user8", label: "Kavya Joshi" },
//         { value: "user9", label: "Rohan Nair" },
//         { value: "user10", label: "Advika Rao" },
//         { value: "user11", label: "Dhruv Desai" },
//         { value: "user12", label: "Aryan Malhotra" },
//         { value: "user13", label: "Diya Bhatia" },
//         { value: "user14", label: "Yash Thakur" },
//         { value: "user15", label: "Aarohi Jain" },
//       ];
//     };

//     const fetchCourses = () => {
//       return [
//         { value: "course1", label: "Cybersecurity Fundamentals" },
//         { value: "course2", label: "Network Security" },
//         { value: "course3", label: "Ethical Hacking" },
//         { value: "course4", label: "Web Application Security" },
//       ];
//     };

//     setUsers(fetchUsers());
//     setCourses(fetchCourses());
//   }, []);

//   const handleAssignCourse = () => {
//     if (selectedUsers.length === 0 || selectedCourses.length === 0) {
//       toast.error("Please select both users and courses.");
//       return;
//     }

//     setLoading(true); // Start loading
//     const newAssignments = selectedUsers.map((user) =>
//       selectedCourses.map((course) => ({
//         user: user.label,
//         course: course.label,
//         dateAssigned: format(new Date(), "MM/dd/yyyy"),
//         note,
//       }))
//     ).flat();

//     setAssignments([...assignments, ...newAssignments]);
//     setSelectedUsers([]);
//     setSelectedCourses([]);
//     setNote("");
//     setLoading(false); // Stop loading
//     toast.success("Courses assigned successfully!");
//   };

//   const openModal = (assignment) => {
//     setAssignmentToUnassign(assignment);
//     setIsModalOpen(true);
//   };

//   const handleUnassign = () => {
//     const updatedAssignments = assignments.filter(
//       (assignment) => assignment !== assignmentToUnassign
//     );
//     setAssignments(updatedAssignments);
//     setIsModalOpen(false);
//     toast.success("Course unassigned successfully!");
//   };

//   // Prepare data for CSV export
//   const csvData = assignments.map((assignment) => ({
//     User: assignment.user,
//     Course: assignment.course,
//     "Date Assigned": assignment.dateAssigned,
//     Note: assignment.note || "N/A",
//   }));

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <ToastContainer /> {/* Toast notifications */}
//       <h2 className="text-3xl font-bold mb-6">Course Assignment</h2>

//       <div className="space-y-4">
//         {/* User and Course Selection */}
//         <div className="space-y-2">
//           <label htmlFor="user-select" className="block text-gray-400">
//             Select Users:
//           </label>
//           <Select
//             id="user-select"
//             isMulti
//             options={users}
//             value={selectedUsers}
//             onChange={setSelectedUsers}
//             placeholder="Select Users"
//             styles={customStyles}
//             className="w-full"
//           />

//           <label htmlFor="course-select" className="block text-gray-400">
//             Select Courses:
//           </label>
//           <Select
//             id="course-select"
//             isMulti
//             options={courses}
//             value={selectedCourses}
//             onChange={setSelectedCourses}
//             placeholder="Select Courses"
//             styles={customStyles}
//             className="w-full"
//           />

//           <label htmlFor="note" className="block text-gray-400">
//             Add a note (optional):
//           </label>
//           <textarea
//             id="note"
//             className="w-full p-2 bg-gray-800 rounded"
//             placeholder="Add a note (optional)"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//           ></textarea>

//           <button
//             onClick={handleAssignCourse}
//             className={`px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
//             disabled={loading} // Disable button while loading
//           >
//             {loading ? "Assigning..." : "Assign Course"}
//           </button>
//         </div>

//         {/* Assignment History with Unassign */}
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold">Assignment History</h3>
//           {assignments.length === 0 ? (
//             <p>No assignments yet.</p>
//           ) : (
//             assignments.map((assignment, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-800 p-4 rounded flex justify-between items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               >
//                 <div>
//                   <p>
//                     <strong>{assignment.course}</strong> (Assigned on: {assignment.dateAssigned})
//                   </p>
//                   {assignment.note && <em className="text-gray-300">Note: {assignment.note}</em>}
//                 </div>
//                 <button
//                   onClick={() => openModal(assignment)}
//                   className="ml-4 px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition duration-200"
//                 >
//                   Unassign
//                 </button>
//               </motion.div>
//             ))
//           )}
//         </div>

//         {/* CSV Export */}
//         <br></br>
//         <CSVLink
//           data={csvData}
//           filename={"course_assignments.csv"}
//           className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition duration-200"
//         >
//           Export to CSV
//         </CSVLink>
//       </div>

//       {/* Modal for Unassign */}
//       {isModalOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <div className="bg-gray-800 p-6 rounded">
//             <h3 className="text-xl mb-4">Confirm Unassign</h3>
//             <p>
//               Are you sure you want to unassign <strong>{assignmentToUnassign?.course}</strong> from{" "}
//               <strong>{assignmentToUnassign?.user}</strong>?
//             </p>
//             <div className="mt-4 space-x-2">
//               <button
//                 onClick={handleUnassign}
//                 className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition duration-200"
//               >
//                 Yes, Unassign
//               </button>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition duration-200"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CourseAssignment;


import React, { useState, useEffect } from "react"; 
import Select from "react-select";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { CSVLink } from "react-csv"; // Import CSVLink for export functionality
import 'react-toastify/dist/ReactToastify.css';

// Custom styles for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#1f2937", // Dark grey
    borderColor: "#3b82f6", // Blue border
    boxShadow: "none",
    "&:hover": {
      borderColor: "#60a5fa", // Lighter blue on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#1f2937", // Dark grey for the dropdown menu
    color: "#ffffff", // White text for dropdown items
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#3b82f6" : "#1f2937", // Blue when focused
    color: "#ffffff", // White text
    "&:active": {
      backgroundColor: "#2563eb", // Darker blue on click
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#bfbfbf", // Light grey for placeholder text
  }),
};

const CourseAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [note, setNote] = useState("");
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for actions
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [assignmentToUnassign, setAssignmentToUnassign] = useState(null); // Track assignment to unassign
  const [selectedCourseForSorting, setSelectedCourseForSorting] = useState(null); // State for sorting by course

  // Sample users and courses related to cybersecurity
  useEffect(() => {
    const fetchUsers = () => {
      return [
        { value: "user1", label: "Aarav Singh" },
        { value: "user2", label: "Saanvi Sharma" },
        { value: "user3", label: "Vihaan Mehta" },
        { value: "user4", label: "Anika Gupta" },
        { value: "user5", label: "Vivaan Patel" },
        { value: "user6", label: "Ishaan Kumar" },
        { value: "user7", label: "Aanya Reddy" },
        { value: "user8", label: "Kavya Joshi" },
        { value: "user9", label: "Rohan Nair" },
        { value: "user10", label: "Advika Rao" },
        { value: "user11", label: "Dhruv Desai" },
        { value: "user12", label: "Aryan Malhotra" },
        { value: "user13", label: "Diya Bhatia" },
        { value: "user14", label: "Yash Thakur" },
        { value: "user15", label: "Aarohi Jain" },
      ];
    };

    const fetchCourses = () => {
      return [
        { value: "course1", label: "Cybersecurity Fundamentals" },
        { value: "course2", label: "Network Security" },
        { value: "course3", label: "Ethical Hacking" },
        { value: "course4", label: "Web Application Security" },
      ];
    };

    setUsers(fetchUsers());
    setCourses(fetchCourses());
  }, []);

  const handleAssignCourse = () => {
    if (selectedUsers.length === 0 || selectedCourses.length === 0) {
      toast.error("Please select both users and courses.");
      return;
    }

    setLoading(true); // Start loading
    const newAssignments = selectedUsers.flatMap((user) =>
      selectedCourses.map((course) => ({
        user: user.label,
        course: course.label,
        dateAssigned: format(new Date(), "MM/dd/yyyy"),
        note,
      }))
    );

    setAssignments((prevAssignments) => [...prevAssignments, ...newAssignments]);
    setSelectedUsers([]);
    setSelectedCourses([]);
    setNote("");
    setLoading(false); // Stop loading
    toast.success("Courses assigned successfully!");
  };

  const openModal = (assignment) => {
    setAssignmentToUnassign(assignment);
    setIsModalOpen(true);
  };

  const handleUnassign = () => {
    const updatedAssignments = assignments.filter(
      (assignment) => assignment !== assignmentToUnassign
    );
    setAssignments(updatedAssignments);
    setIsModalOpen(false);
    toast.success("Course unassigned successfully!");
  };

  // Prepare data for CSV export
  const csvData = assignments.map((assignment) => ({
    User: assignment.user,
    Course: assignment.course,
    "Date Assigned": assignment.dateAssigned,
    Note: assignment.note || "N/A",
  }));

  // Filter assignments based on selected course for sorting
  const filteredAssignments = selectedCourseForSorting
    ? assignments.filter(assignment => assignment.course === selectedCourseForSorting.label)
    : assignments;

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <ToastContainer /> {/* Toast notifications */}
      <h2 className="text-3xl font-bold mb-6">Course Assignment</h2>

      <div className="space-y-4">
        {/* User and Course Selection */}
        <div className="space-y-2">
          <label htmlFor="user-select" className="block text-gray-400">
            Select Users:
          </label>
          <Select
            id="user-select"
            isMulti
            options={users}
            value={selectedUsers}
            onChange={setSelectedUsers}
            placeholder="Select Users"
            styles={customStyles}
            className="w-full"
          />

          <label htmlFor="course-select" className="block text-gray-400">
            Select Courses:
          </label>
          <Select
            id="course-select"
            isMulti
            options={courses}
            value={selectedCourses}
            onChange={setSelectedCourses}
            placeholder="Select Courses"
            styles={customStyles}
            className="w-full"
          />

          <label htmlFor="note" className="block text-gray-400">
            Add a note (optional):
          </label>
          <textarea
            id="note"
            className="w-full p-2 bg-gray-800 rounded"
            placeholder="Add a note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>

          <button
            onClick={handleAssignCourse}
            className={`px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Assigning..." : "Assign Course"}
          </button>
        </div>

        {/* Sorting by Course */}
        <div className="space-y-2">
          <label htmlFor="sort-course" className="block text-gray-400">
            Sort Assignments by Course:
          </label>
          <Select
            id="sort-course"
            options={courses}
            value={selectedCourseForSorting}
            onChange={setSelectedCourseForSorting}
            placeholder="Select a course to sort"
            styles={customStyles}
            className="w-full"
          />
        </div>

        {/* Assignment History with Unassign */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Assignment History</h3>
          {filteredAssignments.length === 0 ? (
            <p>No assignments yet.</p>
          ) : (
            filteredAssignments.map((assignment, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <p>
                    <strong>{assignment.user}</strong> has been assigned to{" "}
                    <strong>{assignment.course}</strong> (Assigned on: {assignment.dateAssigned})
                  </p>
                  {assignment.note && <em className="text-gray-300">Note: {assignment.note}</em>}
                </div>
                <button
                  onClick={() => openModal(assignment)}
                  className="ml-4 px-2 py-1 bg-red-500 rounded hover:bg-red-600 transition duration-200"
                >
                  Unassign
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* CSV Export */}
      <div className="mt-6">
        <CSVLink
          data={csvData}
          filename="course_assignments.csv"
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition duration-200"
        >
          Export Assignments to CSV
        </CSVLink>
      </div>

      {/* Unassign Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-gray-900 p-6 rounded" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4">Confirm Unassignment</h3>
            <p>
              Are you sure you want to unassign <strong>{assignmentToUnassign?.user}</strong> from <strong>{assignmentToUnassign?.course}</strong>?
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleUnassign}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition duration-200"
              >
                Yes, Unassign
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CourseAssignment;
