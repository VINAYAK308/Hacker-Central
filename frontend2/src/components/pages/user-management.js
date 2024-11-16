// import React, { useState } from "react";

// const UserManagement = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   ]);
//   const [newUser, setNewUser] = useState({ name: "", email: "" });

//   const handleAddUser = () => {
//     if (newUser.name && newUser.email) {
//       const id = users.length ? users[users.length - 1].id + 1 : 1;
//       setUsers([...users, { id, ...newUser }]);
//       setNewUser({ name: "", email: "" });
//     }
//   };

//   const handleDeleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">User Management</h2>

//       <div className="space-y-4">
//         <div className="space-y-2">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-2 bg-gray-800 rounded"
//             value={newUser.name}
//             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 bg-gray-800 rounded"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           />
//           <button
//             onClick={handleAddUser}
//             className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
//           >
//             Add User
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {users.map((user) => (
//             <li key={user.id} className="flex justify-between items-center bg-gray-800 p-2 rounded">
//               <span>{user.name} - {user.email}</span>
//               <button
//                 onClick={() => handleDeleteUser(user.id)}
//                 className="px-2 py-1 bg-red-600 rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Amit Sharma", email: "amit.sharma@example.com", role: "Student" },
    { id: 2, name: "Priya Patel", email: "priya.patel@example.com", role: "Student" },
    { id: 3, name: "Rajesh Kumar", email: "rajesh.kumar@example.com", role: "Student" },
    { id: 4, name: "Anjali Mehta", email: "anjali.mehta@example.com", role: "Student" },
    { id: 5, name: "Vikram Desai", email: "vikram.desai@example.com", role: "Student" },
    { id: 6, name: "Neha Verma", email: "neha.verma@example.com", role: "Student" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEditing, setIsEditing] = useState(null); // ID of the user being edited
  const [editingUser, setEditingUser] = useState({ name: "", email: "" });

  // Message timeout
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Email validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle Add User
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      setMessage("Please fill in all fields.");
      setIsError(true);
      return;
    }
    if (!validateEmail(newUser.email)) {
      setMessage("Please enter a valid email.");
      setIsError(true);
      return;
    }
    if (users.some(user => user.email === newUser.email)) {
      setMessage("User with this email already exists.");
      setIsError(true);
      return;
    }

    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id, ...newUser, role: "Student" }]);
    setNewUser({ name: "", email: "" });
    setMessage("User added successfully!");
    setIsError(false);
  };

  // Handle Edit User
  const handleEditUser = (user) => {
    setIsEditing(user.id);
    setEditingUser({ name: user.name, email: user.email });
  };

  // Handle Save User after Editing
  const handleSaveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === isEditing ? { id: user.id, ...editingUser, role: "Student" } : user
    );
    setUsers(updatedUsers);
    setIsEditing(null);
    setMessage("User updated successfully!");
    setIsError(false);
  };

  // Handle Delete User
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setMessage("User deleted successfully!");
  };

  // Search users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>

      {message && (
        <div className={`mb-4 p-2 rounded ${isError ? "bg-red-600" : "bg-green-600"} text-white`}>
          {message}
        </div>
      )}

      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full mb-4 p-2 bg-gray-800 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 bg-gray-800 rounded"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-800 rounded"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button
            onClick={handleAddUser}
            className={`px-4 py-2 rounded ${!newUser.name || !newUser.email ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={!newUser.name || !newUser.email}
          >
            Add User
          </button>
        </div>

        <ul className="space-y-2">
          <AnimatePresence>
            {filteredUsers.map((user) => (
              <motion.li
                key={user.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-between items-center bg-gray-800 p-2 rounded"
              >
                {isEditing === user.id ? (
                  <>
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                      className="w-full p-2 bg-gray-700 rounded"
                    />
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                      className="w-full p-2 bg-gray-700 rounded"
                    />
                    <button
                      onClick={handleSaveUser}
                      className="bg-green-600 px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-lg font-semibold">{user.name}</p>
                      <p>{user.email}</p>
                      <p className="text-sm text-gray-400">Role: Student</p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="bg-yellow-600 px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="bg-red-600 px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
