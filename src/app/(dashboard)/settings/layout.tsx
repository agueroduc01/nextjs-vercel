'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type SettingsLayoutProps = {
  children: ReactNode;
};

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (giống Dashboard layout) */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 rounded bg-blue-100 font-semibold"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="mt-auto text-gray-500 text-sm">
          &copy; 2025 My App
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header riêng cho Settings */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            ⚙️ Account Settings
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your account information, preferences, and security.
          </p>
        </header>

        {/* Content của các page con */}
        <section className="bg-white shadow rounded-lg p-6">{children}</section>
      </main>
    </div>
  );
}
