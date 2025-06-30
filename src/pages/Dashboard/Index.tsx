import React from 'react';
import { Link } from 'react-router-dom';

const DashboardIndex = () => (
  <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow">
    <h1 className="text-3xl font-bold mb-4 text-blue-700">Welcome to your Dashboard!</h1>
    <p className="text-gray-700 mb-6">Manage your messages and account here.</p>
    <Link to="/dashboard/messages" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Go to Messages</Link>
  </div>
);

export default DashboardIndex; 