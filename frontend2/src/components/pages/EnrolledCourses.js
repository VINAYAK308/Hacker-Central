// import React from 'react';

// const EnrolledCourses = () => {
//   const courses = ['React Basics', 'Advanced JavaScript', 'Cybersecurity 101'];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
//       <ul>
//         {courses.map((course, index) => (
//           <li key={index} className="border-b py-2">{course}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EnrolledCourses;
// import React from 'react';
// import { motion } from 'framer-motion';

// const EnrolledCourses = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-800 text-white flex items-center justify-center"
//     >
//       <h2 className="text-3xl">Enrolled Courses Page</h2>
//     </motion.div>
//   );
// };

// export default EnrolledCourses;

// EnrolledCourses.jsx

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaCertificate } from 'react-icons/fa';

// // Sample Data
// const enrolledCoursesData = [
//   {
//     id: 1,
//     title: "Cybersecurity Basics",
//     progress: 75,
//     certificate: "Certificate of Completion",
//     content: "This course covers the fundamentals of cybersecurity, including threat identification, vulnerability management, and best practices for securing digital systems."
//   },
//   {
//     id: 2,
//     title: "Ethical Hacking",
//     progress: 100,
//     certificate: "Certificate of Excellence",
//     content: "In this course, you will learn how to ethically hack systems, identify vulnerabilities, and protect organizations from cyberattacks."
//   },
//   {
//     id: 3,
//     title: "Advanced Networking",
//     progress: 50,
//     certificate: null,
//     content: "This course delves into advanced networking concepts such as routing protocols, VPNs, network security, and troubleshooting techniques."
//   },
  
// ];

// // CourseCard Component
// const CourseCard = ({ course, onViewDetails }) => (
//   <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col justify-between">
//     <div>
//       <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
//       <p className="text-gray-300 mb-2">Progress: {course.progress}%</p>
//       {/* Progress Bar */}
//       <div className="bg-gray-600 rounded-full h-2 mb-2">
//         <div
//           className="bg-green-600 h-2 rounded-full"
//           style={{ width: `${course.progress}%` }}
//           title={`Progress: ${course.progress}%`}
//         />
//       </div>
//       <p className="text-gray-300 mb-4">{course.content}</p>
//     </div>
//     <div>
//       {course.certificate ? (
//         <p className="text-green-500 flex items-center">
//           <FaCertificate className="mr-2" /> {course.certificate}
//         </p>
//       ) : (
//         <p className="text-yellow-500">No certificate earned yet</p>
//       )}
//     </div>
//     {/* Button to View Course Details */}
//     <button
//       onClick={onViewDetails}
//       className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-3 rounded text-center"
//       aria-label={`View details for ${course.title}`}
//     >
//       View Course
//     </button>
//   </div>
// );

// // Main Component
// const EnrolledCourses = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Simulate a delay for fetching data
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         setCourses(enrolledCoursesData); // Simulating fetched data
//       } catch (err) {
//         setError('Failed to load courses');
//         console.error('Error fetching courses:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleCourseDetails = (courseId) => {
//     navigate(`/course/${courseId}`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <p>Loading courses...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-black text-white flex items-center justify-center"
//     >
//       <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl w-full m-6">
//         <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
//         <div className="grid grid-cols-1 gap-6">
//           {courses.map((course) => (
//             <CourseCard
//               key={course.id}
//               course={course}
//               onViewDetails={() => handleCourseDetails(course.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default EnrolledCourses;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCertificate, FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Sample Data
const enrolledCoursesData = [
  {
    id: 1,
    title: "Cybersecurity Basics",
    progress: 75,
    certificate: "Certificate of Completion",
    content: "This course covers the fundamentals of cybersecurity, including threat identification, vulnerability management, and best practices for securing digital systems."
  },
  {
    id: 2,
    title: "Ethical Hacking",
    progress: 100,
    certificate: "Certificate of Excellence",
    content: "In this course, you will learn how to ethically hack systems, identify vulnerabilities, and protect organizations from cyberattacks."
  },
  {
    id: 3,
    title: "Advanced Networking",
    progress: 50,
    certificate: null,
    content: "This course delves into advanced networking concepts such as routing protocols, VPNs, network security, and troubleshooting techniques."
  },
  // Add more courses as needed...
];

// CourseCard Component
const CourseCard = ({ course, onViewDetails }) => (
  <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105">
    <div>
      <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
      <p className="text-gray-300 mb-2">Progress: {course.progress}%</p>
      {/* Progress Bar */}
      <div className="bg-gray-600 rounded-full h-2 mb-2">
        <div
          className="bg-green-600 h-2 rounded-full"
          style={{ width: `${course.progress}%` }}
          title={`Progress: ${course.progress}%`}
        />
      </div>
      <p className="text-gray-300 mb-4">{course.content}</p>
    </div>
    <div>
      {course.certificate ? (
        <p className="text-green-500 flex items-center">
          <FaCertificate className="mr-2" /> {course.certificate}
        </p>
      ) : (
        <p className="text-yellow-500">No certificate earned yet</p>
      )}
    </div>
    {/* Button to View Course Details */}
    <button
      onClick={onViewDetails}
      className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-3 rounded text-center"
      aria-label={`View details for ${course.title}`}
    >
      View Course
    </button>
  </div>
);

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    certificate: PropTypes.string,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

// Main Component
const EnrolledCourses = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate a delay for fetching data
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCourses(enrolledCoursesData); // Simulating fetched data
      } catch (err) {
        setError('Failed to load courses');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseDetails = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleBackButtonClick = () => {
    navigate('/user-dashboard'); // Navigate to the dashboard
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <FaSpinner className="animate-spin text-2xl mr-2" />
        <p>Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl w-full m-6">
        <button
          onClick={handleBackButtonClick} // This handles back navigation
          className="mb-4 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
          aria-label="Back to Dashboard"
        >
          Back
        </button>
        <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={() => handleCourseDetails(course.id)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EnrolledCourses;
