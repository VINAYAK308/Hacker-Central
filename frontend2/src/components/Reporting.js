// src/components/Reporting.jsx
// import React from 'react';

// function Reporting() {
//   return (
//     <div id="reporting" className="mb-10">
//       <h2 className="text-xl font-semibold mb-4">Reporting</h2>
//       <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">View Reports</button>
//       <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">Export Reports</button>
//     </div>
//   );
// }

// export default Reporting;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Reporting() {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Sample data for Indian users with cybersecurity-related courses
  const sampleReports = [
    { id: 1, user: 'Aarav Singh', location: 'Mumbai', course: 'Cybersecurity Essentials', progress: '85%', completion: 'In Progress' },
    { id: 2, user: 'Neha Sharma', location: 'Delhi', course: 'Network Security Fundamentals', progress: '70%', completion: 'In Progress' },
    { id: 3, user: 'Rajesh Kumar', location: 'Bangalore', course: 'Ethical Hacking Basics', progress: '50%', completion: 'In Progress' },
    { id: 4, user: 'Sneha Verma', location: 'Pune', course: 'Malware Analysis', progress: '100%', completion: 'Complete' },
    { id: 5, user: 'Ananya Patel', location: 'Hyderabad', course: 'Advanced Cyber Defense', progress: '40%', completion: 'In Progress' },
    // Additional cybersecurity courses and users
  ];

  // Fetch sample reports (or replace with actual API call)
  const fetchReports = () => {
    setReports(sampleReports);
  };

  // Export reports as CSV
  const exportReports = () => {
    const headers = ['User', 'Location', 'Course', 'Progress', 'Completion'];
    const csvRows = [
      headers.join(','),
      ...reports.map(report => `${report.user},${report.location},${report.course},${report.progress},${report.completion}`)
    ].join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'cybersecurity_reports.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Filter and sort reports based on search and sort order
  const filteredReports = reports.filter(report => 
    (report.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
     report.course.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCourse === '' || report.course === selectedCourse)
  );

  const sortedReports = [...filteredReports].sort((a, b) => {
    const progressA = parseInt(a.progress);
    const progressB = parseInt(b.progress);
    return sortOrder === 'asc' ? progressA - progressB : progressB - progressA;
  });

  return (
    <motion.div
      id="reporting"
      className="mb-10 p-6 bg-black rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-100">Reporting - Cybersecurity Courses</h2>

      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by user or course..."
          className="p-2 border border-gray-600 rounded-lg flex-1 bg-gray-800 text-gray-200 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 focus:outline-none"
        >
          <option value="">All Courses</option>
          <option value="Cybersecurity Essentials">Cybersecurity Essentials</option>
          <option value="Network Security Fundamentals">Network Security Fundamentals</option>
          <option value="Ethical Hacking Basics">Ethical Hacking Basics</option>
          <option value="Malware Analysis">Malware Analysis</option>
          <option value="Advanced Cyber Defense">Advanced Cyber Defense</option>
        </select>
        <button
          onClick={fetchReports}
          className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded-lg"
        >
          View Reports
        </button>
        <button
          onClick={exportReports}
          className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded-lg"
        >
          Export Reports
        </button>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-3 rounded-lg"
        >
          Sort by Progress ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>

      {sortedReports.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="py-2 px-4 border-b border-gray-700">User</th>
                <th className="py-2 px-4 border-b border-gray-700">Location</th>
                <th className="py-2 px-4 border-b border-gray-700">Course</th>
                <th className="py-2 px-4 border-b border-gray-700">Progress</th>
                <th className="py-2 px-4 border-b border-gray-700">Completion</th>
              </tr>
            </thead>
            <tbody>
              {sortedReports.map((report, index) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-800"
                >
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.user}</td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.location}</td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.course}</td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.progress}</td>
                  <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.completion}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <p className="text-gray-400 mt-4">No reports to display.</p>
      )}
    </motion.div>
  );
}

export default Reporting;
