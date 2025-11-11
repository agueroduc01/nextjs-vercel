'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('Duc Nguyen');
  const [email, setEmail] = useState('duc@example.com');
  const [theme, setTheme] = useState('light');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved!');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          ⚙️ Account Settings
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
