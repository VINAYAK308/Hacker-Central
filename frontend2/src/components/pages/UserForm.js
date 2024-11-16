import React from 'react';

const UserForms = ({ type }) => {
  return (
    <div className="mt-6">
      {type === 'new' && (
        <div>
          <h2 className="text-xl font-bold mb-4">New User Registration</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
          </form>
        </div>
      )}
      {type === 'existing' && (
        <div>
          <h2 className="text-xl font-bold mb-4">Existing User Sign In</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForms;
