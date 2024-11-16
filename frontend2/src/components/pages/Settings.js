// src/components/Settings.jsx
// import React from 'react';

// const Settings = () => {
//   return (
//     <div className="text-white">
//       <h2 className="text-2xl mb-4">Settings</h2>
//       <p>Adjust system settings, manage notifications, and customize preferences for the dashboard.</p>
//       {/* Add your settings functionalities here */}
//     </div>
//   );
// };

// export default Settings;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Settings = () => {
//   // State variables for form data
//   const [sessionTimeout, setSessionTimeout] = useState(30); // Default timeout in minutes
//   const [passwordPolicy, setPasswordPolicy] = useState({
//     minLength: 8,
//     requireSpecialChar: true,
//     requireUppercase: true,
//   });
//   const [emailTemplate, setEmailTemplate] = useState('Welcome to our LMS!');
//   const [notificationPreferences, setNotificationPreferences] = useState({
//     email: true,
//     sms: false,
//     push: false,
//   });
//   const [isSaved, setIsSaved] = useState(false);

//   const handleSaveSettings = () => {
//     // Save settings logic (e.g., sending to backend)
//     setIsSaved(true);
//     setTimeout(() => setIsSaved(false), 2000); // Reset save status after 2 seconds
//   };

//   return (
//     <motion.div
//       className="text-white p-6 bg-gray-900 rounded-lg shadow-lg"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.h2 className="text-2xl mb-4 font-semibold">
//         Settings
//       </motion.h2>
//       <motion.p
//         className="mb-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         Adjust system settings, manage notifications, and customize preferences for the dashboard.
//       </motion.p>

//       {/* LMS Settings Section */}
//       <motion.section className="mb-6" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
//         <h3 className="text-xl font-semibold mb-2">LMS Settings</h3>
//         <div className="mb-4">
//           <label className="block mb-1">Session Timeout (in minutes)</label>
//           <input
//             type="number"
//             min="1"
//             value={sessionTimeout}
//             onChange={(e) => setSessionTimeout(e.target.value)}
//             className="text-gray-900 px-3 py-2 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Password Policy</label>
//           <input
//             type="number"
//             min="4"
//             value={passwordPolicy.minLength}
//             onChange={(e) => setPasswordPolicy({ ...passwordPolicy, minLength: e.target.value })}
//             className="text-gray-900 px-3 py-2 rounded w-full mb-2"
//             placeholder="Minimum Length"
//           />
//           <label className="flex items-center space-x-2 mb-2">
//             <input
//               type="checkbox"
//               checked={passwordPolicy.requireSpecialChar}
//               onChange={(e) => setPasswordPolicy({ ...passwordPolicy, requireSpecialChar: e.target.checked })}
//               className="form-checkbox"
//             />
//             <span>Require special character</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={passwordPolicy.requireUppercase}
//               onChange={(e) => setPasswordPolicy({ ...passwordPolicy, requireUppercase: e.target.checked })}
//               className="form-checkbox"
//             />
//             <span>Require uppercase letter</span>
//           </label>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Email Template</label>
//           <textarea
//             value={emailTemplate}
//             onChange={(e) => setEmailTemplate(e.target.value)}
//             className="text-gray-900 px-3 py-2 rounded w-full h-20"
//             placeholder="Enter email template text"
//           />
//         </div>
//       </motion.section>

//       {/* Notification Management Section */}
//       <motion.section className="mb-6" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
//         <h3 className="text-xl font-semibold mb-2">Notification Management</h3>
//         <div className="flex items-center mb-2">
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={notificationPreferences.email}
//               onChange={(e) => setNotificationPreferences({ ...notificationPreferences, email: e.target.checked })}
//               className="form-checkbox"
//             />
//             <span>Email Notifications</span>
//           </label>
//         </div>
//         <div className="flex items-center mb-2">
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={notificationPreferences.sms}
//               onChange={(e) => setNotificationPreferences({ ...notificationPreferences, sms: e.target.checked })}
//               className="form-checkbox"
//             />
//             <span>SMS Notifications</span>
//           </label>
//         </div>
//         <div className="flex items-center">
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={notificationPreferences.push}
//               onChange={(e) => setNotificationPreferences({ ...notificationPreferences, push: e.target.checked })}
//               className="form-checkbox"
//             />
//             <span>Push Notifications</span>
//           </label>
//         </div>
//       </motion.section>

//       {/* Save Button */}
//       <motion.button
//         onClick={handleSaveSettings}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.3 }}
//         whileHover={{ scale: 1.05 }}
//       >
//         Save Settings
//       </motion.button>

//       {/* Success Message */}
//       {isSaved && (
//         <motion.div
//           className="mt-4 text-green-500 text-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Settings saved successfully!
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Settings;
// import React, { useState } from 'react';

// const Settings = () => {
//   // State for LMS settings
//   const [sessionTimeout, setSessionTimeout] = useState(30); // Default to 30 mins
//   const [passwordPolicy, setPasswordPolicy] = useState('Strong');
//   const [emailTemplate, setEmailTemplate] = useState('');

//   // State for Notifications settings
//   const [emailNotifications, setEmailNotifications] = useState(true);
//   const [smsNotifications, setSmsNotifications] = useState(false);

//   const handleSaveSettings = () => {
//     // Code to save settings (API call or local storage can be implemented here)
//     alert('Settings saved successfully!');
//   };

//   return (
//     <div className="text-white p-6">
//       <h2 className="text-2xl mb-6">Settings</h2>

//       {/* LMS Settings Section */}
//       <div className="mb-8">
//         <h3 className="text-xl mb-4">LMS Settings</h3>
        
//         {/* Session Timeout */}
//         <div className="mb-4">
//           <label className="block mb-1">Session Timeout (minutes):</label>
//           <input
//             type="number"
//             value={sessionTimeout}
//             onChange={(e) => setSessionTimeout(e.target.value)}
//             className="text-black px-2 py-1 rounded"
//             min="5"
//           />
//         </div>

//         {/* Password Policy */}
//         <div className="mb-4">
//           <label className="block mb-1">Password Policy:</label>
//           <select
//             value={passwordPolicy}
//             onChange={(e) => setPasswordPolicy(e.target.value)}
//             className="text-black px-2 py-1 rounded"
//           >
//             <option value="Weak">Weak</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Strong">Strong</option>
//           </select>
//         </div>

//         {/* Email Template */}
//         <div className="mb-4">
//           <label className="block mb-1">Email Template:</label>
//           <textarea
//             value={emailTemplate}
//             onChange={(e) => setEmailTemplate(e.target.value)}
//             className="text-black px-2 py-1 rounded w-full"
//             rows="4"
//           />
//         </div>
//       </div>

//       {/* Notification Management Section */}
//       <div className="mb-8">
//         <h3 className="text-xl mb-4">Manage Notifications</h3>

//         {/* Email Notifications */}
//         <div className="mb-4">
//           <label className="block mb-1">Email Notifications:</label>
//           <input
//             type="checkbox"
//             checked={emailNotifications}
//             onChange={(e) => setEmailNotifications(e.target.checked)}
//             className="mr-2"
//           />
//           <span>Enable Email Notifications</span>
//         </div>

//         {/* SMS Notifications */}
//         <div className="mb-4">
//           <label className="block mb-1">SMS Notifications:</label>
//           <input
//             type="checkbox"
//             checked={smsNotifications}
//             onChange={(e) => setSmsNotifications(e.target.checked)}
//             className="mr-2"
//           />
//           <span>Enable SMS Notifications</span>
//         </div>
//       </div>

//       {/* Save Button */}
//       <button
//         onClick={handleSaveSettings}
//         className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
//       >
//         Save Settings
//       </button>
//     </div>
//   );
// };

// export default Settings;
import React, { useState } from 'react';

const Settings = () => {
  // State for LMS settings
  const [sessionTimeout, setSessionTimeout] = useState(30); // Default to 30 mins
  const [passwordPolicy, setPasswordPolicy] = useState('Strong');
  const [emailTemplate, setEmailTemplate] = useState('');

  // State for Notifications settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  // State for user and course-related fields
  const [user_name, setUserName] = useState(''); // User name
  const [course_name, setCourseName] = useState(''); // Course name
  const [expiration_date, setExpirationDate] = useState(''); // Expiration date

  const handleSaveSettings = () => {
    // Save the settings (API call or local storage can be implemented here)
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-2xl mb-6">Settings</h2>

      {/* LMS Settings Section */}
      <div className="mb-8">
        <h3 className="text-xl mb-4">LMS Settings</h3>

        {/* Session Timeout */}
        <div className="mb-4">
          <label className="block mb-1">Session Timeout (minutes):</label>
          <input
            type="number"
            value={sessionTimeout}
            onChange={(e) => setSessionTimeout(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded"
            min="5"
          />
        </div>

        {/* Password Policy */}
        <div className="mb-4">
          <label className="block mb-1">Password Policy:</label>
          <select
            value={passwordPolicy}
            onChange={(e) => setPasswordPolicy(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded"
          >
            <option value="Weak">Weak</option>
            <option value="Moderate">Moderate</option>
            <option value="Strong">Strong</option>
          </select>
        </div>

        {/* Email Template */}
        <div className="mb-4">
          <label className="block mb-1">Email Template:</label>
          <textarea
            value={emailTemplate}
            onChange={(e) => setEmailTemplate(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded w-full"
            rows="4"
          />
        </div>
      </div>

      {/* Notification Management Section */}
      <div className="mb-8">
        <h3 className="text-xl mb-4">Manage Notifications</h3>

        {/* Email Notifications */}
        <div className="mb-4">
          <label className="block mb-1">Email Notifications:</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
            className="mr-2"
          />
          <span>Enable Email Notifications</span>
        </div>

        {/* SMS Notifications */}
        <div className="mb-4">
          <label className="block mb-1">SMS Notifications:</label>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={(e) => setSmsNotifications(e.target.checked)}
            className="mr-2"
          />
          <span>Enable SMS Notifications</span>
        </div>
      </div>

      {/* User and Course Section */}
      <div className="mb-8">
        <h3 className="text-xl mb-4">User and Course Information</h3>

        {/* User Name */}
        <div className="mb-4">
          <label className="block mb-1">User Name:</label>
          <input
            type="text"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded w-full"
          />
        </div>

        {/* Course Name */}
        <div className="mb-4">
          <label className="block mb-1">Course Name:</label>
          <input
            type="text"
            value={course_name}
            onChange={(e) => setCourseName(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded w-full"
          />
        </div>

        {/* Expiration Date */}
        <div className="mb-4">
          <label className="block mb-1">Expiration Date:</label>
          <input
            type="date"
            value={expiration_date}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="bg-gray-700 text-white px-2 py-1 rounded w-full"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveSettings}
        className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
