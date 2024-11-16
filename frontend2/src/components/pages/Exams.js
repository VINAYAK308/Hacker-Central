// import React from 'react';

// const Exams = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Exams</h2>
//       <p>Your upcoming exams and their schedules will be listed here.</p>
//     </div>
//   );
// };

// export default Exams;


// import React from 'react';
// import { motion } from 'framer-motion';

// const Exams = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-black text-white flex items-center justify-center"
//     >
//       <h2 className="text-3xl">Exams Page</h2>
//     </motion.div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaBookOpen, FaClock, FaInfoCircle } from 'react-icons/fa';

// // Simulated API call function
// const fetchEnrolledCourses = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: 'Introduction to Cybersecurity', examDate: '2024-10-20', duration: '1 hour', description: 'Basic concepts of cybersecurity.' },
//         { id: 2, title: 'Ethical Hacking Basics', examDate: '2024-10-22', duration: '1.5 hours', description: 'Fundamentals of ethical hacking.' },
//         { id: 3, title: 'Network Security', examDate: '2024-10-25', duration: '2 hours', description: 'Understanding network security protocols.' },
//         { id: 4, title: 'Malware Analysis', examDate: '2024-11-05', duration: '2 hours', description: 'Techniques for analyzing malware and its effects.' },
//         { id: 5, title: 'Web Application Security', examDate: '2024-11-10', duration: '1.5 hours', description: 'Common vulnerabilities in web applications and how to prevent them.' },
//         { id: 6, title: 'Cloud Security', examDate: '2024-11-15', duration: '2.5 hours', description: 'Securing cloud infrastructures and understanding shared responsibility models.' },
//         { id: 7, title: 'Digital Forensics', examDate: '2024-11-20', duration: '3 hours', description: 'Principles and techniques of digital forensics.' },
//         { id: 8, title: 'Incident Response', examDate: '2024-11-25', duration: '1 hour', description: 'Steps and strategies for responding to security incidents.' },
//       ]);
//     }, 1000); // Simulated delay
//   });
// };

// const Exams = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedCourse, setExpandedCourse] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const courses = await fetchEnrolledCourses();
//         setEnrolledCourses(courses);
//       } catch (err) {
//         setError("Failed to load courses. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourses();
//   }, []);

//   const handleTakeExam = (courseId) => {
//     // Navigate to the exam page for the selected course
//     toast.success("Navigating to exam...");
//     navigate(`/exam/${courseId}`);
//   };

//   const handleToggleDescription = (courseId) => {
//     setExpandedCourse(expandedCourse === courseId ? null : courseId);
//   };

//   if (loading) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16" />
//       </motion.div>
//     );
//   }

//   if (error) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p className="text-lg">{error}</p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex flex-col items-center"
//     >
//       <h2 className="text-4xl mb-6 font-bold text-blue-500">Your Cybersecurity Exams</h2>
//       <ToastContainer />

//       <div className="w-full max-w-4xl">
//         {enrolledCourses.length === 0 ? (
//           <p className="text-center">You are not enrolled in any cybersecurity courses.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {enrolledCourses.map((course) => (
//               <motion.div
//                 key={course.id}
//                 className="bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
//                 whileHover={{ scale: 1.05 }}
//                 aria-label={`Course: ${course.title}`}
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-xl font-semibold flex items-center">
//                     <FaBookOpen className="mr-2" /> {course.title}
//                   </h3>
//                   <button
//                     className="text-blue-400 hover:underline"
//                     onClick={() => handleToggleDescription(course.id)}
//                     aria-label={`Toggle description for ${course.title}`}
//                   >
//                     {expandedCourse === course.id ? 'Hide' : 'Show'} Description
//                   </button>
//                 </div>
//                 <p className="text-gray-300 flex items-center">
//                   <FaClock className="mr-2" /> Exam Date: {course.examDate}
//                 </p>
//                 <p className="text-gray-300 flex items-center">
//                   <FaInfoCircle className="mr-2" /> Duration: {course.duration}
//                 </p>
//                 {expandedCourse === course.id && (
//                   <p className="text-gray-300 mt-2">{course.description}</p>
//                 )}
//                 <button
//                   className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded transition duration-300"
//                   onClick={() => handleTakeExam(course.id)}
//                 >
//                   Take Exam
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaBookOpen, FaClock, FaInfoCircle } from 'react-icons/fa';

// // Simulated API call function
// const fetchEnrolledCourses = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: 'Introduction to Cybersecurity', examDate: '2024-10-20', duration: '1 hour', description: 'Basic concepts of cybersecurity.' },
//         { id: 2, title: 'Ethical Hacking Basics', examDate: '2024-10-22', duration: '1.5 hours', description: 'Fundamentals of ethical hacking.' },
//         { id: 3, title: 'Network Security', examDate: '2024-10-25', duration: '2 hours', description: 'Understanding network security protocols.' },
//         { id: 4, title: 'Malware Analysis', examDate: '2024-11-05', duration: '2 hours', description: 'Techniques for analyzing malware and its effects.' },
//         { id: 5, title: 'Web Application Security', examDate: '2024-11-10', duration: '1.5 hours', description: 'Common vulnerabilities in web applications and how to prevent them.' },
//         { id: 6, title: 'Cloud Security', examDate: '2024-11-15', duration: '2.5 hours', description: 'Securing cloud infrastructures and understanding shared responsibility models.' },
//         { id: 7, title: 'Digital Forensics', examDate: '2024-11-20', duration: '3 hours', description: 'Principles and techniques of digital forensics.' },
//         { id: 8, title: 'Incident Response', examDate: '2024-11-25', duration: '1 hour', description: 'Steps and strategies for responding to security incidents.' },
//       ]);
//     }, 1000); // Simulated delay
//   });
// };

// const CourseCard = ({ course, onToggleDescription, onTakeExam, isExpanded }) => (
//   <motion.div
//     className="bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700"
//     whileHover={{ scale: 1.05 }}
//     aria-label={`Course: ${course.title}`}
//   >
//     <div className="flex justify-between items-center mb-2">
//       <h3 className="text-xl font-semibold flex items-center">
//         <FaBookOpen className="mr-2" /> {course.title}
//       </h3>
//       <button
//         className="text-blue-400 hover:underline"
//         onClick={onToggleDescription}
//         aria-label={`Toggle description for ${course.title}`}
//       >
//         {isExpanded ? 'Hide' : 'Show'} Description
//       </button>
//     </div>
//     <p className="text-gray-300 flex items-center">
//       <FaClock className="mr-2" /> Exam Date: {course.examDate}
//     </p>
//     <p className="text-gray-300 flex items-center">
//       <FaInfoCircle className="mr-2" /> Duration: {course.duration}
//     </p>
//     {isExpanded && (
//       <p className="text-gray-300 mt-2">{course.description}</p>
//     )}
//     <button
//       className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded transition duration-300"
//       onClick={onTakeExam}
//     >
//       Take Exam
//     </button>
//   </motion.div>
// );

// const Exams = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedCourse, setExpandedCourse] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const courses = await fetchEnrolledCourses();
//         setEnrolledCourses(courses);
//       } catch (err) {
//         setError("Failed to load courses. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourses();
//   }, []);

//   const handleTakeExam = (courseId) => {
//     toast.success("Navigating to exam...");
//     navigate(`/exam/${courseId}`);
//   };

//   const handleToggleDescription = (courseId) => {
//     setExpandedCourse(expandedCourse === courseId ? null : courseId);
//   };

//   // Filter courses based on search term
//   const filteredCourses = enrolledCourses.filter(course =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16" />
//       </motion.div>
//     );
//   }

//   if (error) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p className="text-lg">{error}</p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex flex-col items-center"
//     >
//       <h2 className="text-4xl mb-6 font-bold text-blue-500">Your Cybersecurity Exams</h2>

//       {/* Search Bar */}
//       {/* <input
//         type="text"
//         placeholder="Search for courses..."
//         className="mb-4 p-2 w-full max-w-md border rounded"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         aria-label="Search for courses"
//       /> */}

//       <ToastContainer />

//       <div className="w-full max-w-4xl">
//         {filteredCourses.length === 0 ? (
//           <p className="text-center">No courses found. Please try another search.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {filteredCourses.map((course) => (
//               <CourseCard
//                 key={course.id}
//                 course={course}
//                 onToggleDescription={() => handleToggleDescription(course.id)}
//                 onTakeExam={() => handleTakeExam(course.id)}
//                 isExpanded={expandedCourse === course.id}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaBookOpen, FaClock, FaInfoCircle } from 'react-icons/fa';

// // Simulated API call function
// const fetchEnrolledCourses = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: 'Introduction to Cybersecurity', examDate: '2024-10-20', duration: '1 hour', description: 'Basic concepts of cybersecurity.' },
//         { id: 2, title: 'Ethical Hacking Basics', examDate: '2024-10-22', duration: '1.5 hours', description: 'Fundamentals of ethical hacking.' },
//         { id: 3, title: 'Network Security', examDate: '2024-10-25', duration: '2 hours', description: 'Understanding network security protocols.' },
//         { id: 4, title: 'Malware Analysis', examDate: '2024-11-05', duration: '2 hours', description: 'Techniques for analyzing malware and its effects.' },
//         { id: 5, title: 'Web Application Security', examDate: '2024-11-10', duration: '1.5 hours', description: 'Common vulnerabilities in web applications and how to prevent them.' },
//         { id: 6, title: 'Cloud Security', examDate: '2024-11-15', duration: '2.5 hours', description: 'Securing cloud infrastructures and understanding shared responsibility models.' },
//         { id: 7, title: 'Digital Forensics', examDate: '2024-11-20', duration: '3 hours', description: 'Principles and techniques of digital forensics.' },
//         { id: 8, title: 'Incident Response', examDate: '2024-11-25', duration: '1 hour', description: 'Steps and strategies for responding to security incidents.' },
//       ]);
//     }, 1000); // Simulated delay
//   });
// };

// const CourseCard = ({ course, onToggleDescription, onTakeExam, isExpanded }) => (
//   <motion.div
//     className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between mx-4 my-4"
//     whileHover={{ scale: 1.05 }}
//     aria-label={`Course: ${course.title}`}
//   >
//     <div>
//       <h3 className="text-xl font-semibold flex items-center mb-2 text-blue-400">
//         <FaBookOpen className="mr-2" /> {course.title}
//       </h3>
//       <p className="text-gray-300 flex items-center mb-1">
//         <FaClock className="mr-2" /> Exam Date: {course.examDate}
//       </p>
//       <p className="text-gray-300 flex items-center mb-4">
//         <FaInfoCircle className="mr-2" /> Duration: {course.duration}
//       </p>
//       {isExpanded && (
//         <p className="text-gray-200 mb-4">{course.description}</p>
//       )}
//     </div>
//     <div className="flex flex-col">
//       <button
//         className="bg-blue-600 hover:bg-blue-500 text-white py-2 rounded transition duration-300 mb-2"
//         onClick={onTakeExam}
//       >
//         Take Exam
//       </button>
//       <button
//         className="text-blue-400 hover:underline mb-2"
//         onClick={onToggleDescription}
//         aria-label={`Toggle description for ${course.title}`}
//       >
//         {isExpanded ? 'Hide' : 'Show'} Description
//       </button>
//     </div>
//   </motion.div>
// );

// const Exams = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedCourse, setExpandedCourse] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const courses = await fetchEnrolledCourses();
//         setEnrolledCourses(courses);
//       } catch (err) {
//         setError("Failed to load courses. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourses();
//   }, []);

//   const handleTakeExam = (courseId) => {
//     toast.success("Navigating to exam...");
//     navigate(`/exam/${courseId}`);
//   };

//   const handleToggleDescription = (courseId) => {
//     setExpandedCourse(expandedCourse === courseId ? null : courseId);
//   };

//   // Filter courses based on search term
//   const filteredCourses = enrolledCourses.filter(course =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16" />
//       </motion.div>
//     );
//   }

//   if (error) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p className="text-lg">{error}</p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex flex-col items-center"
//     >
//       <h2 className="text-4xl mb-6 font-bold text-blue-500">Your Cybersecurity Exams</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search for courses..."
//         className="mb-4 p-2 w-full max-w-md border border-blue-600 rounded text-gray-800"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         aria-label="Search for courses"
//       />

//       <ToastContainer />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
//         {filteredCourses.length === 0 ? (
//           <p className="text-center w-full">No courses found. Please try another search.</p>
//         ) : (
//           filteredCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               onToggleDescription={() => handleToggleDescription(course.id)}
//               onTakeExam={() => handleTakeExam(course.id)}
//               isExpanded={expandedCourse === course.id}
//             />
//           ))
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Exams;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaBookOpen, FaClock, FaInfoCircle } from 'react-icons/fa';

// // Simulated API call function
// const fetchEnrolledCourses = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { 
//           id: 1, 
//           title: 'Introduction to Cybersecurity', 
//           examDate: '2024-10-20', 
//           duration: '1 hour', 
//           description: 'Basic concepts of cybersecurity, covering topics such as threats, vulnerabilities, and defense mechanisms. This course is essential for understanding the fundamentals of cybersecurity and its importance in the digital world.',
//           completed: true
//         },
//         { 
//           id: 2, 
//           title: 'Ethical Hacking Basics', 
//           examDate: '2024-10-22', 
//           duration: '1.5 hours', 
//           description: 'Learn the fundamentals of ethical hacking, including tools and techniques used by ethical hackers. This course provides insight into the mindset of a hacker and how to protect against attacks.',
//           completed: false
//         },
//         { 
//           id: 3, 
//           title: 'Network Security', 
//           examDate: '2024-10-25', 
//           duration: '2 hours', 
//           description: 'This course covers the principles of securing networks, including firewalls, intrusion detection systems, and secure network design. It is crucial for anyone interested in network administration and security.',
//           completed: false
//         },
//         { 
//           id: 4, 
//           title: 'Malware Analysis', 
//           examDate: '2024-11-05', 
//           duration: '2 hours', 
//           description: 'Gain skills in analyzing malware and understanding its effects on systems. This course covers techniques for reverse engineering malware and identifying potential threats.',
//           completed: false
//         },
//         { 
//           id: 5, 
//           title: 'Web Application Security', 
//           examDate: '2024-11-10', 
//           duration: '1.5 hours', 
//           description: 'Explore common vulnerabilities in web applications, such as SQL injection and cross-site scripting (XSS). This course emphasizes secure coding practices and how to safeguard against attacks.',
//           completed: false
//         },
//         { 
//           id: 6, 
//           title: 'Cloud Security', 
//           examDate: '2024-11-15', 
//           duration: '2.5 hours', 
//           description: 'Learn about securing cloud infrastructures and the shared responsibility model. This course is important for understanding the unique security challenges posed by cloud computing.',
//           completed: false
//         },
//         // { 
//         //   id: 7, 
//         //   title: 'Digital Forensics', 
//         //   examDate: '2024-11-20', 
//         //   duration: '3 hours', 
//         //   description: 'This course covers principles and techniques used in digital forensics, including data recovery and analysis. It's essential for professionals in law enforcement and cybersecurity.',
//         //   completed: false
//         // },
//         { 
//           id:7, 
//           title: 'Incident Response', 
//           examDate: '2024-11-25', 
//           duration: '1 hour', 
//           description: 'Understand the steps and strategies for responding to security incidents. This course prepares you to handle incidents effectively, minimizing damage and recovery time.',
//           completed: false
//         },
//       ]);
//     }, 1000); // Simulated delay
//   });
// };

// const CourseCard = ({ course, onToggleDescription, onTakeExam, isExpanded }) => (
//   <motion.div
//     className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between mx-4 my-2 w-full"
//     whileHover={{ scale: 1.05 }}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: 20 }}
//     transition={{ duration: 0.3 }}
//     aria-label={`Course: ${course.title}`}
//   >
//     <div>
//       <h3 className="text-xl font-semibold flex items-center mb-2 text-blue-400">
//         <FaBookOpen className="mr-2" /> {course.title}
//       </h3>
//       <p className="text-gray-300 flex items-center mb-1">
//         <FaClock className="mr-2" /> Exam Date: {course.examDate}
//       </p>
//       <p className="text-gray-300 flex items-center mb-4">
//         <FaInfoCircle className="mr-2" /> Duration: {course.duration}
//       </p>
//       {isExpanded && (
//         <p className="text-gray-200 mb-4">{course.description}</p>
//       )}
//       <p className={`text-gray-200 mb-2 ${course.completed ? 'font-bold text-green-500' : ''}`}>
//         {course.completed ? 'Completed' : 'In Progress'}
//       </p>
//     </div>
//     <div className="flex flex-col">
//       <motion.button
//         className="bg-blue-600 hover:bg-blue-500 text-white py-2 rounded transition duration-300 mb-2 shadow-md hover:shadow-lg"
//         onClick={onTakeExam}
//         whileHover={{ scale: 1.05, backgroundColor: '#3b82f6' }} // Example color adjustment
//       >
//         Take Exam
//       </motion.button>
//       <motion.button
//         className="text-blue-400 hover:underline mb-2"
//         onClick={onToggleDescription}
//         aria-label={`Toggle description for ${course.title}`}
//         whileHover={{ color: 'blue-300' }}
//       >
//         {isExpanded ? 'Hide' : 'Show'} Description
//       </motion.button>
//     </div>
//   </motion.div>
// );

// const Exams = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [expandedCourse, setExpandedCourse] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const courses = await fetchEnrolledCourses();
//         setEnrolledCourses(courses);
//       } catch (err) {
//         setError("Failed to load courses. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourses();
//   }, []);

//   const handleTakeExam = (courseId) => {
//     toast.success("Navigating to exam...");
//     navigate(`/exam/${courseId}`);
//   };

//   const handleToggleDescription = (courseId) => {
//     setExpandedCourse(expandedCourse === courseId ? null : courseId);
//   };

//   // Filter courses based on search term
//   const filteredCourses = enrolledCourses.filter(course =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       // <motion.div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
//       //   <p>Loading...</p>
//       // </motion.div>
//       <div className="flex items-center justify-center min-h-screen bg-black">
//         <div className="flex flex-col items-center">
//           <div className="loader w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin mb-4"></div>
//           <p className="text-white">Loading courses...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <motion.div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
//         <p className="text-lg">{error}</p>
//         <button className="bg-blue-600 text-white py-2 px-4 rounded mt-4" onClick={() => window.location.reload()}>
//           Retry
//         </button>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex flex-col items-center"
//     >
//       <h2 className="text-4xl mb-6 font-bold text-blue-500">Your Cybersecurity Exams</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search for courses..."
//         className="mb-4 p-3 w-full max-w-md border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         aria-label="Search for courses"
//       />

//       <ToastContainer />

//       <div className="flex flex-col w-full max-w-5xl">
//         {filteredCourses.length === 0 ? (
//           <p className="text-center w-full">No courses found. Please try another search.</p>
//         ) : (
//           filteredCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               onToggleDescription={() => handleToggleDescription(course.id)}
//               onTakeExam={() => handleTakeExam(course.id)}
//               isExpanded={expandedCourse === course.id}
//             />
//           ))
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default Exams;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";

// const Exams = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("all");

//   const navigate = useNavigate();

//   // Simulated fetch function to get cybersecurity courses
//   const fetchCybersecurityCourses = async () => {
//     setLoading(true);
//     try {
//       // Simulate an API call
//       const response = [
//         { id: 1, title: "Introduction to Cybersecurity", dueDate: "2024-11-30", completed: false },
//         { id: 2, title: "Network Security Fundamentals", dueDate: "2024-12-05", completed: false },
//         { id: 3, title: "Ethical Hacking Basics", dueDate: "2024-12-10", completed: true },
//         { id: 4, title: "Advanced Threat Detection", dueDate: "2024-12-15", completed: false },
//         { id: 5, title: "Data Protection and Privacy", dueDate: "2024-12-20", completed: false },
//         { id: 6, title: "Incident Response Strategies", dueDate: "2024-12-25", completed: false },
//         // Add more courses as needed
//       ];
//       setEnrolledCourses(response);
//     } catch (error) {
//       toast.error("Error fetching courses.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCybersecurityCourses();
//   }, []);

//   // Filter courses based on selected status
//   const filteredCourses = enrolledCourses.filter((course) => {
//     if (filter === "completed") return course.completed;
//     if (filter === "in-progress") return !course.completed;
//     return true; // all courses
//   });

//   // Handle exam taking action
//   const handleTakeExam = (courseId) => {
//     if (window.confirm("Are you sure you want to take this exam?")) {
//       toast.success("Navigating to exam...");
//       navigate(`/exam/${courseId}`);
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-purple-800">
//         <div className="flex flex-col items-center">
//           <div className="loader w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin mb-4"></div>
//           <p className="text-white">Loading your enrolled courses...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black p-4">
//       <h1 className="text-3xl font-bold text-white mb-4">Your Cybersecurity Exams</h1>

//       {/* Filter Dropdown */}
//       <select
//         onChange={(e) => setFilter(e.target.value)}
//         value={filter}
//         className="mb-4 p-2 bg-gray-700 text-white rounded shadow-lg transition-transform duration-200 hover:scale-105"
//       >
//         <option value="all">All Courses</option>
//         <option value="completed">Completed Courses</option>
//         <option value="in-progress">In Progress Courses</option>
//       </select>

//       {/* Course Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map((course) => (
//             <motion.div
//               key={course.id}
//               className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
//               whileHover={{ scale: 1.05 }}
//               aria-label={`Exam for ${course.title}`}
//             >
//               <h3 className="text-xl font-bold text-blue-400">{course.title}</h3>
//               <p className="text-gray-300">Due Date: {course.dueDate}</p>
//               <button
//                 onClick={() => handleTakeExam(course.id)}
//                 className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
//                 aria-label={`Take exam for ${course.title}`}
//               >
//                 Take Exam
//               </button>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-white">No courses found. Try broadening your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Exams;
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify"; // For displaying notifications
// import { motion } from "framer-motion"; // For adding animations

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false); // State to track loading status
//     const [enrolledCourses, setEnrolledCourses] = useState([]); // State to store enrolled courses

//     // Function to fetch cybersecurity courses
//     const fetchCybersecurityCourses = async () => {
//         setLoading(true); // Set loading to true while fetching data
//         try {
//             // Simulated response, replace with actual API call
//             const response = [
//                 {
//                     id: 1,
//                     title: "Introduction to Cybersecurity",
//                     dueDate: "2024-11-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 // Additional courses can be added here
//                 {
//                     id: 2,
//                     title: "Network Security Fundamentals",
//                     dueDate: "2024-12-05",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: true },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 // More courses...
//             ];
//             setEnrolledCourses(response); // Update state with fetched courses
//         } catch (error) {
//             toast.error("Error fetching courses."); // Display error message if fetching fails
//         } finally {
//             setLoading(false); // Set loading to false after fetching is done
//         }
//     };

//     // useEffect to fetch courses when the component mounts
//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Cybersecurity Courses</h1>
//             {loading ? (
//                 <p className="text-lg">Loading...</p> // Display loading text if data is being fetched
//             ) : (
//                 <ul>
//                     {enrolledCourses.map((course) => (
//                         <motion.li
//                             key={course.id}
//                             className="mb-4 border p-4 rounded-lg shadow bg-gray-800" // Styling for each course card
//                             initial={{ opacity: 0, y: -20 }} // Initial animation state
//                             animate={{ opacity: 1, y: 0 }} // Animation to show course
//                             exit={{ opacity: 0, y: 20 }} // Animation when course is removed
//                             transition={{ duration: 0.3 }} // Animation duration
//                         >
//                             <h2 className="text-xl font-semibold text-blue-400">{course.title}</h2>
//                             <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <h3 className="font-medium mt-2 text-lg">Levels:</h3>
//                             <motion.ul className="ml-4">
//                                 {course.levels.map((level) => (
//                                     <motion.li
//                                         key={level.id}
//                                         initial={{ opacity: 0, y: -10 }} // Initial animation state for levels
//                                         animate={{ opacity: 1, y: 0 }} // Show level with animation
//                                         exit={{ opacity: 0, y: 10 }} // Animation when level is removed
//                                         transition={{ duration: 0.3 }} // Animation duration
//                                         className={`flex justify-between ${level.completed ? 'text-green-400' : 'text-red-400'}`} // Color based on completion
//                                     >
//                                         {level.title} - {level.completed ? "Completed" : "Not Completed"}
//                                     </motion.li>
//                                 ))}
//                             </motion.ul>
//                         </motion.li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify"; // For displaying notifications
// import { motion } from "framer-motion"; // For adding animations

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false); // State to track loading status
//     const [enrolledCourses, setEnrolledCourses] = useState([]); // State to store enrolled courses

//     // Function to fetch cybersecurity courses
//     const fetchCybersecurityCourses = async () => {
//         setLoading(true); // Set loading to true while fetching data
//         try {
//             // Simulated response, replace with actual API call
//             const response = [
//                 {
//                     id: 1,
//                     title: "Introduction to Cybersecurity",
//                     dueDate: "2024-11-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 2,
//                     title: "Network Security Fundamentals",
//                     dueDate: "2024-12-05",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: true },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 3,
//                     title: "Ethical Hacking and Penetration Testing",
//                     dueDate: "2024-12-15",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 4,
//                     title: "Cybersecurity Risk Management",
//                     dueDate: "2024-12-20",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//             ];
//             setEnrolledCourses(response); // Update state with fetched courses
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`); // Display error message if fetching fails
//         } finally {
//             setLoading(false); // Set loading to false after fetching is done
//         }
//     };

//     // useEffect to fetch courses when the component mounts
//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     // Function to toggle level completion
//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses => 
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     return {
//                         ...course,
//                         levels: course.levels.map(level =>
//                             level.id === levelId ? { ...level, completed: !level.completed } : level
//                         ),
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Cybersecurity Courses</h1>
//             {loading ? (
//                 <p className="text-lg">Loading...</p> // Display loading text if data is being fetched
//             ) : (
//                 <ul>
//                     {enrolledCourses.map((course) => (
//                         <motion.li
//                             key={course.id}
//                             className="mb-4 border p-4 rounded-lg shadow bg-gray-800 hover:shadow-lg transition-shadow"
//                             initial={{ opacity: 0, y: -20 }} // Initial animation state
//                             animate={{ opacity: 1, y: 0 }} // Animation to show course
//                             exit={{ opacity: 0, y: 20 }} // Animation when course is removed
//                             transition={{ duration: 0.3 }} // Animation duration
//                         >
//                             <h2 className="text-xl font-semibold text-blue-400">{course.title}</h2>
//                             <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <h3 className="font-medium mt-2 text-lg">Levels:</h3>
//                             <motion.ul className="ml-4">
//                                 {course.levels.map((level) => (
//                                     <motion.li
//                                         key={level.id}
//                                         initial={{ opacity: 0, y: -10 }} // Initial animation state for levels
//                                         animate={{ opacity: 1, y: 0 }} // Show level with animation
//                                         exit={{ opacity: 0, y: 10 }} // Animation when level is removed
//                                         transition={{ duration: 0.3 }} // Animation duration
//                                         className={`flex justify-between cursor-pointer ${level.completed ? 'text-green-400' : 'text-red-400'}`} // Color based on completion
//                                         onClick={() => toggleLevelCompletion(course.id, level.id)} // Toggle completion on click
//                                     >
//                                         {level.title} - {level.completed ? "Completed" : "Not Completed"}
//                                     </motion.li>
//                                 ))}
//                             </motion.ul>
//                         </motion.li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify"; // For displaying notifications
// import { motion } from "framer-motion"; // For adding animations

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false); // State to track loading status
//     const [enrolledCourses, setEnrolledCourses] = useState([]); // State to store enrolled courses

//     // Function to fetch cybersecurity courses
//     const fetchCybersecurityCourses = async () => {
//         setLoading(true); // Set loading to true while fetching data
//         try {
//             // Simulated response, replace with actual API call
//             const response = [
//                 {
//                     id: 1,
//                     title: "Introduction to Cybersecurity",
//                     dueDate: "2024-11-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 2,
//                     title: "Network Security Fundamentals",
//                     dueDate: "2024-12-05",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: true },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 3,
//                     title: "Ethical Hacking and Penetration Testing",
//                     dueDate: "2024-12-15",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 4,
//                     title: "Cybersecurity Risk Management",
//                     dueDate: "2024-12-20",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//             ];
//             setEnrolledCourses(response); // Update state with fetched courses
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`); // Display error message if fetching fails
//         } finally {
//             setLoading(false); // Set loading to false after fetching is done
//         }
//     };

//     // useEffect to fetch courses when the component mounts
//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     // Function to toggle level completion
//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses => 
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     return {
//                         ...course,
//                         levels: course.levels.map(level =>
//                             level.id === levelId ? { ...level, completed: !level.completed } : level
//                         ),
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     return (
//         <div className="p-4 bg-black text-white"> {/* Black background and white text */}
//             <h1 className="text-2xl font-bold mb-4">Cybersecurity Courses</h1>
//             {loading ? (
//                 <p className="text-lg">Loading...</p> // Display loading text if data is being fetched
//             ) : (
//                 <ul>
//                     {enrolledCourses.map((course) => (
//                         <motion.li
//                             key={course.id}
//                             className="mb-4 border p-4 rounded-lg shadow bg-gray-900 hover:shadow-lg transition-shadow" // Darker card background
//                             initial={{ opacity: 0, y: -20 }} // Initial animation state
//                             animate={{ opacity: 1, y: 0 }} // Animation to show course
//                             exit={{ opacity: 0, y: 20 }} // Animation when course is removed
//                             transition={{ duration: 0.3 }} // Animation duration
//                         >
//                             <h2 className="text-xl font-semibold text-blue-400">{course.title}</h2>
//                             <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <h3 className="font-medium mt-2 text-lg">Levels:</h3>
//                             <motion.ul className="ml-4">
//                                 {course.levels.map((level) => (
//                                     <motion.li
//                                         key={level.id}
//                                         initial={{ opacity: 0, y: -10 }} // Initial animation state for levels
//                                         animate={{ opacity: 1, y: 0 }} // Show level with animation
//                                         exit={{ opacity: 0, y: 10 }} // Animation when level is removed
//                                         transition={{ duration: 0.3 }} // Animation duration
//                                         className={`flex justify-between cursor-pointer ${level.completed ? 'text-green-400' : 'text-red-400'}`} // Color based on completion
//                                         onClick={() => toggleLevelCompletion(course.id, level.id)} // Toggle completion on click
//                                     >
//                                         {level.title} - {level.completed ? "Completed" : "Not Completed"}
//                                     </motion.li>
//                                 ))}
//                             </motion.ul>
//                         </motion.li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify"; // For displaying notifications
// import { motion } from "framer-motion"; // For adding animations

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false); // State to track loading status
//     const [enrolledCourses, setEnrolledCourses] = useState([]); // State to store enrolled courses
//     const [expandedCourses, setExpandedCourses] = useState(new Set()); // State to track expanded courses

//     // Function to fetch cybersecurity courses
//     const fetchCybersecurityCourses = async () => {
//         setLoading(true); // Set loading to true while fetching data
//         try {
//             // Simulated response with more courses
//             const response = [
//                 {
//                     id: 1,
//                     title: "Introduction to Cybersecurity",
//                     dueDate: "2024-11-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 2,
//                     title: "Network Security Fundamentals",
//                     dueDate: "2024-12-05",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: true },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 3,
//                     title: "Ethical Hacking Essentials",
//                     dueDate: "2024-12-15",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Introduction", completed: false },
//                         { id: 2, title: "Level 2: Tools and Techniques", completed: false },
//                         { id: 3, title: "Level 3: Advanced Concepts", completed: false },
//                     ],
//                 },
//                 {
//                     id: 4,
//                     title: "Incident Response and Handling",
//                     dueDate: "2024-12-20",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics of Incident Response", completed: false },
//                         { id: 2, title: "Level 2: Response Techniques", completed: false },
//                         { id: 3, title: "Level 3: Forensics", completed: false },
//                     ],
//                 },
//                 {
//                     id: 5,
//                     title: "Network Defense Strategies",
//                     dueDate: "2024-12-25",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Introduction", completed: false },
//                         { id: 2, title: "Level 2: Advanced Defense Techniques", completed: false },
//                         { id: 3, title: "Level 3: Risk Management", completed: false },
//                     ],
//                 },
//                 {
//                     id: 6,
//                     title: "Web Application Security",
//                     dueDate: "2024-12-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basic Concepts", completed: false },
//                         { id: 2, title: "Level 2: Common Vulnerabilities", completed: false },
//                         { id: 3, title: "Level 3: Secure Coding Practices", completed: false },
//                     ],
//                 },
//                 {
//                     id: 7,
//                     title: "Malware Analysis Techniques",
//                     dueDate: "2024-12-31",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Introduction to Malware", completed: false },
//                         { id: 2, title: "Level 2: Static and Dynamic Analysis", completed: false },
//                         { id: 3, title: "Level 3: Advanced Analysis Techniques", completed: false },
//                     ],
//                 },
//                 {
//                     id: 8,
//                     title: "Cloud Security Fundamentals",
//                     dueDate: "2025-01-05",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Cloud Concepts", completed: false },
//                         { id: 2, title: "Level 2: Security Controls", completed: false },
//                         { id: 3, title: "Level 3: Compliance", completed: false },
//                     ],
//                 },
//             ];
//             setEnrolledCourses(response); // Update state with fetched courses
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`); // Display error message if fetching fails
//         } finally {
//             setLoading(false); // Set loading to false after fetching is done
//         }
//     };

//     // useEffect to fetch courses when the component mounts
//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     // Function to toggle level completion
//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses =>
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     const updatedLevels = course.levels.map(level =>
//                         level.id === levelId ? { ...level, completed: !level.completed } : level
//                     );
//                     const allCompleted = updatedLevels.every(level => level.completed);
//                     return {
//                         ...course,
//                         levels: updatedLevels,
//                         completed: allCompleted // Update overall course completion
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     // Function to toggle expanded course
//     const toggleCourseExpansion = (courseId) => {
//         setExpandedCourses(prev => {
//             const newExpanded = new Set(prev);
//             if (newExpanded.has(courseId)) {
//                 newExpanded.delete(courseId);
//             } else {
//                 newExpanded.add(courseId);
//             }
//             return newExpanded;
//         });
//     };

//     return (
//         <div className="p-4 bg-black text-white"> {/* Black background and white text */}
//             <h1 className="text-2xl font-bold mb-4">Cybersecurity Courses</h1>
//             {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                     <p className="text-lg">Loading...</p> {/* Loading message */}
//                 </div>
//             ) : (
//                 <ul>
//                     {enrolledCourses.map((course) => (
//                         <motion.li
//                             key={course.id}
//                             className="mb-4 border p-4 rounded-lg shadow bg-gray-900 hover:shadow-lg transition-shadow" // Darker card background
//                             initial={{ opacity: 0, y: -20 }} // Initial animation state
//                             animate={{ opacity: 1, y: 0 }} // Animation to show course
//                             exit={{ opacity: 0, y: 20 }} // Animation when course is removed
//                             transition={{ duration: 0.3 }} // Animation duration
//                         >
//                             <h2 className="text-xl font-semibold text-blue-400 cursor-pointer" onClick={() => toggleCourseExpansion(course.id)}>
//                                 {course.title}
//                             </h2>
//                             <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
                            
//                             {/* Dropdown for levels */}
//                             {expandedCourses.has(course.id) && (
//                                 <motion.ul className="ml-4 mt-2">
//                                     {course.levels.map((level) => (
//                                         <motion.li
//                                             key={level.id}
//                                             initial={{ opacity: 0, y: -10 }} // Initial animation state for levels
//                                             animate={{ opacity: 1, y: 0 }} // Show level with animation
//                                             exit={{ opacity: 0, y: 10 }} // Animation when level is removed
//                                             transition={{ duration: 0.3 }} // Animation duration
//                                             className={`flex justify-between cursor-pointer ${level.completed ? 'text-green-400' : 'text-red-400'}`} // Color based on completion
//                                             onClick={() => toggleLevelCompletion(course.id, level.id)} // Toggle completion on click
//                                         >
//                                             {level.title} - {level.completed ? "Completed" : "Not Completed"}
//                                         </motion.li>
//                                     ))}
//                                 </motion.ul>
//                             )}
//                         </motion.li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { AiOutlineDown, AiOutlineCheck, AiOutlineLock } from "react-icons/ai"; // Icons for dropdown and completion status

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false);
//     const [enrolledCourses, setEnrolledCourses] = useState([]);
//     const [expandedCourses, setExpandedCourses] = useState(new Set());
//     const [searchTerm, setSearchTerm] = useState("");

//     const fetchCybersecurityCourses = async () => {
//         setLoading(true);
//         try {
//             const response = [
//                 {
//                     id: 1,
//                     title: "Introduction to Cybersecurity",
//                     dueDate: "2024-11-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: false },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 2,
//                     title: "Network Security Fundamentals",
//                     dueDate: "2024-12-05",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics", completed: false },
//                         { id: 2, title: "Level 2: Intermediate", completed: true },
//                         { id: 3, title: "Level 3: Advanced", completed: false },
//                     ],
//                 },
//                 {
//                     id: 3,
//                     title: "Ethical Hacking Essentials",
//                     dueDate: "2024-12-15",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Introduction", completed: false },
//                         { id: 2, title: "Level 2: Tools and Techniques", completed: false },
//                         { id: 3, title: "Level 3: Advanced Concepts", completed: false },
//                     ],
//                 },
//                 {
//                     id: 4,
//                     title: "Incident Response and Handling",
//                     dueDate: "2024-12-20",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Overview", completed: false },
//                         { id: 2, title: "Level 2: Strategies", completed: false },
//                         { id: 3, title: "Level 3: Best Practices", completed: false },
//                     ],
//                 },
//                 {
//                     id: 5,
//                     title: "Malware Analysis",
//                     dueDate: "2024-12-25",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Basics of Malware", completed: false },
//                         { id: 2, title: "Level 2: Analysis Techniques", completed: false },
//                         { id: 3, title: "Level 3: Malware Mitigation", completed: false },
//                     ],
//                 },
//                 {
//                     id: 6,
//                     title: "Web Application Security",
//                     dueDate: "2024-12-30",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Fundamentals", completed: false },
//                         { id: 2, title: "Level 2: Security Testing", completed: false },
//                         { id: 3, title: "Level 3: Advanced Techniques", completed: false },
//                     ],
//                 },
//                 {
//                     id: 7,
//                     title: "Cloud Security Basics",
//                     dueDate: "2024-12-31",
//                     completed: false,
//                     levels: [
//                         { id: 1, title: "Level 1: Introduction", completed: false },
//                         { id: 2, title: "Level 2: Security Measures", completed: false },
//                         { id: 3, title: "Level 3: Compliance", completed: false },
//                     ],
//                 },
//                 // Add more courses as necessary
//             ];
//             setEnrolledCourses(response);
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses =>
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     const updatedLevels = course.levels.map(level => {
//                         if (level.id === levelId) {
//                             if (level.completed) {
//                                 toast.warning("Level already completed!");
//                                 return level; // Return unchanged level
//                             }
//                             return { ...level, completed: true }; // Mark level as completed
//                         }
//                         return level;
//                     });

//                     // Check if all levels are completed
//                     const allCompleted = updatedLevels.every(level => level.completed);
//                     return {
//                         ...course,
//                         levels: updatedLevels,
//                         completed: allCompleted,
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     const toggleCourseExpansion = (courseId) => {
//         setExpandedCourses(prev => {
//             const newExpanded = new Set(prev);
//             if (newExpanded.has(courseId)) {
//                 newExpanded.delete(courseId);
//             } else {
//                 newExpanded.add(courseId);
//             }
//             return newExpanded;
//         });
//     };

//     const calculateProgress = (levels) => {
//         const totalLevels = levels.length;
//         const completedLevels = levels.filter(level => level.completed).length;
//         return Math.floor((completedLevels / totalLevels) * 100); // Return integer percentage
//     };

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredCourses = enrolledCourses.filter(course =>
//         course.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="min-h-screen p-6 bg-black text-white">
//             <h1 className="text-4xl font-bold mb-4 text-center">Cybersecurity Courses</h1>
//             <p className="mb-6 text-gray-400 text-center">Unlock your skills by completing each level!</p>
//             <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="mb-6 p-3 rounded bg-gray-800 text-white w-full max-w-md mx-auto"
//             />
//             {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                     <p className="text-lg">Loading...</p>
//                 </div>
//             ) : (
//                 <div className="flex flex-col space-y-4">
//                     {filteredCourses.map((course) => (
//                         <motion.div
//                             key={course.id}
//                             className="bg-gray-900 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 relative"
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="flex justify-between items-center">
//                                 <h2
//                                     className="text-xl font-semibold text-blue-400 cursor-pointer flex-grow"
//                                     onClick={() => toggleCourseExpansion(course.id)}
//                                 >
//                                     {course.title}
//                                     <AiOutlineDown className={`ml-2 transition-transform ${expandedCourses.has(course.id) ? 'rotate-180' : ''}`} />
//                                 </h2>
//                                 <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             </div>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <div className="mt-2">
//                                 <div className="bg-gray-600 h-2 rounded">
//                                     <div
//                                         className="bg-green-500 h-2 rounded"
//                                         style={{ width: `${calculateProgress(course.levels)}%` }}
//                                     ></div>
//                                 </div>
//                                 <p className="text-gray-400 text-sm">{calculateProgress(course.levels)}% Completed</p>
//                             </div>

//                             {expandedCourses.has(course.id) && (
//                                 <div className="mt-2">
//                                     {course.levels.map(level => (
//                                         <div key={level.id} className="flex items-center mb-2">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={level.id === 1 || level.completed} // Always unlock Level 1
//                                                 onChange={() => {
//                                                     if (level.id === 1 || course.levels[level.id - 2].completed) {
//                                                         toggleLevelCompletion(course.id, level.id);
//                                                     }
//                                                 }}
//                                                 className="mr-2 cursor-pointer"
//                                                 disabled={level.id > 1 && !course.levels[level.id - 2].completed} // Lock levels based on previous level completion
//                                                 title={level.id > 1 && !course.levels[level.id - 2].completed ? "Complete previous level to unlock" : ""}
//                                             />
//                                             <span className="flex items-center">
//                                                 {level.completed ? (
//                                                     <AiOutlineCheck className="ml-1 text-green-500" />
//                                                 ) : (
//                                                     <AiOutlineLock className="ml-1 text-gray-400" />
//                                                 )}
//                                                 <span className="ml-2 text-gray-300">{level.title} - {level.completed ? "100%" : "0%"}</span>
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { AiOutlineDown, AiOutlineCheck, AiOutlineLock } from "react-icons/ai";

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false);
//     const [enrolledCourses, setEnrolledCourses] = useState([]);
//     const [expandedCourses, setExpandedCourses] = useState(new Set());
//     const [searchTerm, setSearchTerm] = useState("");

//     const fetchCybersecurityCourses = async () => {
//         setLoading(true);
//         try {
//             const response = [
                // {
                //     id: 1,
                //     title: "Introduction to Cybersecurity",
                //     dueDate: "2024-11-30",
                //     completed: false,
                //     levels: [
                //         { id: 1, title: "Level 1: Fundamentals", completed: false },
                //         { id: 2, title: "Level 2: Cyber Threats", completed: false },
                //         { id: 3, title: "Level 3: Defense Mechanisms", completed: false },
                //     ],
                // },
                // {
                //     id: 2,
                //     title: "Network Security Essentials",
                //     dueDate: "2024-12-05",
                //     completed: false,
                //     levels: [
                //         { id: 1, title: "Level 1: Basics of Networking", completed: false },
                //         { id: 2, title: "Level 2: Firewalls & IDS", completed: false },
                //         { id: 3, title: "Level 3: VPNs & Encryption", completed: false },
                //     ],
                // },
                // {
                //     id: 3,
                //     title: "Ethical Hacking Basics",
                //     dueDate: "2024-12-15",
                //     completed: false,
                //     levels: [
                //         { id: 1, title: "Level 1: Introduction to Hacking", completed: false },
                //         { id: 2, title: "Level 2: Tools & Techniques", completed: false },
                //         { id: 3, title: "Level 3: Vulnerability Assessment", completed: false },
                //     ],
                // },
                // {
                //     id: 4,
                //     title: "Incident Response Planning",
                //     dueDate: "2024-12-20",
                //     completed: false,
                //     levels: [
                //         { id: 1, title: "Level 1: Preparation", completed: false },
                //         { id: 2, title: "Level 2: Detection & Analysis", completed: false },
                //         { id: 3, title: "Level 3: Recovery", completed: false },
                //     ],
                // },
                // {
                //     id: 5,
                //     title: "Malware Analysis and Mitigation",
                //     dueDate: "2024-12-25",
                //     completed: false,
                //     levels: [
                //         { id: 1, title: "Level 1: Malware Types", completed: false },
                //         { id: 2, title: "Level 2: Analysis Techniques", completed: false },
                //         { id: 3, title: "Level 3: Mitigation Strategies", completed: false },
                //     ],
                // },
//             ];
//             setEnrolledCourses(response);
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses =>
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     const updatedLevels = course.levels.map(level => {
//                         if (level.id === levelId) {
//                             if (level.completed) {
//                                 toast.warning("Level already completed!");
//                                 return level;
//                             }
//                             return { ...level, completed: true };
//                         }
//                         return level;
//                     });

//                     const allCompleted = updatedLevels.every(level => level.completed);
//                     return {
//                         ...course,
//                         levels: updatedLevels,
//                         completed: allCompleted,
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     const toggleCourseExpansion = (courseId) => {
//         setExpandedCourses(prev => {
//             const newExpanded = new Set(prev);
//             if (newExpanded.has(courseId)) {
//                 newExpanded.delete(courseId);
//             } else {
//                 newExpanded.add(courseId);
//             }
//             return newExpanded;
//         });
//     };

//     const calculateProgress = (levels) => {
//         const totalLevels = levels.length;
//         const completedLevels = levels.filter(level => level.completed).length;
//         return Math.floor((completedLevels / totalLevels) * 100);
//     };

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredCourses = enrolledCourses.filter(course =>
//         course.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="min-h-screen p-6 bg-black text-white">
//             <h1 className="text-4xl font-bold mb-4 text-center">Cybersecurity Courses</h1>
//             <p className="mb-6 text-gray-400 text-center">Progress through each level to gain skills!</p>
//             <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="mb-6 p-3 rounded bg-gray-800 text-white w-full max-w-md mx-auto border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
//                 aria-label="Search Courses"
//             />
//             {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                     <p className="text-lg">Loading...</p>
//                 </div>
//             ) : (
//                 <div className="flex flex-col space-y-4">
//                     {filteredCourses.map((course) => (
//                         <motion.div
//                             key={course.id}
//                             className="bg-gray-900 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="flex justify-between items-center">
//                                 <h2
//                                     className="text-xl font-semibold text-blue-400 cursor-pointer flex-grow"
//                                     onClick={() => toggleCourseExpansion(course.id)}
//                                     role="button"
//                                     aria-expanded={expandedCourses.has(course.id)}
//                                     aria-controls={`course-details-${course.id}`}
//                                 >
//                                     {course.title}
//                                     <AiOutlineDown className={`ml-2 transition-transform ${expandedCourses.has(course.id) ? 'rotate-180' : ''}`} />
//                                 </h2>
//                                 <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             </div>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <div className="mt-2">
//                                 {/* <div className="bg-gray-600 h-2 rounded">
//                                     <div
//                                         className="bg-green-500 h-2 rounded"
//                                         style={{ width: `${calculateProgress(course.levels)}%` }}
//                                     ></div>
//                                 </div> */}
//                                 <p className="text-gray-400 text-sm">{calculateProgress(course.levels)}% Completed</p>
//                             </div>

//                             {expandedCourses.has(course.id) && (
//                                 <div className="mt-2" id={`course-details-${course.id}`}>
//                                     {course.levels.map(level => (
//                                         <div key={level.id} className="flex items-center mb-2">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={level.id === 1 || level.completed}
//                                                 onChange={() => {
//                                                     if (level.id === 1 || course.levels[level.id - 2].completed) {
//                                                         toggleLevelCompletion(course.id, level.id);
//                                                     }
//                                                 }}
//                                                 className="mr-2 cursor-pointer"
//                                                 disabled={level.id > 1 && !course.levels[level.id - 2].completed}
//                                                 title={level.id > 1 && !course.levels[level.id - 2].completed ? "Complete previous level to unlock" : ""}
//                                                 aria-label={`Toggle ${level.title} completion`}
//                                             />
//                                             <span className="flex items-center">
//                                                 {level.completed ? (
//                                                     <AiOutlineCheck className="ml-1 text-green-500" />
//                                                 ) : (
//                                                     <AiOutlineLock className="ml-1 text-gray-500" />
//                                                 )}
//                                                 <span className={`text-gray-200 ${level.completed ? 'line-through' : ''}`}>{level.title}</span>
//                                                 {level.completed && (
//                                                     <span className="ml-2 text-yellow-400" title="Level Unlocked">
//                                                         🔓
//                                                     </span>
//                                                 )}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             {/* Growth Rate Display */}
//                             {/* <div className="mt-4">
//                                 <p className="text-gray-400">Growth Rate: {calculateProgress(course.levels) >= 100 ? "You have mastered this course!" : "Keep going!"}</p>
//                             </div> */}
//                         </motion.div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;
// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { AiOutlineDown, AiOutlineCheck, AiOutlineLock } from "react-icons/ai";

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false);
//     const [enrolledCourses, setEnrolledCourses] = useState([]);
//     const [expandedCourses, setExpandedCourses] = useState(new Set());
//     const [searchTerm, setSearchTerm] = useState("");

//     const fetchCybersecurityCourses = async () => {
//         setLoading(true);
//         try {
//             const response = [
//               {
//                 id: 1,
//                 title: "Introduction to Cybersecurity",
//                 dueDate: "2024-11-30",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Fundamentals", completed: false },
//                     { id: 2, title: "Level 2: Cyber Threats", completed: false },
//                     { id: 3, title: "Level 3: Defense Mechanisms", completed: false },
//                 ],
//             },
//             {
//                 id: 2,
//                 title: "Network Security Essentials",
//                 dueDate: "2024-12-05",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Basics of Networking", completed: false },
//                     { id: 2, title: "Level 2: Firewalls & IDS", completed: false },
//                     { id: 3, title: "Level 3: VPNs & Encryption", completed: false },
//                 ],
//             },
//             {
//                 id: 3,
//                 title: "Ethical Hacking Basics",
//                 dueDate: "2024-12-15",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Introduction to Hacking", completed: false },
//                     { id: 2, title: "Level 2: Tools & Techniques", completed: false },
//                     { id: 3, title: "Level 3: Vulnerability Assessment", completed: false },
//                 ],
//             },
//             {
//                 id: 4,
//                 title: "Incident Response Planning",
//                 dueDate: "2024-12-20",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Preparation", completed: false },
//                     { id: 2, title: "Level 2: Detection & Analysis", completed: false },
//                     { id: 3, title: "Level 3: Recovery", completed: false },
//                 ],
//             },
//             {
//                 id: 5,
//                 title: "Malware Analysis and Mitigation",
//                 dueDate: "2024-12-25",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Malware Types", completed: false },
//                     { id: 2, title: "Level 2: Analysis Techniques", completed: false },
//                     { id: 3, title: "Level 3: Mitigation Strategies", completed: false },
//                 ],
//             },
//                 //... (same course structure)
//             ];
//             setEnrolledCourses(response);
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses =>
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     const updatedLevels = course.levels.map(level => {
//                         if (level.id === levelId) {
//                             if (level.completed) {
//                                 toast.warning("Level already completed!");
//                                 return level;
//                             }
//                             // Toast notification for level completion
//                             toast.success(`Completed ${level.title}!`);
//                             return { ...level, completed: true };
//                         }
//                         return level;
//                     });

//                     const allCompleted = updatedLevels.every(level => level.completed);
//                     if (allCompleted) {
//                         toast.success(`You have completed the course: ${course.title}!`);
//                     }
//                     return {
//                         ...course,
//                         levels: updatedLevels,
//                         completed: allCompleted,
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     const toggleCourseExpansion = (courseId) => {
//         setExpandedCourses(prev => {
//             const newExpanded = new Set(prev);
//             if (newExpanded.has(courseId)) {
//                 newExpanded.delete(courseId);
//             } else {
//                 newExpanded.add(courseId);
//             }
//             return newExpanded;
//         });
//     };

//     const calculateProgress = (levels) => {
//         const totalLevels = levels.length;
//         const completedLevels = levels.filter(level => level.completed).length;
//         return Math.floor((completedLevels / totalLevels) * 100);
//     };

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredCourses = enrolledCourses.filter(course =>
//         course.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="min-h-screen p-6 bg-black text-white">
//             <h1 className="text-4xl font-bold mb-4 text-center">Cybersecurity Courses</h1>
//             <p className="mb-6 text-gray-400 text-center">Progress through each level to gain skills!</p>
//             <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="mb-6 p-3 ml-[470px] rounded bg-gray-800 text-white w-full max-w-md mx-auto border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
//                 aria-label="Search Courses"
//             />
//             {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                     <p className="text-lg">Loading...</p>
//                 </div>
//             ) : (
//                 <div className="flex flex-col space-y-4">
//                     {filteredCourses.map((course) => (
//                         <motion.div
//                             key={course.id}
//                             className="bg-gray-900 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="flex justify-between items-center">
//                                 <h2
//                                     className="text-xl font-semibold text-blue-400 cursor-pointer flex-grow"
//                                     onClick={() => toggleCourseExpansion(course.id)}
//                                     role="button"
//                                     aria-expanded={expandedCourses.has(course.id)}
//                                     aria-controls={`course-details-${course.id}`}
//                                 >
//                                     {course.title}
//                                     <AiOutlineDown className={`ml-2 transition-transform ${expandedCourses.has(course.id) ? 'rotate-180' : ''}`} />
//                                 </h2>
//                                 <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             </div>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <div className="mt-2">
//                                 <div className="bg-gray-600 h-2 rounded">
//                                     <div
//                                         className="bg-green-500 h-2 rounded"
//                                         style={{ width: `${calculateProgress(course.levels)}%` }}
//                                     ></div>
//                                 </div>
//                                 <p className="text-gray-400 text-sm">{calculateProgress(course.levels)}% Completed</p>
//                             </div>

//                             {expandedCourses.has(course.id) && (
//                                 <div className="mt-2" id={`course-details-${course.id}`}>
//                                     {course.levels.map(level => (
//                                         <div key={level.id} className="flex items-center mb-2">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={level.completed}
//                                                 onChange={() => {
//                                                     if (level.id === 1 || course.levels[level.id - 2].completed) {
//                                                         toggleLevelCompletion(course.id, level.id);
//                                                     }
//                                                 }}
//                                                 className="mr-2 cursor-pointer"
//                                                 disabled={level.id > 1 && !course.levels[level.id - 2].completed}
//                                                 title={level.id > 1 && !course.levels[level.id - 2].completed ? "Complete previous level to unlock" : ""}
//                                                 aria-label={`Toggle ${level.title} completion`}
//                                             />
//                                             <span className="flex items-center">
//                                                 {level.completed ? (
//                                                     <AiOutlineCheck className="ml-1 text-green-500" />
//                                                 ) : (
//                                                     <AiOutlineLock className="ml-1 text-gray-500" />
//                                                 )}
//                                                 <span className={`text-gray-200 ${level.completed ? 'line-through' : ''}`}>{level.title}</span>
//                                                 {level.completed && (
//                                                     <span className="ml-2 text-yellow-400" title="Level Unlocked">
                                                        
//                                                     </span>
//                                                 )}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { AiOutlineDown, AiOutlineCheck, AiOutlineLock } from "react-icons/ai";

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false);
//     const [enrolledCourses, setEnrolledCourses] = useState([]);
//     const [expandedCourses, setExpandedCourses] = useState(new Set());
//     const [searchTerm, setSearchTerm] = useState("");

//     const fetchCybersecurityCourses = async () => {
//         setLoading(true);
//         try {
//             const response = [
            //   {
            //     id: 1,
            //     title: "Introduction to Cybersecurity",
            //     dueDate: "2024-11-30",
            //     completed: false,
            //     levels: [
            //         { id: 1, title: "Level 1: Fundamentals", completed: false },
            //         { id: 2, title: "Level 2: Cyber Threats", completed: false },
            //         { id: 3, title: "Level 3: Defense Mechanisms", completed: false },
            //     ],
            // },
            // {
            //     id: 2,
            //     title: "Network Security Essentials",
            //     dueDate: "2024-12-05",
            //     completed: false,
            //     levels: [
            //         { id: 1, title: "Level 1: Basics of Networking", completed: false },
            //         { id: 2, title: "Level 2: Firewalls & IDS", completed: false },
            //         { id: 3, title: "Level 3: VPNs & Encryption", completed: false },
            //     ],
            // },
            // {
            //     id: 3,
            //     title: "Ethical Hacking Basics",
            //     dueDate: "2024-12-15",
            //     completed: false,
            //     levels: [
            //         { id: 1, title: "Level 1: Introduction to Hacking", completed: false },
            //         { id: 2, title: "Level 2: Tools & Techniques", completed: false },
            //         { id: 3, title: "Level 3: Vulnerability Assessment", completed: false },
            //     ],
            // },
            // {
            //     id: 4,
            //     title: "Incident Response Planning",
            //     dueDate: "2024-12-20",
            //     completed: false,
            //     levels: [
            //         { id: 1, title: "Level 1: Preparation", completed: false },
            //         { id: 2, title: "Level 2: Detection & Analysis", completed: false },
            //         { id: 3, title: "Level 3: Recovery", completed: false },
            //     ],
            // },
            // {
            //     id: 5,
            //     title: "Malware Analysis and Mitigation",
            //     dueDate: "2024-12-25",
            //     completed: false,
            //     levels: [
            //         { id: 1, title: "Level 1: Malware Types", completed: false },
            //         { id: 2, title: "Level 2: Analysis Techniques", completed: false },
            //         { id: 3, title: "Level 3: Mitigation Strategies", completed: false },
            //     ],
            // },
//                 // ... (same course structure)
//             ];
//             setEnrolledCourses(response);
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses =>
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     const updatedLevels = course.levels.map(level => {
//                         if (level.id === levelId) {
//                             if (level.completed) {
//                                 toast.warning("Level already completed!");
//                                 return level;
//                             }
//                             toast.success(`Completed ${level.title}!`);
//                             return { ...level, completed: true };
//                         }
//                         return level;
//                     });

//                     const allCompleted = updatedLevels.every(level => level.completed);
//                     if (allCompleted) {
//                         toast.success(`You have completed the course: ${course.title}!`);
//                     }
//                     return {
//                         ...course,
//                         levels: updatedLevels,
//                         completed: allCompleted,
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     const toggleCourseExpansion = (courseId) => {
//         setExpandedCourses(prev => {
//             const newExpanded = new Set(prev);
//             if (newExpanded.has(courseId)) {
//                 newExpanded.delete(courseId);
//             } else {
//                 newExpanded.add(courseId);
//             }
//             return newExpanded;
//         });
//     };

//     const calculateProgress = (levels) => {
//         const totalLevels = levels.length;
//         const completedLevels = levels.filter(level => level.completed).length;
//         return Math.floor((completedLevels / totalLevels) * 100);
//     };

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredCourses = enrolledCourses.filter(course =>
//         course.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="min-h-screen p-6 bg-black text-white">
//             <h1 className="text-4xl font-bold mb-4 text-center">Exams</h1>
//             <p className="mb-6 text-gray-400 text-center">Progress through each level to gain skills!</p>
//             <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="mb-6 p-3 ml-[450px] rounded bg-gray-800 text-white w-full max-w-md mx-auto border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
//                 aria-label="Search Courses"
//             />
//             {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                     <p className="text-lg">Loading...</p>
//                 </div>
//             ) : (
//                 <div className="flex flex-col space-y-4">
//                     {filteredCourses.map((course) => (
//                         <motion.div
//                             key={course.id}
//                             className="bg-gray-900 rounded-lg shadow-lg border border-gray-700 p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="flex justify-between items-center">
//                                 <h2
//                                     className="text-xl font-semibold text-blue-400 cursor-pointer flex-grow"
//                                     onClick={() => toggleCourseExpansion(course.id)}
//                                     role="button"
//                                     aria-expanded={expandedCourses.has(course.id)}
//                                     aria-controls={`course-details-${course.id}`}
//                                 >
//                                     {course.title}
//                                     <AiOutlineDown className={`ml-2 transition-transform ${expandedCourses.has(course.id) ? 'rotate-180' : ''}`} />
//                                 </h2>
//                                 <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             </div>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <div className="mt-2">
//                                 <div className="bg-gray-600 h-2 rounded">
//                                     <motion.div
//                                         className="bg-green-500 h-2 rounded"
//                                         style={{ width: `${calculateProgress(course.levels)}%` }}
//                                         initial={{ width: 0 }}
//                                         animate={{ width: `${calculateProgress(course.levels)}%` }}
//                                         transition={{ duration: 0.5 }}
//                                     ></motion.div>
//                                 </div>
//                                 <p className="text-gray-400 text-sm">{calculateProgress(course.levels)}% Completed</p>
//                             </div>

//                             {expandedCourses.has(course.id) && (
//                                 <div className="mt-2" id={`course-details-${course.id}`}>
//                                     {course.levels.map(level => (
//                                         <div key={level.id} className="flex items-center mb-2">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={level.completed}
//                                                 onChange={() => {
//                                                     if (level.id === 1 || course.levels[level.id - 2].completed) {
//                                                         toggleLevelCompletion(course.id, level.id);
//                                                     }
//                                                 }}
//                                                 className="mr-2 cursor-pointer"
//                                                 disabled={level.id > 1 && !course.levels[level.id - 2].completed}
//                                                 title={level.id > 1 && !course.levels[level.id - 2].completed ? "Complete previous level to unlock" : ""}
//                                                 aria-label={`Toggle ${level.title} completion`}
//                                             />
//                                             <span className="flex items-center">
//                                                 {level.completed ? (
//                                                     <AiOutlineCheck className="ml-1 text-green-500" />
//                                                 ) : (
//                                                     <AiOutlineLock className="ml-1 text-gray-500" />
//                                                 )}
//                                                 <span className={`text-gray-200 ${level.completed ? 'line-through' : ''}`}>{level.title}</span>
//                                                 {level.completed && (
//                                                     <span className="ml-2 text-yellow-400" title="Level Unlocked"></span>
//                                                 )}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { AiOutlineDown, AiOutlineCheck, AiOutlineLock } from "react-icons/ai";

// const CybersecurityCourses = () => {
//     const [loading, setLoading] = useState(false);
//     const [enrolledCourses, setEnrolledCourses] = useState([]);
//     const [expandedCourses, setExpandedCourses] = useState(new Set());
//     const [searchTerm, setSearchTerm] = useState("");

//     const fetchCybersecurityCourses = async () => {
//         setLoading(true);
//         try {
//             const response = [
//               {
//                 id: 1,
//                 title: "Introduction to Cybersecurity",
//                 dueDate: "2024-11-30",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Fundamentals", completed: false },
//                     { id: 2, title: "Level 2: Cyber Threats", completed: false },
//                     { id: 3, title: "Level 3: Defense Mechanisms", completed: false },
//                 ],
//             },
//             {
//                 id: 2,
//                 title: "Network Security Essentials",
//                 dueDate: "2024-12-05",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Basics of Networking", completed: false },
//                     { id: 2, title: "Level 2: Firewalls & IDS", completed: false },
//                     { id: 3, title: "Level 3: VPNs & Encryption", completed: false },
//                 ],
//             },
//             {
//                 id: 3,
//                 title: "Ethical Hacking Basics",
//                 dueDate: "2024-12-15",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Introduction to Hacking", completed: false },
//                     { id: 2, title: "Level 2: Tools & Techniques", completed: false },
//                     { id: 3, title: "Level 3: Vulnerability Assessment", completed: false },
//                 ],
//             },
//             {
//                 id: 4,
//                 title: "Incident Response Planning",
//                 dueDate: "2024-12-20",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Preparation", completed: false },
//                     { id: 2, title: "Level 2: Detection & Analysis", completed: false },
//                     { id: 3, title: "Level 3: Recovery", completed: false },
//                 ],
//             },
//             {
//                 id: 5,
//                 title: "Malware Analysis and Mitigation",
//                 dueDate: "2024-12-25",
//                 completed: false,
//                 levels: [
//                     { id: 1, title: "Level 1: Malware Types", completed: false },
//                     { id: 2, title: "Level 2: Analysis Techniques", completed: false },
//                     { id: 3, title: "Level 3: Mitigation Strategies", completed: false },
//                 ],
//             },
//               // ... your existing course data
//             ];
//             setEnrolledCourses(response);
//         } catch (error) {
//             toast.error(`Error fetching courses: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCybersecurityCourses();
//     }, []);

//     const toggleLevelCompletion = (courseId, levelId) => {
//         setEnrolledCourses(prevCourses =>
//             prevCourses.map(course => {
//                 if (course.id === courseId) {
//                     const updatedLevels = course.levels.map(level => {
//                         if (level.id === levelId) {
//                             if (level.completed) {
//                                 toast.warning("Level already completed!");
//                                 return level;
//                             }
//                             toast.success(`Completed ${level.title}!`);
//                             return { ...level, completed: true };
//                         }
//                         return level;
//                     });

//                     const allCompleted = updatedLevels.every(level => level.completed);
//                     if (allCompleted) {
//                         toast.success(`You have completed the course: ${course.title}!`);
//                     }
//                     return {
//                         ...course,
//                         levels: updatedLevels,
//                         completed: allCompleted,
//                     };
//                 }
//                 return course;
//             })
//         );
//     };

//     const toggleCourseExpansion = (courseId) => {
//         setExpandedCourses(prev => {
//             const newExpanded = new Set(prev);
//             if (newExpanded.has(courseId)) {
//                 newExpanded.delete(courseId);
//             } else {
//                 newExpanded.add(courseId);
//             }
//             return newExpanded;
//         });
//     };

//     const calculateProgress = (levels) => {
//         const totalLevels = levels.length;
//         const completedLevels = levels.filter(level => level.completed).length;
//         return Math.floor((completedLevels / totalLevels) * 100);
//     };

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     // Sort courses by completion status and then filter by search term
//     const filteredCourses = enrolledCourses
//         .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)) // Completed first
//         .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));

//     return (
//         <div className="min-h-screen p-6 bg-black text-white">
//             <h1 className="text-4xl font-bold mb-4 text-center">Exams</h1>
//             <p className="mb-6 text-gray-400 text-center">Progress through each level to gain skills!</p>
//             <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="mb-6 p-3 ml-[450px] rounded bg-gray-800 text-white w-full max-w-md mx-auto border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
//                 aria-label="Search Courses"
//             />
//             {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                     <p className="text-lg">Loading...</p>
//                 </div>
//             ) : (
//                 <div className="flex flex-col space-y-4">
//                     {filteredCourses.map((course) => (
//                         <motion.div
//                             key={course.id}
//                             className="bg-gray-900 rounded-lg shadow-lg border border-gray-700 p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="flex justify-between items-center">
//                                 <h2
//                                     className="text-xl font-semibold text-blue-400 cursor-pointer flex-grow"
//                                     onClick={() => toggleCourseExpansion(course.id)}
//                                     role="button"
//                                     aria-expanded={expandedCourses.has(course.id)}
//                                     aria-controls={`course-details-${course.id}`}
//                                 >
//                                     {course.title}
//                                     <AiOutlineDown className={`ml-2 transition-transform ${expandedCourses.has(course.id) ? 'rotate-180' : ''}`} />
//                                 </h2>
//                                 <p className="text-gray-300">Due Date: {course.dueDate}</p>
//                             </div>
//                             <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
//                             <div className="mt-2">
//                                 <div className="bg-gray-600 h-2 rounded">
//                                     <motion.div
//                                         className="bg-green-500 h-2 rounded"
//                                         style={{ width: `${calculateProgress(course.levels)}%` }}
//                                         initial={{ width: 0 }}
//                                         animate={{ width: `${calculateProgress(course.levels)}%` }}
//                                         transition={{ duration: 0.5 }}
//                                     ></motion.div>
//                                 </div>
//                                 <p className="text-gray-400 text-sm">{calculateProgress(course.levels)}% Completed</p>
//                             </div>

//                             {expandedCourses.has(course.id) && (
//                                 <div className="mt-2" id={`course-details-${course.id}`}>
//                                     {course.levels.map(level => (
//                                         <div key={level.id} className="flex items-center mb-2">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={level.completed}
//                                                 onChange={() => {
//                                                     if (level.id === 1 || course.levels[level.id - 2].completed) {
//                                                         toggleLevelCompletion(course.id, level.id);
//                                                     }
//                                                 }}
//                                                 className="mr-2 cursor-pointer"
//                                                 disabled={level.id > 1 && !course.levels[level.id - 2].completed}
//                                                 title={level.id > 1 && !course.levels[level.id - 2].completed ? "Complete previous level to unlock" : ""}
//                                                 aria-label={`Toggle ${level.title} completion`}
//                                             />
//                                             <span className="flex items-center">
//                                                 {level.completed ? (
//                                                     <AiOutlineCheck className="ml-1 text-green-500" />
//                                                 ) : (
//                                                     <AiOutlineLock className="ml-1 text-gray-500" />
//                                                 )}
//                                                 <span className={`text-gray-200 ${level.completed ? 'line-through' : ''}`}>{level.title}</span>
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </motion.div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CybersecurityCourses;

// {
//   id: 1,
//   title: "Introduction to Cybersecurity",
//   dueDate: "2024-11-30",
//   completed: false,
//   levels: [
//       { id: 1, title: "Level 1: Fundamentals", completed: false },
//       { id: 2, title: "Level 2: Cyber Threats", completed: false },
//       { id: 3, title: "Level 3: Defense Mechanisms", completed: false },
//   ],
// },
// {
//   id: 2,
//   title: "Network Security Essentials",
//   dueDate: "2024-12-05",
//   completed: false,
//   levels: [
//       { id: 1, title: "Level 1: Basics of Networking", completed: false },
//       { id: 2, title: "Level 2: Firewalls & IDS", completed: false },
//       { id: 3, title: "Level 3: VPNs & Encryption", completed: false },
//   ],
// },
// {
//   id: 3,
//   title: "Ethical Hacking Basics",
//   dueDate: "2024-12-15",
//   completed: false,
//   levels: [
//       { id: 1, title: "Level 1: Introduction to Hacking", completed: false },
//       { id: 2, title: "Level 2: Tools & Techniques", completed: false },
//       { id: 3, title: "Level 3: Vulnerability Assessment", completed: false },
//   ],
// },
// {
//   id: 4,
//   title: "Incident Response Planning",
//   dueDate: "2024-12-20",
//   completed: false,
//   levels: [
//       { id: 1, title: "Level 1: Preparation", completed: false },
//       { id: 2, title: "Level 2: Detection & Analysis", completed: false },
//       { id: 3, title: "Level 3: Recovery", completed: false },
//   ],
// },
// {
//   id: 5,
//   title: "Malware Analysis and Mitigation",
//   dueDate: "2024-12-25",
//   completed: false,
//   levels: [
//       { id: 1, title: "Level 1: Malware Types", completed: false },
//       { id: 2, title: "Level 2: Analysis Techniques", completed: false },
//       { id: 3, title: "Level 3: Mitigation Strategies", completed: false },
//   ],
// },


import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { AiOutlineDown, AiOutlineCheck, AiOutlineLock } from "react-icons/ai";

const CybersecurityCourses = () => {
    const [loading, setLoading] = useState(false);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [expandedCourses, setExpandedCourses] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("all"); // New state for sorting

    const fetchCybersecurityCourses = async () => {
        setLoading(true);
        try {
            const response = [
              {
                id: 1,
                title: "Introduction to Cybersecurity",
                dueDate: "2024-11-30",
                completed: false,
                levels: [
                    { id: 1, title: "Level 1: Fundamentals", completed: false },
                    { id: 2, title: "Level 2: Cyber Threats", completed: false },
                    { id: 3, title: "Level 3: Defense Mechanisms", completed: false },
                ],
              },
              {
                id: 2,
                title: "Network Security Essentials",
                dueDate: "2024-12-05",
                completed: false,
                levels: [
                    { id: 1, title: "Level 1: Basics of Networking", completed: false },
                    { id: 2, title: "Level 2: Firewalls & IDS", completed: false },
                    { id: 3, title: "Level 3: VPNs & Encryption", completed: false },
                ],
              },
              {
                id: 3,
                title: "Ethical Hacking Basics",
                dueDate: "2024-12-15",
                completed: false,
                levels: [
                    { id: 1, title: "Level 1: Introduction to Hacking", completed: false },
                    { id: 2, title: "Level 2: Tools & Techniques", completed: false },
                    { id: 3, title: "Level 3: Vulnerability Assessment", completed: false },
                ],
              },
              {
                id: 4,
                title: "Incident Response Planning",
                dueDate: "2024-12-20",
                completed: false,
                levels: [
                    { id: 1, title: "Level 1: Preparation", completed: false },
                    { id: 2, title: "Level 2: Detection & Analysis", completed: false },
                    { id: 3, title: "Level 3: Recovery", completed: false },
                ],
              },
              {
                id: 5,
                title: "Malware Analysis and Mitigation",
                dueDate: "2024-12-25",
                completed: false,
                levels: [
                    { id: 1, title: "Level 1: Malware Types", completed: false },
                    { id: 2, title: "Level 2: Analysis Techniques", completed: false },
                    { id: 3, title: "Level 3: Mitigation Strategies", completed: false },
                ],
              },
              
                // ... your existing course data
            ];
            setEnrolledCourses(response);
        } catch (error) {
            toast.error(`Error fetching courses: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCybersecurityCourses();
    }, []);

    const toggleLevelCompletion = (courseId, levelId) => {
        setEnrolledCourses(prevCourses =>
            prevCourses.map(course => {
                if (course.id === courseId) {
                    const updatedLevels = course.levels.map(level => {
                        if (level.id === levelId) {
                            if (level.completed) {
                                toast.warning("Level already completed!");
                                return level;
                            }
                            toast.success(`Completed ${level.title}!`);
                            return { ...level, completed: true };
                        }
                        return level;
                    });

                    const allCompleted = updatedLevels.every(level => level.completed);
                    if (allCompleted) {
                        toast.success(`You have completed the course: ${course.title}!`);
                    }
                    return {
                        ...course,
                        levels: updatedLevels,
                        completed: allCompleted,
                    };
                }
                return course;
            })
        );
    };

    const toggleCourseExpansion = (courseId) => {
        setExpandedCourses(prev => {
            const newExpanded = new Set(prev);
            if (newExpanded.has(courseId)) {
                newExpanded.delete(courseId);
            } else {
                newExpanded.add(courseId);
            }
            return newExpanded;
        });
    };

    const calculateProgress = (levels) => {
        const totalLevels = levels.length;
        const completedLevels = levels.filter(level => level.completed).length;
        return Math.floor((completedLevels / totalLevels) * 100);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Sort courses based on the selected sorting option and then filter by search term
    const filteredCourses = enrolledCourses
        .filter(course => {
            if (sortOption === "completed") return course.completed;
            if (sortOption === "notCompleted") return !course.completed;
            return true; // For "all"
        })
        .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)) // Completed first
        .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen p-6 bg-black text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">Exams</h1>
            <p className="mb-6 text-gray-400 text-center">Progress through each level to gain skills!</p>
            <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="mb-4 p-3 rounded bg-gray-800 text-white w-full max-w-md mx-auto border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                aria-label="Search Courses"
            />
            
            <select
                value={sortOption}
                onChange={handleSortChange}
                className="mb-4 p-3 rounded bg-gray-800 text-white w-full max-w-md mx-auto border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200"
                aria-label="Sort Courses"
            >
                <option value="all">All Courses</option>
                <option value="completed">Completed Courses</option>
                <option value="notCompleted">Not Completed Courses</option>
            </select>
            </div>
            
            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <p className="text-lg">Loading...</p>
                </div>
            ) : (
                <div className="flex flex-col space-y-4">
                    {filteredCourses.map((course) => (
                        <motion.div
                            key={course.id}
                            className="bg-gray-900 rounded-lg shadow-lg border border-gray-700 p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center">
                                <h2
                                    className="text-xl font-semibold text-blue-400 cursor-pointer flex-grow"
                                    onClick={() => toggleCourseExpansion(course.id)}
                                    role="button"
                                    aria-expanded={expandedCourses.has(course.id)}
                                    aria-controls={`course-details-${course.id}`}
                                >
                                    {course.title}
                                    <AiOutlineDown className={`ml-2 transition-transform ${expandedCourses.has(course.id) ? 'rotate-180' : ''}`} />
                                </h2>
                                <p className="text-gray-300">Due Date: {course.dueDate}</p>
                            </div>
                            <p className="text-gray-300">Status: {course.completed ? "Completed" : "Not Completed"}</p>
                            <div className="mt-2">
                                <div className="bg-gray-600 h-2 rounded">
                                    <motion.div
                                        className="bg-green-500 h-2 rounded"
                                        style={{ width: `${calculateProgress(course.levels)}%` }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${calculateProgress(course.levels)}%` }}
                                        transition={{ duration: 0.5 }}
                                    ></motion.div>
                                </div>
                                <p className="text-gray-400 text-sm">{calculateProgress(course.levels)}% Completed</p>
                            </div>

                            {expandedCourses.has(course.id) && (
                                <div className="mt-2" id={`course-details-${course.id}`}>
                                    {course.levels.map(level => (
                                        <div key={level.id} className="flex items-center mb-2">
                                            <input
                                                type="checkbox"
                                                checked={level.completed}
                                                onChange={() => {
                                                    if (level.id === 1 || course.levels[level.id - 2].completed) {
                                                        toggleLevelCompletion(course.id, level.id);
                                                    }
                                                }}
                                                className="mr-2 cursor-pointer"
                                                disabled={level.id > 1 && !course.levels[level.id - 2].completed}
                                                title={level.id > 1 && !course.levels[level.id - 2].completed ? "Complete previous level to unlock" : ""}
                                                aria-label={`Toggle ${level.title} completion`}
                                            />
                                            <span className="flex items-center">
                                                {level.completed ? (
                                                    <AiOutlineCheck className="ml-1 text-green-500" />
                                                ) : (
                                                    <AiOutlineLock className="ml-1 text-gray-500" />
                                                )}
                                                <span className={`text-gray-200 ${level.completed ? 'line-through' : ''}`}>{level.title}</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CybersecurityCourses;
