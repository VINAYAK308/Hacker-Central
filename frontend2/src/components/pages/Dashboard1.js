


  

// import React, { useState } from 'react'; 
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Student');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Function to validate inputs
//   const validate = () => {
//     const newErrors = {};
//     // Username validation: required and no spaces allowed
//     if (!username) {
//       newErrors.username = 'Username is required.';
//     } else if (/\s/.test(username)) {
//       newErrors.username = 'Username cannot contain spaces.';
//     }

//     // Password validation: minimum 8 characters, must include a number and special character
//     if (!password) {
//       newErrors.password = 'Password is required.';
//     } else if (password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long.';
//     } else if (!/[0-9]/.test(password)) {
//       newErrors.password = 'Password must contain at least one number.';
//     } else if (!/[!@#$%^&*]/.test(password)) {
//       newErrors.password = 'Password must contain at least one special character.';
//     }

//     return newErrors;
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       // Navigate based on the role
//       if (role === 'Student') {
//         navigate('/user-dashboard');
//       } else if (role === 'Admin') {
//         navigate('/admin-dashboard');
//       } else if (role === 'Superadmin') {
//         navigate('/superadmin-dashboard');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-black">
//       <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-96" onSubmit={handleLogin}>
//         <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Login</h2>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Username</label>
//           <input
//             type="text"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.username ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Password</label>
//           <input
//             type="password"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.password ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">User Role</label>
//           <select
//             className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="Student">Student</option>
//             <option value="Admin">Admin</option>
//             <option value="Superadmin">Superadmin</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Student');
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState('');
//   const navigate = useNavigate();

//   // Function to validate inputs
//   const validate = () => {
//     const newErrors = {};
//     if (!username) {
//       newErrors.username = 'Username is required.';
//     } else if (/\s/.test(username)) {
//       newErrors.username = 'Username cannot contain spaces.';
//     }

//     if (!password) {
//       newErrors.password = 'Password is required.';
//     } else if (password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long.';
//     } else if (!/[0-9]/.test(password)) {
//       newErrors.password = 'Password must contain at least one number.';
//     } else if (!/[!@#$%^&*]/.test(password)) {
//       newErrors.password = 'Password must contain at least one special character.';
//     }

//     return newErrors;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     setLoginError(''); // Clear previous login error

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:3001/backend/server.js', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username, password, role }),
//         });

//         const data = await response.json();

//         if (data.success) {
//           // Navigate based on the role
//           if (role === 'Student') {
//             navigate('/user-dashboard');
//           } else if (role === 'Admin') {
//             navigate('/admin-dashboard');
//           } else if (role === 'Superadmin') {
//             navigate('/superadmin-dashboard');
//           }
//         } else {
//           setLoginError(data.message);
//         }
//       } catch (error) {
//         setLoginError('An error occurred while logging in.');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-black">
//       <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-96" onSubmit={handleLogin}>
//         <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Login</h2>

//         {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Username</label>
//           <input
//             type="text"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.username ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Password</label>
//           <input
//             type="password"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.password ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">User Role</label>
//           <select
//             className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="Student">Student</option>
//             <option value="Admin">Admin</option>
//             <option value="Superadmin">Superadmin</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
//     if (data.success) {
//       setMessage('Login successful!');
//       // Redirect based on role using navigate
//       if (data.role === 'Admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('./admin-dashboard');
//       } else if (data.role === 'Superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('./Superadmin-dashboard');
//       } else if (data.role === 'Student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('./user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div >
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>User Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="admin">Admin</option>
//             <option value="superadmin">Superadmin</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }),
//     });
//     if (!response.ok) {
//       throw new Error(`Server error: ${response.status}`);
//     }

//     const data = await response.json();
//     if (data.success) {
//       setMessage('Login successful!');
//       if (data.role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('./admin-dashboard');
//       } else if (data.role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('./Superadmin-dashboard');
//       } else if (data.role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('./user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
//         <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="admin">admin</option>
//               <option value="superadmin">superadmin</option>
//               <option value="student">student</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="text-center text-red-500 font-semibold mt-4">
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
//     if (data.success) {
//       setMessage('Login successful!');
//       // Redirect based on role using navigate
//       if (data.role === 'Admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('./admin-dashboard');
//       } else if (data.role === 'Superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('./Superadmin-dashboard');
//       } else if (data.role === 'Student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('./user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div >
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>User Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="Admin">Admin</option>
//             <option value="Superadmin">Superadmin</option>
//             <option value="Student">Student</option>
//           </select>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
//     console.log(data);
//     if (data.success) {
//       setMessage('Login successful!');
//       // setUserRole(data.role); 
//       // Redirect based on role using navigate
//       if (data.role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (data.role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/Superadmin-dashboard');
//       } else if (data.role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div >
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>User Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="admin">Admin</option>
//             <option value="superadmin">Superadmin</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState(''); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
//     console.log(data);  // Check the response here

//     if (data.success) {
//       setMessage('Login successful!');
//       // Redirect based on the role selected in the form
//       if (role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/Superadmin-dashboard');
//       } else if (role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>User Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="admin">Admin</option>
//             <option value="superadmin">Superadmin</option>
//             <option value="student">Student</option>
//           </select>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('select'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
//     console.log(data);  // Check the response here

//     if (data.success) {
//       // setMessage('Login successful!');
//       // Redirect based on the role selected in the form
//       if (role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/Superadmin-dashboard');
//       } else if (role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-lg">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="select">select</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Superadmin</option>
//               <option value="student">Student</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-lg">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('select'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();

//     if (data.success) {
//       // Redirect based on the role selected in the form
//       if (role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/Superadmin-dashboard');
//       } else if (role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage(data.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-lg">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="select">select</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Superadmin</option>
//               <option value="student">Student</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-lg">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('select'); // Default role set to 'select'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();

//     if (data.success) {
//       setMessage('Login successful!');
      
//       // Redirect based on the role returned from the server response
//       if (data.role === 'Admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (data.role === 'Superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/Superadmin-dashboard');
//       } else if (data.role === 'Student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage(data.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-lg">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="select">select</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Superadmin</option>
//               <option value="student">Student</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-lg">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('select'); // Default role set to 'select'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();

//     if (data.success) {
//       // Redirect based on the role returned from the server (data.role)
//       if (data.role === 'Admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (data.role === 'Superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/superadmin-dashboard');
//       } else if (data.role === 'Student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage(data.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-lg">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="select">select</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Superadmin</option>
//               <option value="student">Student</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-lg">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('select'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
    
//     if (data.success) {
//       setMessage('Login successful!');
//       // Redirect based on the role selected in the form
//       if (role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/superadmin-dashboard');
//       } else if (role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage(data.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-lg">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="select">select</option>
//               <option value="student">Student</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Superadmin</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-lg">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Ensure a role is selected
//     if (role === 'select') {
//       setMessage('Please select a valid user role.');
//       return;
//     }

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();

//     if (data.success) {
//       // Provide role-specific welcome message and navigate based on the selected role
//       if (role === 'admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (role === 'superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/superadmin-dashboard');
//       } else if (role === 'student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage(data.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-lg">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-lg">User Role:</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               className="w-full p-2 mt-1 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="select">Select</option>
//               <option value="student">Student</option>
//               <option value="admin">Admin</option>
//               <option value="superadmin">Superadmin</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-lg">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // Default role set to 'student'
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, role }), // Include the role in the request body
//     });

//     const data = await response.json();
//     if (data.success) {
//       setMessage('Login successful!');
//       // Redirect based on role using navigate
//       if (data.role === 'Admin') {
//         setMessage('Welcome to Admin Dashboard');
//         navigate('/admin-dashboard');
//       } else if (data.role === 'Superadmin') {
//         setMessage('Welcome to Super Admin Dashboard');
//         navigate('/Superadmin-dashboard');
//       } else if (data.role === 'Student') {
//         setMessage('Welcome to Student Dashboard');
//         navigate('/user-dashboard');
//       }
//     } else {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div >
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>User Role:</label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="Admin">Admin</option>
//             <option value="Superadmin">Superadmin</option>
//             <option value="Student">Student</option>
//           </select>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student'); // Default role set to 'Student'
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, role }), // Include role in request
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Login successful!');
        // Redirect based on role
        if (data.role === 'Admin') {
          navigate('/admin-dashboard');
        } else if (data.role === 'Superadmin') {
          navigate('/superadmin-dashboard');
        } else if (data.role === 'Student') {
          navigate('/user-dashboard');
        }
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-400">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400">User Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Admin">Admin</option>
              <option value="Superadmin">Superadmin</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </motion.button>
        </form>
        {message && (
          <p className="text-center text-gray-300 mt-4">{message}</p>
        )}
      </motion.div>
    </div>
  );
}

export default Login;
