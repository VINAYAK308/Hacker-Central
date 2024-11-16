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
// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2'; // Ensure you have Chart.js and its React wrapper installed
// import { Tooltip } from 'react-tooltip'; // Optional: Include a tooltip library for additional information

// function Reporting({ userRole }) {
//   const [loading, setLoading] = useState(false);
//   const [selectedReport, setSelectedReport] = useState('');
//   const [dateRange, setDateRange] = useState('');
//   const [downloadFormat, setDownloadFormat] = useState('CSV');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [reportName, setReportName] = useState('');
//   const [reportType, setReportType] = useState('User Activity');
//   const [createReportMode, setCreateReportMode] = useState(false);
//   const [filters, setFilters] = useState({ status: '', course: '' });

//   // Dummy data for chart
//   const chartData = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'User Activity',
//         data: [65, 59, 80, 81, 56],
//         fill: false,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//       },
//     ],
//   };

//   const handleViewReport = (reportType) => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert(`Viewing ${reportType} report!`);
//       setSelectedReport(reportType);
//     }, 1000);
//   };

//   const handleExportReports = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert(`Reports exported successfully in ${downloadFormat} format!`);
//     }, 1000);
//   };

//   const handleCreateReport = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert(`Report "${reportName}" of type "${reportType}" created successfully!`);
//       setCreateReportMode(false);
//       setReportName('');
//       setReportType('User Activity'); // Reset to default report type
//       setFilters({ status: '', course: '' }); // Reset filters
//     }, 1000);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Reporting Dashboard</h2>

//       {/* Role-based visibility */}
//       {userRole !== 'student' && (
//         <>
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">Search Reports</h3>
//             <input
//               type="text"
//               placeholder="Search reports..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//             <p className="text-sm text-gray-400 mt-1">Use keywords to find specific reports.</p>
//           </div>

//           <h3 className="text-lg font-semibold mb-4">View Reports</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             {['User Activity', 'Course Progress', 'Completion Rates'].map((reportType) => (
//               <button
//                 key={reportType}
//                 onClick={() => handleViewReport(reportType)}
//                 className={`bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={loading}
//                 data-tip={`Click to view ${reportType} report`}
//               >
//                 {loading ? 'Loading...' : reportType}
//               </button>
//             ))}
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">Filters</h3>
//             <input
//               type="date"
//               value={dateRange}
//               onChange={(e) => setDateRange(e.target.value)}
//               className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />
//             <p className="text-sm text-gray-400 mt-1">Select a date range to filter your reports.</p>
//           </div>
//         </>
//       )}

//       <h3 className="text-lg font-semibold mb-4">Export Reports</h3>
//       <div className="flex mb-4">
//         <select
//           value={downloadFormat}
//           onChange={(e) => setDownloadFormat(e.target.value)}
//           className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//         >
//           <option value="CSV">CSV</option>
//           <option value="PDF">PDF</option>
//           <option value="XLSX">XLSX</option>
//         </select>
//         <button
//           onClick={handleExportReports}
//           className={`bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//           disabled={loading}
//           data-tip={`Click to export reports in ${downloadFormat} format`}
//         >
//           {loading ? 'Loading...' : 'Export Reports'}
//         </button>
//       </div>

//       {selectedReport && (
//         <div className="mt-4 text-green-400">
//           <p>Currently viewing: <strong>{selectedReport}</strong></p>
//           <p className="text-sm text-gray-400">This report provides insights on {selectedReport.toLowerCase()}.</p>
//         </div>
//       )}

//       {/* Graphical Representation */}
//       {selectedReport && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">{selectedReport} Chart</h3>
//           <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
//           <p className="text-sm text-gray-400 mt-2">This chart represents the trends in {selectedReport.toLowerCase()} over the selected period.</p>
//         </div>
//       )}

//       {/* Create Report Section - Superadmin Only */}
//       {userRole === 'superadmin' && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-4">Create New Report</h3>
//           <button
//             onClick={() => setCreateReportMode(!createReportMode)}
//             className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg shadow mb-4 transition-all"
//           >
//             {createReportMode ? 'Cancel' : 'Create Report'}
//           </button>

//           {createReportMode && (
//             <div className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <input
//                 type="text"
//                 placeholder="Report Name"
//                 value={reportName}
//                 onChange={(e) => setReportName(e.target.value)}
//                 className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               />
//               <select
//                 value={reportType}
//                 onChange={(e) => setReportType(e.target.value)}
//                 className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               >
//                 <option value="User Activity">User Activity</option>
//                 <option value="Course Progress">Course Progress</option>
//                 <option value="Completion Rates">Completion Rates</option>
//               </select>
//               <div className="mb-4">
//                 <label className="block text-sm mb-1">Status Filter</label>
//                 <input
//                   type="text"
//                   placeholder="Enter status (e.g., active, inactive)"
//                   value={filters.status}
//                   onChange={(e) => setFilters({ ...filters, status: e.target.value })}
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 />
//                 <label className="block text-sm mb-1">Course Filter</label>
//                 <input
//                   type="text"
//                   placeholder="Enter course name"
//                   value={filters.course}
//                   onChange={(e) => setFilters({ ...filters, course: e.target.value })}
//                   className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                 />
//               </div>
//               <button
//                 onClick={handleCreateReport}
//                 className={`bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 disabled={loading || !reportName}
//               >
//                 {loading ? 'Creating...' : 'Create Report'}
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Tooltips for additional information */}
//       <Tooltip place="top" effect="solid" />
//     </div>
//   );
// }

// export default Reporting;
// import React, { useState } from 'react';

// const reportTypes = [
//   { id: 1, name: 'User Activity' },
//   { id: 2, name: 'Course Progress' },
//   { id: 3, name: 'Completion Rates' },
// ];

// const mockData = [
//   { id: 1, name: 'User 1', activity: 'Completed Course A', date: '2024-10-30', role: 'Admin', course: 'Course A', instructor: 'Instructor A', enrollment: 25, completionRate: 100, feedbackRating: 4.5 },
//   { id: 2, name: 'User 2', activity: 'Started Course B', date: '2024-10-29', role: 'User', course: 'Course B', instructor: 'Instructor B', enrollment: 20, completionRate: 80, feedbackRating: 4.0 },
//   // Add more mock data as needed
// ];

// function Reporting() {
//   const [reportData, setReportData] = useState(mockData);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(3);
//   const [reportForm, setReportForm] = useState({ id: null, name: '', activity: '', date: '', role: '', course: '', instructor: '', enrollment: '', completionRate: '', feedbackRating: '' });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleViewReports = () => {
//     let filteredData = mockData.filter((data) => {
//       const date = new Date(data.date);
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       return (
//         (!startDate || date >= start) &&
//         (!endDate || date <= end) &&
//         (!searchTerm || data.name.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     });

//     setReportData(filteredData);
//     setCurrentPage(1);
//   };

//   const handleExportReports = (format) => {
//     console.log(`Exporting reports as ${format}...`);
//   };

//   const handleAddOrUpdateReport = () => {
//     if (isEditing) {
//       setReportData((prevData) => 
//         prevData.map((item) => (item.id === reportForm.id ? reportForm : item))
//       );
//     } else {
//       setReportData((prevData) => [
//         ...prevData,
//         { ...reportForm, id: prevData.length + 1 }, // Assign a new ID
//       ]);
//     }
//     resetForm();
//   };

//   const handleEditReport = (report) => {
//     setReportForm(report);
//     setIsEditing(true);
//   };

//   const handleDeleteReport = (id) => {
//     setReportData((prevData) => prevData.filter((item) => item.id !== id));
//   };

//   const resetForm = () => {
//     setReportForm({ id: null, name: '', activity: '', date: '', role: '', course: '', instructor: '', enrollment: '', completionRate: '', feedbackRating: '' });
//     setIsEditing(false);
//   };

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = reportData.slice(indexOfFirstRow, indexOfLastRow);

//   return (
//     <div id="reporting" className="mb-10 bg-gray-800 p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-white mb-4">Reporting</h2>

//       {/* <div className="mb-4">
//         <label className="block text-gray-300 mb-2">Search:</label>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="bg-gray-700 text-white py-2 px-4 rounded w-full mb-4"
//           placeholder="Search users..."
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-300 mb-2">Start Date:</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           className="bg-gray-700 text-white py-2 px-4 rounded mr-4"
//         />
//         <label className="block text-gray-300 mb-2">End Date:</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           className="bg-gray-700 text-white py-2 px-4 rounded"
//         />
//       </div>

//       {/* Additional Fields for Course Report */}
//       <div className="mb-4">
//         <label className="block text-gray-300 mb-2">Course Name:</label>
//         <input
//           type="text"
//           value={reportForm.course}
//           onChange={(e) => setReportForm({ ...reportForm, course: e.target.value })}
//           className="bg-gray-700 text-white py-2 px-4 rounded w-full mb-2"
//           placeholder="Enter course name..."
//         />
//         <label className="block text-gray-300 mb-2">Instructor Name:</label>
//         <input
//           type="text"
//           value={reportForm.instructor}
//           onChange={(e) => setReportForm({ ...reportForm, instructor: e.target.value })}
//           className="bg-gray-700 text-white py-2 px-4 rounded w-full mb-2"
//           placeholder="Enter instructor name..."
//         />
//         <label className="block text-gray-300 mb-2">Enrollment Count:</label>
//         <input
//           type="number"
//           value={reportForm.enrollment}
//           onChange={(e) => setReportForm({ ...reportForm, enrollment: e.target.value })}
//           className="bg-gray-700 text-white py-2 px-4 rounded w-full mb-2"
//           placeholder="Enter enrollment count..."
//         />
//         <label className="block text-gray-300 mb-2">Completion Rate (%):</label>
//         <input
//           type="number"
//           value={reportForm.completionRate}
//           onChange={(e) => setReportForm({ ...reportForm, completionRate: e.target.value })}
//           className="bg-gray-700 text-white py-2 px-4 rounded w-full mb-2"
//           placeholder="Enter completion rate..."
//         />
//         <label className="block text-gray-300 mb-2">Feedback Rating:</label>
//         <input
//           type="number"
//           value={reportForm.feedbackRating}
//           onChange={(e) => setReportForm({ ...reportForm, feedbackRating: e.target.value })}
//           className="bg-gray-700 text-white py-2 px-4 rounded w-full mb-2"
//           placeholder="Enter feedback rating..."
//           step="0.1"
//           min="0"
//           max="5"
//         />
//       </div>

//       <button
//         onClick={handleAddOrUpdateReport}
//         className={`bg-${isEditing ? 'orange' : 'blue'}-600 hover:bg-${isEditing ? 'orange' : 'blue'}-700 text-white py-2 px-4 rounded mb-2`}
//       >
//         {isEditing ? 'Update Report' : 'Create Report'}
//       </button>
//       <button
//         onClick={() => handleExportReports('CSV')}
//         className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-2"
//       >
//         Export as CSV
//       </button>
//       <button
//         onClick={() => handleExportReports('PDF')}
//         className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-2"
//       >
//         Export as PDF
//       </button>

//       {/* Display Report Data */}
//       <div className="mt-6">
//         {currentRows.length > 0 ? (
//           <table className="min-w-full bg-gray-700 text-gray-200 rounded-lg overflow-hidden shadow-lg">
//             <thead>
//               <tr className="bg-gray-600">
//                 <th className="py-2 px-4">ID</th>
//                 <th className="py-2 px-4">Name</th>
//                 <th className="py-2 px-4">Activity</th>
//                 <th className="py-2 px-4">Date</th>
//                 <th className="py-2 px-4">Role</th>
//                 <th className="py-2 px-4">Course</th>
//                 <th className="py-2 px-4">Instructor</th>
//                 <th className="py-2 px-4">Enrollment</th>
//                 <th className="py-2 px-4">Completion Rate</th>
//                 <th className="py-2 px-4">Feedback Rating</th>
//                 <th className="py-2 px-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.map((data) => (
//                 <tr key={data.id} className="hover:bg-gray-600">
//                   <td className="py-2 px-4">{data.id}</td>
//                   <td className="py-2 px-4">{data.name}</td>
//                   <td className="py-2 px-4">{data.activity}</td>
//                   <td className="py-2 px-4">{data.date}</td>
//                   <td className="py-2 px-4">{data.role}</td>
//                   <td className="py-2 px-4">{data.course}</td>
//                   <td className="py-2 px-4">{data.instructor}</td>
//                   <td className="py-2 px-4">{data.enrollment}</td>
//                   <td className="py-2 px-4">{data.completionRate}</td>
//                   <td className="py-2 px-4">{data.feedbackRating}</td>
//                   <td className="py-2 px-4">
//                     <button
//                       onClick={() => handleEditReport(data)}
//                       className="bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-2 rounded mr-2"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteReport(data.id)}
//                       className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-300">No report data available.</p>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-gray-600 text-white py-2 px-4 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={indexOfLastRow >= reportData.length}
//           className="bg-gray-600 text-white py-2 px-4 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   ); 
// }

// export default Reporting;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// function Reporting() {
//   const [reports, setReports] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');

//   // Function to fetch reports (mock data here, replace with API call)
//   const fetchReports = () => {
//     const sampleReports = [
//       { id: 1, user: 'Alice', course: 'Cybersecurity Basics', progress: '80%', completion: 'Complete' },
//       { id: 2, user: 'Bob', course: 'React Advanced', progress: '60%', completion: 'In Progress' },
//       { id: 3, user: 'Carol', course: 'Python Fundamentals', progress: '100%', completion: 'Complete' },
//       // More report data
//     ];
//     setReports(sampleReports);
//   };

//   // Function to export reports as CSV
//   const exportReports = () => {
//     const headers = ['User', 'Course', 'Progress', 'Completion'];
//     const csvRows = [
//       headers.join(','),
//       ...reports.map(report => `${report.user},${report.course},${report.progress},${report.completion}`)
//     ].join('\n');

//     const blob = new Blob([csvRows], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.setAttribute('download', 'reports.csv');
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   // Filter and sort reports based on search and sort order
//   const filteredReports = reports.filter(
//     report =>
//       report.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       report.course.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedReports = [...filteredReports].sort((a, b) => {
//     const progressA = parseInt(a.progress);
//     const progressB = parseInt(b.progress);
//     return sortOrder === 'asc' ? progressA - progressB : progressB - progressA;
//   });

//   return (
//     <motion.div
//       id="reporting"
//       className="mb-10 p-6 bg-black rounded-lg shadow-lg"
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-gray-100">Reporting</h2>

//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by user or course..."
//           className="p-2 border border-gray-600 rounded-lg flex-1 bg-gray-800 text-gray-200 focus:outline-none focus:border-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button
//           onClick={fetchReports}
//           className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded-lg"
//         >
//           View Reports
//         </button>
//         <button
//           onClick={exportReports}
//           className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded-lg"
//         >
//           Export Reports
//         </button>
//       </div>

//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
//           className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-3 rounded-lg"
//         >
//           Sort by Progress ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
//         </button>
//       </div>

//       {sortedReports.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="overflow-x-auto"
//         >
//           <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg">
//             <thead>
//               <tr className="bg-gray-800 text-gray-300">
//                 <th className="py-2 px-4 border-b border-gray-700">User</th>
//                 <th className="py-2 px-4 border-b border-gray-700">Course</th>
//                 <th className="py-2 px-4 border-b border-gray-700">Progress</th>
//                 <th className="py-2 px-4 border-b border-gray-700">Completion</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedReports.map((report, index) => (
//                 <motion.tr
//                   key={report.id}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="hover:bg-gray-800"
//                 >
//                   <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.user}</td>
//                   <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.course}</td>
//                   <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.progress}</td>
//                   <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{report.completion}</td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>
//       )}
//     </motion.div>
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
