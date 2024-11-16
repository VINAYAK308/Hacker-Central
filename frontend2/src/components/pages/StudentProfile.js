// import React from 'react';

// const Profile = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Profile</h2>
//       <p>Student Name: John Doe</p>
//       <p>Email: john@example.com</p>
//       <p>Enrolled Since: January 2024</p>
//     </div>
//   );
// };

// export default Profile;
// src/components/Profile.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Profile = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-800 text-white flex items-center justify-center"
//     >
//       <h2 className="text-3xl">Profile Page</h2>
//     </motion.div>
//   );
// };

// export default Profile;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaEdit, FaSave, FaTimes, FaCheckCircle, FaCertificate } from 'react-icons/fa';

// const initialStudentData = {
//   name: "Vinayak Jadhav",
//   email: "vinayak.jadhav_comp23@pccoer.in",
//   profilePicture: "https://via.placeholder.com/150",
//   courses: [
//     {
//       id: 1,
//       title: "Cybersecurity Basics",
//       progress: 75, // percentage of course completed
//       certificate: "Certificate of Completion"
//     },
//     {
//       id: 2,
//       title: "Advanced Networking",
//       progress: 50,
//       certificate: null
//     },
//     {
//       id: 3,
//       title: "Ethical Hacking",
//       progress: 100,
//       certificate: "Certificate of Excellence"
//     }
//   ]
// };

// const Profile = () => {
//   const [studentData, setStudentData] = useState(initialStudentData);
//   const [editing, setEditing] = useState(false);
//   const [profilePicture, setProfilePicture] = useState(studentData.profilePicture);
//   const [name, setName] = useState(studentData.name);
//   const [email, setEmail] = useState(studentData.email);
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle profile picture upload
//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfilePicture(imageUrl);
//     }
//   };

//   // Handle form save
//   const handleSave = () => {
//     // Update original profile data
//     setStudentData({
//       ...studentData,
//       profilePicture,
//       name,
//       email,
//     });

//     // Display success message
//     setSuccessMessage("Profile updated successfully!");
    
//     // Hide edit mode after saving
//     setEditing(false);
//   };

//   // Handle cancel button
//   const handleCancel = () => {
//     setEditing(false);
//     // Reset fields to initial values
//     setProfilePicture(studentData.profilePicture);
//     setName(studentData.name);
//     setEmail(studentData.email);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-black text-white flex items-center justify-center "
//     >
//       <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl w-full relative m-8">
//         <div className="flex flex-col items-center">
//           {/* Success message */}
//           {successMessage && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-lg flex items-center"
//             >
//               <FaCheckCircle className="mr-2" />
//               {successMessage}
//             </motion.div>
//           )}

//           {/* Profile Picture */}
//           <motion.div
//             className="relative"
//             whileHover={{ scale: editing ? 1.05 : 1 }}
//           >
//             <img
//               src={profilePicture}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mb-4"
//             />
//             {editing && (
//               <label className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full cursor-pointer">
//                 <FaEdit />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleProfilePictureChange}
//                   className="hidden"
//                 />
//               </label>
//             )}
//           </motion.div>

//           {/* Name and Email with Edit Icons */}
//           <div className="w-full text-center mb-6">
//             {!editing ? (
//               <>
//                 <h2 className="text-2xl font-semibold mb-2">{studentData.name}</h2>
//                 <p className="text-gray-400 mb-2">{studentData.email}</p>
//               </>
//             ) : (
//               <>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     className="mb-4 w-full p-2 rounded text-black"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   <FaEdit className="absolute right-2 top-2 text-blue-600" />
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     className="mb-4 w-full p-2 rounded text-black"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <FaEdit className="absolute right-2 top-2 text-blue-600" />
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Enrolled Courses Section */}
//           <div className="w-full mb-6">
//             <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {studentData.courses.map((course) => (
//                 <div
//                   key={course.id}
//                   className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col justify-between"
//                 >
//                   <div>
//                     <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
//                     <p className="text-gray-300 mb-4">
//                       Progress: {course.progress}%
//                     </p>
//                   </div>
//                   <div>
//                     {course.certificate ? (
//                       <p className="text-green-500 flex items-center">
//                         <FaCertificate className="mr-2" /> {course.certificate}
//                       </p>
//                     ) : (
//                       <p className="text-yellow-500">No certificate earned yet</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Edit, Save, and Cancel Buttons */}
//           <div className="flex space-x-4">
//             {!editing ? (
//               <button
//                 onClick={() => setEditing(true)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
//               >
//                 Edit Profile
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={handleSave}
//                   className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-300"
//                 >
//                   Save <FaSave className="inline ml-2" />
//                 </button>
//                 <button
//                   onClick={handleCancel}
//                   className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300"
//                 >
//                   Cancel <FaTimes className="inline ml-2" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaSave, FaTimes, FaCheckCircle, FaCertificate } from 'react-icons/fa';

const initialStudentData = {
  name: "Vinayak Jadhav",
  email: "vinayak.jadhav_comp23@pccoer.in",
  profilePicture: "https://via.placeholder.com/150",
  courses: [
    {
      id: 1,
      title: "Cybersecurity Basics",
      progress: 75,
      certificate: "Certificate of Completion"
    },
    {
      id: 2,
      title: "Advanced Networking",
      progress: 50,
      certificate: null
    },
    {
      id: 3,
      title: "Ethical Hacking",
      progress: 100,
      certificate: "Certificate of Excellence"
    }
  ]
};

const Profile = () => {
  const [studentData, setStudentData] = useState(initialStudentData);
  const [editing, setEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(studentData.profilePicture);
  const [name, setName] = useState(studentData.name);
  const [email, setEmail] = useState(studentData.email);
  const [successMessage, setSuccessMessage] = useState("");

  // Timed removal of success message
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Handle profile picture upload with validation
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSave = () => {
    setStudentData({
      ...studentData,
      profilePicture,
      name,
      email,
    });
    setSuccessMessage("Profile updated successfully!");
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setProfilePicture(studentData.profilePicture);
    setName(studentData.name);
    setEmail(studentData.email);
  };

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white flex items-center justify-center "
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl w-full relative m-8">
        <div className="flex flex-col items-center">
          {successMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-lg flex items-center"
            >
              <FaCheckCircle className="mr-2" />
              {successMessage}
            </motion.div>
          )}
          <motion.div
            className="relative"
            whileHover={{ scale: editing ? 1.05 : 1 }}
          >
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4"
            />
            {editing && (
              <label className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full cursor-pointer">
                <FaEdit />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="hidden"
                />
              </label>
            )}
          </motion.div>
          <div className="w-full text-center mb-6">
            {!editing ? (
              <>
                <h2 className="text-2xl font-semibold mb-2">{studentData.name}</h2>
                <p className="text-gray-400 mb-2">{studentData.email}</p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="mb-4 w-full p-2 rounded text-black"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="mb-4 w-full p-2 rounded text-black"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            )}
          </div>
          <div className="w-full mb-6">
            <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentData.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
                    <p className="text-gray-300 mb-2">
                      Progress: {course.progress}%
                    </p>
                    <div className="w-full bg-gray-600 rounded h-2">
                      <div
                        className="bg-green-500 h-2 rounded"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    {course.certificate ? (
                      <p className="text-green-500 flex items-center mt-2">
                        <FaCertificate className="mr-2" /> {course.certificate}
                      </p>
                    ) : (
                      <p className="text-yellow-500 mt-2">No certificate earned yet</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Save <FaSave className="inline ml-2" />
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Cancel <FaTimes className="inline ml-2" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
