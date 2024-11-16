// src/components/UserManagement.jsx
// import React from 'react';

// const UserManagement = () => {
//   return (
//     <div className="text-white">
//       <h2 className="text-2xl mb-4">User Management</h2>
//       <p>Manage users, add new users, edit existing user information, and set user permissions.</p>
//       {/* Add your user management functionalities here */}
//     </div>
//   );
// };

// export default UserManagement;
// import React, { useState, useCallback } from 'react';

// const UserManagement = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'Rahul Mehta', role: 'Admin', isActive: true },
//     { id: 2, name: 'Sneha Joshi', role: 'Learner', isActive: true },
//     { id: 3, name: 'Priya Sharma', role: 'Admin', isActive: false },
//     { id: 4, name: 'Ravi Kumar', role: 'Learner', isActive: true },
//     { id: 5, name: 'Aarav Joshi', role: 'Superadmin', isActive: true },
//   ]);

//   const [userForm, setUserForm] = useState({ id: null, name: '', role: 'Learner', isActive: true });
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserForm({ ...userForm, [name]: value });
//   };

//   const addUser = useCallback(() => {
//     if (!userForm.name.trim()) {
//       setMessage('User name cannot be empty.');
//       return;
//     }

//     if (isEditing) {
//       setUsers(users.map(user => user.id === userForm.id ? userForm : user));
//       setMessage('User updated successfully.');
//     } else {
//       setUsers([...users, { ...userForm, id: users.length + 1 }]);
//       setMessage('User added successfully.');
//     }
//     resetForm();
//   }, [userForm, users, isEditing]);

//   const editUser = (user) => {
//     setUserForm(user);
//     setIsEditing(true);
//   };

//   const deleteUser = (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//     if (confirmDelete) {
//       setUsers(users.filter(user => user.id !== id));
//       setMessage('User deleted successfully.');
//     }
//   };

//   const toggleActivation = (id) => {
//     setUsers(users.map(user => 
//       user.id === id ? { ...user, isActive: !user.isActive } : user
//     ));
//     setMessage('User status updated successfully.');
//   };

//   const resetForm = () => {
//     setUserForm({ id: null, name: '', role: 'Learner', isActive: true });
//     setIsEditing(false);
//     setMessage('');
//   };

//   return (
//     <div className="text-white p-6">
//       <h2 className="text-3xl mb-4 font-bold">User Management</h2>
//       <p className="mb-4">Manage users, add new users, edit existing user information, and set user permissions.</p>

//       {message && <p className="text-green-400 mb-2">{message}</p>}

//       {/* User Form for Add/Edit */}
//       <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-4">
//         <h3 className="text-2xl mb-2">{isEditing ? 'Edit User' : 'Add User'}</h3>
//         <input
//           type="text"
//           name="name"
//           placeholder="User Name"
//           value={userForm.name}
//           onChange={handleChange}
//           className="px-4 py-2 mb-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <select
//           name="role"
//           value={userForm.role}
//           onChange={handleChange}
//           className="px-4 py-2 mb-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           <option value="Learner">Learner</option>
//           <option value="Admin">Admin</option>
//           <option value="Superadmin">Superadmin</option>
//         </select>
//         <button onClick={addUser} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200">
//           {isEditing ? 'Update User' : 'Add User'}
//         </button>
//         {isEditing && (
//           <button onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-400 transition duration-200">
//             Cancel
//           </button>
//         )}
//       </div>

//       {/* User List */}
//       <h3 className="text-2xl mb-2">User List</h3>
//       <ul>
//         {users.map(user => (
//           <li key={user.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-2 shadow-md hover:shadow-lg transition duration-200">
//             <span>{user.name} - {user.role} - {user.isActive ? 'Active' : 'Inactive'}</span>
//             <div>
//               <button onClick={() => editUser(user)} className="bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-400 transition duration-200">Edit</button>
//               <button onClick={() => deleteUser(user.id)} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500 transition duration-200">Delete</button>
//               <button 
//                 onClick={() => toggleActivation(user.id)} 
//                 className={`px-3 py-1 rounded-lg text-white ${user.isActive ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'} transition duration-200`}
//               >
//                 {user.isActive ? 'Deactivate' : 'Activate'}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserManagement;

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userForm, setUserForm] = useState({ name: '', role: 'Learner', isActive: true });
  const [message, setMessage] = useState('');

  const openModal = () => {
    setIsEditing(false);
    setUserForm({ name: '', role: 'Learner', isActive: true });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserForm({ name: '', role: 'Learner', isActive: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const addUser = () => {
    if (!userForm.name.trim()) {
      setMessage('User name cannot be empty.');
      return;
    }

    const updatedUsers = isEditing
      ? users.map((user) => (user.id === userForm.id ? userForm : user))
      : [...users, { ...userForm, id: Date.now() }];

    setUsers(updatedUsers);
    closeModal();
    setMessage(isEditing ? 'User updated successfully!' : 'User added successfully!');
  };

  const editUser = (user) => {
    setIsEditing(true);
    setUserForm(user);
    setIsModalOpen(true);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setMessage('User deleted successfully!');
  };

  const toggleActivation = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-white p-6 max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-4 font-bold text-center">User Management</h2>
      <p className="mb-6 text-gray-400 text-center">
        Manage users, add new users, edit existing user information, and set user permissions.
      </p>

      {message && <p className="text-green-400 mb-4 text-center font-medium">{message}</p>}

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 mb-6 w-full rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Header and Add User Button */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-400 font-medium">
          Active Users: {users.filter((user) => user.isActive).length} / Total Users: {users.length}
        </p>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <h3 className="text-2xl mb-4 font-semibold">User List</h3>
      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-2 shadow-md hover:shadow-lg transition duration-200 border border-gray-700"
          >
            <span className="text-gray-300">
              {user.name} - {user.role} - {user.isActive ? 'Active' : 'Inactive'}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => editUser(user)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-400 transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Edit
              </button>
              {user.role !== 'Superadmin' && (
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500 transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              )}
              <button
                onClick={() => toggleActivation(user.id)}
                className={`px-3 py-1 rounded-lg text-white ${
                  user.isActive ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'
                } transition duration-200 shadow-sm focus:outline-none focus:ring-2 ${
                  user.isActive ? 'focus:ring-red-500' : 'focus:ring-green-500'
                }`}
              >
                {user.isActive ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* User Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content bg-gray-800 text-white p-8 rounded-lg max-w-lg mx-auto shadow-lg"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h3 className="text-2xl mb-4 font-semibold">{isEditing ? 'Edit User' : 'Add User'}</h3>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={userForm.name}
          onChange={handleChange}
          className="px-4 py-2 mb-3 w-full rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {!userForm.name.trim() && <p className="text-red-400 text-sm mb-3">User name cannot be empty.</p>}

        <select
          name="role"
          value={userForm.role}
          onChange={handleChange}
          className="px-4 py-2 mb-3 w-full rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Learner">Learner</option>
          <option value="Admin">Admin</option>
          <option value="Superadmin">Superadmin</option>
        </select>
        
        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={addUser}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isEditing ? 'Update User' : 'Add User'}
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UserManagement;
